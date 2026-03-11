"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionHeader, FadeInView } from "@/components/shared";
import { MEDIA_MENTIONS } from "@/lib/constants/home";

export function MediaPress() {
  return (
    <section className="border-t border-white/5 bg-black py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          subtitle="IN THE MEDIA"
          heading="PRESS &"
          accentText="COVERAGE"
          description="National and local coverage highlighting the impact of the Escape The Odds movement."
        />

        {/* Featured Image — Sun-Times Front Page */}
        <FadeInView className="mx-auto mb-16 max-w-2xl">
          <div className="group relative aspect-square overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/assets/Image_3.jpeg"
              alt="Chicago Sun-Times front page featuring Aaron Smith — Second Chance"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <p className="text-cream/80 mt-4 text-center font-sans text-sm italic">
            Chicago Sun-Times front page — April 18, 2022
          </p>
        </FadeInView>

        {/* Media Mention Cards */}
        <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {MEDIA_MENTIONS.map((item, index) => (
            <FadeInView
              key={item.publication}
              delay={index * 0.1}
              className={`group hover:bg-charcoal/50 flex flex-col justify-between p-10 transition-all duration-500 ${
                index < MEDIA_MENTIONS.length - 3 ? "border-b border-white/10" : ""
              } ${index % 3 !== 2 ? "border-white/10 lg:border-r" : ""}`}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col justify-between"
              >
                <div>
                  <p className="font-heading text-gold mb-4 text-sm tracking-widest uppercase">
                    {item.publication}
                  </p>
                  <p className="font-heading group-hover:text-gold mb-6 text-lg leading-snug tracking-tight text-white transition-colors">
                    {item.headline}
                  </p>
                </div>
                <div className="font-heading text-cream/80 group-hover:text-gold flex items-center text-sm tracking-[0.2em] transition-colors">
                  READ ARTICLE
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
