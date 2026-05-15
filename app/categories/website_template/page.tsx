"use client";
import { useState } from "react";

export default function categoris() {
  return (
    <div className="theme-page font-display theme-text dark:theme-text transition-colors duration-200">
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
{/* <!-- Top Navigation Bar --> */}
<header className="sticky top-0 z-50 w-full border-b border-theme-surface dark:border-slate-800 theme-page/80 dark:bg-background-dark/80 backdrop-blur-md px-4 lg:px-20 py-3">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 theme-accent-text">
<span className="material-symbols-outlined text-3xl font-bold">database</span>
<h2 className="theme-text dark:theme-text text-xl font-black leading-tight tracking-tight">DigitalMarket</h2>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-semibold hover:theme-accent-text transition-colors" href="#">Templates</a>
<a className="text-sm font-semibold hover:theme-accent-text transition-colors" href="#">UI Kits</a>
<a className="text-sm font-semibold hover:theme-accent-text transition-colors" href="#">Icons</a>
<a className="text-sm font-semibold hover:theme-accent-text transition-colors" href="#">Fonts</a>
</div>
</div>
<div className="flex flex-1 max-w-md mx-4">
<div className="relative w-full group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 theme-text dark:theme-text group-focus-within:theme-accent-text transition-colors">search</span>
<input className="w-full theme-surface theme-surface border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all placeholder:theme-text" placeholder="Search templates..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-xl theme-surface theme-surface hover:theme-accent/10 hover:theme-accent-text transition-all relative">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="absolute top-1 right-1 w-2 h-2 theme-accent rounded-full"></span>
</button>
<button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl theme-accent text-white font-bold text-sm hover:theme-accent/90 transition-all">
<span className="material-symbols-outlined text-sm">account_circle</span>
                        Sign In
                    </button>
<div className="h-10 w-10 rounded-full border-2 border-theme-accent/20 p-0.5">
<div
  className="h-full w-full rounded-full bg-cover bg-center"
  data-alt="User profile avatar circle"
  style={{
    backgroundImage:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrz5tz1J_XRO_6SJrJtu3zVShpkteP76NQnQ282aNJlQoSjDfoireR9CCu0weYtCGV98ebPCnH22oQJcsgVW8lG5xVwcVm4MrAUI4MT_CMlNQ9KIV66apUsCOQ3kUc-Tg29PsgQ5rP0mxgPN42L8-HRbqitYqG_VljOe1YSJn7cLiWpw8dd8bxPuHI8dsy0AWQs6aeaNQBZPHDyqw6rvZSsOD7Vq2tmy4VnF_bvf_RE-qSiIYuDfEIQlczV69KV_ak5SLw9pWE3Dfo')",
  }}
></div>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto w-full px-4 lg:px-20 py-8">
{/* <!-- Breadcrumbs & Title Section --> */}
<div className="mb-8">
<nav className="flex items-center gap-2 text-sm theme-text mb-4">
<a className="hover:theme-accent-text" href="#">Home</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="theme-text dark:theme-text font-medium">Website Templates</span>
</nav>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-4xl font-black tracking-tight mb-2">Website Templates</h1>
<p className="theme-text dark:theme-text max-w-2xl">Discover high-quality, professional templates optimized for speed and conversion. Built with the latest modern frameworks.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 theme-surface theme-surface border border-theme-surface border-theme-surface rounded-xl text-sm font-semibold hover:border-theme-accent transition-all">
<span className="material-symbols-outlined text-sm">sort</span>
                            Newest First
                        </button>
</div>
</div>
</div>
{/* <!-- Main Layout: Sidebar + Grid --> */}
<div className="flex flex-col lg:flex-row gap-8">
{/* <!-- Sidebar Filters --> */}
<aside className="w-full lg:w-64 shrink-0 space-y-6">
<div className="p-6 theme-surface theme-surface/50 rounded-2xl border border-theme-surface dark:border-slate-800">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold flex items-center gap-2">
<span className="material-symbols-outlined theme-accent-text">filter_list</span>
                                Filters
                            </h3>
<button className="text-xs theme-accent-text font-bold hover:underline">Clear all</button>
</div>
{/* <!-- Framework Section --> */}
<div className="space-y-4 mb-8">
<p className="text-xs font-black uppercase tracking-wider theme-text dark:theme-text">Framework</p>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/>
{/* <input checked="" className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/> */}
<span className="text-sm font-medium group-hover:theme-accent-text transition-colors">React</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/>
<span className="text-sm font-medium group-hover:theme-accent-text transition-colors">Vue.js</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/>
{/* <input checked="" className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/> */}
<span className="text-sm font-medium group-hover:theme-accent-text transition-colors">Tailwind CSS</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/>
<span className="text-sm font-medium group-hover:theme-accent-text transition-colors">Next.js</span>
</label>
</div>
</div>
{/* <!-- Category Section --> */}
<div className="space-y-4 mb-8">
<p className="text-xs font-black uppercase tracking-wider theme-text dark:theme-text">Category</p>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/>
<span className="text-sm font-medium group-hover:theme-accent-text transition-colors">E-commerce</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/>
{/* <input checked="" className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/> */}
<span className="text-sm font-medium group-hover:theme-accent-text transition-colors">SaaS</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/>
<span className="text-sm font-medium group-hover:theme-accent-text transition-colors">Portfolio</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary bg-transparent" type="checkbox"/>
<span className="text-sm font-medium group-hover:theme-accent-text transition-colors">Landing Page</span>
</label>
</div>
</div>
{/* <!-- Price Range --> */}
<div className="space-y-4">
<p className="text-xs font-black uppercase tracking-wider theme-text dark:theme-text">Price Range</p>
<div className="space-y-3">
<input className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range"/>
<div className="flex justify-between text-xs font-bold theme-text">
<span>$0</span>
<span>$500+</span>
</div>
</div>
</div>
</div>
</aside>
{/* <!-- Grid Content --> */}
<div className="flex-1">
{/* <!-- Quick Framework Filter Tags --> */}
<div className="flex flex-wrap gap-2 mb-8">
<button className="px-4 py-1.5 rounded-full theme-accent text-white text-sm font-bold shadow-lg shadow-primary/20">All Frameworks</button>
<button className="px-4 py-1.5 rounded-full bg-slate-200 theme-surface text-sm font-semibold hover:theme-accent/20 transition-all">React</button>
<button className="px-4 py-1.5 rounded-full bg-slate-200 theme-surface text-sm font-semibold hover:theme-accent/20 transition-all">Vue</button>
<button className="px-4 py-1.5 rounded-full bg-slate-200 theme-surface text-sm font-semibold hover:theme-accent/20 transition-all">Tailwind</button>
<button className="px-4 py-1.5 rounded-full bg-slate-200 theme-surface text-sm font-semibold hover:theme-accent/20 transition-all">Next.js</button>
</div>
{/* <!-- Cards Grid --> */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
{/* <!-- Template Card 1 --> */}
<div className="group theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
<div className="relative aspect-4/3 overflow-hidden">
<div
  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
  data-alt="Modern SaaS dashboard template preview"
  style={{
    backgroundImage:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoyGnQdASRhWPR408RGumVJszdL3pcN46i0GVfFx_AnBVgugvVLicW86Mid9qt9N3_PLIuIC06oyMSR8C48hwZvbfYVltNvmox7a_Hx7S-FcNS4FHEzQyyaB9ctx2fxiNKDAPMCJ72QAwxiG4JOYUv3-3ftZF39bbIg7lmVZXUYmYGcpMR_Am2qhBO_NNK6QxkigZ3aXNpvBZ2BqZR96fXkTiq_uuX1yemfcRvj9X0ovVe1-AtWZbSIWS0RTvSCejh5doNpiA8F9F_')",
  }}
></div>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-1 rounded-lg theme-surface/90 theme-surface/90 text-[10px] font-black uppercase theme-accent-text backdrop-blur">Featured</span>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">favorite</span></button>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold theme-accent-text">SaaS &amp; Dashboard</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-amber-400 text-sm fill-current">star</span>
<span className="text-xs font-bold">4.9</span>
</div>
</div>
<h3 className="font-bold text-lg mb-4 group-hover:theme-accent-text transition-colors">Modern SaaS Landing Page</h3>
<div className="flex items-center justify-between">
<p className="text-2xl font-black theme-text dark:theme-text">$49</p>
<button className="flex items-center gap-2 px-4 py-2 theme-accent/10 theme-accent-text hover:theme-accent hover:text-white rounded-xl text-sm font-bold transition-all">
<span className="material-symbols-outlined text-sm">shopping_cart</span>
                                        Add
                                    </button>
</div>
</div>
</div>
{/* <!-- Template Card 2 --> */}
<div className="group theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
<div className="relative aspect-4/3 overflow-hidden">
<div
  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
  data-alt="Minimalist personal portfolio website template"
  style={{
    backgroundImage:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfVe_Tl9xQDJ4MFq8VMqQcEL0jvTQcpgYcS5TKTBcKUmoI7AEjGXqra8o9d2dNldENV2xvculykr0TKOcs-LdenNrM_OxwcLgEOflMh91VnaFIDjXjwLEoztFWJ9PZN1EyvmJaVAuAHZV9-JzcFBbwSKAseWnivgqRWUAkeNbk6xSUEgEqrUuZmlpqty2JjKpSiIAMXhAmE81QUZpJi2sPfcbhjNm37UfroEWt0SVxeMbL953Mu7yK-gAJmM7XVI0eWxcrbWE-areH')",
  }}
></div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">favorite</span></button>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold theme-accent-text">Portfolio</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-amber-400 text-sm fill-current">star</span>
<span className="text-xs font-bold">4.8</span>
</div>
</div>
<h3 className="font-bold text-lg mb-4 group-hover:theme-accent-text transition-colors">Minimal Portfolio Template</h3>
<div className="flex items-center justify-between">
<p className="text-2xl font-black theme-text dark:theme-text">$29</p>
<button className="flex items-center gap-2 px-4 py-2 theme-accent/10 theme-accent-text hover:theme-accent hover:text-white rounded-xl text-sm font-bold transition-all">
<span className="material-symbols-outlined text-sm">shopping_cart</span>
                                        Add
                                    </button>
</div>
</div>
</div>
{/* <!-- Template Card 3 --> */}
<div className="group theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
<div className="relative aspect-4/3 overflow-hidden">
<div
  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
  data-alt="E-commerce store template for electronics"
  style={{
    backgroundImage:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLYismBhJRr-KCoB0R43hQu-tV8EV5Ce8vENhBHYMwNUwzY6w2OFfKGnR_3uyuwxcuyaZZn4zYvXS6kXGKi2yS0zdJVXJQ5KmTDrBxqjXB2XTza7Ep0XxjYYmiYVXPYjj2qPU6xvFHJoIHvYs-KV3_FFdlGU_jICSIkW-gMnYzowIgqklT0xzdbmlsvL3lv9HwjQFN0yQMHKRhGxusmfeKsh71PXjLYaM0ikRp6y59uqZlleH7Q99412uYthuho1GVBLowzZlaKAxo')",
  }}
></div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">favorite</span></button>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold theme-accent-text">E-commerce</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-amber-400 text-sm fill-current">star</span>
<span className="text-xs font-bold">5.0</span>
</div>
</div>
<h3 className="font-bold text-lg mb-4 group-hover:theme-accent-text transition-colors">TechStore Shop Template</h3>
<div className="flex items-center justify-between">
<p className="text-2xl font-black theme-text dark:theme-text">$59</p>
<button className="flex items-center gap-2 px-4 py-2 theme-accent/10 theme-accent-text hover:theme-accent hover:text-white rounded-xl text-sm font-bold transition-all">
<span className="material-symbols-outlined text-sm">shopping_cart</span>
                                        Add
                                    </button>
</div>
</div>
</div>
{/* <!-- Template Card 4 --> */}
<div className="group theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
<div className="relative aspect-4/3 overflow-hidden">
<div
  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
  data-alt="Dark themed agency landing page"
  style={{
    backgroundImage:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDseHZQm1_0Ko4uF_BOODwIPoFaoVXHtFsIwURZcYRuWcVNzV1mp0P1LP31H4_aZH2fX1B4hqu9ygeaw6F6jRNAfT1ScPB9hZSDk5iufv1V162g2Aymlzz-vjp-5I_Z-WQT_XS6SmVIFEx8Matq_65fkC-vxZkqeDa20DlA-i5IORJqMK6-r1bz50Qsb-ec_PNYxwkXjT2bBOtqIb85o_oxov9GMNpH2QBSubHeo5fMXo-V04b9dvwAnzLv6tG8LVoU15UcB3hTu6Qy')",
  }}
></div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">favorite</span></button>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold theme-accent-text">Landing Page</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-amber-400 text-sm fill-current">star</span>
<span className="text-xs font-bold">4.7</span>
</div>
</div>
<h3 className="font-bold text-lg mb-4 group-hover:theme-accent-text transition-colors">Dark Agency Showcase</h3>
<div className="flex items-center justify-between">
<p className="text-2xl font-black theme-text dark:theme-text">$35</p>
<button className="flex items-center gap-2 px-4 py-2 theme-accent/10 theme-accent-text hover:theme-accent hover:text-white rounded-xl text-sm font-bold transition-all">
<span className="material-symbols-outlined text-sm">shopping_cart</span>
                                        Add
                                    </button>
</div>
</div>
</div>
{/* <!-- Template Card 5 --> */}
<div className="group theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
<div className="relative aspect-4/3 overflow-hidden">
<div
  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
  data-alt="Fintech mobile app web dashboard"
  style={{
    backgroundImage:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfREwGSYzvd2OWTH8uQ-MDmCdDcjMP8eA4SeFu34qPLyOwQcyo2j88vka29w7I86AjxRzo_oH8D5NNY-O-UUdLfTSwYGOz-8F7oWHo7fT7bC4PJVgHoRdiqVN3K2jH31BTABYevz_4gOWFnpaIQxfGgmp37OCZKmXz0NpvDzGZOhqhJFwYkSETHCmkjxgA5t7ngYDQmrL1XVKOV2z794nAuZWYXAMjmdbtX7GezC2kMH5tjp2obHKGGIhZNHqOf43kwbX5f21qpd5r')",
  }}
></div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">favorite</span></button>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold theme-accent-text">SaaS &amp; Dashboard</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-amber-400 text-sm fill-current">star</span>
<span className="text-xs font-bold">4.9</span>
</div>
</div>
<h3 className="font-bold text-lg mb-4 group-hover:theme-accent-text transition-colors">Fintech Pro Dashboard</h3>
<div className="flex items-center justify-between">
<p className="text-2xl font-black theme-text dark:theme-text">$69</p>
<button className="flex items-center gap-2 px-4 py-2 theme-accent/10 theme-accent-text hover:theme-accent hover:text-white rounded-xl text-sm font-bold transition-all">
<span className="material-symbols-outlined text-sm">shopping_cart</span>
                                        Add
                                    </button>
</div>
</div>
</div>
{/* <!-- Template Card 6 --> */}
<div className="group theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
<div className="relative aspect-4/3 overflow-hidden">
<div
  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
  data-alt="Developer resources landing page template"
  style={{
    backgroundImage:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAndUvj6y0yfNi0YKjLQSiAJT-Mbf43s6SLetY1aG8pll6u-lUjejvHn8s2zTbpT2gu-lu0EX2E2x_IyzW-ls2ZJlvvnqwhWf3gI-kbaRczTMiGTP1DAyBs2nQpX7lPod-e_f810RaiPo0hFb7jWugk2a-1E4jmvfg76Ppc4XDnXe9QGFAkwJAAbssybEHi3cpdPxD5apxDBGo2AKlQHuHP80BrPg5tBywGOQWREO6LJBxM9zt6oDX38h3mMoRVZS3RNMTgV3WMTWTo')",
  }}
></div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-2 theme-surface theme-surface rounded-full theme-text hover:theme-accent-text"><span className="material-symbols-outlined">favorite</span></button>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold theme-accent-text">Landing Page</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-amber-400 text-sm fill-current">star</span>
<span className="text-xs font-bold">4.6</span>
</div>
</div>
<h3 className="font-bold text-lg mb-4 group-hover:theme-accent-text transition-colors">DevResource Hub Kit</h3>
<div className="flex items-center justify-between">
<p className="text-2xl font-black theme-text dark:theme-text">$24</p>
<button className="flex items-center gap-2 px-4 py-2 theme-accent/10 theme-accent-text hover:theme-accent hover:text-white rounded-xl text-sm font-bold transition-all">
<span className="material-symbols-outlined text-sm">shopping_cart</span>
                                        Add
                                    </button>
</div>
</div>
</div>
</div>
{/* <!-- Pagination --> */}
<div className="mt-12 flex items-center justify-center gap-2">
<button className="p-2 rounded-xl bg-slate-200 theme-surface hover:theme-accent-text transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
<button className="w-10 h-10 rounded-xl theme-accent text-white font-bold">1</button>
<button className="w-10 h-10 rounded-xl bg-slate-200 theme-surface hover:theme-accent/20 transition-all font-bold">2</button>
<button className="w-10 h-10 rounded-xl bg-slate-200 theme-surface hover:theme-accent/20 transition-all font-bold">3</button>
<span className="mx-1">...</span>
<button className="w-10 h-10 rounded-xl bg-slate-200 theme-surface hover:theme-accent/20 transition-all font-bold">12</button>
<button className="p-2 rounded-xl bg-slate-200 theme-surface hover:theme-accent-text transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
</div>
</main>
<footer className="mt-20 border-t border-theme-surface dark:border-slate-800 theme-surface theme-surface py-12 px-4 lg:px-20">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 theme-accent-text mb-6">
<span className="material-symbols-outlined text-3xl font-bold">database</span>
<h2 className="theme-text dark:theme-text text-xl font-black">DigitalMarket</h2>
</div>
<p className="theme-text text-sm leading-relaxed">The world's largest marketplace for high-quality website templates, UI kits, and creative assets.</p>
</div>
<div>
<h4 className="font-bold mb-6">Marketplace</h4>
<ul className="space-y-4 text-sm theme-text">
<li><a className="hover:theme-accent-text" href="#">Templates</a></li>
<li><a className="hover:theme-accent-text" href="#">UI Kits</a></li>
<li><a className="hover:theme-accent-text" href="#">Icons</a></li>
<li><a className="hover:theme-accent-text" href="#">Freebies</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6">Company</h4>
<ul className="space-y-4 text-sm theme-text">
<li><a className="hover:theme-accent-text" href="#">About Us</a></li>
<li><a className="hover:theme-accent-text" href="#">Become a Seller</a></li>
<li><a className="hover:theme-accent-text" href="#">License</a></li>
<li><a className="hover:theme-accent-text" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6">Newsletter</h4>
<p className="text-sm theme-text mb-4">Subscribe to get the latest releases and discounts.</p>
<div className="flex gap-2">
<input className="flex-1 theme-surface theme-surface border-none rounded-xl text-sm focus:ring-1 focus:ring-primary" placeholder="Your email" type="email"/>
<button className="px-4 py-2 theme-accent text-white rounded-xl text-sm font-bold">Join</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs theme-text dark:theme-text">
<p>© 2026 DigitalMarket Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:theme-accent-text transition-colors" href="#">Privacy Policy</a>
<a className="hover:theme-accent-text transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
</div>
</div>
  );
}