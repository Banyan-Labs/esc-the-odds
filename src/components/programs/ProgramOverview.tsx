"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/shared";
import { PROGRAM_CARDS } from "@/lib/constants/programs";

export function ProgramOverview() {
  return (
    <section className="bg-black py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="sr-only">Program Overview</h2>
        <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAM_CARDS.map((program, index) => (
            <FadeInView
              key={program.anchor}
              delay={index * 0.1}
              className={`group hover:bg-charcoal/50 flex flex-col border-white/10 transition-colors duration-500 ${
                index < 3 ? "border-b" : ""
              } ${index % 3 !== 2 ? "lg:border-r" : ""} ${index % 2 === 0 ? "md:border-r lg:border-r-0" : ""}`}
            >
              <div className="relative aspect-[2/1] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  style={
                    program.imagePosition ? { objectPosition: program.imagePosition } : undefined
                  }
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              <div className="flex flex-1 flex-col space-y-3 p-6">
                <div className="bg-gold/10 text-gold border-gold/20 group-hover:bg-gold flex h-10 w-10 items-center justify-center border transition-all group-hover:text-black">
                  <program.icon className="h-5 w-5" />
                </div>

                <p className="text-gold font-heading text-sm tracking-widest uppercase md:text-base">
                  {program.subtitle}
                </p>
                <h3 className="font-heading group-hover:text-gold text-lg leading-tight tracking-tight text-white transition-colors">
                  {program.title}
                </h3>

                <p className="text-cream/80 flex-1 font-sans text-sm leading-relaxed font-light">
                  {program.description}
                </p>

                <div className="flex flex-col gap-2">
                  <Link
                    href={program.anchor}
                    className="bg-gold font-heading inline-flex items-center justify-center px-6 py-3 text-sm tracking-widest text-black uppercase transition-all duration-300 hover:bg-white"
                  >
                    LEARN MORE
                    <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="font-heading inline-flex items-center justify-center border-2 border-white px-6 py-3 text-sm tracking-widest text-white uppercase transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    <MessageSquare className="mr-2 h-3.5 w-3.5" />
                    {program.contactLabel}
                  </Link>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
