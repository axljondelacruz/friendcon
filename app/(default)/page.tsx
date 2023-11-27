export const metadata = {
  title: 'F23 Summit',
  description: 'The Announcement Page for The F23 Summit',
}

import Hero from '@/components/hero'
import Welcome from '@/components/welcome'
import Itinerary from '@/components/itinerary'
import Community from '@/components/community'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Itinerary />
      <Community />
      <Testimonials />
      <Footer />
    </>
  )
}
