"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";

interface MediaImage {
  url?: string;
  alt?: string;
}

interface TheFilmData {
  sectionLabel?: string;
  headingLine1?: string;
  headingAccent?: string;
  quote?: string;
  body?: string;
  cta1Label?: string;
  cta1Link?: string;
  cta2Label?: string;
  cta2Link?: string;
  posterImage?: MediaImage | string | null;
  videoUrl?: string;
}

function getImageUrl(img: MediaImage | string | null | undefined, fallback: string): string {
  if (!img) return fallback;
  if (typeof img === "string") return img;
  return img?.url || fallback;
}

export function TheFilm({ data }: { data?: TheFilmData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const posterSrc = getImageUrl(data?.posterImage, "/assets/Image_6.jpeg");
  const videoSrc = data?.videoUrl || "/assets/ETO Doc Trailer_FINAL_Cta End Card.mp4";

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 0);
  };

  return (
    <section id="the-film" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                {data?.sectionLabel || "THE FILM"}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
                {data?.headingLine1 || "ESCAPING THE ODDS"} <br />
                <span className="text-gold">{data?.headingAccent || "OF RECIDIVISM."}</span>
              </h2>
            </div>

            <p className="text-xl text-cream font-light leading-relaxed max-w-xl opacity-90">
              &ldquo;{data?.quote || "The judge never said that this debt came with interest you would pay for the rest of your life."}&rdquo;
            </p>

            <p className="text-lg text-cream/70 font-sans leading-relaxed max-w-xl">
              {data?.body || "Our mission spotlights vocational training, second-chance hiring, entrepreneurship, and workforce development. Through the power of lived experience and structured planning, we illuminate the path to bounce forward."}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href={data?.cta1Link || "/about"}
                className="inline-block px-8 py-4 bg-transparent border border-gold text-gold font-heading hover:bg-gold hover:text-black transition-all duration-300"
              >
                {data?.cta1Label || "LEARN ABOUT THE MISSION"}
              </Link>
              <Link
                href={data?.cta2Link || "/film"}
                className="inline-flex items-center px-8 py-4 text-gold font-heading hover:text-white transition-colors group"
              >
                {data?.cta2Label || "EXPLORE THE FILM"}
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Visual — Inline Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative aspect-video w-full group"
          >
            <div className="absolute inset-0 bg-charcoal rounded-none overflow-hidden border border-white/10 shadow-2xl">
              {!isPlaying && (
                <>
                  <Image
                    src={posterSrc}
                    alt="The Film Preview"
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
                poster={posterSrc}
                className={`w-full h-full object-cover ${isPlaying ? "block" : "hidden"}`}
                onEnded={() => setIsPlaying(false)}
              >
                <source
                  src={videoSrc}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold -z-10 opacity-30 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
