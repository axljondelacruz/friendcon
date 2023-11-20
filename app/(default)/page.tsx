export const metadata = {
  title: 'F23 Summit',
  description: 'The Announcement Page for The F23 Summit',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Itinerary from '@/components/itinerary'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Itinerary />
      <Zigzag />
      <Testimonials />
    </>
  )
}
