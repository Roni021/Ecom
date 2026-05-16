import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function GET() {
  try {
    await dbConnect();
    const demo = await User.findOne({ email: 'demo@seller.local' });
    if (!demo) {
      return NextResponse.json({ error: 'Demo seller not found' }, { status: 404 });
    }
    return NextResponse.json({ demoSellerId: demo._id.toString(), email: demo.email });
  } catch (error: any) {
    console.error('Demo GET error:', error);
    return NextResponse.json({ error: error.message || 'Failed' }, { status: 500 });
  }
}
