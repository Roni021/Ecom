'use client';

import React, { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';

interface UploadedFile {
  id: string;
  url: string;
  publicId: string;
  fileType: 'image' | 'pdf';
  fileName: string;
  originalFileName: string;
  uploadedAt?: string;
}

interface UploadHistoryProps {
  userId: string;
}

export default function UploadHistory({ userId }: UploadHistoryProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFiles();
  }, [userId]);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/demo?action=history&userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }
      const data = await response.json();
      setFiles(data.files || []);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (fileId: string, publicId: string) => {
    if (!confirm('Are you sure you want to delete this file?')) return;

    try {
      const response = await fetch(`/api/demo?action=delete`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileId, publicId }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete file');
      }

      setFiles(files.filter((f) => f.id !== fileId));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Loading files...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8 p-4 bg-red-100 text-red-700 rounded-md">
        Error: {error}
      </div>
    );
  }

  if (files.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No files uploaded yet.</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload History</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file) => (
          <div
            key={file.id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            {/* Thumbnail */}
            <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
              {file.fileType === 'image' ? (
                <CldImage
                  src={file.publicId}
                  width="300"
                  height="200"
                  alt={file.originalFileName}
                  crop={{ type: 'fill' }}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-2">📄</div>
                  <div className="text-sm text-gray-600">PDF Document</div>
                </div>
              )}
            </div>

            {/* File Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 truncate mb-2">
                {file.originalFileName}
              </h3>
              <p className="text-xs text-gray-600 mb-2">
                Type: <span className="font-medium">{file.fileType}</span>
              </p>
              {file.uploadedAt && (
                <p className="text-xs text-gray-600 mb-4">
                  Uploaded: {new Date(file.uploadedAt).toLocaleDateString()}
                </p>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm text-center transition duration-200"
                >
                  View
                </a>
                <a
                  href={file.url}
                  download={file.originalFileName}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded text-sm text-center transition duration-200"
                >
                  Download
                </a>
                <button
                  onClick={() => handleDelete(file.id, file.publicId)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-sm transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
