"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DocumentarySection } from "@/components/DocumentarySection";

export default function DocumentaryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-[#0f2b46] text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The Documentary</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Witness the stories of resilience and transformation.
        </p>
      </div>

      <div className="pt-12">
        <DocumentarySection />
      </div>
      <Footer />
    </main>
  );
}
