"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Real-Time Risk Detection",
    desc: "Our AI engine scans financial statements and scores them as Low, Medium, or High risk in seconds.",
    illustration: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <svg viewBox="0 0 200 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Shield base */}
          <path d="M100 20 L160 50 L160 110 C160 145 100 165 100 165 C100 165 40 145 40 110 L40 50 Z"
            fill="none" stroke="rgba(96,165,250,0.4)" strokeWidth="2" />
          <path d="M100 20 L160 50 L160 110 C160 145 100 165 100 165 C100 165 40 145 40 110 L40 50 Z"
            fill="rgba(96,165,250,0.06)" />
          {/* Checkmark */}
          <path d="M72 95 L88 112 L128 75" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Pulse rings */}
          <circle cx="100" cy="95" r="35" fill="none" stroke="rgba(96,165,250,0.15)" strokeWidth="1.5">
            <animate attributeName="r" values="35;55;35" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="95" r="25" fill="none" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
          {/* Risk bars */}
          <rect x="55" y="138" width="12" height="18" rx="2" fill="rgba(74,222,128,0.7)" />
          <rect x="73" y="130" width="12" height="26" rx="2" fill="rgba(250,204,21,0.7)" />
          <rect x="91" y="120" width="12" height="36" rx="2" fill="rgba(248,113,113,0.7)" />
          {/* Labels */}
          <text x="56" y="162" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="monospace">LOW</text>
          <text x="71" y="162" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="monospace">MED</text>
          <text x="91" y="162" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="monospace">HIGH</text>
          {/* Scanning line */}
          <line x1="40" y1="80" x2="160" y2="80" stroke="rgba(96,165,250,0.3)" strokeWidth="1" strokeDasharray="4,4">
            <animateTransform attributeName="transform" type="translate" values="0,0;0,50;0,0" dur="2.5s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
    ),
  },
  {
    title: "Explainable AI (XAI)",
    desc: "Every result comes with a plain-language explanation and keyword highlights — no black boxes.",
    illustration: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <svg viewBox="0 0 200 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Document */}
          <rect x="45" y="20" width="110" height="140" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          {/* Text lines */}
          <rect x="60" y="40" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
          <rect x="60" y="54" width="65" height="5" rx="2.5" fill="rgba(255,255,255,0.10)" />
          {/* Highlighted keywords */}
          <rect x="60" y="70" width="30" height="8" rx="3" fill="rgba(250,204,21,0.25)" stroke="rgba(250,204,21,0.4)" strokeWidth="1" />
          <text x="63" y="77" fontSize="6" fill="rgba(250,204,21,0.9)" fontFamily="monospace">guaranteed</text>
          <rect x="97" y="70" width="22" height="8" rx="3" fill="rgba(248,113,113,0.25)" stroke="rgba(248,113,113,0.4)" strokeWidth="1" />
          <text x="100" y="77" fontSize="6" fill="rgba(248,113,113,0.9)" fontFamily="monospace">40% ROI</text>
          <rect x="60" y="85" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
          <rect x="60" y="98" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
          {/* AI Brain bubble */}
          <circle cx="148" cy="50" r="20" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" />
          <text x="139" y="47" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">AI</text>
          <text x="136" y="57" fontSize="6" fill="rgba(255,255,255,0.4)" fontFamily="sans-serif">XAI</text>
          {/* Connection lines */}
          <line x1="128" y1="53" x2="97" y2="74" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="130" y1="56" x2="119" y2="74" stroke="rgba(250,204,21,0.3)" strokeWidth="1" strokeDasharray="3,3" />
          {/* Score badge */}
          <rect x="60" y="115" width="80" height="28" rx="6" fill="rgba(74,222,128,0.1)" stroke="rgba(74,222,128,0.3)" strokeWidth="1" />
          <circle cx="75" cy="129" r="5" fill="rgba(74,222,128,0.5)" />
          <text x="85" y="126" fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Risk: LOW</text>
          <text x="85" y="136" fontSize="6" fill="rgba(255,255,255,0.4)" fontFamily="sans-serif">Confidence: 94%</text>
        </svg>
      </div>
    ),
  },
  {
    title: "RAG-Powered Chatbot",
    desc: "Ask follow-up questions and get context-aware answers powered by retrieval-augmented generation.",
    illustration: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <svg viewBox="0 0 200 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Chat window */}
          <rect x="30" y="20" width="140" height="140" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          {/* Header */}
          <rect x="30" y="20" width="140" height="28" rx="12" fill="rgba(96,165,250,0.12)" />
          <circle cx="48" cy="34" r="7" fill="rgba(96,165,250,0.5)" />
          <text x="58" y="32" fontSize="6" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">FinVerify AI</text>
          <text x="58" y="40" fontSize="5" fill="rgba(255,255,255,0.35)" fontFamily="sans-serif">RAG-powered</text>
          {/* Bot message */}
          <rect x="40" y="58" width="95" height="22" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <text x="47" y="67" fontSize="5.5" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">This claim shows high-risk</text>
          <text x="47" y="75" fontSize="5.5" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">misinformation patterns...</text>
          {/* User message */}
          <rect x="75" y="90" width="80" height="18" rx="8" fill="rgba(96,165,250,0.25)" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
          <text x="82" y="103" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Why is it high risk?</text>
          {/* Bot typing */}
          <rect x="40" y="118" width="55" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle cx="54" cy="126" r="2.5" fill="rgba(255,255,255,0.4)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" begin="0s" />
          </circle>
          <circle cx="63" cy="126" r="2.5" fill="rgba(255,255,255,0.4)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" begin="0.2s" />
          </circle>
          <circle cx="72" cy="126" r="2.5" fill="rgba(255,255,255,0.4)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" begin="0.4s" />
          </circle>
          {/* DB icons */}
          <ellipse cx="155" cy="100" rx="12" ry="5" fill="rgba(139,92,246,0.3)" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
          <rect x="143" y="100" width="24" height="14" fill="rgba(139,92,246,0.15)" stroke="none" />
          <ellipse cx="155" cy="114" rx="12" ry="5" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
          <text x="149" y="108" fontSize="5" fill="rgba(255,255,255,0.4)" fontFamily="sans-serif">RAG</text>
          <line x1="143" y1="107" x2="135" y2="107" stroke="rgba(139,92,246,0.4)" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#050510] relative">
      <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/692877de6096025570de1dac/6957d1fe649acd140344f521_Section%20Bg%2001.svg')] bg-cover bg-center opacity-5" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <img
              src="https://cdn.prod.website-files.com/692877de6096025570de1dac/6957d639ac43dd49eb71e622_CTA%20Icon.svg"
              alt="Features"
              className="w-4 h-4 brightness-0 invert"
            />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-widest" style={{ fontFamily: "'Sora', sans-serif" }}>Our Features</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Truth, Explained by AI
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/50 max-w-xl"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            FinVerify combines cutting-edge NLP with explainable AI to make
            financial misinformation detection accessible to everyone.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
              className="group relative bg-[#0c0c1b] border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-8 flex flex-col h-full z-10 relative">
                <div className="flex-grow mb-8 rounded-xl overflow-hidden bg-white/5 border border-white/5 aspect-square flex items-center justify-center relative">
                  {feature.illustration}
                </div>
                <div>
                  <h6 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{feature.title}</h6>
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "'Sora', sans-serif" }}>{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}