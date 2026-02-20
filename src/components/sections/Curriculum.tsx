"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const coursePoints = [
  "15-Session Evidence-Based Framework",
  "The 'Bounce Forward Plan' Workbook",
  "Mastering Personal Reentry Plans",
  "Structured Facilitation Guides",
  "Vocational & Entrepreneurial Mastery",
  "Mindset Architecture & Habit Loops",
];

export function Curriculum() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Left Visual (Product Showcase) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative aspect-square w-full"
          >
            <div className="relative w-full h-full p-8 md:p-16">
              {/* Product Background Plate */}
              <div className="absolute inset-0 bg-charcoal/50 border border-white/5 rotate-3 -z-10" />

              <div className="relative w-full h-full shadow-2xl shadow-gold/20">
                <Image
                  src="/assets/HeroImage.png" // Placeholder, ideally specific workbook image
                  alt="Bounce Forward Plan Curriculum"
                  fill
                  className="object-cover border-4 border-black"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>

              {/* Tag Overlays */}
              <div className="absolute top-12 right-0 bg-gold text-black px-4 py-2 font-heading text-sm shadow-xl">
                REENTRY MASTERY
              </div>
              <div className="absolute bottom-20 -left-4 bg-white text-black px-4 py-2 font-heading text-sm shadow-xl">
                15 SESSIONS
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-10"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                THE CURRICULUM
              </span>
              <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
                BOUNCE FORWARD <br />
                <span className="text-gold">PLAN.</span>
              </h2>
            </div>

            <p className="text-xl text-cream font-light leading-relaxed opacity-90">
              Mastering your reentry isn't about getting back to where you
              were—it's about building a foundation to go further than you've
              ever been.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coursePoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 text-cream/70 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                  <span className="font-sans font-medium text-sm md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <button className="px-10 py-5 bg-gold text-black font-heading text-xl hover:bg-white transition-all duration-300 shadow-xl shadow-gold/10">
                GET THE CURRICULUM
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
