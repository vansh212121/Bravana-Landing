import AboutSection from '@/components/sections/About'
import CtaSection from '@/components/sections/Cta'
import FaqSection from '@/components/sections/Faq'
import FeaturedWork from '@/components/sections/FeaturedWork'
import HeroSection from '@/components/sections/Hero'
import Navigation from '@/components/sections/Navigation'
import PricingSection from '@/components/sections/Pricing'
import ProcessSection from '@/components/sections/Process'
import ServicesSection from '@/components/sections/Services'
import TestimonialsSection from '@/components/sections/Testimonails'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <section className='pb-28'>
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
      <AboutSection />
      <FeaturedWork />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </section>



  )
}

export default page