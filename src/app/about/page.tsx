"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MissionSection } from "@/components/MissionSection";
import { FounderSection } from "@/components/FounderSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-[#0f2b46] text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Empowering individuals through education, media, and second chances.
        </p>
      </div>

      <div className="pt-12">
        <MissionSection />
      </div>
      <FounderSection />
      <Footer />
    </main>
  );
}
