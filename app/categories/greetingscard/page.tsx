"use client";
import Link from "next/link";

export default function categoris() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
<div className="relative flex flex-col min-h-screen w-full">
{/* <!-- Top Navigation --> */}
<header className="sticky top-0 z-50 w-full bg-white dark:bg-background-dark border-b border-primary/10 px-4 md:px-10 py-3">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-3xl">token</span>
<h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">DigitalMarket</h2>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Marketplace</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Designers</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Help</a>
</nav>
</div>
<div className="flex flex-1 justify-end items-center gap-4">
<label className="hidden sm:flex flex-1 max-w-md relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="w-full pl-10 pr-4 py-2 rounded-xl border-none bg-primary/5 dark:bg-primary/10 focus:ring-2 focus:ring-primary/20 text-sm" placeholder="Search for designs..." type="text"/>
</label>
<button className="p-2 rounded-full hover:bg-primary/5 text-slate-600 dark:text-slate-300 relative">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
</button>
<div
  className="w-10 h-10 rounded-full bg-primary/20 bg-cover bg-center border-2 border-white dark:border-slate-800"
  data-alt="User avatar profile picture"
  style={{
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9iIygl5hsjiWmYIvOfWTrME0qVZkjpMB0cVZNpMWFslpttmwYKM7ytdgAeK5GwTQlBhqG4FKPuZDcP05OVFn_af429wpP5watFpRXjw0SyiZt1JtxqbBAUKRElb05k03dU0aPY8lrjB3lALqfvtIEpZ_dI6KjK0cE12oo-OKe9_xaMMVkKd_L_HRxQIIw8IT0wu851cOJZ26OGLLFJPxhLkn0o8-B4hCYa-0BuN6E_1Dn-nFhptotBk6fNEfysYm4dPxfxmysjqOv")',
  }}
></div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto w-full px-4 md:px-10 py-6">
{/* <!-- Breadcrumbs --> */}
<nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
<a className="hover:text-primary" href="#">Home</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary" href="#">Graphics</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-900 dark:text-white font-medium">Greeting Cards</span>
</nav>
{/* <!-- Page Title --> */}
<div className="mb-8">
<h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Greeting Cards &amp; Stationery</h1>
<p className="text-slate-600 dark:text-slate-400 max-w-2xl">Elevate your messages with handcrafted digital designs, from minimalist wedding invites to playful birthday cards.</p>
</div>
<div className="flex flex-col lg:flex-row gap-8">
{/* <!-- Sidebar Filters --> */}
<aside className="w-full lg:w-64 shrink-0 space-y-8">
<div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-primary/5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="font-bold text-slate-900 dark:text-white">Filters</h3>
<button className="text-xs text-primary font-medium hover:underline">Clear all</button>
</div>
{/* <!-- Occasion Filter --> */}
<div className="mb-6">
<label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
<span className="material-symbols-outlined text-primary text-lg">event</span>
                                Occasion
                            </label>
<div className="space-y-2">
<label className="flex items-center gap-3 group cursor-pointer">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
{/* <input checked="" className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/> */}
<span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary">Birthday</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary">Wedding</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary">Holiday</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary">Baby Shower</span>
</label>
</div>
</div>
{/* <!-- Style Filter --> */}
<div className="mb-6 border-t border-primary/5 pt-6">
<label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
<span className="material-symbols-outlined text-primary text-lg">palette</span>
                                Style
                            </label>
<div className="space-y-2">
<label className="flex items-center gap-3 group cursor-pointer">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary">Minimalist</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
{/* <input checked="" className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/> */}
<span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary">Floral</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary">Fun &amp; Modern</span>
</label>
</div>
</div>
{/* <!-- Price Range --> */}
<div className="border-t border-primary/5 pt-6">
<label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
<span className="material-symbols-outlined text-primary text-lg">payments</span>
                                Price Range
                            </label>
