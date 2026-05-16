# Cloudinary Integration Setup Guide

## Installation Instructions

### 1. Install Dependencies

All dependencies have been added to `package.json`. Run:
```bash
npm install
```

### 2. Environment Variables

The `.env.local` file has been created with Cloudinary credentials. Verify these are correctly set:

```env
CLOUDINARY_URL=cloudinary://618916132947289:XAAG38jUE0qnrVzx2b20oykI8oE@dg3aup0ll
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dg3aup0ll
CLOUDINARY_API_KEY=618916132947289
CLOUDINARY_API_SECRET=XAAG38jUE0qnrVzx2b20oykI8oE
MONGODB_URI=mongodb://localhost:27017/ecom
JWT_SECRET=your_jwt_secret_key_here
```

### 3. Create API Routes

Create the following API routes by creating the corresponding directory structures and copying the code from the handlers in `lib/`:

#### a. Create Upload Endpoint
**File:** `app/api/upload/route.ts`
```typescript
// Copy content from: lib/upload-route-handler.ts
// Make sure to import correctly and export POST
```

#### b. Create History Endpoint
**File:** `app/api/upload/history/route.ts`
```typescript
// Copy content from: lib/history-route-handler.ts
// Export GET function
```

#### c. Create Delete Endpoint
**File:** `app/api/upload/delete/route.ts`
```typescript
// Copy content from: lib/delete-route-handler.ts
// Export DELETE function
```

#### d. Create PDF Processing Endpoint
**File:** `app/api/upload/process-pdf/route.ts`
```typescript
// Copy content from: app/upload-pdf-route.ts
// Export POST function
```

### 4. Create MediaFile Model

The MongoDB model has been created at `models/MediaFile.ts`. This handles:
- File URLs and Public IDs from Cloudinary
- File type tracking (image or pdf)
- Custom field storage for PDF overlays
- User association
- Upload timestamps

### 5. Components

Three React components are ready to use:

1. **FileUploadForm** (`components/FileUploadForm.tsx`)
   - File input and preview
   - Dynamic field editor for PDFs
   - Upload handling

2. **DynamicFieldEditor** (`components/DynamicFieldEditor.tsx`)
   - Add/remove custom fields
   - Configure text, position, and font size
   - Form-based interface (no drag-drop)

3. **UploadHistory** (`components/UploadHistory.tsx`)
   - Display uploaded files with thumbnails
   - View, download, and delete functionality
   - Uses next-cloudinary CldImage for optimized images

## Usage Example

```typescript
'use client';

import FileUploadForm from '@/components/FileUploadForm';
import UploadHistory from '@/components/UploadHistory';
import { useAuth } from '@/context/AuthContext'; // or your auth context

export default function MediaPage() {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in first</div>;
  }

  return (
    <div className="space-y-8">
      <FileUploadForm 
        userId={user.id}
        onUploadSuccess={(file) => {
          console.log('Uploaded:', file);
          // Refresh history or update UI
        }}
      />
      <UploadHistory userId={user.id} />
    </div>
  );
}
```

## Features Implemented

### 1. Image Upload
- Upload images to Cloudinary
- Auto-format and auto-quality optimization
- Image preview in history

### 2. PDF Upload
- Upload PDFs to Cloudinary (stored as raw assets)
- PDF document icon display in history

### 3. PDF Customization (Before Upload)
- Add custom fields with text, position, and font size
- Form-based field editor
- Fields stored with file metadata

### 4. PDF Text Overlay (Server-Side)
- Uses pdfkit for server-side PDF generation
- Overlay custom text at specified positions
- Watermark support available

### 5. File Management
- View uploaded files
- Download files
- Delete files (removes from Cloudinary and MongoDB)
- Sort by upload date

## File Structure

```
├── app/
│   ├── api/
│   │   ├── upload/
│   │   │   ├── route.ts (NEEDS TO BE CREATED)
│   │   │   ├── history/route.ts (NEEDS TO BE CREATED)
│   │   │   ├── delete/route.ts (NEEDS TO BE CREATED)
│   │   │   └── process-pdf/route.ts (NEEDS TO BE CREATED)
│   └── [pages...]
├── components/
│   ├── FileUploadForm.tsx ✅
│   ├── DynamicFieldEditor.tsx ✅
│   └── UploadHistory.tsx ✅
├── lib/
│   ├── cloudinary-config.ts ✅
│   ├── db.ts ✅
│   ├── pdf-overlay.ts ✅
│   ├── upload-route-handler.ts (reference)
│   ├── history-route-handler.ts (reference)
│   ├── delete-route-handler.ts (reference)
├── models/
│   └── MediaFile.ts ✅
└── .env.local ✅
```

## Important Notes

1. **Next.js App Router**: This uses the App Router pattern with `app/api/` directory
2. **TypeScript**: All files are TypeScript (.ts/.tsx)
3. **Mongoose Models**: MediaFile model includes schema validation
4. **Cloudinary**: Files are organized in folders: `ecom/images/` and `ecom/pdfs/`
5. **PDF Processing**: Server-side processing using pdfkit before upload
6. **MongoDB**: Stores file metadata for history and tracking

## Troubleshooting

### "Module not found: @/lib/db-connect"
- Use `@/lib/db` instead (already exists in the project)

### "Cloudinary upload fails"
- Verify `.env.local` has correct credentials
- Check that `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is set

### "PDF overlay not working"
- Ensure pdfkit is installed: `npm install pdfkit`
- Custom fields must include: `fieldName`, `value`, `x`, `y`, `fontSize`

### "Files not appearing in history"
- Verify MongoDB connection is working
- Check user ID is being passed correctly
- Ensure user ID exists in the request context
