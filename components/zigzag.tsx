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

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Meet Our Diverse Community</h1>
            <p className="text-xl text-gray-400">
              Join a vibrant mix of seasoned entrepreneurs, industry leaders,
              startups, and creatives at FriendCon2023. United by a shared
              passion for collaboration, innovation, and 'Unleashing Synergies
              Among Pals,' anticipate dynamic networking and meaningful
              connections with professionals across various fields. Get ready
              for an extraordinary gathering that goes beyond the ordinary
              conference experience.
            </p>
          </div>

          <div className="grid gap-20">
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto col-span-4"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={LogoImage01}
                  width={350}
                  alt="Features 01"
                />
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto col-span-4"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={LogoImage02}
                  width={350}
                  alt="Features 01"
                />
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto col-span-4"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={LogoImage03}
                  width={350}
                  alt="Features 01"
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto col-span-4"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={LogoImage04}
                  width={350}
                  alt="Features 01"
                />
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto col-span-4"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={LogoImage05}
                  width={350}
                  alt="Features 01"
                />
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto col-span-4"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={LogoImage06}
                  width={350}
                  alt="Features 01"
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto col-span-4"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={LogoImage07}
                  width={350}
                  alt="Features 01"
                />
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto col-span-4"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={LogoImage07}
                  width={350}
                  alt="Features 01"
                />
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto col-span-4"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={LogoImage09}
                  width={350}
                  alt="Features 01"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
