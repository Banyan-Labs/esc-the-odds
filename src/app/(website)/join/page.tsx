"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Rocket, CheckCircle2 } from "lucide-react";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-[#0f2b46] text-white text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-primary mb-6">
          <Rocket className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Start Your Journey
        </h1>
        <p className="text-xl text-cream/70 max-w-2xl mx-auto px-4">
          Ready to rewrite your story? Join our community of entrepreneurs and
          creators who are escaping the odds.
        </p>
      </div>

      <div className="py-16 px-4 md:px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
            <div className="mb-8 p-4 bg-secondary/5 rounded-xl border border-secondary/10">
              <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                What you&apos;ll get:
              </h4>
              <ul className="text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                <li>Access to Entrepreneurship 101</li>
                <li>Mentorship Opportunities</li>
                <li>Community Support</li>
                <li>Resource Library</li>
              </ul>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-6 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <h3 className="text-2xl font-bold text-secondary">Application Received</h3>
                <p className="text-gray-600 max-w-md">
                  Thank you for your interest. We&apos;ll be in touch soon with next steps.
                </p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" type="tel" placeholder="(555) 555-5555" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal">What is your primary goal?</Label>
                <select
                  id="goal"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>Start a Business</option>
                  <option>Learn Media/Tech Skills</option>
                  <option>Find Mentorship</option>
                  <option>Just Curious</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="story">
                  Briefly share your story (Optional)
                </Label>
                <Textarea
                  id="story"
                  placeholder="I'm looking for a second chance because..."
                  className="min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90 rounded-xl"
              >
                Apply Now
              </Button>
            </form>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
