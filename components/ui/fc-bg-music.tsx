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
      src="https://ia803405.us.archive.org/27/items/Graduation__Friends_Forever_/Vitamin_C__-_Graduation__Song_.mp3"
      loop
      controls={false}
      autoPlay
    />
  )
}
