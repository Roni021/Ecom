"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [upiId, setUpiId] = useState("");
  
  const { token, isAuthenticated } = useAuth();
  const { items, subtotal, tax, total, clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create order
      const orderItems = items.map(item => ({
        productId: item.product._id,
        quantity: item.quantity,
      }));

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: orderItems,
          paymentMethod,
          paymentId: `PAY-${Date.now()}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create order");
      }

      const data = await res.json();
      
      // Clear cart
      await clearCart();
      
      // Redirect to success page
      router.push(`/order_success?order=${data.orderNumber}`);
    } catch (err: any) {
      setError(err.message || "Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="bg-[var(--background-light)] dark:bg-[var(--background-dark)] min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Payment Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handlePayment}>
              {/* Payment Method Selection */}
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                  <h2 className="text-xl font-bold">Payment Method</h2>
                </div>
                
                <div className="p-4 flex gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex-1 py-3 px-4 rounded-lg border font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === "card"
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">credit_card</span>
                    Card
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`flex-1 py-3 px-4 rounded-lg border font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === "upi"
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">smartphone</span>
                    UPI
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`flex-1 py-3 px-4 rounded-lg border font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === "paypal"
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                    PayPal
                  </button>
                </div>

                {/* Card Payment Form */}
                {paymentMethod === "card" && (
                  <div className="p-6 space-y-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold">Cardholder Name</label>
                      <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold">Expiry Date</label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary outline-none"
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold">CVC</label>
                        <input
                          type="text"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* UPI Payment Form */}
                {paymentMethod === "upi" && (
                  <div className="p-6 space-y-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold">UPI ID</label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@upi"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                    <p className="text-sm text-slate-500">
                      You will receive a payment request on your UPI app
                    </p>
                  </div>
                )}

                {/* PayPal */}
                {paymentMethod === "paypal" && (
                  <div className="p-6 space-y-4 text-center">
                    <p className="text-slate-600 dark:text-slate-400">
                      You will be redirected to PayPal to complete your purchase securely.
                    </p>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <strong>Sample PayPal Account:</strong><br/>
                        Email: buyer@example.com<br/>
                        Password: password123
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || items.length === 0}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="animate-spin material-symbols-outlined">sync</span>
                    Processing...
                  </>
                ) : (
                  <>
                    Complete Purchase
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </>
                )}
              </button>
              
              <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                By clicking complete purchase, you agree to our Terms of Service.
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-10">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold">Order Summary</h3>
                </div>
                
                <div className="p-6">
                  {items.length === 0 ? (
                    <p className="text-center text-slate-500 py-8">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {items.map((item, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
                              {item.product.images && item.product.images[0] ? (
                                <img 
                                  src={item.product.images[0]} 
                                  alt={item.product.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <span className="material-symbols-outlined text-slate-400">image</span>
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-sm line-clamp-1">{item.product.title}</h4>
                              <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-sm">${(item.product.price * item.quantity).toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 py-6 border-y border-slate-100 dark:border-slate-800">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
                          <span className="font-medium">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400">Taxes &amp; Fees</span>
                          <span className="font-medium">${tax.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center py-6">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-3xl font-black text-primary">${total.toFixed(2)}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                  <span className="material-symbols-outlined text-4xl">payments</span>
                  <span className="material-symbols-outlined text-4xl">credit_card</span>
                  <span className="material-symbols-outlined text-4xl">account_balance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

