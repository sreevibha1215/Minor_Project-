"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function CloudLightningBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
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
      <div className="absolute inset-0 bg-[#050510]/70" />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="20%,0 17%,28% 22%,28% 14%,65%" fill="none" stroke="rgba(147,197,253,0.5)" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0;0.8;0;0;0" dur="6s" repeatCount="indefinite" begin="0.5s" />
        </polyline>
        <polyline points="75%,0 78%,22% 73%,22% 80%,58%" fill="none" stroke="rgba(196,181,253,0.5)" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="opacity" values="0;0;0.7;0;0" dur="8s" repeatCount="indefinite" begin="2s" />
        </polyline>
        <polyline points="45%,0 42%,18% 47%,18% 39%,52%" fill="none" stroke="rgba(147,197,253,0.4)" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="opacity" values="0;0;0;0.6;0" dur="10s" repeatCount="indefinite" begin="4s" />
        </polyline>
      </svg>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "3s" }} />
    </div>
  );
}

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { login } = useAuth();
  const router = useRouter();

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.includes("@")) e.email = "Enter a valid email.";
    if (form.password.length < 6) e.password = "Password must be at least 6 characters.";
    if (form.password !== form.confirm) e.confirm = "Passwords do not match.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      login("dummy_token_" + Date.now());
      router.push("/home");
    }
  };

  const field = (key: keyof typeof form, label: string, type = "text", placeholder = "") => (
    <div>
      <label className="text-sm text-white/60 mb-1.5 block" style={{ fontFamily: "'Sora', sans-serif" }}>{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 transition-all"
        style={{ fontFamily: "'Sora', sans-serif" }}
      />
      {errors[key] && <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "'Sora', sans-serif" }}>{errors[key]}</p>}
    </div>
  );

  return (
    <main className="min-h-screen bg-[#050510] flex items-center justify-center px-4 relative overflow-hidden py-20">
      <CloudLightningBg />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <img src="/logo.png" alt="FinVerify" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Fin<span className="text-blue-400">Verify</span>
            </span>
          </Link>
          <p className="text-white/50 text-sm mt-2" style={{ fontFamily: "'Sora', sans-serif" }}>Create your account</p>
        </div>

        <div className="bg-[#0c0c1b]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_28px_70px_rgba(5,5,20,0.8)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {field("name", "Full Name", "text", "John Doe")}
            {field("email", "Email", "email", "you@example.com")}
            {field("password", "Password", "password", "••••••••")}
            {field("confirm", "Confirm Password", "password", "••••••••")}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-white/40 text-sm mt-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}