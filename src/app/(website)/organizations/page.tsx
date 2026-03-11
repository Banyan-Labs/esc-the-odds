"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Film, BookOpen, Briefcase, ArrowRight, MessageSquare, Mail } from "lucide-react";
import Image from "next/image";

const communityPartners = [
  { name: "WGN9", url: "https://wgntv.com" },
  { name: "Good Morning America", url: "https://www.goodmorningamerica.com" },
  { name: "CBS Chicago", url: "https://www.cbsnews.com/chicago/" },
  { name: "FOX 32 Chicago", url: "https://www.fox32chicago.com" },
  { name: "ABC 7 Chicago", url: "https://abc7chicago.com" },
  { name: "Crain's Chicago Business", url: "https://www.chicagobusiness.com" },
  { name: "Wall Street Journal", url: "https://www.wsj.com" },
  { name: "Switch Hustles University", url: "https://www.switchhustles.com" },
  { name: "Chicago Beyond", url: "https://chicagobeyond.org" },
  { name: "Chicago Urban League", url: "https://chiul.org" },
  { name: "Hyde Park Bank", url: "https://www.hydeparkbank.com" },
  { name: "Peer Plus", url: "https://peerplus.org" },
  { name: "CoreCivic", url: "https://www.corecivic.com" },
  { name: "Cook County Sheriff's Office", url: "https://www.cookcountysheriffil.gov" },
  { name: "Phalanx Family Services", url: "https://www.phalanxfamilyservices.org" },
  { name: "CityPoint Community Church", url: "https://www.citypointcc.org" },
  { name: "Hire360", url: "https://www.hire360chicago.com" },
  { name: "Legal Aid Chicago", url: "https://www.legalaidchicago.org" },
  { name: "Advocate Health Care", url: "https://www.advocatehealth.com" },
  { name: "Working Credit", url: "https://www.workingcredit.org" },
  { name: "Buddy Bear Car Wash", url: "https://buddybearcarwash.com" },
  { name: "CTA", url: "https://www.transitchicago.com" },
  { name: "Oak Park Public Library", url: "https://www.oppl.org" },
  { name: "DuPage County Sheriff's Office", url: "https://www.dupagesheriff.org" },
  { name: "GEO Group", url: "https://www.geogroup.com" },
  { name: "Greenwood Archer Capital", url: "https://greenwoodarcher.com" },
];

const engagementModels = [
  {
    icon: Film,
    title: "Escape The Odds of Recidivism Film – Impact Series",
    description:
      "A documentary-based hosting engagement designed to activate reflection, dialogue, and forward planning.",
    includes: [
      "Full 85-minute documentary screening",
      "Moderated dialogue + audience Q&A (panel style with Producer Aaron Smith and justice-impacted leaders as scheduled)",
      "50 Bounce Forward workbooks distributed locally for participant activation",
    ],
    cta: "Request Impact Series Consultation",
    href: "/contact",
    image: "/assets/Image_7.jpeg",
    imageAlt: "Large group at Cook County facility screening event",
  },
  {
    icon: BookOpen,
    title: "Bounce Forward Plan: Mastering Your Reentry – Curriculum License",
    description:
      "A 15-session institutional-ready reentry education framework designed for structured implementation.",
    label: "License includes:",
    includes: [
      "Documentary integration",
      "Participant workbooks",
      "Facilitation guides",
      "Community Engagement SME toolkit",
      "Evaluation & reporting framework",
    ],
    note: "Designed for: Departments of Corrections, county jails, community corrections, reentry-focused organizations.",
    cta: "Inquire About Curriculum Licensing",
    href: "/contact",
    image: "/assets/Image_13.jpeg",
    imageAlt: "Program participants with certificates",
  },
  {
    icon: Briefcase,
    title: "Vocational & Economic Empowerment Programs",
    description:
      "Targeted career development and entrepreneurship pathways aligned with reentry preparation.",
    label: "Programs include:",
    includes: [
      "Non-CDL Box Truck Entrepreneurship",
      "Commercial Cleaning Business Program",
      "House Hacking & Real Estate Fundamentals",
    ],
    note: "Available for in-facility or community-based implementation (virtual/live/tablet options as applicable).",
    cta: "Explore Vocational Pathways",
    href: "/programs",
    image: "/assets/Image_20.jpeg",
    imageAlt: "Vocational program classroom instruction",
  },
];

const whoWeWorkWith = [
  "Correctional Systems",
  "Workforce Development Boards",
  "Employers & HR Teams",
  "Reentry Organizations",
  "Foundations",
  "Libraries & Educational Institutions",
];

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl space-y-8"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-charcoal border-b border-white/5 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cream/90 mx-auto max-w-4xl text-center font-sans text-xl leading-relaxed font-light md:text-2xl"
          >
            Escape The Odds partners with correctional institutions, workforce systems, employers,
            and community organizations committed to measurable reintegration outcomes and economic
            mobility. We implement structured engagement models designed for accountability,
            preparation, and scalable delivery.
          </motion.p>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-black py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              HOW WE ENGAGE
            </span>
            <h2 className="font-heading text-4xl text-white md:text-6xl">
              ENGAGEMENT <span className="text-gold">MODELS</span>
            </h2>
          </div>

          <div className="space-y-0 border border-white/10">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group hover:bg-charcoal/30 flex flex-col transition-colors duration-500 md:flex-row ${
                  index !== engagementModels.length - 1 ? "border-b border-white/10" : ""
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
                      {model.includes.map((item, i) => (
                        <li
                          key={i}
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

                    <Link
                      href={model.href}
                      className="bg-gold font-heading group/link inline-flex items-center justify-center px-6 py-3 text-base tracking-widest text-black uppercase transition-all duration-300 hover:bg-white"
                    >
                      {model.cta.toUpperCase()}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-charcoal border-y border-white/5 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                OUR PARTNERS
              </span>
              <h2 className="font-heading text-4xl text-white md:text-6xl">
                WHO WE <span className="text-gold">WORK WITH</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {whoWeWorkWith.map((item, i) => (
                <span
                  key={i}
                  className="border-gold/30 font-heading text-gold hover:border-gold border px-6 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-6"
            >
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
                {communityPartners.map((partner) => (
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-black py-16 md:py-24 lg:py-32">
        <div className="bg-gold/5 pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]" />

        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl space-y-12"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                NEXT STEP
              </span>
              <h2 className="font-heading text-4xl leading-tight tracking-tight text-white md:text-6xl">
                STRUCTURED ENGAGEMENT BEGINS <span className="text-gold">WITH ALIGNMENT.</span>
              </h2>
            </div>

            <p className="text-cream/90 mx-auto max-w-2xl font-sans text-xl leading-relaxed font-light">
              Schedule a consultation to determine the appropriate model for your organization.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
              <Link
                href="/contact"
                className="group bg-gold font-heading flex w-full items-center justify-center px-10 py-5 text-2xl text-black transition-all duration-300 hover:bg-white sm:w-auto"
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                PARTNER WITH US
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="font-heading flex w-full items-center justify-center border-2 border-white px-10 py-5 text-2xl text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
              >
                <Mail className="mr-3 h-5 w-5" />
                CONTACT OUR TEAM
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
