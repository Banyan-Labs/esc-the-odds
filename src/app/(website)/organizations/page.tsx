"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Film,
  BookOpen,
  Briefcase,
  ArrowRight,
  MessageSquare,
  Mail,
} from "lucide-react";
import Image from "next/image";

const engagementModels = [
  {
    icon: Film,
    title: "Escape The Odds of Recidivism Film – Impact Series",
    description:
      "A documentary-based hosting engagement designed to activate reflection, dialogue, and forward planning.",
    includes: [
      "Full 85-minute documentary screening",
      "Moderated dialogue + audience Q&A (panel style with Producer Aaron Smith and justice-impacted leaders as scheduled)",
      "50 Bounce Forward workbooks distributed locally for participant activation",
    ],
    cta: "Request Impact Series Consultation",
    href: "/contact",
    image: "/assets/Image_4.jpeg",
    imageAlt: "Facilitated group session with participants",
  },
  {
    icon: BookOpen,
    title: "Bounce Forward Plan: Mastering Your Reentry – Curriculum License",
    description:
      "A 15-session institutional-ready reentry education framework designed for structured implementation.",
    label: "License includes:",
    includes: [
      "Documentary integration",
      "Participant workbooks",
      "Facilitation guides",
      "Community Engagement SME toolkit",
      "Evaluation & reporting framework",
    ],
    note: "Designed for: Departments of Corrections, county jails, community corrections, reentry-focused organizations.",
    cta: "Inquire About Curriculum Licensing",
    href: "/contact",
    image: "/assets/Image_13.jpeg",
    imageAlt: "Program participants with certificates",
  },
  {
    icon: Briefcase,
    title: "Vocational & Economic Empowerment Programs",
    description:
      "Targeted career development and entrepreneurship pathways aligned with reentry preparation.",
    label: "Programs include:",
    includes: [
      "Non-CDL Box Truck Entrepreneurship",
      "Commercial Cleaning Business Program",
      "House Hacking & Real Estate Fundamentals",
    ],
    note: "Available for in-facility or community-based implementation (virtual/live/tablet options as applicable).",
    cta: "Explore Vocational Pathways",
    href: "/programs",
    image: "/assets/Image_8.jpeg",
    imageAlt: "Vocational entrepreneurship program",
  },
];

const whoWeWorkWith = [
  "Correctional Systems",
  "Workforce Development Boards",
  "Employers & HR Teams",
  "Reentry Organizations",
  "Foundations",
  "Libraries & Educational Institutions",
];

export default function OrganizationsPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 grayscale">
          <Image
            src="/assets/Image_7.jpeg"
            alt="Escape The Odds program participants"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/60 to-black" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                FOR ORGANIZATIONS
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-tight tracking-tighter">
                FOR <span className="text-gold">ORGANIZATIONS.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Structured Reentry Education. Institutional Implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-charcoal border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-cream/70 font-sans font-light leading-relaxed max-w-4xl mx-auto text-center"
          >
            Escape The Odds partners with correctional institutions, workforce
            systems, employers, and community organizations committed to
            measurable reintegration outcomes and economic mobility. We
            implement structured engagement models designed for accountability,
            preparation, and scalable delivery.
          </motion.p>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              HOW WE ENGAGE
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white">
              ENGAGEMENT <span className="text-gold">MODELS</span>
            </h2>
          </div>

          <div className="space-y-0 border border-white/10">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row group hover:bg-charcoal/30 transition-colors duration-500 ${
                  index !== engagementModels.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div className="relative md:w-64 lg:w-80 shrink-0 aspect-video md:aspect-auto overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.imageAlt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/30 hidden md:block" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent md:hidden" />
                </div>

                <div className="p-10 md:p-14 flex flex-col md:flex-row gap-10 flex-1">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-gold/10 flex items-center justify-center border border-gold/30 group-hover:bg-gold transition-all duration-300">
                      <model.icon className="w-8 h-8 text-gold group-hover:text-black transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-6 flex-1">
                    <h3 className="text-2xl md:text-3xl font-heading text-white tracking-tight leading-snug">
                      {model.title.toUpperCase()}
                    </h3>

                    <p className="text-cream/60 font-sans leading-relaxed text-lg">
                      {model.description}
                    </p>

                    {model.label && (
                      <p className="text-[10px] font-heading tracking-widest text-gold uppercase">
                        {model.label}
                      </p>
                    )}

                    <ul className="space-y-3">
                      {model.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-cream/70 font-sans text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {model.note && (
                      <p className="text-cream/50 font-sans text-sm italic">
                        {model.note}
                      </p>
                    )}

                    <Link
                      href={model.href}
                      className="inline-flex items-center text-gold font-heading text-sm tracking-widest uppercase border-b border-gold pb-1 hover:text-white hover:border-white transition-all group/link"
                    >
                      {model.cta.toUpperCase()}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-charcoal border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                OUR PARTNERS
              </span>
              <h2 className="text-4xl md:text-6xl font-heading text-white">
                WHO WE <span className="text-gold">WORK WITH</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {whoWeWorkWith.map((item, i) => (
                <span
                  key={i}
                  className="px-6 py-3 border border-white/10 text-xs font-heading tracking-[0.2em] text-cream/70 uppercase hover:border-gold/30 hover:text-gold transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-6"
            >
              <span className="text-gold font-heading tracking-widest text-xs uppercase block mb-6">
                AS SEEN IN
              </span>
              <Image
                src="/assets/CommunityPartners.png"
                alt="Community Partners and Media Features"
                width={1200}
                height={400}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
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
                NEXT STEP
              </span>
              <h2 className="text-4xl md:text-6xl font-heading text-white tracking-tight leading-tight">
                STRUCTURED ENGAGEMENT BEGINS{" "}
                <span className="text-gold">WITH ALIGNMENT.</span>
              </h2>
            </div>

            <p className="text-xl text-cream/70 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Schedule a consultation to determine the appropriate model for
              your organization.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link
                href="/contact"
                className="group w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-gold text-black text-xl font-heading hover:bg-white transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                REQUEST CONSULTATION
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto flex items-center justify-center px-10 py-5 border-2 border-white text-white text-xl font-heading hover:bg-white hover:text-black transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-3" />
                CONTACT OUR TEAM
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
