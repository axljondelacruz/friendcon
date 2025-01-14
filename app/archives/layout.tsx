'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import './css/style.css'

import BackgroundMusicPlayer from './components/background-music-player'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <BackgroundMusicPlayer />
      <main className="grow">{children}</main>
    </>
  )
}
