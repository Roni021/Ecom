import UploadProductClient from './UploadProductClient';

export const metadata = {
  title: 'Upload Product',
};

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <UploadProductClient />
    </main>
  );
}
