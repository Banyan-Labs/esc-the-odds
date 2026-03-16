"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CAROUSEL_IMAGES, CAROUSEL_INTERVAL_MS } from "@/lib/constants/home";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[95vh] flex-col items-center justify-center overflow-hidden bg-black pt-24 pb-12">
      {/* Cinematic Background Slider */}
      <div className="absolute inset-0 z-0 select-none">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <Image
              src={CAROUSEL_IMAGES[currentImageIndex]}
              alt="Aaron Smith presenting at a reentry education event"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/assets/logo-notxt.png"
              alt="Escape The Odds"
              width={80}
              height={80}
              className="mx-auto mb-6 h-20 w-auto object-contain"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading mb-8 text-5xl leading-[0.9] tracking-tighter text-white md:text-8xl lg:text-9xl">
              ESCAPING THE ODDS <br />
              <span className="text-gold">OF RECIDIVISM</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-gold font-heading mx-auto mb-4 max-w-md text-lg tracking-widest uppercase md:text-xl">
              A Documentary-Based Reentry Education & Collective Impact Series
            </p>
            <p className="text-cream mx-auto mb-12 max-w-3xl font-sans text-xl leading-relaxed font-light opacity-90 md:text-2xl">
              Escape The Odds integrates documentary, facilitated dialogue, and structured
              curriculum to strengthen accountability, economic mobility, and practical reentry
              preparation inside correctional institutions and across community systems.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Link
              href="#the-film"
              className="font-heading group flex w-full items-center justify-center rounded-none border-2 border-white px-10 py-5 text-xl text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
            >
              WATCH THE TRAILER
            </Link>

            <Link
              href="/contact"
              className="bg-gold font-heading group flex w-full items-center justify-center rounded-none px-10 py-5 text-2xl text-black transition-all duration-300 hover:bg-white sm:w-auto"
            >
              HOST THE FILM
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Tagline (Fade in later) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-12"
          >
            <p className="text-cream text-base tracking-[0.3em] uppercase md:text-lg">
              Rewrite the Narrative. Master the Transition.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="bg-cream h-16 w-px" />
      </motion.div>
    </section>
  );
}
