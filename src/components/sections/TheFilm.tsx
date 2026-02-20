"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export function TheFilm() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                THE FILM
              </span>
              <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
                ESCAPING THE ODDS <br />
                <span className="text-gold">OF RECIDIVISM.</span>
              </h2>
            </div>

            <p className="text-xl text-cream font-light leading-relaxed max-w-xl opacity-90">
              "The judge never said that this debt came with interest you would
              pay for the rest of your life."
            </p>

            <p className="text-lg text-cream/70 font-sans leading-relaxed max-w-xl">
              Our mission spotlights vocational training, second-chance hiring,
              entrepreneurship, and workforce development. We are providing a
              raw, unfiltered look at the systems designed to keep you down—and
              the power of lived experience to break them.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block px-8 py-4 bg-transparent border border-gold text-gold font-heading hover:bg-gold hover:text-black transition-all duration-300"
              >
                LEARN ABOUT THE MISSION
              </Link>
            </div>
          </motion.div>

          {/* Right Visual (Image/Video Placeholder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative aspect-video w-full group cursor-pointer"
          >
            <div className="absolute inset-0 bg-charcoal rounded-none overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/assets/AaronSpeaking.png"
                alt="The Film Preview"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-black fill-current ml-1" />
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold -z-10 opacity-30 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
