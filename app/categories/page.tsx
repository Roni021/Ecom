"use client";
import Link from "next/link";

export default function CategoriesPage() {
  return (
<div className="theme-page font-display theme-text dark:theme-text min-h-screen">
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
    
<main className="flex-1">
<div className="max-w-300 mx-auto px-6 py-12">
{/* <!-- Header Section --> */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="flex flex-col gap-3 max-w-2xl">
<h1 className="theme-text dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Browse Categories</h1>
<p className="theme-text dark:theme-text text-lg font-normal">Explore curated categories and jump directly into products that match your design, marketing, or branding needs.</p>
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
  {/* -- Celebration -- */}
  <div className="category-card-hover group flex flex-col theme-surface theme-surface border border-theme-surface dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
    <div className="h-48 w-full theme-surface theme-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="material-symbols-outlined text-6xl text-orange-500 opacity-80">local_fire_department</span>
      </div>
      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="theme-text dark:text-white text-xl font-bold mb-2">Celebration &amp; Festivals</h3>
      <p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Festival greeting cards, party invites, and seasonal digital assets built for fast customization.</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-bold theme-text dark:theme-text uppercase tracking-widest">248 Assets</span>
        <Link href="/products?category=celebration" className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all">
          Browse All
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      </div>
    </div>
  </div>

  {/* -- Resume -- */}
  <div className="category-card-hover group flex flex-col theme-surface theme-surface border border-theme-surface dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
    <div className="h-48 w-full theme-surface theme-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-sky-500/10 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="material-symbols-outlined text-6xl text-sky-500 opacity-80">article</span>
      </div>
      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="theme-text dark:text-white text-xl font-bold mb-2">Resume Templates</h3>
      <p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Professional CV and cover letter templates that make every applicant stand out to hiring managers.</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-bold theme-text dark:theme-text uppercase tracking-widest">179 Assets</span>
        <Link href="/products?category=resume" className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all">
          Browse All
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      </div>
    </div>
  </div>

  {/* -- Layout -- */}
  <div className="category-card-hover group flex flex-col theme-surface theme-surface border border-theme-surface dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
    <div className="h-48 w-full theme-surface theme-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="material-symbols-outlined text-6xl text-emerald-500 opacity-80">view_quilt</span>
      </div>
      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="theme-text dark:text-white text-xl font-bold mb-2">Layout Designs</h3>
      <p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Flexible page composition kits, grid layouts, and section templates for modern web projects.</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-bold theme-text dark:theme-text uppercase tracking-widest">204 Assets</span>
        <Link href="/products?category=layout" className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all">
          Browse All
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      </div>
    </div>
  </div>

  {/* -- Photos -- */}
  <div className="category-card-hover group flex flex-col theme-surface theme-surface border border-theme-surface dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
    <div className="h-48 w-full theme-surface theme-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="material-symbols-outlined text-6xl text-cyan-500 opacity-80">photo_library</span>
      </div>
      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="theme-text dark:text-white text-xl font-bold mb-2">Photos &amp; Visual Assets</h3>
      <p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Curated high-resolution photos and visual assets for advertising, editorial, and social media.</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-bold theme-text dark:theme-text uppercase tracking-widest">325 Assets</span>
        <Link href="/products?category=photos" className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all">
          Browse All
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      </div>
    </div>
  </div>

  {/* -- UI Kits -- */}
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
        <Link href="/products?category=ui_kits" className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all">
          Browse All
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      </div>
    </div>
  </div>

  {/* -- Website Templates -- */}
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
      <p className="theme-text dark:theme-text text-sm leading-relaxed mb-6 flex-1">Fully responsive layouts optimized for modern marketing pages and project launches.</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-bold theme-text dark:theme-text uppercase tracking-widest">2,100 Assets</span>
        <Link href="/products?category=website_template" className="inline-flex items-center gap-1 theme-accent-text text-sm font-bold group-hover:gap-2 transition-all">
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
<button className="flex min-w-45 cursor-pointer items-center justify-center rounded-lg h-12 px-6 theme-surface theme-surface theme-accent-text text-base font-bold transition-transform hover:scale-105 active:scale-95">
                                        Request a Category
                                    </button>
<button className="flex min-w-45 cursor-pointer items-center justify-center rounded-lg h-12 px-6 theme-accent border border-white/30 border-theme-surface text-white text-base font-bold transition-all hover:theme-surface/10 theme-surface/10">
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
