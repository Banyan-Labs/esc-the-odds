import { getPayload } from 'payload'
import config from '@payload-config'
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TheFilm } from "@/components/sections/TheFilm";
import { TheExperience } from "@/components/sections/TheExperience";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Curriculum } from "@/components/sections/Curriculum";
import { Testimonials } from "@/components/sections/Testimonials";
import { ProgramDelivery } from "@/components/sections/ProgramDelivery";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

async function getHomepageData() {
  try {
    const payload = await getPayload({ config })
    return await payload.findGlobal({ slug: 'homepage', depth: 1 })
  } catch {
    // Falls back to component defaults when DB is unavailable
    return null
  }
}

export default async function Home() {
  const homepage = await getHomepageData()

  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />
      <Hero data={homepage?.hero} />
      <TheFilm data={homepage?.theFilm} />
      <TheExperience data={homepage?.theExperience} />
      <Ecosystem data={homepage?.ecosystem} />
      <Curriculum data={homepage?.curriculum} />
      <Testimonials data={homepage?.testimonials} />
      <ProgramDelivery data={homepage?.programDelivery} />
      <TargetAudience data={homepage?.targetAudience} />
      <ContactSection data={homepage?.contactSection} />
      <Footer />
    </main>
  );
}
