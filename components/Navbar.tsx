"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { items: cartItems, totalItems } = useCart();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  };

  const cartCount = totalItems || 0;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#101322]/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[#2547f4] p-1.5 rounded-lg text-white">
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
              <Link href="/contactus" className="nav-link">Contact</Link>
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden lg:flex items-center relative">
              <input 
                className="h-10 w-64 rounded-xl border-none bg-slate-100 dark:bg-slate-800 pl-10 text-sm focus:ring-2 focus:ring-[#2547f4] dark:text-white" 
                placeholder="Search anything..." 
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 text-slate-400">search</span>
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition">
              <span className="material-symbols-outlined">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#2547f4] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 bg-[#2547f4] text-white px-4 py-2 rounded-xl font-bold">
                  <span className="material-symbols-outlined text-sm">person</span>
                  {user.name}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700">Profile</Link>
                  <Link href="/orders" className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700">My Orders</Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-slate-100 dark:hover:bg-slate-700">Logout</button>
                </div>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-[#2547f4]">
                  Login
                </Link>
                <Link href="/signup" className="bg-[#2547f4] text-white text-sm px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-[#2547f4]/30 hover:scale-105 transition-transform">
                  Sign Up
                </Link>
              </>
            )}

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
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
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/products" className="block py-2">Products</Link>
            <Link href="/categories" className="block py-2">Categories</Link>
            <Link href="/about" className="block py-2">About</Link>
            <Link href="/contactus" className="block py-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

