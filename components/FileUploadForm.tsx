'use client';

import React, { useState } from 'react';
import DynamicFieldEditor from './DynamicFieldEditor';
import { CustomField } from '@/models/MediaFile';

interface FileUploadFormProps {
  userId: string;
  onUploadSuccess?: (file: any) => void;
}

export default function FileUploadForm({
  userId,
  onUploadSuccess,
}: FileUploadFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState<'image' | 'pdf'>('image');
  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);

      // Determine file type
      if (selectedFile.type.startsWith('image/')) {
        setFileType('image');
      } else if (selectedFile.type === 'application/pdf') {
        setFileType('pdf');
      } else {
        setError('Please select an image or PDF file');
        setFile(null);
        return;
      }

      // Create preview for images
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => setPreview(e.target?.result as string);
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);
      formData.append('fileType', fileType);
      if (customFields.length > 0) {
        formData.append('customFields', JSON.stringify(customFields));
      }

      const response = await fetch('/api/demo', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Upload failed');
      }

      const data = await response.json();
      if (onUploadSuccess) {
        onUploadSuccess(data.file);
      }

      // Reset form
      setFile(null);
      setCustomFields([]);
      setPreview(null);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload File</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select File (Image or PDF)
        </label>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={handleFileChange}
          disabled={loading}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 p-2"
        />
      </div>

      {preview && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preview
          </label>
          <img src={preview} alt="Preview" className="max-w-sm rounded-md" />
        </div>
      )}

      {file && fileType === 'pdf' && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            PDF Customization
          </h3>
          <DynamicFieldEditor
            fields={customFields}
            onFieldsChange={setCustomFields}
          />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        {loading ? 'Uploading...' : 'Upload File'}
      </button>
    </div>
  );
}
