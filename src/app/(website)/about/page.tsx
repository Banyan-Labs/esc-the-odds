"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FounderSection } from "@/components/FounderSection";
import { MediaPress } from "@/components/sections/MediaPress";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 grayscale">
          <Image
            src="/assets/Image_4.jpeg"
            alt="About Escape The Odds"
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
                THE MOVEMENT
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                EM<span className="text-gold">POWER</span>ING MEN AND WOMEN TO{" "}
                <br />
                <span className="text-gold">ESCAPE</span> THE ODDS.
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Escape The Odds was forged from the raw reality of the reentry
              experience. We recognized that most programs offer surface-level
              support when what&apos;s needed is a complete economic blueprint.
              We use documentary storytelling to rewrite the narrative &mdash;
              and structured implementation to rebuild the path.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Line */}
      <section className="py-20 bg-charcoal border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-3xl md:text-5xl font-heading text-white leading-tight">
              OVER{" "}
              <span className="text-gold">400+ JUSTICE-INVOLVED STUDENTS</span>{" "}
              SERVED IN THE LAST 2 YEARS ACROSS{" "}
              <span className="text-gold">10+ STATES.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <FounderSection />
      <MediaPress />

      <Footer />
    </main>
  );
}
