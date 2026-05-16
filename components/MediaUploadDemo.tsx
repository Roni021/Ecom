'use client';

import React, { useState, useEffect } from 'react';
import FileUploadForm from '@/components/FileUploadForm';
import UploadHistory from '@/components/UploadHistory';

/**
 * Demo Media Upload Page
 * Shows how to use the FileUploadForm and UploadHistory components
 * 
 * Usage: Import this page or components separately in your app
 * 
 * Replace userId with actual authenticated user ID from your auth system
 */
export default function MediaUploadDemo() {
  const [userId, setUserId] = useState<string | null>(null);
  const [uploadCount, setUploadCount] = useState(0);

  useEffect(() => {
    // Get userId from local storage or your auth context
    // This is a demo - replace with your actual auth implementation
    const demoUserId = localStorage.getItem('userId') || 'demo-user-1';
    setUserId(demoUserId);
  }, []);

  const handleUploadSuccess = (file: any) => {
    console.log('File uploaded successfully:', file);
    setUploadCount((prev) => prev + 1);
    // Optionally show a toast notification or refresh the history
  };

  if (!userId) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Media Upload Manager
          </h1>
          <p className="text-xl text-gray-600">
            Upload, customize, and manage your images and PDF documents
          </p>
        </div>

        {/* Upload Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <FileUploadForm 
            userId={userId}
            onUploadSuccess={handleUploadSuccess}
          />
        </div>

        {/* Upload History Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Upload History</h2>
            {uploadCount > 0 && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {uploadCount} new upload{uploadCount > 1 ? 's' : ''}
              </span>
            )}
          </div>
          <UploadHistory userId={userId} key={uploadCount} />
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-4">📸</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Image Upload
            </h3>
            <p className="text-gray-600 text-sm">
              Upload and manage images with automatic optimization and formatting.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              PDF Upload
            </h3>
            <p className="text-gray-600 text-sm">
              Upload PDF documents and customize them with dynamic text fields.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-4">✏️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              PDF Customization
            </h3>
            <p className="text-gray-600 text-sm">
              Add custom text fields with position and font size control.
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-12">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            📋 How to Use
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
            <li>Select an image or PDF file to upload</li>
            <li>For PDFs, add custom fields (name, date, text, etc.)</li>
            <li>Configure field positions and font sizes</li>
            <li>Click "Upload File" to send to Cloudinary</li>
            <li>View, download, or delete files in the Upload History</li>
          </ol>
        </div>

        {/* Technical Details */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            🔧 Technical Details
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>
              <strong>Backend:</strong> Next.js API routes with Cloudinary SDK
            </li>
            <li>
              <strong>PDF Processing:</strong> Server-side using pdfkit
            </li>
            <li>
              <strong>Storage:</strong> Cloudinary (CDN) + MongoDB (metadata)
            </li>
            <li>
              <strong>Image Optimization:</strong> Automatic via Cloudinary
            </li>
            <li>
              <strong>File Organization:</strong> Organized in ecom/images/ and
              ecom/pdfs/
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
