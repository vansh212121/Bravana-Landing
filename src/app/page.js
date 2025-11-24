import AboutSection from '@/components/sections/About'
import FeaturedWork from '@/components/sections/FeaturedWork'
import HeroSection from '@/components/sections/Hero'
import Navigation from '@/components/sections/Navigation'
import ProcessSection from '@/components/sections/Process'
import ServicesSection from '@/components/sections/Services'
import TestimonialsSection from '@/components/sections/Testimonails'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <section>
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
      <AboutSection />
      <FeaturedWork />
      <ServicesSection />
      {/* <ProcessSection /> */}
      <TestimonialsSection />
    </section>



  )
}

export default page