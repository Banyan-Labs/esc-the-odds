"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BlogHero() {
  return (
    <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-10 grayscale">
        <Image
          src="/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png"
          alt="Blog Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              THE DISPATCH
            </span>
            <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
              JOURNAL & <br />
              <span className="text-gold">BLUEPRINTS.</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed italic">
            &ldquo;Documentation of the transition, the scaling of the mission,
            and the frameworks for the future.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
