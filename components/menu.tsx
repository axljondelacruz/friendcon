import Section from '@/components/ui/section'
import Image from 'next/image'
import DrinkMenu from '@/public/images/drink-menu.png'

export default function Menu() {
  return (
    <Section id="menu">
      <div
        className="relative flex justify-center items-center "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Image
          className="rounded-lg"
          src={DrinkMenu}
          width={1024}
          alt="Lineup"
        />
      </div>
    </Section>
  )
}
