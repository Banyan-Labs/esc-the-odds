"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Film,
  MessageCircle,
  BookOpen,
  Users,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const included = [
  {
    icon: Film,
    title: "THE FILM EXPERIENCE",
    description:
      "Structured screening of the Escape The Odds documentary as the narrative foundation for transformation.",
  },
  {
    icon: MessageCircle,
    title: "GUIDED DISCUSSION & REFLECTION",
    description:
      "Facilitated conversations that turn narrative into personal action and accountability.",
  },
  {
    icon: BookOpen,
    title: "BOUNCE FORWARD PLAN WORKBOOK",
    description:
      "A comprehensive workbook guiding participants through goal-setting, financial planning, and life architecture.",
  },
  {
    icon: Users,
    title: "ACCOUNTABILITY STRUCTURE",
    description:
      "Peer-to-peer support and facilitator check-ins that keep participants engaged and progressing.",
  },
];

const audiences = [
  "Correctional Facilities",
  "Workforce Development Boards",
  "Community Organizations",
  "Government Reentry Departments",
  "Faith-Based Institutions",
  "Nonprofit Partners",
];

export default function LiveCohortPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 grayscale">
          <Image
            src="/assets/Image_1.jpeg"
            alt="Live Cohort Program"
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
                LIVE COHORT PROGRAM
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                5-WEEK FACILITATED{" "}
                <span className="text-gold">TRANSFORMATION.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed italic">
              &ldquo;The curriculum is not a downloadable product&mdash;it is an
              institutional, facilitated experience that includes the
              film.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <span className="text-gold font-heading tracking-widest text-sm uppercase mb-4 block">
              THE EXPERIENCE
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
              WHAT&apos;S <span className="text-gold">INCLUDED.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
            {included.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-10 space-y-6 group hover:bg-charcoal/50 transition-colors duration-500 ${
                  index < 2 ? "border-b border-white/10" : ""
                } ${index % 2 === 0 ? "md:border-r border-white/10" : ""}`}
              >
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center text-gold border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading text-white tracking-tight group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-cream/60 font-sans font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Format Details */}
      <section className="py-32 bg-charcoal border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-gold font-heading tracking-widest text-sm uppercase">
                  FORMAT
                </span>
                <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
                  HOW IT <span className="text-gold">WORKS.</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <h4 className="font-heading tracking-widest text-xs text-white uppercase">
                      DELIVERY
                    </h4>
                  </div>
                  <p className="text-cream/70 font-sans font-light leading-relaxed pl-5">
                    Facilitated in-person over 5 weeks within your institution.
                    Each session builds on the previous, creating a structured
                    arc of transformation.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <h4 className="font-heading tracking-widest text-xs text-white uppercase">
                      INSTITUTIONAL READY
                    </h4>
                  </div>
                  <p className="text-cream/70 font-sans font-light leading-relaxed pl-5">
                    Designed for deployment within correctional facilities,
                    reentry organizations, workforce development boards, and
                    community programs.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <h4 className="font-heading tracking-widest text-xs text-white uppercase">
                      FILM INCLUDED
                    </h4>
                  </div>
                  <p className="text-cream/70 font-sans font-light leading-relaxed pl-5">
                    The documentary screening is an integral part of the
                    program&mdash;not an add-on. It serves as the narrative
                    foundation for every session.
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
                  src="/assets/Image_6.jpeg"
                  alt="Live Cohort in Action"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold font-heading tracking-widest text-sm uppercase mb-4 block">
              WHO IT&apos;S FOR
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
              BUILT FOR <span className="text-gold">INSTITUTIONS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10 max-w-4xl mx-auto">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`p-8 flex items-center gap-4 group hover:bg-charcoal/50 transition-colors duration-500 border-white/10 ${
                  index < 3 ? "border-b" : ""
                } ${index % 3 !== 2 ? "lg:border-r" : ""}`}
              >
                <CheckCircle className="w-5 h-5 text-gold/40 group-hover:text-gold transition-colors shrink-0" />
                <span className="font-heading text-white text-sm tracking-widest uppercase group-hover:text-gold transition-colors">
                  {audience}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduation Gallery */}
      <section className="py-32 bg-charcoal border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              REAL RESULTS
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white">
              GRADUATES IN <span className="text-gold">ACTION.</span>
            </h2>
            <p className="text-lg text-cream/60 font-sans font-light">
              Our cohort graduates receive certificates of completion and leave
              with the tools to build their futures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {[
              {
                src: "/assets/Image_13.jpeg",
                alt: "Full cohort holding certificates",
                caption: "Cohort Graduation",
              },
              {
                src: "/assets/Image_15.jpeg",
                alt: "Aaron presenting certificate to graduate",
                caption: "Certificate Presentation",
              },
              {
                src: "/assets/Image_16.jpeg",
                alt: "Aaron shaking hands with graduate",
                caption: "Graduate Recognition",
              },
              {
                src: "/assets/Image_17.jpeg",
                alt: "Aaron presenting certificates to graduate",
                caption: "Program Completion",
              },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative aspect-[3/4] group overflow-hidden ${
                  i < 3 ? "lg:border-r border-white/10" : ""
                } ${i < 2 ? "sm:border-r border-white/10" : ""}`}
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
              READY TO <span className="text-gold">BEGIN?</span>
            </h2>
            <p className="text-lg text-cream/60 font-sans font-light leading-relaxed">
              Bring the Live Cohort Program to your organization. Contact us to
              learn about implementation, pricing, and scheduling.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-gold text-black font-heading tracking-widest text-sm uppercase hover:bg-white transition-colors group"
            >
              INQUIRE ABOUT THIS PROGRAM
              <ArrowUpRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
