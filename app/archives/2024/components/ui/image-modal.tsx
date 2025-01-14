'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'

type ImageModalProps = {
  isOpen: boolean
  closeModal: () => void
  imageSrc: StaticImageData
}

export default function ImageModal({
  isOpen,
  closeModal,
  imageSrc,
}: ImageModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-4 rounded shadow-lg max-w-full max-h-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-auto h-auto max-w-full max-h-[80vh]">
          <Image
            src={imageSrc}
            alt="Modal Content"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
