export const metadata = {
  title: 'F24 Babychella',
  description: 'The Announcement Page for The F24 Babychella',
}

import ThankYou from '@/components/thank-you'
import Group from '@/components/group'
import Background from '@/components/ui/background/background'

export default function Home() {
  return (
    <>
      <Background />
      <ThankYou />
      <Group />
    </>
  )
}
