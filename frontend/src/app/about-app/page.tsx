"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function CloudLightningBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full opacity-25 scale-105"
        poster="https://cdn.prod.website-files.com/692877de6096025570de1dac/69581d86ecfebab70af35e48_2270712_Fluffy_Outdoor_3840x2160_poster.0000000.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/692877de6096025570de1dac/69581d86ecfebab70af35e48_2270712_Fluffy_Outdoor_3840x2160_mp4.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-[#050510]/80" />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <polyline points="12%,0 9%,22% 14%,22% 7%,58%" fill="none" stroke="rgba(147,197,253,0.45)" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0;0.8;0;0;0" dur="8s" repeatCount="indefinite" begin="1s" />
        </polyline>
        <polyline points="82%,0 85%,20% 80%,20% 87%,52%" fill="none" stroke="rgba(196,181,253,0.4)" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="opacity" values="0;0;0.7;0;0" dur="10s" repeatCount="indefinite" begin="3.5s" />
        </polyline>
      </svg>
      <div className="absolute top-32 left-1/3 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
}

const featureCards = [
  {
    title: "Real-Time Risk Detection",
    desc: "Our AI engine scans financial statements and scores them as Low, Medium, or High risk in seconds using advanced NLP models trained on thousands of financial fraud cases.",
    illustration: (
      <svg viewBox="0 0 160 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M80 10 L130 35 L130 80 C130 105 80 120 80 120 C80 120 30 105 30 80 L30 35 Z" fill="none" stroke="rgba(96,165,250,0.35)" strokeWidth="1.5" />
        <path d="M80 10 L130 35 L130 80 C130 105 80 120 80 120 C80 120 30 105 30 80 L30 35 Z" fill="rgba(96,165,250,0.05)" />
        <path d="M58 70 L70 83 L103 57" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="80" cy="70" r="28" fill="none" stroke="rgba(96,165,250,0.12)" strokeWidth="1">
          <animate attributeName="r" values="28;44;28" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <rect x="42" y="100" width="10" height="14" rx="2" fill="rgba(74,222,128,0.7)" />
        <rect x="57" y="93" width="10" height="21" rx="2" fill="rgba(250,204,21,0.7)" />
        <rect x="72" y="85" width="10" height="29" rx="2" fill="rgba(248,113,113,0.7)" />
      </svg>
    ),
    stat: "94%",
    statLabel: "Detection Accuracy",
  },
  {
    title: "Explainable AI (XAI)",
    desc: "Every risk result comes with a plain-language explanation, keyword highlights, and the reasoning behind the score — complete transparency, no black boxes.",
    illustration: (
      <svg viewBox="0 0 160 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="120" height="90" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <rect x="32" y="28" width="96" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
        <rect x="32" y="40" width="70" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="32" y="55" width="35" height="10" rx="4" fill="rgba(250,204,21,0.25)" stroke="rgba(250,204,21,0.4)" strokeWidth="1" />
        <text x="35" y="63" fontSize="7" fill="rgba(250,204,21,0.9)" fontFamily="monospace">guaranteed</text>
        <rect x="73" y="55" width="28" height="10" rx="4" fill="rgba(248,113,113,0.25)" stroke="rgba(248,113,113,0.4)" strokeWidth="1" />
        <text x="76" y="63" fontSize="7" fill="rgba(248,113,113,0.9)" fontFamily="monospace">40% ROI</text>
        <rect x="32" y="72" width="80" height="5" rx="2" fill="rgba(255,255,255,0.06)" />
        <rect x="32" y="84" width="96" height="14" rx="5" fill="rgba(74,222,128,0.1)" stroke="rgba(74,222,128,0.3)" strokeWidth="1" />
        <circle cx="43" cy="91" r="4" fill="rgba(74,222,128,0.5)" />
        <text x="51" y="89" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Risk: LOW</text>
        <text x="51" y="97" fontSize="6" fill="rgba(255,255,255,0.35)" fontFamily="sans-serif">Confidence 94%</text>
      </svg>
    ),
    stat: "3s",
    statLabel: "To Full Explanation",
  },
  {
    title: "RAG-Powered Chatbot",
    desc: "Ask follow-up questions about any flagged claim and receive context-aware answers powered by our retrieval-augmented generation system backed by verified financial data.",
    illustration: (
      <svg viewBox="0 0 160 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="10" width="130" height="100" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        <rect x="15" y="10" width="130" height="24" rx="10" fill="rgba(96,165,250,0.1)" />
        <circle cx="30" cy="22" r="6" fill="rgba(96,165,250,0.5)" />
        <text x="40" y="20" fontSize="6" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">FinVerify AI</text>
        <text x="40" y="28" fontSize="5" fill="rgba(255,255,255,0.35)" fontFamily="sans-serif">RAG-powered</text>
        <rect x="22" y="42" width="85" height="18" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="28" y="50" fontSize="5.5" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">High-risk pattern detected...</text>
        <text x="28" y="57" fontSize="5.5" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">likely Ponzi scheme.</text>
        <rect x="70" y="68" width="65" height="16" rx="7" fill="rgba(96,165,250,0.22)" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
        <text x="76" y="79" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Why is it high risk?</text>
        <rect x="22" y="92" width="45" height="12" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <circle cx="34" cy="98" r="2.5" fill="rgba(255,255,255,0.35)"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" begin="0s" /></circle>
        <circle cx="42" cy="98" r="2.5" fill="rgba(255,255,255,0.35)"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" begin="0.2s" /></circle>
        <circle cx="50" cy="98" r="2.5" fill="rgba(255,255,255,0.35)"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" begin="0.4s" /></circle>
      </svg>
    ),
    stat: "10K+",
    statLabel: "Claims Verified",
  },
];

