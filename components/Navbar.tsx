"use client";

import { useState, useEffect, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { items: cartItems, totalItems } = useCart();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = storedTheme === 'dark' || (storedTheme === null && systemPrefersDark);
    document.documentElement.classList.toggle('dark', isDark);
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    setDark(nextDark);
  };

  const cartCount = totalItems || 0;

  return (
    <nav suppressHydrationWarning className="sticky top-0 z-50 theme-surface/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="theme-accent p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined block text-2xl">auto_awesome</span>
              </div>
              <span className="text-xl font-bold tracking-tight">DesignAssets</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/products" className="nav-link">Products</Link>
              <Link href="/categories" className="nav-link">Categories</Link>
              <Link href="/about" className="nav-link">About</Link>
              {user?.role === 'seller' && (
                <Link href="/upload-product" className="nav-link">Upload</Link>
              )}
              <Link href="/contactus" className="nav-link">Contact</Link>
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const query = searchValue.trim();
              if (query) {
                router.push(`/products?search=${encodeURIComponent(query)}`);
              } else {
                router.push('/products');
              }
            }} className="hidden lg:flex items-center relative">
              <input 
                className="h-10 w-64 rounded-xl border-none theme-surface theme-surface pl-10 text-sm focus:ring-2 focus:ring-primary dark:text-white" 
                placeholder="Search products or categories..." 
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <span className="material-symbols-outlined absolute left-3 theme-text dark:theme-text">search</span>
            </form>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 hover:theme-surface dark:hover:bg-slate-800 rounded-full transition">
              <span className="material-symbols-outlined">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 theme-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 theme-accent text-white px-4 py-2 rounded-xl font-bold">
                  <span className="material-symbols-outlined text-sm">person</span>
                  {user.name}
                </button>
                <div className="absolute right-0 mt-2 w-48 theme-surface theme-surface rounded-xl shadow-lg border border-theme-surface border-theme-surface opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/profile" className="block px-4 py-2 text-sm hover:theme-surface dark:hover:bg-slate-700">Profile</Link>
                  <Link href="/orders" className="block px-4 py-2 text-sm hover:theme-surface dark:hover:bg-slate-700">My Orders</Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:theme-surface dark:hover:bg-slate-700">Logout</button>
                </div>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-sm font-bold theme-text dark:theme-text hover:theme-accent-text">
                  Login
                </Link>
                <Link href="/signup" className="theme-accent text-white text-sm px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                  Sign Up
                </Link>
              </>
            )}

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-lg theme-surface theme-surface hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              {dark ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-theme-surface dark:border-slate-800">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/products" className="block py-2">Products</Link>
            <Link href="/categories" className="block py-2">Categories</Link>
            <Link href="/about" className="block py-2">About</Link>
            {user?.role === 'seller' && (
              <Link href="/upload-product" className="block py-2">Upload</Link>
            )}
            <Link href="/contactus" className="block py-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

