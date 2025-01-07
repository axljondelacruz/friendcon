import Image from 'next/image'

import Section from '@/components/ui/section'
import FeaturedContentContainer from '@/components/ui/featured-content-container'
import FeaturedContentLeft from '@/components/ui/featured-content-left'
import FeaturedContentRight from '@/components/ui/featured-content-right'

import Wydm from '@/public/images/wdym.jpg'

import { GAME_ALBUM_URL } from '@/constants/links'

export default function Game() {
  return (
    <Section id="game">
      <FeaturedContentContainer>
        <FeaturedContentLeft
          header="What do you MEME 'FriendsMAS' Edition"
          body="Get ready to laugh until you cry with our brand-new custom party game. Inspired by Cards Against Humanity and What Do You Meme, this twist uses your own personal photos to create an outrageous, one-of-a-kind experience. Don't forget to update the photo album by <strong>Thursday, 1/9</strong> so we can transform your best (and most embarrassing) pictures into comedic gold. This is one game you definitely won't want to miss!"
          linkUrl1={GAME_ALBUM_URL}
          cta1="update the album"
        />
        <FeaturedContentRight imageSrc={Wydm} imageAlt="Alyssa" />
      </FeaturedContentContainer>
    </Section>
  )
}
