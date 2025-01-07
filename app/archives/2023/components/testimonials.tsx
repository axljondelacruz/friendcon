import Image from 'next/image'

import TestimonialImage01 from '../public/images/testimonial-01.jpg'
import TestimonialImage02 from '../public/images/testimonial-02.jpg'
import TestimonialImage03 from '../public/images/testimonial-03.jpg'

import Section from './ui/section'
import SectionHeader from './ui/section-header'

function Quotes() {
  return (
    <svg
      className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
      viewBox="0 0 24 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
    </svg>
  )
}

function TestimonialBlock({
  n,
  quote,
  name,
}: {
  n: 'a' | 'b' | 'c'
  quote: string
  name: string
}) {
  let src, alt
  switch (n) {
    case 'a':
      src = TestimonialImage01
      alt = 'Person 1'
      break

    case 'b':
      src = TestimonialImage02
      alt = 'Person 2'
      break

    default:
      src = TestimonialImage03
      alt = 'Person 3'
      break
  }

  return (
    <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
      <div>
        <div className="relative inline-flex flex-col mb-4">
          <Image
            className="rounded-full"
            src={src}
            width={48}
            height={48}
            alt={alt}
          />
          <Quotes />
        </div>
      </div>
      <blockquote className="text-lg text-gray-400 grow">— {quote}</blockquote>
      <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
        <cite className="text-gray-200 not-italic">{name}</cite>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader
        headerText="Voices of Past Attendees"
        description="Discover the firsthand experiences of those who have journeyed with us
        before. From transformative collaborations to the impact of
        'Unleashing Synergies Among Pals,' our past attendees share their
        stories and anticipation for the upcoming F23 Summit. Join the chorus
        of voices that have found inspiration, connection, and lasting
        friendships at FriendCon."
      />

      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
        <TestimonialBlock
          n="a"
          quote="FriendCon2022 was transformative—the Guild Gathering sparked collaborations, workshops ignited fresh perspectives. 'Unleashing Synergies Among Pals' stayed with me. Now, with F23 Summit approaching, I'm ready for more innovation, camaraderie, and lasting connections."
          name="Sarah T., Marketing Maverick"
        />
        <TestimonialBlock
          n="b"
          quote="FriendCon2022, a tech enthusiast's dream—cutting-edge workshops, impactful keynote on 'Unleashing Synergies.' As F23 Summit nears, my anticipation soars! Eager to uncover new insights, collaborations, and innovations. FriendCon, an annual highlight, countdown initiated!"
          name="Alex K., Tech Enthusiast"
        />
        <TestimonialBlock
          n="c"
          quote="FriendCon2022, a pivotal moment in my startup journey.
          Collaborative spirit, visionary workshops, and 'Unleashing
          Synergies' fueled my drive. Now, gearing up for F23
          Summit—projections for F24 have me intrigued. FriendCon, a
          cornerstone in my growth, thrilled for what's ahead."
          name="Jamie L., Startup Trailblazer"
        />
      </div>
    </Section>
  )
}
