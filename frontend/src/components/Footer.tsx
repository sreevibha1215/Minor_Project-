"use client";

import Link from "next/link";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export function Footer() {
  return (
    <footer className="bg-[#050510] text-white">
      <div className="border-t border-white/5">
        <section className="relative py-24">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 mb-6 backdrop-blur-md">
              <img
                src="https://cdn.prod.website-files.com/692877de6096025570de1dac/6957d639ac43dd49eb71e622_CTA%20Icon.svg"
                alt="ready"
                className="w-4 h-4"
              />
              <span className="text-xs uppercase tracking-widest text-white/70">Ready to work smarter?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
              Take control of your tasks. <br /> Let AI handle the rest.
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10">
              Join thousands of professionals using Task AI to automate workflows, boost focus, and get more done in less time.
            </p>

            <AnimatedButton text="Get Started Now" className="min-w-[220px]" />
          </div>
        </section>
      </div>

      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.prod.website-files.com/692877de6096025570de1dac/695815e8e6e4743ca17c8800_52f947842b691a7d3df2fbc449200f0d_Nav%20Logo.svg"
                alt="Infranex Logo"
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold">Infranex.</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                alt="subscriber"
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div className="flex-1">
                <p className="text-sm text-white/80 mb-3">Subscribe our newsletter</p>
                <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none w-full"
                  />
                  <button
                    className="h-8 w-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l6 7-6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-sm font-semibold mb-4">Links</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/about" className="hover:text-white">About us</Link></li>
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/integration" className="hover:text-white">Integrations</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Utility Pages</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link href="/404" className="hover:text-white">404</Link></li>
                <li><Link href="/styleguide" className="hover:text-white">Styleguide</Link></li>
                <li><Link href="/license" className="hover:text-white">License</Link></li>
                <li><Link href="/changelog" className="hover:text-white">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-white/60 mb-6">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms &amp; Condition</Link></li>
              </ul>

              <p className="text-sm font-semibold mb-3">Connect with us:</p>
              <div className="flex items-center gap-3 text-white/70">
                <a className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:text-white" href="#" aria-label="Facebook">
                  <span className="text-sm">f</span>
                </a>
                <a className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:text-white" href="#" aria-label="X">
                  <span className="text-sm">x</span>
                </a>
                <a className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:text-white" href="#" aria-label="Instagram">
                  <span className="text-sm">◎</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
