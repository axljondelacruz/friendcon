import Image from 'next/image'
import Link from 'next/link'

import Section from './ui/section'
import GroupPic from '../public/images/group.jpg'

export default function ThankYou() {
  return (
    <Section id="thank-you" className="text-center">
      <h2 className="h1 text-black md:text-[100px] sm:text-[80px] mb-8">
        Thank you & see you next year!
      </h2>
      <Link href="https://photos.app.goo.gl/FUAbzTVtdzAC9X5FA">
        <Image className="rounded-lg" src={GroupPic} alt="Group" />
      </Link>
    </Section>
  )
}
