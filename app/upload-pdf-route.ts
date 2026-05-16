import { NextRequest, NextResponse } from 'next/server';
import { overlayTextOnPDF } from '@/lib/pdf-overlay';
import { CustomField } from '@/models/MediaFile';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const pdfFile = formData.get('pdf') as File;
    const customFieldsStr = formData.get('customFields') as string;

    if (!pdfFile) {
      return NextResponse.json({ error: 'PDF file is required' }, { status: 400 });
    }

    if (pdfFile.type !== 'application/pdf') {
      return NextResponse.json({ error: 'File must be a PDF' }, { status: 400 });
    }

    const pdfBuffer = await pdfFile.arrayBuffer();
    let customFields: CustomField[] = [];

    if (customFieldsStr) {
      try {
        customFields = JSON.parse(customFieldsStr);
      } catch {
        return NextResponse.json(
          { error: 'Invalid custom fields JSON' },
          { status: 400 }
        );
      }
    }

    // Apply text overlay to PDF
    const modifiedPdfBuffer = await overlayTextOnPDF(
      Buffer.from(pdfBuffer),
      customFields
    );

    // Return the modified PDF as a blob
    return new NextResponse(modifiedPdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="modified-${pdfFile.name}"`,
      },
    });
  } catch (error) {
    console.error('PDF processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process PDF: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
