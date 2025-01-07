import Image from 'next/image'

import Section from '@/components/ui/section'
import FeaturedContentContainer from '@/components/ui/featured-content-container'
import FeaturedContentLeft from '@/components/ui/featured-content-left'
import FeaturedContentRight from '@/components/ui/featured-content-right'

import Golfing from '@/public/images/golfing.jpg'

export default function Activities() {
  const tempalteUrl = 'hhttps://tinyurl.com/4y4dvkrx'
  const driveUrl = 'https://tinyurl.com/mr26raha'

  return (
    <Section id="activities">
      <FeaturedContentContainer>
        <FeaturedContentLeft
          header="Other Activities"
          body="Ready to tee off on the golf course or strike a pose for our upcoming photoshoot? We're compiling an interest list to make planning a breeze—and it all starts with you! Simply add your name, and we'll connect you with our event producer to coordinate all the details. Don't miss this chance to be part of the fun—sign up now!"
          linkUrl1={tempalteUrl}
          cta1="Sign up now"
        />
        <FeaturedContentRight imageSrc={Golfing} imageAlt="Golfing" />
      </FeaturedContentContainer>
    </Section>
  )
}
