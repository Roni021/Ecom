// API Handler for fetching upload history
// Place this at: app/api/upload/history/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { MediaFile } from '@/models/MediaFile';
import dbConnect from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

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
  } catch (error) {
    console.error('Fetch history error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch files: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
