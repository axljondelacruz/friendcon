import Section from '@/components/ui/section'
import SectionHeader from '@/components/ui/section-header'

export default function Banner() {
  return (
    <Section
      noPad
      id="banner"
      className="max-w-6xl mx-auto p-4 sm:px-6 relative text-center"
    >
      <h2 className="h1 text-black md:text-[100px] sm:text-[80px]">
        See You Soon!
      </h2>
    </Section>
  )
}
