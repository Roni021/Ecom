# Technical Reference - Cloudinary Integration

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     User Browser                             │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  React Components (Client-Side)                        │ │
│  │  ├── FileUploadForm                                    │ │
│  │  ├── DynamicFieldEditor                                │ │
│  │  └── UploadHistory                                     │ │
│  └────────────────────────────────────────────────────────┘ │
└────────────────────────────┬────────────────────────────────┘
                             │
                      HTTP Request
                             │
         ┌───────────────────┴───────────────────┐
         ▼                                       ▼
    ┌─────────────────┐              ┌──────────────────┐
    │  Next.js Server │              │   Cloudinary    │
    │                 │              │   CDN            │
    │  /api/demo      │─────────────▶│  Upload Storage  │
    │  (POST/GET/DEL) │◀─────────────│                  │
    └────────┬────────┘              └──────────────────┘
             │
             │ Save Metadata
             ▼
    ┌──────────────────┐
    │   MongoDB        │
    │   MediaFile      │
    │   Collections    │
    └──────────────────┘
```

## Data Flow

### Upload Flow
```
1. User selects file
   └─ FileUploadForm.tsx (Component)

2. User adds PDF fields (if PDF)
   └─ DynamicFieldEditor.tsx (Component)

3. Form submission
   └─ FormData with file + fields
   └─ POST /api/demo

4. Server processes
   └─ app/api/demo/route.ts (Handler)
   └─ Validate file type
   └─ Parse custom fields

5. Upload to Cloudinary
   └─ cloudinary.uploader.upload_stream()
   └─ Resource type: 'raw' (PDF) or 'auto' (image)
   └─ Folder: ecom/images/ or ecom/pdfs/
   └─ Returns: { public_id, secure_url }

6. Save to MongoDB
   └─ MediaFile.create()
   └─ Store: URL, publicId, fileType, customFields
   └─ Link: userId

7. Return to client
   └─ { file: { id, url, publicId, fileType } }

8. Display in history
   └─ UploadHistory.tsx (Component)
   └─ Fetch: GET /api/demo?action=history&userId=X
```

### Delete Flow
```
1. User clicks delete
   └─ UploadHistory.tsx (Component)

2. Confirm deletion
   └─ User confirms action

3. Delete request
   └─ DELETE /api/demo
   └─ { fileId, publicId }

4. Delete from Cloudinary
   └─ cloudinary.uploader.destroy(publicId)

5. Delete from MongoDB
   └─ MediaFile.findByIdAndDelete(fileId)

6. Update UI
   └─ Remove from history list
```

## Component Details

### FileUploadForm
```typescript
// Props
interface FileUploadFormProps {
  userId: string;              // Required: user ID
  onUploadSuccess?: (file: any) => void;  // Optional callback
}

// State
- file: File | null            // Selected file
- fileType: 'image' | 'pdf'   // Detected type
- customFields: CustomField[]  // PDF fields
- loading: boolean             // Upload in progress
- error: string | null         // Error message
- preview: string | null       // Image preview

// Methods
- handleFileChange()           // File selection
- handleUpload()              // Upload submission
```

### DynamicFieldEditor
```typescript
// Props
interface DynamicFieldEditorProps {
  fields: CustomField[];
  onFieldsChange: (fields: CustomField[]) => void;
}

// Custom Field Structure
interface CustomField {
  fieldName: string;    // e.g., "Customer Name"
  value: string;        // e.g., "John Doe"
  x?: number;           // X position (default: 50)
  y?: number;           // Y position (default: varies)
  fontSize?: number;    // Font size (default: 12)
}

// Methods
- handleAddField()     // Add new field
- handleRemoveField()  // Delete field
- handleFieldChange()  // Update field property
```

### UploadHistory
```typescript
// Props
interface UploadHistoryProps {
  userId: string;  // Required: user ID
}

// State
- files: UploadedFile[]   // List of files
- loading: boolean        // Fetching status
- error: string | null    // Error message

// Uploaded File Structure
interface UploadedFile {
  id: string;
  url: string;
  publicId: string;
  fileType: 'image' | 'pdf';
  fileName: string;
  originalFileName: string;
  uploadedAt?: string;
}

// Methods
- fetchFiles()       // Load file history
- handleDelete()     // Delete file
```

## API Specification

### Endpoint: `/api/demo`

#### POST - Upload File
```
Method: POST
Path: /api/demo

Request:
  Content-Type: multipart/form-data
  - file: File
  - userId: string
  - fileType: 'image' | 'pdf'
  - customFields: JSON string (optional)

Response (200):
  {
    message: "File uploaded successfully",
    file: {
      id: "mongodb-id",
      url: "https://res.cloudinary.com/.../image.jpg",
      publicId: "ecom/images/1234567890-filename",
      fileType: "image",
      fileName: "1234567890-filename.jpg"
    }
  }

Error (400/500):
  {
    error: "Error message"
  }
```

#### GET - Fetch History
```
Method: GET
Path: /api/demo?action=history&userId={userId}

Query Parameters:
  - action: 'history' (required for history fetch)
  - userId: string (required)

