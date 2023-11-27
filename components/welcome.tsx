import Section from '@/components/ui/section'
import SectionHeader from '@/components/ui/section-header'

export default function Welcome() {
  return (
    <Section>
      <SectionHeader headerText="Welcome to FriendCon2023 - The F23 Summit!">
        <p className="text-xl text-gray-400">
          Join us for a one-of-a-kind corporate event that blends business and
          friendship seamlessly. FriendCon2023, also known as The F23 Summit, is
          not your typical conference. It's a gathering of pals, innovators, and
          visionaries coming together to connect, collaborate, and{' '}
          <strong>Unleash Synergies Among Pals</strong> in an atmosphere of
          camaraderie.
        </p>
      </SectionHeader>
    </Section>
  )
}
