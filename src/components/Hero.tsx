"use client";

import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

// Helper for letter-by-letter animation
const SplitText = ({ text }: { text: string }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Content wrapper */}
      <div className="z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-brand-teal text-xs md:text-sm font-mono uppercase tracking-widest">
            Hello, I&apos;m
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-sans tracking-tight text-foreground/90 drop-shadow-2xl leading-tight mb-3">
          <SplitText text="M Humair Razaq" />
        </h1>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-sans tracking-tight leading-tight mb-10">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground via-brand-teal to-brand-teal">
            <SplitText text="Full Stack Engineer" />
          </span>
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-4"
        >
          <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Crafting scalable web applications and digital experiences through innovative full-stack development.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-white/50 font-mono">Scroll</span>
        <motion.div 
          className="w-px h-12 bg-linear-to-b from-brand-teal to-transparent"
          animate={{ 
            scaleY: [0, 1, 0],
            originY: [0, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
}
