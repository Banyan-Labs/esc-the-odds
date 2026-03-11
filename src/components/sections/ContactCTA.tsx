"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black py-16 md:py-24 lg:py-32">
      {/* Cinematic Background Glow */}
      <div className="bg-gold/5 pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]" />

      <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl space-y-12"
        >
          <div className="space-y-4">
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              NEXT STEPS
            </span>
            <h2 className="font-heading text-4xl leading-tight tracking-tight text-white md:text-6xl">
              READY TO BRING ESCAPE THE ODDS{" "}
              <span className="text-gold">TO YOUR ORGANIZATION?</span>
            </h2>
          </div>

          <p className="text-cream/90 mx-auto max-w-2xl font-sans text-xl leading-relaxed font-light">
            Structured. Facilitated. Institutional-ready. Let&apos;s discuss how the Impact Series
            or Bounce Forward Curriculum can align with your objectives.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
            <Link
              href="/contact"
              className="group bg-gold font-heading flex w-full items-center justify-center px-10 py-5 text-2xl text-black transition-all duration-300 hover:bg-white sm:w-auto"
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              HOST THE FILM
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="font-heading flex w-full items-center justify-center border-2 border-white px-10 py-5 text-2xl text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
            >
              <Mail className="mr-3 h-5 w-5" />
              CONTACT OUR TEAM
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
