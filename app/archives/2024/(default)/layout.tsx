'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import '../css/style.css'
import '../css/animations.css'

import Background from '../components/ui/background/background'
import Header from '../components/ui/header'

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
      <Background />
      <Header />
      <main className="grow font-bolton">{children}</main>
    </>
  )
}
