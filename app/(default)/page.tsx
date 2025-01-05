export const metadata = {
  title: 'F23 Summit',
  description: 'The Announcement Page for The F23 Summit',
}

import Header from '@/components/ui/header'
import Hero from '@/components/hero'
import Welcome from '@/components/welcome'
import Itinerary from '@/components/itinerary'
import Location from '@/components/location'
import Community from '@/components/community'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/ui/footer'
import ThankYou from '@/components/thank-you'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <Itinerary />
      <Location />
      <Community />
      <Testimonials />
      {/* <Footer /> */}
      <ThankYou />
    </>
  )
}
