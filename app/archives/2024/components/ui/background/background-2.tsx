import Section from '../../ui/section'

import PosterLeft from '../../ui/background/poster-left'
import PosterRight from '../../ui/background/poster-right'

export default function Background() {
  return (
    <div className="max-w-6xl mx-auto relative">
      <PosterLeft />
      <PosterRight />
    </div>
  )
}
