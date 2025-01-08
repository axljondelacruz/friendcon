import Image from 'next/image'

import FerrisWheel from '@/public/images/ferris-wheel.svg'

import GreenBlob from '@/components/ui/background/green-blob'
import BlueBlob from '@/components/ui/background/blue-blob'

export default function Background() {
  return (
    <div className="bg-ref before:content-[''] before:absolute">
      <div className="bg-ref-container">
        <GreenBlob />
        <BlueBlob />

        <div className="palm-trees" />
        <Image
          src={FerrisWheel}
          alt="My Icon"
          width={48}
          height={48}
          className="ferris-wheel"
        />
        <div className="twirl" />
        <div className="whisp" />
      </div>
    </div>
  )
}
