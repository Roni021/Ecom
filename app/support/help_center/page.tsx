"use client";
import Link from "next/link";
export default function about() {
  return (
    <div className="theme-page theme-text dark:theme-text transition-colors duration-200">
{/* <!-- Sticky Navbar --> */}
<header className="sticky top-0 z-50 w-full theme-page/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-theme-surface dark:border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 gap-4">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 theme-accent-text">
<span className="material-symbols-outlined text-3xl font-bold">dynamic_form</span>
<h2 className="theme-text dark:theme-text text-xl font-extrabold tracking-tight">ShopDynamics</h2>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-semibold hover:theme-accent-text transition-colors" href="#">Browse</a>
<a className="text-sm font-semibold hover:theme-accent-text transition-colors" href="#">Sell</a>
<a className="theme-accent-text text-sm font-bold border-b-2 border-theme-accent pb-0.5" href="#">Help</a>
</nav>
</div>
<div className="flex-1 max-w-md hidden sm:block">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 theme-text group-focus-within:theme-accent-text transition-colors">search</span>
<input className="w-full theme-surface theme-surface border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 placeholder:theme-text" placeholder="Search Marketplace..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:theme-surface dark:hover:bg-slate-800">
<span className="material-symbols-outlined theme-text dark:theme-text">shopping_cart</span>
</button>
<div className="h-8 w-8 rounded-full theme-accent/20 flex items-center justify-center overflow-hidden border border-theme-accent/30">
<img className="h-full w-full object-cover" data-alt="User profile avatar illustration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUeNcvzQAOCiqvfVq6XuKqRVZAv9aikRuXNI4dAEta9LtZ3G66FB5BwDpX1lBmAH538ZN0mMHV7-hswOofGkfrPsyQwLhxeUOfF62MZD3SR3p3binI25RAvrqIpfBGgiqO7WRid7pQpaGhvyocPw6IJOVqLLReYQJTppg5RC5oX5j5fiOudKTOfKobfN1Rl9pUYFc1a014F6BBkG8plv2oiOVgY0GtzH3uIyoRXnVDK14h3HXqLONbBGz2qeW8th3uJzrtsVcql8MP"/>
</div>
</div>
</div>
</div>
</header>
<main>
{/* <!-- Hero Section --> */}
<section className="relative py-16 md:py-24 overflow-hidden">
<div className="absolute inset-0 theme-accent/5 dark:theme-accent/10 -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-linear-to-b from-primary/10 to-transparent blur-3xl -z-10"></div>
<div className="max-w-4xl mx-auto px-4 text-center">
<h1 className="text-4xl md:text-6xl font-black theme-text dark:text-white mb-6 tracking-tight">
                    How can we help you today?
                </h1>
<p className="text-lg theme-text dark:theme-text mb-10 max-w-2xl mx-auto">
                    Search our knowledge base for articles on selling, buying, account management, and troubleshooting.
                </p>
<div className="max-w-2xl mx-auto">
<div className="flex p-1 theme-surface theme-surface rounded-2xl shadow-xl shadow-primary/5 border border-theme-surface dark:border-slate-800">
<div className="flex items-center pl-4 theme-text">
<span className="material-symbols-outlined">search</span>
</div>
<input className="flex-1 border-none focus:ring-0 bg-transparent text-lg px-4 py-4 dark:text-white" placeholder="Describe your issue (e.g. 'how to link bank account')" type="text"/>
<button className="theme-accent text-white font-bold px-8 py-4 rounded-xl hover:theme-accent/90 transition-all shadow-lg shadow-primary/20">
                            Search
                        </button>
</div>
<div className="mt-4 flex flex-wrap justify-center gap-2 text-sm theme-text">
<span>Popular:</span>
<a className="theme-accent-text hover:underline" href="#">Return policy</a>,
                        <a className="theme-accent-text hover:underline" href="#">Payout schedule</a>,
                        <a className="theme-accent-text hover:underline" href="#">Account verification</a>
</div>
</div>
</div>
</section>
{/* <!-- Category Grid --> */}
<section className="max-w-7xl mx-auto px-4 py-16">
<h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
<span className="material-symbols-outlined theme-accent-text">grid_view</span>
                Browse by Category
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
{/* <!-- Category Card --> */}
<a className="group theme-surface theme-surface p-6 rounded-2xl border border-theme-surface dark:border-slate-800 hover:border-theme-accent dark:hover:border-theme-accent hover:shadow-xl hover:shadow-primary/5 transition-all" href="#">
<div className="w-12 h-12 theme-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:theme-accent group-hover:text-white transition-colors">
<span className="material-symbols-outlined">rocket_launch</span>
</div>
<h3 className="font-bold text-lg mb-2">Getting Started</h3>
<p className="text-sm theme-text dark:theme-text">Everything you need to know to start buying or selling.</p>
</a>
<a className="group theme-surface theme-surface p-6 rounded-2xl border border-theme-surface dark:border-slate-800 hover:border-theme-accent dark:hover:border-theme-accent hover:shadow-xl hover:shadow-primary/5 transition-all" href="#">
<div className="w-12 h-12 theme-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:theme-accent group-hover:text-white transition-colors">
<span className="material-symbols-outlined">local_shipping</span>
</div>
<h3 className="font-bold text-lg mb-2">Orders &amp; Refunds</h3>
<p className="text-sm theme-text dark:theme-text">Track shipments, manage cancellations, and request refunds.</p>
</a>
<a className="group theme-surface theme-surface p-6 rounded-2xl border border-theme-surface dark:border-slate-800 hover:border-theme-accent dark:hover:border-theme-accent hover:shadow-xl hover:shadow-primary/5 transition-all" href="#">
<div className="w-12 h-12 theme-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:theme-accent group-hover:text-white transition-colors">
<span className="material-symbols-outlined">shield_person</span>
</div>
<h3 className="font-bold text-lg mb-2">Account Security</h3>
<p className="text-sm theme-text dark:theme-text">Manage passwords, 2FA, and account privacy settings.</p>
</a>
<a className="group theme-surface theme-surface p-6 rounded-2xl border border-theme-surface dark:border-slate-800 hover:border-theme-accent dark:hover:border-theme-accent hover:shadow-xl hover:shadow-primary/5 transition-all" href="#">
<div className="w-12 h-12 theme-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:theme-accent group-hover:text-white transition-colors">
<span className="material-symbols-outlined">storefront</span>
</div>
<h3 className="font-bold text-lg mb-2">Selling Tools</h3>
<p className="text-sm theme-text dark:theme-text">Guides for merchants, fee structures, and store management.</p>
</a>
<a className="group theme-surface theme-surface p-6 rounded-2xl border border-theme-surface dark:border-slate-800 hover:border-theme-accent dark:hover:border-theme-accent hover:shadow-xl hover:shadow-primary/5 transition-all" href="#">
<div className="w-12 h-12 theme-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:theme-accent group-hover:text-white transition-colors">
<span className="material-symbols-outlined">construction</span>
</div>
<h3 className="font-bold text-lg mb-2">Technical Issues</h3>
<p className="text-sm theme-text dark:theme-text">Troubleshoot app errors, browser issues, and API integrations.</p>
</a>
</div>
</section>
{/* <!-- Featured Articles --> */}
<section className="theme-surface theme-surface/50 py-16 border-y border-theme-surface dark:border-slate-800">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl font-bold mb-2">Featured Articles</h2>
<p className="theme-text">Most frequently read guides from our community</p>
</div>
<a className="theme-accent-text font-bold hover:underline flex items-center gap-1" href="#">
                        View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
<a className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 group transition-colors" href="#">
<span className="material-symbols-outlined theme-accent-text pt-1">description</span>
<div>
<h4 className="font-semibold text-lg group-hover:theme-accent-text transition-colors">How to set up your ShopDynamics merchant account</h4>
<p className="text-sm theme-text line-clamp-1">Follow these steps to complete your seller profile and start listing...</p>
</div>
</a>
<a className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 group transition-colors" href="#">
<span className="material-symbols-outlined theme-accent-text pt-1">description</span>
<div>
<h4 className="font-semibold text-lg group-hover:theme-accent-text transition-colors">Understanding buyer protection and disputes</h4>
<p className="text-sm theme-text line-clamp-1">We ensure safety for every transaction. Learn how the process works...</p>
</div>
</a>
<a className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 group transition-colors" href="#">
<span className="material-symbols-outlined theme-accent-text pt-1">description</span>
<div>
<h4 className="font-semibold text-lg group-hover:theme-accent-text transition-colors">Fee structure for digital products 2024</h4>
<p className="text-sm theme-text line-clamp-1">A transparent breakdown of listing fees, transaction fees, and commissions...</p>
</div>
</a>
<a className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 group transition-colors" href="#">
<span className="material-symbols-outlined theme-accent-text pt-1">description</span>
<div>
<h4 className="font-semibold text-lg group-hover:theme-accent-text transition-colors">Tips for creating high-converting product listings</h4>
<p className="text-sm theme-text line-clamp-1">Improve your SEO and attract more buyers with these expert strategies...</p>
</div>
</a>
<a className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 group transition-colors" href="#">
<span className="material-symbols-outlined theme-accent-text pt-1">description</span>
<div>
<h4 className="font-semibold text-lg group-hover:theme-accent-text transition-colors">Updating your billing information and payouts</h4>
<p className="text-sm theme-text line-clamp-1">Manage where your money goes and how you pay for platform services...</p>
</div>
</a>
<a className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 group transition-colors" href="#">
<span className="material-symbols-outlined theme-accent-text pt-1">description</span>
<div>
<h4 className="font-semibold text-lg group-hover:theme-accent-text transition-colors">API documentation for marketplace automation</h4>
<p className="text-sm theme-text line-clamp-1">Developers can integrate their existing systems with our powerful API...</p>
</div>
</a>
</div>
</div>
</section>
{/* <!-- Still Need Help Section --> */}
<section className="max-w-4xl mx-auto px-4 py-20 text-center">
<div className="theme-accent/5 dark:theme-accent/20 rounded-3xl p-8 md:p-12 border border-theme-accent/20">
<span className="material-symbols-outlined text-5xl theme-accent-text mb-4">support_agent</span>
<h2 className="text-3xl font-bold mb-4">Still need help?</h2>
<p className="theme-text dark:theme-text mb-8 max-w-lg mx-auto">
                    If you couldn't find what you're looking for, our friendly support team is available 24/7 to assist you.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="cursor-pointer bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">forum</span>
                        Live Chat
                    </button>
<button className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 theme-surface theme-surface hover:shadow-2xl hover:scale-105 theme-text dark:text-white font-bold px-8 py-4 rounded-xl border border-theme-surface border-theme-surface hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
<span className="material-symbols-outlined">mail</span>
                        Contact Support
                    </button>
</div>
</div>
</section>
</main>
{/* <!-- Footer --> */}
<footer className="theme-surface dark:bg-slate-950 border-t border-theme-surface dark:border-slate-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 theme-accent-text mb-6">
<span className="material-symbols-outlined text-2xl font-bold">dynamic_form</span>
<h2 className="theme-text dark:theme-text text-lg font-bold">ShopDynamics</h2>
</div>
<p className="theme-text dark:theme-text text-sm max-w-xs mb-6 leading-relaxed">
                        The leading digital product marketplace for creators and businesses worldwide. Buy and sell with confidence.
                    </p>
<div className="flex gap-4">
<a className="h-10 w-10 rounded-full theme-surface theme-surface flex items-center justify-center theme-text hover:theme-accent-text transition-colors" href="#">
<span className="material-symbols-outlined">public</span>
</a>
<a className="h-10 w-10 rounded-full theme-surface theme-surface flex items-center justify-center theme-text hover:theme-accent-text transition-colors" href="#">
<span className="material-symbols-outlined">share</span>
</a>
<a className="h-10 w-10 rounded-full theme-surface theme-surface flex items-center justify-center theme-text hover:theme-accent-text transition-colors" href="#">
<span className="material-symbols-outlined">alternate_email</span>
</a>
</div>
</div>
<div>
<h4 className="font-bold mb-4">Marketplace</h4>
<ul className="space-y-2 text-sm theme-text">
<li><a className="hover:theme-accent-text" href="#">Featured Items</a></li>
<li><a className="hover:theme-accent-text" href="#">New Releases</a></li>
<li><a className="hover:theme-accent-text" href="#">Bestsellers</a></li>
<li><a className="hover:theme-accent-text" href="#">Member Benefits</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Company</h4>
<ul className="space-y-2 text-sm theme-text">
<li><a className="hover:theme-accent-text" href="#">About Us</a></li>
<li><a className="hover:theme-accent-text" href="#">Careers</a></li>
<li><a className="hover:theme-accent-text" href="#">Press Kit</a></li>
<li><a className="hover:theme-accent-text" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Legal</h4>
<ul className="space-y-2 text-sm theme-text">
<li><a className="hover:theme-accent-text" href="#">Privacy Policy</a></li>
<li><a className="hover:theme-accent-text" href="#">Terms of Service</a></li>
<li><a className="hover:theme-accent-text" href="#">Cookie Policy</a></li>
<li><a className="hover:theme-accent-text" href="#">License Info</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-theme-surface dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm theme-text">
<p>© 2026 ShopDynamics Inc. All rights reserved.</p>
<div className="flex gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">language</span>
<span>English (US)</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">payments</span>
<span>USD ($)</span>
</div>
</div>
</div>
</div>
</footer>
</div>
  );
}