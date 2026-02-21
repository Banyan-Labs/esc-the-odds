"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      {/* Cinematic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              NEXT STEPS
            </span>
            <h2 className="text-5xl md:text-7xl font-heading text-white tracking-tight">
              READY TO <span className="text-gold">TAKE ACTION?</span>
            </h2>
          </div>

          <p className="text-xl text-cream/70 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Whether you're looking for partnership, program information, or have
            a question, we're here to help you bounce forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link
              href="/contact"
              className="group w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-gold text-black text-xl font-heading hover:bg-white transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              GET IN TOUCH
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="mailto:admin@escapetheodds.com"
              className="w-full sm:w-auto flex items-center justify-center px-10 py-5 border-2 border-white text-white text-xl font-heading hover:bg-white hover:text-black transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-3" />
              EMAIL US
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
