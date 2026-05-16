"use client";
import Link from "next/link";
export default function about() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
<div className="relative flex h-auto min-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* <!-- Top Navigation Bar --> */}
{/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-primary">
<div className="size-6">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
</svg>
</div>
<h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">DesignAssets</h2>
</div>
<div className="hidden md:flex items-center gap-9">
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Shop</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Categories</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Deals</a>
</div>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8">
<label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-slate-500 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-slate-800 focus:ring-0 px-4 rounded-r-lg text-sm" placeholder="Search policies..." value=""/>
</div>
</label>
<div
  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
  data-alt="User profile avatar circle"
  style={{
    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUyf6AnhDUqc_CXrd9TqohB68bQmb7c-ygu3mE5uDIoylENK1CmH5oPQajI2MTbufpe3JJpqA9kxbNVVeTOJMwEhYimTAVkedqaZ7lSruYgmQMSQ7jTayr21fGG1u0Idwh03OLSlLZRJnQfvuu1wKgSLuuSWAHP423Al5tjkRZqul6IGJaRpNqenPTty6EO76eREbNRp2KMK5Mp2nkrc8n5TT2DszJ058F2J7rCTQjoXb17kXOk4Pz4gmMJWAa13835hRGetSrbfP9')"
  }}
></div>
</div>
</header> */}
<main className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 md:px-10 py-8 gap-10">
{/* <!-- Sidebar Navigation --> */}
<aside className="w-full md:w-64 flex-shrink-0">
<div className="sticky top-24 flex flex-col gap-6">
<div className="flex flex-col">
<h3 className="text-slate-900 dark:text-white text-base font-bold mb-1">Legal &amp; Privacy</h3>
<p className="text-slate-500 dark:text-slate-400 text-xs">Updated October 2023</p>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-[22px]">home</span>
<span className="text-sm font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-[22px]">lock</span>
<span className="text-sm font-medium">Privacy Policy</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
<span
  className="material-symbols-outlined text-[22px]"
  style={{ fontVariationSettings: "'FILL' 1" }}
>
  cookie
</span>
<span className="text-sm font-semibold">Cookie Policy</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-[22px]">description</span>
<span className="text-sm font-medium">Terms of Service</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-[22px]">help</span>
<span className="text-sm font-medium">Help Center</span>
</a>
</nav>
<div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
<p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Need Help?</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Questions about your data? Contact our privacy team.</p>
<button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors">
                            Contact Support
                        </button>
</div>
</div>
</aside>
{/* <!-- Content Column --> */}
<article className="flex-1 max-w-3xl">
<div className="mb-10">
<h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">Cookie Policy</h1>
<p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                        This policy explains how DesignAssets uses cookies and similar technologies to recognize you when you visit our website.
                    </p>
</div>
<div className="space-y-12">
<section id="what-are-cookies">
<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<span className="w-1 h-8 bg-primary rounded-full"></span>
                            What are cookies?
                        </h2>
<p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences, keeping you logged in, and analyzing how you use our site to make improvements.
                        </p>
<p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Some cookies are "first-party cookies," set by DesignAssets directly. Others are "third-party cookies," which are set by partners who provide services like analytics or advertising on our behalf.
                        </p>
</section>
<section id="how-we-use">
<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<span className="w-1 h-8 bg-primary rounded-full"></span>
                            How we use cookies
                        </h2>
<p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            We use cookies for several reasons, including:
                        </p>
<ul className="space-y-3">
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span className="text-slate-600 dark:text-slate-300">To keep you signed in to your account during your visit.</span>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span className="text-slate-600 dark:text-slate-300">To remember items you've added to your shopping cart.</span>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span className="text-slate-600 dark:text-slate-300">To understand how visitors interact with our website to improve performance.</span>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span className="text-slate-600 dark:text-slate-300">To deliver relevant advertisements that match your interests.</span>
</li>
</ul>
</section>
<section id="types-of-cookies">
<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
<span className="w-1 h-8 bg-primary rounded-full"></span>
                            Types of cookies we use
                        </h2>
<div className="grid gap-6">
<div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
<span className="material-symbols-outlined">security</span>
</div>
<h3 className="font-bold text-lg">Essential Cookies</h3>
</div>
<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as logging in or filling in forms.
                                </p>
</div>
<div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
<span className="material-symbols-outlined">analytics</span>
</div>
<h3 className="font-bold text-lg">Performance Cookies</h3>
</div>
<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular.
                                </p>
</div>
<div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
<span className="material-symbols-outlined">ads_click</span>
</div>
<h3 className="font-bold text-lg">Targeting Cookies</h3>
</div>
<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                                </p>
</div>
</div>
</section>
<section className="bg-primary/5 p-8 rounded-2xl border border-primary/10" id="managing-preferences">
<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Managing your preferences</h2>
<p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided below or by adjusting your browser settings.
                        </p>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 shadow-lg shadow-primary/20 transition-all">
                                Open Cookie Settings
                            </button>
<button className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                Learn More
                            </button>
</div>
</section>
</div>
</article>
</main>
{/* <!-- Footer --> */}
{/* <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-20">
<div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-primary mb-6">
<div className="size-5">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
</svg>
</div>
<span className="text-slate-900 dark:text-white font-bold">DesignAssets</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                            Building the future of e-commerce dynamics with privacy-first solutions.
                        </p>
</div>
<div>
<h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Product</h4>
<ul className="space-y-4">
<li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" href="#">Features</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" href="#">Pricing</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Company</h4>
<ul className="space-y-4">
<li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" href="#">About Us</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" href="#">Careers</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Legal</h4>
<ul className="space-y-4">
<li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" href="#">Privacy</a></li>
<li><a className="text-primary font-semibold text-sm" href="#">Cookie Policy</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 text-xs">© 2023 DesignAssets Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">language</span>
</a>
<a className="text-slate-400 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">share</span>
</a>
</div>
</div>
</div>
</footer> */}
</div>
</div>
</div>
  );
}