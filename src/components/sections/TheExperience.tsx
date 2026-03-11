"use client";

import Image from "next/image";
import { SectionHeader, FadeInView } from "@/components/shared";
import { HOME_EXPERIENCE_STEPS } from "@/lib/constants/home";

export function TheExperience() {
  return (
    <section className="bg-charcoal border-y border-white/5 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          subtitle="HOW IT WORKS"
          heading="THE EXPERIENCE"
          description="A facilitated engagement model built on three components:"
        />

        <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-3">
          {HOME_EXPERIENCE_STEPS.map((step, index) => (
            <FadeInView
              key={step.title}
              delay={index * 0.1}
              className={`group flex flex-col transition-colors duration-500 hover:bg-black/40 ${
                index !== 2 ? "border-b border-white/10 md:border-r md:border-b-0" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  style={step.imagePosition ? { objectPosition: step.imagePosition } : undefined}
                />
                <div className="from-charcoal absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col items-center space-y-6 p-10 text-center">
                <div className="bg-gold/10 border-gold/30 group-hover:bg-gold group-hover:border-gold flex h-16 w-16 items-center justify-center rounded-none border transition-all duration-300">
                  <step.icon className="text-gold h-8 w-8 transition-colors group-hover:text-black" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-3xl tracking-tight text-white">{step.title}</h3>
                  <p className="text-gold font-heading text-sm tracking-widest uppercase md:text-base">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-cream/80 font-sans text-base leading-relaxed">
                  {step.description}
                </p>

                {step.bullets && (
                  <ul className="w-full space-y-2 text-left">
                    {step.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-cream/80 flex items-start gap-2 font-sans text-sm"
                      >
                        <span className="bg-gold/50 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
