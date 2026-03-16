"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import Image from "next/image";
import { INQUIRY_OPTIONS, ROLE_OPTIONS } from "@/lib/constants/contact";
import { submitContactForm } from "./actions";

const selectClasses =
  "flex h-14 w-full rounded-none border border-white/10 bg-black/50 px-4 py-2 text-sm text-cream focus:ring-1 focus:ring-gold outline-none appearance-none cursor-pointer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;

    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      city: (form.elements.namedItem("city") as HTMLInputElement).value,
      orgName: (form.elements.namedItem("orgName") as HTMLInputElement).value,
      titleRole: (form.elements.namedItem("titleRole") as HTMLInputElement).value,
      programInterest: (form.elements.namedItem("programInterest") as HTMLSelectElement).value,
      audienceSize: (form.elements.namedItem("audienceSize") as HTMLInputElement).value,
      decisionRole: (form.elements.namedItem("decisionRole") as HTMLSelectElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
    };

    try {
      const result = await submitContactForm(data);

      if (!result.success) throw new Error(result.error);
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email info@escapetheodds.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-white/5 bg-black pt-28 pb-16 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/Image_26.jpeg"
            alt="Aaron connecting with individuals at a correctional facility"
            fill
            className="object-cover object-[center_15%]"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black" />

        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                CONTACT
              </span>
              <h1 className="font-heading text-5xl leading-[0.9] tracking-tighter text-white md:text-8xl">
                GET IN <span className="text-gold">TOUCH</span>
              </h1>
            </div>
            <p className="text-cream/90 mx-auto max-w-2xl font-sans text-xl leading-relaxed font-light md:text-2xl">
              Structured Engagement Begins with Clear Alignment
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-16 lg:col-span-5"
            >
              <div className="space-y-8">
                <p className="text-cream/80 font-sans text-xl leading-relaxed font-light">
                  Escape The Odds partners with correctional facilities, organizations, and leaders
                  committed to structured reentry education and economic empowerment. Select the
                  option below so we can route your inquiry appropriately.
                </p>
              </div>

              <div className="space-y-10">
                <div className="group flex gap-8">
                  <div className="bg-gold/10 border-gold/20 group-hover:bg-gold flex h-16 w-16 items-center justify-center border transition-all duration-500 group-hover:text-black">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-cream/80 text-sm tracking-widest uppercase">
                      MEDIA / PRESS
                    </h3>
                    <p className="text-cream/90 font-sans text-sm">
                      For interviews, speaking, and press:
                    </p>
                    <a
                      href="mailto:info@escapetheodds.com"
                      className="font-heading hover:text-gold block text-2xl text-white transition-colors"
                    >
                      info@escapetheodds.com
                    </a>
                  </div>
                </div>

                <div className="group flex gap-8">
                  <div className="bg-charcoal/50 flex h-16 w-16 items-center justify-center border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-cream/80 text-sm tracking-widest uppercase">
                      HEADQUARTERS
                    </h3>
                    <p className="font-heading text-xl text-white">CHICAGO, ILLINOIS &bull; USA</p>
                  </div>
                </div>
              </div>

              {/* Individual Learners Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-gold/20 bg-gold/5 space-y-4 border p-8"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="text-gold h-6 w-6" />
                  <h3 className="font-heading text-gold text-sm tracking-widest uppercase">
                    INDIVIDUAL LEARNERS
                  </h3>
                </div>
                <p className="text-cream/80 font-sans leading-relaxed">
                  For books and self paced courses, please visit our learning platform.
                </p>
                <a
                  href="https://courses.escapetheodds.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold font-heading group inline-flex items-center justify-center px-8 py-4 text-base tracking-widest text-black uppercase transition-all duration-300 hover:bg-white"
                >
                  EXPLORE INDIVIDUAL LEARNING
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-charcoal border border-white/5 p-12 shadow-2xl lg:col-span-7 lg:p-16"
            >
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center justify-center space-y-6 py-16 text-center"
                >
                  <Image
                    src="/assets/logo-notxt.png"
                    alt="Escape The Odds"
                    width={60}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                  <CheckCircle2 className="text-gold h-16 w-16" />
                  <h2 className="font-heading text-3xl text-white">MESSAGE RECEIVED</h2>
                  <p className="text-cream/90 max-w-md text-lg">
                    Thank you for reaching out. Our team will respond within 48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-heading decoration-gold/30 mb-12 text-3xl tracking-tight text-white underline underline-offset-8">
                    INQUIRY FORM
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label
                          htmlFor="firstName"
                          className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                        >
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          required
                          className="text-cream focus:border-gold h-14 rounded-none border-white/10 bg-black/50 transition-colors"
                          placeholder="FIRST NAME"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="lastName"
                          className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          required
                          className="text-cream focus:border-gold h-14 rounded-none border-white/10 bg-black/50 transition-colors"
                          placeholder="LAST NAME"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label
                          htmlFor="email"
                          className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="text-cream focus:border-gold h-14 rounded-none border-white/10 bg-black/50 transition-colors"
                          placeholder="EMAIL@ORGANIZATION.ORG"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="phone"
                          className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                        >
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          className="text-cream focus:border-gold h-14 rounded-none border-white/10 bg-black/50 transition-colors"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label
                          htmlFor="orgName"
                          className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                        >
                          Organization Name
                        </Label>
                        <Input
                          id="orgName"
                          className="text-cream focus:border-gold h-14 rounded-none border-white/10 bg-black/50 transition-colors"
                          placeholder="YOUR ORGANIZATION"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="titleRole"
                          className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                        >
                          Title / Role
                        </Label>
                        <Input
                          id="titleRole"
                          className="text-cream focus:border-gold h-14 rounded-none border-white/10 bg-black/50 transition-colors"
                          placeholder="YOUR TITLE"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="city"
                        className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                      >
                        City
                      </Label>
                      <Input
                        id="city"
                        className="text-cream focus:border-gold h-14 rounded-none border-white/10 bg-black/50 transition-colors"
                        placeholder="CHICAGO"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="programInterest"
                        className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                      >
                        Program of Interest
                      </Label>
                      <select id="programInterest" className={selectClasses}>
                        {INQUIRY_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="audienceSize"
                        className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                      >
                        Estimated Audience Size
                      </Label>
                      <Input
                        id="audienceSize"
                        className="text-cream focus:border-gold h-14 rounded-none border-white/10 bg-black/50 transition-colors"
                        placeholder="E.G. 50, 100, 200+"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="decisionRole"
                        className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                      >
                        Decision-Making Role
                      </Label>
                      <select id="decisionRole" className={selectClasses}>
                        <option value="">SELECT ROLE</option>
                        {ROLE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="notes"
                        className="font-heading text-cream/90 text-sm tracking-widest uppercase"
                      >
                        Additional Notes
                      </Label>
                      <Textarea
                        id="notes"
                        className="text-cream focus:border-gold min-h-[180px] rounded-none border-white/10 bg-black/50 transition-colors"
                        placeholder="ANYTHING ELSE WE SHOULD KNOW?"
                      />
                    </div>

                    {error && <p className="text-center font-sans text-sm text-red-400">{error}</p>}

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="bg-gold font-heading group w-full rounded-none py-10 text-2xl text-black shadow-[0_10px_40px_rgba(223,176,90,0.1)] transition-all hover:bg-white disabled:opacity-50"
                    >
                      {submitting ? "SENDING..." : "SEND MESSAGE"}{" "}
                      {!submitting && (
                        <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
