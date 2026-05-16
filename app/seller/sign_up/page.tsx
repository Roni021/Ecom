"use client";

import React from 'react';

export default function SellerSignUpPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-container-max w-full px-margin-desktop grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container text-on-primary-container rounded-full font-label-sm text-label-sm">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              Creator Program
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-background leading-tight">
              Join our community of elite creators.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Empower your creative business with professional-grade tools, secure payments, and a global
              marketplace built for high-intent buyers.
            </p>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl border border-surface-border premium-shadow">
            <div className="flex items-center gap-4 mb-4">
              <img
                alt="Alex Rivera"
                className="w-12 h-12 rounded-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnMVJlrCHxoJFBFG8xSryQ222zRbn_83H5ZaUf3etFYKnEQPU6fpn8hy9xRaPelD5SYBMRovoqq3b5DcbeJB6WVSW1F-Livvgnn-hkjtv9cBfaDWPeexw6UpbncqAS5q35DLRplr4nja1ZHuyaE6_EkKJ4vki-oHcJkZl3OZdfYIMXRBlzPptD9r5VDn3e5nutDcq6e5wsF8-RE6nv34jmYv6c_kKFv4pQf9JKQSLyHVXlygy041CL1NrJHnOWIswtLhlP2nttr7OC"
              />
              <div>
                <p className="font-label-md text-label-md text-on-surface">Alex Rivera</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Top-Rated Template Seller</p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface italic">
              “DeesignAssets transformed my hobby into a six-figure digital agency. The platform's focus on quality
              over quantity is exactly what high-end creators need.”
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary">12k+</span>
              <span className="font-label-sm text-label-sm text-outline">Active Sellers</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary">$45M</span>
              <span className="font-label-sm text-label-sm text-outline">Creator Earnings</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
          <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl premium-shadow border border-surface-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
                  <input
                    className="w-full bg-white border-surface-border rounded-lg py-3 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-body-md outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-on-surface-variant">Email Address</label>
                  <input
                    className="w-full bg-white border-surface-border rounded-lg py-3 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-body-md outline-none"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-on-surface-variant">Shop Name</label>
                  <input
                    className="w-full bg-white border-surface-border rounded-lg py-3 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-body-md outline-none"
                    placeholder="e.g. Minimalist UI Kit Store"
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-on-surface-variant">Phone Number</label>
                  <input
                    className="w-full bg-white border-surface-border rounded-lg py-3 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-body-md outline-none"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-on-surface-variant">Password</label>
                  <input
                    className="w-full bg-white border-surface-border rounded-lg py-3 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-body-md outline-none"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-on-surface-variant">Confirm Password</label>
                  <input
                    className="w-full bg-white border-surface-border rounded-lg py-3 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-body-md outline-none"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span className="flex items-center gap-1 font-label-sm text-label-sm text-success-green">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> 8+ characters
                </span>
                <span className="flex items-center gap-1 font-label-sm text-label-sm text-outline">
                  <span className="material-symbols-outlined text-[14px]">circle</span> Special character
                </span>
              </div>

              <div className="flex items-start gap-3">
                <input
                  className="mt-1 w-4 h-4 rounded border-surface-border text-primary focus:ring-primary"
                  id="terms"
                  type="checkbox"
                />
                <label
                  className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed"
                  htmlFor="terms"
                >
                  I agree to the <a className="text-primary hover:underline" href="#">Seller Terms of Service</a> and{' '}
                  <a className="text-primary hover:underline" href="#">Privacy Policy</a>. I confirm that I have the
                  right to sell the content I upload.
                </label>
              </div>

              <button
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-xl shadow-sm hover:opacity-95 active:scale-[0.98] transition-all relative overflow-hidden group"
                type="submit"
              >
                <span className="relative z-10">Create Seller Account</span>
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-surface-border"></div>
                </div>
                <div className="relative flex justify-center text-label-sm">
                  <span className="bg-surface-container-lowest px-4 text-on-surface-variant">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-surface-border rounded-xl font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors"
                  type="button"
                >
                  <img
                    alt="Google"
                    className="w-5 h-5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_uWYFvPiFso9ztmdUH6dOxPMNavRScl7lN0nJl71Ib5gRecYprWaNxOOzJvi1tJI-dtciwYMuAUi-hea7FlAc99ou-53mI-LTW3Y7cNllOR3A6jgWowCQrnolWtN2a1bd2ujG6L_GLkrtIwFSBkTJbe0xI2iW4Z83hGGzTQfjyWz5QHLssRKLTHdbQFXFPm9oyLt7muZOFm14gxpeXShaLpSj_1J2ZfvlZS5x1gjdbXJz2yFChHBR1S0aEe7ThQAYqDjmDfF9LvHA"
                  />
                  Google
                </button>
                <button
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-surface-border rounded-xl font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors"
                  type="button"
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    ios
                  </span>
                  Apple
                </button>
              </div>

              <p className="text-center font-body-md text-body-md text-on-surface-variant">
                Already have an account? <a className="text-primary font-semibold hover:underline" href="#">Back to login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

