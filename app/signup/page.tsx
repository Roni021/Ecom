"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    setLoading(true);

    try {
      await signup(name, email, password);
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="theme-page min-h-screen flex flex-col">
{/* <!-- Subtle Background Gradient Decor --> */}
<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full theme-accent/5 blur-[120px]"></div>
<div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full theme-accent/10 blur-[100px]"></div>
</div>

<main className="flex-1 flex items-center justify-center p-6">
{/* <!-- Main Sign Up Card --> */}
<div className="w-full max-w-120 theme-surface theme-surface rounded-xl shadow-2xl shadow-primary/5 p-8 lg:p-10 border border-theme-surface/50 dark:border-slate-800">
{/* <!-- Headline Section --> */}
<div className="text-center mb-8">
<h1 className="text-3xl heading-font font-extrabold theme-text dark:theme-text mb-2">Create your account</h1>
<p className="theme-text dark:theme-text text-sm">Join the leading community of digital creators.</p>
</div>

{/* Error Message */}
{error && (
  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
    {error}
  </div>
)}

{/* <!-- Social Sign-up --> */}
<div className="grid grid-cols-2 gap-4 mb-8">
<button className="flex items-center justify-center gap-2 py-3 px-4 border border-theme-surface border-theme-surface rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
<img alt="Google Logo" className="w-5 h-5" data-alt="Google colorful search logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBp8s3pFk5dU31yW4gQNm0SU19j9UcyUM9lr07pC76Ehcq5KXr8yfpl22C0swk83-mkM025mh6qr0wKQY6583Yf-Yp-9P0EkRBSWAD0rUYCxzVcrGL7j6AWCpEMAlLwwtCqDVzXNZbGdcxxqCi0RO_WmsbG0Oe0sX9-vF7lTyOZHMKRgmM0ywOEGekUhroThEJNSbkgZQxctAqgebZzsw2Zp4CJ66EaqKDrc4iXDoVBabwqH-ED8sKU_EXIMtoObW6qQdH_7cE7Rdm"/>
<span className="text-sm font-semibold theme-text dark:theme-text">Google</span>
</button>
<button className="flex items-center justify-center gap-2 py-3 px-4 border border-theme-surface border-theme-surface rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
<span className="material-symbols-outlined theme-text dark:theme-text">ios</span>
<span className="text-sm font-semibold theme-text dark:theme-text">Apple</span>
</button>
</div>
{/* <!-- Divider --> */}
<div className="relative flex items-center mb-8">
<div className="grow border-t border-theme-surface dark:border-slate-800"></div>
<span className="shrink mx-4 text-xs font-medium theme-text uppercase tracking-widest">Or with email</span>
<div className="grow border-t border-theme-surface dark:border-slate-800"></div>
</div>
{/* <!-- Form --> */}
<form onSubmit={handleSubmit} className="space-y-5">
<div>
<label className="block text-sm font-semibold theme-text dark:theme-text mb-2">Full Name</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 theme-text text-xl">person</span>
<input 
  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 theme-surface/50 border border-theme-surface border-theme-surface rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-theme-accent outline-none transition-all theme-text dark:theme-text" 
  placeholder="John Doe" 
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
/>
</div>
</div>
<div>
<label className="block text-sm font-semibold theme-text dark:theme-text mb-2">Email Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 theme-text text-xl">mail</span>
<input 
  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 theme-surface/50 border border-theme-surface border-theme-surface rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-theme-accent outline-none transition-all theme-text dark:theme-text" 
  placeholder="john@example.com" 
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
</div>
</div>
<div>
<label className="block text-sm font-semibold theme-text dark:theme-text mb-2">Password</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 theme-text text-xl">lock</span>
<input 
  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 theme-surface/50 border border-theme-surface border-theme-surface rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-theme-accent outline-none transition-all theme-text dark:theme-text" 
  placeholder="••••••••" 
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 theme-text hover:theme-text dark:hover:theme-text" type="button">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</div>
<p className="mt-2 text-xs theme-text">Must be at least 6 characters long.</p>
</div>
<div className="flex items-start gap-3 py-2">
<input className="mt-1 rounded border-slate-300 theme-accent-text focus:ring-primary" id="terms" type="checkbox" required/>
<label className="text-xs theme-text dark:theme-text leading-relaxed" htmlFor="terms">
                        By creating an account, I agree to the <Link className="theme-accent-text hover:underline" href="/support/termsofservices">Terms of Service</Link> and <Link className="theme-accent-text hover:underline" href="/support/privacy">Privacy Policy</Link>.
                    </label>
</div>
<button 
  type="submit" 
  disabled={loading}
  className="w-full py-4 bg-linear-to-r from-primary to-indigo-600 hover:to-primary text-white rounded-lg font-bold text-base shadow-lg shadow-primary/25 transform active:scale-[0.98] transition-all disabled:opacity-50"
>
  {loading ? "Creating Account..." : "Create Account"}
</button>
</form>
<div className="mt-8 text-center">
<p className="text-sm theme-text dark:theme-text">
  Already have an account?
  <Link
    href="/login"
    className="font-bold theme-accent-text hover:text-indigo-600 transition-colors ml-1"
  >
    Sign In
  </Link>
</p>
</div>
</div>
</main>
<footer className="w-full py-8 px-6 text-center">
<p className="text-xs theme-text dark:theme-text">
            © 2026 MarketHub Digital Inc. All rights reserved.
        </p>
</footer>
</div>
);
}

