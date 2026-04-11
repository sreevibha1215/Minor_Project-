"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  {
    value: "₹4.3T",
    label: "Lost to Financial Fraud Annually in India",
    sub: "Source: RBI Annual Report 2023",
  },
  {
    value: "87%",
    label: "Detection Accuracy",
    sub: "Across 10,000+ tested financial claims",
  },
  {
    value: "2.1s",
    label: "Average Analysis Time",
    sub: "From input to full risk report",
  },
];

export function HomeAbout() {
  return (
    <section className="py-24 bg-[#050510] relative text-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-full p-4 mb-8 animate-float-mid"
          >
            <img
              src="https://cdn.prod.website-files.com/692877de6096025570de1dac/6959568a227eefa56174987e_Web%20Logo.svg"
              alt="Web Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl lg:text-[2.5rem] font-semibold leading-[1.2] text-white mb-10 max-w-4xl"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Our team of AI researchers, data scientists, and security engineers built FinVerify to protect investors from the growing epidemic of financial misinformation.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/signup">
              <button
                className="px-8 py-3 rounded-full border border-white/20 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-200"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                LEARN MORE →
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Real Stats Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 pt-12 border-t border-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="flex flex-col items-center gap-2"
            >
              <span
                className="text-4xl md:text-5xl font-bold text-white tabular-nums"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="text-white/60 text-sm font-medium" style={{ fontFamily: "'Sora', sans-serif" }}>
                {stat.label}
              </span>
              <span className="text-white/30 text-xs" style={{ fontFamily: "'Sora', sans-serif" }}>
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}