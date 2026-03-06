"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

export function TheFilm() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
                WATCH THE FILM PREVIEW
              </span>
              <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
                ESCAPING THE ODDS <br />
                <span className="text-gold">OF RECIDIVISM.</span>
              </h2>
            </div>

            <p className="text-lg text-cream/70 font-sans leading-relaxed max-w-xl">
              &ldquo;Escaping The Odds of Recidivism&rdquo; is an 85-minute
              documentary that poses the question, &ldquo;Is a successful
              reentry possible?&rdquo; Guided by Aaron Smith, founder of Escape
              The Odds Media &amp; Education, the film follows him and a team of
              justice-impacted individuals as they conduct reentry workshops in
              correctional institutions across the country. The documentary
              features voices from incarcerated individuals preparing for
              release, recently released individuals, correctional staff, and
              reentry stakeholders. It includes eye-opening statistics and
              testimonies on reintegration in America.
            </p>
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
                    src="/assets/Image_6.jpeg"
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
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold -z-10 opacity-30 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
