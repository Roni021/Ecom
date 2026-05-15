"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

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
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const { addToCart, items } = useCart();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

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

  const isInCart = (productId: string) => {
    return items.some(item => item.product._id === productId);
  };

  if (loading) {
    return (
      <div className="theme-page min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary)]"></div>
      </div>
    );
  }

  return (
    <div className="theme-page min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">All Products</h1>
          <p className="theme-text dark:theme-text">
            Browse our complete collection of premium digital assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {product.title}
                </h3>
                <p className="theme-text dark:theme-text text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={addingToCart === product._id || isInCart(product._id)}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-bold text-center transition-all ${
                      isInCart(product._id)
                        ? 'bg-green-500 text-white cursor-default'
                        : 'bg-[var(--primary)] text-white hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {addingToCart === product._id 
                      ? 'Adding...' 
                      : isInCart(product._id) 
                        ? 'In Cart ✓' 
                        : 'Add to Cart'}
                  </button>
                  <Link
                    href="/checkout"
                    className="flex-1 theme-surface dark:bg-slate-700 theme-text dark:theme-text px-4 py-2 rounded-lg text-sm font-bold text-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                  >
                    Buy Now
                  </Link>
                </div>
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
    title: 'Neo-Minimalist UI Framework',
    description: 'Complete design system with 500+ customizable components for SaaS products.',
    price: 24,
    originalPrice: 49,
    category: 'ui_kits',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCFUmTw61A9eVz2ha2aiiaOJYVlSdU_FyrlV9ZhYyNJaU5wYFHlB0aULHHaGaA9o9SJUSlF8sPIIyBQ9tSgBcw5rn4tgr3x4YhG_pi3nPdXTy4EXdfRt2meHE8hvAYQnP4t9MnYcGNlhqVgO3fJbCK9s86roEeW39MEqYZKUwvyZzQklro19lA8N8p2SIiQdMGx4WrNV64e91IOLJoxj9xd0e37zNtavvu4cpnU88JcTZRX5eaA3UjUnSp_fB5Yh_VaMrYBD3Xu6op2'],
    rating: 4.9,
    reviewCount: 128,
    featured: true,
  },
  {
    _id: '2',
    title: 'Gold Foil Greeting Bundle',
    description: 'Luxury invitation templates with realistic gold foil textures for all occasions.',
    price: 12,
    originalPrice: 24,
    category: 'greetingscard',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDsWFbkUN_r9UevEOQIH2zd-m4vX4mVB6ZP_Bvubh8bSxUyDVgZSFC744wunbz9x-zNDm6z9GMqTnGdzHMwicURqalbKQ3y1iU9j7fPsQYZ0EAacSuWuJB8a5u7rwrdxuyX62NFeybDKmyN6kBxe1V_WEQkp8RVtx_9C3JqRPbYHH1svpli_cqorp_Rd6QMTZQURwcc8xKT5YyTElwXPxUUyc948LlNWVtpAxdU0PY-8jfW1_vptO3n7wmAYT_RE-ZwPc_kaMvnYbpa'],
    rating: 4.8,
    reviewCount: 94,
    featured: true,
  },
  {
    _id: '3',
    title: 'Creator Social Kit 2024',
    description: 'Viral-ready post and story templates designed for maximum engagement.',
    price: 18,
    originalPrice: 32,
    category: 'social_media_asset',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBAiIPGNt16QW41T-tGTMfxKnfubYKarPXO9XjTKAhZfD-p5FDQ_S3Ml3Tuaq8ipX-SmL0vYaXetjRppEtEWDOT-mxIU7py1QXQEvG3QfGSz0KfS9pqy8ysTt0WVwRZmFj_zKuBoJKLtp8Lg3r6GezdOBxDeFlp8V8vabOWEYDyZURNbt23DaaG4IN7320olka8zHUKXVIsPzt46n86Pp4h4fXnS8AN4n0UF2Gv8xTDvWLNSAZzf2g_jmJdI577IYRbwKQbQZbqxiyu'],
    rating: 5.0,
    reviewCount: 210,
    featured: true,
  },
  {
    _id: '4',
    title: 'Premium Icon Pack Pro',
    description: '1000+ scalable icons for modern web and mobile applications.',
    price: 15,
    originalPrice: 29,
    category: 'icons_illustration',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBhYPR2OXgwMXMRJmc0PxTP5Y_rds7mj1qLAA6_iJgkLtZJTgRSfvmgM0iaAJow6D_G0Gu7v6to_yRZkor5TqHibDyYLI2jYbmAQeQX9ITMZTa7QWs0Wv1VB3OtD4mJoMgyvRnSCmWUXRR-M7G6y8fDusQw8rGDLdXAr1aIJForxZ7T-VAMSP5xwhF9eduSgOel_TtcDeaS3WbsuvjxHa6ByJAq_nHSrP-DsSf_pZvZGvGALG_Mq1xBxEaYkDgmx7Yk0pvPLoLIMkxg'],
    rating: 4.7,
    reviewCount: 156,
    featured: false,
  },
  {
    _id: '5',
    title: 'Modern Website Template',
    description: 'Fully responsive website template for agencies and portfolios.',
    price: 39,
    originalPrice: 79,
    category: 'website_template',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAX_qHTjut6U6MR_24dOfJsjWD-UpsrqvU94HhayAHevH6AUjG3SeY3atr0HQESqFpy2M2u1Q9pbmGwMUlAcrAceAlI8GnEozUK0F_QZs3yVLgAIvRGiXAmJl0vW6HRBBlxUDSmcnHO16fbp1w36iPmW1bKAHW--Sf9hiYHPPwH03V-XYXmHexLB4vLXDChbhkgDx12jsxdCgEoFPjX6YdsQRdKga0JOFZoRwcjM0gy_a5Qi92OpHoF-2RfnJRZAxzm2ijuZAOYtk-t'],
    rating: 4.6,
    reviewCount: 78,
    featured: true,
  },
  {
    _id: '6',
    title: 'Email Marketing Bundle',
    description: 'Professional email templates for newsletters and campaigns.',
    price: 9,
    originalPrice: 19,
    category: 'email_template',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDNUxr7Lim0nqidCfkLch-Mk5h-YJ__Ybv88tlWnGvIHpGMD4IfdcpbilhjOoG7OaqmEM9M4ENsOhCy6jJ5tIZepJ-B_IIC-K1rnBgQu6adKz2vbQTzKPabmf3qIeyFBSJb5jzXOCQf1BshAynjcx1oAe3hmw276szWZNNhGlAWMoITX2nCTKKB-ovpSHL8-PkJM_fY-1lhzD9HSpMmVvltOOJA3Q8TXTxvWoavLxgDepRFXJinPB3EKTDI5sJEA4EKH2tcfpQEfcfG'],
    rating: 4.5,
    reviewCount: 62,
    featured: false,
  },
];

