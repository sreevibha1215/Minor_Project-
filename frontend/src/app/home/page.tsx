"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { HomeNavbar } from "@/components/HomeNavbar";
import { RiskResult } from "@/components/RiskResult";
import { ChatBot } from "@/components/ChatBot";
import { Link2, Type, Image as ImageIcon, X } from "lucide-react";

type RiskLevel = "Low" | "Medium" | "High";
type InputMode = "text" | "url" | "image";

interface AnalysisResult {
  riskScore: RiskLevel;
  harmLevel: string;
  explanation: string;
  keywords: string[];
}

const DUMMY_RESULTS: AnalysisResult[] = [
  {
    riskScore: "High",
    harmLevel: "Severe — This claim promotes unregulated investment schemes with guaranteed returns, which is illegal in most jurisdictions.",
    explanation: "The statement promises guaranteed 40% monthly returns with no risk. This is a classic hallmark of Ponzi schemes and pump-and-dump operations.",
    keywords: ["guaranteed", "40%", "no risk", "monthly returns"],
  },
  {
    riskScore: "Medium",
    harmLevel: "Moderate — The claim contains exaggerated performance metrics without verifiable sources.",
    explanation: "While not overtly fraudulent, the statement uses selective data and lacks peer-reviewed backing. Investors could make poor decisions based on this.",
    keywords: ["performance", "metrics", "selective"],
  },
  {
    riskScore: "Low",
    harmLevel: "Minimal — The statement is broadly accurate but lacks nuance.",
    explanation: "This claim aligns with general market trends. Minor inaccuracies in phrasing, but poses low risk of financial harm to readers.",
    keywords: ["market trends"],
  },
];

function CloudLightningBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full opacity-30 scale-105"
        poster="https://cdn.prod.website-files.com/692877de6096025570de1dac/69581d86ecfebab70af35e48_2270712_Fluffy_Outdoor_3840x2160_poster.0000000.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/692877de6096025570de1dac/69581d86ecfebab70af35e48_2270712_Fluffy_Outdoor_3840x2160_mp4.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-[#050510]/75" />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <polyline points="8%,0 5%,20% 10%,20% 3%,55%" fill="none" stroke="rgba(147,197,253,0.5)" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0;0.9;0;0;0;0" dur="7s" repeatCount="indefinite" begin="0s" />
        </polyline>
        <polyline points="88%,0 91%,18% 86%,18% 93%,50%" fill="none" stroke="rgba(196,181,253,0.5)" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="opacity" values="0;0;0;0.8;0;0" dur="9s" repeatCount="indefinite" begin="2s" />
        </polyline>
        <polyline points="55%,0 52%,15% 57%,15% 49%,48%" fill="none" stroke="rgba(147,197,253,0.35)" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="opacity" values="0;0;0;0;0.7;0" dur="11s" repeatCount="indefinite" begin="4.5s" />
        </polyline>
        {/* Flash */}
        <rect x="0" y="0" width="100%" height="100%" fill="rgba(147,197,253,0.02)">
          <animate attributeName="opacity" values="0;1;0;0;0;0" dur="7s" repeatCount="indefinite" begin="0s" />
        </rect>
      </svg>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "3s" }} />
    </div>
  );
}

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [inputMode, setInputMode] = useState<InputMode>("text");
  const [statement, setStatement] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn, router]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const canSubmit = () => {
    if (inputMode === "text") return statement.trim().length > 0;
    if (inputMode === "url") return urlInput.trim().length > 0;
    if (inputMode === "image") return imageFile !== null;
    return false;
  };

  const handleAnalyze = async () => {
    if (!canSubmit() || loading) return;
    setLoading(true);
    setResult(null);
    await new Promise(r => setTimeout(r, 1800));
    const pick = DUMMY_RESULTS[Math.floor(Math.random() * DUMMY_RESULTS.length)];
    setResult(pick);
    setLoading(false);
  };

  if (!isLoggedIn) return null;

  const inputModes: { mode: InputMode; label: string; icon: React.ReactNode }[] = [
    { mode: "text", label: "Text", icon: <Type className="w-4 h-4" /> },
    { mode: "url", label: "URL", icon: <Link2 className="w-4 h-4" /> },
    { mode: "image", label: "Image", icon: <ImageIcon className="w-4 h-4" /> },
  ];

  return (
    <main className="min-h-screen bg-[#050510] flex flex-col relative">
      <CloudLightningBg />
      <HomeNavbar onChatOpen={() => setChatOpen(true)} />

      <section className="flex-1 pt-28 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-semibold text-white/60 uppercase tracking-widest" style={{ fontFamily: "'Sora', sans-serif" }}>AI-Powered Detection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Analyze Financial Claims
            </h1>
            <p className="text-white/50 text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>
              Paste any financial statement to get instant risk assessment and harm analysis.
            </p>
          </motion.div>

          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0c0c1b]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_28px_70px_rgba(5,5,20,0.5)]"
          >
            {/* Input Mode Tabs */}
            <div className="flex gap-2 mb-5 p-1 bg-white/5 rounded-2xl w-fit">
              {inputModes.map(({ mode, label, icon }) => (
                <button
                  key={mode}
                  onClick={() => { setInputMode(mode); setResult(null); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    inputMode === mode
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_4px_15px_rgba(99,102,241,0.3)]"
                      : "text-white/50 hover:text-white/80"
                  }`}
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            {/* Text Input */}
            {inputMode === "text" && (
              <textarea
                value={statement}
                onChange={e => setStatement(e.target.value)}
                placeholder="Enter financial statement or claim...&#10;&#10;e.g. 'This crypto token guarantees 40% monthly returns with zero risk...'"
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-400/40 transition-all resize-none leading-relaxed"
                style={{ fontFamily: "'Sora', sans-serif" }}
              />
            )}

            {/* URL Input */}
            {inputMode === "url" && (
              <div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus-within:border-blue-400/40 transition-all">
                  <Link2 className="w-4 h-4 text-white/40 shrink-0" />
                  <input
                    type="url"
                    value={urlInput}
                    onChange={e => setUrlInput(e.target.value)}
                    placeholder="https://example.com/financial-article"
                    className="flex-1 bg-transparent text-white text-sm placeholder:text-white/25 focus:outline-none"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  />
                </div>
                <p className="text-white/30 text-xs mt-2 ml-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Paste a URL to a financial article, news page, or social media post
                </p>
              </div>
            )}

            {/* Image Input */}
            {inputMode === "image" && (
              <div>
                {!imagePreview ? (
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="w-full h-40 border-2 border-dashed border-white/15 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-blue-400/40 hover:bg-white/3 transition-all"
                  >
                    <ImageIcon className="w-8 h-8 text-white/30" />
                    <span className="text-white/40 text-sm" style={{ fontFamily: "'Sora', sans-serif" }}>Click to upload image</span>
                    <span className="text-white/25 text-xs" style={{ fontFamily: "'Sora', sans-serif" }}>PNG, JPG, WEBP supported</span>
                  </button>
                ) : (
                  <div className="relative rounded-xl overflow-hidden border border-white/10">
                    <img src={imagePreview} alt="Preview" className="w-full max-h-48 object-contain bg-white/5" />
                    <button
                      onClick={() => { setImageFile(null); setImagePreview(null); }}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      <X className="w-3.5 h-3.5 text-white" />
                    </button>
                    <div className="px-3 py-2 text-xs text-white/40" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {imageFile?.name}
                    </div>
                  </div>
                )}
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </div>
            )}

            <div className="flex items-center justify-between mt-4">
              <span className="text-white/30 text-xs" style={{ fontFamily: "'Sora', sans-serif" }}>
                {inputMode === "text" && `${statement.length} characters`}
                {inputMode === "url" && (urlInput ? "URL ready to analyze" : "No URL entered")}
                {inputMode === "image" && (imageFile ? `${imageFile.name}` : "No image selected")}
              </span>
              <button
                onClick={handleAnalyze}
                disabled={!canSubmit() || loading}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-[0_8px_30px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center gap-2"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Analyze Risk
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Loading State */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6 flex flex-col items-center gap-3 py-8"
              >
                <div className="flex gap-2 flex-wrap justify-center">
                  {["Scanning claim...", "Checking patterns...", "Generating report..."].map((label, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.4 }}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {label}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <AnimatePresence>
            {result && !loading && (
              <div>
                <RiskResult
                  riskScore={result.riskScore}
                  harmLevel={result.harmLevel}
                  explanation={result.explanation}
                  keywords={result.keywords}
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-center text-white/30 text-xs mt-6"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Want more details?{" "}
                  <button
                    onClick={() => setChatOpen(true)}
                    className="text-blue-400/70 hover:text-blue-400 transition-colors underline"
                  >
                    Ask the AI chatbot
                  </button>
                </motion.p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Chatbot */}
      <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </main>
  );
}