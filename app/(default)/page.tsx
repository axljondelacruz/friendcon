export const metadata = {
  title: 'F24 Babychella',
  description: 'The Announcement Page for The F24 Babychella',
}

import Banner from '@/components/banner'
import Lineup from '@/components/lineup'
import Location from '@/components/location'
import Game from '@/components/game'
import Proposals from '@/components/proposals'
import Activities from '@/components/activities'

export default function Home() {
  return (
    <>
      <Banner />
      <Lineup />
      <Location />
      <Game />
      <Proposals />
      <Activities />
    </>
  )
}
