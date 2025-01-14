'use client'

import { useState } from 'react'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import ImageModal from './image-modal'

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
  linkUrl?: string
  flyerImageSrc?: StaticImageData
}) {
  if (!linkUrl || !flyerImageSrc) {
    return null
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageSrc, setImageSrc] = useState(flyerImageSrc)

  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className="cta-container">
      <div className="cta">
        {flyerImageSrc ? (
          <>
            <button
              onClick={() => {
                setIsModalOpen(true)
              }}
            >
              {children}
            </button>
            <ImageModal
              isOpen={isModalOpen}
              closeModal={handleCloseModal}
              imageSrc={flyerImageSrc}
            />
          </>
        ) : (
          <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        )}
      </div>
    </div>
  )
}
