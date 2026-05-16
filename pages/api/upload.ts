import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import fs from 'fs';
import path from 'path';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';

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
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

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
          const filename = Date.now() + '-' + (f.originalFilename || f.newFilename || 'file');
          const dest = path.join(uploadDir, filename);
          fs.writeFileSync(dest, data);
          images.push('/uploads/' + filename);
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
