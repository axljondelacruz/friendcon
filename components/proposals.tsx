import Image from 'next/image'

import Section from '@/components/ui/section'
import FeaturedContentContainer from '@/components/ui/featured-content-container'
import FeaturedContentLeft from '@/components/ui/featured-content-left'
import FeaturedContentRight from '@/components/ui/featured-content-right'

import Presenting from '@/public/images/presenting.jpg'

import {
  PROPOSAL_TEMPLATE_URL,
  PROPOSAL_SHARED_DRIVE_URL,
} from '@/constants/links'

export default function Proposals() {
  return (
    <Section id="proposals">
      <FeaturedContentContainer>
        <FeaturedContentLeft imageSrc={Presenting} imageAlt="Presenting" />
        <FeaturedContentRight
          header="Proposals"
          body="Ready to share your brilliant ideas for our next gathering? Copy the event proposal template, fill it out with all your creative details, and upload it to the shared drive. This is your chance to help shape the future of our festivities—so dream big and get ready to dazzle us with your suggestions!"
          linkUrl1={PROPOSAL_TEMPLATE_URL}
          cta1="download the template"
          linkUrl2={PROPOSAL_SHARED_DRIVE_URL}
          cta2="upload to the drive"
        />
      </FeaturedContentContainer>
    </Section>
  )
}
