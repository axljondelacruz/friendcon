import Image from 'next/image'

import Section from '@/components/ui/section'

import Poster from '@/public/images/poster.png'

export default function Lineup() {
  return (
    <>
      <Section id="lineup">
        <div
          className="relative flex justify-center items-center "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Image
            className="rounded-lg"
            src={Poster}
            width={1024}
            alt="Lineup"
          />
        </div>
      </Section>
    </>
  )
}
