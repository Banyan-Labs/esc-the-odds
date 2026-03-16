"use client";

import Image from "next/image";
import { FadeInView } from "@/components/shared";
import { CTAButton } from "@/components/shared";
import { ECOSYSTEM_CARDS } from "@/lib/constants/home";

export function Ecosystem() {
  return (
    <section className="relative bg-black py-12 md:py-20 lg:py-24">
      {/* Section Header */}
      <div className="container mx-auto mb-16 px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
            OUR OFFERINGS
          </span>
          <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
            ENGAGE WITH <span className="text-gold">US</span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-3">
          {ECOSYSTEM_CARDS.map((card, index) => (
            <FadeInView
              key={card.title}
              delay={index * 0.1}
              className={`group hover:bg-charcoal/50 flex flex-col bg-black transition-colors duration-500 ${
                index !== 2 ? "border-white/10 md:border-r" : ""
              }`}
            >
              <div className={`relative aspect-video overflow-hidden eco-img-${index}`}>
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  style={card.imagePosition ? { objectPosition: card.imagePosition } : undefined}
                />
                {card.mobileImagePosition && (
                  <style>{`
                    @media (max-width: 767px) {
                      .eco-img-${index} img { object-position: ${card.mobileImagePosition} !important; }
                    }
                  `}</style>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col space-y-6 p-10">
                <card.icon className="text-gold h-12 w-12" />

                <h3 className="font-heading text-gold text-xl leading-snug tracking-tight uppercase">
                  {card.title}
                </h3>

                <p className="text-cream/80 flex-1 font-sans text-base leading-relaxed">
                  {card.body}
                </p>

                <CTAButton href={card.href} size="md" showArrow>
                  {card.cta}
                </CTAButton>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
