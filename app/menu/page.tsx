export const metadata = {
  title: 'F24: Babychella - Menu',
  description: 'The Menu Page for Babychella',
}

import Header from '@/components/ui/header'
import Menu from '@/components/itinerary'

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
    </>
  )
}
