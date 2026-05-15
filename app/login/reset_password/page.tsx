"use client";
import Link from "next/link";
export default function about() {
  return (
    <div className="theme-page theme-text dark:theme-text min-h-screen flex flex-col font-display">
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-theme-surface dark:border-slate-800 px-6 lg:px-40 py-4 theme-surface theme-surface">
<div className="flex items-center gap-3 theme-text dark:theme-text">
<div className="w-8 h-8 theme-accent rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined text-xl">rocket_launch</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-tight">Digital Marketplace</h2>
</div>
<div className="flex items-center gap-4">
<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full theme-surface theme-surface theme-text dark:theme-text transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</div>
</header>
<main className="flex flex-1 items-center justify-center p-6">
<div className="w-full max-w-[480px] theme-surface theme-surface rounded-xl shadow-xl shadow-primary/5 p-8 border border-slate-100 dark:border-slate-800">
<div className="mb-8 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full theme-accent/10 theme-accent-text mb-4">
<span className="material-symbols-outlined text-3xl">lock_reset</span>
</div>
<h1 className="text-2xl font-bold theme-text dark:text-white mb-2">Reset Password</h1>
<p className="theme-text dark:theme-text text-sm leading-relaxed">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
</div>
<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
<div className="flex flex-col gap-2">
<label
  htmlFor="email"
  className="text-sm font-semibold theme-text dark:theme-text ml-1"
>
  Email address
</label>

{/* <input
  id="email"
  type="email"
  className="w-full rounded-lg border p-3"
/> */}
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 theme-text text-xl">mail</span>
<input className="w-full pl-12 pr-4 h-14 rounded-xl border border-theme-surface border-theme-surface theme-surface theme-surface theme-text dark:text-white focus:border-theme-accent focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder:theme-text" id="email" name="email" placeholder="name@example.com" required type="email"/>
</div>
</div>
<button
  className="w-full h-14 bg-[var(--primary)] hover:scale-[1.02] text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group cursor-pointer"
  type="submit"
>
  <span>Send Reset Link</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</form>
<div className="mt-8 text-center">
<Link
  href="/login"
  className="inline-flex items-center gap-2 text-sm font-semibold theme-accent-text hover:theme-accent-text/80 transition-colors"
>
  <span className="material-symbols-outlined text-lg">arrow_back</span>
  Back to Login
</Link>
</div>
</div>
</main>
<footer className="py-8 px-6 text-center">
<p className="theme-text dark:theme-text text-xs">
                    © 2024 Digital Marketplace Inc. All rights reserved.
                </p>
</footer>
</div>
</div>
<div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] theme-accent/5 rounded-full blur-3xl"></div>
<div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] theme-accent/5 rounded-full blur-3xl"></div>
</div>
</div>
  );
}