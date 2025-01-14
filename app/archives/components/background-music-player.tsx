'use client'

import React, { useEffect, useRef } from 'react'

export default function BackgroundMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Attempt to play on mount (might be blocked until user interaction)
    audioRef.current?.play().catch((err) => {
      console.log('Autoplay was prevented:', err)
    })
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/audio/vitamin-c_-_graduation.mp3"
      loop
      controls={false}
      // autoPlay can be set, but may be blocked unless muted or user interacts
      autoPlay
    />
  )
}
