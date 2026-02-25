"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

const subjectOptions = [
  "GENERAL INQUIRY",
  "CURRICULUM LICENSING",
  "FILM SCREENING REQUEST",
  "PARTNERSHIP INQUIRY",
  "PRESS & MEDIA",
  "OTHER",
];

const institutionalSubjects = ["CURRICULUM LICENSING", "FILM SCREENING REQUEST"];

const selectClasses =
  "flex h-14 w-full rounded-none border border-white/10 bg-black/50 px-4 py-2 text-sm text-cream focus:ring-1 focus:ring-gold outline-none appearance-none cursor-pointer";

export default function ContactPage() {
  const [subject, setSubject] = useState("GENERAL INQUIRY");
  const showInstitutionalFields = institutionalSubjects.includes(subject);

  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-10 grayscale">
          <Image
            src="/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png"
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
                THE COLLABORATION DESK
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                START THE <br />
                <span className="text-gold">CONVERSATION.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed italic">
              &ldquo;Every architectural masterpiece begins with a blueprint.
              Let&apos;s draft yours today.&rdquo;
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
                <span className="text-gold font-heading tracking-widest text-xs uppercase">
                  DIRECT CHANNELS
                </span>
                <h2 className="text-4xl md:text-6xl font-heading text-white leading-none">
                  WE ARE HERE <br /> TO GUIDE.
                </h2>
                <p className="text-xl text-cream/60 font-sans font-light leading-relaxed">
                  Whether you&apos;re an institution seeking the curriculum, a
                  potential partner, or a member of the press, our team is ready
                  to respond.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading tracking-widest text-xs text-cream/60 uppercase">
                      EMAIL INQUIRIES
                    </h4>
                    <a
                      href="mailto:admin@escapetheodds.com"
                      className="text-2xl font-heading text-white hover:text-gold transition-colors block"
                    >
                      admin@escapetheodds.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-charcoal/50 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading tracking-widest text-xs text-cream/60 uppercase">
                      FACILITATION SUPPORT
                    </h4>
                    <p className="text-xl font-heading text-white">
                      Live portal for active partners.
                    </p>
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
                      CHICAGO, IL &bull; USA
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7 bg-charcoal p-12 lg:p-16 border border-white/5 shadow-2xl"
            >
              <h3 className="text-3xl font-heading text-white mb-12 tracking-tight underline decoration-gold/30 underline-offset-8">
                INQUIRY FORM
              </h3>
              <form className="space-y-8">
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
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                      placeholder="EMAIL@INSTITUTION.ORG"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="orgName"
                    className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                  >
                    Organization Name (Optional)
                  </Label>
                  <Input
                    id="orgName"
                    className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                    placeholder="YOUR ORGANIZATION"
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="subject"
                    className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                  >
                    Subject of Inquiry
                  </Label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={selectClasses}
                  >
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Conditional Institutional Fields */}
                {showInstitutionalFields && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8 p-8 border border-gold/20 bg-gold/5"
                  >
                    <p className="text-[10px] font-heading tracking-widest text-gold uppercase">
                      INSTITUTIONAL DETAILS
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label
                          htmlFor="audienceSize"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Audience Size
                        </Label>
                        <select id="audienceSize" className={selectClasses}>
                          <option value="">SELECT SIZE</option>
                          <option>Under 25</option>
                          <option>25–50</option>
                          <option>50–100</option>
                          <option>100–250</option>
                          <option>250+</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="populationServed"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Population Served
                        </Label>
                        <select id="populationServed" className={selectClasses}>
                          <option value="">SELECT POPULATION</option>
                          <option>Incarcerated Individuals</option>
                          <option>Reentry / Post-Release</option>
                          <option>Workforce Development</option>
                          <option>Youth / Juvenile</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label
                          htmlFor="enrollmentModel"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Enrollment Model
                        </Label>
                        <select id="enrollmentModel" className={selectClasses}>
                          <option value="">SELECT MODEL</option>
                          <option>Live Cohort (Facilitated)</option>
                          <option>Self-Paced (When Available)</option>
                          <option>Not Sure</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="budget"
                          className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                        >
                          Budget Range
                        </Label>
                        <select id="budget" className={selectClasses}>
                          <option value="">SELECT RANGE</option>
                          <option>Under $5,000</option>
                          <option>$5,000–$10,000</option>
                          <option>$10,000–$25,000</option>
                          <option>$25,000+</option>
                          <option>Discuss on Call</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    className="bg-black/50 border-white/10 rounded-none min-h-[180px] text-cream focus:border-gold transition-colors"
                    placeholder="HOW CAN WE HELP?"
                  />
                </div>

                <Button className="w-full py-10 bg-gold text-black font-heading text-xl rounded-none hover:bg-white transition-all shadow-[0_10px_40px_rgba(223,176,90,0.1)] group">
                  SEND MESSAGE{" "}
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
