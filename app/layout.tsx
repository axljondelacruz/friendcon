import './css/style.css'
import './css/animations.css'
import localFont from 'next/font/local'

import Footer from '@/components/ui/footer'

import { Inter, Architects_Daughter, Quicksand } from 'next/font/google'

const bolton = localFont({
  src: [
    {
      path: '../public/fonts/bolton/BoltonLight.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/bolton/Bolton.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/bolton/BoltonBold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bolton',
  display: 'swap',
})

const chellatype = localFont({
  src: [
    {
      path: '../public/fonts/ChellaType.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-chellatype',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
  weight: '400',
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap',
})

export const metadata = {
  title: 'Friendcon',
  description: 'Friendcon information page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bolton.variable} ${quicksand.variable} ${chellatype.variable}`}
    >
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased body-bg text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
