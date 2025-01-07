import Image from 'next/image'

import Section from '@/components/ui/section'
import FeaturedContentContainer from '@/components/ui/featured-content-container'
import FeaturedContentLeft from '@/components/ui/featured-content-left'
import FeaturedContentRight from '@/components/ui/featured-content-right'

import Presenting from '@/public/images/presenting.jpg'

export default function Proposals() {
  const tempalteUrl = 'hhttps://tinyurl.com/4y4dvkrx'
  const driveUrl = 'https://tinyurl.com/mr26raha'

  return (
    <Section id="proposals">
      <FeaturedContentContainer>
        <FeaturedContentLeft imageSrc={Presenting} imageAlt="Presenting" />
        <FeaturedContentRight
          header="Proposals"
          body="Ready to share your brilliant ideas for our next gathering? Copy the event proposal template, fill it out with all your creative details, and upload it to the shared drive. This is your chance to help shape the future of our festivities—so dream big and get ready to dazzle us with your suggestions!"
          linkUrl1={tempalteUrl}
          cta1="download the template"
          linkUrl2={driveUrl}
          cta2="upload to the drive"
        />
      </FeaturedContentContainer>
    </Section>
  )
}
