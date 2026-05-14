"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { isAuthenticated } = useAuth();
  const { items, subtotal, tax, total, updateQuantity, removeFromCart, loading } = useCart();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      // Keep cart for guest users
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <div className="mb-10">
          <h2 className="text-4xl font-black tracking-tight mb-2">Your Cart</h2>
          <p className="text-slate-500 dark:text-slate-400">
            {items.length > 0 
              ? `Review your ${items.length} item${items.length > 1 ? 's' : ''} before proceeding to checkout.`
              : 'Your cart is empty. Start shopping!'
            }
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4">shopping_cart</span>
            <p className="text-slate-500 mb-6">Your cart is empty</p>
            <Link 
              href="/products" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <div key={index} className="group relative flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                    {item.product.images && item.product.images[0] ? (
                      <img 
                        alt={item.product.title} 
                        className="h-full w-full object-cover" 
                        src={item.product.images[0]} 
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-slate-400">image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between h-full py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold">{item.product.title}</h3>
                        <p className="text-lg font-bold text-primary">${item.product.price.toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">license</span> Digital Download
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800">
                          <button 
                            onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                            className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors px-2"
                            disabled={loading}
                          >
                            <span className="material-symbols-outlined text-sm block">remove</span>
                          </button>
                          <span className="px-3 py-1 text-sm font-bold border-x border-slate-200 dark:border-slate-700">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                            className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors px-2"
                            disabled={loading}
                          >
                            <span className="material-symbols-outlined text-sm block">add</span>
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.product._id)}
                          className="flex items-center gap-1.5 text-red-500 hover:text-red-600 text-sm font-semibold transition-colors"
                          disabled={loading}
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl shadow-xl sticky top-28">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Subtotal</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Platform Tax (5%)</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-black text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Coupon Field */}
                <div className="mb-8">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2" htmlFor="coupon">
                    Coupon Code
                  </label>
                  <div className="flex gap-2">
                    <input 
                      className="flex-1 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" 
                      id="coupon" 
                      placeholder="DIGITAL24" 
                      type="text"
                    />
                    <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Checkout Button */}
                {isAuthenticated ? (
                  <Link
                    href="/checkout"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all active:scale-[0.98]"
                  >
                    Proceed to Checkout
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all active:scale-[0.98]"
                  >
                    Login to Checkout
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                )}
                
                <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
                  <span className="material-symbols-outlined">shield</span>
                  <span className="text-xs font-medium">Secure Encrypted Transaction</span>
                </div>
              </div>

              {/* Upsell / Promo */}
              <div className="bg-gradient-to-br from-primary to-purple-600 rounded-xl p-6 text-white shadow-lg overflow-hidden relative">
                <div className="relative z-10">
                  <h4 className="font-bold mb-2">Join Premium Membership</h4>
                  <p className="text-sm opacity-90 mb-4">Get 20% off on all digital assets and priority support.</p>
                  <Link 
                    className="inline-block text-xs font-bold bg-white text-primary px-4 py-2 rounded-full hover:bg-slate-100 transition-colors" 
                    href="/signup"
                  >
                    Learn More
                  </Link>
                </div>
                <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10 rotate-12">workspace_premium</span>
              </div>
            </div>
          </div>
        )}

        {/* Continue Shopping Link */}
        <div className="mt-12 text-center">
          <Link className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-medium transition-colors" href="/products">
            <span className="material-symbols-outlined">keyboard_backspace</span>
            Continue Shopping
          </Link>
        </div>
      </main>

      {/* Footer Simple */}
      <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">© 2024 DigitalMarket Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-100" href="/support/privacy">Privacy Policy</Link>
            <Link className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-100" href="/support/termsofservices">Terms of Service</Link>
            <Link className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-100" href="/support/help_center">Help Center</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

