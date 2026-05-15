import React, { Suspense } from 'react';
import ProductsClient from './ProductsClient';

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading products...</div>}>
      <ProductsClient />
    </Suspense>
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


