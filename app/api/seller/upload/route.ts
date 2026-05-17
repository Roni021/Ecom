import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import dbConnect from '@/lib/db';
import Seller from '@/models/Seller';
import Product from '@/models/Product';
import CloudFile from '@/models/CloudFile';
import { v2 as cloudinary } from 'cloudinary';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_jwt_secret';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloudinary_url: process.env.CLOUDINARY_URL,
});

async function authenticateSeller(request: Request) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; role: string };
    if (decoded.role !== 'seller') return null;
    await dbConnect();
    const seller = await Seller.findById(decoded.id);
    return seller;
  } catch (error) {
    return null;
  }
}

function uploadBufferToCloudinary(buffer: Buffer, options: Record<string, any> = {}) {
  return new Promise<any>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
    stream.end(buffer);
  });
}

export async function POST(request: Request) {
  const seller = await authenticateSeller(request);
  if (!seller) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const title = formData.get('title')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    const price = Number(formData.get('price') || 0);
    const originalPrice = Number(formData.get('originalPrice') || price);
    const category = formData.get('category')?.toString() || 'website_template';
    const tags = formData.get('tags')?.toString().split(',').map(tag => tag.trim()).filter(Boolean) || [];
    const fileFormats = formData.get('fileFormats')?.toString().split(',').map(tag => tag.trim()).filter(Boolean) || [];
    const license = formData.get('license')?.toString() || 'commercial';
    const requiresDetails = formData.get('requiresDetails') === 'true';
    const overlayText = formData.get('overlayText')?.toString() || '';
    const templateType = formData.get('templateType')?.toString() || 'other';
    const templateFields = formData.get('templateFields')?.toString() || '';

    if (!file || !title || !description || !price || !category) {
      return NextResponse.json({ error: 'Missing required product or file data' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileType = file.type.startsWith('application/pdf') ? 'pdf' : 'image';
    let uploadBuffer = buffer;
    let uploadOptions: Record<string, any> = {
      resource_type: fileType === 'pdf' ? 'raw' : 'image',
      folder: 'seller_uploads',
    };

    if (fileType === 'pdf' && overlayText) {
      const pdfDoc = await PDFDocument.load(buffer);
      const pages = pdfDoc.getPages();
      const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const textColor = rgb(0.95, 0.1, 0.1);
      const fontSize = 18;

      for (const page of pages) {
        const { width, height } = page.getSize();
        page.drawText(overlayText, {
          x: 40,
          y: height - 80,
          size: fontSize,
          font,
          color: textColor,
        });
      }

      uploadBuffer = await pdfDoc.save();
    }

    const result = await uploadBufferToCloudinary(uploadBuffer, uploadOptions);

    if (!result) {
      throw new Error('Cloudinary upload failed');
    }

    const cloudFile = await CloudFile.create({
      url: result.secure_url || result.url,
      public_id: result.public_id,
      fileType,
      uploadedBy: seller._id,
      fileName: file.name,
    });

    const product = await Product.create({
      title,
      description,
      price,
      originalPrice,
      category,
      tags,
      fileFormats,
      license,
      requiresDetails,
      images: [result.secure_url || result.url],
      seller: seller._id,
      templateType,
      templateFields: templateFields
        ? templateFields.split('\n').map((line) => {
            const parts = line.split(':').map((p) => p.trim());
            return {
              name: parts[0] || '',
              type: parts[1] || 'string',
              required: parts[2] === 'true',
              description: parts[3] || '',
            };
          })
        : [],
    });

    return NextResponse.json({
      message: 'Seller product uploaded successfully',
      product,
      cloudFile,
    });
  } catch (error: any) {
    console.error('Seller upload error:', error);
    return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
  }
}
