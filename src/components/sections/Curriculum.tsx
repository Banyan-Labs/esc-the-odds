"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MediaImage {
  url?: string;
  alt?: string;
}

interface CurriculumData {
  sectionLabel?: string;
  headingLine1?: string;
  headingAccent?: string;
  body?: string;
  image?: MediaImage | string | null;
  badge1?: string;
  badge2?: string;
  coursePoints?: Array<{ point: string }>;
  cta1Label?: string;
  cta1Link?: string;
  cta2Label?: string;
  cta2Link?: string;
}

function getImageUrl(img: MediaImage | string | null | undefined, fallback: string): string {
  if (!img) return fallback;
  if (typeof img === "string") return img;
  return img?.url || fallback;
}

const defaultCoursePoints = [
  "15-Session Evidence-Based Framework",
  "The 'Bounce Forward Plan' Workbook",
  "Mastering Personal Reentry Plans",
  "Structured Facilitation Guides",
  "Vocational & Entrepreneurial Development",
  "Financial Empowerment & Legacy Planning",
  "Mindset Architecture & Habit Loops",
];

export function Curriculum({ data }: { data?: CurriculumData }) {
  const imageSrc = getImageUrl(data?.image, "/assets/Image_1.jpeg");
  const coursePoints =
    data?.coursePoints && data.coursePoints.length > 0
      ? data.coursePoints.map((cp) => cp.point)
      : defaultCoursePoints;

  return (
    <section className="py-24 bg-charcoal border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto shadow-2xl border border-white/10 overflow-hidden group">
              <Image
                src={imageSrc}
                alt="Bounce Forward Curriculum"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 right-6 bg-gold text-black px-4 py-2 font-heading text-xs tracking-widest uppercase">
                {data?.badge1 || "REENTRY MASTERY"}
              </div>
              <div className="absolute bottom-6 left-6 bg-black/80 text-gold px-4 py-2 font-heading text-xs tracking-widest uppercase border border-gold/30">
                {data?.badge2 || "15 SESSIONS"}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-gold/30 -z-10" />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                {data?.sectionLabel || "THE CURRICULUM"}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-white leading-tight">
                {data?.headingLine1 || "BOUNCE FORWARD PLAN —"} <br />
                <span className="text-gold">{data?.headingAccent || "MASTERING YOUR REENTRY"}</span>
              </h2>
            </div>

            <p className="text-lg text-cream/70 font-sans font-light leading-relaxed">
              {data?.body || "Mastering your reentry isn't about getting back to where you were—it's about building a foundation to go further than you've ever been."}
            </p>

            <ul className="space-y-4">
              {coursePoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-cream/80 font-sans text-sm">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href={data?.cta1Link || "/contact"}
                className="inline-block px-10 py-5 bg-gold text-black font-heading text-xl hover:bg-white transition-all duration-300 shadow-xl shadow-gold/10"
              >
                {data?.cta1Label || "INQUIRE ABOUT THE CURRICULUM"}
              </Link>
              <a
                href={data?.cta2Link || "https://www.amazon.com/dp/B0GMP7Z9P9"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 border-2 border-white text-white font-heading text-xl hover:bg-white hover:text-black transition-all duration-300 text-center"
              >
                {data?.cta2Label || "GET THE WORKBOOK"}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
