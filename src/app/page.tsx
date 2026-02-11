"use client"

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProductsSection from '@/components/sections/ProductsSection'
import SmartAdvertisersSection from '@/components/sections/SmartAdvertisersSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import WhatsAppBenefitsSection from '@/components/sections/WhatsAppBenefitsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyPeopleComeBackSection from '@/components/sections/WhyPeopleComeBackSection'
import ScaleUpSection from '@/components/sections/ScaleUpSection'
import TopAdvertisersSection from '@/components/sections/TopAdvertisersSection'
import KeyAdvantagesSection from '@/components/sections/KeyAdvantagesSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import AboutSection from '@/components/sections/AboutSection'
import FindUsSection from '@/components/sections/FindUsSection'

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <ProductsSection />
        <SmartAdvertisersSection />
        <WhatsAppBenefitsSection />
        <ServicesSection />
        <WhyPeopleComeBackSection />
        <ScaleUpSection />
        <TopAdvertisersSection />
        <KeyAdvantagesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <AboutSection />
        <FindUsSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
