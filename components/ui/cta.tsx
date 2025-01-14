'use client'

import { useState } from 'react'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import ImageModal from '@/components/ui/image-modal'

export default function Cta({
  children,
  className,
  id,
  linkUrl,
  flyerImageSrc,
}: {
  children?: React.ReactNode
  className?: string
  id?: string
  linkUrl: string
  flyerImageSrc?: StaticImageData
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageSrc, setImageSrc] = useState()

  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className="cta-container">
      <div className="cta">
        {flyerImageSrc ? (
          <button
            onClick={() => {
              setImageSrc(flyerImageSrc)
              setIsModalOpen(true)
            }}
          >
            {children}
          </button>
        ) : (
          <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        )}
      </div>
      <ImageModal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        imageSrc={imageSrc}
      />
    </div>
  )
}
