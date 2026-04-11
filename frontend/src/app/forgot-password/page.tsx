"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#050510] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="hero-glow animate-glow-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <Link href="/">
            <span className="text-2xl font-bold text-white tracking-tight">
              Fin<span className="text-blue-400">Verify</span>
            </span>
          </Link>
          <p className="text-white/50 text-sm mt-2">Reset your password</p>
        </div>

        <div className="bg-[#0c0c1b] border border-white/10 rounded-3xl p-8 shadow-[0_28px_70px_rgba(5,5,20,0.6)]">
          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-sm text-white/60 mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-[0_8px_30px_rgba(99,102,241,0.3)] hover:-translate-y-0.5"
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Check your inbox!</h3>
              <p className="text-white/50 text-sm">A password reset link has been sent to <span className="text-blue-400">{email}</span></p>
            </motion.div>
          )}

          <p className="text-center text-white/40 text-sm mt-6">
            <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
              ← Back to Login
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}