import Image from 'next/image'

import Section from '@/components/ui/section'
import FeaturedContentContainer from '@/components/ui/featured-content-container'
import FeaturedContentLeft from '@/components/ui/featured-content-left'
import FeaturedContentRight from '@/components/ui/featured-content-right'

import DesertHotSprings from '@/public/images/desert-hot-springs.jpeg'

export default function Location() {
  const googleMapsLinkUrl = 'https://maps.app.goo.gl/KmtA662XdkrhXcrX9'
  const airBnbLinkUrl = 'https://www.airbnb.com/rooms/716609714014876455'

  return (
    <Section id="location">
      <FeaturedContentContainer>
        <FeaturedContentLeft
          imageSrc={DesertHotSprings}
          imageAlt="Desert Hot Springs"
        />
        <FeaturedContentRight
          header="Location"
          body="Nestled in the heart of the Coachella Valley, Desert Hot Springs
            offers a scenic oasis perfect for Babychella. With its relaxing hot
            springs, breathtaking desert views, and year-round sunshine, it’s the
            ideal backdrop for fun, family-friendly festivities. Get ready to soak
            up the good vibes in a place that blends natural serenity with a
            lively festival spirit."
          linkUrl1={googleMapsLinkUrl}
          cta1="google maps"
          linkUrl2={airBnbLinkUrl}
          cta2="airbnb"
        />
      </FeaturedContentContainer>
    </Section>
  )
}
