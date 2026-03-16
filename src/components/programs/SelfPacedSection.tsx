"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SelfPacedSection() {
  return (
    <section
      id="self-paced"
      className="bg-charcoal border-b border-white/5 py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              SELF PACED
            </span>
            <h2 className="font-heading text-4xl text-white md:text-6xl">
              DIGITAL <span className="text-gold">LEARNING</span>
            </h2>
            <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
              Our{" "}
              <span className="font-medium text-white">Non-CDL Box Truck self paced course</span> is
              our only self paced digital course, available through our learning platform. Designed
              for individuals accessing Escape The Odds content outside of institutional
              programming.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <a
              href="https://courses.escapetheodds.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold font-heading group inline-flex items-center justify-center px-8 py-4 text-base tracking-widest text-black uppercase transition-all duration-300 hover:bg-white"
            >
              EXPLORE THE SELF PACED COURSE
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
