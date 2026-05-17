"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const categories = [
  'ui_kits',
  'greetingscard',
  'website_template',
  'social_media_asset',
  'icons_illustration',
  'email_template',
  'celebration',
  'resume',
  'layout',
  'photos',
];

export default function UploadProductClient() {
  const router = useRouter();
  const { user, token, loading: authLoading } = useAuth();
  const [form, setForm] = useState<any>({
    title: '',
    description: '',
    price: 0,
    originalPrice: 0,
    category: categories[0],
    tags: '',
    fileFormats: '',
    license: 'personal',
    templateType: 'other',
    templateFields: '',
    requiresDetails: false,
    overlayText: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && (!user || user.role !== 'seller')) {
      router.push('/seller/login');
    }
  }, [router, user, authLoading]);

  useEffect(() => {
    if (!file) {
      setPreview('');
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  function handleChange(e: any) {
    const { name, value, type, checked } = e.target;
    setForm((prev: any) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!file || !form.title || !form.description || !form.price) {
      setError('Please provide all required fields and upload a file.');
      return;
    }

    if (!token) {
      setError('Seller authentication is required.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('price', String(Number(form.price) || 0));
    formData.append('originalPrice', String(Number(form.originalPrice) || form.price));
    formData.append('category', form.category);
    formData.append('tags', form.tags || '');
    formData.append('fileFormats', form.fileFormats || '');
    formData.append('license', form.license);
    formData.append('templateType', form.templateType);
    formData.append('templateFields', form.templateFields || '');
    formData.append('requiresDetails', String(form.requiresDetails));
    formData.append('overlayText', form.overlayText || '');
    formData.append('file', file);

    try {
      const res = await fetch('/api/seller/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Upload failed');
      } else {
        setMessage('Product uploaded — id: ' + data.product._id);
        setForm({
          title: '',
          description: '',
          price: 0,
          originalPrice: 0,
          category: categories[0],
          tags: '',
          fileFormats: '',
          license: 'personal',
          templateType: 'other',
          templateFields: '',
          requiresDetails: false,
          overlayText: '',
        });
        setFile(null);
        setPreview('');
      }
    } catch (err) {
      setError('Upload failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Upload Product</h2>
          <p className="text-sm text-gray-500">Upload a design asset as a seller and save Cloudinary metadata to MongoDB.</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-600">Logged in as</div>
          <div className="mt-1 inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded text-sm">{user?.name || 'Seller'}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input name="title" value={form.title} onChange={handleChange} required className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} required rows={4} className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" name="price" value={form.price} onChange={handleChange} className="mt-1 block w-full border border-gray-200 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Original Price</label>
            <input type="number" name="originalPrice" value={form.originalPrice} onChange={handleChange} className="mt-1 block w-full border border-gray-200 rounded px-3 py-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select name="category" value={form.category} onChange={handleChange} className="mt-1 block w-full border border-gray-200 rounded px-3 py-2">
              {categories.map((c) => (
                <option key={c} value={c}>{c.replace(/_/g, ' ')}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">License</label>
            <select name="license" value={form.license} onChange={handleChange} className="mt-1 block w-full border border-gray-200 rounded px-3 py-2">
              <option value="personal">personal</option>
              <option value="commercial">commercial</option>
              <option value="extended">extended</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">File</label>
          <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mt-1" />
          {preview && (
            <div className="mt-3">
              <img src={preview} alt="Upload preview" className="w-full max-h-64 object-cover rounded" />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
            <input name="tags" value={form.tags} onChange={handleChange} className="mt-1 block w-full border border-gray-200 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">File formats (comma-separated)</label>
            <input name="fileFormats" value={form.fileFormats} onChange={handleChange} className="mt-1 block w-full border border-gray-200 rounded px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Overlay text for PDF</label>
          <input
            name="overlayText"
            value={form.overlayText}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-200 rounded px-3 py-2"
            placeholder="Optional custom text for PDF files"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            id="requiresDetails"
            name="requiresDetails"
            type="checkbox"
            checked={form.requiresDetails}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="requiresDetails" className="text-sm text-gray-700">
            This product requires custom checkout details.
          </label>
        </div>

        {error && <div className="text-sm text-rose-600">{error}</div>}
        {message && <div className="text-sm text-green-700 bg-green-50 p-3 rounded">{message}</div>}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading || !user || user.role !== 'seller'}
            className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? 'Uploading...' : 'Upload product'}
          </button>
        </div>
      </form>
    </div>
  );
}
