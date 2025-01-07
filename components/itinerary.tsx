import Section from '@/components/ui/section'
import Image from 'next/image'
import ItineraryUrl from '@/public/images/itinerary.png'

export default function Itinerary() {
  return (
    <Section id="itinerary">
      <div
        className="relative flex justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Image
          className="rounded-lg"
          src={ItineraryUrl}
          width={1024}
          alt="Lineup"
        />
      </div>
    </Section>
  )
}
