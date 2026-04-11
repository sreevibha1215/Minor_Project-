"use client";

import { motion } from "framer-motion";

// Pre-calculated static coordinates (avoids Math.cos/sin SSR mismatch)
const orbitNodes = [
  { x: 155,    y: 90,    color: "#60a5fa" },
  { x: 127.5,  y: 42.4,  color: "#f59e0b" },
  { x: 72.5,   y: 42.4,  color: "#ef4444" },
  { x: 45,     y: 90,    color: "#a78bfa" },
  { x: 72.5,   y: 137.6, color: "#34d399" },
  { x: 127.5,  y: 137.6, color: "#f472b6" },
];

const cards = [
  {
    title: "Paste Your Claim",
    desc: "Enter any financial statement, news headline, or social post. Supports text, URL, or image upload.",
    illustration: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <svg viewBox="0 0 200 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="50" width="140" height="80" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5" />
          <rect x="44" y="68" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
          <rect x="44" y="80" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.07)" />
          <rect x="44" y="92" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.07)" />
          <rect x="44" y="104" width="2" height="10" rx="1" fill="rgba(96,165,250,0.8)">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>
          <rect x="44" y="118" width="28" height="7" rx="3" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
          <text x="49" y="123.5" fontSize="5" fill="rgba(96,165,250,0.8)" fontFamily="sans-serif">Text</text>
          <rect x="78" y="118" width="24" height="7" rx="3" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
          <text x="81" y="123.5" fontSize="5" fill="rgba(139,92,246,0.8)" fontFamily="sans-serif">URL</text>
          <rect x="108" y="118" width="26" height="7" rx="3" fill="rgba(74,222,128,0.15)" stroke="rgba(74,222,128,0.3)" strokeWidth="1" />
          <text x="112" y="123.5" fontSize="5" fill="rgba(74,222,128,0.8)" fontFamily="sans-serif">Image</text>
          <text x="100" y="38" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Enter financial claim</text>
        </svg>
      </div>
    ),
  },
  {
    title: "AI Scans & Scores",
    desc: "Our NLP model detects misinformation patterns, red flags, and risk indicators in real time.",
    illustration: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <svg viewBox="0 0 200 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="90" r="28" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />
          <text x="91" y="87" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">AI</text>
          <text x="88" y="98" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="sans-serif">Engine</text>
          {orbitNodes.map((node, i) => (
            <g key={i}>
              <line x1="100" y1="90" x2={node.x} y2={node.y} stroke={`${node.color}40`} strokeWidth="1" strokeDasharray="3,3" />
              <circle cx={node.x} cy={node.y} r="8" fill={`${node.color}20`} stroke={`${node.color}60`} strokeWidth="1" />
              <circle cx={node.x} cy={node.y} r="2" fill={node.color} opacity="0.8" />
            </g>
          ))}
          <circle cx="100" cy="90" r="42" fill="none" stroke="rgba(96,165,250,0.15)" strokeWidth="1">
            <animate attributeName="r" values="28;58;28" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <rect x="80" y="130" width="40" height="16" rx="8" fill="rgba(248,113,113,0.2)" stroke="rgba(248,113,113,0.4)" strokeWidth="1" />
          <text x="100" y="141" textAnchor="middle" fontSize="7" fill="rgba(248,113,113,0.9)" fontFamily="sans-serif">HIGH RISK</text>
        </svg>
      </div>
    ),
  },
  {
    title: "Get Your Report",
    desc: "Receive a full risk report with score, harm level, explanation, and keyword highlights instantly.",
    illustration: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <svg viewBox="0 0 200 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="35" y="25" width="130" height="130" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <text x="100" y="45" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">RISK REPORT</text>
          <line x1="45" y1="50" x2="155" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle cx="78" cy="80" r="20" fill="rgba(248,113,113,0.1)" stroke="rgba(248,113,113,0.4)" strokeWidth="1.5" />
          <text x="78" y="77" textAnchor="middle" fontSize="7" fill="rgba(248,113,113,0.8)" fontFamily="sans-serif">HIGH</text>
          <text x="78" y="87" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.4)" fontFamily="sans-serif">Risk</text>
          <rect x="108" y="62" width="45" height="14" rx="4" fill="rgba(250,204,21,0.1)" stroke="rgba(250,204,21,0.3)" strokeWidth="1" />
          <text x="130" y="72" textAnchor="middle" fontSize="6" fill="rgba(250,204,21,0.8)" fontFamily="sans-serif">Harm: Severe</text>
          <rect x="108" y="82" width="25" height="8" rx="3" fill="rgba(250,204,21,0.2)" />
          <text x="120" y="88" textAnchor="middle" fontSize="5.5" fill="rgba(250,204,21,0.9)" fontFamily="monospace">guaranteed</text>
          <rect x="108" y="94" width="18" height="8" rx="3" fill="rgba(248,113,113,0.2)" />
          <text x="117" y="100" textAnchor="middle" fontSize="5.5" fill="rgba(248,113,113,0.9)" fontFamily="monospace">40% ROI</text>
          <rect x="45" y="110" width="110" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
          <rect x="45" y="120" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />
          <rect x="45" y="130" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.04)" />
          <circle cx="155" cy="145" r="10" fill="rgba(74,222,128,0.2)" stroke="rgba(74,222,128,0.5)" strokeWidth="1.5" />
          <path d="M150 145 L153 148 L160 142" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    ),
  },
];

export function WorkSection() {
  return (
    <section id="how-it-works" className="py-24 bg-linear-to-b from-[#050510] to-[#0a0a1a] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-daimond-pattern rounded-full pointer-events-none" />
            <img
              src="https://cdn.prod.website-files.com/692877de6096025570de1dac/6957d639ac43dd49eb71e622_CTA%20Icon.svg"
              alt="How it works"
              className="w-5 h-5 icon-drop-shadow relative z-10"
            />
            <span className="text-xs font-semibold p-text-grey uppercase tracking-widest relative z-10" style={{ fontFamily: "'Sora', sans-serif" }}>How It Works</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-semibold text-white mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Three steps to financial clarity
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg p-text-grey max-w-xl"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            From suspicious claim to verified risk report in under 3 seconds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ delay: 0.18 * idx, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group card-glow relative bg-[#0c0c1b] border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 transform-gpu hover:shadow-[0_28px_70px_rgba(5,5,20,0.6)]"
            >
              <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="p-8 flex flex-col h-full z-10 relative">
                <div className="grow mb-8 rounded-xl overflow-hidden bg-white/5 border border-white/5 aspect-square flex items-center justify-center relative">
                  {card.illustration}
                </div>
                <div>
                  <div className="text-xs text-blue-400/60 font-mono mb-1">0{idx + 1}</div>
                  <h6 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{card.title}</h6>
                  <p className="text-sm p-text-grey leading-relaxed" style={{ fontFamily: "'Sora', sans-serif" }}>{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}