<div className="flex items-center gap-2">
<input className="w-full p-2 bg-primary/5 border-none rounded-lg text-xs" placeholder="$0" type="text"/>
<span className="text-slate-400">-</span>
<input className="w-full p-2 bg-primary/5 border-none rounded-lg text-xs" placeholder="$100" type="text"/>
</div>
<button className="w-full mt-4 bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-primary/90 transition-all">Apply Filter</button>
</div>
</div>
</aside>
{/* <!-- Product Grid Area --> */}
<div className="flex-1">
{/* <!-- Sorting & Layout Controls --> */}
<div className="flex items-center justify-between mb-6">
<p className="text-sm text-slate-500">Showing <span className="font-bold text-slate-900 dark:text-white">124</span> results</p>
<div className="flex items-center gap-4">
<div className="flex bg-primary/5 p-1 rounded-lg">
<button className="p-1.5 bg-white dark:bg-slate-800 rounded shadow-sm text-primary">
<span className="material-symbols-outlined text-lg">grid_view</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary">
<span className="material-symbols-outlined text-lg">view_list</span>
</button>
</div>
<select className="text-sm border-none bg-primary/5 rounded-lg py-2 pl-3 pr-10 focus:ring-0">
<option>Most Popular</option>
<option>Newest</option>
<option>Price: Low to High</option>
</select>
</div>
</div>
{/* <!-- Products --> */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
{/* <!-- Product Card 1 --> */}
<div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all">
<div className="relative aspect-[4/3] overflow-hidden">
<div
  className="w-full h-full bg-primary/10 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
  data-alt="Elegant floral wedding invitation card set"
  style={{
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdG8j92-9I82DjLACnSXEhhyU-CYYu3X1iBgaGRazLXRF4Tka2fbAmvn-3gcsYGy2SzvoqGlo_GJUgcKq0tewb44Hm6H1jf3nP2n6ZIwq9QEtJIDQihXqpt-Ms0RAsgaxr-XsWyE4IRTA2ZwVSmBd2hbwJWTuInlfMCwqXLv8OLzv8dhhK9O2UgTpCFCDmHSdko_RhymAMpaI2seGI6sLAZj5jGjiUHMLcQuSZ9gTXI23YOYpCZi8o1S3pUzMPDht_L5By5hKvvrhP")',
  }}
></div>
<div className="absolute top-3 right-3">
<button className="bg-white/90 backdrop-blur rounded-full p-1.5 text-slate-400 hover:text-red-500 shadow-sm">
<span className="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">Floral Elegance Wedding Suite</h3>
<p className="font-black text-primary text-xl">$24</p>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Complete printable collection for modern weddings.</p>
<button className="w-full flex items-center justify-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold py-2.5 rounded-lg transition-all">
<span className="material-symbols-outlined text-xl">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
{/* <!-- Product Card 2 --> */}
<div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all">
<div className="relative aspect-[4/3] overflow-hidden">
<div
  className="w-full h-full bg-primary/10 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
  data-alt="Modern minimalist birthday greeting card with gold accents"
  style={{
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB46NJZ3o4dYze4g-Y4hQsru_BVR6hukae_HasXMCmWOahpYSlh-Fd4FlBnxjjHIProXLhRIGlspTA5n5C9823xpvZs8WrHDK0q31dTF_-kUxUovdHi4HDSKz6m3dJ8TAJ_WpKJyML9uOF8Ygnx85XPFucXvojAGWH1spuoFmmFJOvk86zEOv0cH7Pe8mw8QNt7Eru3xxJvvMyxfxFRVRK-Y-LI7v-tgRTsJXbyNy_kMJTt5gAUP1ubpNBsou-b7CUMJGefpYRfMTwf")',
  }}
></div>
<div className="absolute top-3 right-3">
<button className="bg-white/90 backdrop-blur rounded-full p-1.5 text-slate-400 hover:text-red-500 shadow-sm">
<span className="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">Gold Foil Birthday Card</h3>
<p className="font-black text-primary text-xl">$12</p>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Minimalist aesthetic with editable gold foil layers.</p>
<button className="w-full flex items-center justify-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold py-2.5 rounded-lg transition-all">
<span className="material-symbols-outlined text-xl">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
{/* <!-- Product Card 3 --> */}
<div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all">
<div className="relative aspect-[4/3] overflow-hidden">
<div
  className="w-full h-full bg-primary/10 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
  data-alt="Festive holiday card set with watercolor illustrations"
  style={{
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBgJQupVYb35t4lnYEqvZvlDvEQdLhPc7TohMKRS3PH2FleGSml1ng4mUxM_GG9IRs6zxcrZ3mnfx2bdfDKLn_5mcjoWSthe0WNV53UkYbYnP0qf8SGreA2BjRhN6RWXIUj8K8YIAC1AXczAV_8VADjrxbmUzso1QP6hV_deagANAK8DnjzkoSGWn9YuizuMf4J4dXpyyit_QJ-llV1H_ovvVFiuMTAeqVeX4E7abSvyUbgXnKWUOVwSZ9Ydbj6k83RfEEIya4xQR2")',
  }}
></div>
<div className="absolute top-3 right-3">
<button className="bg-white/90 backdrop-blur rounded-full p-1.5 text-slate-400 hover:text-red-500 shadow-sm">
<span className="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">Watercolor Holiday Bundle</h3>
<p className="font-black text-primary text-xl">$35</p>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Pack of 12 festive designs for Christmas &amp; New Year.</p>
<button className="w-full flex items-center justify-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold py-2.5 rounded-lg transition-all">
<span className="material-symbols-outlined text-xl">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
{/* <!-- Product Card 4 --> */}
<div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="w-full h-full bg-primary/10 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Playful colorful printable stationery set" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrYEbfFYhJaH8vTGenrzgSWni30frd8mPhKjw8MtcGCucEqaLiK_4YiNpaeg6IrygGaVoVmh2z5-et6Gi3e2tygkPaApS92CXzdr3k_rpl5DrN-ohMrTQ95q1tCqtyb84ga4zVqT4DQ1IrexIIQquzCtzEPJH9FF71L5gejGs1UejTf5kCussd00MMj3JbzOFW48VkUjNdgw7Pd1X61PUxr29lnkhpqW78Twn0fJP7E7aNA4LC4aI2_h8e1EC1gbRAoKGEfhqpRP2x")',}}></div>
<div className="absolute top-3 right-3">
<button className="bg-white/90 backdrop-blur rounded-full p-1.5 text-slate-400 hover:text-red-500 shadow-sm">
<span className="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">Vibrant Kids Party Kit</h3>
<p className="font-black text-primary text-xl">$18</p>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Fun and colorful templates for children's birthdays.</p>
<button className="w-full flex items-center justify-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold py-2.5 rounded-lg transition-all">
<span className="material-symbols-outlined text-xl">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
{/* <!-- Product Card 5 --> */}
<div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="w-full h-full bg-primary/10 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Handcrafted calligraphy thank you cards" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAY272Cv_wMGTCh42CNhh8dJhRVFa1T7p50ktEdRcSDYyGraIyHEa3N4EgfwuokrY8uyVayJXG0Cet9MPzGxmiMgXpc4wfn5MZvh8WiBQvJNfJKpmhU6DOnuabcgeP4Eq5unE-QbIYOGJeTDjXNEzCBx4fE5_SbpOjirzm8d8lCPz4dGqTxfAGn1tk1NNWTpYSNJL1URd0ylDKYfm4sbFaWi9vF4cLJyCBu-PC7208tUSTcPGqfwyy_OF7gdm7klogazuPkYscrYPi9")',}}></div>
<div className="absolute top-3 right-3">
<button className="bg-white/90 backdrop-blur rounded-full p-1.5 text-slate-400 hover:text-red-500 shadow-sm">
<span className="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">Modern Calligraphy Set</h3>
<p className="font-black text-primary text-xl">$15</p>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Hand-lettered thank you cards in 5 colorways.</p>
<button className="w-full flex items-center justify-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold py-2.5 rounded-lg transition-all">
<span className="material-symbols-outlined text-xl">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
{/* <!-- Product Card 6 --> */}
<div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="w-full h-full bg-primary/10 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Abstract gradient geometric stationery" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyWJ1hvVmdoLFW3UqHRp2p45iAW6GhHMZFUkRrvGIdQkXLMo2Ix-DMPsNFNq7dNlYu3QgsSrjxd0cFM4597mql_DuoinXnuj_GnhPNW-Khbw-LbzmS0uXR9kvIYFwAUk7htD50HFzvGtx5eRvnq40fTpIGFd_AJyXvloNNKAsAXsNaOLJ6oNRIjaWSFEjEfZo-6mFCpYX8DvD5-DFzGk3ootsTkiNS7BuFjdlGvhUYfZVS-Uw3fNDDQXyaj2W-M7Fsf6DcAXfb7_pC");'}}></div>
<div className="absolute top-3 right-3">
<button className="bg-white/90 backdrop-blur rounded-full p-1.5 text-slate-400 hover:text-red-500 shadow-sm">
<span className="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">Geometric Abstract Kit</h3>
<p className="font-black text-primary text-xl">$20</p>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Bold shapes and soft gradients for creative pros.</p>
<button className="w-full flex items-center justify-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold py-2.5 rounded-lg transition-all">
<span className="material-symbols-outlined text-xl">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
</div>
{/* <!-- Pagination --> */}
<div className="flex items-center justify-center gap-2 mt-12 pb-12">
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-primary/5 text-slate-400 hover:text-primary">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-primary/5 text-slate-600 dark:text-slate-400 hover:border-primary/30 transition-all font-medium">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-primary/5 text-slate-600 dark:text-slate-400 hover:border-primary/30 transition-all font-medium">3</button>
<span className="text-slate-400 px-2">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-primary/5 text-slate-600 dark:text-slate-400 hover:border-primary/30 transition-all font-medium">12</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-primary/5 text-slate-400 hover:text-primary">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>
</div>

);
}
