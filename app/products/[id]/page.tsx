"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  images: string[];
  rating: number;
  reviewCount: number;
  downloads?: number;
  tags?: string[];
  fileFormats?: string[];
  license?: string;
  requiresDetails?: boolean;
}

const categoryLabels: Record<string, string> = {
  celebration: 'Celebration & Festivals',
  resume: 'Resume Templates',
  layout: 'Layout Designs',
  photos: 'Photos',
  ui_kits: 'UI Kits',
  website_template: 'Website Templates',
  greetingscard: 'Greeting Cards',
  social_media_asset: 'Social Media Assets',
  icons_illustration: 'Icons & Illustrations',
  email_template: 'Email Templates',
};

const sampleReviews = [
  {
    name: 'Mia R.',
    rating: 5,
    comment: 'Excellent product! The design was polished and easy to customize.',
  },
  {
    name: 'Noah K.',
    rating: 4,
    comment: 'Great value and fast delivery. I especially liked the color palette options.',
  },
  {
    name: 'Ava S.',
    rating: 5,
    comment: 'Perfect for my marketing campaign — the layout felt modern and professional.',
  },
];

const sellerDetails = {
  name: 'PixelMarket Studio',
  rating: 4.9,
  location: 'Remote',
  responseTime: 'Within 1 business day',
  activeProducts: 152,
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id || '';
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await fetch(`/api/products/${productId}`);
        if (!res.ok) {
          throw new Error('Product not found');
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError('Unable to load product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="theme-page min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-(--primary)"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="theme-page min-h-screen flex items-center justify-center px-4">
        <div className="theme-surface rounded-3xl border border-theme-surface p-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <p className="theme-text dark:theme-text mb-6">We could not locate that product. Please return to the catalog and try again.</p>
          <Link href="/products" className="inline-flex px-5 py-3 bg-(--primary) text-white rounded-xl transition hover:opacity-90">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="theme-page min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {categoryLabels[product.category] || 'Digital Product'}
            </p>
            <h1 className="text-4xl font-bold mt-2">{product.title}</h1>
          </div>
          <Link href="/products" className="px-5 py-3 rounded-full border border-theme-border theme-text hover:theme-accent-text transition">
            Back to catalog
          </Link>
        </div>

        <div className="grid gap-8 xl:grid-cols-[2fr_360px]">
          <section className="space-y-8">
            <div className="theme-surface rounded-3xl overflow-hidden border border-theme-surface shadow-sm">
              <img
                src={product.images?.[0] || 'https://via.placeholder.com/1200x700'}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 mb-6">
                  <span className="inline-flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-base">star</span>
                    {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-base">download</span>
                    {product.downloads ?? 0} downloads
                  </span>
                  {product.requiresDetails && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      <span className="material-symbols-outlined text-sm">edit</span>
                      Custom details at checkout
                    </span>
                  )}
                </div>
                <p className="theme-text dark:theme-text leading-7">{product.description}</p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="theme-surface rounded-3xl border border-theme-surface p-6">
                <h2 className="font-bold text-xl mb-4">Product Details</h2>
                <dl className="space-y-3 text-sm theme-text dark:theme-text">
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold">Price</dt>
                    <dd>${product.price.toFixed(2)}</dd>
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="flex justify-between gap-4">
                      <dt className="font-semibold">Original Price</dt>
                      <dd className="line-through text-slate-500 dark:text-slate-400">${product.originalPrice.toFixed(2)}</dd>
                    </div>
                  )}
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold">License</dt>
                    <dd>{product.license || 'Standard'}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold">File Formats</dt>
                    <dd>{product.fileFormats?.join(', ') || 'Digital files'}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold">Tags</dt>
                    <dd>{product.tags?.join(', ') || 'digital, creative'}</dd>
                  </div>
                </dl>
              </div>

              <div className="theme-surface rounded-3xl border border-theme-surface p-6">
                <h2 className="font-bold text-xl mb-4">Seller Details</h2>
                <div className="space-y-3 text-sm theme-text dark:theme-text">
                  <p className="font-semibold">{sellerDetails.name}</p>
                  <p>Rating: {sellerDetails.rating.toFixed(1)} / 5</p>
                  <p>Location: {sellerDetails.location}</p>
                  <p>Response time: {sellerDetails.responseTime}</p>
                  <p>Active products: {sellerDetails.activeProducts}</p>
                </div>
              </div>
            </div>

            <div className="theme-surface rounded-3xl border border-theme-surface p-6">
              <h2 className="font-bold text-xl mb-4">Reviews</h2>
              <div className="space-y-4">
                {sampleReviews.map((review) => (
                  <div key={review.name} className="rounded-3xl border border-theme-border p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold">{review.name}</p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                        {review.rating} <span className="material-symbols-outlined text-xs">star</span>
                      </span>
                    </div>
                    <p className="theme-text dark:theme-text text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="theme-surface rounded-3xl border border-theme-surface p-6 shadow-sm">
              <div className="mb-6">
                <p className="text-sm text-slate-500 dark:text-slate-400">Price</p>
                <p className="text-4xl font-bold mt-2">${product.price.toFixed(2)}</p>
                {product.originalPrice > product.price && (
                  <p className="text-sm text-slate-500 line-through mt-1">${product.originalPrice.toFixed(2)}</p>
                )}
              </div>
              <Link
                href={`/checkout?productId=${product._id}${product.requiresDetails ? '&custom=true' : ''}`}
                className="block w-full text-center rounded-full bg-(--primary) px-6 py-3 text-white font-semibold transition hover:opacity-90"
              >
                {product.requiresDetails ? 'Customize & Checkout' : 'Checkout now'}
              </Link>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                {product.requiresDetails
                  ? 'Custom information will be collected at checkout for this product.'
                  : 'Secure digital purchase with instant delivery.'}
              </p>
            </div>

            <div className="theme-surface rounded-3xl border border-theme-surface p-6">
              <h2 className="font-bold text-xl mb-4">More info</h2>
              <ul className="space-y-3 text-sm theme-text dark:theme-text">
                <li>Instant digital delivery after checkout</li>
                <li>Editable with standard design tools</li>
                <li>Same-day support for custom requests</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
