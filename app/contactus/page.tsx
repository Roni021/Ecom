"use client";

export default function about() {
  return (
<div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
<main>
{/* <!-- Hero Section --> */}
<section className="py-16 md:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Get in Touch</h1>
<p className="text-lg text-slate-600 dark:text-slate-400">Have questions about our marketplace or need technical support? Our team is ready to help you scale your digital business.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
{/* <!-- Contact Form Card --> */}
<div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<form action="#" className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold">First Name</label>
<input className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold">Subject</label>
<select className="form-select w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
<option>General Inquiry</option>
<option>Technical Support</option>
<option>Billing &amp; Payments</option>
<option>Partnership Opportunities</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us how we can help..." rows={5}></textarea>
</div>
<button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group" type="submit">
                                Send Message
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">send</span>
</button>
</form>
</div>
{/* <!-- Sidebar Info --> */}
<div className="space-y-12">
{/* <!-- Contact Info --> */}
<div className="space-y-8">
<h3 className="text-2xl font-bold">Contact Information</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined">mail</span>
</div>
<div>
<h4 className="font-bold">Email Us</h4>
<p className="text-slate-600 dark:text-slate-400">Our support team is online 24/7.</p>
<a className="text-primary font-medium hover:underline" href="mailto:support@shopdynamics.com">support@shopdynamics.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined">call</span>
</div>
<div>
<h4 className="font-bold">Call Us</h4>
<p className="text-slate-600 dark:text-slate-400">Mon-Fri from 8am to 5pm PST.</p>
<a className="text-primary font-medium hover:underline" href="tel:+15550000000">+1 (555) 000-0000</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined">location_on</span>
</div>
<div>
<h4 className="font-bold">Visit Our Office</h4>
<p className="text-slate-600 dark:text-slate-400">Drop by for a cup of coffee.</p>
<address className="not-italic font-medium">100 Innovation Way, Suite 400<br/>San Francisco, CA 94105</address>
</div>
</div>
</div>
</div>
{/* <!-- FAQ Teaser --> */}
<div className="bg-primary p-8 rounded-xl text-white relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-xl font-bold mb-2">Looking for quick answers?</h3>
<p className="text-white/80 mb-6 text-sm">Browse our comprehensive documentation and help center articles to find what you need instantly.</p>
<a className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-100 transition-colors" href="#">
                                    Visit Help Center
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-9xl">help_center</span>
</div>
</div>
{/* <!-- Socials --> */}
<div>
<h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Follow Us</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
</a>
<a className="w-10 h-10 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
<a className="w-10 h-10 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.617-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* <!-- Map Section / Locations --> */}
<section className="py-16 bg-slate-100 dark:bg-slate-900/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl overflow-hidden h-[400px] shadow-lg relative bg-slate-300">
<img alt="World map showing office locations" className="w-full h-full object-cover grayscale opacity-50 contrast-125" data-alt="Map showing office location in San Francisco" data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_SYZD8Urqihl0uqO9Z0TLuB9GwiMdZ5WWEDNjBKb9Bpu6BNA45FU--K6Mn0FkcAhmgnkIwwR1aJqOTwdDOukcj8k-zKfMtiYX3tgVKqluJe3yPhIEZxk2ujy8QnHAGU_mCmGSiYWdzZ3AsZJro2k4iTajbiA57MI98RPXDofFuiAWgDvTLWNtTFqznnsSW6_Md_e06E9eHjRiXb5jOEMuLjSKo8GViFK0KoC_Kx_6vjI22o_sVUQXiSzn8iiQG5AkeypjhiV5j2nS"/>
<div className="absolute inset-0 bg-primary/10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="absolute -inset-4 bg-primary rounded-full animate-ping opacity-25"></div>
<div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-xl relative z-10"></div>
</div>
</div>
</div>
</div>
</section>
</main>
{/* <!-- Footer --> */}
<footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white">
<span className="material-symbols-outlined text-sm">dynamic_form</span>
</div>
<span className="text-lg font-bold tracking-tight">ShopDynamics</span>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Cookies</a>
<a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Security</a>
</div>
<p className="text-sm text-slate-400">© 2024 ShopDynamics Inc. All rights reserved.</p>
</div>
</div>
</footer>
</div>
);
}