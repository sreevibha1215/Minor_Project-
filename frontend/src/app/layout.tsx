import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const sora = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FinVerify - Financial Misinformation Detection",
  description: "AI-powered risk-aware financial misinformation detection. Get instant risk scores, harm analysis, and AI-powered explanations.",
  openGraph: {
    title: "FinVerify - Financial Misinformation Detection",
    description: "AI-powered risk-aware financial misinformation detection system.",
    images: ["https://cdn.prod.website-files.com/692877de6096025570de1dac/699766237e187bba46bb56ff_social-share.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} min-h-screen scroll-smooth antialiased`}>
      <head>
        {/* Sora via variable is handled above; this ensures it's also available in inline styles */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body
        className="min-h-screen bg-[#050510] text-[#f4f4f4] overflow-x-hidden flex flex-col pt-0"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}