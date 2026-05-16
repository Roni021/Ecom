import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/e-coma';

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  originalPrice: Number,
  category: String,
  images: [String],
  tags: [String],
  fileFormats: [String],
  license: String,
  rating: Number,
  reviewCount: Number,
  downloads: Number,
  featured: Boolean,
  isFree: Boolean,
  createdAt: Date,
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const sampleProducts = [
  {
    title: 'Neo-Minimalist UI Framework',
    description: 'Complete design system with 500+ customizable components for SaaS products.',
    price: 24,
    originalPrice: 49,
    category: 'ui_kits',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCFUmTw61A9eVz2ha2aiiaOJYVlSdU_FyrlV9ZhYyNJaU5wYFHlB0aULHHaGaA9o9SJUSlF8sPIIyBQ9tSgBcw5rn4tgr3x4YhG_pi3nPdXTy4EXdfRt2meHE8hvAYQnP4t9MnYcGNlhqVgO3fJbCK9s86roEeW39MEqYZKUwvyZzQklro19lA8N8p2SIiQdMGx4WrNV64e91IOLJoxj9xd0e37zNtavvu4cpnU88JcTZRX5eaA3UjUnSp_fB5Yh_VaMrYBD3Xu6op2'],
    tags: ['ui kit', 'figma', 'design system', 'saas'],
    fileFormats: ['Figma', 'Sketch', 'Adobe XD'],
    license: 'commercial',
    rating: 4.9,
    reviewCount: 128,
    downloads: 2500,
    featured: true,
    isFree: false,
    createdAt: new Date(),
  },
  {
    title: 'Gold Foil Greeting Bundle',
    description: 'Luxury invitation templates with realistic gold foil textures for all occasions.',
    price: 12,
    originalPrice: 24,
    category: 'greetingscard',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDsWFbkUN_r9UevEOQIH2zd-m4vX4mVB6ZP_Bvubh8bSxUyDVgZSFC744wunbz9x-zNDm6z9GMqTnGdzHMwicURqalbKQ3y1iU9j7fPsQYZ0EAacSuWuJB8a5u7rwrdxuyX62NFeybDKmyN6kBxe1V_WEQkp8RVtx_9C3JqRPbYHH1svpli_cqorp_Rd6QMTZQURwcc8xKT5YyTElwXPxUUyc948LlNWVtpAxdU0PY-8jfW1_vptO3n7wmAYT_RE-ZwPc_kaMvnYbpa'],
    tags: ['greeting cards', 'invitation', 'gold foil', 'wedding'],
    fileFormats: ['PSD', 'AI', 'PDF'],
    license: 'personal',
    rating: 4.8,
    reviewCount: 94,
    downloads: 1800,
    featured: true,
    isFree: false,
    createdAt: new Date(),
  },
  {
    title: 'Creator Social Kit 2024',
    description: 'Viral-ready post and story templates designed for maximum engagement.',
    price: 18,
    originalPrice: 32,
    category: 'social_media_asset',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBAiIPGNt16QW41T-tGTMfxKnfubYKarPXO9XjTKAhZfD-p5FDQ_S3Ml3Tuaq8ipX-SmL0vYaXetjRppEtEWDOT-mxIU7py1QXQEvG3QfGSz0KfS9pqy8ysTt0WVwRZmFj_zKuBoJKLtp8Lg3r6GezdOBxDeFlp8V8vabOWEYDyZURNbt23DaaG4IN7320olka8zHUKXVIsPzt46n86Pp4h4fXnS8AN4n0UF2Gv8xTDvWLNSAZzf2g_jmJdI577IYRbwKQbQZbqxiyu'],
    tags: ['social media', 'instagram', 'templates', 'marketing'],
    fileFormats: ['Figma', 'Canva'],
    license: 'commercial',
    rating: 5.0,
    reviewCount: 210,
    downloads: 3200,
    featured: true,
    isFree: false,
    createdAt: new Date(),
  },
  {
    title: 'Premium Icon Pack Pro',
    description: '1000+ scalable icons for modern web and mobile applications.',
    price: 15,
    originalPrice: 29,
    category: 'icons_illustration',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBhYPR2OXgwMXMRJmc0PxTP5Y_rds7mj1qLAA6_iJgkLtZJTgRSfvmgM0iaAJow6D_G0Gu7v6to_yRZkor5TqHibDyYLI2jYbmAQeQX9ITMZTa7QWs0Wv1VB3OtD4mJoMgyvRnSCmWUXRR-M7G6y8fDusQw8rGDLdXAr1aIJForxZ7T-VAMSP5xwhF9eduSgOel_TtcDeaS3WbsuvjxHa6ByJAq_nHSrP-DsSf_pZvZGvGALG_Mq1xBxEaYkDgmx7Yk0pvPLoLIMkxg'],
    tags: ['icons', 'ui', 'svg', 'vector'],
    fileFormats: ['SVG', 'PNG', 'WebP'],
    license: 'commercial',
    rating: 4.7,
    reviewCount: 156,
    downloads: 4100,
    featured: false,
    isFree: false,
    createdAt: new Date(),
  },
  {
    title: 'Modern Website Template',
    description: 'Fully responsive website template for agencies and portfolios.',
    price: 39,
    originalPrice: 79,
    category: 'website_template',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAX_qHTjut6U6MR_24dOfJsjWD-UpsrqvU94HhayAHevH6AUjG3SeY3atr0HQESqFpy2M2u1Q9pbmGwMUlAcrAceAlI8GnEozUK0F_QZs3yVLgAIvRGiXAmJl0vW6HRBBlxUDSmcnHO16fbp1w36iPmW1bKAHW--Sf9hiYHPPwH03V-XYXmHexLB4vLXDChbhkgDx12jsxdCgEoFPjX6YdsQRdKga0JOFZoRwcjM0gy_a5Qi92OpHoF-2RfnJRZAxzm2ijuZAOYtk-t'],
    tags: ['website', 'template', 'responsive', 'portfolio'],
    fileFormats: ['HTML', 'CSS', 'React'],
    license: 'extended',
    rating: 4.6,
    reviewCount: 78,
    downloads: 1200,
    featured: true,
    isFree: false,
    createdAt: new Date(),
  },
  {
    title: 'Email Marketing Bundle',
    description: 'Professional email templates for newsletters and campaigns.',
    price: 9,
    originalPrice: 19,
    category: 'email_template',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDNUxr7Lim0nqidCfkLch-Mk5h-YJ__Ybv88tlWnGvIHpGMD4IfdcpbilhjOoG7OaqmEM9M4ENsOhCy6jJ5tIZepJ-B_IIC-K1rnBgQu6adKz2vbQTzKPabmf3qIeyFBSJb5jzXOCQf1BshAynjcx1oAe3hmw276szWZNNhGlAWMoITX2nCTKKB-ovpSHL8-PkJM_fY-1lhzD9HSpMmVvltOOJA3Q8TXTxvWoavLxgDepRFXJinPB3EKTDI5sJEA4EKH2tcfpQEfcfG'],
    tags: ['email', 'newsletter', 'marketing', 'template'],
    fileFormats: ['HTML', 'Mailchimp'],
    license: 'personal',
    rating: 4.5,
    reviewCount: 62,
    downloads: 980,
    featured: false,
    isFree: false,
    createdAt: new Date(),
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Inserted sample products');

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Seed error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seed();

