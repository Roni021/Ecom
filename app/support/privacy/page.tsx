"use client";
import Link from "next/link";
export default function about() {
  return (
    <div className="theme-page theme-text dark:theme-text font-display">
<div className="relative flex min-h-screen flex-col">
{/* <!-- Top Navigation --> */}
{/* <header className="sticky top-0 z-50 w-full border-b border-theme-surface dark:border-slate-800 theme-surface/80 dark:bg-background-dark/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 theme-accent-text">
<div className="size-8 rounded-lg theme-accent flex items-center justify-center text-white">
<span className="material-symbols-outlined text-xl">deployed_code</span>
</div>
<h2 className="theme-text dark:text-white text-xl font-bold tracking-tight">ShopDynamics</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="theme-text dark:theme-text text-sm font-medium hover:theme-accent-text transition-colors" href="#">Templates</a>
<a className="theme-text dark:theme-text text-sm font-medium hover:theme-accent-text transition-colors" href="#">Pricing</a>
<a className="theme-text dark:theme-text text-sm font-medium hover:theme-accent-text transition-colors" href="#">Support</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 theme-text text-xl">search</span>
<input className="h-10 w-64 rounded-xl border-none theme-surface theme-surface pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20" placeholder="Search policy..." type="text"/>
</div>
<div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-theme-surface dark:border-slate-800">
<img className="h-full w-full object-cover" data-alt="User profile avatar placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV6LWFDMs-5IH-O3W8mapjpC70Kdh_870Izozys8YXtCpxi7FZc7-SjBOca77-dMttEq0VVbbx2xbsZuK71sn6PPwY5-ZmUvIWNBmhAC8ORxWzlsuEDe3-xD2nju-GzmYQ_gZvyxageSkAnSbtXepEKvBeHYz_19GkC0cMcwqQ8pLdPOfa9vV_XS4IamGqcYldm-GbFznOPKpcUVyLkQzQHUXNsnI08eu1sSAHhlM0za72M3kUhfPFmNZ79y5aNzsCqi67nPmlaCAh"/>
</div>
</div>
</div>
</header> */}
{/* <!-- Main Content Area --> */}
<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col lg:flex-row gap-8 px-6 py-12">
{/* <!-- Sidebar Navigation --> */}
<aside className="w-full lg:w-72 shrink-0">
<div className="sticky top-28 space-y-6">
<div>
<h3 className="text-xs font-bold uppercase tracking-wider theme-text dark:theme-text mb-4">Table of Contents</h3>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl theme-accent/10 theme-accent-text font-semibold" href="#introduction">
<span className="material-symbols-outlined text-xl">info</span>
<span className="text-sm">Introduction</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 transition-colors" href="#data-collection">
<span className="material-symbols-outlined text-xl">database</span>
<span className="text-sm">Information We Collect</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 transition-colors" href="#data-usage">
<span className="material-symbols-outlined text-xl">settings</span>
<span className="text-sm">How We Use Your Data</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 transition-colors" href="#data-security">
<span className="material-symbols-outlined text-xl">shield_lock</span>
<span className="text-sm">Data Security</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 transition-colors" href="#user-rights">
<span className="material-symbols-outlined text-xl">verified_user</span>
<span className="text-sm">Your Rights</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 transition-colors" href="#cookies">
<span className="material-symbols-outlined text-xl">cookie</span>
<span className="text-sm">Cookies &amp; Tracking</span>
</a>
</nav>
</div>
<div className="p-6 rounded-2xl theme-accent/5 border border-theme-accent/10">
<h4 className="text-sm font-bold theme-text dark:text-white mb-2">Need help?</h4>
<p className="text-xs theme-text dark:theme-text mb-4">If you have questions about our privacy policy, please contact our support team.</p>
<a className="text-sm font-semibold theme-accent-text hover:underline" href="mailto:privacy@shopdynamics.com">privacy@shopdynamics.com</a>
</div>
</div>
</aside>
{/* <!-- Long-form Text Content --> */}
<article className="flex-1 max-w-3xl">
<div className="mb-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-surface theme-surface theme-text dark:theme-text text-xs font-medium mb-4">
<span className="material-symbols-outlined text-sm">calendar_today</span>
                        Last Updated: October 24, 2025
                    </div>
<h1 className="text-4xl md:text-5xl font-black theme-text dark:text-white tracking-tight mb-4">Privacy Policy</h1>
<p className="text-xl theme-text dark:theme-text leading-relaxed">
                        At ShopDynamics, we are committed to protecting your privacy and ensuring you have a positive experience on our marketplace.
                    </p>
</div>
<div className="prose prose-slate dark:prose-invert max-w-none">
<section id="introduction">
<h2 className="text-2xl font-bold flex items-center gap-2">
<span className="theme-accent-text">1.</span> Introduction
                        </h2>
<p>
                            Welcome to ShopDynamics. This Privacy Policy describes how ShopDynamics ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website, use our digital template marketplace, or interact with us in other ways.
                        </p>
<p>
                            By accessing or using our services, you agree to the terms of this Privacy Policy. We may update this policy from time to time, and we will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                        </p>
</section>
<section id="data-collection">
<h2 className="text-2xl font-bold flex items-center gap-2">
<span className="theme-accent-text">2.</span> Information We Collect
                        </h2>
<p>
                            We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third parties.
                        </p>
<ul className="list-disc pl-6 space-y-2">
<li><strong>Account Information:</strong> Name, email address, password, and profile preferences.</li>
<li><strong>Payment Information:</strong> We use third-party payment processors to collect payment details. We do not store full credit card numbers on our servers.</li>
<li><strong>Transaction Data:</strong> Details about the templates you purchase, download, or sell on our platform.</li>
<li><strong>Usage Data:</strong> Information about how you navigate our site, including IP address, browser type, and device information.</li>
</ul>
</section>
<section id="data-usage">
<h2 className="text-2xl font-bold flex items-center gap-2">
<span className="theme-accent-text">3.</span> How We Use Your Data
                        </h2>
<p>
                            We use the collected information for various purposes aimed at providing and improving our services:
                        </p>
<ul className="list-disc pl-6 space-y-2">
<li>To facilitate transactions and manage your account.</li>
<li>To provide customer support and respond to your inquiries.</li>
<li>To personalize your experience and show you relevant templates.</li>
<li>To send you administrative messages and marketing communications (you can opt out at any time).</li>
<li>To detect, prevent, and address technical issues or fraudulent activities.</li>
</ul>
</section>
<section id="data-security">
<h2 className="text-2xl font-bold flex items-center gap-2">
<span className="theme-accent-text">4.</span> Data Security
                        </h2>
<p>
                            The security of your data is important to us. We implement industry-standard security measures, including SSL encryption and secure server environments, to protect your personal information from unauthorized access, alteration, or disclosure.
                        </p>
<div className="theme-accent/5 p-6 rounded-xl border-l-4 border-theme-accent my-6">
<p className="text-sm font-medium theme-text dark:theme-text m-0 italic">
                                "While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure."
                            </p>
</div>
</section>
<section id="user-rights">
<h2 className="text-2xl font-bold flex items-center gap-2">
<span className="theme-accent-text">5.</span> Your Rights
                        </h2>
<p>
                            Depending on your location, you may have certain rights regarding your personal information, including:
                        </p>
<ul className="list-disc pl-6 space-y-2">
<li>The right to access the personal data we hold about you.</li>
<li>The right to request the correction of inaccurate data.</li>
<li>The right to request the deletion of your personal data.</li>
<li>The right to object to or restrict certain processing activities.</li>
<li>The right to data portability.</li>
</ul>
</section>
<section id="cookies">
<h2 className="text-2xl font-bold flex items-center gap-2">
<span className="theme-accent-text">6.</span> Cookies &amp; Tracking
                        </h2>
<p>
                            We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                        </p>
<p>
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                        </p>
</section>
</div>
<div className="mt-16 pt-8 border-t border-theme-surface dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
<div className="text-sm theme-text">
                        © 2026 ShopDynamics Inc. All rights reserved.
                    </div>
<div className="flex gap-6">
<a className="text-sm font-medium theme-text dark:theme-text hover:theme-accent-text" href="#">Terms of Service</a>
<a className="text-sm font-medium theme-text dark:theme-text hover:theme-accent-text" href="#">Cookie Policy</a>
<a className="text-sm font-medium theme-text dark:theme-text hover:theme-accent-text" href="#">Contact Us</a>
</div>
</div>
</article>
</main>
{/* <!-- Bottom Banner --> */}
{/* <footer className="bg-slate-900 dark:bg-black text-white py-12 px-6">
<div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col gap-4 max-w-md text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 text-white">
<div className="size-6 rounded-md theme-accent flex items-center justify-center">
<span className="material-symbols-outlined text-sm">deployed_code</span>
</div>
<span className="font-bold tracking-tight">ShopDynamics</span>
</div>
<p className="theme-text text-sm">Empowering creators with the world's finest digital templates. Secure, fast, and professional.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<div className="flex flex-col gap-3">
<span className="text-xs font-bold uppercase theme-text">Marketplace</span>
<a className="text-sm theme-text hover:text-white" href="#">Web Templates</a>
<a className="text-sm theme-text hover:text-white" href="#">UI Kits</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-bold uppercase theme-text">Company</span>
<a className="text-sm theme-text hover:text-white" href="#">About Us</a>
<a className="text-sm theme-text hover:text-white" href="#">Careers</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-bold uppercase theme-text">Legal</span>
<a className="text-sm theme-text hover:text-white" href="#">Privacy</a>
<a className="text-sm theme-text hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer> */}
</div>
</div>
  );
}