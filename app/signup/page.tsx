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
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
{/* <!-- Subtle Background Gradient Decor --> */}
<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
<div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[100px]"></div>
</div>
{/* <!-- Top Navigation --> */}
<header className="w-full px-6 lg:px-10 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<Link href="/" className="bg-primary p-2 rounded-lg text-white">
<span className="material-symbols-outlined block">rocket_launch</span>
</Link>
<h2 className="text-slate-900 dark:text-slate-100 text-xl heading-font font-extrabold tracking-tight">Market<span className="text-primary">Hub</span></h2>
</div>
<Link className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="/support/help_center">Help Center</Link>
</header>
<main className="flex-1 flex items-center justify-center p-6">
{/* <!-- Main Sign Up Card --> */}
<div className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl shadow-primary/5 p-8 lg:p-10 border border-slate-200/50 dark:border-slate-800">
{/* <!-- Headline Section --> */}
<div className="text-center mb-8">
<h1 className="text-3xl heading-font font-extrabold text-slate-900 dark:text-slate-100 mb-2">Create your account</h1>
<p className="text-slate-500 dark:text-slate-400 text-sm">Join the leading community of digital creators.</p>
</div>

{/* Error Message */}
{error && (
  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
    {error}
  </div>
)}

{/* <!-- Social Sign-up --> */}
<div className="grid grid-cols-2 gap-4 mb-8">
<button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
<img alt="Google Logo" className="w-5 h-5" data-alt="Google colorful search logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBp8s3pFk5dU31yW4gQNm0SU19j9UcyUM9lr07pC76Ehcq5KXr8yfpl22C0swk83-mkM025mh6qr0wKQY6583Yf-Yp-9P0EkRBSWAD0rUYCxzVcrGL7j6AWCpEMAlLwwtCqDVzXNZbGdcxxqCi0RO_WmsbG0Oe0sX9-vF7lTyOZHMKRgmM0ywOEGekUhroThEJNSbkgZQxctAqgebZzsw2Zp4CJ66EaqKDrc4iXDoVBabwqH-ED8sKU_EXIMtoObW6qQdH_7cE7Rdm"/>
<span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Google</span>
</button>
<button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
<span className="material-symbols-outlined text-slate-900 dark:text-slate-100">ios</span>
<span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Apple</span>
</button>
</div>
{/* <!-- Divider --> */}
<div className="relative flex items-center mb-8">
<div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
<span className="flex-shrink mx-4 text-xs font-medium text-slate-400 uppercase tracking-widest">Or with email</span>
<div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
</div>
{/* <!-- Form --> */}
<form onSubmit={handleSubmit} className="space-y-5">
<div>
<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
<input 
  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-slate-100" 
  placeholder="John Doe" 
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
<input 
  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-slate-100" 
  placeholder="john@example.com" 
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Password</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
<input 
  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-slate-100" 
  placeholder="••••••••" 
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</div>
<p className="mt-2 text-xs text-slate-500">Must be at least 6 characters long.</p>
</div>
<div className="flex items-start gap-3 py-2">
<input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary" id="terms" type="checkbox" required/>
<label className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed" htmlFor="terms">
                        By creating an account, I agree to the <Link className="text-primary hover:underline" href="/support/termsofservices">Terms of Service</Link> and <Link className="text-primary hover:underline" href="/support/privacy">Privacy Policy</Link>.
                    </label>
</div>
<button 
  type="submit" 
  disabled={loading}
  className="w-full py-4 bg-gradient-to-r from-primary to-indigo-600 hover:to-primary text-white rounded-lg font-bold text-base shadow-lg shadow-primary/25 transform active:scale-[0.98] transition-all disabled:opacity-50"
>
  {loading ? "Creating Account..." : "Create Account"}
</button>
</form>
<div className="mt-8 text-center">
<p className="text-sm text-slate-600 dark:text-slate-400">
  Already have an account?
  <Link
    href="/login"
    className="font-bold text-primary hover:text-indigo-600 transition-colors ml-1"
  >
    Sign In
  </Link>
</p>
</div>
</div>
</main>
<footer className="w-full py-8 px-6 text-center">
<p className="text-xs text-slate-400 dark:text-slate-500">
            © 2026 MarketHub Digital Inc. All rights reserved.
        </p>
</footer>
</div>
);
}

