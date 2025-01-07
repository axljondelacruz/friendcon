import VideoThumb from '../public/images/hero-image-01.jpg'
import ModalVideo from './ui/modal-video'
import Section from './ui/section'
import SectionHeader from './ui/section-header'

export default function Hero() {
  return (
    <Section noPad className="hero-section">
      <div className="relative pt-5 pb-10">
        <SectionHeader
          headerText="FriendCon 2023"
          description="Dec 1-3 | Julian, California"
        />

        <ModalVideo
          thumb={VideoThumb}
          thumbWidth={1024}
          thumbHeight={576}
          thumbAlt="Modal video thumbnail"
          video="/videos/video.mp4"
          videoWidth={1920}
          videoHeight={1080}
        />
      </div>
    </Section>
  )
}
