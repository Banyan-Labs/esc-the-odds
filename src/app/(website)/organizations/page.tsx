"use client";

import Image from "next/image";
import { FadeInView, CTAButton } from "@/components/shared";
import {
  COMMUNITY_PARTNERS,
  ENGAGEMENT_MODELS,
  WHO_WE_WORK_WITH,
} from "@/lib/constants/organizations";

export default function OrganizationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-black pt-28 pb-16 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/Image_24.jpeg"
            alt="Aaron congratulating program graduate with certificate"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/60 to-black" />

        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <FadeInView className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                FOR ORGANIZATIONS
              </span>
              <h1 className="font-heading text-5xl leading-tight tracking-tighter text-white md:text-8xl">
                PARTNER WITH <span className="text-gold">US.</span>
              </h1>
            </div>
            <p className="text-cream/90 mx-auto max-w-2xl font-sans text-xl leading-relaxed font-light md:text-2xl">
              Structured Reentry Education. Institutional Implementation.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-charcoal border-b border-white/5 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInView>
            <p className="text-cream/90 mx-auto max-w-4xl text-center font-sans text-xl leading-relaxed font-light md:text-2xl">
              Escape The Odds partners with correctional institutions, workforce systems, employers,
              and community organizations committed to measurable reintegration outcomes and
              economic mobility. We implement structured engagement models designed for
              accountability, preparation, and scalable delivery.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-black py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              HOW WE ENGAGE
            </span>
            <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
              ENGAGEMENT <span className="text-gold">MODELS</span>
            </h2>
          </div>

          <div className="space-y-0 border border-white/10">
            {ENGAGEMENT_MODELS.map((model, index) => (
              <FadeInView
                key={model.title}
                delay={index * 0.1}
                className={`group hover:bg-charcoal/30 flex flex-col transition-colors duration-500 md:flex-row ${
                  index !== ENGAGEMENT_MODELS.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="relative aspect-video shrink-0 overflow-hidden md:aspect-auto md:w-64 lg:w-80">
                  <Image
                    src={model.image}
                    alt={model.imageAlt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 hidden bg-linear-to-r from-transparent to-black/30 md:block" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent md:hidden" />
                </div>

                <div className="flex flex-1 flex-col gap-10 p-10 md:flex-row md:p-14">
                  <div className="shrink-0">
                    <div className="bg-gold/10 border-gold/30 group-hover:bg-gold flex h-16 w-16 items-center justify-center border transition-all duration-300">
                      <model.icon className="text-gold h-8 w-8 transition-colors group-hover:text-black" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <h3 className="font-heading text-2xl leading-snug tracking-tight text-white md:text-3xl">
                      {model.title.toUpperCase()}
                    </h3>

                    <p className="text-cream/80 font-sans text-lg leading-relaxed">
                      {model.description}
                    </p>

                    {model.label && (
                      <p className="font-heading text-gold text-sm tracking-widest uppercase">
                        {model.label}
                      </p>
                    )}

                    <ul className="space-y-3">
                      {model.includes.map((item) => (
                        <li
                          key={item}
                          className="text-cream/90 flex items-start gap-3 font-sans text-sm"
                        >
                          <div className="bg-gold mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {model.note && (
                      <p className="text-cream/90 font-sans text-sm italic">{model.note}</p>
                    )}

                    <CTAButton href={model.href} size="md" showArrow>
                      {model.cta.toUpperCase()}
                    </CTAButton>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-charcoal border-y border-white/5 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10 text-center">
            <FadeInView className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                OUR PARTNERS
              </span>
              <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
                WHO WE <span className="text-gold">WORK WITH</span>
              </h2>
            </FadeInView>

            <FadeInView delay={0.2} className="flex flex-wrap justify-center gap-4">
              {WHO_WE_WORK_WITH.map((item) => (
                <span
                  key={item}
                  className="border-gold/30 font-heading text-gold hover:border-gold border px-6 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </FadeInView>

            <FadeInView delay={0.3} className="pt-6">
              <span className="text-gold font-heading mb-6 block text-sm tracking-widest uppercase">
                AS SEEN IN
              </span>
              <Image
                src="/assets/CommunityPartners.png"
                alt="Community Partners and Media Features"
                width={1200}
                height={400}
                className="h-auto w-full object-contain"
              />

              <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
                {COMMUNITY_PARTNERS.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-cream hover:text-gold text-sm tracking-widest uppercase transition-colors"
                  >
                    {partner.name}
                  </a>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-black py-16 md:py-24 lg:py-32">
        <div className="bg-gold/5 pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]" />

        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <FadeInView direction="scale" className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                NEXT STEP
              </span>
              <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
                STRUCTURED ENGAGEMENT BEGINS <span className="text-gold">WITH ALIGNMENT.</span>
              </h2>
            </div>

            <p className="text-cream/90 mx-auto max-w-2xl font-sans text-xl leading-relaxed font-light">
              Schedule a consultation to determine the appropriate model for your organization.
            </p>

            <CTAButton href="/contact" showArrow>
              PARTNER WITH US
            </CTAButton>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
