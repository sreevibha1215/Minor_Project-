"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export function LandingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="FinVerify Logo" className="h-9 w-auto" />
        <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
          Fin<span className="text-blue-400">Verify</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70" style={{ fontFamily: "'Sora', sans-serif" }}>
        <button onClick={() => scrollTo("hero")} className="text-white hover:text-blue-400 transition-colors">Home</button>
        <button onClick={() => scrollTo("features")} className="hover:text-blue-400 transition-colors">Features</button>
        <button onClick={() => scrollTo("how-it-works")} className="hover:text-blue-400 transition-colors">How It Works</button>
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <Link href="/login">
          <button className="px-5 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm hover:bg-white/10 hover:text-white transition-all duration-200" style={{ fontFamily: "'Sora', sans-serif" }}>
            Login
          </button>
        </Link>
        <Link href="/signup">
          <AnimatedButton variant="navbar" text="Sign Up" />
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#050510]/95 border-b border-white/10 flex flex-col gap-4 px-6 py-6 md:hidden">
          <button onClick={() => scrollTo("hero")} className="text-white/80 hover:text-white text-sm text-left">Home</button>
          <button onClick={() => scrollTo("features")} className="text-white/80 hover:text-white text-sm text-left">Features</button>
          <button onClick={() => scrollTo("how-it-works")} className="text-white/80 hover:text-white text-sm text-left">How It Works</button>
          <Link href="/login" className="text-white/80 hover:text-white text-sm">Login</Link>
          <Link href="/signup" className="text-white/80 hover:text-white text-sm">Sign Up</Link>
        </div>
      )}
    </motion.nav>
  );
}