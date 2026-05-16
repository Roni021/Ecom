"use client";
import { useEffect, useState } from 'react';

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
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [demoSellerId, setDemoSellerId] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/demo')
      .then((r) => r.json())
      .then((data) => setDemoSellerId(data.demoSellerId || ''))
      .catch(() => {});
  }, []);

  useEffect(() => {
    // generate previews
    if (!files) {
      setPreviews([]);
      return;
    }
    const arr = Array.from(files).map((f) => URL.createObjectURL(f));
    setPreviews(arr);

    return () => {
      arr.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [files]);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setForm((s: any) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('price', String(Number(form.price) || 0));
    formData.append('originalPrice', String(Number(form.originalPrice) || 0));
    formData.append('category', form.category);
    formData.append('tags', form.tags || '');
    formData.append('fileFormats', form.fileFormats || '');
    formData.append('license', form.license);
    formData.append('templateType', form.templateType);
    formData.append('templateFields', form.templateFields || '');
    formData.append('seller', demoSellerId || '');

    if (files && files.length > 0) {
      Array.from(files).forEach((f) => formData.append('files', f));
    }

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
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
        });
        setFiles(null);
        setPreviews([]);
      } else {
        setMessage(data.error || 'Upload failed');
      }
    } catch (err) {
      setMessage('Upload failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Upload Product (Demo)</h2>
          <p className="text-sm text-gray-500">Fill in the details below to upload a product for the demo seller.</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-600">Uploading as</div>
          <div className="mt-1 inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded text-sm">{demoSellerId ? demoSellerId : 'loading...'}</div>
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
          <label className="block text-sm font-medium text-gray-700">Files</label>
          <input type="file" name="files" multiple onChange={(e) => setFiles(e.target.files)} className="mt-1" />
          <p className="text-xs text-gray-500 mt-1">Upload images or a zip. Files are stored under <span className="font-mono">/public/uploads</span>.</p>

          {previews.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2">
              {previews.map((u, i) => (
                <img key={i} src={u} className="w-full h-24 object-cover rounded" alt={`preview-${i}`} />
              ))}
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
          <label className="block text-sm font-medium text-gray-700">Template Type</label>
          <select name="templateType" value={form.templateType} onChange={handleChange} className="mt-1 block w-full border border-gray-200 rounded px-3 py-2">
            <option value="other">other</option>
            <option value="card">card</option>
            <option value="layout">layout</option>
            <option value="icon_pack">icon pack</option>
            <option value="email">email</option>
            <option value="resume">resume</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Template Fields</label>
          <textarea name="templateFields" value={form.templateFields} onChange={handleChange} placeholder={`One per line: name:type:required:true/false:description\nExample:\nwidth:number:true:Canvas width\nheight:number:true:Canvas height`} rows={4} className="mt-1 block w-full border border-gray-200 rounded px-3 py-2" />
          <p className="text-xs text-gray-500 mt-1">Use one line per field. Required fields mark with <span className="font-medium">true</span>.</p>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div>
            <button type="submit" disabled={!demoSellerId || loading} className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50">
              {loading ? 'Uploading...' : 'Upload as Demo Seller'}
            </button>
          </div>
          <div>
            {message && (
              <div className="text-sm text-green-700 bg-green-50 px-3 py-2 rounded">{message}</div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
