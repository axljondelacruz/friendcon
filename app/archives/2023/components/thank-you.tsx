import Link from 'next/link'
import Image from 'next/image'

import Section from './ui/section'
import SectionHeader from './ui/section-header'
import GroupPhoto from '../public/images/f23-group-photo.jpg'

export default function ThankYou() {
  return (
    <Section>
      <div className="relative pt-5 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="h2 mb-4 section-header">
            Thank You For Attending FriendCon 2023!
          </h1>
        </div>

        <div
          className="relative flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link href="https://photos.app.goo.gl/ZNaToCv1mFW4zJJp6">
            <Image
              src={GroupPhoto}
              width={1024}
              height={576}
              alt="Group photo"
            />
          </Link>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="h2 section-header thank-you-footer">
            We'll see you all at F24!
          </h1>
        </div>
      </div>
    </Section>
  )
}
