import React, { useState } from 'react';

export default function CloudinaryUploadPage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [overlayJson, setOverlayJson] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!files || files.length === 0) return alert('Please select a file');
    setLoading(true);
    const form = new FormData();
    for (let i = 0; i < files.length; i++) {
      form.append('file', files[i]);
    }
    if (overlayJson) form.append('overlay', overlayJson);

    const res = await fetch('/api/cloudinary-upload', {
      method: 'POST',
      body: form,
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Cloudinary Upload (Images & PDFs)</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Files (image or pdf):</label>
          <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>Overlay JSON (for PDFs):</label>
          <textarea
            rows={5}
            cols={60}
            placeholder='e.g. {"Name":"John Doe","Date":"2026-05-16"}'
            value={overlayJson}
            onChange={(e) => setOverlayJson(e.target.value)}
          />
        </div>
        <div style={{ marginTop: 8 }}>
          <button type="submit" disabled={loading}>{loading ? 'Uploading...' : 'Upload'}</button>
        </div>
      </form>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h2>Upload Result</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(result, null, 2)}</pre>

          {(result.saved || []).map((s: any, idx: number) => {
            const r = s.uploadResult || s.record || {};
            const url = r.secure_url || (s.record && s.record.url) || r.url;
            const type = (s.record && s.record.fileType) || (r.resource_type || '').includes('raw') ? 'pdf' : 'image';

            return (
              <div key={idx} style={{ marginTop: 12 }}>
                <div>Public ID: {r.public_id || (s.record && s.record.public_id)}</div>
                <div>URL: <a href={url} target="_blank" rel="noreferrer">{url}</a></div>
                {type === 'image' && url ? (
                  <div style={{ marginTop: 8 }}>
                    <img src={url} width={400} height={300} alt={`uploaded-${idx}`} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
