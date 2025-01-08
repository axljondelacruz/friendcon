import Section from '@/components/ui/section'
import FeaturedContentContainer from '@/components/ui/featured-content-container'
import FeaturedContentLeft from '@/components/ui/featured-content-left'
import FeaturedContentRight from '@/components/ui/featured-content-right'

import Golfing from '@/public/images/golfing.jpg'

import { ACTIVITES_SIGN_UP_SHEET_URL } from '@/constants/links'

export default function Activities() {
  return (
    <Section id="activities" className="mb-0">
      <FeaturedContentContainer>
        <FeaturedContentLeft
          header="Other Activities"
          body="Ready to tee off on the golf course or strike a pose for our upcoming photoshoot? We're compiling an interest list to make planning a breeze—and it all starts with you! Simply add your name, and we'll connect you with our event producer to coordinate all the details. Don't miss this chance to be part of the fun—sign up now!"
          linkUrl1={ACTIVITES_SIGN_UP_SHEET_URL}
          cta1="Sign up now"
        />
        <FeaturedContentRight imageSrc={Golfing} imageAlt="Golfing" />
      </FeaturedContentContainer>
    </Section>
  )
}
