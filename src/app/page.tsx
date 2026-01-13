import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { FounderSection } from "@/components/FounderSection";
import { MissionSection } from "@/components/MissionSection";
import { CoursesSection } from "@/components/CoursesSection";
import { DocumentarySection } from "@/components/DocumentarySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <FounderSection />
      <MissionSection />
      <CoursesSection />
      <DocumentarySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
