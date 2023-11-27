'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration1 from '@/components/ui/page-illustration-1'

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
      <main className="grow">
        <PageIllustration1 />

        {children}
      </main>
    </>
  )
}
