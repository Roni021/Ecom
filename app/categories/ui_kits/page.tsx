"use client";
import { useState } from "react";

export default function categoris() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
{/* <!-- Header / Navigation --> */}
<nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span className="material-icons text-white text-sm">grid_view</span>
</div>
<span className="font-bold text-xl tracking-tight">Market<span className="text-primary">Place</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-primary transition-colors" href="#">Explore</a>
<a className="text-primary" href="#">Categories</a>
<a className="hover:text-primary transition-colors" href="#">Sell</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
<span className="material-icons">search</span>
</button>
<button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
<span className="material-icons">shopping_cart</span>
</button>
<div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
</div>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
{/* <!-- Breadcrumbs --> */}
<nav className="flex mb-8 text-sm text-slate-500 dark:text-slate-400">
<ol className="flex items-center gap-2">
<li><a className="hover:text-primary" href="#">Home</a></li>
<li className="flex items-center gap-2"><span className="material-icons text-xs">chevron_right</span> <a className="hover:text-primary" href="#">Categories</a></li>
<li className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-medium"><span className="material-icons text-xs">chevron_right</span> UI Kits</li>
</ol>
</nav>
{/* <!-- Page Header --> */}
<header className="mb-12">
<h1 className="text-4xl font-bold mb-4">UI Kits &amp; Design Systems</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Elevate your design workflow with our curated collection of professional UI kits, design systems, and component libraries. Compatible with the world's most popular design tools.
            </p>
</header>
<div className="flex flex-col lg:flex-row gap-8">
{/* <!-- Sidebar Filters --> */}
<aside className="w-full lg:w-64 flex-shrink-0">
<div className="sticky top-24 space-y-8">
{/* <!-- Category --> */}
<div>
<h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Category</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
<span className="text-sm group-hover:text-primary transition-colors">All UI Kits</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
<span className="text-sm group-hover:text-primary transition-colors">Web Dashboards</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
<span className="text-sm group-hover:text-primary transition-colors">Mobile Apps</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
<span className="text-sm group-hover:text-primary transition-colors">Landing Pages</span>
</label>
</div>
</div>
{/* <!-- Compatibility --> */}
<div>
<h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Compatibility</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
<span className="text-sm group-hover:text-primary transition-colors">Figma</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
<span className="text-sm group-hover:text-primary transition-colors">Sketch</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
<span className="text-sm group-hover:text-primary transition-colors">Adobe XD</span>
</label>
</div>
</div>
{/* <!-- Price Range --> */}
<div>
<h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Price Range</h3>
<div className="px-2">
<input className="w-full accent-primary h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer" type="range"/>
<div className="flex justify-between mt-2 text-xs text-slate-500">
<span>$0</span>
<span>$500+</span>
</div>
</div>
</div>
{/* <!-- Rating --> */}
<div>
<h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Rating</h3>
<div className="space-y-2">
<button className="flex items-center gap-2 text-sm hover:text-primary">
<div className="flex text-amber-400">
<span className="material-icons text-xs">star</span>
<span className="material-icons text-xs">star</span>
<span className="material-icons text-xs">star</span>
<span className="material-icons text-xs">star</span>
<span className="material-icons text-xs">star_outline</span>
</div>
<span>&amp; Up</span>
</button>
</div>
</div>
<button className="w-full py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm font-semibold rounded-lg hover:bg-primary transition-colors">
                        Apply Filters
                    </button>
