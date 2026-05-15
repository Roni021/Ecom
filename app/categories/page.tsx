"use client";
import Link from "next/link";

export default function categoris() {
  return (
<div className="theme-page font-display theme-text dark:theme-text min-h-screen">
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
    
<main className="flex-1">
<div className="max-w-[1200px] mx-auto px-6 py-12">
{/* <!-- Header Section --> */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="flex flex-col gap-3 max-w-2xl">
<h1 className="theme-text dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Browse Categories</h1>
<p className="theme-text dark:theme-text text-lg font-normal">Our marketplace offers the highest quality digital assets for designers, developers, and creators worldwide.</p>
</div>
</div>
{/* <!-- Search Bar Large --> */}
<div className="mb-12">
<label className="flex flex-col w-full">
<div className="flex w-full items-stretch rounded-xl h-14 theme-surface theme-surface shadow-sm border border-theme-surface dark:border-slate-800 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-theme-accent transition-all">
<div className="theme-text dark:theme-text flex items-center justify-center px-5">
<span className="material-symbols-outlined text-2xl">search</span>
</div>
<input
  className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 theme-text dark:text-white placeholder:theme-text text-lg font-normal"
  placeholder="Search for UI kits, icons, templates..."
  defaultValue=""
/>
<div className="flex items-center px-4">
<button className="theme-surface theme-surface theme-text dark:theme-text px-4 py-1.5 rounded-md text-sm font-semibold">Filter</button>
</div>
</div>
</label>
</div>
{/* <!-- Categories Grid --> */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* <!-- Card 1: UI Kits --> */}
<div className="category-card-hover group flex flex-col theme-surface theme-surface border border-theme-surface dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
<div className="h-48 w-full theme-surface theme-surface relative overflow-hidden">
<div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl theme-accent-text opacity-80">dashboard_customize</span>
</div>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="theme-text dark:text-white text-xl font-bold mb-2">UI Kits &amp; Design Systems</h3>
<p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Comprehensive components and style guides for high-converting web and mobile applications.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-bold theme-text dark:theme-text uppercase tracking-widest">1,240 Assets</span>
<Link
  href="/categories/ui_kits"
  className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all"
>
  Browse All
  <span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
</div>
</div>
{/* <!-- Card 2: Greeting Cards --> */}
<div className="category-card-hover group flex flex-col theme-surface theme-surface border border-theme-surface dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
<div className="h-48 w-full theme-surface theme-surface relative overflow-hidden">
<div className="absolute inset-0 bg-linear-to-br from-pink-500/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-pink-500 opacity-80">featured_seasonal_and_gifts</span>
</div>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="theme-text dark:text-white text-xl font-bold mb-2">Greeting Cards &amp; Stationery</h3>
<p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Elegant, print-ready designs for every special occasion, from weddings to corporate events.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-bold theme-text dark:theme-text uppercase tracking-widest">850 Assets</span>
<Link
  href="/categories/greetingscard"
  className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all"
>
  Browse All
  <span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
</div>
</div>
{/* <!-- Card 3: Website Templates --> */}
<div className="category-card-hover group flex flex-col theme-surface theme-surface border border-theme-surface dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
<div className="h-48 w-full theme-surface theme-surface relative overflow-hidden">
<div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-emerald-500 opacity-80">web</span>
</div>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="theme-text dark:text-white text-xl font-bold mb-2">Website Templates</h3>
<p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Fully responsive layouts optimized for Framer, Webflow, and standard HTML/CSS environments.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-bold theme-text dark:theme-text uppercase tracking-widest">2,100 Assets</span>
<Link
  href="/categories/website_template"
  className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all"
>
  Browse All
  <span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
</div>
</div>
{/* <!-- Card 4: Social Media --> */}
<div className="category-card-hover group flex flex-col theme-surface theme-surface border border-theme-surface dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
<div className="h-48 w-full theme-surface theme-surface relative overflow-hidden">
<div className="absolute inset-0 bg-linear-to-br from-amber-500/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-amber-500 opacity-80">share</span>
</div>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="theme-text dark:text-white text-xl font-bold mb-2">Social Media Assets</h3>
<p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Engaging post templates, stories, and carousels designed to boost your brand presence.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-bold theme-text uppercase tracking-widest">3,400 Assets</span>
<Link
  href="/categories/social_media_asset"
  className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all"
>
  Browse All
  <span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
</div>
</div>
{/* <!-- Card 5: 3D Icons --> */}
<div className="category-card-hover group flex flex-col theme-surface theme-surface border border-theme-surface dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
<div className="h-48 w-full theme-surface theme-surface relative overflow-hidden">
<div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-purple-500 opacity-80">view_in_ar</span>
</div>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="theme-text dark:text-white text-xl font-bold mb-2">3D Icons &amp; Illustrations</h3>
<p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Modern high-resolution 3D assets to make your digital projects stand out from the crowd.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-bold theme-text uppercase tracking-widest">520 Assets</span>
<Link
  href="/categories/icons_illustration"
  className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all"
>
  Browse All
  <span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
</div>
</div>
{/* <!-- Card 6: Email Templates --> */}
<div className="category-card-hover group flex flex-col theme-surface theme-surface border border-theme-surface dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
<div className="h-48 w-full theme-surface theme-surface relative overflow-hidden">
<div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-cyan-500 opacity-80">mail</span>
</div>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="theme-text dark:text-white text-xl font-bold mb-2">Email Templates</h3>
<p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Conversion-optimized email layouts for newsletter campaigns and transactional messages.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-bold theme-text uppercase tracking-widest">315 Assets</span>
<Link
  href="/categories/email_template"
  className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all"
>
  Browse All
  <span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div>
{/* <!-- Call to Action --> */}
<div className="mt-20 @container">
<div className="relative theme-accent overflow-hidden rounded-xl px-6 py-16 md:px-12 md:py-24 text-center">
{/* <!-- Background Decor --> */}
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 theme-surface/10 theme-surface/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-slate-900/20 rounded-full blur-3xl"></div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-8">
<div className="flex flex-col gap-4">
<h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                        Can't find what you're looking for?
                                    </h2>
<p className="text-white/80 text-lg font-normal">
                                        Our designers are constantly adding new assets every week. Request a custom category and we'll notify you when it's live.
                                    </p>
</div>
<div className="flex flex-wrap justify-center gap-4">
<button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 theme-surface theme-surface theme-accent-text text-base font-bold transition-transform hover:scale-105 active:scale-95">
                                        Request a Category
                                    </button>
<button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 theme-accent border border-white/30 border-theme-surface text-white text-base font-bold transition-all hover:theme-surface/10 theme-surface/10">
                                        Contact Support
                                    </button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>
);
}
