import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Seller from '@/models/Seller';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_jwt_secret';

export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, password, shopName, shopDescription } = body;

    if (!name || !email || !password || !shopName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return NextResponse.json({ error: 'Seller already exists' }, { status: 409 });
    }

    const seller = await Seller.create({
      name,
      email,
      password,
      shopName,
      shopDescription,
    });

    const token = jwt.sign({ id: seller._id, role: 'seller' }, JWT_SECRET, {
      expiresIn: '30d',
    });

    return NextResponse.json({
      seller: {
        _id: seller._id,
        name: seller.name,
        email: seller.email,
        role: 'seller',
        shopName: seller.shopName,
        shopDescription: seller.shopDescription,
      },
      token,
    });
  } catch (error: any) {
    console.error('Seller signup error:', error);
    return NextResponse.json({ error: error.message || 'Failed to sign up seller' }, { status: 500 });
  }
}
