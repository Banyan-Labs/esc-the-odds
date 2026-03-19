"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-black pt-28 pb-16 md:pt-40 md:pb-32">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/assets/IMG_1829.JPG"
          alt="Escape The Odds community and education updates"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black" />

      <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl space-y-8"
        >
          <div className="space-y-4">
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              THE BLUEPRINT
            </span>
            <h1 className="font-heading text-5xl leading-[0.9] tracking-tighter text-white md:text-8xl">
              THE <span className="text-gold">BLUEPRINT.</span>
            </h1>
          </div>
          <p className="text-gold font-heading mx-auto max-w-2xl text-2xl leading-relaxed font-bold tracking-wide md:text-3xl">
            Rebuilding a New Narrative
          </p>
        </motion.div>
      </div>
    </section>
  );
}
