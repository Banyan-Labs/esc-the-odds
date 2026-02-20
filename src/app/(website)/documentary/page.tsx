"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DocumentarySection } from "@/components/DocumentarySection";
import { motion } from "framer-motion";
import { Play, Calendar, MapPin, Ticket, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const screenings = [
  {
    city: "CHICAGO, IL",
    facility: "COOK COUNTY CORRECTIONAL",
    date: "ACTIVE CURRICULUM",
    status: "INSTITUTIONAL",
  },
  {
    city: "LOS ANGELES, CA",
    facility: "DIGITAL PREMIERE",
    date: "COMING SOON 2026",
    status: "PUBLIC RELEASE",
  },
  {
    city: "NEW YORK, NY",
    facility: "PRIVATE SCREENING",
    date: "REGISTER NOW",
    status: "WAITLIST",
  },
];

export default function DocumentaryPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src="/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png"
            alt="Escape the Odds Documentary"
            fill
            className="object-cover opacity-50 grayscale"
            priority
          />
        </div>

        {/* Dark Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto space-y-8"
          >
            <span className="inline-block px-5 py-2 mb-4 text-[10px] font-heading tracking-[0.4em] text-gold uppercase bg-gold/10 border border-gold/30">
              A BANYAN LABS PRODUCTION
            </span>
            <h1 className="text-6xl md:text-9xl font-heading text-white leading-none tracking-tighter">
              ESCAPE THE <br />
              <span className="text-gold">ODDS.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-cream/70 font-sans font-light italic leading-relaxed">
              "A raw, unfiltered exploration of the systems designed to keep you
              down—and the individuals who found the courage to break them."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
              <button className="w-full sm:w-auto px-10 py-5 bg-gold text-black font-heading text-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                <Play className="w-5 h-5 fill-current" /> WATCH TRAILER
              </button>
              <Link
                href="#booking"
                className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white font-heading text-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                BOOK A SCREENING
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-cream/30 flex items-start justify-center overflow-hidden">
            <motion.div
              animate={{ y: [0, 64, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-full h-1/2 bg-gold shadow-[0_0_10px_rgba(223,176,90,0.5)]"
            />
          </div>
        </motion.div>
      </section>

      {/* Narrative & Impact Section */}
      <section className="py-32 bg-charcoal border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-gold font-heading tracking-widest text-sm uppercase">
                  THE MOVEMENT
                </span>
                <h2 className="text-4xl md:text-7xl font-heading text-white leading-[0.9] tracking-tighter">
                  THE POWER OF <br />
                  <span className="text-gold">SECOND CHANCES.</span>
                </h2>
              </div>
              <p className="text-xl text-cream/60 font-sans font-light leading-relaxed">
                This film captures the journey of students navigating our
                entrepreneurship program inside Cook County and beyond. It's
                more than a documentary; it's a testament to the human spirit's
                ability to pivot from despair to destiny.
              </p>

              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="space-y-2">
                  <div className="text-5xl font-heading text-gold">94%</div>
                  <div className="text-[10px] font-heading tracking-[0.2em] text-cream/40 uppercase">
                    ENGAGEMENT RATE
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-heading text-gold">60+</div>
                  <div className="text-[10px] font-heading tracking-[0.2em] text-cream/40 uppercase">
                    HOURS OF FOOTAGE
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative group cursor-pointer"
            >
              <div className="relative aspect-video w-full border border-white/10 shadow-2xl overflow-hidden">
                <Image
                  src="/assets/carousel/PINK-SUIT-PODCAST-SHOOT.png"
                  alt="On Set Documentary Production"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-black fill-current ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screening Schedule */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              THE TOUR
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white">
              UPCOMING SCREENINGS
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border border-white/10 divide-y divide-white/10">
              {screenings.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col md:flex-row items-center justify-between p-10 hover:bg-charcoal transition-colors group cursor-default"
                >
                  <div className="flex items-center gap-8 mb-6 md:mb-0">
                    <div className="w-12 h-12 bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl text-white tracking-tight">
                        {s.city}
                      </div>
                      <div className="text-[10px] font-heading tracking-widest text-cream/40 uppercase">
                        {s.facility}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                    <div className="text-right">
                      <div className="font-heading text-xl text-white tracking-widest">
                        {s.date}
                      </div>
                      <div className="text-[10px] font-heading tracking-widest text-gold uppercase underline decoration-gold/30 underline-offset-4">
                        {s.status}
                      </div>
                    </div>
                    <button className="w-12 h-12 flex items-center justify-center border border-white/10 hover:bg-gold hover:text-black transition-all group-hover:border-gold">
                      <Ticket className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Booking Section */}
      <section
        id="booking"
        className="py-32 bg-charcoal border-t border-white/5 relative overflow-hidden"
      >
        <div className="absolute left-0 bottom-0 w-full h-[300px] bg-linear-to-t from-black/60 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-gold font-heading tracking-widest text-sm uppercase">
                  INSTITUTIONAL BOOKING
                </span>
                <h2 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                  BRING THE <br />
                  <span className="text-gold">INTENSIVE.</span>
                </h2>
              </div>
              <p className="text-xl text-cream/60 font-sans font-light leading-relaxed">
                The 3-hour intensive is designed to be facilitated within DOCs,
                county jails, and corporate workforce development boards. We
                handle the technical setup and provide the blueprints.
              </p>

              <ul className="space-y-6">
                {[
                  "On-site facilitate screening",
                  "Direct Q&A with ETO facilitators",
                  "Transition blueprint workbooks",
                  "Impact metrics for administration",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-xs font-heading tracking-widest text-gold uppercase opacity-80"
                  >
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black p-12 border border-white/5 shadow-2xl"
            >
              <h3 className="text-3xl font-heading text-white mb-10 tracking-tight underline decoration-gold/30 underline-offset-8">
                SCREENING REQUEST
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="firstName"
                      className="font-heading tracking-widest text-[10px] text-cream/50 uppercase"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      className="bg-charcoal/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="lastName"
                      className="font-heading tracking-widest text-[10px] text-cream/50 uppercase"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      className="bg-charcoal/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="facility"
                    className="font-heading tracking-widest text-[10px] text-cream/50 uppercase"
                  >
                    Facility Name
                  </Label>
                  <Input
                    id="facility"
                    className="bg-charcoal/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="font-heading tracking-widest text-[10px] text-cream/50 uppercase"
                  >
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-charcoal/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="details"
                    className="font-heading tracking-widest text-[10px] text-cream/50 uppercase"
                  >
                    Screening Details
                  </Label>
                  <Textarea
                    id="details"
                    className="bg-charcoal/50 border-white/10 rounded-none min-h-[120px] text-cream focus:border-gold transition-colors"
                  />
                </div>
                <Button className="w-full py-8 bg-gold text-black font-heading text-xl rounded-none hover:bg-white transition-all shadow-xl group">
                  RESERVE DATE{" "}
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
