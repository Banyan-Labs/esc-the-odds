"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  ArrowUpRight,
  Handshake,
  Landmark,
  Heart,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";

const orgPathways = [
  {
    title: "Correctional Facilities",
    description:
      "Implement the facilitated film experience and Bounce Forward curriculum within your facility to reduce recidivism and provide tangible career pathways.",
    icon: Building2,
    features: [
      "Workforce Development",
      "Entrepreneurship",
      "Financial Empowerment",
    ],
  },
  {
    title: "Corporate Partners",
    description:
      "Align your organization with reentry transformation through second-chance hiring and strategic CSR initiatives.",
    icon: Handshake,
    features: [
      "Brand Alignment",
      "CSR Impact Tracking",
      "Direct Hiring Pipelines",
    ],
  },
  {
    title: "Government & Public Institutions",
    description:
      "Scale evidence-based reentry programs at the state and local level through data-driven policy and institutional partnerships.",
    icon: Landmark,
    features: [
      "Scalable Infrastructure",
      "Policy Advocacy",
      "Data-Driven Outcomes",
    ],
  },
];

const supportFunds = [
  "Curriculum development & scaling",
  "Instructor training & facilitation",
  "Media production & distribution",
  "Program operations & outreach",
];

export default function OrganizationsPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 grayscale">
          <Image
            src="/assets/carousel/SPEAKING-A-COMPARISON.png"
            alt="Strategic Partnership"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/60 to-black" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                PARTNER WITH US
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-tight tracking-tighter">
                SCALE THE <br />
                <span className="text-gold">IMPACT.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Whether you represent an institution, a business, or you&apos;re
              an individual who believes in the mission&mdash;there&apos;s a way
              to be part of the movement.
            </p>
            <div className="pt-8">
              <Link
                href="#pathways"
                className="inline-block px-10 py-5 bg-gold text-black font-heading text-xl hover:bg-white transition-all duration-300"
              >
                GET INVOLVED
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos — Moved Up */}
      <section className="py-16 bg-charcoal border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <span className="text-gold font-heading tracking-widest text-xs uppercase">
            TRUSTED BY
          </span>
          <div className="max-w-5xl mx-auto">
            <Image
              src="/assets/CommunityPartners.png"
              alt="Community Partners and Media Features"
              width={1200}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Partnership Pathways — Dual Audience */}
      <section id="pathways" className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-0 border border-white/10">
            {/* For Organizations — Left */}
            <div className="flex-[2] border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="p-10 border-b border-white/10">
                <span className="text-gold font-heading tracking-widest text-sm uppercase mb-4 block">
                  FOR ORGANIZATIONS
                </span>
                <h2 className="text-4xl md:text-5xl font-heading text-white leading-tight">
                  INSTITUTIONAL <span className="text-gold">PATHWAYS.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {orgPathways.map((path, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 flex flex-col items-start space-y-6 group hover:bg-charcoal/50 transition-colors duration-500"
                  >
                    <div className="w-14 h-14 bg-gold/10 flex items-center justify-center border border-gold/30 group-hover:bg-gold transition-all duration-300">
                      <path.icon className="w-7 h-7 text-gold group-hover:text-black transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-heading text-white tracking-tight group-hover:text-gold transition-colors">
                        {path.title.toUpperCase()}
                      </h3>
                      <p className="text-cream/60 leading-relaxed font-sans text-sm">
                        {path.description}
                      </p>
                    </div>
                    <ul className="space-y-3 pt-2 w-full">
                      {path.features.map((feat, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-3 text-[10px] font-heading tracking-widest text-gold opacity-80 uppercase"
                        >
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="p-10 border-t border-white/10">
                <Link
                  href="#inquiry"
                  className="inline-flex items-center text-xs font-heading tracking-[0.2em] text-gold hover:text-white transition-colors group"
                >
                  INQUIRE ABOUT PARTNERSHIP
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* For Individuals — Right */}
            <motion.div
              id="individual"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 p-10 flex flex-col space-y-8 bg-charcoal/30"
            >
              <div className="w-14 h-14 bg-gold/10 flex items-center justify-center border border-gold/30">
                <Heart className="w-7 h-7 text-gold" />
              </div>

              <div className="space-y-4">
                <span className="text-gold font-heading tracking-widest text-sm uppercase">
                  FOR INDIVIDUALS
                </span>
                <h2 className="text-3xl md:text-4xl font-heading text-white leading-tight">
                  SUPPORT THE <span className="text-gold">MISSION.</span>
                </h2>
              </div>

              <p className="text-cream/60 font-sans font-light leading-relaxed">
                You don&apos;t have to be an organization to make a difference.
                Individual supporters fuel the day-to-day operations that keep
                this mission moving forward.
              </p>

              <div className="space-y-4">
                <p className="text-[10px] font-heading tracking-widest text-cream/60 uppercase">
                  YOUR SUPPORT FUNDS
                </p>
                <ul className="space-y-4">
                  {supportFunds.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-cream/70 font-sans text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-auto">
                <a
                  href="https://upcurve.life/YOUR_CAMPAIGN_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-8 py-5 bg-gold text-black font-heading text-lg hover:bg-white transition-all duration-300 group"
                >
                  SUPPORT OUR WORK
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For-Profit Transparency */}
      <section className="py-24 bg-charcoal border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 bg-black border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldAlert className="w-12 h-12 text-gold" />
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-gold font-heading tracking-widest text-sm uppercase">
                    LEGAL POSITIONING
                  </span>
                  <h3 className="text-3xl font-heading text-white tracking-tight">
                    INVESTING IN THE MISSION
                  </h3>
                </div>
                <div className="space-y-6 text-cream/70 font-sans leading-relaxed text-lg">
                  <p>
                    Escape The Odds is a <strong>for-profit social impact
                    organization.</strong> This model allows us to scale rapidly,
                    attract institutional-grade talent, and build sustainable
                    pathways without relying on fluctuating donor cycles.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" />
                      <span>
                        Contributions are <strong>not</strong> tax-deductible
                        charitable donations.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" />
                      <span>
                        All funds are deployed directly into curriculum scaling
                        and media production.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section id="inquiry" className="py-32 bg-black relative">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex-1 space-y-12">
              <div className="space-y-4">
                <span className="text-gold font-heading tracking-widest text-sm uppercase">
                  GET IN TOUCH
                </span>
                <h2 className="text-5xl md:text-7xl font-heading text-white leading-[0.9] tracking-tighter">
                  JOIN THE <br />
                  <span className="text-gold">ROADMAP.</span>
                </h2>
              </div>
              <p className="text-xl text-cream/60 font-sans font-light leading-relaxed">
                Whether you represent a DOC facility, a corporate board, a
                government agency, or you&apos;re an individual who wants to get
                involved&mdash;let&apos;s connect.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <h4 className="text-gold font-heading tracking-widest text-xs uppercase">
                    EXPANSION ROADMAP
                  </h4>
                  <p className="text-sm text-cream/60 font-sans italic">
                    Scaling to 50+ facilities in 2026. Join the cohort.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-gold font-heading tracking-widest text-xs uppercase">
                    RESOURCE PORTAL
                  </h4>
                  <p className="text-sm text-cream/60 font-sans italic">
                    Exclusive metrics and facilitation data for registered
                    partners.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full bg-charcoal p-12 border border-white/5 shadow-2xl"
            >
              <h3 className="text-3xl font-heading text-white mb-10 tracking-tight underline decoration-gold/30 underline-offset-8">
                COLLABORATION DESK
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="firstName"
                      className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="lastName"
                      className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="orgName"
                    className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                  >
                    Organization Name (Optional)
                  </Label>
                  <Input
                    id="orgName"
                    className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className="font-heading tracking-widest text-[10px] text-cream/70 uppercase"
                  >
                    How Would You Like to Get Involved?
                  </Label>
                  <Textarea
                    id="message"
                    className="bg-black/50 border-white/10 rounded-none min-h-[150px] text-cream focus:border-gold transition-colors"
                  />
                </div>
                <Button className="w-full py-8 bg-gold text-black font-heading text-xl rounded-none hover:bg-white transition-all shadow-xl group">
                  SUBMIT{" "}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
