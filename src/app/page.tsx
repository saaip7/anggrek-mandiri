import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import WhyVisitSection from "../components/sections/WhyVisitSection"
import GallerySection from "../components/sections/GallerySection"
import TicketingSection from "../components/sections/TicketingSection"
import TestimonialsSection from "../components/sections/TestimonialsSection"
import ContactSection from "../components/sections/ContactSection"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="bg-[#FAFAFA] text-[#4E342E] min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhyVisitSection />
      <GallerySection />
      <TicketingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
