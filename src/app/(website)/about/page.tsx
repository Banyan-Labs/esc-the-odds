"use client";

import { Founder } from "@/components/sections/Founder";
import { MediaPress } from "@/components/sections/MediaPress";
import { Film } from "lucide-react";
import Image from "next/image";
import { FadeInView, SectionHeader, CTAButton } from "@/components/shared";
import { PILLARS } from "@/lib/constants/about";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-black pt-28 pb-16 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/Image_8.jpeg"
            alt="Classroom education session at Escape The Odds"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black" />

        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <FadeInView className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                ABOUT
              </span>
              <h1 className="font-heading text-5xl leading-tight tracking-tighter text-white md:text-8xl">
                CHANGE THE NARRATIVE.{" "}
                <span className="text-gold">ECONOMIC EMPOWERMENT IS WHAT WE DO.</span>
              </h1>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* 1. The Guide — Aaron's Story */}
      <Founder />

      {/* 2. The Movement */}
      <section className="border-b border-white/5 bg-black py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10">
            <FadeInView className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                THE MOVEMENT
              </span>
              <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
                EMPOWERING MEN AND WOMEN TO <span className="text-gold">ESCAPE THE ODDS.</span>
              </h2>
            </FadeInView>

            <FadeInView delay={0.1} className="space-y-6">
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                Escape The Odds Media &amp; Education was built from the real experience of reentry.
              </p>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                For too long, justice-impacted individuals have been defined by their past rather
                than their potential. Escape The Odds works to change that narrative.
              </p>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                Through storytelling, education, and structured career pathways, the organization
                helps individuals move from incarceration to stability, income, and ownership.
              </p>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                Because escaping the odds isn&apos;t about luck.{" "}
                <span className="font-medium text-white">
                  It&apos;s about opportunity, strategy, and support.
                </span>
              </p>
            </FadeInView>

            <FadeInView delay={0.2} className="flex flex-col items-center gap-6 pt-4 sm:flex-row">
              <CTAButton href="/contact" showArrow fullWidth>
                HOST THE FILM
              </CTAButton>
              <CTAButton href="/film" variant="outline" icon={Film} fullWidth>
                WATCH THE TRAILER
              </CTAButton>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* 3. Media Mentions */}
      <MediaPress />

      {/* 4. Belief + Mission + Vision */}
      <section className="bg-charcoal border-y border-white/5 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-20">
            {/* Belief Statement */}
            <FadeInView className="space-y-6 text-center">
              <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
                OUR WORK IS DRIVEN BY A <span className="text-gold">SIMPLE BELIEF.</span>
              </h2>
              <p className="text-cream/90 mx-auto max-w-3xl font-sans text-xl leading-relaxed font-light">
                People are more than the worst chapter of their lives. When individuals have access
                to education, systems, and opportunity, they can rebuild their future and contribute
                to their communities in powerful ways.
              </p>
              <p className="font-sans text-xl font-medium text-white">
                Escape The Odds exists to help make that possible.
              </p>
            </FadeInView>

            {/* Mission */}
            <FadeInView className="space-y-6">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                OUR MISSION
              </span>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                To empower justice-impacted individuals to{" "}
                <span className="font-medium text-white">rewrite their narrative</span> through
                practical education, career pathways, storytelling, and real economic opportunities.
              </p>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                We equip people with the skills, mindset, and systems needed to build stable
                housing, healthy lifestyles, and sustainable income — breaking cycles of
                incarceration and creating long-term opportunity.
              </p>
            </FadeInView>

            {/* Vision */}
            <FadeInView className="space-y-6">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                OUR VISION
              </span>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                We envision a future where people returning from incarceration are recognized as{" "}
                <span className="font-medium text-white">leaders, earners, and contributors</span>{" "}
                within their communities.
              </p>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                Escape The Odds is building a national platform for reentry education, storytelling,
                and economic opportunity — bringing modern training, powerful media, and
                entrepreneurial pathways into correctional facilities, reentry programs, and
                communities across the country.
              </p>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                Because returning home should mean more than starting over.{" "}
                <span className="font-medium text-white">
                  It should mean building something new.
                </span>
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* 5. How We Do The Work — Housing, Health, Hustle */}
      <section className="border-b border-white/5 bg-black py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="OUR APPROACH"
            heading="HOW WE DO"
            accentText="THE WORK"
            description="Escape The Odds focuses on three pillars that create long-term stability."
          />

          <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <FadeInView
                key={pillar.title}
                delay={index * 0.1}
                className={`group hover:bg-charcoal/50 flex flex-col space-y-6 p-10 transition-colors duration-500 ${
                  pillar.title !== PILLARS[PILLARS.length - 1].title
                    ? "border-b border-white/10 md:border-r md:border-b-0"
                    : ""
                }`}
              >
                <div className="bg-gold/10 text-gold border-gold/20 group-hover:bg-gold flex h-16 w-16 items-center justify-center border transition-all group-hover:text-black">
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-3xl tracking-tight text-white">{pillar.title}</h3>
                <p className="text-cream/80 font-sans text-base leading-relaxed font-light">
                  {pillar.description}
                </p>
              </FadeInView>
            ))}
          </div>

          <p className="text-cream/90 mt-10 text-center font-sans text-base">
            These pillars guide every Escape The Odds program, training, and educational resource.
          </p>

          <FadeInView className="flex justify-center pt-10">
            <CTAButton href="/programs" showArrow>
              EXPLORE OUR PROGRAMS
            </CTAButton>
          </FadeInView>
        </div>
      </section>

      {/* 6. Impact */}
      <section className="bg-charcoal border-b border-white/5 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10">
            <FadeInView className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                OUR IMPACT
              </span>
              <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
                OVER <span className="text-gold">600+</span> JUSTICE-INVOLVED STUDENTS ACROSS{" "}
                <span className="text-gold">10+ STATES</span> IN THE LAST 3 YEARS.
              </h2>
            </FadeInView>

            <FadeInView delay={0.1} className="space-y-6">
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                Our work reaches individuals inside correctional facilities, transitional centers,
                and community reentry programs through documentary-based learning, workforce
                education, and entrepreneurship training.
              </p>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                Each participant represents more than a statistic.{" "}
                <span className="font-medium text-white">
                  They represent a future being rebuilt.
                </span>
              </p>
            </FadeInView>

            <FadeInView delay={0.2}>
              <CTAButton href="/contact" showArrow>
                PARTNER WITH ESCAPE THE ODDS
              </CTAButton>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* 7. Closing CTA — Build The Future With Us */}
      <section className="relative overflow-hidden border-t border-white/5 bg-black py-16 md:py-24 lg:py-32">
        <div className="bg-gold/5 pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]" />

        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <FadeInView direction="scale" className="mx-auto max-w-4xl space-y-10">
            <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
              BUILD THE FUTURE <span className="text-gold">WITH US.</span>
            </h2>

            <p className="text-cream/90 mx-auto max-w-3xl font-sans text-xl leading-relaxed font-light">
              Escape The Odds is a national platform that combines storytelling, education, and
              economic pathways to empower justice-impacted individuals to rebuild their lives with
              stability and purpose.
            </p>

            <div className="mx-auto max-w-lg space-y-3 text-left">
              <p className="text-cream/90 font-sans text-lg leading-relaxed">
                Whether you&apos;re:
              </p>
              <ul className="space-y-3">
                <li className="text-cream/90 flex items-start gap-3 font-sans text-lg">
                  <div className="bg-gold mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  An organization seeking programs
                </li>
                <li className="text-cream/90 flex items-start gap-3 font-sans text-lg">
                  <div className="bg-gold mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  An individual looking for opportunity
                </li>
                <li className="text-cream/90 flex items-start gap-3 font-sans text-lg">
                  <div className="bg-gold mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />A partner who
                  believes in another chance
                </li>
              </ul>
              <p className="text-cream/90 font-sans text-lg leading-relaxed">
                There is a role for you in this movement.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <p className="font-heading text-2xl text-white md:text-3xl">
                REWRITE YOUR NARRATIVE.
              </p>
              <p className="font-heading text-2xl text-white md:text-3xl">BUILD YOUR FUTURE.</p>
              <p className="font-heading text-gold text-2xl md:text-3xl">ESCAPE THE ODDS.</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 pt-6 sm:flex-row">
              <CTAButton href="/contact" icon={Film} showArrow fullWidth>
                HOST THE FILM
              </CTAButton>
              <CTAButton
                href="/programs"
                variant="outline"
                fullWidth
                className="border-gold text-gold hover:bg-gold hover:border-gold hover:text-black"
              >
                EXPLORE PROGRAMS
              </CTAButton>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
