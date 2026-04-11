"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlotNumberProps {
  value: number | string;
  delay?: number;
}

const SlotNumber: React.FC<SlotNumberProps> = ({ value, delay = 0 }) => {
  const numberValue = Number(value);
  const isNumber = !isNaN(numberValue) && value !== " " && value !== "";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  if (!isNumber) {
    return <span className="inline-block text-4xl md:text-5xl font-bold tracking-tight leading-none tabular-nums">{value}</span>;
  }

  // Create array from 0 to target number for the slot effect
  const arr = Array.from({ length: 11 }, (_, i) => i % 10);
  // Ensure the target number is at the end of our slot strip
  const targetIndex = arr.lastIndexOf(numberValue);

  return (
    <div ref={ref} className="relative overflow-hidden h-[56px] md:h-[72px] inline-flex items-center text-4xl md:text-6xl font-bold tracking-[-0.02em] leading-none tabular-nums text-white">
      <motion.div
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={isInView ? { y: `-${(targetIndex * 100) / arr.length}%` } : { y: 0 }}
        transition={{ 
          duration: 2.5, 
          delay: delay, 
          ease: [0.22, 1, 0.36, 1] // Custom ease out simulating slot machine slowdown
        }}
      >
        {arr.map((num, i) => (
          <span key={i} className="flex h-[56px] md:h-[72px] items-center justify-center leading-none">
            {num}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

interface SlotCounterProps {
  value: string; // e.g. "$25M+", "20+", "90%"
  label?: string;
  className?: string;
}

export const SlotCounter: React.FC<SlotCounterProps> = ({ value, label, className }) => {
  const chars = value.split("");

  return (
    <div className={cn("flex flex-col w-full px-6 py-6 border-l border-white/10 first:border-0", className)}>
      {label && (
        <span className="text-white/60 text-sm md:text-base mb-4 font-medium tracking-wide">
          {label}
        </span>
      )}
      <div className="flex items-center flex-row">
        {chars.map((char, index) => (
          <SlotNumber key={index} value={char} delay={0.1 * index} />
        ))}
      </div>
    </div>
  );
};
