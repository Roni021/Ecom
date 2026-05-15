"use client";
import Link from "next/link";
export default function about() {
  return (
<div className="theme-page theme-text dark:theme-text font-display">
{/* <!-- Hero Section --> */}
<section className="relative py-20 lg:py-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(37,71,244,0.1)_0%,rgba(255,255,255,0)_100%)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-accent/10 theme-accent-text text-xs font-bold uppercase tracking-wider mb-6">
<span className="material-symbols-outlined text-sm">rocket_launch</span>
                    Our Mission
                </div>
<h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 theme-text dark:text-white leading-tight">
                    Empowering Creators <br/><span className="theme-accent-text">Worldwide</span>
</h1>
<p className="max-w-2xl mx-auto text-lg theme-text dark:theme-text leading-relaxed">
                    ShopDynamics is a global digital marketplace dedicated to providing creators with the tools they need to scale their digital business and reach a worldwide audience.
                </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
<button className="cursor-pointer bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                        Explore Marketplace
                    </button>
<button className="cursor-pointer theme-surface theme-surface theme-accent-text px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                        View Open Roles
                    </button>
</div>
</div>
</section>
{/* <!-- Our Story Section --> */}
<section className="py-20 theme-surface theme-surface/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="rounded-3xl overflow-hidden shadow-2xl aspect-square relative">
<img alt="Our Story" className="object-cover w-full h-full" data-alt="A diverse team of creatives collaborating in a modern office space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDclqRqZEnqaXOZ9zJxUWSXbZ9W-36kaW8ENacPYPGTCaWSMXF8EOcfKqRdxdVEwkTxtszvuzdtWJ10uNMIdQFpqOISwObQf__7NFaDT83L6AEpl-A-Bgb1zQWXZfSZuhLR6K6wC228LHKMI3WN5-zTgVWHL5pjB4-YRywCf5DEQnONShBS-8ojtF7OoZ53TVcJWids2QfzdqPeNrqLYRyjvv5HEjrTd9yCBWN3SMvmrig6w6Tt94kEQZqpMvusnNlrHY_1wzUIOst_"/>
<div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent"></div>
</div>
<div>
<h2 className="text-3xl font-bold mb-6">Our Story</h2>
<div className="space-y-4 theme-text dark:theme-text text-lg leading-relaxed">
<p>
                                Founded in 2023, ShopDynamics began with a simple mission: to democratize the digital economy. We noticed that independent creators often struggled with complex distribution and fragmented tools.
                            </p>
<p>
                                What started as a small team of three developers in a garage has evolved into a global platform supporting thousands of digital entrepreneurs. We believe that everyone with a creative spark should have a seamless path to commercial success.
                            </p>
<p>
                                Today, we provide the infrastructure that bridges the gap between raw innovation and global commerce, ensuring that quality digital assets find the right audience, every time.
                            </p>
</div>
</div>
</div>
</div>
</section>
{/* <!-- Core Values --> */}
<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
<p className="theme-text dark:theme-text">The principles that guide everything we build.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
{/* <!-- Value 1 --> */}
<div className="p-8 rounded-2xl theme-surface theme-surface border border-slate-100 border-theme-surface shadow-sm hover:shadow-md transition-shadow">
<div className="size-14 rounded-xl theme-accent/10 flex items-center justify-center theme-accent-text mb-6">
<span className="material-symbols-outlined text-3xl">lightbulb</span>
</div>
<h3 className="text-xl font-bold mb-3">Innovation</h3>
<p className="theme-text dark:theme-text leading-relaxed">
                            We constantly push boundaries to create tools that anticipate the future of the creator economy.
                        </p>
</div>
{/* <!-- Value 2 --> */}
<div className="p-8 rounded-2xl theme-surface theme-surface border border-slate-100 border-theme-surface shadow-sm hover:shadow-md transition-shadow">
<div className="size-14 rounded-xl theme-accent/10 flex items-center justify-center theme-accent-text mb-6">
<span className="material-symbols-outlined text-3xl">verified</span>
</div>
<h3 className="text-xl font-bold mb-3">Quality</h3>
<p className="theme-text dark:theme-text leading-relaxed">
                            Excellence is our standard. We curate and build with meticulous attention to detail and performance.
                        </p>
</div>
{/* <!-- Value 3 --> */}
<div className="p-8 rounded-2xl theme-surface theme-surface border border-slate-100 border-theme-surface shadow-sm hover:shadow-md transition-shadow">
<div className="size-14 rounded-xl theme-accent/10 flex items-center justify-center theme-accent-text mb-6">
<span className="material-symbols-outlined text-3xl">groups</span>
</div>
<h3 className="text-xl font-bold mb-3">Community</h3>
<p className="theme-text dark:theme-text leading-relaxed">
                            Success is better shared. We foster a collaborative ecosystem where creators grow together.
                        </p>
</div>
</div>
</div>
</section>
{/* <!-- Meet the Team --> */}
<section className="py-20 theme-page theme-surface/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
<p className="theme-text dark:theme-text">The minds behind the marketplace revolution.</p>
</div>
<button className="theme-accent-text font-bold inline-flex items-center gap-2 group">
                        See all members
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
{/* <!-- Member 1 --> */}
<div className="group">
<div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
<img alt="Alex Rivera" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" data-alt="Professional portrait of a male CEO smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZDb0o6nHVE_xv1sDF-ZGuVMOKmmBHs40Zdh9JXIb754GUwkOVE5AiIdyGbpH2SqnLQsFBrEF5SjjWB4plbAsPI1_jhLsY3huw10uA5SU-4rzgup8hGJg1t9Wza-lCC2d3GefqIZ36t1xfid9Zic3nZ8Zp9IIFpsOm1yJRy2k1i4PuR1iNmLX4CvyxbvoK_BEN8gOEzk7hwTEEOKbCQ2pb9fIhbPBcinv4AqaSLnM-t1ROUvUwmFPeBA5X3IQWQQdz7IeARpO05w5f"/>
<div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<div className="flex gap-3">
<div className="size-8 rounded-full theme-surface/20 theme-surface/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-[var(--primary)] transition-colors">
<span className="material-symbols-outlined text-sm">link</span>
</div>
</div>
</div>
</div>
<h4 className="font-bold text-lg">Alex Rivera</h4>
<p className="theme-accent-text text-sm font-medium">Founder &amp; CEO</p>
</div>
{/* <!-- Member 2 --> */}
<div className="group">
<div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
<img alt="Sarah Chen" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" data-alt="Professional portrait of a female CTO in a studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXVpvUoTqKggjTQWfv3R4Qhe9JdUh6UBt3QMDJLoxOmD3gYGU03NM3d6ZRIG9ekzFBQk6kULR2Uex1qM0A_Hm8wRa24EQSJy86mL3iI2jLKSfrWfjmNtp2OFvWe48BZR-dNj8sIwbPU1DwrL_fK_pzNSsg8MiXwrZOgYI8XIVeDveBa-Z1EtkZNvwezwjBM-BHG1SAHPv5UyFbxwVRl_Q-aoSf86nXzIgZdfyURKBNA2n9zSUH_rcfwDvZqCqLPR_n7f30c_ievYD7"/>
<div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<div className="flex gap-3">
<div className="size-8 rounded-full theme-surface/20 theme-surface/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-[var(--primary)] transition-colors">
<span className="material-symbols-outlined text-sm">link</span>
</div>
</div>
</div>
</div>
<h4 className="font-bold text-lg">Sarah Chen</h4>
<p className="theme-accent-text text-sm font-medium">Chief Technology Officer</p>
</div>
{/* <!-- Member 3 --> */}
<div className="group">
<div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
<img alt="Marcus Thorne" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" data-alt="Candid portrait of a male head of design working" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQSg0aDBJM6KapIn0bW_DggU2F6Tpj3hH7gDitKQ2p9Wd2wxitMcbSKPMzFJVxFZ-nko64vc_0NNyGE62AdvAqFYHkBZD8L_hX6COCExBmgV3I23a7WY9Eixl98isvKZU68TpI7BRunRS71iREdZRaGvyAkGpbsbsgoKFJ5KFG99j78ewOFTPWpBt8i5eH-hVQPPeUURlsCRhys8xppMubv7vnEelczHOPAsvLK90SKGoJDAclQu7_7mBsYRXGCEK_Tz9Z5e7zXiIe"/>
<div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<div className="flex gap-3">
<div className="size-8 rounded-full theme-surface/20 theme-surface/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-[var(--primary)] transition-colors">
<span className="material-symbols-outlined text-sm">link</span>
</div>
</div>
</div>
</div>
<h4 className="font-bold text-lg">Marcus Thorne</h4>
<p className="theme-accent-text text-sm font-medium">Head of Product Design</p>
</div>
{/* <!-- Member 4 --> */}
<div className="group">
<div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
<img alt="Elena Rodriguez" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" data-alt="Professional portrait of a female VP of growth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf8s38FC-RtnNbjja0IkwBlmAx3125sF2usgaiNefwb9ZgI2HVY6pX8XaRyUc4Gfq9rE_uy6k7z_qjhIJVytgDpZ9EbWQUQRo6YKgqMkmWm1s76wnICgnnlgdb4qLUxlxSJOJJXpfs-DdBaWCgldgDcxjYIymRYzDD_qrmm13ndqKPZg7RICw-YPHPEpFiGWvpFhSGbGbdA5dNEBRAJr7iBDrZNYGKCIvbyfSAN6kSV_WfQbqsoLpOuD4G4ISxWzIArsv9HoUcWiBQ"/>
<div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<div className="flex gap-3">
<div className="size-8 rounded-full theme-surface/20 theme-surface/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-[var(--primary)] transition-colors">
<span className="material-symbols-outlined text-sm">link</span>
</div>
</div>
</div>
</div>
<h4 className="font-bold text-lg">Elena Rodriguez</h4>
<p className="theme-accent-text text-sm font-medium">VP of Growth</p>
</div>
</div>
</div>
</section>
{/* <!-- Join Us CTA --> */}
<section className="py-20 px-4">
<div className="max-w-5xl mx-auto relative rounded-[2.5rem] overflow-hidden bg-[var(--primary)] p-12 lg:p-20 text-center text-white">
<div className="absolute top-0 right-0 p-8 text-white/10 select-none pointer-events-none">
<span className="material-symbols-outlined text-[150px]">hub</span>
</div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-black mb-6">Ready to join the movement?</h2>
<p className="theme-accent-text-100 text-lg mb-10 max-w-xl mx-auto opacity-90">
                        Whether you're a creator looking to sell or a professional looking for a career change, we'd love to have you.
                    </p>
<div className="flex flex-wrap justify-center gap-4">
<button className="cursor-pointer theme-surface theme-surface text-black dark:theme-text px-10 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                            Apply to Join
                        </button>
<a href="/contactus">
                        <button className="cursor-pointer theme-accent/20 backdrop-blur-sm border border-white/30 border-theme-surface text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                            Contact Us
                        </button>
                        </a>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 text-white/10 select-none pointer-events-none">
<span className="material-symbols-outlined text-[100px]">auto_awesome</span>
</div>
</div>
</section>
</div>
  );
}
