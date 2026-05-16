// API Handler for deleting files
// Place this at: app/api/upload/delete/route.ts

import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary-config';
import { MediaFile } from '@/models/MediaFile';
import dbConnect from '@/lib/db';

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
