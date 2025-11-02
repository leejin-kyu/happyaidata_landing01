'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhyHappyAI from '@/components/WhyHappyAI'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Difference from '@/components/Difference'
import Education from '@/components/Education'
import Promotion from '@/components/Promotion'
import Footer from '@/components/Footer'
import { usePageView } from '@/hooks/useAnalytics'

export default function Home() {
  usePageView()

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyHappyAI />
      <Services />
      <Projects />
      <Difference />
      <Education />
      <Promotion />
      <Footer />
    </main>
  )
}
