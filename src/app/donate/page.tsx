"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { Heart, CreditCard, Calendar } from "lucide-react";

export default function DonatePage() {
  const [amount, setAmount] = useState("50");
  const [frequency, setFrequency] = useState("monthly");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-[#0f2b46] text-white text-center">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-white/10 text-primary">
          <Heart className="w-8 h-8 fill-current" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Support Our Mission
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Your contribution helps us provide education, resources, and
          opportunities to those seeking a second chance.
        </p>
      </div>

      <div className="py-16 px-4 md:px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <form className="space-y-8">
              {/* Frequency */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">
                  Donation Frequency
                </Label>
                <div className="flex gap-4 p-1 bg-gray-100 rounded-lg">
                  {["one-time", "monthly"].map((freq) => (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setFrequency(freq)}
                      className={`flex-1 py-3 px-6 rounded-md text-sm font-bold transition-all ${
                        frequency === freq
                          ? "bg-white text-primary shadow-sm"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {freq === "one-time" ? "One Time" : "Monthly"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Select Amount</Label>
                <div className="grid grid-cols-3 gap-4">
                  {["25", "50", "100", "250", "500", "custom"].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt)}
                      className={`py-4 px-4 rounded-xl border-2 transition-all font-bold text-lg ${
                        amount === amt
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-gray-200 hover:border-primary/50 text-gray-600"
                      }`}
                    >
                      {amt === "custom" ? "Custom" : `$${amt}`}
                    </button>
                  ))}
                </div>
                {amount === "custom" && (
                  <div className="relative mt-2">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                      $
                    </span>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      className="pl-8 py-6 text-lg"
                    />
                  </div>
                )}
              </div>

              {/* Personal Info */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  Payment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full text-lg font-bold py-6 bg-primary hover:bg-primary/90 rounded-xl"
              >
                Donate {amount !== "custom" && `$${amount}`}
              </Button>

              <p className="text-center text-sm text-gray-500 pt-4">
                Secure payment processing. Your donation is tax-deductible to
                the extent allowed by law.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
