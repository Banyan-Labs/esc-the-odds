"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function DocumentarySection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image / Placeholder for Trailer */}
      <div className="absolute inset-0 bg-[#0f2b46] opacity-60">
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary uppercase border border-primary rounded-full">
            Coming Soon
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Escape the Odds
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-500 font-serif italic">
              The Documentary
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
            A raw, unfiltered look at the systems designed to keep you down—and
            the people who found the courage to break them.
          </p>

          <Link
            href="https://link.gohighlevel.com/widget/booking/YOUR_DOCUMENTARY_FUNNEL_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-white rounded-full hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            <Play className="w-5 h-5 mr-3 fill-current" />
            Watch Trailer / Access Film
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
