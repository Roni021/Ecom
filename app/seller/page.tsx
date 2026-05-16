"use client";

import Link from "next/link";

export default function SellerPage() {
  return (
    <div className="theme-page font-display antialiased">

      {/* 🔥 HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-accent/10 text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-6">
                🚀 Start Selling Today
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
                Turn Your Designs <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-purple-600">
                  Into Income.
                </span>
              </h1>

              <p className="text-lg lg:text-xl theme-text mb-10 max-w-xl leading-relaxed">
                Sell templates, UI kits, and digital assets to thousands of buyers.
                Build passive income effortlessly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all text-center"
                >
                  Let's Register
                </Link>

                <Link
                  href="/about"
                  className="theme-surface border px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="rounded-2xl shadow-2xl rotate-3"
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
                  alt=""
                />
                <img
                  className="rounded-2xl shadow-2xl -rotate-3"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                  alt=""
                />
                <img
                  className="rounded-2xl shadow-2xl -rotate-2"
                  src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                  alt=""
                />
                <img
                  className="rounded-2xl shadow-2xl rotate-2"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt=""
                />
              </div>

              <div className="absolute inset-0 bg-[var(--primary)]/10 blur-3xl rounded-full -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 💡 WHY SELL SECTION */}
      <section className="py-24 theme-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Sell on DesignAssets?</h2>
          <p className="theme-text max-w-2xl mx-auto">
            Everything you need to grow your digital business in one place.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "🌍 Global Reach",
              desc: "Sell to customers worldwide with built-in payments and delivery."
            },
            {
              title: "📊 Creator Tools",
              desc: "Analytics, insights, and automation to grow your sales."
            },
            {
              title: "💰 Low Fees",
              desc: "Only 5% commission. No hidden charges."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="theme-surface p-8 rounded-2xl border hover:shadow-xl hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="theme-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⚙️ HOW IT WORKS */}
      <section className="py-24 bg-slate-50 dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="theme-text max-w-2xl mx-auto">
            Start earning in just 3 simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {[
            {
              step: "1",
              title: "Create Account",
              desc: "Sign up and set up your seller profile."
            },
            {
              step: "2",
              title: "Upload Products",
              desc: "Add your templates, UI kits, or assets."
            },
            {
              step: "3",
              title: "Earn Money",
              desc: "Start selling and receive instant payouts."
            }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="theme-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <div className="bg-[var(--primary)] rounded-3xl p-12 text-white shadow-xl">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Ready to Start Selling?
            </h2>
            <p className="mb-10 text-white/80">
              Join thousands of creators earning passive income.
            </p>

            <Link
              href="/signup"
              className="bg-white text-[var(--primary)] px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all inline-block"
            >
              Open Your Shop
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}