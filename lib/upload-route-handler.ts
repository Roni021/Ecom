// API Handler for uploading files to Cloudinary
// Place this at: app/api/upload/route.ts

import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary-config';
import { MediaFile } from '@/models/MediaFile';
import dbConnect from '@/lib/db';
import { v2 as CloudinaryV2 } from 'cloudinary';

interface FileUploadResponse {
  public_id: string;
  secure_url: string;
  [key: string]: any;
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const userId = formData.get('userId') as string;
    const customFieldsStr = formData.get('customFields') as string;
    const fileType = formData.get('fileType') as 'image' | 'pdf';

    if (!file || !userId) {
      return NextResponse.json(
        { error: 'File and userId are required' },
        { status: 400 }
      );
    }

    if (!['image', 'pdf'].includes(fileType)) {
      return NextResponse.json(
        { error: 'File type must be image or pdf' },
        { status: 400 }
      );
    }

    const buffer = await file.arrayBuffer();
    const fileName = `${Date.now()}-${file.name}`;

    // Upload to Cloudinary
    const uploadResponse = await new Promise<FileUploadResponse>(
      (resolve, reject) => {
        const stream = CloudinaryV2.uploader.upload_stream(
          {
            resource_type: fileType === 'pdf' ? 'raw' : 'auto',
            public_id: fileName.split('.')[0],
            folder: `ecom/${fileType}s`,
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result as FileUploadResponse);
          }
        );

        stream.end(Buffer.from(buffer));
      }
    );

    // Parse custom fields if provided
    let customFields = [];
    if (customFieldsStr) {
      try {
        customFields = JSON.parse(customFieldsStr);
      } catch (e) {
        console.warn('Failed to parse custom fields:', e);
      }
    }

    // Save to MongoDB
    const mediaFile = new MediaFile({
      userId,
      fileName,
      originalFileName: file.name,
      cloudinaryUrl: uploadResponse.secure_url,
      cloudinaryPublicId: uploadResponse.public_id,
      fileType,
      fileSize: file.size,
      customFields,
    });

    await mediaFile.save();

    return NextResponse.json(
      {
        message: 'File uploaded successfully',
        file: {
          id: mediaFile._id,
          url: uploadResponse.secure_url,
          publicId: uploadResponse.public_id,
          fileType,
          fileName,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
