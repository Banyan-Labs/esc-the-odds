"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-[#0f2b46] text-white text-center">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-white/10 text-white">
          <Building2 className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Partner with Escape the Odds
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Bring our transformative curriculum to your facility or organization.
          We work with DOCs, recovery centers, and non-profits to empower
          individuals with entrepreneurship and media skills.
        </p>
      </div>

      <div className="py-16 px-4 md:px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <ul className="space-y-4 mb-8">
                {[
                  "Comprehensive Curriculum Dashboard",
                  "Facilitator Training & Support",
                  "Impact Tracking & Analytics",
                  "Alumni Network Access",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Organization Inquiry
              </h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input
                    id="orgName"
                    placeholder="Department of Corrections..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name</Label>
                    <Input id="contactName" placeholder="Jane Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Job Title</Label>
                    <Input id="role" placeholder="Program Director" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@organization.org"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Primary Interest</Label>
                  <select
                    id="interest"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>Implementing Curriculum</option>
                    <option>Speaking Engagement</option>
                    <option>Strategic Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your needs</Label>
                  <Textarea
                    id="message"
                    placeholder="We represent a facility looking for..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full font-bold bg-secondary hover:bg-secondary/90"
                >
                  Request Information
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
