import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { MediaFile } from '@/models/MediaFile';
import cloudinary from '@/lib/cloudinary-config';
import { v2 as CloudinaryV2 } from 'cloudinary';

interface FileUploadResponse {
  public_id: string;
  secure_url: string;
  [key: string]: any;
}

// GET - Fetch demo seller info or file history
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const action = request.nextUrl.searchParams.get('action');
    
    if (action === 'history') {
      const userId = request.nextUrl.searchParams.get('userId');
      if (!userId) {
        return NextResponse.json(
          { error: 'userId is required' },
          { status: 400 }
        );
      }
      
      const files = await MediaFile.find({ userId })
        .sort({ uploadedAt: -1 })
        .lean();

      return NextResponse.json(
        {
          files: files.map((file: any) => ({
            id: file._id.toString(),
            url: file.cloudinaryUrl,
            publicId: file.cloudinaryPublicId,
            fileType: file.fileType,
            fileName: file.fileName,
            originalFileName: file.originalFileName,
            uploadedAt: file.uploadedAt,
          })),
        },
        { status: 200 }
      );
    }
    
    // Default - demo seller info
    const demo = await User.findOne({ email: 'demo@seller.local' });
    if (!demo) {
      return NextResponse.json({ error: 'Demo seller not found' }, { status: 404 });
    }
    return NextResponse.json({ demoSellerId: demo._id.toString(), email: demo.email });
  } catch (error: any) {
    console.error('Demo GET error:', error);
    return NextResponse.json({ error: error.message || 'Failed' }, { status: 500 });
  }
}

// POST - Upload file to Cloudinary
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

// DELETE - Delete file from Cloudinary and MongoDB
export async function DELETE(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { fileId, publicId } = body;

    if (!fileId || !publicId) {
      return NextResponse.json(
        { error: 'fileId and publicId are required' },
        { status: 400 }
      );
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId, {
      resource_type: 'auto',
    });

    // Delete from MongoDB
    await MediaFile.findByIdAndDelete(fileId);

    return NextResponse.json(
      { message: 'File deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete file: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
