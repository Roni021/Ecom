import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import fs from 'fs';
import path from 'path';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';
import { v2 as cloudinary } from 'cloudinary';
import CloudFile from '@/models/CloudFile';

cloudinary.config({ cloudinary_url: process.env.CLOUDINARY_URL });

function uploadBufferToCloudinary(buffer: Buffer, options: any = {}) {
  return new Promise<any>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
    stream.end(buffer);
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseTemplateFields(input: string) {
  if (!input) return [];
  return input.split('\n').map((line) => {
    const parts = line.split(':').map((p) => p.trim());
    return {
      name: parts[0] || '',
      type: parts[1] || 'string',
      required: parts[2] === 'true',
      description: parts[3] || '',
    };
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error', err);
      return res.status(500).json({ error: 'Failed to parse form' });
    }

    try {
      await dbConnect();

      const images: string[] = [];
      const fileField = files.files as File | File[] | undefined;
      if (fileField) {
        const fileArray = Array.isArray(fileField) ? fileField : [fileField];
        for (const f of fileArray) {
          const data = fs.readFileSync(f.filepath);
          const mime = f.mimetype || '';

          // choose resource type
          const isPdf = mime.includes('pdf') || (f.originalFilename || '').toLowerCase().endsWith('.pdf');
          const resourceType = isPdf ? 'raw' : 'image';

          const uploadResult = await uploadBufferToCloudinary(Buffer.from(data), {
            resource_type: resourceType,
            folder: 'uploads',
          });

          const url = uploadResult.secure_url || uploadResult.url;
          if (url) images.push(url);

          // save CloudFile record
          await CloudFile.create({
            url: url,
            public_id: uploadResult.public_id,
            fileType: isPdf ? 'pdf' : 'image',
          });
        }
      }

      const productData: any = {
        title: String(fields.title || ''),
        description: String(fields.description || ''),
        price: Number(fields.price || 0),
        originalPrice: Number(fields.originalPrice || 0),
        category: String(fields.category || ''),
        images,
        tags: String(fields.tags || '').split(',').map((s: string) => s.trim()).filter(Boolean),
        fileFormats: String(fields.fileFormats || '').split(',').map((s: string) => s.trim()).filter(Boolean),
        license: String(fields.license || 'personal'),
        templateType: String(fields.templateType || 'other'),
        templateFields: parseTemplateFields(String(fields.templateFields || '')),
      };

      if (fields.seller) {
        productData.seller = fields.seller;
      }

      const product = await Product.create(productData);

      return res.status(201).json({ product, message: 'Product created' });
    } catch (error: any) {
      console.error('Upload handler error', error);
      return res.status(500).json({ error: error.message || 'Upload failed' });
    }
  });
}
