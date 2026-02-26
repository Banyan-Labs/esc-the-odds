"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-32 bg-charcoal relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-square w-full border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 group">
              <Image
                src="/assets/AaronSpeaking.png"
                alt="Aaron Smith - Founder of Escape The Odds"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="font-heading text-3xl text-white tracking-widest uppercase">
                  AARON SMITH
                </p>
                <p className="text-gold font-heading tracking-[0.3em] text-xs uppercase mt-2">
                  FOUNDER & CEO
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gold/30 -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-10"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                THE GUIDE
              </span>
              <h2 className="text-4xl md:text-6xl font-heading text-white leading-[0.9] tracking-tighter">
                YOUR STRUGGLE IS <br />
                <span className="text-gold">YOUR STRENGTH.</span>
              </h2>
            </div>

            <p className="text-xl text-cream/70 font-sans font-light leading-relaxed">
              &ldquo;I didn&apos;t build Escape The Odds to tell my story. I built it
              because I realized that for too long, we&apos;ve been taught to survive
              the system rather than master the transition. I&apos;ve walked the
              corridors of incarceration, and I&apos;ve architected the roadmap out.
              Now, I&apos;m handing you the blueprint.&rdquo;
            </p>

            <div className="space-y-4 border-l border-gold/50 pl-8 relative">
              <Quote className="w-8 h-8 text-gold/20 absolute -left-4 -top-4 opacity-50" />
              <p className="text-cream font-sans italic text-lg leading-relaxed">
                &ldquo;We provide the education and opportunity that was missing
                for so many of us. The blueprint starts here.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
