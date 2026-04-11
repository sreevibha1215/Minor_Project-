"use client";

import { motion } from "framer-motion";

const logos = [
  "69594028c7f2fac7b2231517_Nav%20Logo.svg",
  "6959410ffb1418cf9589576a_Nav%20Logo%2005.svg",
  "6959410f5936cff06d3a9a12_Nav%20Logo%2002.svg",
  "6959410f2378acf2b553a9b3_Nav%20Logo%2001.svg",
  "6959410fb9886a49c1c54a18_Nav%20Logo%2004.svg",
  "6959410f60de1349e7a395af_Nav%20Logo%2003.svg",
  "6959410f227eefa561723996_Nav%20Logo%2006.svg",
];

export function BrandTrust() {
  return (
    <section className="py-20 bg-[#050510] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h3 className="text-sm tracking-[0.32em] p-text-grey uppercase font-medium">
          Trusted by the World&apos;s Largest Companies
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group max-w-7xl mx-auto">
        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-[#050510] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-[#050510] to-transparent pointer-events-none" />

        {/* Animated Row */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-nowrap items-center gap-16 pr-16"
        >
          {/* Duplicate logos to create seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <img
                src={`https://cdn.prod.website-files.com/692877de6096025570de1dac/${logo}`}
                alt={`Brand Logo ${index}`}
                className="h-8 md:h-10 w-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
