"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { FadeInView, CTAButton } from "@/components/shared";

export function Founder() {
  return (
    <section className="bg-charcoal relative overflow-hidden border-y border-white/5 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          {/* Image Side */}
          <FadeInView direction="left" className="relative w-full max-w-lg flex-1 lg:max-w-none">
            <div className="group relative aspect-square w-full border border-white/10 shadow-2xl transition-all duration-700">
              <Image
                src="/assets/Image_28.jpeg"
                alt="Aaron Smith - Founder of Escape The Odds"
                fill
                className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="font-heading text-3xl tracking-widest text-white uppercase">
                  AARON SMITH
                </p>
                <p className="text-gold font-heading mt-2 text-sm tracking-[0.3em] uppercase">
                  FOUNDER & CEO
                </p>
              </div>
            </div>
            <div className="border-gold/30 absolute -top-6 -left-6 -z-10 h-32 w-32 border-t-2 border-l-2" />
          </FadeInView>

          {/* Text Side */}
          <FadeInView direction="right" delay={0.2} className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                THE GUIDE
              </span>
              <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
                YOUR STRUGGLE IS <br />
                <span className="text-gold">YOUR STRENGTH.</span>
              </h2>
            </div>

            <p className="text-cream/90 font-sans text-lg leading-relaxed">
              Aaron Smith is the founder of Escape The Odds Media &amp; Education, a platform
              dedicated to helping justice-impacted individuals rebuild their lives through
              education, career pathways, and entrepreneurship.
            </p>

            <p className="text-cream/90 font-sans text-lg leading-relaxed">
              Aaron was sentenced to 12 years in federal prison for running a heroin distribution
              operation in Chicago. Prior to his incarceration, he had earned a bachelor&apos;s
              degree in business, but like many others, he found himself caught in decisions that
              would alter the course of his life.
            </p>

            <p className="text-cream/90 font-sans text-lg leading-relaxed">
              While serving his sentence, Aaron began thinking deeply about what reentry actually
              requires. He realized something that many people returning home experience firsthand:
            </p>

            <p className="font-sans text-xl leading-relaxed font-medium text-white">
              Most justice-impacted people are taught how to survive the system — but very few are
              taught how to master life after it.
            </p>

            <p className="text-cream/90 font-sans text-lg leading-relaxed">
              When Aaron returned home in 2019, he committed himself to building something that
              could help change that.
            </p>

            <div className="border-gold/50 relative space-y-4 border-l pl-8">
              <Quote className="text-gold/20 absolute -top-4 -left-4 h-8 w-8 opacity-50" />
              <p className="text-cream font-sans text-lg leading-relaxed italic">
                &ldquo;I didn&apos;t build Escape The Odds to tell my story. I built it because too
                many people return home with motivation but no blueprint. I wanted to create the
                kind of guidance that helps people rebuild their lives with strategy, social
                capital, and ownership.&rdquo;
              </p>
            </div>

            <p className="text-cream/90 font-sans text-lg leading-relaxed">
              Today, Aaron uses his experience to guide others through the transition he once faced
              himself. His role isn&apos;t to be the hero of the story.{" "}
              <span className="font-medium text-white">
                It&apos;s to empower others to become authors of their own.
              </span>
            </p>

            <CTAButton href="/programs" showArrow>
              EXPLORE OUR PROGRAMS
            </CTAButton>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
