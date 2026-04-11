"use client";

import { motion } from "framer-motion";

type RiskLevel = "Low" | "Medium" | "High";

interface RiskResultProps {
  riskScore: RiskLevel;
  harmLevel: string;
  explanation: string;
  keywords?: string[];
}

const riskConfig = {
  Low: {
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/30",
    glow: "shadow-[0_0_30px_rgba(74,222,128,0.15)]",
    dot: "bg-green-400",
    bar: "bg-green-400",
    width: "w-1/4",
    label: "LOW RISK",
  },
  Medium: {
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/30",
    glow: "shadow-[0_0_30px_rgba(250,204,21,0.15)]",
    dot: "bg-yellow-400",
    bar: "bg-yellow-400",
    width: "w-1/2",
    label: "MEDIUM RISK",
  },
  High: {
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/30",
    glow: "shadow-[0_0_30px_rgba(248,113,113,0.15)]",
    dot: "bg-red-400",
    bar: "bg-red-400",
    width: "w-3/4",
    label: "HIGH RISK",
  },
};

function highlightKeywords(text: string, keywords: string[]) {
  if (!keywords.length) return <span>{text}</span>;
  const regex = new RegExp(
    `(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        keywords.some(k => k.toLowerCase() === part.toLowerCase()) ? (
          <mark key={i} className="bg-yellow-400/20 text-yellow-300 rounded px-0.5 not-italic">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function RiskResult({ riskScore, harmLevel, explanation, keywords = [] }: RiskResultProps) {
  const cfg = riskConfig[riskScore];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
    >
      {/* Risk Score Card */}
      <div className={`${cfg.bg} ${cfg.border} ${cfg.glow} border rounded-2xl p-6 flex flex-col items-center justify-center text-center`}>
        <span className="text-xs uppercase tracking-widest text-white/40 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>Risk Score</span>
        <div className={`w-3 h-3 rounded-full ${cfg.dot} mb-3 animate-pulse`} />
        <span className={`text-4xl font-bold ${cfg.color}`} style={{ fontFamily: "'Sora', sans-serif" }}>{riskScore}</span>
        <span className={`text-xs mt-1 ${cfg.color} opacity-60 font-mono`}>{cfg.label}</span>
        <div className="w-full mt-4 bg-white/10 rounded-full h-1.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: undefined }}
            className={`${cfg.bar} ${cfg.width} h-1.5 rounded-full`}
            style={{ transition: "width 1s ease" }}
          />
        </div>
      </div>

      {/* Harm Level Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
        <span className="text-xs uppercase tracking-widest text-white/40 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>Harm Level</span>
        <p className="text-white/80 text-sm leading-relaxed flex-1" style={{ fontFamily: "'Sora', sans-serif" }}>{harmLevel}</p>
      </div>

      {/* Explanation Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
        <span className="text-xs uppercase tracking-widest text-white/40 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>Explanation</span>
        <p className="text-white/80 text-sm leading-relaxed flex-1" style={{ fontFamily: "'Sora', sans-serif" }}>
          {highlightKeywords(explanation, keywords)}
        </p>
      </div>
    </motion.div>
  );
}