export default function AboutAppPage() {
  return (
    <main className="min-h-screen bg-[#050510] flex flex-col relative">
      <CloudLightningBg />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-md bg-black/20 border-b border-white/5">
        <Link href="/home" className="flex items-center gap-2">
          <img src="/logo.png" alt="FinVerify" className="h-9 w-auto" />
          <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
            Fin<span className="text-blue-400">Verify</span>
          </span>
        </Link>
        <Link href="/home" className="text-white/40 text-sm hover:text-white transition-colors" style={{ fontFamily: "'Sora', sans-serif" }}>
          ← Back to App
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 text-center z-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
          >
            <img
              src="https://cdn.prod.website-files.com/692877de6096025570de1dac/6957d639ac43dd49eb71e622_CTA%20Icon.svg"
              alt="icon"
              className="w-4 h-4 brightness-0 invert"
            />
            <span className="text-xs font-semibold text-white/60 uppercase tracking-widest" style={{ fontFamily: "'Sora', sans-serif" }}>About FinVerify</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Fighting Financial <br />
            <span className="text-gradient-animated animate-shimmer-soft">Misinformation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            FinVerify is an AI-powered risk detection system designed to identify, explain, and contextualize financial misinformation — protecting investors and the public from harmful claims.
          </motion.p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * idx, duration: 0.6 }}
                className="group bg-[#0c0c1b]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-white/25 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(5,5,20,0.6)] flex flex-col"
              >
                {/* Illustration */}
                <div className="w-full aspect-video bg-white/5 border border-white/5 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-4">
                  {card.illustration}
                </div>

                {/* Stat */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{card.stat}</span>
                  <span className="text-xs text-white/40 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>{card.statLabel}</span>
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>{card.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "'Sora', sans-serif" }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>How It Works</h2>
            <p className="text-white/40 text-base" style={{ fontFamily: "'Sora', sans-serif" }}>From suspicious claim to verified risk report in under 3 seconds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Input a Claim", desc: "Paste text, a URL, or upload an image of the financial statement.", color: "blue" },
              { step: "02", title: "AI Risk Scoring", desc: "Our NLP model evaluates it against known misinformation patterns and assigns a risk score.", color: "purple" },
              { step: "03", title: "Get Explanation", desc: "Receive a full report with score, harm level, highlighted keywords, and plain-language explanation.", color: "green" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i }}
                className="bg-[#0c0c1b]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold ${
                  item.color === "blue" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                  item.color === "purple" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" :
                  "bg-green-500/20 text-green-400 border border-green-500/30"
                }`} style={{ fontFamily: "'Sora', sans-serif" }}>
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "'Sora', sans-serif" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom padding */}
      <div className="h-16" />
    </main>
  );
}