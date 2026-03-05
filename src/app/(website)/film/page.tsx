"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Play,
  ArrowUpRight,
  Film,
  MessageSquare,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const galleryImages = [
  {
    src: "/assets/Image_4.jpeg",
    alt: "Aaron with program participants",
    caption: "Program Participants",
  },
  {
    src: "/assets/Image_5.jpeg",
    alt: "Aaron with incarcerated individuals",
    caption: "Facility Engagement",
  },
  {
    src: "/assets/Image_1.jpeg",
    alt: "Aaron teaching in correctional facility classroom",
    caption: "Classroom Instruction",
  },
  {
    src: "/assets/Image_7.jpeg",
    alt: "Large group photo at Cook County",
    caption: "Cook County Cohort",
  },
  {
    src: "/assets/Image_8.jpeg",
    alt: "Aaron facilitating real estate session",
    caption: "Real Estate Workshop",
  },
  {
    src: "/assets/Image_12.jpeg",
    alt: "Trucking entrepreneur with his fleet truck",
    caption: "Trucking Success Story",
  },
  {
    src: "/assets/Image_15.jpeg",
    alt: "Aaron presenting certificate to graduate",
    caption: "Graduate Recognition",
  },
  {
    src: "/assets/Image_17.jpeg",
    alt: "Aaron presenting certificates to graduate",
    caption: "Cohort Completion",
  },
];

const experienceSteps = [
  {
    icon: Film,
    title: "THE FILM",
    subtitle: "The Mirror",
    description:
      "A raw, cinematic immersion that reveals the hidden architecture of recidivism and the mindset required to break the cycle.",
  },
  {
    icon: MessageSquare,
    title: "DISCUSSION",
    subtitle: "The Inquiry",
    description:
      "A guided session dismantling the 'Get Back' mentality\u2014simply returning\u2014to initiate a true 'Bounce Forward' transformation.",
  },
  {
    icon: GraduationCap,
    title: "IMPLEMENTATION",
    subtitle: "The Map",
    description:
      "Activating the 'Bounce Forward Plan'\u2014a structured curriculum for practical accountability and institutional-ready reentry.",
  },
];

export default function FilmPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src="/assets/Image_6.jpeg"
            alt="Escape the Odds Documentary"
            fill
            className="object-cover opacity-50 grayscale"
            priority
          />
        </div>

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
              &ldquo;A raw, unfiltered exploration of incarceration, reentry,
              and the individuals who found the courage to bounce
              forward.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-gold text-black font-heading text-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 fill-current" /> WATCH TRAILER
              </Link>
              <Link
                href="/contact"
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
                entrepreneurship program inside Cook County and beyond.
                It&apos;s more than a documentary; it&apos;s a testament to the
                human spirit&apos;s ability to pivot from despair to destiny.
              </p>

              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="space-y-2">
                  <div className="text-5xl font-heading text-gold">94%</div>
                  <div className="text-[10px] font-heading tracking-[0.2em] text-cream/60 uppercase">
                    ENGAGEMENT RATE
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-heading text-gold">60+</div>
                  <div className="text-[10px] font-heading tracking-[0.2em] text-cream/60 uppercase">
                    HOURS OF FOOTAGE
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative aspect-video w-full border border-white/10 shadow-2xl overflow-hidden">
                <Image
                  src="/assets/Image_6.jpeg"
                  alt="Escape The Odds Documentary"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Experience — Curriculum Integration */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              THE EXPERIENCE
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white">
              MORE THAN A <span className="text-gold">SCREENING.</span>
            </h2>
            <p className="text-lg text-cream opacity-70 font-sans font-light">
              The film is not a standalone screening&mdash;it is part of a
              structured, facilitated transformation experience designed to
              present the narrative, facilitate guided discussion, and activate
              reflection and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {experienceSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`p-10 flex flex-col items-center text-center space-y-6 group hover:bg-charcoal/50 transition-colors duration-500 ${
                  index !== 2
                    ? "md:border-r border-white/10 border-b md:border-b-0"
                    : ""
                }`}
              >
                <div className="w-16 h-16 bg-gold/10 flex items-center justify-center rounded-none border border-gold/30 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <step.icon className="w-8 h-8 text-gold group-hover:text-black transition-colors" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-heading text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gold text-sm font-heading tracking-widest uppercase">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-cream/60 leading-relaxed font-sans text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center text-xs font-heading tracking-[0.2em] text-gold hover:text-white transition-colors group"
            >
              EXPLORE OUR PROGRAMS
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* In Action — Institutional Gallery */}
      <section className="py-32 bg-charcoal border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              IN ACTION
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white">
              THE FILM <span className="text-gold">IN INSTITUTIONS.</span>
            </h2>
            <p className="text-lg text-cream opacity-70 font-sans font-light">
              Bringing the facilitated film experience to correctional
              facilities, workforce development programs, and community
              organizations across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative aspect-video group overflow-hidden ${
                  i < 2 ? "border-b border-white/10" : ""
                } ${i % 2 === 0 ? "md:border-r border-white/10" : ""}`}
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

      {/* Institutional Booking Section */}
      <section
        id="booking"
        className="py-32 bg-black border-t border-white/5 relative overflow-hidden"
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
                  <span className="text-gold">EXPERIENCE.</span>
                </h2>
              </div>
              <p className="text-xl text-cream/60 font-sans font-light leading-relaxed">
                The facilitated film experience is designed for deployment
                within DOCs, county jails, workforce development boards, and
                community organizations. We handle the technical setup and
                provide the blueprint.
              </p>

              <ul className="space-y-6">
                {[
                  "On-site facilitated screening",
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
              className="bg-charcoal p-12 border border-white/5 shadow-2xl"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
                  <CheckCircle2 className="w-16 h-16 text-gold" />
                  <h3 className="text-3xl font-heading text-white">REQUEST RECEIVED</h3>
                  <p className="text-cream/70 text-lg max-w-md">
                    Thank you for your interest. Our team will be in touch within 48 hours to discuss your screening.
                  </p>
                </div>
              ) : (
              <>
              <h3 className="text-3xl font-heading text-white mb-10 tracking-tight underline decoration-gold/30 underline-offset-8">
                SCREENING REQUEST
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="firstName"
                      className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="lastName"
                      className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="facility"
                    className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                  >
                    Facility Name
                  </Label>
                  <Input
                    id="facility"
                    className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                  >
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="details"
                    className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                  >
                    Screening Details
                  </Label>
                  <Textarea
                    id="details"
                    className="bg-black/50 border-white/10 rounded-none min-h-[120px] text-cream focus:border-gold transition-colors"
                  />
                </div>
                <Button type="submit" className="w-full py-8 bg-gold text-black font-heading text-xl rounded-none hover:bg-white transition-all shadow-xl group">
                  RESERVE DATE{" "}
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
