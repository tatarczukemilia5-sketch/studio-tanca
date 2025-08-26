"use client"

import { useState } from "react"

interface HeroVideoProps {
  videoSrc: string
  posterSrc: string
  alt: string
}

export function HeroVideo({ videoSrc, posterSrc, alt }: HeroVideoProps) {
  const [videoError, setVideoError] = useState(false)

  const handleVideoError = () => {
    setVideoError(true)
  }

  if (videoError) {
    return (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${posterSrc})` }}
        aria-label={alt}
      />
    )
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      poster={posterSrc}
      onError={handleVideoError}
    >
      <source src={videoSrc} type="video/mp4" />
      <img src={posterSrc || "/placeholder.svg"} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    </video>
  )
}
