import Section from '@/components/ui/section'
import FeaturedContentContainer from '@/components/ui/featured-content-container'
import FeaturedContentLeft from '@/components/ui/featured-content-left'
import FeaturedContentRight from '@/components/ui/featured-content-right'

import PilatesFlyer from '@/public/images/pliates.png'
import PilatesBlob from '@/public/images/pilates-blob.png'

import { ACTIVITES_SIGN_UP_SHEET_URL } from '@/constants/links'

export default function Activities() {
  return (
    <Section id="pilates" className="mb-0">
      <FeaturedContentContainer>
        <FeaturedContentLeft imageSrc={PilatesBlob} imageAlt="PilatesBlob" />
        <FeaturedContentRight
          header="Pilates Under the Palms with Eliza"
          body="If you would like to start your day vibing with Eliza. Please bring the following: yoga mat, grip socks, resistance bands and your favorite work-out outfit. Eliza will be performing at 9am on Saturday 01/11. We’re excited to welcome our newest performer, we hope to see you all there! ✌🏼"
          flyerImageSrc={PilatesFlyer}
        ></FeaturedContentRight>
      </FeaturedContentContainer>
    </Section>
  )
}
