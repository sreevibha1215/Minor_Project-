"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function Navbar() {
  const [navLottie, setNavLottie] = useState<any>(null);

  useEffect(() => {
    fetch("https://cdn.prod.website-files.com/692877de6096025570de1dac/695819c0a62dde4441050eaa_White%20Nav%20Lottie.json")
      .then(res => res.json())
      .then(data => setNavLottie(data))
      .catch(console.error);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://cdn.prod.website-files.com/692877de6096025570de1dac/695815e8e6e4743ca17c8800_52f947842b691a7d3df2fbc449200f0d_Nav%20Logo.svg"
            alt="Infranex Logo"
            className="h-8 w-auto"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <Link href="/" className="text-white hover:text-white transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-white transition-colors">
          About us
        </Link>
        <Link href="/features" className="hover:text-white transition-colors">
          Features
        </Link>
        <Link href="/pricing" className="hover:text-white transition-colors">
          Pricing
        </Link>
        <Link href="/blog" className="hover:text-white transition-colors">
          Blog
        </Link>
        <Link href="/integration" className="hover:text-white transition-colors">
          Integration
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link href="/contact">
          <AnimatedButton variant="navbar" text="Get Started" />
        </Link>
      </div>

      {/* Mobile Menu Button - Lottie */}
      <div className="md:hidden flex items-center justify-center p-2 rounded hover:bg-white/5 cursor-pointer">
        {navLottie ? (
          <div className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity">
            <Lottie animationData={navLottie} loop={false} autoplay={false} />
          </div>
        ) : (
          <div className="w-8 h-8 bg-white/20 animate-pulse rounded" />
        )}
      </div>
    </motion.nav>
  );
}
