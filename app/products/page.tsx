"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';

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
  featured: boolean;
  requiresDetails: boolean;
}

const productCategories = [
  { id: 'all', label: 'All' },
  { id: 'celebration', label: 'Celebration & Festivals' },
  { id: 'resume', label: 'Resume Templates' },
  { id: 'layout', label: 'Layout Designs' },
  { id: 'photos', label: 'Photos' },
  { id: 'ui_kits', label: 'UI Kits' },
  { id: 'greetingscard', label: 'Greeting Cards' },
  { id: 'website_template', label: 'Website Templates' },
  { id: 'social_media_asset', label: 'Social Media Assets' },
  { id: 'icons_illustration', label: 'Icons & Illustrations' },
  { id: 'email_template', label: 'Email Templates' },
];

const categoryLabels: Record<string, string> = {
  celebration: 'Celebration & Festivals',
  resume: 'Resume Templates',
  layout: 'Layout Designs',
  photos: 'Photos',
  ui_kits: 'UI Kits',
  greetingscard: 'Greeting Cards',
  website_template: 'Website Templates',
  social_media_asset: 'Social Media Assets',
  icons_illustration: 'Icons & Illustrations',
  email_template: 'Email Templates',
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const searchParams = useSearchParams();
  const { addToCart, items } = useCart();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const categoryFromQuery = searchParams?.get('category');
    if (categoryFromQuery && productCategories.some((category) => category.id === categoryFromQuery)) {
      setSelectedCategory(categoryFromQuery);
    }

    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.products) {
        setProducts(data.products);
      } else {
        setProducts(staticProducts);
      }
    } catch (err) {
      console.error('Failed to fetch products:', err);
      setProducts(staticProducts);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (product: Product) => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    setAddingToCart(product._id);
    try {
      await addToCart(product._id);
    } catch (err) {
      console.error('Failed to add to cart:', err);
    } finally {
      setAddingToCart(null);
    }
  };

  const handleCustomize = (product: Product) => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    router.push(`/checkout?productId=${product._id}&custom=true`);
  };

  const handleBuyNow = (product: Product) => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    router.push(`/checkout?productId=${product._id}`);
  };

  const isInCart = (productId: string) => {
    return items.some(item => item.product._id === productId);
  };

  const visibleProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return (
      <div className="theme-page min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-(--primary)"></div>
      </div>
    );
  }

  return (
    <div className="theme-page min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Digital Products Marketplace</h1>
          <p className="theme-text dark:theme-text max-w-2xl">
            Choose from celebration and festival designs, resume templates, layouts, photos, and more.
            Some products are ready for instant download while others offer a customizable fill-in experience.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {productCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all border ${
                selectedCategory === category.id
                  ? 'bg-(--primary) text-white border-transparent'
                  : 'bg-theme-surface dark:bg-slate-800 text-theme-text dark:text-slate-200 border-theme-border'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product) => (
            <div
              key={product._id}
              className="group theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={product.images[0] || 'https://via.placeholder.com/400x300'}
                />
                <div className="absolute top-4 right-4 theme-surface/90 theme-surface/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                  ${product.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2 text-amber-500">
                  <span className="material-symbols-outlined text-sm fill-1">star</span>
                  <span className="text-xs font-bold theme-text dark:theme-text">
                    {product.rating}
                  </span>
                  <span className="text-xs theme-text font-normal">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                <div className="mb-2">
                  <Link
                    href={`/products/${product._id}`}
                    className="text-lg font-bold group-hover:text-(--primary) transition-colors block"
                  >
                    {product.title}
                  </Link>
                </div>
                <p className="theme-text dark:theme-text text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className={`grid gap-2 ${product.requiresDetails ? 'grid-cols-1' : 'sm:grid-cols-[1fr_1fr]'}`}>
                  {product.requiresDetails ? (
                    <button
                      onClick={() => handleCustomize(product)}
                      className="w-full px-4 py-2 rounded-lg text-sm font-bold text-center bg-(--primary) text-white hover:shadow-lg hover:scale-105 transition-all"
                    >
                      Customize & Checkout
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={addingToCart === product._id || isInCart(product._id)}
                      className={`w-full px-4 py-2 rounded-lg text-sm font-bold text-center transition-all ${
                        isInCart(product._id)
                          ? 'bg-green-500 text-white cursor-default'
                          : 'bg-(--primary) text-white hover:shadow-lg hover:scale-105'
                      }`}
                    >
                      {addingToCart === product._id
                        ? 'Adding...'
                        : isInCart(product._id)
                          ? 'In Cart ✓'
                          : 'Add to Cart'}
                    </button>
                  )}

                  {!product.requiresDetails && (
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="w-full px-4 py-2 rounded-lg text-sm font-bold text-center bg-theme-surface dark:bg-slate-700 theme-text dark:theme-text hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                    >
                      Buy Now
                    </button>
                  )}
                </div>
                {product.requiresDetails && (
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">This product requires custom details at checkout.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// Static fallback products
const staticProducts = [
  {
    _id: '1',
    title: 'Festival Celebration Card Set',
    description: 'Customizable celebration greeting card set for festivals, birthdays, and special events.',
    price: 14,
    originalPrice: 28,
    category: 'celebration',
    images: ['https://via.placeholder.com/800x500.png?text=Celebration+Card+Set'],
    rating: 4.8,
    reviewCount: 86,
    featured: true,
    requiresDetails: true,
  },
  {
    _id: '2',
    title: 'Festival Poster Pack',
    description: 'Instant download festival poster layouts ready for print and social sharing.',
    price: 12,
    originalPrice: 20,
    category: 'celebration',
    images: ['https://via.placeholder.com/800x500.png?text=Festival+Poster+Pack'],
    rating: 4.6,
    reviewCount: 64,
    featured: false,
    requiresDetails: false,
  },
  {
    _id: '3',
    title: 'Modern Resume Template',
    description: 'Editable resume template designed for job seekers who want a polished professional look.',
    price: 10,
    originalPrice: 22,
    category: 'resume',
    images: ['https://via.placeholder.com/800x500.png?text=Modern+Resume+Template'],
    rating: 4.9,
    reviewCount: 105,
    featured: true,
    requiresDetails: true,
  },
  {
    _id: '4',
    title: 'Creative Resume Pack',
    description: 'Fast-download resume bundle with resume, cover letter, and references page.',
    price: 8,
    originalPrice: 16,
    category: 'resume',
    images: ['https://via.placeholder.com/800x500.png?text=Creative+Resume+Pack'],
    rating: 4.7,
    reviewCount: 52,
    featured: false,
    requiresDetails: false,
  },
  {
    _id: '5',
    title: 'Website Layout Design Kit',
    description: 'Modern layout designs for landing pages, portfolios, and service websites.',
    price: 20,
    originalPrice: 40,
    category: 'layout',
    images: ['https://via.placeholder.com/800x500.png?text=Website+Layout+Design+Kit'],
    rating: 4.8,
    reviewCount: 98,
    featured: true,
    requiresDetails: false,
  },
  {
    _id: '6',
    title: 'Branding Layout Customizer',
    description: 'Design layout set that can be personalized with your brand colors and copy.',
    price: 18,
    originalPrice: 36,
    category: 'layout',
    images: ['https://via.placeholder.com/800x500.png?text=Branding+Layout+Customizer'],
    rating: 4.5,
    reviewCount: 37,
    featured: false,
    requiresDetails: true,
  },
  {
    _id: '7',
    title: 'Lifestyle Photo Collection',
    description: 'High-resolution lifestyle photo bundle for marketing, social media, and blogs.',
    price: 16,
    originalPrice: 30,
    category: 'photos',
    images: ['https://via.placeholder.com/800x500.png?text=Lifestyle+Photo+Collection'],
    rating: 4.7,
    reviewCount: 73,
    featured: false,
    requiresDetails: false,
  },
  {
    _id: '8',
    title: 'Custom Photo Editing Session',
    description: 'Personalized photo editing service with custom retouch requests and style guidance.',
    price: 22,
    originalPrice: 45,
    category: 'photos',
    images: ['https://via.placeholder.com/800x500.png?text=Custom+Photo+Editing'],
    rating: 4.9,
    reviewCount: 41,
    featured: true,
    requiresDetails: true,
  },
];


