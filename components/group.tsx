import Image from 'next/image'

import Section from '@/components/ui/section'

import GroupPic from '@/public/images/group.jpg'

export default function Group() {
  return (
    <>
      <Section id="group">
        <div
          className="relative flex justify-center items-center "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Image className="rounded-lg" src={GroupPic} alt="Group" />
        </div>
      </Section>
    </>
  )
}
