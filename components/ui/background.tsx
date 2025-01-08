import Image from 'next/image'

import FerrisWheel from '@/public/images/ferris-wheel.svg'

export default function Banner() {
  return (
    <div className="bg-ref before:content-[''] before:absolute">
      <div className="bg-ref-container">
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
