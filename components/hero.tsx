import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/ui/modal-video'
import Section from '@/components/ui/section'
import SectionHeader from '@/components/ui/section-header'
import PageIllustration2 from '@/components/ui/page-illustration-2'

export default function Hero() {
  return (
    <Section noPad>
      <PageIllustration2 />

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
