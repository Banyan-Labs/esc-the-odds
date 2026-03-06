"use client";

import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Play,
  Film,
  MessageSquare,
  GraduationCap,
  ArrowRight,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experienceSteps = [
  {
    icon: Film,
    title: "The Mirror",
    subtitle: "The Film",
    image: "/assets/Image_6.jpeg",
    description:
      "An immersive documentary experience revealing the architecture of reintegration and introducing a mindset shift toward economic readiness and personal responsibility.",
  },
  {
    icon: MessageSquare,
    title: "The Inquiry",
    subtitle: "The Dialogue",
    cta: "Request Impact Series Consultation",
    image: "/assets/Image_11.jpeg",
    description:
      "A structured conversation designed to transform insight into clarity — reflecting on opportunity, environment, work, economic access, and practical next steps forward.",
  },
  {
    icon: GraduationCap,
    title: "The Map",
    subtitle: "The Activation",
    image: "/assets/Image_1.jpeg",
    description:
      "Activation of the Bounce Forward Plan: Mastering Your Reentry — a structured, institutional-ready reentry curriculum covering housing, career readiness, entrepreneurship, financial literacy, and more.",
  },
];

const filmInActionItems = [
  "Correctional facilities",
  "Career development boards",
  "Employers",
  "Reentry organizations",
  "Libraries",
  "Community convenings",
  "Civic forums",
];

export default function FilmPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 0);
  };

  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero */}
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
            <h1 className="text-6xl md:text-9xl font-heading text-white leading-none tracking-tighter">
              ESCAPING THE ODDS <span className="text-gold">OF RECIDIVISM</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-cream/70 font-sans font-light leading-relaxed">
              A documentary that moves beyond awareness into transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
              <Link
                href="#trailer"
                className="w-full sm:w-auto px-10 py-5 bg-gold text-black font-heading text-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 fill-current" /> HOST THE FILM
              </Link>
              <Link
                href="#experience"
                className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white font-heading text-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                LEARN HOW IT WORKS
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

      {/* The Film — The Mirror */}
      <section
        id="trailer"
        className="py-32 bg-charcoal border-y border-white/5"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                THE FILM
              </span>
              <h2 className="text-4xl md:text-7xl font-heading text-white leading-[0.9] tracking-tighter">
                THE <span className="text-gold">MIRROR.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-cream/60 font-sans font-light leading-relaxed"
            >
              Escaping the Odds of Recidivism is an immersive documentary that
              reveals the systems, choices, and opportunities that influence
              reentry outcomes. Used as a catalyst for reflection and
              transformation, the film anchors structured engagement in both
              correctional and community settings.
            </motion.p>

            {/* Trailer Video Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-video w-full border border-white/10 shadow-2xl overflow-hidden group"
            >
              {!isPlaying && (
                <>
                  <Image
                    src="/assets/Image_6.jpeg"
                    alt="Escape The Odds Documentary Trailer"
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <button
                    onClick={handlePlay}
                    aria-label="Play trailer"
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-black fill-current ml-1" />
                    </div>
                  </button>
                </>
              )}
              <video
                ref={videoRef}
                controls={isPlaying}
                preload="metadata"
                poster="/assets/Image_6.jpeg"
                className={`w-full h-full object-cover ${isPlaying ? "block" : "hidden"}`}
                onEnded={() => setIsPlaying(false)}
              >
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/escape-the-odds.firebasestorage.app/o/media%2FETO%20Doc%20Trailer_FINAL_Cta%20End%20Card.mp4?alt=media"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Experience — More Than a Screening */}
      <section id="experience" className="py-32 bg-black">
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
                className={`flex flex-col group hover:bg-charcoal/50 transition-colors duration-500 ${
                  index !== 2
                    ? "md:border-r border-white/10 border-b md:border-b-0"
                    : ""
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  {step.image && (
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gold/10 flex items-center justify-center rounded-none border border-gold/30 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <step.icon className="w-8 h-8 text-gold group-hover:text-black transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-heading text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gold text-xs font-heading tracking-widest uppercase">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-cream/60 leading-relaxed font-sans text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Film In Action */}
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
                IN ACTION
              </span>
              <h2 className="text-4xl md:text-6xl font-heading text-white">
                THE FILM <span className="text-gold">IN ACTION.</span>
              </h2>
              <p className="text-lg text-cream opacity-70 font-sans font-light">
                Used across institutions and communities nationwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {filmInActionItems.map((item, i) => (
                <span
                  key={i}
                  className="px-6 py-3 border border-white/10 text-xs font-heading tracking-[0.2em] text-cream/70 uppercase hover:border-gold/30 hover:text-gold transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Host / Request Info CTA */}
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
                HOST THE FILM
              </span>
              <h2 className="text-4xl md:text-6xl font-heading text-white tracking-tight leading-tight">
                BRING THE EXPERIENCE{" "}
                <span className="text-gold">TO YOUR AUDIENCE.</span>
              </h2>
            </div>

            <p className="text-xl text-cream/70 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Host the film experience or request details to determine the best
              format for your audience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link
                href="/contact"
                className="group w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-gold text-black text-xl font-heading hover:bg-white transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                REQUEST INFO
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
