"use client";

export default function categoris() {
  return (
<div className="theme-page theme-text dark:theme-text font-display">
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* <!-- Navigation --> */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-theme-surface dark:border-slate-800 theme-surface theme-surface px-10 py-3">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 theme-text dark:theme-text">
<div className="size-6 theme-accent-text">
<span className="material-symbols-outlined text-3xl">diamond</span>
</div>
<h2 className="theme-text dark:theme-text text-lg font-bold leading-tight tracking-[-0.015em]">LuxeLife</h2>
</div>
<div className="flex items-center gap-9">
<a className="theme-text dark:theme-text hover:theme-accent-text transition-colors text-sm font-medium leading-normal" href="#">Templates</a>
<a className="theme-text dark:theme-text hover:theme-accent-text transition-colors text-sm font-medium leading-normal" href="#">Lifestyle</a>
<a className="theme-text dark:theme-text hover:theme-accent-text transition-colors text-sm font-medium leading-normal" href="#">Digital Assets</a>
<a className="theme-text dark:theme-text hover:theme-accent-text transition-colors text-sm font-medium leading-normal" href="#">Support</a>
</div>
</div>
<div className="flex flex-1 justify-end gap-6 items-center">
<label className="flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="theme-text dark:theme-text flex border-none theme-surface theme-surface items-center justify-center pl-4 rounded-l-lg">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none theme-surface theme-surface theme-text dark:theme-text focus:ring-0 h-full placeholder:theme-text px-4 rounded-r-lg text-sm" placeholder="Search curated assets..." value=""/>
</div>
</label>
<div
  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-theme-accent/20"
  style={{
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFNHrbVOPxX2l6c6oWlyeWDvCPeAMdw2DlO-cwczr-wfcBAdvJneN0g2fQm5dW7zkwhgxyy4gBd4T8dts1Hgb3nP0OLZDBumtmJDCi77z2EQCcgTkk0tfZ2riqOHOsDLrfFhQIZ-Kc60ct2IclHIVZpzp4OWrohsDToic67vZAm_bnmZLWzVet0Fb-RwtqT_HM-XMOUSQfH9vZmTSDjjwdNviNSgxq5zpIWVb_9R4z7cjjErU_noHOHhlEGAqSd8ENucNL-qByfy8r")',
  }}
></div>
</div>
</header>
<main className="flex-1 px-4 md:px-20 lg:px-40 py-12 flex flex-col items-center">
{/* <!-- Success Header Section --> */}
<div className="max-w-[800px] w-full text-center mb-12">
<div className="mb-6 flex justify-center">
<div className="rounded-full theme-accent/10 p-6 inline-flex items-center justify-center">
<span className="material-symbols-outlined theme-accent-text text-6xl font-bold">check_circle</span>
</div>
</div>
<h1 className="theme-text dark:theme-text tracking-tight text-4xl font-bold leading-tight mb-2">Thank You for Your Order!</h1>
<p className="theme-accent-text font-bold text-lg mb-4 tracking-wide">Order Number: #LX-12345</p>
<p className="theme-text dark:theme-text text-lg max-w-xl mx-auto">
                        A confirmation email with your receipt and access details has been sent to your inbox. Your premium assets are ready for download.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-[1100px]">
{/* <!-- Order Summary Column --> */}
<div className="lg:col-span-2 space-y-6">
<div className="theme-surface theme-surface rounded-xl p-8 border border-theme-surface dark:border-slate-800 shadow-sm">
<h2 className="theme-text dark:theme-text text-xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined">receipt_long</span> Order Summary
                            </h2>
<div className="space-y-6">
{/* <!-- Item 1 --> */}
<div className="flex gap-4 items-center pb-6 border-b border-slate-100 dark:border-slate-800">
<div className="size-20 theme-surface theme-surface rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="LuxeLife Premium Quarterly Box packaging" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJjyVOCAyfGe6_ldU7wROM84W7CPm3E0AfllN0_IynHlQXWIgPILamiCEQzeCrowXpKpGS6gdK6EeGVsMoKlOTeEs0fyAYRV9wcNKJmpNbqLKFPxMoSCRUT9M2ZpyJosyV3PULZ3i-_C5xmdLtsNWefI51IjVR40x_TimL07dTf0Mvvr7DArW45fFUGv9SqKBIUPQ92QJxS-iFIvsWH9P4gN4cXOjEiOfqE2QYH7Rqsx6rmEwnHSPxhZlEhjjsMgEfh6uBmidlZ4yZ"/>
</div>
<div className="flex-1">
<h3 className="font-bold theme-text dark:theme-text">LuxeLife Premium Quarterly Box</h3>
<p className="text-sm theme-text dark:theme-text">Limited Edition Lifestyle Curated Box</p>
</div>
<div className="text-right">
<p className="font-bold theme-text dark:theme-text">$189.00</p>
<p className="text-xs theme-text">Qty: 1</p>
</div>
</div>
{/* <!-- Item 2 --> */}
<div className="flex gap-4 items-center pb-6 border-b border-slate-100 dark:border-slate-800">
<div className="size-20 theme-surface theme-surface rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Digital marketing strategy template screens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ZCpEiDR8ztW-LvyKCORhJIrUSvc_VzExrbuTt-yximDucWk1XqU_38B3fwbgQwwkOKosl6N5Hm1TwP07bx-KZP4F7x627ffARdXfHzrJjNk2V6IjGsNlrRP1I7Q0N5aVnpAA7ooNhWzBahvz58ep8Im3k3w9CR2G1ezHTy5XBmaFNaU9JMNvpn4AD_9pqJsnQJ6_zHpDKMjP1NSnvK8qUhPKvsddKf7tfb0ELins6IGM8AhxivxfBYi8t591AbRDMWfUk01tXltq"/>
</div>
<div className="flex-1">
<h3 className="font-bold theme-text dark:theme-text">Executive Dashboard Template</h3>
<p className="text-sm theme-text dark:theme-text">Digital Asset • Commercial License</p>
</div>
<div className="text-right">
<p className="font-bold theme-text dark:theme-text">$49.00</p>
<p className="text-xs theme-text">Qty: 1</p>
</div>
</div>
</div>
{/* <!-- Totals --> */}
<div className="mt-8 space-y-2 max-w-xs ml-auto">
<div className="flex justify-between theme-text dark:theme-text">
<span>Subtotal</span>
<span>$238.00</span>
</div>
<div className="flex justify-between theme-text dark:theme-text">
<span>Shipping</span>
<span>Free</span>
</div>
<div className="flex justify-between theme-text dark:theme-text font-bold text-lg pt-2 border-t border-slate-100 dark:border-slate-800">
<span>Total</span>
<span className="theme-accent-text">$238.00</span>
</div>
</div>
</div>
</div>
{/* <!-- Sidebar / Quick Links --> */}
<div className="space-y-6">
<div className="theme-surface theme-surface rounded-xl p-8 border border-theme-surface dark:border-slate-800 shadow-sm">
<h3 className="theme-text dark:theme-text font-bold mb-6">Next Steps</h3>
<div className="space-y-3">
<a className="flex items-center gap-3 w-full theme-accent text-white font-semibold py-3 px-4 rounded-lg hover:theme-accent/90 transition-all justify-center" href="#">
<span className="material-symbols-outlined text-xl">download</span>
                                    Download Assets
                                </a>
<a className="flex items-center gap-3 w-full theme-surface theme-surface theme-text dark:theme-text font-semibold py-3 px-4 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all justify-center" href="#">
<span className="material-symbols-outlined text-xl">dashboard</span>
                                    View My Dashboard
                                </a>
<a className="flex items-center gap-3 w-full border border-theme-surface border-theme-surface theme-text dark:theme-text font-medium py-3 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all justify-center" href="#">
<span className="material-symbols-outlined text-xl">shopping_bag</span>
                                    Continue Shopping
                                </a>
</div>
</div>
<div className="theme-accent/5 dark:theme-accent/10 rounded-xl p-6 border border-theme-accent/10">
<h4 className="font-bold theme-accent-text mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-xl">help_outline</span>
                                Need help?
                            </h4>
<p className="text-sm theme-text dark:theme-text leading-relaxed">
                                Our support team is available 24/7. Reach out at <span className="theme-accent-text font-medium">support@luxelife.com</span> for any questions about your delivery or assets.
                            </p>
</div>
</div>
</div>
{/* <!-- Shipping Address Hint (Desktop Footer) --> */}
<div className="mt-12 text-center theme-text dark:theme-text text-sm">
<p>Shipping to: <span className="theme-text dark:theme-text">123 Luxury Ave, Suite 500, Beverly Hills, CA 90210</span></p>
<p className="mt-1">Expected delivery for physical items: <span className="theme-text dark:theme-text">October 14th - October 16th</span></p>
</div>
</main>
{/* <!-- Footer --> */}
<footer className="mt-auto py-10 px-10 border-t border-theme-surface dark:border-slate-800 flex justify-between items-center theme-text dark:theme-text text-xs">
<div className="flex items-center gap-4">
<p>© 2024 LuxeLife Marketplace. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="hover:theme-accent-text transition-colors" href="#">Privacy Policy</a>
<a className="hover:theme-accent-text transition-colors" href="#">Terms of Service</a>
<a className="hover:theme-accent-text transition-colors" href="#">Cookie Policy</a>
</div>
</footer>
</div>
</div>
</div>
);
}