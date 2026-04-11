"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AboutNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      <Link href="/" className="flex items-center gap-2">
        <span className="text-xl font-bold text-white tracking-tight">
          Fin<span className="text-blue-400">Verify</span>
        </span>
      </Link>
    </motion.nav>
  );
}