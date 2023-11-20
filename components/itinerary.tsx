import Image from 'next/image'

import ItinImage from '@/public/images/itinerary.png'

export default function Itinerary() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 section-header">What to expect</h1>
            <p className="text-xl text-gray-400">
              Embark for a weekend filled with food, drinks, and pals. Every
              moment at FriendCon2023 is designed to inspire, connect, and leave
              you with unforgettable memories.
            </p>
          </div>

          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-4"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={ItinImage}
              width={700}
              alt="Features 01"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
