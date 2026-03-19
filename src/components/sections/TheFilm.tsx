"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Share2, Check } from "lucide-react";
import { TRAILER_VIDEO_URL } from "@/lib/constants/film";

export function TheFilm() {
  const [isPlaying, setIsPlaying] = useState(false);
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
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 0);
  };

  return (
    <section id="the-film" className="overflow-hidden bg-black py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                WATCH THE FILM PREVIEW
              </span>
              <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
                ESCAPING THE ODDS <br />
                <span className="text-gold">OF RECIDIVISM.</span>
              </h2>
            </div>

            <p className="text-cream/90 max-w-xl font-sans text-lg leading-relaxed">
              &ldquo;Escaping The Odds of Recidivism&rdquo; is an 85-minute documentary that poses
              the question, &ldquo;Is a successful reentry possible?&rdquo; Guided by Aaron Smith,
              founder of Escape The Odds Media &amp; Education, the film follows him and a team of
              justice impacted individuals as they conduct reentry workshops in correctional
              institutions across the country. The documentary features voices from incarcerated
              individuals preparing for release, recently released individuals, correctional staff,
              and reentry stakeholders. It includes eye-opening statistics and testimonies on
              reintegration in America.
            </p>

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
          </motion.div>

          {/* Right Visual — Inline Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative aspect-video w-full flex-1"
          >
            <div className="bg-charcoal absolute inset-0 overflow-hidden rounded-none border border-white/10 shadow-2xl">
              {!isPlaying && (
                <>
                  <Image
                    src="/assets/ETO-LandscapePoster.png"
                    alt="The Film Preview"
                    fill
                    className="object-cover object-[center_75%] opacity-80 transition-transform duration-700 group-hover:scale-[1.02]"
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
              <video
                ref={videoRef}
                controls={isPlaying}
                preload="metadata"
                poster="/assets/ETO-LandscapePoster.png"
                className={`h-full w-full object-cover ${isPlaying ? "block" : "hidden"}`}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={TRAILER_VIDEO_URL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Decorative Element */}
            <div className="border-gold absolute -right-6 -bottom-6 -z-10 h-32 w-32 border-r-2 border-b-2 opacity-30 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
