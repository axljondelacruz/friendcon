'use client'

import { useState } from 'react'

import Link from 'next/link'

import ImageModal from '@/components/ui/image-modal'
import DrinkMenu from '@/public/images/drink-menu.png'
import Itinerary from '@/public/images/itinerary.png'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageSrc, setImageSrc] = useState(DrinkMenu)

  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full font-quicksand font-bold text-gray-900">
      <nav className="flex items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-[24px] font-chellatype px-4 h-16 flex items-center hover:text-red-100 border-r-[1px] border-b-[1px] border-black hover:bg-red-400 hover:border-red-400"
          >
            BABYCHELLA
          </Link>
          <h1 className="hidden md:flex h5 px-4 h-16 flex items-center border-b-[1px] border-black font-quicksand">
            JAN 10-12
          </h1>
        </div>

        <div className="flex-1 h-16 border-b-[1px] border-black"></div>

        <div className="flex">
          <button
            onClick={() => {
              setImageSrc(DrinkMenu)
              setIsModalOpen(true)
            }}
            className="h-16 px-4 flex items-center border-b-[1px] border-black hover:text-red-100 hover:bg-red-400 hover:border-red-400"
          >
            Menu
          </button>
          <button
            onClick={() => {
              setImageSrc(Itinerary)
              setIsModalOpen(true)
            }}
            className="h-16 px-4 flex items-center border-b-[1px] border-black hover:text-red-100 hover:bg-red-400 hover:border-red-400"
          >
            Itinerary
          </button>
        </div>
      </nav>
      <ImageModal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        imageSrc={imageSrc}
      />
    </header>
  )
}
