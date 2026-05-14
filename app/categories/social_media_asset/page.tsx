"use client";
import Link from "next/link";

export default function categoris() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
<div className="relative flex min-h-screen w-full flex-col">
{/* <!-- Top Navigation --> */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-8">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center size-10 rounded-xl bg-primary text-white">
<span className="material-symbols-outlined">category</span>
</div>
<h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">PixelStore</h2>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Marketplace</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Bundles</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Sell</a>
</nav>
</div>
<div className="flex flex-1 justify-end items-center gap-4">
<div className="relative w-full max-w-xs hidden sm:block">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span className="material-symbols-outlined text-[20px]">search</span>
</span>
<input className="block w-full rounded-lg border-0 bg-slate-100 dark:bg-slate-800 py-2 pl-10 pr-3 text-sm placeholder-slate-500 focus:ring-2 focus:ring-primary" placeholder="Search templates..." type="search"/>
</div>
<button className="relative p-2 text-slate-600 dark:text-slate-400 hover:text-primary">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">3</span>
</button>
<div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-200 dark:border-slate-700" data-alt="User avatar profile picture">
<img alt="Avatar" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgFNAz87n0KahFPSNA4agIAeuQJcbE4IaE6vB-Y0fXYbbe-A_OLY76hgoM71gpQxSkDZ7GFbqyyBL5UlPO7hRLINyI0bu0Pkg6itvMyKwfg0jEYV1ft4cx2fM-PhROsGrugq98LQbrBDvkg6ZvqYknua_XWD9Fz1MDT_4oRDHd-isFrnMZzGxeu9pW4UDZcfVHLbVLLsVKtJ3yvuiAjWRZvP_60PvAJ5te4d0b0knG-5JoaP_ygmNea4UJ1H6oFA2TIGmZC_57MoXa"/>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
{/* <!-- Breadcrumb --> */}
<nav className="flex mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
<ol className="flex items-center space-x-2">
<li><a className="hover:text-primary" href="#">Home</a></li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">chevron_right</span>
<a className="hover:text-primary" href="#">Categories</a>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-slate-900 dark:text-white">Social Media Assets</span>
</li>
</ol>
</nav>
{/* <!-- Header Section --> */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">Social Media Assets</h1>
<p className="text-lg text-slate-600 dark:text-slate-400">Premium templates and assets to level up your social game.</p>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-slate-500 whitespace-nowrap">Sort by:</span>
<select className="rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary py-2 px-4 pr-8">
<option>Popularity</option>
<option>Newest</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8">
{/* <!-- Sidebar Filters --> */}
<aside className="w-full lg:w-64 flex-shrink-0">
<div className="sticky top-24 space-y-8">
{/* <!-- Platform Filter --> */}
<div>
<h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Platform</h3>
<div className="space-y-2">
<label className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary cursor-pointer">
<span className="material-symbols-outlined text-[20px] fill-current">camera_enhance</span>
<span className="text-sm font-semibold">Instagram</span>
</label>
<label className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">
<span className="material-symbols-outlined text-[20px]">music_note</span>
<span className="text-sm font-medium">TikTok</span>
</label>
<label className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">
<span className="material-symbols-outlined text-[20px]">play_circle</span>
<span className="text-sm font-medium">YouTube</span>
</label>
<label className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">
<span className="material-symbols-outlined text-[20px]">work</span>
<span className="text-sm font-medium">LinkedIn</span>
</label>
<label className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">
<span className="material-symbols-outlined text-[20px]">push_pin</span>
<span className="text-sm font-medium">Pinterest</span>
</label>
</div>
</div>
{/* <!-- Asset Type Filter --> */}
<div>
<h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Asset Type</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer">
{/* <input checked="" className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/> */}
<input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-700 dark:text-slate-300">Posts</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-700 dark:text-slate-300">Stories</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input  className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/>
{/* <input checked="" className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/> */}
<span className="text-sm text-slate-700 dark:text-slate-300">Reels</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-700 dark:text-slate-300">Banners</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-700 dark:text-slate-300">Profile Kits</span>
</label>
</div>
</div>
{/* <!-- Price Range Slider --> */}
<div>
<h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Price Range</h3>
<input className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range"/>
<div className="flex justify-between mt-2 text-xs font-medium text-slate-500">
<span>$0</span>
<span>$200+</span>
</div>
</div>
{/* <!-- Rating Filter --> */}
<div>
<h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Minimum Rating</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="text-primary focus:ring-primary border-slate-300" name="rating" type="radio"/>
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
<span className="text-sm text-slate-500">&amp; up</span>
</label>
</div>
</div>
</div>
</aside>
{/* <!-- Product Grid --> */}
<div className="flex-1">
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
{/* <!-- Card 1 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-100" data-alt="Modern Instagram post template preview">
<img alt="Instagram Template" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0MGdU8i01JyPEF1jYgC-q3YXMoq7pP1zH-zHjyIIZB3MeCdhUAdtyXxVl74EymK3lQRrTqrSmGaF4L--0S23IIGbe6AAACh4J5rdCAbRhMuQXROK6re3P7XEpioz6Vn_KGyifpEdANfXfrbYV0dYmYTd3qXJ4gRVL5J8pNlCGkVzJuULZBPHRs-BOpIc0HXgJUQxM1FWL7IQ7qfkTTAOtija3yrxh24j9vrhbnIAhsrPAgIPAzsJm4Xbi8GFM_tYkD0pglzEzLK1U"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold uppercase text-slate-900">Best Seller</span>
</div>
<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick View</button>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Modern Instagram Post Pack</h4>
<span className="text-lg font-black text-primary">$29</span>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
</div>
<span className="text-xs text-slate-500 font-medium">(128)</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
<div className="flex gap-2">
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Canva">edit_square</span>
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Figma">pentagon</span>
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Photoshop">brush</span>
</div>
<button className="text-primary hover:bg-primary hover:text-white p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* <!-- Card 2 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-100" data-alt="YouTube channel branding kit preview">
<img alt="YouTube Kit" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsodQt-VGvbiv8rPqfah35AAj_jDCQFd02OAK60oAVpXr49g5NE0BEe5vDyUOmG9f7k1ugpthDf3xZ8kA5iwQiV1HF1EbTbyHYg8lpLNWbw_KWcKAMOkqOx-KN38mKOst6OitOiB3TKJ2F3C9OyyfwkQ2XJU145Zk80Pqu9EQloC6hYew5yaLKc4KebfoilCKR8-fV3Hj2wx_05diCRYjZmFuhedcUQeCU6nnXejhKksogeYr5BM1BtE7t0XXzh9079pGPcJbLj0E4"/>
<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick View</button>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">YouTube Channel Branding Kit</h4>
<span className="text-lg font-black text-primary">$45</span>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm">star_half</span>
</div>
<span className="text-xs text-slate-500 font-medium">(84)</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
<div className="flex gap-2">
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Figma">pentagon</span>
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Photoshop">brush</span>
</div>
<button className="text-primary hover:bg-primary hover:text-white p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* <!-- Card 3 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-100" data-alt="TikTok content planner template preview">
<img alt="TikTok Planner" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCAgFsd-JO9yrG7nXIds7tQlajTUJ0TWyS9_qYKLshmMkFbZx5EUawrAIYG3YHBYxOcn7sQ06Piv2eVXjus9A_Bu8I3yUr0uW7yPBOMIm2vcZ80SxoD71bMoA3L5hW9xumfHvQwCxdgOCMd7VEDKND4wE5eFTkYA30O2AW259i-GY4_h5hl5XBCvOwX_9s16gSqukvhAPbvqqmUPYM0g249yn84DFInctlLqkL8tsUgMhriSuEhX9F3sUU0XnZaAmrIRduzNpIDrq4"/>
<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick View</button>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">TikTok Content Planner</h4>
<span className="text-lg font-black text-primary">$15</span>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
</div>
<span className="text-xs text-slate-500 font-medium">(215)</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
<div className="flex gap-2">
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Excel">table_view</span>
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Notion">sticky_note_2</span>
</div>
<button className="text-primary hover:bg-primary hover:text-white p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* <!-- Card 4 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-100" data-alt="LinkedIn carousel template design preview">
<img alt="LinkedIn Carousel" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjTqDj0SlaL2loP4-KDsXxQdUHyenOxd6gJq1NcZGH1kKqACxWEXB-b3-QATj28He0zUvc7WHM7G5t47vbG65Oy5BINhz8uu-zUuedIUzvfByg-yU7mnDfMZc_lOo59R7dAG6r-ZbeaapHFaevxA6MzAWgQrdHy6Ka_1u67nEIwmIWNJ-dMg8bnD6iVRfE3uaPxBD1D1pzH10opmB0a2KWgTjx7QLULL90KhJxLfxkdQWJ-pYOhboZVff2Z-jenr51UavlgHZfOjmV"/>
<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick View</button>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Expert LinkedIn Carousel Kit</h4>
<span className="text-lg font-black text-primary">$39</span>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
<span className="text-xs text-slate-500 font-medium">(56)</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
<div className="flex gap-2">
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Canva">edit_square</span>
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Figma">pentagon</span>
</div>
<button className="text-primary hover:bg-primary hover:text-white p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* <!-- Card 5 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-100" data-alt="Vertical reels video templates for creators">
<img alt="Reels Template" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdd0RfPjJUWIBbMXpEsOQNQqmsOUY8W-GoE6L17sR_FWCmI-WP2o1W_xf0Nqd-9oSd26WqnqUc8A5u6tnlOxa5TKjvZrkzi8ZPHAnhQud-q59Np2ZdZRDmmK-61RMULE-G8bY57VTcF04hg9u2ooNM8scvU4NehGGf-xEgnyJD0MdH_9bCjeVPtm7w4CMnz9IGLoD_IL_kZcDyE4kVKIcq5mC5W4NK0JXw8vNXUgft-Ny0TSHRhdxlScTtHZVlATPgfsXSa4tfXDLm"/>
<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick View</button>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Viral Reels Video Presets</h4>
<span className="text-lg font-black text-primary">$49</span>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm">star_outline</span>
</div>
<span className="text-xs text-slate-500 font-medium">(192)</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
<div className="flex gap-2">
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Premiere Pro">movie</span>
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="After Effects">animation</span>
</div>
<button className="text-primary hover:bg-primary hover:text-white p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/* <!-- Card 6 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-100" data-alt="Minimalist pinterest pin graphics preview">
<img alt="Pinterest Pins" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVY-y7mqGvcyiW8aR6mGv0oTxSvyGYxRW215PEKr_jbg6c_AYMc21Yv1Dmoil_dGSleQibSCVd-PTO3Na7j_mNHQkXPiNY22Pz2Y7pS2rYSxMi6JsfXNFcG3FocyozIb5NgAKtwBE7Mnds8qzbGLbs-5MVexU4ufyQ3dJ_E_7Wc0qXNfuQgmls3SSSmhKV2ymSCGroIMoL-v0lASomVSi66ILyQ7y8N3EYY0NSoYRD-hvPRyWScoIS02m7teolj9XQUt7QkkAXMrYI"/>
<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="bg-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick View</button>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Clean Pinterest Graphic Pack</h4>
<span className="text-lg font-black text-primary">$19</span>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm fill-current">star</span>
<span className="material-symbols-outlined text-sm">star_half</span>
</div>
<span className="text-xs text-slate-500 font-medium">(43)</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
<div className="flex gap-2">
<span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-help" title="Canva">edit_square</span>
</div>
<button className="text-primary hover:bg-primary hover:text-white p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
</div>
{/* <!-- Pagination --> */}
<div className="mt-12 flex items-center justify-center gap-2">
<button className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="size-10 rounded-lg bg-primary text-white font-bold">1</button>
<button className="size-10 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium">2</button>
<button className="size-10 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium">3</button>
<span className="px-2 text-slate-400">...</span>
<button className="size-10 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium">12</button>
<button className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
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