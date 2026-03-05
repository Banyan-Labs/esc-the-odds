"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MissionSection } from "@/components/MissionSection";
import { FounderSection } from "@/components/FounderSection";
import { MediaPress } from "@/components/sections/MediaPress";
import { motion } from "framer-motion";
import { Target, Users, BarChart, ShieldCheck } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Lives Impacted", value: "1,000+", icon: Users },
  { label: "Facilities Partnered", value: "15+", icon: Target },
  { label: "Course Graduates", value: "450+", icon: BarChart },
  { label: "Programs Delivered", value: "20+", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 grayscale">
          <Image
            src="/assets/Image_4.jpeg"
            alt="Impact Mission"
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
                THE MISSION
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                EM<span className="text-gold">POWER</span>ING MEN AND WOMEN TO <br />
                <span className="text-gold">ESCAPE</span> THE ODDS.
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed italic">
              &ldquo;We don&rsquo;t just teach skills; we blueprint the
              transition from incarceration to independence.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Visual */}
      <section className="py-16 bg-charcoal border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Image
              src="/assets/Image_2.jpeg"
              alt="Formerly incarcerated entrepreneurs are 33% less likely to recidivate and 45% more likely to become entrepreneurs"
              width={800}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 flex flex-col items-center text-center space-y-4 group hover:bg-black/40 transition-colors duration-500 ${
                  i !== stats.length - 1
                    ? "lg:border-r border-white/10 border-b lg:border-b-0"
                    : ""
                }`}
              >
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold mb-2 border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-heading text-white mb-1 group-hover:text-gold transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-heading tracking-[0.2em] text-cream/60 uppercase">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MissionSection />

      {/* The Story Section */}
      <section className="py-32 bg-black overflow-hidden relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-gold font-heading tracking-widest text-sm uppercase">
                  THE ORIGIN
                </span>
                <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
                  BUILDING THE <br />
                  <span className="text-gold">BLUEPRINT.</span>
                </h2>
              </div>

              <div className="space-y-6 text-xl text-cream/70 font-sans font-light leading-relaxed">
                <p>
                  Escape The Odds was forged from the raw reality of the reentry
                  experience. We recognized that most programs offered
                  surface-level support when what was needed was a complete{" "}
                  <strong>Economic Blueprint.</strong>
                </p>
                <p>
                  By distilling complex industries like Trucking and Real Estate
                  into actionable, high-impact curriculum, we provide the bridge
                  between incarceration and independence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <h4 className="font-heading tracking-widest text-xs text-white uppercase">
                      WORKFORCE DEVELOPMENT
                    </h4>
                  </div>
                  <p className="text-sm text-cream/70 pl-5">
                    Accelerated pathways into high-demand industries through
                    structured training.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <h4 className="font-heading tracking-widest text-xs text-white uppercase">
                      FINANCIAL EMPOWERMENT
                    </h4>
                  </div>
                  <p className="text-sm text-cream/70 pl-5">
                    Building generational stability through structured financial
                    education and wealth-building strategies.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative aspect-square w-full border border-white/10 shadow-2xl">
                <Image
                  src="/assets/Image_1.jpeg"
                  alt="Aaron teaching in correctional facility"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
              </div>
              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* In The Community */}
      <section className="py-32 bg-charcoal border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              IN THE COMMUNITY
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white">
              BEYOND THE <span className="text-gold">CLASSROOM.</span>
            </h2>
            <p className="text-lg text-cream/60 font-sans font-light">
              Speaking engagements, community events, and public conversations
              that extend the mission beyond facility walls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
            {[
              {
                src: "/assets/Image_10.jpeg",
                alt: "Aaron speaking with microphone at Chicago Public Library",
                caption: "Library Speaking Event",
              },
              {
                src: "/assets/Image_11.jpeg",
                alt: "Aaron speaking at community panel",
                caption: "Community Panel",
              },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative aspect-[4/5] group overflow-hidden ${
                  i === 0 ? "md:border-r border-white/10" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-heading tracking-[0.2em] text-gold uppercase">
                    {img.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FounderSection />
      <MediaPress />

      <Footer />
    </main>
  );
}
