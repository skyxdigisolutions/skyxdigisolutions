'use client'
import Image from 'next/image'
import styles from './page.module.css'
import '../app/styles/globals.css'
import { HeroSection } from './components/Home/heroSection/HeroSection'
import { AboutUsSection } from './components/Home/aboutusSection/AboutusSection'
import { ServiceSection } from './components/Home/ServiceSection/ServiceSection'
import { CareerSection } from './components/Home/careerSection/CareerSection'
import { ContactSection } from './components/Home/contactSection/ContactSection'
import { CtaSection } from './components/Home/cta/ctaSection'
import Script from 'next/script'
import { useEffect, useRef } from 'react'
export default function Home() {
  function BackToTopButton() {
    // Function to handle scrolling to the top
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Add smooth scrolling behavior
      });
    };
  
    return (
      <button className="back-to-top-button" onClick={scrollToTop}>
        Back to Top
      </button>
    );
  }
  return (
   <main style={{scrollBehavior:'smooth'}}>
    <HeroSection />
    <AboutUsSection />
    <ServiceSection />
    <CareerSection />
    <ContactSection/>
    <CtaSection/>
   </main>
  )
}
