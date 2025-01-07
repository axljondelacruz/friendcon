export const metadata = {
  title: 'F24: Babychella - Itinerary',
  description: 'The Itinerary Page for Babychella',
}

import Header from '@/components/ui/header'
import Itinerary from '@/components/itinerary'

export default function Home() {
  return (
    <>
      <Header />
      <Itinerary />
    </>
  )
}
