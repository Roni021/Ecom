import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';

// Sample products data for initial seeding
const sampleProducts = [
  {
    title: "Neo-Minimalist UI Framework",
    description: "Complete design system with 500+ customizable components for SaaS products. Features modern UI components, typography systems, and color palettes.",
    price: 24,
    originalPrice: 49,
    category: "ui_kits",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCFUmTw61A9eVz2ha2aiiaOJYVlSdU_FyrlV9ZhYyNJaU5wYFHlB0aULHHaGaA9o9SJUSlF8sPIIyBQ9tSgBcw5rn4tgr3x4YhG_pi3nPdXTy4EXdfRt2meHE8hvAYQnP4t9MnYcGNlhqVgO3fJbCK9s86roEeW39MEqYZKUwvyZzQklro19lA8N8p2SIiQdMGx4WrNV64e91IOLJoxj9xd0e37zNtavvu4cpnU88JcTZRX5eaA3UjUnSp_fB5Yh_VaMrYBD3Xu6op2"],
    tags: ["ui kit", "figma", "design system", "saas"],
    fileFormats: ["figma", "sketch", "png", "svg"],
    license: "commercial",
    rating: 4.9,
    reviewCount: 128,
    downloads: 1250,
    featured: true,
  },
  {
    title: "Gold Foil Greeting Bundle",
    description: "Luxury invitation templates with realistic gold foil textures for all occasions. Includes wedding, birthday, and holiday designs.",
    price: 18,
    originalPrice: 29,
    category: "greetingscard",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDsWFbkUN_r9UevEOQIH2zd-m4vX4mVB6ZP_Bvubh8bSxUyDVgZSFC744wunbz9x-zNDm6z9GMqTnGdzHMwicURqalbKQ3y1iU9j7fPsQYZ0EAacSuWuJB8a5u7rwrdxuyX62NFeybDKmyN6kBxe1V_WEQkp8RVtx_9C3JqRPbYHH1svpli_cqorp_Rd6QMTZQURwcc8xKT5YyTElwXPxUUyc948LlNWVtpAxdU0PY-8jfW1_vptO3n7wmAYT_RE-ZwPc_kaMvnYbpa"],
    tags: ["greeting cards", "gold foil", "invitation", "wedding"],
    fileFormats: ["psd", "ai", "png"],
    license: "personal",
    rating: 4.8,
    reviewCount: 94,
    downloads: 890,
    featured: true,
  },
  {
    title: "Creator Social Kit 2024",
    description: "Viral-ready post and story templates designed for maximum engagement. Perfect for Instagram, Facebook, and TikTok.",
    price: 32,
    originalPrice: 49,
    category: "social_media_asset",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBAiIPGNt16QW41T-tGTMfxKnfubYKarPXO9XjTKAhZfD-p5FDQ_S3Ml3Tuaq8ipX-SmL0vYaXetjRppEtEWDOT-mxIU7py1QXQEvG3QfGSz0KfS9pqy8ysTt0WVwRZmFj_zKuBoJKLtp8Lg3r6GezdOBxDeFlp8V8vabOWEYDyZURNbt23DaaG4IN7320olka8zHUKXVIsPzt46n86Pp4h4fXnS8AN4n0UF2Gv8xTDvWLNSAZzf2g_jmJdI577IYRbwKQbQZbqxiyu"],
    tags: ["social media", "instagram", "templates", "marketing"],
    fileFormats: ["figma", "canva", "png"],
    license: "commercial",
    rating: 5.0,
    reviewCount: 210,
    downloads: 2340,
    featured: true,
  },
  {
    title: "Modern Business Website Template",
    description: "Fully responsive website template perfect for startups and small businesses. Built with modern design principles.",
    price: 39,
    originalPrice: 79,
    category: "website_template",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA5NSawv0RAGTtgzqo6xQCFDO1txCkqYYf1VeG9e09Dtb4eHa8RD6KMpe-jtGcDPxw8Ivo7C37uHjyhFtBB94eBs3_Uw09mY_bVScpBrPnDLFAPK_oP4hfJvAzqMGDBO-jSZdqbqqdvPP63E7VY-27dzuzHs3iHH9PNb_u9RjkQgM9d2Jbc43oWM4Bb_VSSRB5crUHRsAxXvQ0E8yUdcXmaDm2mKRtikSjyVYx9egZE62UjBlMdoYTTnk_PipB23M3u6chcMGYFY4UF"],
    tags: ["website", "template", "business", "responsive"],
    fileFormats: ["html", "css", "js", "figma"],
    license: "extended",
    rating: 4.7,
    reviewCount: 156,
    downloads: 980,
    featured: false,
  },
  {
    title: "3D Icon Pack Pro",
    description: "150+ minimal geometric line icons for modern web and mobile applications. High resolution and easily customizable.",
    price: 12,
    originalPrice: 24,
    category: "icons_illustration",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCkW06ue0DTpJgWeZuQ1TOPu7L78lA965t_lWI3ohUb1dHva4noE610D_6vDLXH5spKMZ5zld4EU4pTT1vbWRvdjnGONrprq6LcBdQrAoYQ8i2D8-IHSdUm-vzOBoSNuyFTWlipKO0zFnBUeoBZws9umR3iVUXDC4qiPPbKebO8mnZuvW5_DrZcFqHbqjyF2VXV-TezSZ_-iWoGGrb5C-r2LpbHVET_8tsaZ6mlqb0Ah7bK4Px9sEOPSsj0JvfPK8v3HLsH1fljl_BU"],
    tags: ["icons", "3d", "geometric", "minimal"],
    fileFormats: ["svg", "png", "figma"],
    license: "commercial",
    rating: 4.6,
    reviewCount: 78,
    downloads: 520,
    featured: false,
  },
  {
    title: "Email Marketing Template Bundle",
    description: "Conversion-optimized email templates for newsletter campaigns. Includes welcome emails, promotional emails, and transactional messages.",
    price: 15,
    originalPrice: 29,
    category: "email_template",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAXuDNUxr7Lim0nqidCfkLch-Mk5h-YJ__Ybv88tlWnGvIHpGMD4IfdcpbilhjOoG7OaqmEM9M4ENsOhCy6jJ5tIZepJ-B_IIC-K1rnBgQu6adKz2vbQTzKPabmf3qIeyFBSJb5jzXOCQf1BshAynjcx1oAe3hmw276szWZNNhGlAWMoITX2nCTKKB-ovpSHL8-PkJM_fY-1lhzD9HSpMmVvltOOJA3Q8TXTxvWoavLxgDepRFXJinPB3EKTDI5sJEA4EKH2tcfpQEfcfG"],
    tags: ["email", "template", "newsletter", "marketing"],
    fileFormats: ["html", "mjml", "mailchimp"],
    license: "commercial",
    rating: 4.5,
    reviewCount: 62,
    downloads: 315,
    featured: false,
  }
];

export async function GET(request: Request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');

    // Build query
    let query: any = {};
    
    if (category) {
      query.category = category;
    }
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const skip = (page - 1) * limit;
    
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments(query);

    // If no products exist, seed with sample data
    if (total === 0) {
      await Product.insertMany(sampleProducts);
      return NextResponse.json({
        products: sampleProducts,
        total: sampleProducts.length,
        page,
        pages: 1,
        message: 'Sample products seeded'
      });
    }

    return NextResponse.json({
      products,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error: any) {
    console.error('Products GET error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    
    const product = await Product.create(body);
    
    return NextResponse.json(
      { product, message: 'Product created successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Products POST error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create product' },
      { status: 500 }
    );
  }
}

