import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoriesGrid } from "@/components/categories-grid"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CategoriesGrid />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
