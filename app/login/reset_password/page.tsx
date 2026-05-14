"use client";
import Link from "next/link";
export default function about() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-40 py-4 bg-white dark:bg-slate-900">
<div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined text-xl">rocket_launch</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-tight">Digital Marketplace</h2>
</div>
<div className="flex items-center gap-4">
<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</div>
</header>
<main className="flex flex-1 items-center justify-center p-6">
<div className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-primary/5 p-8 border border-slate-100 dark:border-slate-800">
<div className="mb-8 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
<span className="material-symbols-outlined text-3xl">lock_reset</span>
</div>
<h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Reset Password</h1>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
</div>
<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
<div className="flex flex-col gap-2">
<label
  htmlFor="email"
  className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1"
>
  Email address
</label>

{/* <input
  id="email"
  type="email"
  className="w-full rounded-lg border p-3"
/> */}
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
<input className="w-full pl-12 pr-4 h-14 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder:text-slate-400" id="email" name="email" placeholder="name@example.com" required type="email"/>
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
  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
>
  <span className="material-symbols-outlined text-lg">arrow_back</span>
  Back to Login
</Link>
</div>
</div>
</main>
<footer className="py-8 px-6 text-center">
<p className="text-slate-400 dark:text-slate-600 text-xs">
                    © 2024 Digital Marketplace Inc. All rights reserved.
                </p>
</footer>
</div>
</div>
<div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
<div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
</div>
</div>
  );
}