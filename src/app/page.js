import AboutSection from '@/components/sections/About'
import FeaturedWork from '@/components/sections/FeaturedWork'
import HeroSection from '@/components/sections/Hero'
import Navigation from '@/components/sections/Navigation'
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
    </section>



  )
}

export default page