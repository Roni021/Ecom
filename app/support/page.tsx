"use client";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-slate-600 dark:text-slate-400">Find answers to common questions or contact our support team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/support/help_center" className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">help</span>
            <h3 className="text-xl font-bold mb-2">Help Center</h3>
            <p className="text-slate-500 dark:text-slate-400">BrowseFAQs and get answers to common questions</p>
          </Link>

          <Link href="/support/termsofservices" className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">description</span>
            <h3 className="text-xl font-bold mb-2">Terms of Service</h3>
            <p className="text-slate-500 dark:text-slate-400">Read our terms and conditions</p>
          </Link>

          <Link href="/support/privacy" className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">privacy_tip</span>
            <h3 className="text-xl font-bold mb-2">Privacy Policy</h3>
            <p className="text-slate-500 dark:text-slate-400">Learn how we protect your data</p>
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Link 
            href="/contactus" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
}

