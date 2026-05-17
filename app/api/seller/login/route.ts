import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Seller from '@/models/Seller';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_jwt_secret';

export async function POST(request: Request) {
  try {
    await dbConnect();

    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const seller = await Seller.findOne({ email }).select('+password');
    if (!seller) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isMatch = await seller.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

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
    console.error('Seller login error:', error);
    return NextResponse.json({ error: error.message || 'Failed to log in seller' }, { status: 500 });
  }
}
