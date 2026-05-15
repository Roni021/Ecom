import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Product title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: 0,
  },
  originalPrice: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    enum: [
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
    ],
  },
  images: [{
    type: String,
  }],
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  tags: [{
    type: String,
  }],
  fileFormats: [{
    type: String,
  }],
  license: {
    type: String,
    enum: ['personal', 'commercial', 'extended'],
    default: 'personal',
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviewCount: {
    type: Number,
    default: 0,
  },
  downloads: {
    type: Number,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  requiresDetails: {
    type: Boolean,
    default: false,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for search
productSchema.index({ title: 'text', description: 'text', tags: 'text' });

export default mongoose.models.Product || mongoose.model('Product', productSchema);

