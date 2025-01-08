import Section from '@/components/ui/section'
import FeaturedContentContainer from '@/components/ui/featured-content-container'
import FeaturedContentLeft from '@/components/ui/featured-content-left'
import FeaturedContentRight from '@/components/ui/featured-content-right'

import DesertHotSprings from '@/public/images/desert-hot-springs.jpeg'

import { LOCATION_GOOGLE_URL, LOCATION_AIRBNB_URL } from '@/constants/links'

export default function Location() {
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
          linkUrl1={LOCATION_GOOGLE_URL}
          cta1="google maps"
          linkUrl2={LOCATION_AIRBNB_URL}
          cta2="airbnb"
        />
      </FeaturedContentContainer>
    </Section>
  )
}
