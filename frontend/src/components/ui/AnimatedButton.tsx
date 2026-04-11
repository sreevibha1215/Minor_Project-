"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
  iconSrc?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'navbar';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text = "Get Started",
  iconSrc = "https://cdn.prod.website-files.com/692877de6096025570de1dac/6957be41e4e089c5e53fb3e4_arrow-right.svg",
  className,
  variant = 'primary',
  ...props
}) => {
  const isPrimary = variant === 'primary' || variant === 'navbar';
  
  return (
    <Button
      variant="ghost"
      className={cn(
        "group relative overflow-hidden rounded-full border transition-all duration-300 ease-in-out px-[1.2rem] py-6 sm:px-8 transform-gpu hover:-translate-y-0.5 active:translate-y-0",
        variant === 'navbar' ? 'border-white/20 bg-white/5 hover:bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_20px_rgba(0,0,0,0.35)]' :
        isPrimary 
          ? 'border-white/15 bg-[#ffffff12] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.35)] hover:bg-[#ffffff18] text-white'
          : 'border-white/10 bg-transparent hover:bg-white/5 text-white/90',
        className
      )}
      {...props}
    >
      {/* The diamond background overlay effect (webflow .bg-daimond-16) */}
      <div className={cn(
        "absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
        "bg-[url('https://cdn.prod.website-files.com/692877de6096025570de1dac/69975ec25be93d7ec3f4412d_After%2011.json')] bg-cover bg-no-repeat", 
        // We will make a css class .bg-daimond-pattern in globals.css as a fallback
        "bg-daimond-pattern"
      )} />
      
      <span className="relative z-10 flex flex-row items-center font-medium w-full text-[15px] tracking-wide">
        <div className="relative h-5 overflow-hidden grow px-1">
          <motion.div
            className="flex flex-col h-[200%]"
            initial={{ y: "0%" }}
            whileHover={{ y: "-50%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // smooth easeOut
          >
            <span className="h-1/2 flex items-center justify-start">{text}</span>
            <span className="h-1/2 flex items-center justify-start">{text}</span>
          </motion.div>
        </div>
        
        {iconSrc && (
          <motion.img
            src={iconSrc}
            alt="arrow"
            className={cn(
              "w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1 shrink-0 ml-2",
              isPrimary ? "brightness-0 invert" : ""
            )}
          />
        )}
      </span>
    </Button>
  );
};
