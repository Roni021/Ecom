"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface Order {
  _id: string;
  orderNumber: string;
  total: number;
  status: string;
  createdAt: string;
  items: Array<{
    product: {
      title: string;
      images: string[];
    };
    quantity: number;
    price: number;
  }>;
}

export default function ProfilePage() {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'orders' | 'settings'>('orders');

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  const fetchOrders = async () => {
    try {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      const res = await fetch('/api/orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      }
    } catch (err) {
      console.error('Failed to fetch orders:', err);
    } finally {
      setOrdersLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'processing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'shipped':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'delivered':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  if (loading || !isAuthenticated) {
    return (
      <div className="theme-page min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary)]"></div>
      </div>
    );
  }

  return (
    <div className="theme-page min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-3xl font-bold">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user?.name || 'User'}</h1>
              <p className="theme-text dark:theme-text">{user?.email || 'user@example.com'}</p>
              <span className="inline-block mt-2 px-3 py-1 theme-accent/10 text-[var(--primary)] text-sm font-semibold rounded-full capitalize">
                {user?.role || 'User'}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-theme-surface border-theme-surface">
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'orders'
                ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]'
                : 'theme-text hover:theme-text dark:hover:theme-text'
            }`}
          >
            My Orders
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'settings'
                ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]'
                : 'theme-text hover:theme-text dark:hover:theme-text'
            }`}
          >
            Settings
          </button>
        </div>

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            {ordersLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary)]"></div>
              </div>
            ) : orders.length === 0 ? (
              <div className="theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface p-12 text-center">
                <span className="material-symbols-outlined text-6xl theme-text dark:theme-text mb-4">receipt_long</span>
                <h2 className="text-xl font-bold mb-2">No orders yet</h2>
                <p className="theme-text dark:theme-text mb-6">Start shopping to see your orders here!</p>
                <a
                  href="/products"
                  className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
                >
                  Browse Products
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order._id}
                    className="theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden"
                  >
                    <div className="p-6 border-b border-slate-100 border-theme-surface">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <p className="text-sm theme-text dark:theme-text">Order Number</p>
                          <p className="font-bold text-lg">{order.orderNumber || order._id}</p>
                        </div>
                        <div>
                          <p className="text-sm theme-text dark:theme-text">Date</p>
                          <p className="font-medium">
                            {new Date(order.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm theme-text dark:theme-text">Total</p>
                          <p className="font-bold text-xl text-[var(--primary)]">${order.total?.toFixed(2) || '0.00'}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold capitalize ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-semibold mb-4">Items:</p>
                      <div className="space-y-3">
                        {order.items?.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg theme-surface dark:bg-slate-700 overflow-hidden">
                              {item.product?.images?.[0] ? (
                                <img
                                  src={item.product.images[0]}
                                  alt={item.product.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <span className="material-symbols-outlined theme-text">image</span>
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium line-clamp-1">{item.product?.title || 'Product'}</p>
                              <p className="text-sm theme-text">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface p-8">
            <h2 className="text-xl font-bold mb-6">Account Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue={user?.name || ''}
                  className="w-full px-4 py-3 rounded-lg border border-theme-surface border-theme-surface bg-transparent focus:ring-2 focus:ring-(--primary) outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue={user?.email || ''}
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-theme-surface border-theme-surface bg-slate-50 theme-surface theme-text cursor-not-allowed"
                />
                <p className="text-xs theme-text mt-1">Email cannot be changed</p>
              </div>
              <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all">
                Save Changes
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-theme-surface border-theme-surface">
              <h2 className="text-xl font-bold mb-6">Change Password</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Current Password</label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full px-4 py-3 rounded-lg border border-theme-surface border-theme-surface bg-transparent focus:ring-2 focus:ring-(--primary) outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-4 py-3 rounded-lg border border-theme-surface border-theme-surface bg-transparent focus:ring-2 focus:ring-(--primary) outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full px-4 py-3 rounded-lg border border-theme-surface border-theme-surface bg-transparent focus:ring-2 focus:ring-(--primary) outline-none"
                  />
                </div>
                <button className="bg-slate-800 dark:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

