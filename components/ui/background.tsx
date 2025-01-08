import Image from 'next/image'

import FerrisWheel from '@/public/images/ferris-wheel.svg'

export default function Banner() {
  return (
    <div className="bg-ref before:content-[''] before:absolute">
      <div className="bg-ref-container">
        <div className="green-blob floating">
          <div className="green-blob-content">
            <div className="green-blob-planes">
              <div className="green-blob-planes-wrapper">
                <div className="green-blob-plane">
                  <img
                    src="https://media.coachella.com/content/coachella-2024/blob-hero-green-2.png"
                    crossorigin=""
                    data-sampler="planeTexture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blue-blob floating-2">
          <div className="blue-blob-content">
            <div className="blue-blob-planes">
              <div className="blue-blob-planes-wrapper">
                <div className="blue-blob-plane">
                  <img
                    src="https://media.coachella.com/content/coachella-2024/blob-hero-blue-2.png"
                    crossorigin=""
                    data-sampler="planeTexture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

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
