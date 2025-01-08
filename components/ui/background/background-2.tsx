import Section from '@/components/ui/section'

import PosterLeft from '@/components/ui/background/poster-left'
import PosterRight from '@/components/ui/background/poster-right'

export default function Background() {
  return (
    <div className="max-w-6xl mx-auto relative">
      <PosterLeft />
      <PosterRight />
    </div>
  )
}