Response (200):
  {
    files: [
      {
        id: "mongodb-id",
        url: "https://res.cloudinary.com/...",
        publicId: "ecom/images/filename",
        fileType: "image",
        fileName: "filename.jpg",
        originalFileName: "my-image.jpg",
        uploadedAt: "2024-05-16T10:30:00Z"
      },
      ...
    ]
  }

Error (400/500):
  {
    error: "Error message"
  }
```

#### DELETE - Delete File
```
Method: DELETE
Path: /api/demo

Request:
  Content-Type: application/json
  {
    fileId: "mongodb-id",
    publicId: "ecom/images/filename"
  }

Response (200):
  {
    message: "File deleted successfully"
  }

Error (400/500):
  {
    error: "Error message"
  }
```

## Model Schema

### MediaFile (MongoDB)
```typescript
{
  _id: ObjectId,
  userId: ObjectId,                // ref: 'User'
  fileName: string,                 // "1234567890-file.pdf"
  originalFileName: string,         // "document.pdf"
  cloudinaryUrl: string,            // https://...
  cloudinaryPublicId: string,       // "ecom/pdfs/1234567890-file"
  fileType: {
    type: String,
    enum: ['image', 'pdf']
  },
  fileSize: number,                 // bytes
  customFields: [
    {
      fieldName: string,
      value: string,
      x: { type: Number, default: 50 },
      y: { type: Number, default: 50 },
      fontSize: { type: Number, default: 12 }
    }
  ],
  createdAt: Date,
  updatedAt: Date
}
```

## Configuration

### Environment Variables (.env.local)
```env
# Cloudinary API
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dg3aup0ll
CLOUDINARY_API_KEY=618916132947289
CLOUDINARY_API_SECRET=XAAG38jUE0qnrVzx2b20oykI8oE

# MongoDB
MONGODB_URI=mongodb://localhost:27017/ecom

# JWT
JWT_SECRET=your_jwt_secret_key_here
```

### Cloudinary Setup (lib/cloudinary-config.ts)
```typescript
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
```

## Error Handling

### Client-Side (Components)
```typescript
try {
  const response = await fetch('/api/demo', { ... });
  
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Upload failed');
  }
  
  // Process success
} catch (error) {
  // Display error to user
  setError((error as Error).message);
}
```

### Server-Side (API Route)
```typescript
try {
  // Validate inputs
  if (!file || !userId) {
    return NextResponse.json(
      { error: 'File and userId are required' },
      { status: 400 }
    );
  }
  
  // Process request
  // ...
  
  return NextResponse.json({ ... }, { status: 200 });
} catch (error) {
  console.error('Error:', error);
  return NextResponse.json(
    { error: (error as Error).message },
    { status: 500 }
  );
}
```

## Performance Considerations

### Image Optimization
- Cloudinary auto-formats to WebP/AVIF
- Auto-quality based on device
- next-cloudinary handles responsive sizes

### PDF Handling
- PDFs stored as raw assets
- No automatic processing
- Server-side overlay (pdfkit) is optional

### Database Queries
- Lean queries for read-only operations
- Indexed by userId for fast retrieval
- Sorted by uploadedAt (desc) for chronological display

### Caching Strategy
- Next.js caches GET responses (default)
- Disable with: `no-store` in fetch headers
- Implement page-level revalidation if needed

## Security Considerations

### Current Implementation
✅ File type validation (MIME type check)
✅ MongoDB ObjectId validation
✅ Cloudinary public_id validation
✅ UserID parameter validation

### Recommended Additions
⚠️ JWT token validation in all requests
⚠️ File size limit enforcement
⚠️ Virus/malware scanning integration
⚠️ Rate limiting on uploads
⚠️ File access control per user
⚠️ Signed URLs for CDN delivery

## Testing Guide

### Unit Testing
```typescript
// Test FileUploadForm
- Should handle file selection
- Should validate file type
- Should show error on invalid file
- Should submit form with correct data

// Test DynamicFieldEditor
- Should add new field
- Should remove field
- Should update field values
- Should maintain field order
```

### Integration Testing
```
// API Routes
- POST /api/demo should upload file
- GET /api/demo?action=history should return files
- DELETE /api/demo should delete file
- Should handle validation errors
- Should handle DB errors
- Should handle Cloudinary errors
```

### Manual Testing Checklist
- [ ] Upload image (check Cloudinary dashboard)
- [ ] Upload PDF (check Cloudinary dashboard)
- [ ] Add PDF fields (check MongoDB storage)
- [ ] Fetch history (verify correct files returned)
- [ ] Download file (verify download works)
- [ ] Delete file (verify removal from Cloudinary & MongoDB)
- [ ] Check user isolation (files only for correct user)

## Deployment Considerations

### Environment Setup
- Set production Cloudinary credentials
- Use production MongoDB URI
- Generate strong JWT_SECRET

### Performance Tuning
- Enable CDN caching for static assets
- Implement request throttling
- Monitor API response times

### Monitoring
- Log all upload events
- Track file sizes
- Monitor storage usage
- Alert on errors

---

**Last Updated**: 2024-05-16  
**Version**: 1.0  
**Status**: Production Ready
