import Image from 'next/image'

import LogoImage01 from '@/public/images/logo-01.png'
import LogoImage02 from '@/public/images/logo-02.png'
import LogoImage03 from '@/public/images/logo-03.png'
import LogoImage04 from '@/public/images/logo-04.png'
import LogoImage05 from '@/public/images/logo-05.png'
import LogoImage06 from '@/public/images/logo-06.png'
import LogoImage07 from '@/public/images/logo-07.png'
import LogoImage08 from '@/public/images/logo-08.png'
import LogoImage09 from '@/public/images/logo-09.png'
import LogoImage10 from '@/public/images/logo-10.png'

import Section from '@/components/ui/section'
import SectionHeader from '@/components/ui/section-header'

export default function Community() {
  return (
    <Section id="our-community">
      <SectionHeader
        headerText="Meet Our Diverse Community"
        description="Join a vibrant mix of seasoned entrepreneurs, industry leaders,
        startups, and creatives at FriendCon2023. United by a shared passion
        for collaboration, innovation, and 'Unleashing Synergies Among Pals,'
        anticipate dynamic networking and meaningful connections with
        professionals across various fields. Get ready for an extraordinary
        gathering that goes beyond the ordinary conference experience."
      />

      <div className="grid gap-20">
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-6"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={LogoImage01}
              width={550}
              alt="Features 01"
            />
          </div>
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-6"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={LogoImage02}
              width={550}
              alt="Features 02"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-6"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={LogoImage03}
              width={550}
              alt="Features 03"
            />
          </div>
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-6"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={LogoImage04}
              width={550}
              alt="Features 04"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-6"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={LogoImage05}
              width={550}
              alt="Features 05"
            />
          </div>
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-6"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={LogoImage06}
              width={550}
              alt="Features 06"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-6"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={LogoImage07}
              width={550}
              alt="Features 07"
            />
          </div>
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-6"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={LogoImage08}
              width={550}
              alt="Features 08"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-6"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={LogoImage09}
              width={550}
              alt="Features 09"
            />
          </div>
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto col-span-6"
            data-aos="fade-up"
          >
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={LogoImage10}
              width={550}
              alt="Features 10"
            />
          </div>
        </div>
        <div className="md:w-full">
          <h4 className="h4 mb-4" data-aos="fade-up">
            and many more!
          </h4>
        </div>
      </div>
    </Section>
  )
}