</div>
</aside>
{/* <!-- Main Content Area --> */}
<div className="flex-1">
{/* <!-- Sorting Bar --> */}
<div className="flex justify-between items-center mb-8">
<p className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900 dark:text-slate-100">24</span> results</p>
<div className="flex items-center gap-3">
<label className="text-sm font-medium">Sort by:</label>
<select className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded text-sm px-4 py-2 focus:ring-primary focus:border-primary">
<option>Popularity</option>
<option>Newest First</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>
</div>
{/* <!-- Product Grid --> */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
{/* <!-- Product Card 1 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Modern minimalist UI dashboard design kit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBL6zsFpSTzf_AjeF82G_pGN5Y-SZxu4dH2lnHIe2o5agUUgZnmbJZ5CkNDHRIGPp9rZWSFi2mEix1jK3KdzOhuUSmf8fO_nqWQr02u80lYQItQNHgmp0I_YgAzJj1JxJ_jHMkxvyVNyLMRryur4nnYz5bCcw0wZ6iaPc7tx-cDh_pl8lDNIEjImBgHx3GvDE2HIaCbXc_quoOwEOJepOahGBNt5VJ7seXcbJ7gKT_J-ZwCvmeSwMccz95W9w8VhEVlj2aE9Fisw6a"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="bg-white text-slate-900 p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
<span className="material-icons">shopping_cart</span>
</button>
<button className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-primary hover:text-white transition-colors">
                                    View Details
                                </button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-lg group-hover:text-primary transition-colors">Neo-Minimalist Dashboard Kit</h3>
<span className="font-bold text-primary text-xl">$48</span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="flex items-center gap-1">
<span className="material-icons text-amber-400 text-sm">star</span>
<span className="text-sm font-medium">4.9</span>
<span className="text-xs text-slate-400">(128)</span>
</div>
<div className="flex gap-2">
<img alt="Figma" className="w-4 h-4 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvFcwLJ_ljOAc7Xt70MFB71i9AeP1RoCnTuzYuYvru4X54UmOCPf6-UIv51P1pmMZDTCE6ytmq__Cv-K4jan2GGO2k9Iyz7YucP05uuaW8kPW_rnwRcocqvj9poE8k8-2IGhm4YghU1r6xJmmoU5RJN-IjPpvXhO54sjtgniHeOOupMIkovXIWQvTjOmQ3cCLtm_llvhs8aKvBd_lfMDy44P4UsJXqU5IqA0mAjRoy2fxfMhy41Wv_gSnbRx_IAH2FVFhbxUzbtcMt"/>
<img alt="Sketch" className="w-4 h-4 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKUFGMme9FqJ2HG4f37_CoP2UiiCIGrHpvddArp_PTxVLX_3mmBj3XKnGypXS2gbO1fxZk2_V8wt8-nzlQmVTklJWWs03BCYKhTqJAXPp6jSSY3J8s-0JZq4LoFF-TexrlLaYh8UaIrdP46TEIK1fwVdx73YW6dtt39PLFsua3BXNqAsQQvywkNt-EvmJCUv3P_Qu1oHzeQz3EXIB3dZAsTXX6CpQQCF52n5vuqqkgm__mBioEvMQyi7mw5jCoTPIlP7Dc3usf89E2"/>
</div>
</div>
</div>
</div>
{/* <!-- Product Card 2 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Cryptocurrency mobile app UI components kit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoSMxDyt-5rUeKjFiX3dTCOFREHYxUr4ClSmRzEU0W8nOPoEEGAuvtLoOA6mmewj-ULvs7QH8DGYuJDev4ie_s4IAoZV-mdVHflrxqsQ0ioKfu_7tZtBUxjrDDfj5-3qOafGi3PXOscdz4TDASg7PbnVCNglbPlD3mbc1jkR2Yeh_ZjqgILEFkff4bqtRRe5d7v1g4oMqyO1NqB4n4hDkC7Gn7w13UqUxr1h2Ssrs-hVXrvF_7sfEb2R1ZR1ec1JtqGthKKct7Tkvd"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="bg-white text-slate-900 p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
<span className="material-icons">shopping_cart</span>
</button>
<button className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-primary hover:text-white transition-colors">
                                    View Details
                                </button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-lg group-hover:text-primary transition-colors">CryptoWallet Mobile UI Kit</h3>
<span className="font-bold text-primary text-xl">$32</span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="flex items-center gap-1">
<span className="material-icons text-amber-400 text-sm">star</span>
<span className="text-sm font-medium">4.7</span>
<span className="text-xs text-slate-400">(84)</span>
</div>
<div className="flex gap-2">
<img alt="Figma" className="w-4 h-4 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAerBzAW7AlYf6RVsNHxW4nOLIKRl86gZCW-_dKi0eZp4ZTyDAu3lHQuMWIkGFxuyPZQngfhYTVfBdcmFOBfzWzPV8lB4dntFzdKYnasWxmiUJ_ApOGbe2HsSNByjdBTbIlIpAJVm_enGVsLxnjd76yY21w7o8vZ18zqUBSiOvtmLMkvoJGejBnLYgbHf7dGkO-XjB2EtDHDotJoiKKinttDKN6VB4NdIId1RlDxpav3uKen-avcp_6G0l8G1U28C8xyGMF1dX6-sg0"/>
</div>
</div>
</div>
</div>
{/* <!-- Product Card 3 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Complex enterprise design system for Figma" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg3rboQGkvjCtk7rpj2_uQEE1sGGaGuLwdbQovG9FKV1uBjFzFy3vW19lY5I3ahkX5h1IEENQ64RsWYLxHjRxjctUTt_St17HY_khLsOHBqFyz2BBlPhGXIzMle7umbsGzAGEDrYp2J-ox9ycfZsFYdaeKl7tjNOrjHJP-hEbdshDoHi0KWZ_9sWaKncir0ycT2ss2ROHm4Yfe8WkoUndDIcVyW7fGNNaOCrZ4qJKs6ppg9QRcXYPR9oK9fX75wT9tmFWRyz_8DVjC"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="bg-white text-slate-900 p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
<span className="material-icons">shopping_cart</span>
</button>
<button className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-primary hover:text-white transition-colors">
                                    View Details
                                </button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-lg group-hover:text-primary transition-colors">Quantum Design System</h3>
<span className="font-bold text-primary text-xl">$99</span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="flex items-center gap-1">
<span className="material-icons text-amber-400 text-sm">star</span>
<span className="text-sm font-medium">5.0</span>
<span className="text-xs text-slate-400">(215)</span>
</div>
<div className="flex gap-2">
<img alt="Figma" className="w-4 h-4 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjcZmd5-p6VpCUpTusOdMPACTjcqW5QeLDJ1KocYnlGTEI-2UrFu1CWc_SLSdFWpaqJ4DFrccy8Tg5p8KWuptegCh9r2dBNjf_Wu8JDRUaaHus8H9NSaO14Jz-qegviZ_YaC9OR80Zb25FGtjuosD_ovAr9j3Ylm8MPPfaZuEkdjVEpSTk1ss_Bk15LeNTW8USPAgdIWEFjP2pWxTLpWzuin-SUW9jCMgXus96N49F2m14HAm0NbOfQJJHbWa0hYcOov6lZpjDLqmM"/>
<img alt="Adobe XD" className="w-4 h-4 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGEwrLPN_I0pylQ1a5zqxUGRWTNYQpY5484bz907u22aC7lRuH597cL9aFiGnz9pn6WVB9jgw7r-7AdeGU2ph9cSH11N7xjtzy_Bu7VRBpq0rkF_kdUUjTFI84RL-Sa4N4mzrAzoHaiDI73RC2HztRVP1ZcbBPcXZlaCVxx14lkq_tQF1IvpVaPmHKNT1GcK68-KzmoHhS_u5unKGXDARWgg-Fke6B7KvarlGEwwbnf0N1l2SFr4l6MJ3H0zYV1_cmQ34ANO7_oy-x"/>
</div>
</div>
</div>
</div>
{/* <!-- Product Card 4 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="SaaS landing page sections and components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF_beC_vAiJXYhyJC_8pqoXn5td4Jz9iboyvPNyI4UyFqa6sOVo600NduCQ6yZBZOJGWPdCL0DpmA4xLyzCa76XxBpL1grFgGX3hzjv4syXP2UIM30AsRBOt8aLgUmVNUg4f3xyH0X8TiYmZ--zPcFdiOcEEGi20jEIU7SY3JzD2nwNLKUWg9ulIo1FdCr2FfcfOR5vC-mWw7kmtTAem64E36OCJKOUTro80qtPFkLwwOy9WBdyrWqC86JywUlSH_ssHPWpRq-xo3d"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="bg-white text-slate-900 p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
<span className="material-icons">shopping_cart</span>
</button>
<button className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-primary hover:text-white transition-colors">
                                    View Details
                                </button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-lg group-hover:text-primary transition-colors">SaaS Hero Sections Pack</h3>
<span className="font-bold text-primary text-xl">$19</span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="flex items-center gap-1">
<span className="material-icons text-amber-400 text-sm">star</span>
<span className="text-sm font-medium">4.6</span>
<span className="text-xs text-slate-400">(54)</span>
</div>
<div className="flex gap-2">
<img alt="Figma" className="w-4 h-4 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBukWkBscWxVgwmZZygxLD6Gak8J3mM_HoSU5lVybyUu2XlDXFdq6YGcJJFgXKnVUD3IJvLPtOygTYw7AWrYlJMVhCQzUOdi0iruqzuVngzaJOnakHEfB8Dxny-enWIOAB-5loiI3DWZBXlUCOt1ISMECPfrP9SP0lSJAxplk_WOPuMVmRm4KzV6r5rVrR5T3vjzMiHVY9GWydQRT6xZAxqPHgGEJQhnFDxns6lgG_4BjtNWxc0qiuJPgvTFIf_td2XZUi56ymjR32U"/>
</div>
</div>
</div>
</div>
{/* <!-- Product Card 5 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="E-commerce web application UI kit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxwuosoilRJJ2gWqpnjV4ENkpji2S_URByz1I2FcEsHCBvljpJCUriDedKgHD6Xvri2sVldpCNms582-202R8goiiGB1ZDvrz4ph-MPROXAYLlRRJPKJ69lGYyZJvWBZamrLLVZWMd0C2oR4W754lhBPgwVbAu8z_RXu7x5jlwZyY_mHAx7fWOijBhMkO8pM4OLKct0V_7FTCL_OfJzrbllQNQdEKacXOYCtxD2-UQsrIgopi_PKwaaedr4eHMO0GEG8GCm9fqTL-M"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="bg-white text-slate-900 p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
<span className="material-icons">shopping_cart</span>
</button>
<button className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-primary hover:text-white transition-colors">
                                    View Details
                                </button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-lg group-hover:text-primary transition-colors">Marketplace Web Framework</h3>
<span className="font-bold text-primary text-xl">$59</span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="flex items-center gap-1">
<span className="material-icons text-amber-400 text-sm">star</span>
<span className="text-sm font-medium">4.8</span>
<span className="text-xs text-slate-400">(92)</span>
</div>
<div className="flex gap-2">
<img alt="Figma" className="w-4 h-4 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC99mJQtXtbh3zzqi_lyb-m0o6EX9NNbXrszOPrRJp4sAt5vzwYdnMSVFaq0PupFPb5fgHfUs-Y-VbNDfXSsT3ESxnZI5ZKj-0fMr7AYszyv8tTiCYWN5qh8mBPdOc6PzpsGoHYet7_YoxMaZ2-Y5RXAOElrl3A8X-Q3ZEf22nxHHukT8Np5c8JefsG0TwaQRjxLasZDP0w7nQ3hI2LNaOWJz948KQiF5IUjGwwpGsAc4mikaOB0RtSMCLtpMdLEf1MCGt0TqQjHAuv"/>
<img alt="Sketch" className="w-4 h-4 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa-nwK-N9b_RsMhUExaE_Fy6msLwAZppVYo--iANYVsJ7ArQf9qs7WxIuEd7Vg4HVKNHZdj0p8bBgoXgSOcyHUsb04jJDQeiNPWLauQnrFs6ULbGKWIJ4adrOzHhzcZld2lgM-BvN2xbWwS_TGR2QqsaN25w57isGR3DAgXfgaV1_m6y5--wwB6I1k7-iW9l0OXHsFf4ojafND_qlHaY36stVZcfoXFusRViRQ1c5MzyJTr8neuHKTg0EcHsEliSPlR0HFf1jKRjZ7"/>
</div>
</div>
</div>
</div>
{/* <!-- Product Card 6 --> */}
<div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Analytics and data visualization UI kit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDriBC_sCH8iVhtRJzcopiL-dFvuGZEotUcDudU0DKPbzRTQUrdsjhEsU8q4NZrcKnRo4kUu9ju9lhFrT_qnaGnET_K-1UEd2KMCW2NZYJJLaPUiHuxVpvt09-_XpMRgpjKM6AewiHFRCV74dBCVBNctr19iGqvWjQn1fAs_Z_UZDp9ACeBCNPuVSmo6eRzW4Ot1NoZWhq87f1xXdpzdu6eg5OPGPU7wheY0U4K71_65UX4ztVd64_RD8n5acZx9FWtNKtQfh4oZgFi"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
<button className="bg-white text-slate-900 p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
<span className="material-icons">shopping_cart</span>
</button>
<button className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-primary hover:text-white transition-colors">
                                    View Details
                                </button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-lg group-hover:text-primary transition-colors">DataViz Pro Library</h3>
<span className="font-bold text-primary text-xl">$65</span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="flex items-center gap-1">
<span className="material-icons text-amber-400 text-sm">star</span>
<span className="text-sm font-medium">4.9</span>
<span className="text-xs text-slate-400">(156)</span>
</div>
<div className="flex gap-2">
<img alt="Figma" className="w-4 h-4 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXu1WRQTeDM-8A3kCaBAN-kworQW41UEK2fYRd0HBw57bdaffIbB98w2CyaG5AlnhR1xin5ll1h3Ypqh_Ze3FCfuZ9YQNvU7nnsL_dByU_8ZNj_97MxWjYWVUyHYpF6VgO4TXYFd1t6MVqBBXsEXuOAJxmBNlkl3OESE81YQ_qXhexJPevDJTpgoG-J3EwiomE4uDAWNK-LvVWrNgxyhJThZM5ca5by5uYLmsbCiJZuxoh-DcEDNg6M5qju64fvqBN7Ra0dTKkqMgY"/>
</div>
</div>
</div>
</div>
</div>
{/* <!-- Pagination --> */}
<div className="mt-16 flex items-center justify-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all">
<span className="material-icons text-sm">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-semibold">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all">3</button>
<span className="px-2 text-slate-400">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all">12</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all">
<span className="material-icons text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>
  );
}
