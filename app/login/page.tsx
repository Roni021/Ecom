"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="theme-page min-h-screen flex items-center justify-center p-6 font-display">
<div className="w-full max-w-[480px] theme-surface theme-surface rounded-xl shadow-xl shadow-primary/5 p-8 md:p-10 border border-theme-surface dark:border-slate-800">
{/* <!-- Logo Section --> */}
<div className="flex flex-col items-center mb-8">
<Link href="/" className="size-12 theme-accent/10 rounded-lg flex items-center justify-center theme-accent-text mb-4">
<svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
</svg>
</Link>
<h1 className="theme-text dark:theme-text text-3xl font-black tracking-tight mb-2 text-center">Welcome Back</h1>
<p className="theme-text dark:theme-text text-center text-sm">Enter your details to manage your digital assets</p>
</div>

{/* Error Message */}
{error && (
  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
    {error}
  </div>
)}

{/* <!-- Form Section --> */}
<form onSubmit={handleSubmit} className="space-y-5">
{/* <!-- Email --> */}
<div className="space-y-2">
<label className="theme-text dark:theme-text text-sm font-semibold ml-1">Email Address</label>
<div className="relative">
<input 
  className="w-full h-14 bg-slate-50 theme-surface border-theme-surface border-theme-surface rounded-lg px-4 theme-text dark:theme-text placeholder:theme-text focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
  placeholder="name@example.com" 
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
</div>
</div>
{/* <!-- Password --> */}
<div className="space-y-2">
<div className="flex justify-between items-center px-1">
<label className="theme-text dark:theme-text text-sm font-semibold">Password</label>
</div>
<div className="relative flex items-center">
<input 
  className="w-full h-14 bg-slate-50 theme-surface border-theme-surface border-theme-surface rounded-lg px-4 theme-text dark:theme-text placeholder:theme-text focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
  placeholder="••••••••" 
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
<button className="absolute right-4 theme-text hover:theme-text dark:hover:theme-text" type="button">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
{/* <!-- Remember & Forgot --> */}
<div className="flex items-center justify-between py-1">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="rounded border-slate-300 border-theme-surface theme-accent-text focus:ring-primary focus:ring-offset-0 bg-transparent" type="checkbox"/>
<span className="text-sm theme-text dark:theme-text group-hover:theme-text dark:group-hover:theme-text transition-colors">Remember me</span>
</label>
<a className="text-sm font-semibold theme-accent-text hover:theme-accent-text/80 transition-colors" href="/login/reset_password">Forgot password?</a>
</div>
{/* <!-- Sign In CTA --> */}
<button 
  type="submit" 
  disabled={loading}
  className="w-full h-14 bg-gradient-primary text-white font-bold rounded-lg shadow-lg shadow-primary/25 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
>
  <span>{loading ? "Signing in..." : "Sign In"}</span>
  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</form>
{/* <!-- Divider --> */}
<div className="relative my-8">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-theme-surface dark:border-slate-800"></div>
</div>
<div className="relative flex justify-center text-xs uppercase">
<span className="theme-surface theme-surface px-4 theme-text dark:theme-text">Or continue with</span>
</div>
</div>
{/* <!-- Social Logins --> */}
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 h-12 border border-theme-surface dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors theme-text dark:theme-text font-medium text-sm">
<img alt="" className="size-5" data-alt="Google logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAey9Jb-sGn8RJ6Opb0q9VqBNv06BfK6GR4A2ZXQ4h9d7aL0u9x9MrWsXjDECw6QKezLwbKQ5-rLe3Rcnsr8t5efgkees14k0Jg1h_TlU3IJ1Hslmd--fJMVovGahQIKF1s2o0U2A2d-Ihly48xH5ynanfcKM8LT-B8JbncRRbQp3FcurfmiSFMyRvX3olPAit0jxhG-4brQ4MthNwW_oLKoQ01a5JtVoZpkd8I3pvlffUZrbXPTHA9SZBL84_4w2S7CrFAefekSUsq"/>
<span>Google</span>
</button>
<button className="flex items-center justify-center gap-2 h-12 border border-theme-surface dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors theme-text dark:theme-text font-medium text-sm">
<span className="material-symbols-outlined text-[20px]">ios</span>
<span>Apple</span>
</button>
</div>
{/* <!-- Sign Up Link --> */}
<p className="mt-10 text-center text-sm theme-text dark:theme-text">
  Don't have an account?
  <Link
    href="/signup"
    className="font-bold theme-accent-text hover:underline underline-offset-4 ml-1"
  >
    Sign Up
  </Link>
</p>

{/* <!-- Decorative background elements --> */}
<div className="fixed top-0 left-0 -z-10 w-full h-full overflow-hidden opacity-30 dark:opacity-10 pointer-events-none">
<div className="absolute -top-24 -left-24 size-[500px] theme-accent/20 blur-[100px] rounded-full"></div>
<div className="absolute -bottom-24 -right-24 size-[500px] bg-purple-500/20 blur-[100px] rounded-full"></div>
</div>
</div>
</div> 
);
}
