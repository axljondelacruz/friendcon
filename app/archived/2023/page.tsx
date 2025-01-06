export const metadata = {
  title: 'F23 Summit',
  description: 'The Announcement Page for The F23 Summit',
}

import PageIllustration1 from './components/ui/page-illustration-1'
import PageIllustration2 from './components/ui/page-illustration-2'
import Header from './components/ui/header'
import Hero from './components/hero'
import Welcome from './components/welcome'
import Itinerary from './components/itinerary'
import Location from './components/location'
import Community from './components/community'
import Testimonials from './components/testimonials'
import ThankYou from './components/thank-you'

export default function Home() {
  return (
    <>
      <PageIllustration1 />
      <Header />
      <PageIllustration2 />
      <Hero />
      <Welcome />
      <Itinerary />
      <Location />
      <Community />
      <Testimonials />
      <ThankYou />
    </>
  )
}
