"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { MessageCircle } from "lucide-react";

export function HomeNavbar({ onChatOpen }: { onChatOpen: () => void }) {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      {/* Brand */}
      <Link href="/home" className="flex items-center gap-2">
        <img src="/logo.png" alt="FinVerify Logo" className="h-9 w-auto" />
        <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
          Fin<span className="text-blue-400">Verify</span>
        </span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70" style={{ fontFamily: "'Sora', sans-serif" }}>
        <Link href="/about-app" className="hover:text-blue-400 transition-colors">
          About the App
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Chatbot Icon */}
        <button
          onClick={onChatOpen}
          className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-200 group"
          aria-label="Open Chatbot"
        >
          <MessageCircle className="w-5 h-5 text-white/70 group-hover:text-blue-400 transition-colors" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-400 rounded-full border-2 border-[#050510] animate-pulse" />
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="px-5 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm hover:bg-red-500/20 hover:border-red-400/30 hover:text-red-300 transition-all duration-200"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Logout
        </button>
      </div>
    </motion.nav>
  );
}