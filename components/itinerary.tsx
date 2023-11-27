import Image from 'next/image'
import Section from '@/components/ui/section'
import SectionHeader from '@/components/ui/section-header'

import ItinImage from '@/public/images/itinerary.png'

export default function Itinerary() {
  return (
    <Section>
      <SectionHeader
        headerText="What to expect"
        description="Embark for a weekend filled with food, drinks, and pals. Every moment
      at FriendCon2023 is designed to inspire, connect, and leave you with
      unforgettable memories."
      />

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
    </Section>
  )
}
