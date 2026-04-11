"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60 scale-105"
          poster="https://cdn.prod.website-files.com/692877de6096025570de1dac/69581d86ecfebab70af35e48_2270712_Fluffy_Outdoor_3840x2160_poster.0000000.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/692877de6096025570de1dac/69581d86ecfebab70af35e48_2270712_Fluffy_Outdoor_3840x2160_mp4.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-[#050510]/60 via-[#050510]/40 to-[#050510]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl flex flex-col items-center">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 mb-8 backdrop-blur-md overflow-hidden"
        >
          <div className="absolute inset-0 bg-daimond-pattern rounded-full pointer-events-none" />
          <img
            src="https://cdn.prod.website-files.com/692877de6096025570de1dac/6957d639ac43dd49eb71e622_CTA%20Icon.svg"
            alt="icon"
            className="w-6 h-6 icon-drop-shadow relative z-10"
          />
          <span className="text-sm font-medium p-text-grey tracking-wide relative z-10" style={{ fontFamily: "'Sora', sans-serif" }}>
            AI-Powered Financial Fact-Checking
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white mb-6 leading-[1.02]"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Detect Misinformation. <br /> Protect Your Finances.
        </motion.h1>

        {/* Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-lg md:text-xl p-text-grey font-light" style={{ fontFamily: "'Sora', sans-serif" }}>
            Paste any financial claim and get instant risk scoring, harm analysis, and AI-powered explanations.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/signup">
            <AnimatedButton text="Get Started Now" className="min-w-[200px]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}