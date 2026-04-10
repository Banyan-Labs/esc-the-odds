"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Share2, Check } from "lucide-react";
import Image from "next/image";
import { EXPERIENCE_STEPS, FILM_IN_ACTION_ITEMS, TRAILER_VIDEO_URL } from "@/lib/constants/film";
import { FadeInView, SectionHeader, CTAButton } from "@/components/shared";

export default function FilmPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const trailerUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/film#trailer`
      : "https://escapetheodds.com/film#trailer";

  const handleShare = async () => {
    if (navigator.share) {
      await navigator
        .share({
          title: "Escaping The Odds of Recidivism — Trailer",
          text: "Watch the trailer for the Escaping The Odds of Recidivism documentary.",
          url: trailerUrl,
        })
        .catch(() => {});
    } else {
      await navigator.clipboard.writeText(trailerUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePlay = () => {
    setIsBuffering(true);
    setIsPlaying(true);
    // Defer play() to next tick so the video element is visible before playing
    setTimeout(() => {
      videoRef.current?.play().catch((err) => {
        console.error("[film] Video playback failed:", err);
        setIsPlaying(false);
        setIsBuffering(false);
      });
    }, 0);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src="/assets/ScreenGrab-Trailer.png"
            alt="Scene from Escaping the Odds documentary"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />

        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-5xl space-y-8"
          >
            <h1 className="font-heading text-6xl leading-none tracking-tighter text-white md:text-9xl">
              ESCAPING THE ODDS <span className="text-gold">OF RECIDIVISM</span>
            </h1>
            <p className="text-cream/90 mx-auto max-w-3xl font-sans text-xl leading-relaxed font-light md:text-2xl">
              A documentary that moves beyond awareness into transformation.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 pt-10 sm:flex-row">
              <CTAButton href="/contact" icon={Play} fullWidth>
                HOST THE FILM
              </CTAButton>
              <CTAButton href="#experience" variant="outline" fullWidth>
                LEARN HOW IT WORKS
              </CTAButton>
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
          <div className="bg-cream/30 flex h-16 w-px items-start justify-center overflow-hidden">
            <motion.div
              animate={{ y: [0, 64, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-gold h-1/2 w-full shadow-[0_0_10px_rgba(223,176,90,0.5)]"
            />
          </div>
        </motion.div>
      </section>

      {/* The Film — The Mirror */}
      <section id="trailer" className="bg-charcoal border-y border-white/5 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10 text-center">
            <FadeInView className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                THE FILM
              </span>
              <h2 className="font-heading text-4xl leading-tight text-white md:text-7xl">
                THE <span className="text-gold">MIRROR.</span>
              </h2>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="text-cream/80 font-sans text-xl leading-relaxed font-light">
                Escaping the Odds of Recidivism is an immersive documentary that reveals the
                systems, choices, and opportunities that influence reentry outcomes. Used as a
                catalyst for reflection and transformation, the film anchors structured engagement
                in both correctional and community settings.
              </p>
            </FadeInView>

            {/* Trailer Video Player */}
            <FadeInView
              direction="scale"
              delay={0.3}
              className="group relative aspect-video w-full overflow-hidden border border-white/10 shadow-2xl"
            >
              {!isPlaying && (
                <>
                  <Image
                    src="/assets/ET0-Landscape-Poster-Fixed.png"
                    alt="Escape The Odds Documentary Trailer"
                    fill
                    className="object-cover object-[center_75%] opacity-60 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <button
                    onClick={handlePlay}
                    aria-label="Play trailer"
                    className="absolute inset-0 flex cursor-pointer items-center justify-center"
                  >
                    <div className="bg-gold flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-1 h-8 w-8 fill-current text-black" />
                    </div>
                  </button>
                </>
              )}
              {isBuffering && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60">
                  <div className="border-gold h-12 w-12 animate-spin rounded-full border-4 border-t-transparent" />
                </div>
              )}
              <video
                ref={videoRef}
                controls={isPlaying}
                preload="auto"
                playsInline
                poster="/assets/ET0-Landscape-Poster-Fixed.png"
                className={`h-full w-full object-cover ${isPlaying ? "block" : "hidden"}`}
                onPlaying={() => setIsBuffering(false)}
                onWaiting={() => setIsBuffering(true)}
                onEnded={() => {
                  setIsPlaying(false);
                  setIsBuffering(false);
                }}
              >
                <source src={TRAILER_VIDEO_URL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </FadeInView>

            {/* Share Trailer */}
            <FadeInView delay={0.4} className="flex justify-center pt-4">
              <button
                onClick={handleShare}
                className="font-heading group border-gold bg-gold/10 text-gold hover:bg-gold inline-flex items-center gap-3 border-2 px-6 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:text-black"
              >
                {copied ? (
                  <>
                    <Check className="text-gold h-4 w-4" />
                    LINK COPIED
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4" />
                    SHARE THE TRAILER
                  </>
                )}
              </button>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* The Experience — More Than a Screening */}
      <section id="experience" className="bg-black py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="THE EXPERIENCE"
            heading="MORE THAN A"
            accentText="SCREENING."
            description="The film is not a standalone screening—it is part of a structured, facilitated transformation experience designed to present the narrative, facilitate guided discussion, and activate reflection and accountability."
          />

          <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-3">
            {EXPERIENCE_STEPS.map((step, index) => (
              <FadeInView
                key={step.title}
                delay={index * 0.1}
                className={`group hover:bg-charcoal/50 flex flex-col transition-colors duration-500 ${
                  index !== EXPERIENCE_STEPS.length - 1
                    ? "border-b border-white/10 md:border-r md:border-b-0"
                    : ""
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  {step.image && (
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      style={
                        step.imagePosition ? { objectPosition: step.imagePosition } : undefined
                      }
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex flex-col items-center space-y-6 p-10 text-center">
                  <div className="bg-gold/10 border-gold/30 group-hover:bg-gold group-hover:border-gold flex h-16 w-16 items-center justify-center rounded-none border transition-all duration-300">
                    <step.icon className="text-gold h-8 w-8 transition-colors group-hover:text-black" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-3xl tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="text-gold font-heading text-sm tracking-widest uppercase md:text-base">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-cream/80 font-sans text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* The Film In Action */}
      <section className="bg-charcoal border-y border-white/5 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10 text-center">
            <SectionHeader
              subtitle="IN ACTION"
              heading="THE FILM"
              accentText="IN ACTION."
              description="Used across institutions and communities nationwide."
            />

            <FadeInView delay={0.2} className="flex flex-wrap justify-center gap-4">
              {FILM_IN_ACTION_ITEMS.map((item) => (
                <span
                  key={item}
                  className="border-gold/30 font-heading text-gold hover:border-gold border px-6 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Host the Film CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-black py-16 md:py-24 lg:py-32">
        <div className="bg-gold/5 pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]" />

        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <FadeInView direction="scale" className="mx-auto max-w-4xl space-y-12">
            <Image
              src="/assets/logo-notxt.png"
              alt="Escape The Odds"
              width={60}
              height={60}
              className="mx-auto h-14 w-auto object-contain"
            />

            <div className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                HOST THE FILM
              </span>
              <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
                BRING THE EXPERIENCE <span className="text-gold">TO YOUR AUDIENCE.</span>
              </h2>
            </div>

            <p className="text-cream/90 mx-auto max-w-2xl font-sans text-xl leading-relaxed font-light">
              Host the film experience or request details to determine the best format for your
              audience.
            </p>

            <CTAButton href="/contact" showArrow>
              HOST THE FILM
            </CTAButton>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
