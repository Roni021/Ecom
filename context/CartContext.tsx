"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useAuth } from './AuthContext';

interface Product {
  _id: string;
  title: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
  addToCart: (productId: string, quantity?: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  loadCart: () => Promise<void>;
  loading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { token, isAuthenticated } = useAuth();

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.05 * 100) / 100;
  const total = subtotal + tax;
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Load cart from API when authenticated
  const loadCart = async () => {
    if (!token) {
      // Load from localStorage for guest users
      const localCart = localStorage.getItem('guestCart');
      if (localCart) {
        try {
          setItems(JSON.parse(localCart));
        } catch (e) {
          console.error('Failed to parse local cart');
        }
      }
      return;
    }

    try {
      const res = await fetch('/api/cart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setItems(data.cart?.items || []);
      }
    } catch (error) {
      console.error('Failed to load cart:', error);
    }
  };

  useEffect(() => {
    loadCart();
  }, [token]);

  // Save to localStorage for guest users
  useEffect(() => {
    if (!token && items.length > 0) {
      localStorage.setItem('guestCart', JSON.stringify(items));
    }
  }, [items, token]);

  const addToCart = async (productId: string, quantity = 1) => {
    setLoading(true);
    
    if (token) {
      try {
        const res = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productId, quantity }),
        });

        if (res.ok) {
          const data = await res.json();
          setItems(data.cart?.items || []);
        }
      } catch (error) {
        console.error('Failed to add to cart:', error);
      }
    } else {
      // Guest cart - add locally
      const localCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
      const existingIndex = localCart.findIndex((item: any) => item.productId === productId);
      
      if (existingIndex > -1) {
        localCart[existingIndex].quantity += quantity;
      } else {
        localCart.push({ productId, quantity });
      }
      
      localStorage.setItem('guestCart', JSON.stringify(localCart));
      
      // For now, just add a placeholder - in real app, we'd fetch product details
      // This is simplified for demo
      setItems([...items, { product: { _id: productId, title: 'Product', price: 0, images: [] }, quantity }]);
    }
    
    setLoading(false);
  };

  const removeFromCart = async (productId: string) => {
    setLoading(true);
    
    if (token) {
      try {
        const res = await fetch(`/api/cart?productId=${encodeURIComponent(productId)}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setItems(data.cart?.items || []);
        }
      } catch (error) {
        console.error('Failed to remove from cart:', error);
      }
    } else {
      const localCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
      const filtered = localCart.filter((item: any) => item.productId !== productId);
      localStorage.setItem('guestCart', JSON.stringify(filtered));
      setItems(items.filter(item => item.product._id !== productId));
    }
    
    setLoading(false);
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCart(productId);
      return;
    }

    setLoading(true);
    
    if (token) {
      try {
        const res = await fetch('/api/cart', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productId, quantity }),
        });

        if (res.ok) {
          const data = await res.json();
          setItems(data.cart?.items || []);
        }
      } catch (error) {
        console.error('Failed to update quantity:', error);
      }
    } else {
      const localCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
      const updated = localCart.map((item: any) => 
        item.productId === productId ? { ...item, quantity } : item
      );
      localStorage.setItem('guestCart', JSON.stringify(updated));
      
      setItems(items.map(item => 
        item.product._id === productId ? { ...item, quantity } : item
      ));
    }
    
    setLoading(false);
  };

  const clearCart = async () => {
    setLoading(true);
    
    if (token) {
      try {
        const res = await fetch('/api/cart', {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error('Failed to clear cart');
        }
      } catch (error) {
        console.error('Failed to clear cart:', error);
      }
    } else {
      localStorage.removeItem('guestCart');
    }
    
    setItems([]);
    setLoading(false);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        tax,
        total,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        loadCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

