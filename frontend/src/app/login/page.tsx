"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function CloudLightningBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Video background same as hero */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full opacity-50 scale-105"
        poster="https://cdn.prod.website-files.com/692877de6096025570de1dac/69581d86ecfebab70af35e48_2270712_Fluffy_Outdoor_3840x2160_poster.0000000.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/692877de6096025570de1dac/69581d86ecfebab70af35e48_2270712_Fluffy_Outdoor_3840x2160_mp4.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#050510]/70" />
      {/* Lightning SVG overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        {/* Lightning bolt 1 */}
        <polyline
          points="15%,0 12%,30% 17%,30% 10%,70%"
          fill="none"
          stroke="rgba(147,197,253,0.6)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <animate attributeName="opacity" values="0;0.8;0;0;0;0.5;0" dur="5s" repeatCount="indefinite" begin="0s" />
        </polyline>
        {/* Lightning bolt 2 */}
        <polyline
          points="80%,0 83%,25% 78%,25% 85%,60%"
          fill="none"
          stroke="rgba(196,181,253,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <animate attributeName="opacity" values="0;0;0;0.7;0;0;0" dur="7s" repeatCount="indefinite" begin="1.5s" />
        </polyline>
        {/* Lightning bolt 3 */}
        <polyline
          points="50%,0 47%,20% 52%,20% 44%,55%"
          fill="none"
          stroke="rgba(147,197,253,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <animate attributeName="opacity" values="0;0;0.6;0;0;0;0" dur="9s" repeatCount="indefinite" begin="3s" />
        </polyline>
        {/* Glow flash for lightning */}
        <rect x="0" y="0" width="100%" height="100%" fill="rgba(147,197,253,0.03)">
          <animate attributeName="opacity" values="0;0;1;0;0;0;0" dur="5s" repeatCount="indefinite" begin="0s" />
        </rect>
      </svg>
      {/* Blue/purple glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Invalid credentials. Please try again.");
      return;
    }
    login("dummy_token_" + Date.now());
    router.push("/home");
  };

  return (
    <main className="min-h-screen bg-[#050510] flex items-center justify-center px-4 relative overflow-hidden">
      <CloudLightningBg />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <img src="/logo.png" alt="FinVerify" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Fin<span className="text-blue-400">Verify</span>
            </span>
          </Link>
          <p className="text-white/50 text-sm mt-2" style={{ fontFamily: "'Sora', sans-serif" }}>Sign in to your account</p>
        </div>

        <div className="bg-[#0c0c1b]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_28px_70px_rgba(5,5,20,0.8)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="text-sm text-white/60 mb-1.5 block" style={{ fontFamily: "'Sora', sans-serif" }}>Email / Username</label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                style={{ fontFamily: "'Sora', sans-serif" }}
              />
            </div>

            <div>
              <label className="text-sm text-white/60 mb-1.5 block" style={{ fontFamily: "'Sora', sans-serif" }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 transition-all"
                style={{ fontFamily: "'Sora', sans-serif" }}
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-2"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {error}
              </motion.p>
            )}

            <div className="text-right">
              <Link href="/forgot-password" className="text-xs text-blue-400/70 hover:text-blue-400 transition-colors" style={{ fontFamily: "'Sora', sans-serif" }}>
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-white/40 text-sm mt-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:text-blue-300 transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}