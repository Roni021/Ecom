"use client";
import Link from "next/link";
export default function about() {
  return (
    <div className="theme-page font-display theme-text dark:theme-text antialiased">
<div className="relative flex min-h-screen flex-col">
{/* <!-- Navigation Header --> */}
<header className="sticky top-0 z-50 w-full border-b border-theme-surface dark:border-slate-800 theme-surface/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-12 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 theme-accent flex items-center justify-center rounded-lg text-white">
<span className="material-symbols-outlined text-2xl">grid_view</span>
</div>
<h2 className="theme-text dark:text-white text-xl font-bold tracking-tight">ShopDynamics</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="theme-text dark:theme-text hover:theme-accent-text transition-colors text-sm font-medium" href="#">Marketplace</a>
<a className="theme-text dark:theme-text hover:theme-accent-text transition-colors text-sm font-medium" href="#">Sell</a>
<a className="theme-text dark:theme-text hover:theme-accent-text transition-colors text-sm font-medium" href="#">Support</a>
</nav>
</div>
<div className="flex flex-1 justify-end items-center gap-4">
<div className="relative hidden sm:block w-full max-w-xs">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 theme-text text-xl">search</span>
<input className="w-full theme-surface theme-surface border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Search legal docs..."/>
</div>
<div className="w-10 h-10 rounded-full border border-theme-surface border-theme-surface theme-surface overflow-hidden" data-alt="User profile avatar placeholder">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="Portrait of a professional user avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4LHg2qInVVoh0mzUxEteMMxjCRtL1-y2IYQD-NOldc9UxU21MzoaoeWHmFN07uLFWOZOvSzNNQRrjZ8Ydaknu5zAwkQ-f_xewSRm0xqLJzKQQWzW7BDHCkgrK39SLeTTyA85I5Yd--_8hu1SO28yxbIKbV4GyJwpt2uVcveni1CjEp4XmngszDlfnDXOvocgXBB-VG_xLXjzLwl0Pg2SynRbzbMG77D1z3i4DxZoumU0ht-f_ZVDkBYTecCExVWwhUEjYuwUrHKN"/>
</div>
</div>
</div>
</header>
<main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
{/* <!-- Breadcrumbs & Title --> */}
<div className="mb-12">
<nav className="flex items-center gap-2 text-sm theme-text mb-6">
<a className="hover:theme-accent-text" href="#">Home</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="theme-text dark:theme-text font-medium">Terms of Service</span>
</nav>
<h1 className="text-4xl md:text-5xl font-extrabold theme-text dark:text-white mb-4 tracking-tight">Terms of Service</h1>
<div className="flex items-center gap-3 theme-text dark:theme-text">
<span className="material-symbols-outlined text-lg">calendar_today</span>
<p className="text-base">Last Updated: October 24, 2023</p>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-12 relative">
{/* <!-- Sidebar Navigation --> */}
<aside className="lg:w-72 shrink-0">
<div className="sticky top-28 space-y-2">
<h3 className="text-xs font-bold theme-text uppercase tracking-widest px-3 mb-4">Table of Contents</h3>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl theme-accent/10 theme-accent-text font-semibold transition-all group" href="#intro">
<span className="material-symbols-outlined text-xl">info</span>
<span className="text-sm">1. Introduction</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 transition-all group" href="#accounts">
<span className="material-symbols-outlined text-xl theme-text group-hover:theme-accent-text">person</span>
<span className="text-sm">2. User Accounts</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 transition-all group" href="#ip">
<span className="material-symbols-outlined text-xl theme-text group-hover:theme-accent-text">copyright</span>
<span className="text-sm">3. Intellectual Property</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 transition-all group" href="#payments">
<span className="material-symbols-outlined text-xl theme-text group-hover:theme-accent-text">payments</span>
<span className="text-sm">4. Payments &amp; Refunds</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 transition-all group" href="#termination">
<span className="material-symbols-outlined text-xl theme-text group-hover:theme-accent-text">cancel</span>
<span className="text-sm">5. Termination</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 transition-all group" href="#contact">
<span className="material-symbols-outlined text-xl theme-text group-hover:theme-accent-text">mail</span>
<span className="text-sm">Contact Us</span>
</a>
<div className="mt-8 p-6 theme-accent rounded-2xl text-white">
<p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">Need Help?</p>
<p className="text-sm leading-relaxed mb-4">Our legal team is available to clarify any points of these terms.</p>
<button className="w-full theme-surface theme-surface theme-accent-text text-sm font-bold py-2 rounded-lg hover:theme-surface transition-colors">
                            Help Center
                        </button>
</div>
</div>
</aside>
{/* <!-- Main Content Area --> */}
<article className="flex-1 theme-surface theme-surface/50 rounded-2xl border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-sm">
<div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
<section className="scroll-mt-28" id="intro">
<h2 className="text-2xl font-bold theme-text dark:text-white mb-6 flex items-center gap-3">
<span className="w-8 h-8 rounded-lg theme-accent/10 theme-accent-text flex items-center justify-center text-base">1</span>
                            Introduction
                        </h2>
<div className="space-y-4 theme-text dark:theme-text leading-relaxed">
<p>Welcome to ShopDynamics. These Terms of Service ("Terms") govern your access to and use of our marketplace platform for digital products. By creating an account or using our services, you agree to be bound by these Terms.</p>
<p>We provide a venue where creators ("Sellers") can list digital items and customers ("Buyers") can purchase licenses for those items. ShopDynamics acts as an intermediary and is not a party to the direct transaction between Buyers and Sellers except as described herein.</p>
</div>
</section>
<hr className="border-slate-100 dark:border-slate-800"/>
<section className="scroll-mt-28" id="accounts">
<h2 className="text-2xl font-bold theme-text dark:text-white mb-6 flex items-center gap-3">
<span className="w-8 h-8 rounded-lg theme-accent/10 theme-accent-text flex items-center justify-center text-base">2</span>
                            User Accounts
                        </h2>
<div className="space-y-4 theme-text dark:theme-text leading-relaxed">
<p>To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process.</p>
<ul className="list-disc pl-5 space-y-2">
<li>You are responsible for safeguarding your password.</li>
<li>You must notify us immediately of any unauthorized use of your account.</li>
<li>Account sharing is strictly prohibited unless specifically authorized.</li>
</ul>
</div>
</section>
<hr className="border-slate-100 dark:border-slate-800"/>
<section className="scroll-mt-28" id="ip">
<h2 className="text-2xl font-bold theme-text dark:text-white mb-6 flex items-center gap-3">
<span className="w-8 h-8 rounded-lg theme-accent/10 theme-accent-text flex items-center justify-center text-base">3</span>
                            Intellectual Property
                        </h2>
<div className="space-y-4 theme-text dark:theme-text leading-relaxed">
<p>When you purchase a digital product, you are purchasing a license to use that product, not the ownership of the item itself. The license type (e.g., Personal, Commercial) will be specified at the time of purchase.</p>
<div className="bg-slate-50 theme-surface/50 p-6 rounded-xl border-l-4 border-theme-accent">
<p className="text-sm font-medium italic theme-text dark:theme-text">"Sellers retain all intellectual property rights to their respective digital products. Buyers may not redistribute, resell, or claim ownership of the licensed content except where expressly permitted by the license agreement."</p>
</div>
</div>
</section>
<hr className="border-slate-100 dark:border-slate-800"/>
<section className="scroll-mt-28" id="payments">
<h2 className="text-2xl font-bold theme-text dark:text-white mb-6 flex items-center gap-3">
<span className="w-8 h-8 rounded-lg theme-accent/10 theme-accent-text flex items-center justify-center text-base">4</span>
                            Payments &amp; Refunds
                        </h2>
<div className="space-y-4 theme-text dark:theme-text leading-relaxed">
<p>All prices are listed in USD. ShopDynamics uses secure third-party payment processors to handle transactions. By making a purchase, you agree to pay the specified price and any applicable taxes.</p>
<p>Due to the nature of digital goods, refunds are generally not provided once a download has been initiated. However, we offer a 14-day 'Quality Guarantee' if a product is found to be defective or not as described.</p>
</div>
</section>
<hr className="border-slate-100 dark:border-slate-800"/>
<section className="scroll-mt-28" id="termination">
<h2 className="text-2xl font-bold theme-text dark:text-white mb-6 flex items-center gap-3">
<span className="w-8 h-8 rounded-lg theme-accent/10 theme-accent-text flex items-center justify-center text-base">5</span>
                            Termination
                        </h2>
<div className="space-y-4 theme-text dark:theme-text leading-relaxed">
<p>We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
<p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact our support team.</p>
</div>
</section>
<div className="mt-12 p-8 bg-slate-50 theme-surface/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100 dark:border-slate-800">
<div className="text-center md:text-left">
<h4 className="text-lg font-bold theme-text dark:text-white mb-1">Have more questions?</h4>
<p className="text-sm theme-text">Contact our legal compliance team for more information.</p>
</div>
<a className="bg-[var(--primary)] text-white px-8 py-3 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all shadow-lg shadow-primary/20" href="mailto:legal@shopdynamics.com">
                            Email Support
                        </a>
</div>
</div>
</article>
</div>
</main>
{/* <!-- Footer --> */}
<footer className="theme-surface dark:bg-background-dark border-t border-theme-surface dark:border-slate-800 py-12 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 theme-accent/20 flex items-center justify-center rounded theme-accent-text">
<span className="material-symbols-outlined text-lg">grid_view</span>
</div>
<span className="font-bold theme-text dark:text-white">ShopDynamics</span>
</div>
<div className="flex gap-8 text-sm theme-text">
<a className="hover:theme-accent-text" href="#">Privacy Policy</a>
<a className="hover:theme-accent-text" href="#">Cookies</a>
<a className="hover:theme-accent-text" href="#">Status</a>
<a className="hover:theme-accent-text" href="#">Contact</a>
</div>
<p className="text-sm theme-text">© 2026 ShopDynamics Inc. All rights reserved.</p>
</div>
</footer>
</div>
</div>
  );
}