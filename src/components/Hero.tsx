"use client";

import { motion } from "framer-motion";
import { ArrowRight, User, GraduationCap, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0f2b46] pt-24 pb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/assets/HeroImage.png"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2b46]/90 via-[#0f2b46]/60 to-[#0f2b46]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
      </div>

      <div className="container mx-auto relative z-10 px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-white/5 rounded-full border border-primary/20 backdrop-blur-sm">
              Education • Media • Opportunity
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-6">
              Rewrite The{" "}
              <span className="text-primary block md:inline">Narrative</span>
            </h1>
          </motion.div>

          {/* Subheadline - Story focused */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white font-medium leading-relaxed mb-12 drop-shadow-md">
              Every person deserves a second chance. Whether you're reclaiming
              your future, giving back, or leading change—your journey starts
              here.
            </p>
          </motion.div>

          {/* 3 Persona Paths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12"
          >
            {/* Student Persona */}
            <Link href="/join" className="group">
              <div className="h-full p-8 rounded-3xl bg-[#0f2b46]/80 backdrop-blur-md border border-white/20 hover:bg-[#0f2b46] hover:border-primary/50 transition-all duration-300 text-left flex flex-col relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-primary -translate-x-4 group-hover:translate-x-0 transition-transform" />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Student</h3>
                <p className="text-gray-200 text-sm mb-4 flex-grow">
                  I'm looking for resources, education, and a fresh start.
                </p>
                <span className="text-primary font-bold text-sm tracking-wide">
                  START JOURNEY
                </span>
              </div>
            </Link>

            {/* Organization Persona */}
            <Link href="/partner" className="group">
              <div className="h-full p-8 rounded-3xl bg-[#0f2b46]/80 backdrop-blur-md border border-white/20 hover:bg-[#0f2b46] hover:border-primary/50 transition-all duration-300 text-left flex flex-col relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-primary -translate-x-4 group-hover:translate-x-0 transition-transform" />
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Organization
                </h3>
                <p className="text-gray-200 text-sm mb-4 flex-grow">
                  I represent a DOC or facility and want to implement this
                  program.
                </p>
                <span className="text-blue-400 font-bold text-sm tracking-wide">
                  PARTNER WITH US
                </span>
              </div>
            </Link>

            {/* Supporter Persona */}
            <Link href="/donate" className="group">
              <div className="h-full p-8 rounded-3xl bg-[#0f2b46]/80 backdrop-blur-md border border-white/20 hover:bg-[#0f2b46] hover:border-primary/50 transition-all duration-300 text-left flex flex-col relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-primary -translate-x-4 group-hover:translate-x-0 transition-transform" />
                </div>
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Supporter
                </h3>
                <p className="text-gray-200 text-sm mb-4 flex-grow">
                  I believe in the mission and want to help by donating.
                </p>
                <span className="text-green-400 font-bold text-sm tracking-wide">
                  GIVE SUPPORT
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
