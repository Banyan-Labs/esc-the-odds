"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen, Video, Layers } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Clock,
    title: "SELF-PACED MODULES",
    description: "Work through the program at your own pace, on your own schedule.",
  },
  {
    icon: Video,
    title: "LIVE ZOOM SESSIONS",
    description: "Regular live Zoom meetings for guidance, accountability, and real-time support.",
  },
  {
    icon: BookOpen,
    title: "CURRICULUM INCLUDED",
    description: "Full Bounce Forward Plan workbook and guided reflection materials.",
  },
  {
    icon: Layers,
    title: "BUILT FOR INDIVIDUALS",
    description: "Designed for individuals ready to take ownership of their transformation journey.",
  },
];

export default function SelfPacedPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/50 to-black" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                SELF-PACED DIGITAL PROGRAM
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                COMING <span className="text-gold">SOON.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              A self-paced digital program for individuals with live Zoom
              sessions for guidance and accountability. Transform on your
              schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="text-gold font-heading tracking-widest text-sm uppercase mb-4 block">
              WHAT TO EXPECT
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
              THE <span className="text-gold">VISION.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-white/10 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-10 space-y-6 border-white/10 ${
                  index < 2 ? "border-b" : ""
                } ${index % 2 === 0 ? "sm:border-r" : ""}`}
              >
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center text-gold border border-gold/20">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-cream/70 font-sans font-light leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-white leading-tight">
              STAY <span className="text-gold">UPDATED.</span>
            </h2>
            <p className="text-lg text-cream/60 font-sans font-light leading-relaxed">
              The self-paced program is currently in development. Contact us to
              stay informed about the launch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-gold text-black font-heading tracking-widest text-sm uppercase hover:bg-white transition-colors group"
            >
              CONTACT US FOR UPDATES
              <ArrowUpRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
