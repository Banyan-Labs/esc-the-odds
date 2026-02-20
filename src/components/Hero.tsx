"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, User, GraduationCap, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages = [
  "/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png",
  "/assets/carousel/PINK-SUIT-PODCAST-SHOOT.png",
  "/assets/carousel/SPEAKING-A-COMPARISON.png",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-black pt-24 pb-12">
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
              src={carouselImages[currentImageIndex]}
              alt="Escape the Odds Cinematic"
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

      <div className="container mx-auto relative z-10 px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading text-white leading-[0.9] mb-8 tracking-tighter">
              REWRITE THE <br />
              <span className="text-gold">NARRATIVE.</span> <br />
              MASTER THE <br />
              <span className="text-gold">TRANSITION.</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-cream font-sans font-light leading-relaxed mb-12 opacity-90">
              Bounce Forward through the power of lived experience, workforce
              development, and financial empowerment.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/booking"
              className="w-full sm:w-auto px-10 py-5 bg-gold text-black font-heading text-xl rounded-none hover:bg-white transition-all duration-300 flex items-center justify-center group"
            >
              BOOK A SCREENING
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="w-full sm:w-auto px-10 py-5 border-2 border-white text-white font-heading text-xl rounded-none hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group">
              WATCH THE TRAILER
            </button>
          </motion.div>

          {/* Secondary Tagline (Fade in later) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-12 space-y-4"
          >
            <p className="text-sm md:text-base tracking-[0.3em] text-cream uppercase">
              Empowering Men and Women to Escape the Odds.
            </p>
            <p className="text-xs tracking-[0.2em] text-gold uppercase opacity-80">
              CHANGE YOUR MINDSET. CHANGE YOUR LIFE.
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
        <div className="w-px h-16 bg-cream" />
      </motion.div>
    </section>
  );
}
