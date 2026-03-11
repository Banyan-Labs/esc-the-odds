"use client";

import { Mail, MessageSquare } from "lucide-react";
import { FadeInView, CTAButton } from "@/components/shared";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black py-16 md:py-24 lg:py-32">
      {/* Cinematic Background Glow */}
      <div className="bg-gold/5 pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]" />

      <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
        <FadeInView direction="scale" className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4">
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              NEXT STEPS
            </span>
            <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
              READY TO BRING ESCAPE THE ODDS{" "}
              <span className="text-gold">TO YOUR ORGANIZATION?</span>
            </h2>
          </div>

          <p className="text-cream/90 mx-auto max-w-2xl font-sans text-xl leading-relaxed font-light">
            Structured. Facilitated. Institutional-ready. Let&apos;s discuss how the Impact Series
            or Bounce Forward Curriculum can align with your objectives.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
            <CTAButton href="/contact" icon={MessageSquare} showArrow fullWidth>
              HOST THE FILM
            </CTAButton>

            <CTAButton href="/contact" variant="outline" icon={Mail} fullWidth>
              CONTACT OUR TEAM
            </CTAButton>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
