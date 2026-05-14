import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/db';
import Order from '@/models/Order';
import Cart from '@/models/Cart';
import Product from '@/models/Product';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Helper to verify token
function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  try {
    await dbConnect();
    
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const decoded = verifyToken(token) as any;
    
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }
    
    const orders = await Order.find({ user: decoded.id })
      .populate('items.product')
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ orders });
  } catch (error: any) {
    console.error('Orders GET error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const decoded = verifyToken(token) as any;
    
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const { items, shippingInfo, paymentMethod, paymentId } = body;
    
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in order' },
        { status: 400 }
      );
    }
    
    if (!paymentMethod) {
      return NextResponse.json(
        { error: 'Payment method is required' },
        { status: 400 }
      );
    }
    
    // Calculate totals
    let subtotal = 0;
    const orderItems = [];
    
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.productId}` },
          { status: 400 }
        );
      }
      
      orderItems.push({
        product: product._id,
        quantity: item.quantity || 1,
        price: product.price,
      });
      
      subtotal += product.price * (item.quantity || 1);
    }
    
    const tax = Math.round(subtotal * 0.05 * 100) / 100; // 5% tax
    const total = subtotal + tax;
    
    // Create order
    const order = await Order.create({
      user: decoded.id,
      items: orderItems,
      shippingInfo,
      paymentMethod,
      paymentStatus: 'completed',
      paymentId: paymentId || `PAY-${Date.now()}`,
      subtotal,
      tax,
      total,
      status: 'processing',
    });
    
    // Clear cart after successful order
    await Cart.findOneAndUpdate(
      { user: decoded.id },
      { items: [] }
    );
    
    return NextResponse.json(
      { 
        order, 
        message: 'Order created successfully',
        orderNumber: order.orderNumber 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Orders POST error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}

