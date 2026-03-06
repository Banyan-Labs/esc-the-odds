"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const inquiryOptions = [
  "HOST THE ESCAPING THE ODDS DOCUMENTARY – IMPACT SERIES",
  "LICENSE THE BOUNCE FORWARD PLAN CURRICULUM",
  "EXPLORE VOCATIONAL PATHWAYS",
  "INDIVIDUAL LEARNING (BOOKS & COURSES)",
  "MEDIA / PRESS",
  "GENERAL INQUIRY",
];

const timelineOptions = [
  "WITHIN 30 DAYS",
  "1–3 MONTHS",
  "3–6 MONTHS",
  "6+ MONTHS",
  "EXPLORING OPTIONS",
];

const roleOptions = [
  "FINAL DECISION MAKER",
  "KEY INFLUENCER",
  "RESEARCHER / EVALUATOR",
  "OTHER",
];

const selectClasses =
  "flex h-14 w-full rounded-none border border-white/10 bg-black/50 px-4 py-2 text-sm text-cream focus:ring-1 focus:ring-gold outline-none appearance-none cursor-pointer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-10 grayscale">
          <Image
            src="/assets/Image_16.jpeg"
            alt="Contact Background"
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
                CONTACT
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                CONTACT ESCAPE <span className="text-gold">THE ODDS</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Structured Engagement Begins with Clear Alignment
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-16"
            >
              <div className="space-y-8">
                <p className="text-xl text-cream/60 font-sans font-light leading-relaxed">
                  Escape The Odds partners with institutions, organizations, and
                  leaders committed to structured reentry education and economic
                  empowerment. Select the option below so we can route your
                  inquiry appropriately.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading tracking-widest text-xs text-cream/60 uppercase">
                      MEDIA / PRESS
                    </h4>
                    <p className="text-sm text-cream/50 font-sans">
                      For interviews, speaking, and press:
                    </p>
                    <a
                      href="mailto:info@escapetheodds.com"
                      className="text-2xl font-heading text-white hover:text-gold transition-colors block"
                    >
                      info@escapetheodds.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-charcoal/50 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading tracking-widest text-xs text-cream/60 uppercase">
                      HEADQUARTERS
                    </h4>
                    <p className="text-xl font-heading text-white">
                      CHICAGO, ILLINOIS &bull; USA
                    </p>
                  </div>
                </div>
              </div>

              {/* Individual Learners Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 border border-gold/20 bg-gold/5 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-gold" />
                  <h4 className="font-heading tracking-widest text-xs text-gold uppercase">
                    INDIVIDUAL LEARNERS
                  </h4>
                </div>
                <p className="text-cream/60 font-sans leading-relaxed">
                  For books and self-paced courses, please visit our learning
                  platform.
                </p>
                <Link
                  href="/programs/self-paced"
                  className="inline-flex items-center text-gold font-heading text-sm tracking-widest uppercase border-b border-gold pb-1 hover:text-white hover:border-white transition-all group"
                >
                  EXPLORE INDIVIDUAL LEARNING
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7 bg-charcoal p-12 lg:p-16 border border-white/5 shadow-2xl"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
                  <CheckCircle2 className="w-16 h-16 text-gold" />
                  <h3 className="text-3xl font-heading text-white">
                    MESSAGE RECEIVED
                  </h3>
                  <p className="text-cream/70 text-lg max-w-md">
                    Thank you for reaching out. Our team will respond within 48
                    hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-heading text-white mb-12 tracking-tight underline decoration-gold/30 underline-offset-8">
                    INQUIRY FORM
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label
                          htmlFor="fullName"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="fullName"
                          className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                          placeholder="ENTER FULL NAME"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="email"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                          placeholder="EMAIL@ORGANIZATION.ORG"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label
                          htmlFor="phone"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="orgName"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Organization Name
                        </Label>
                        <Input
                          id="orgName"
                          className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                          placeholder="YOUR ORGANIZATION"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label
                          htmlFor="titleRole"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Title / Role
                        </Label>
                        <Input
                          id="titleRole"
                          className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                          placeholder="YOUR TITLE"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="cityState"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          City / State
                        </Label>
                        <Input
                          id="cityState"
                          className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                          placeholder="CHICAGO, IL"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="programInterest"
                        className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                      >
                        Program of Interest
                      </Label>
                      <select id="programInterest" className={selectClasses}>
                        {inquiryOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label
                          htmlFor="timeline"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Estimated Timeline
                        </Label>
                        <select id="timeline" className={selectClasses}>
                          <option value="">SELECT TIMELINE</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="decisionRole"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Decision-Making Role
                        </Label>
                        <select id="decisionRole" className={selectClasses}>
                          <option value="">SELECT ROLE</option>
                          {roleOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="notes"
                        className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                      >
                        Additional Notes
                      </Label>
                      <Textarea
                        id="notes"
                        className="bg-black/50 border-white/10 rounded-none min-h-[180px] text-cream focus:border-gold transition-colors"
                        placeholder="ANYTHING ELSE WE SHOULD KNOW?"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-10 bg-gold text-black font-heading text-xl rounded-none hover:bg-white transition-all shadow-[0_10px_40px_rgba(223,176,90,0.1)] group"
                    >
                      SEND MESSAGE{" "}
                      <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
