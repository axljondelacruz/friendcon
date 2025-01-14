export const metadata = {
  title: 'F24 Babychella',
  description: 'The Announcement Page for The F24 Babychella',
}

import Banner from '../components/banner'
import Lineup from '../components/lineup'
import Location from '../components/location'
import Game from '../components/game'
import Proposals from '../components/proposals'
import Activities from '../components/activities'
import Pilates from '../components/pilates'

import ThankYou from '../components/thank-you'
import Group from '../components/group'

import Background from '../components/ui/background/background-2'

export default function Home() {
  return (
    <>
      <Banner />
      <Lineup />
      <Background />

      <Location />
      <Game />
      <Proposals />
      <Activities />
      <Pilates />
      <ThankYou />
      <Group />
    </>
  )
}
