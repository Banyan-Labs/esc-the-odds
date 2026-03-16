"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import { SectionHeader, FadeInView } from "@/components/shared";
import { TESTIMONIALS } from "@/lib/constants/home";

export function Testimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured);
  const rest = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-white/5 bg-black py-12 md:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <Image
          src="/assets/Image_12.jpeg"
          alt="Kwante W. standing next to his box truck"
          fill
          className="object-cover object-[center_20%]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <SectionHeader
          subtitle="IMPACT STORIES"
          heading="VOICES OF"
          accentText="TRANSFORMATION"
          description="Real stories from those who chose to bounce forward."
        />

        {/* Featured Testimonial */}
        {featured && (
          <FadeInView className="border-gold/20 mb-8 border bg-black/60 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {featured.image && (
                <div className="relative aspect-square md:col-span-2 md:aspect-auto">
                  <Image
                    src={featured.image}
                    alt={featured.name}
                    fill
                    className="object-cover object-[center_20%]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent md:bg-linear-to-l md:from-black/40 md:via-transparent md:to-transparent" />
                </div>
              )}
              <div className="flex flex-col justify-center space-y-6 p-10 md:col-span-3 md:p-12">
                <Quote className="text-gold h-10 w-10" />
                <p className="text-cream/90 font-sans text-xl leading-relaxed italic md:text-2xl">
                  &ldquo;{featured.quote}&rdquo;
                </p>
                <div className="border-gold/20 border-t pt-6">
                  <p className="font-heading text-xl tracking-tight text-white">{featured.name}</p>
                  <p className="text-gold font-heading mt-1 text-sm tracking-widest uppercase">
                    {featured.role}
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>
        )}

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((testimonial, index) => (
            <FadeInView
              key={`${testimonial.name}-${testimonial.quote.slice(0, 30)}`}
              delay={index * 0.1}
              className="group hover:border-gold/30 relative border border-white/5 bg-black/40 p-10 transition-all duration-500"
            >
              <Quote className="text-gold/20 mb-6 h-8 w-8" />
              <p className="text-cream/90 mb-8 font-sans text-lg leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-heading text-lg tracking-tight text-white">{testimonial.name}</p>
                <p className="text-gold font-heading mt-1 text-sm tracking-widest uppercase">
                  {testimonial.role}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
