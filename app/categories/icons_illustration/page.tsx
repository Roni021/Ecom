"use client";
import { useState } from "react";

export default function categoris() {
  return (
    <div className="theme-page font-display theme-text dark:theme-text">
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-theme-accent/10 theme-surface dark:bg-background-dark px-6 md:px-10 py-3 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 theme-accent-text">
<div className="size-8 flex items-center justify-center theme-accent rounded-lg text-white">
<span className="material-symbols-outlined">layers</span>
</div>
<h2 className="theme-text dark:theme-text text-lg font-bold leading-tight tracking-[-0.015em]">Market3D</h2>
</div>
<nav className="hidden md:flex items-center gap-9">
<a className="theme-text dark:theme-text hover:theme-accent-text transition-colors text-sm font-medium leading-normal" href="#">All Assets</a>
<a className="theme-accent-text text-sm font-bold leading-normal border-b-2 border-theme-accent" href="#">3D Icons</a>
<a className="theme-text dark:theme-text hover:theme-accent-text transition-colors text-sm font-medium leading-normal" href="#">UI Kits</a>
<a className="theme-text dark:theme-text hover:theme-accent-text transition-colors text-sm font-medium leading-normal" href="#">Fonts</a>
</nav>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8">
<label className="hidden sm:flex flex-col min-w-40 h-10! max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="theme-text flex border-none theme-surface theme-surface items-center justify-center pl-4 rounded-l-lg">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg theme-text dark:theme-text focus:outline-0 focus:ring-0 border-none theme-surface theme-surface h-full placeholder:theme-text px-4 rounded-l-none pl-2 text-base font-normal" placeholder="Search icons..."/>
</div>
</label>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg h-10 w-10 theme-surface theme-surface theme-text dark:theme-text hover:theme-accent/10 transition-colors">
<span className="material-symbols-outlined">shopping_cart</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 theme-surface theme-surface theme-text dark:theme-text hover:theme-accent/10 transition-colors">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
<main className="flex flex-1 flex-col md:flex-row max-w-360 mx-auto w-full px-4 md:px-10 py-6 gap-8">
<aside className="w-full md:w-64 shrink-0 flex flex-col gap-8">
<div className="flex flex-col gap-6">
<div className="flex flex-col">
<h3 className="theme-text dark:theme-text text-lg font-bold leading-normal">Filters</h3>
<p className="theme-text text-sm font-normal">Refine your 3D search</p>
</div>
<div className="flex flex-col gap-2">
<p className="theme-text dark:theme-text text-sm font-semibold mb-2">Style</p>
<label className="flex items-center gap-3 px-3 py-2 rounded-lg theme-accent/10 theme-accent-text cursor-pointer">
<span className="material-symbols-outlined text-[20px] fill-1">palette</span>
<span className="text-sm font-medium">All Styles</span>
</label>
<label className="flex items-center gap-3 px-3 py-2 hover:theme-surface dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
<div className="w-4 h-4 border-2 border-slate-300 rounded flex items-center justify-center"></div>
<span className="text-sm font-medium">Clay</span>
</label>
<label className="flex items-center gap-3 px-3 py-2 hover:theme-surface dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
<div className="w-4 h-4 border-2 border-slate-300 rounded flex items-center justify-center"></div>
<span className="text-sm font-medium">Glass</span>
</label>
<label className="flex items-center gap-3 px-3 py-2 hover:theme-surface dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
<div className="w-4 h-4 border-2 border-slate-300 rounded flex items-center justify-center"></div>
<span className="text-sm font-medium">Glossy</span>
</label>
<label className="flex items-center gap-3 px-3 py-2 hover:theme-surface dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
<div className="w-4 h-4 border-2 border-slate-300 rounded flex items-center justify-center"></div>
<span className="text-sm font-medium">Minimal</span>
</label>
</div>
<hr className="border-theme-surface dark:border-slate-800"/>
<div className="flex flex-col gap-2">
<p className="theme-text dark:theme-text text-sm font-semibold mb-2">Format</p>
<div className="grid grid-cols-2 gap-2">
<span className="px-3 py-1 theme-surface theme-surface text-xs font-semibold rounded text-center">PNG</span>
<span className="px-3 py-1 theme-surface theme-surface text-xs font-semibold rounded text-center">OBJ</span>
<span className="px-3 py-1 theme-surface theme-surface text-xs font-semibold rounded text-center">C4D</span>
<span className="px-3 py-1 theme-surface theme-surface text-xs font-semibold rounded text-center">Blender</span>
</div>
</div>
<hr className="border-theme-surface dark:border-slate-800"/>
<div className="flex flex-col gap-2">
<p className="theme-text dark:theme-text text-sm font-semibold mb-2">Price Range</p>
<input className="w-full accent-primary" type="range"/>
<div className="flex justify-between text-xs theme-text font-medium">
<span>$0</span>
<span>$500+</span>
</div>
</div>
<hr className="border-theme-surface dark:border-slate-800"/>
<div className="flex flex-col gap-2">
<p className="theme-text dark:theme-text text-sm font-semibold mb-2">Minimum Rating</p>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-2 text-sm cursor-pointer">
<input className="theme-accent-text focus:ring-primary" name="rating" type="radio"/>
<span className="flex items-center text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="ml-1 theme-text dark:theme-text">&amp; up</span>
</span>
</label>
</div>
</div>
</div>
</aside>
<div className="flex-1 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-xs theme-text font-medium">
<a className="hover:theme-accent-text" href="#">Home</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:theme-accent-text" href="#">Graphics</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="theme-text dark:theme-text">3D Icons</span>
</div>
<h1 className="text-3xl md:text-4xl font-black tracking-tight theme-text dark:theme-text">3D Icons &amp; Illustrations</h1>
<p className="theme-text dark:theme-text max-w-2xl">High-quality, professional 3D assets to elevate your digital products, presentations, and marketing materials. Available in various formats.</p>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-slate-900 dark:theme-surface text-white dark:theme-text text-sm font-medium">All Assets</button>
<button className="px-4 py-1.5 rounded-full theme-surface theme-surface border border-theme-surface border-theme-surface text-sm font-medium hover:border-theme-accent transition-colors">Clay Style</button>
<button className="px-4 py-1.5 rounded-full theme-surface theme-surface border border-theme-surface border-theme-surface text-sm font-medium hover:border-theme-accent transition-colors">Glassmorphism</button>
<button className="px-4 py-1.5 rounded-full theme-surface theme-surface border border-theme-surface border-theme-surface text-sm font-medium hover:border-theme-accent transition-colors">Low Poly</button>
<button className="px-4 py-1.5 rounded-full theme-surface theme-surface border border-theme-surface border-theme-surface text-sm font-medium hover:border-theme-accent transition-colors">Abstract</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
<div className="group theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface border-theme-surface hover:shadow-xl transition-all hover:-translate-y-1">
<div className="aspect-square bg-linear-to-br from-primary/10 to-primary/5 relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="3D render of professional business and finance icons in glossy blue style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZwD625uTyDKWiHFxtWEldFxOLpXRW1SACZRkYGycbmx2eNFgZu9IccglVhbuX6Ig7PV7w5A46lbeP3cRUv-3zXTgZTAChdcATNYIO0BogY0nUTzxnf_Vwm2RmXWwGYjc_zCC5FZCQLvM0NdtAnN0DCoxynzwZz1Gvq_2PHqwxZrLhEm0VIpSojZQ6VoOlpmYs6ooxRaEhDg_pJdHS9vm-BpdUIzKwFInUgQYDEHdZx7TNvma87N0aQoOGgBcmbVFIJftPZO1fMRnc"/>
<div className="absolute top-3 right-3 theme-surface/90 theme-surface/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold theme-accent-text">New</div>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex justify-between items-start">
<h3 className="font-bold text-lg theme-text dark:theme-text group-hover:theme-accent-text transition-colors">Business &amp; Finance 3D Pack</h3>
<span className="font-black theme-accent-text text-xl">$49</span>
</div>
<div className="flex items-center gap-2">
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
</div>
<span className="text-xs font-medium theme-text">(128 reviews)</span>
</div>
<button className="w-full mt-2 theme-accent text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
<span className="material-symbols-outlined text-lg">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
<div className="group theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface border-theme-surface hover:shadow-xl transition-all hover:-translate-y-1">
<div className="aspect-square bg-linear-to-br from-indigo-500/10 to-indigo-500/5 relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="3D abstract geometric shapes with glass and metal textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTUjA4ISaogfTjzBDhuT7ZFErdmMf7qcLqsB7gxcJY8WxMAuh9HVvfpdKfhojhH78ek6UsN_2_SzUawH8IDOg_bIENyYF3WRKHPtN6QUJ6tWp9NlUyErjRLYblISz8KSXCQ6pCyLOw8XG-AgZrpJywHA0sgpECCyw8a703s_vbVpxQMCpEa2s7Y1HKAlbVYwnGakNTUvJFsGI_9jVONBtXSjLPJgEstvMXtn1fhd4gH5njZzt6JGlsPTcdR3Rw4sAFt-2t5bGFTdO"/>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex justify-between items-start">
<h3 className="font-bold text-lg theme-text dark:theme-text group-hover:theme-accent-text transition-colors">Abstract Geometric Shapes</h3>
<span className="font-black theme-accent-text text-xl">$24</span>
</div>
<div className="flex items-center gap-2">
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm">star_half</span>
</div>
<span className="text-xs font-medium theme-text">(85 reviews)</span>
</div>
<button className="w-full mt-2 theme-accent text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
<span className="material-symbols-outlined text-lg">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
<div className="group theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface border-theme-surface hover:shadow-xl transition-all hover:-translate-y-1">
<div className="aspect-square bg-linear-to-br from-pink-500/10 to-pink-500/5 relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Cute 3D character kit with various expressions and poses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNFeFbokj2EFOLWQM9qX3HeD7Y6411EOALgVGnwBAoDmBN_prW0nZP-FkLG1aJtBprLKFUEcPadQs0q7ywUVDSstfWetYnt_QOmk2oztejSp8aPWrRPzVohzapTI7VIAYyCvvGdGR0y1XBfsoNhH3uLhTE2sV0ttkX0HoDILYlsY23VjpZHWxZCVnI9gM1fnbXJOtadVcXdrxiG8Ng_WhNPOo2sKHg2lpwigNTjchn0roaVGateKVVievxL8DNeSUaDeJYJpyBlc_O"/>
<div className="absolute top-3 right-3 bg-red-500 px-2 py-1 rounded-lg text-xs font-bold text-white">Sale</div>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex justify-between items-start">
<h3 className="font-bold text-lg theme-text dark:theme-text group-hover:theme-accent-text transition-colors">Cute Character 3D Kit</h3>
<div className="flex flex-col items-end">
<span className="font-black theme-accent-text text-xl">$69</span>
<span className="text-xs theme-text line-through">$99</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
</div>
<span className="text-xs font-medium theme-text">(312 reviews)</span>
</div>
<button className="w-full mt-2 theme-accent text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
<span className="material-symbols-outlined text-lg">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
<div className="group theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface border-theme-surface hover:shadow-xl transition-all hover:-translate-y-1">
<div className="aspect-square bg-linear-to-br from-blue-400/10 to-blue-400/5 relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="3D high tech gadgets including smartphones and VR headsets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ_K_5qmiT4hsSA2fahkWDbu1qpQWxq-FMh3u7Rw-s8Y98RPrQk6IfR8kUkMkdFS5pzTD-1R66GXiwyTcgVo1oJ8MGpt_q22DkCtZlIkrx8l8jVyLuenoN8aBEYrVUWPJ-eJCvpti6afGZHrIk6KpTAyk84mfP8I93oSYXCTCzhhBuasfbpCOsaU5oKz7Omz2nyQECVZkhjsAlvwwZtx1uAh1XU9njkAm4VG_KH2fslhH1bOiWYb0YGq5Wl28LWyf0kGkSwt1ZIG1A"/>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex justify-between items-start">
<h3 className="font-bold text-lg theme-text dark:theme-text group-hover:theme-accent-text transition-colors">Tech &amp; Gadgets Set</h3>
<span className="font-black theme-accent-text text-xl">$39</span>
</div>
<div className="flex items-center gap-2">
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
<span className="text-xs font-medium theme-text">(56 reviews)</span>
</div>
<button className="w-full mt-2 theme-accent text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
<span className="material-symbols-outlined text-lg">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
<div className="group theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface border-theme-surface hover:shadow-xl transition-all hover:-translate-y-1">
<div className="aspect-square bg-linear-to-br from-green-400/10 to-green-400/5 relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="3D sustainable energy and nature icon pack" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvB2JEXVFMGF7hEtQPNKTJfuldz5aP6S5QV75dDAi8F8IU6OjRsgcsx6rscf6kuacddcu6sHYWPA-4FAb2z2nLk-IL_rXHce_ym_IPhaGs3TLm2xZco8VTWDx2gn32hp5DDTVid45STDGDcOtPfQFThbhhPYjFw4BW7dRRoj0J6f8syROUCk6sf4ZWUI7OEwqwhEMyTojBvEL84elgL9IOQ2k4ebV_BhNDoB6XMK2JvDWHuzKPP9oLUn4ZxurNoIfEAyNQSGXsuZ5g"/>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex justify-between items-start">
<h3 className="font-bold text-lg theme-text dark:theme-text group-hover:theme-accent-text transition-colors">Eco &amp; Nature Bundle</h3>
<span className="font-black theme-accent-text text-xl">$29</span>
</div>
<div className="flex items-center gap-2">
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm">star_half</span>
</div>
<span className="text-xs font-medium theme-text">(42 reviews)</span>
</div>
<button className="w-full mt-2 theme-accent text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
<span className="material-symbols-outlined text-lg">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
<div className="group theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface border-theme-surface hover:shadow-xl transition-all hover:-translate-y-1">
<div className="aspect-square bg-linear-to-br from-amber-400/10 to-amber-400/5 relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="3D social media and marketing communication icons" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnORb7GCYtxPgeWDR7Mj6_rCJ3hpG5cwq0TUfsSxnOrrHSR-xsCofWHSupsHFaQr_THdB8bhsLQjTNyBtzGHRtpp_lw0JgqeqZPAkYNmgPOonNAyaA_1u3aMNRvXEQZ2wS2wp5u8VgGIChvvbPp_FmiiH_LGoE8XBPezyJmhPlF6UdaF4eC-gHv3UzSajdEquG_RQNBwpxWO9bzXjUwBCzc1F-bNzTYBbeT6y4Xx8nHWJgCCR1Kc-lUpZ3OKfIzXQRETvsLxwvysBG"/>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex justify-between items-start">
<h3 className="font-bold text-lg theme-text dark:theme-text group-hover:theme-accent-text transition-colors">Marketing &amp; Social 3D</h3>
<span className="font-black theme-accent-text text-xl">$35</span>
</div>
<div className="flex items-center gap-2">
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
</div>
<span className="text-xs font-medium theme-text">(194 reviews)</span>
</div>
<button className="w-full mt-2 theme-accent text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
<span className="material-symbols-outlined text-lg">shopping_cart</span>
                                    Add to Cart
                                </button>
</div>
</div>
</div>
<div className="flex justify-center mt-8 gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg theme-surface theme-surface border border-theme-surface border-theme-surface hover:border-theme-accent">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg theme-accent text-white font-bold">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg theme-surface theme-surface border border-theme-surface border-theme-surface hover:border-theme-accent">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg theme-surface theme-surface border border-theme-surface border-theme-surface hover:border-theme-accent">3</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg theme-surface theme-surface border border-theme-surface border-theme-surface hover:border-theme-accent">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</main>
<footer className="border-t border-theme-surface dark:border-slate-800 py-12 theme-surface dark:bg-background-dark px-10">
<div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 theme-accent-text">
<div className="size-6 flex items-center justify-center theme-accent rounded-md text-white">
<span className="material-symbols-outlined text-sm">layers</span>
</div>
<h2 className="theme-text dark:theme-text text-lg font-bold">Market3D</h2>
</div>
<p className="theme-text text-sm leading-relaxed">
                            Premium 3D assets for designers and developers. Build faster with high-quality icons and illustrations.
                        </p>
</div>
<div>
<h4 className="font-bold mb-4">Resources</h4>
<ul className="flex flex-col gap-2 text-sm theme-text">
<li><a className="hover:theme-accent-text transition-colors" href="#">Documentation</a></li>
<li><a className="hover:theme-accent-text transition-colors" href="#">Tutorials</a></li>
<li><a className="hover:theme-accent-text transition-colors" href="#">License Agreement</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Marketplace</h4>
<ul className="flex flex-col gap-2 text-sm theme-text">
<li><a className="hover:theme-accent-text transition-colors" href="#">3D Icons</a></li>
<li><a className="hover:theme-accent-text transition-colors" href="#">Abstract Shapes</a></li>
<li><a className="hover:theme-accent-text transition-colors" href="#">UI Kits</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Stay Updated</h4>
<div className="flex gap-2">
<input className="theme-surface theme-surface border-none rounded-lg flex-1 px-4 py-2 text-sm" placeholder="Your email" type="email"/>
<button className="theme-accent text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
</div>
</div>
</div>
<div className="max-w-360 mx-auto mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs theme-text">
<p>© 2026 Market3D Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:theme-accent-text" href="#">Privacy Policy</a>
<a className="hover:theme-accent-text" href="#">Terms of Service</a>
<a className="hover:theme-accent-text" href="#">Cookies</a>
</div>
</div>
</footer>
</div>
</div>
</div>
  );
}