"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Zap, Bot, AlertCircle } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
  timestamp: Date;
  isError?: boolean;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUICK_PROMPTS = [
  "What makes a claim High risk?",
  "Latest market news?",
  "Explain RAG detection",
];

// Shashank's backend URL
const BACKEND_URL = "http://127.0.0.1:8000";

export function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm FinVerify's AI assistant powered by a real financial agent. Ask me about any financial claim, market news, or stock information.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionReset, setSessionReset] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const trimmed = (text || input).trim();
    if (!trimmed || loading) return;

    setMessages(prev => [...prev, { role: "user", text: trimmed, timestamp: new Date() }]);
    setInput("");
    setLoading(true);

    try {
      // Call Shashank's real backend
      const response = await fetch(`/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: trimmed,
          reset: sessionReset,
        }),
      });

      // After first message, don't reset session
      if (sessionReset) setSessionReset(false);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      // Handle error from backend
      if (data.error) {
        throw new Error(data.error);
      }

      // Extract answer from response
      // Backend returns: { answer: string, news: [...] } or similar
      let botReply = "";

      if (data.answer) {
        botReply = data.answer;
      } else if (data.response) {
        botReply = data.response;
      } else if (data.result) {
        botReply = data.result;
      } else if (typeof data === "string") {
        botReply = data;
      } else {
        // If it returns news items, format them nicely
        botReply = JSON.stringify(data, null, 2);
      }

      // If there are news items, append them nicely
      if (data.news && Array.isArray(data.news) && data.news.length > 0) {
        botReply += "\n\n📰 Top Related News:\n";
        data.news.slice(0, 3).forEach((item: any, i: number) => {
          botReply += `\n${i + 1}. ${item.headline || item.title || item.summary || ""}`;
        });
      }

      setMessages(prev => [...prev, {
        role: "bot",
        text: botReply || "I received a response but couldn't parse it. Please try again.",
        timestamp: new Date(),
      }]);

    } catch (error: any) {
      // Check if backend is not running
      const isConnectionError = error.message?.includes("fetch") ||
        error.message?.includes("Failed to fetch") ||
        error.message?.includes("NetworkError") ||
        error.name === "TypeError";

      const errorMsg = isConnectionError
        ? "⚠️ Cannot connect to the backend server. Please make sure the Python server is running on port 8000.\n\nRun: python final_server.py"
        : `Error: ${error.message}`;

      setMessages(prev => [...prev, {
        role: "bot",
        text: errorMsg,
        timestamp: new Date(),
        isError: true,
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSessionReset(true);
    setMessages([{
      role: "bot",
      text: "Session reset! Starting a fresh conversation. How can I help you?",
      timestamp: new Date(),
    }]);
  };

  const formatTime = (d: Date) =>
    d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.92 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 w-[92vw] max-w-[400px] flex flex-col overflow-hidden rounded-3xl"
          style={{
            maxHeight: "75vh",
            background: "linear-gradient(135deg, rgba(8,8,24,0.97) 0%, rgba(12,12,28,0.97) 100%)",
            border: "1px solid rgba(96,165,250,0.2)",
            boxShadow: "0 32px 80px rgba(2,2,12,0.9), 0 0 0 1px rgba(96,165,250,0.05), inset 0 1px 0 rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Top border glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(109,40,217,0.12) 100%)",
              borderBottom: "1px solid rgba(96,165,250,0.12)"
            }}
          >
            {/* Lightning decoration */}
            <svg className="absolute right-16 top-0 h-full w-20 opacity-20 pointer-events-none" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
              <polyline points="60,0 50,25 58,25 42,60" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <div className="flex items-center gap-3 relative z-10">
              <div className="relative w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}>
                <Zap className="w-4 h-4 text-white" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#08081a] animate-pulse" />
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>FinVerify AI</p>
                <p className="text-blue-300/60 text-xs" style={{ fontFamily: "'Sora', sans-serif" }}>LangGraph + Groq Agent</p>
              </div>
            </div>

            <div className="flex items-center gap-2 relative z-10">
              {/* Reset button */}
              <button
                onClick={handleReset}
                className="text-white/30 hover:text-white/70 text-xs px-2 py-1 rounded-lg hover:bg-white/10 transition-all"
                style={{ fontFamily: "'Sora', sans-serif" }}
                title="Reset conversation"
              >
                Reset
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4 min-h-0">
            {/* Quick prompts at start */}
            {messages.length === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 mt-1"
              >
                {QUICK_PROMPTS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(p)}
                    className="text-xs px-3 py-1.5 rounded-full border border-blue-400/25 bg-blue-400/8 text-blue-300/80 hover:bg-blue-400/15 hover:text-blue-200 transition-all"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {p}
                  </button>
                ))}
              </motion.div>
            )}

            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}
              >
                {msg.role === "bot" && (
                  <div className="flex items-end gap-2">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mb-1"
                      style={{ background: msg.isError ? "rgba(239,68,68,0.5)" : "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                    >
                      {msg.isError ? <AlertCircle className="w-3.5 h-3.5 text-white" /> : <Bot className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div
                      className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed whitespace-pre-wrap"
                      style={{
                        background: msg.isError ? "rgba(239,68,68,0.1)" : "rgba(255,255,255,0.06)",
                        border: msg.isError ? "1px solid rgba(239,68,68,0.3)" : "1px solid rgba(255,255,255,0.08)",
                        color: msg.isError ? "rgba(252,165,165,0.9)" : "rgba(255,255,255,0.85)",
                        fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                )}

                {msg.role === "user" && (
                  <div
                    className="max-w-[85%] px-4 py-3 rounded-2xl rounded-br-sm text-sm leading-relaxed text-white"
                    style={{
                      background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                      boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    {msg.text}
                  </div>
                )}

                <span className="text-white/20 text-[10px] px-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {formatTime(msg.timestamp)}
                </span>
              </motion.div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-end gap-2"
              >
                <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}>
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-2"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-blue-400/60 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                  <span className="text-white/30 text-xs ml-1" style={{ fontFamily: "'Sora', sans-serif" }}>Thinking...</span>
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="px-4 py-3 flex gap-2"
            style={{ borderTop: "1px solid rgba(96,165,250,0.1)", background: "rgba(0,0,0,0.2)" }}
          >
            <div
              className="flex-1 flex items-center gap-2 rounded-2xl px-4 py-2.5"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
                placeholder="Ask about financial claims or news..."
                className="flex-1 bg-transparent text-white placeholder:text-white/25 focus:outline-none text-sm"
                style={{ fontFamily: "'Sora', sans-serif" }}
              />
            </div>
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
              style={{
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                boxShadow: input.trim() ? "0 4px 15px rgba(99,102,241,0.4)" : "none"
              }}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}