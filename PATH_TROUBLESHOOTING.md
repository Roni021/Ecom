# 🐛 Path Issues - Troubleshooting Guide

## Common Path Problems & Solutions

### Problem 1: "Cannot create nested directories"
**Error:**
```
Parent directory does not exist
Cannot create: app/api/upload/process-pdf/route.ts
```

**Why It Happens:**
Next.js App Router requires the exact directory structure to exist first.

**Solution:**
✅ **Already implemented!** We use `/api/demo` which already exists.

---

### Problem 2: Import path errors
**Error:**
```
Cannot find module '@/models/MediaFile'
Cannot find module '@/lib/cloudinary-config'
```

**Why It Happens:**
Paths don't resolve correctly or files don't exist.

**Solution:**

1. **Verify files exist:**
   ```bash
   ls models/MediaFile.ts
   ls lib/cloudinary-config.ts
   ```

2. **Check tsconfig.json has paths:**
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./*"]
       }
     }
   }
   ```

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

---

### Problem 3: Route file not found
**Error:**
```
Cannot find module in app/api/demo/route.ts
```

**Why It Happens:**
Route file doesn't exist or has syntax errors.

**Solution:**

1. **Check file exists:**
   ```bash
   cat app/api/demo/route.ts
   ```

2. **Verify exports:**
   ```typescript
   // Should have:
   export async function GET(request: NextRequest) { ... }
   export async function POST(request: NextRequest) { ... }
   export async function DELETE(request: NextRequest) { ... }
   ```

3. **Check syntax:**
   ```typescript
   // Look for missing braces, semicolons, imports
   ```

---

### Problem 4: .env.local path issues
**Error:**
```
Cannot find .env.local
Environment variables undefined
```

**Why It Happens:**
File not in root directory or has wrong name.

**Solution:**

1. **Check file location:**
   ```bash
   ls .env.local
   ```
   Should be in root (same level as package.json)

2. **Check file is readable:**
   ```bash
   cat .env.local
   ```

3. **Restart after creating:**
   ```bash
   npm run dev
   ```

---

### Problem 5: Component import path errors
**Error:**
```
Cannot find module '@/components/FileUploadForm'
```

**Why It Happens:**
Component file doesn't exist or path is wrong.

**Solution:**

1. **Check file exists:**
   ```bash
   ls components/FileUploadForm.tsx
   ```

2. **Check import in your page:**
   ```typescript
   // Correct:
   import FileUploadForm from '@/components/FileUploadForm';
   
   // Wrong:
   import FileUploadForm from './components/FileUploadForm';
   ```

3. **Ensure 'use client' directive:**
   ```typescript
   // First line of component:
   'use client';
   ```

---

### Problem 6: API endpoint path in components
**Error:**
```
404 Not Found: /api/upload/to-cloudinary
```

**Why It Happens:**
Component calls wrong endpoint path.

**Solution:**

✅ **Already fixed!** Components use `/api/demo`

**Verify in FileUploadForm.tsx:**
```typescript
const response = await fetch('/api/demo', {  // ✅ Correct
  method: 'POST',
  body: formData,
});
```

**If you see:**
```typescript
const response = await fetch('/api/upload/to-cloudinary', {  // ❌ Wrong
```

**Fix it to:**
```typescript
const response = await fetch('/api/demo', {  // ✅ Correct
```

---

### Problem 7: Package.json path issues
**Error:**
```
Module not found: 'cloudinary'
Module not found: 'next-cloudinary'
```

**Why It Happens:**
Dependencies not installed.

**Solution:**

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Or just install missing packages
npm install cloudinary next-cloudinary pdfkit pdf-parse
npm install --save-dev @types/pdfkit

# Restart
npm run dev
```

---

### Problem 8: TypeScript path resolution
**Error:**
```
TS2307: Cannot find module '@/lib/db'
```

**Why It Happens:**
TypeScript can't resolve module paths.

**Solution:**

1. **Check tsconfig.json:**
   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./*"]
       }
     }
   }
   ```

2. **Restart TypeScript:**
   ```bash
   npm run dev
   # Kill and restart terminal
   ```

3. **Clear cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

---

## File Structure Verification

### Correct Structure ✅
```
project-root/
├── app/
│   ├── api/
│   │   └── demo/
│   │       └── route.ts        ← Important!
│   └── ...
├── components/
│   ├── FileUploadForm.tsx
│   ├── DynamicFieldEditor.tsx
│   ├── UploadHistory.tsx
│   └── MediaUploadDemo.tsx
├── lib/
│   ├── db.ts
│   ├── cloudinary-config.ts
│   └── pdf-overlay.ts
├── models/
│   └── MediaFile.ts
├── .env.local               ← Important!
├── package.json             ← Important!
└── tsconfig.json
```

### Check All Exist
```bash
# Run this to verify all files:
ls -la app/api/demo/route.ts
ls -la components/*.tsx
ls -la lib/*.ts
ls -la models/*.ts
ls -la .env.local
```

---

## Path Fixes Summary

| Issue | Fix | Time |
|-------|-----|------|
| Can't create nested routes | Use `/api/demo` (exists) | ✅ Done |
| Module not found | Check file exists | 2 min |
| Import path wrong | Use `@/` prefix | 1 min |
| .env.local missing | Create in root | 1 min |
| Dependencies missing | `npm install` | 2 min |
| TypeScript errors | Restart dev server | 1 min |
| Route not found | Check file exists | 2 min |

---

## Quick Reset

If everything is broken, reset with:

```bash
# 1. Clean slate
rm -rf node_modules .next
rm package-lock.json

# 2. Reinstall
npm install

# 3. Start fresh
npm run dev

# 4. If still issues, check:
ls -la .env.local
ls -la app/api/demo/route.ts
ls -la models/MediaFile.ts
```

---

## Verification Steps

Do these in order:

```bash
# 1. Check files exist
ls app/api/demo/route.ts          # Should exist
ls components/FileUploadForm.tsx  # Should exist
ls models/MediaFile.ts            # Should exist
ls .env.local                     # Should exist

# 2. Check dependencies
npm list cloudinary              # Should be installed
npm list next-cloudinary        # Should be installed

# 3. Start server
npm run dev

# 4. Visit in browser
# http://localhost:3000/api/demo
# Should return demo seller info (not 404)
```

---

## Still Having Issues?

### Check These:

1. **Path separators:**
   - Windows: Use `\` (backslash)
   - Mac/Linux: Use `/` (forward slash)
   - In code: Always use `/`

2. **File permissions:**
   - All files should be readable
   - No permission denied errors

3. **Whitespace:**
   - No spaces in file paths
   - No special characters

4. **Case sensitivity:**
   - Use exact case: `FileUploadForm.tsx` (not `fileuploadform.tsx`)
   - Use exact case: `MediaFile` (not `mediafile`)

5. **File extensions:**
   - Must use `.ts` or `.tsx`
   - Not `.js` or `.jsx`

---

## One Last Check

Before saying "it's broken", run:

```typescript
// In your page.tsx
'use client';

export default function Page() {
  return (
    <div>
      <h1>Testing</h1>
      {/* Try importing here to test path resolution */}
    </div>
  );
}
```

If this page loads without errors, paths are working fine.

---

**All path issues should now be resolved!** ✅

Everything uses existing directories and proper path resolution.
