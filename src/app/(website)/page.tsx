import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TheFilm } from "@/components/sections/TheFilm";
import { AwarenessToImplementation } from "@/components/sections/AwarenessToImplementation";
import { TheExperience } from "@/components/sections/TheExperience";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Testimonials } from "@/components/sections/Testimonials";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <TheFilm />
      <AwarenessToImplementation />
      <TheExperience />
      <Ecosystem />
      <Testimonials />
      <TargetAudience />
      <ContactSection />
      <Footer />
    </main>
  );
}
