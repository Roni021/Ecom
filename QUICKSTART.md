# 🚀 Cloudinary Integration - Quick Start

## What You Get

✅ Image & PDF upload to Cloudinary  
✅ PDF field customization (name, date, text)  
✅ MongoDB storage of file metadata  
✅ File history with thumbnails  
✅ Download & delete capabilities  

## Installation (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Verify Environment
Check `.env.local` has these set:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dg3aup0ll
CLOUDINARY_API_KEY=618916132947289
CLOUDINARY_API_SECRET=XAAG38jUE0qnrVzx2b20oykI8oE
MONGODB_URI=mongodb://localhost:27017/ecom
```

### 3. Start Your App
```bash
npm run dev
```

## Basic Usage

### Option 1: Use the Demo Component
```typescript
import MediaUploadDemo from '@/components/MediaUploadDemo';

export default function Page() {
  return <MediaUploadDemo />;
}
```

### Option 2: Use Individual Components
```typescript
'use client';
import FileUploadForm from '@/components/FileUploadForm';
import UploadHistory from '@/components/UploadHistory';

export default function Page() {
  const userId = 'user-123'; // from your auth
  
  return (
    <>
      <FileUploadForm userId={userId} />
      <UploadHistory userId={userId} />
    </>
  );
}
```

## File Upload Flow

```
1. User selects image or PDF
   ↓
2. If PDF: Can add custom fields (optional)
   - Field name
   - Text value
   - Position (X, Y)
   - Font size
   ↓
3. Click "Upload"
   ↓
4. File goes to Cloudinary
   ↓
5. Metadata saved to MongoDB
   ↓
6. Appears in upload history
```

## Components Reference

### FileUploadForm
```typescript
<FileUploadForm 
  userId="user-123"
  onUploadSuccess={(file) => {
    console.log('Uploaded:', file);
  }}
/>
```

**Props:**
- `userId` (required): User identifier
- `onUploadSuccess` (optional): Callback after successful upload

**Features:**
- Image/PDF file selector
- Image preview
- PDF field editor (for PDFs only)
- Upload progress

### UploadHistory
```typescript
<UploadHistory userId="user-123" />
```

**Props:**
- `userId` (required): User identifier

**Features:**
- Lists all user's uploaded files
- Thumbnails for images
- PDF icon for documents
- View/Download/Delete buttons
- Sorted by upload date

### DynamicFieldEditor
(Used within FileUploadForm for PDFs)

**Features:**
- Add/remove fields
- Edit field name, value, position, font size
- Form-based interface
- No drag-and-drop needed

## API Endpoints

All routes use: `/api/demo`

### Upload File
```bash
POST /api/demo
Content-Type: multipart/form-data

file: [File]
userId: string
fileType: 'image' | 'pdf'
customFields: JSON (optional)
```

### Get History
```bash
GET /api/demo?action=history&userId=user-123
```

### Delete File
```bash
DELETE /api/demo
Content-Type: application/json

{
  fileId: string,
  publicId: string
}
```

## Database

### MediaFile Schema
```typescript
{
  userId: string,           // Links to user
  fileName: string,         // Generated name
  originalFileName: string, // User's filename
  cloudinaryUrl: string,    // Download URL
  cloudinaryPublicId: string, // Cloudinary ID
  fileType: 'image' | 'pdf', // File type
  fileSize: number,         // Size in bytes
  customFields: [           // PDF fields (optional)
    {
      fieldName: string,
      value: string,
      x: number,
      y: number,
      fontSize: number
    }
  ],
  uploadedAt: date,         // Timestamp
  updatedAt: date
}
```

## Example: Complete Page

```typescript
'use client';

import { useState } from 'react';
import FileUploadForm from '@/components/FileUploadForm';
import UploadHistory from '@/components/UploadHistory';

export default function MediaPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const userId = 'demo-user-1'; // Replace with actual user ID

  const handleUploadSuccess = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">My Media</h1>
      
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Upload</h2>
          <FileUploadForm 
            userId={userId}
            onUploadSuccess={handleUploadSuccess}
          />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">History</h2>
          <UploadHistory userId={userId} key={refreshKey} />
        </div>
      </div>
    </div>
  );
}
```

## PDF Customization Example

When uploading a PDF, you can add fields:

```
Field Name: Customer Name
Value: John Doe
X: 50px
Y: 100px
Font Size: 12

Field Name: Invoice Number
Value: INV-2024-001
X: 50px
Y: 140px
Font Size: 10
```

These fields will be stored with the file and displayed in history.

## Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| Cloudinary upload fails | Check credentials in .env.local |
| "userId is required" error | Pass userId prop to components |
| Files not showing in history | Verify MongoDB is running |
| Images not optimizing | Ensure next-cloudinary is installed |
| "Module not found" error | Run `npm install` again |

## Project Files

✅ **Components** (Ready to use)
- `components/FileUploadForm.tsx`
- `components/DynamicFieldEditor.tsx`
- `components/UploadHistory.tsx`
- `components/MediaUploadDemo.tsx` (Full demo)

✅ **Backend** (Ready to use)
- `app/api/demo/route.ts` (Main endpoint)
- `models/MediaFile.ts` (Database schema)
- `lib/cloudinary-config.ts` (Cloudinary setup)
- `lib/pdf-overlay.ts` (PDF processing)

✅ **Configuration** (Ready to use)
- `.env.local` (Credentials)
- `package.json` (Dependencies)

📖 **Documentation**
- `IMPLEMENTATION_GUIDE.md` (Complete guide)
- `CLOUDINARY_SETUP.md` (Setup details)
- This file (Quick start)

## Next Steps

1. ✅ Dependencies installed
2. ✅ Environment variables set
3. ✅ Components created
4. ✅ API routes ready
5. 👉 Import components into your pages
6. 👉 Test upload/download/delete
7. 👉 Integrate with your auth system

## Support

For questions about specific parts:
- **Cloudinary**: See `CLOUDINARY_SETUP.md`
- **Implementation**: See `IMPLEMENTATION_GUIDE.md`
- **Code**: Check inline comments in component files

---

**Ready to use!** Just import the components and you're good to go. 🎉
