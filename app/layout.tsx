import './css/style.css'
import './css/animations.css'
import localFont from 'next/font/local'

import Footer from '@/components/ui/footer'

import { Inter, Architects_Daughter } from 'next/font/google'

const bolton = localFont({
  src: [
    {
      path: '../public/fonts/bolton/Bolton.woff', // Adjust path
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/bolton/BoltonBold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bolton', // a custom CSS variable name
  display: 'swap',
})

const transducer = localFont({
  src: [
    {
      path: '../public/fonts/transducer/TransducerTest-Hairline-BF645c3dd88a443.otf', // Adjust path
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-transducer', // a custom CSS variable name
  display: 'swap',
})

const chellatype = localFont({
  src: [
    {
      path: '../public/fonts/ChellaType.ttf', // Adjust path
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-chellatype', // a custom CSS variable name
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
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
      className={`${bolton.variable} ${transducer.variable} ${chellatype.variable}`}
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
