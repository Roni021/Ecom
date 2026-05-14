import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/db';
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
    
    let cart = await Cart.findOne({ user: decoded.id })
      .populate('items.product');
    
    // Create empty cart if not exists
    if (!cart) {
      cart = await Cart.create({ user: decoded.id, items: [] });
    }
    
    return NextResponse.json({ cart });
  } catch (error: any) {
    console.error('Cart GET error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch cart' },
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
    const { productId, quantity = 1 } = body;
    
    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }
    
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    // Find or create cart
    let cart = await Cart.findOne({ user: decoded.id });
    
    if (!cart) {
      cart = await Cart.create({
        user: decoded.id,
        items: [{ product: productId, quantity }]
      });
    } else {
      // Check if item already in cart
      const existingItemIndex = cart.items.findIndex(
        (item: any) => item.product.toString() === productId
      );
      
      if (existingItemIndex > -1) {
        // Update quantity
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        // Add new item
        cart.items.push({ product: productId, quantity });
      }
      
      await cart.save();
    }
    
    // Return populated cart
    cart = await Cart.findOne({ user: decoded.id })
      .populate('items.product');
    
    return NextResponse.json(
      { cart, message: 'Item added to cart' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Cart POST error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to add to cart' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
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
    const { productId, quantity } = body;
    
    if (!productId || quantity === undefined) {
      return NextResponse.json(
        { error: 'Product ID and quantity are required' },
        { status: 400 }
      );
    }
    
    const cart = await Cart.findOne({ user: decoded.id });
    
    if (!cart) {
      return NextResponse.json(
        { error: 'Cart not found' },
        { status: 404 }
      );
    }
    
    const itemIndex = cart.items.findIndex(
      (item: any) => item.product.toString() === productId
    );
    
    if (itemIndex === -1) {
      return NextResponse.json(
        { error: 'Item not found in cart' },
        { status: 404 }
      );
    }
    
    if (quantity <= 0) {
      // Remove item
      cart.items.splice(itemIndex, 1);
    } else {
      // Update quantity
      cart.items[itemIndex].quantity = quantity;
    }
    
    await cart.save();
    
    const updatedCart = await Cart.findOne({ user: decoded.id })
      .populate('items.product');
    
    return NextResponse.json(
      { cart: updatedCart, message: 'Cart updated' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Cart PUT error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update cart' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
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
    
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');
    
    const cart = await Cart.findOne({ user: decoded.id });
    
    if (!cart) {
      return NextResponse.json(
        { error: 'Cart not found' },
        { status: 404 }
      );
    }
    
    if (productId) {
      // Remove specific item
      cart.items = cart.items.filter(
        (item: any) => item.product.toString() !== productId
      );
    } else {
      // Clear entire cart
      cart.items = [];
    }
    
    await cart.save();
    
    const updatedCart = await Cart.findOne({ user: decoded.id })
      .populate('items.product');
    
    return NextResponse.json(
      { cart: updatedCart, message: 'Item removed from cart' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Cart DELETE error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to remove from cart' },
      { status: 500 }
    );
  }
}

