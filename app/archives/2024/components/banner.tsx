import Section from './ui/section'
import SectionHeader from './ui/section-header'

export default function Banner() {
  return (
    <Section
      id="banner"
      className="max-w-6xl mx-auto p-4 sm:px-6 relative text-center"
    >
      <h2 className="h1 text-black md:text-[100px] sm:text-[80px]">
        See You Soon!
      </h2>
    </Section>
  )
}
