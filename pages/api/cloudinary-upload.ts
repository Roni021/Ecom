import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import fs from 'fs';
import dbConnect from '@/lib/db';
import CloudFile from '@/models/CloudFile';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { v2 as cloudinary } from 'cloudinary';

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

function parseOverlay(input: any) {
  if (!input) return {};
  try {
    if (typeof input === 'string') return JSON.parse(input);
    return input;
  } catch (e) {
    return {};
  }
}

function uploadBufferToCloudinary(buffer: Buffer, options: any = {}) {
  return new Promise<any>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
    stream.end(buffer);
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

      const fileField = files.file as File | File[] | undefined;
      if (!fileField) return res.status(400).json({ error: 'No file uploaded' });

      const fileArray = Array.isArray(fileField) ? fileField : [fileField];
      const saved: any[] = [];

      for (const f of fileArray) {
        const data = fs.readFileSync(f.filepath);
        const mime = f.mimetype || '';
        let bufferToUpload = data;
        let resourceType: any = 'image';

        if (mime.includes('pdf') || (f.originalFilename || '').toLowerCase().endsWith('.pdf')) {
          resourceType = 'raw';
          const overlay = parseOverlay(fields.overlay || fields.overlayFields || fields.overlayJson);

          if (overlay && Object.keys(overlay).length > 0) {
            const pdfDoc = await PDFDocument.load(data);
            const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
            const pages = pdfDoc.getPages();
            for (const page of pages) {
              const { width, height } = page.getSize();
              let idx = 0;
              for (const [key, value] of Object.entries(overlay)) {
                const text = `${key}: ${value}`;
                const x = 50;
                const y = height - 50 - idx * 18;
                page.drawText(text, {
                  x,
                  y,
                  size: 12,
                  font,
                  color: undefined,
                });
                idx++;
              }
            }
            const modified = await pdfDoc.save();
            bufferToUpload = Buffer.from(modified);
          }
        }

        const uploadResult = await uploadBufferToCloudinary(bufferToUpload, {
          resource_type: resourceType,
          folder: 'uploads',
        });

        const record = await CloudFile.create({
          url: uploadResult.secure_url || uploadResult.url,
          public_id: uploadResult.public_id,
          fileType: mime.includes('pdf') || (f.originalFilename || '').toLowerCase().endsWith('.pdf') ? 'pdf' : 'image',
        });

        saved.push({ record, uploadResult });
      }

      return res.status(201).json({ saved, message: 'Uploaded to Cloudinary and saved to DB' });
    } catch (error: any) {
      console.error('Cloudinary upload error', error);
      return res.status(500).json({ error: error.message || 'Upload failed' });
    }
  });
}
