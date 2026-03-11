"use client";

import Image from "next/image";
import { FadeInView } from "@/components/shared";
import { AUDIENCE_GROUPS } from "@/lib/constants/home";

export function TargetAudience() {
  return (
    <section className="relative overflow-hidden bg-black py-12 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Image
          src="/assets/Image_14.jpeg"
          alt="Program participants with certificates in classroom"
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col justify-between gap-8 text-center md:flex-row md:items-end md:text-left">
          <div className="max-w-2xl space-y-4">
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              WHO WE WORK WITH
            </span>
            <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
              BUILT FOR THE REENTRY <span className="text-gold">ECOSYSTEM</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {AUDIENCE_GROUPS.map((audience, index) => (
            <FadeInView
              key={audience.title}
              delay={index * 0.1}
              className="group hover:border-gold/30 shadow-gold/5 border border-white/5 bg-black/40 p-10 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="text-gold mb-8 h-16 w-16 transition-transform group-hover:scale-110">
                <audience.icon className="h-full w-full stroke-1" />
              </div>

              <h3 className="font-heading mb-8 text-3xl tracking-tight text-white">
                {audience.title}
              </h3>

              <ul className="space-y-4">
                {audience.items.map((item) => (
                  <li key={item} className="text-cream/90 flex items-center space-x-3">
                    <div className="bg-gold/50 h-1.5 w-1.5 rounded-full" />
                    <span className="font-sans text-sm font-medium tracking-widest uppercase opacity-80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
