import Section from '@/components/ui/section'
import SectionHeader from '@/components/ui/section-header'
import Image from 'next/image'
import RouteImage1 from '@/public/images/route1.png'
import RouteImage2 from '@/public/images/route2.png'

export default function Location() {
  return (
    <Section id="directions">
      <SectionHeader headerText="Getting on-site">
        <p className="text-xl text-gray-400">
          Please adhere to the following instructions in order to get to the
          location properly!
        </p>
        <br />
        <h5 className="h5">Address:</h5>
        <p className="text-xl text-gray-400">
          15574 North Peak Road, Julian, CA
        </p>
        (
        <a href="https://www.airbnb.com/rooms/11659940?source_impression_id=p3_1700540184_CuiC0gh3lSetCDWC">
          AirBnB link
        </a>
        ) (
        <a href="https://maps.app.goo.gl/ndBmGiRBamX7xKYn7">Google Maps link</a>
        )
      </SectionHeader>
      <div className="text-center">
        <h3 className="h3">Step 1:</h3>
        <p className="text-lg text-gray-200 pb-10">
          Navigate to: 34520 Engineers Rd, Julian, CA 92036 (
          <a href="https://maps.app.goo.gl/ZQyXTEJQ4nUsvPJG6">
            Google Maps link
          </a>
          )
        </p>
        <h3 className="h3">Step 2:</h3>
        <p className="text-lg text-gray-200 pb-10">
          Follow Engineers Rd for ~0.82 of a mile and make a right onto N Peak
          Rd
        </p>
        <h3 className="h3">Step 3:</h3>
        <p className="text-lg text-gray-200 pb-10">
          Go for about 0.33 miles. Location will be on the left. You will need
          to make a sharp U-Turn into the driveway.
        </p>
        <p className="text-xl text-gray-200">
          Route should look similar to this:
        </p>
        <Image
          className="max-w-full mx-auto md:max-w-none h-auto pb-10"
          src={RouteImage1}
          width={1000}
          alt="Route 1"
        />
        <p className="text-xl text-gray-200">Closer look at the u-turn</p>
        <Image
          className="max-w-full mx-auto md:max-w-none h-auto pb-10"
          src={RouteImage2}
          width={1000}
          alt="Route 2"
        />
        <div className="warning">
          <h3 className="h3">
            Parking is limited. Please self-organize carpools!
          </h3>
        </div>
      </div>
    </Section>
  )
}
