'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const SLIDES = [
  {
    src: '/buffalo2.png',
    alt: 'American bison on the Texas plains — Centuries Mutual',
  },
  { src: '/deer.jpeg', alt: 'Wildlife on the range' },
  { src: '/Bison.jpeg', alt: 'Bison in open landscape' },
  { src: '/mountians.jpeg', alt: 'Mountain horizon' },
] as const

const INTERVAL_MS = 7500

type Props = {
  className?: string
  /** e.g. `bottom-28` when parent has a bottom overlay (CTA strip) */
  controlsClassName?: string
}

export function HeroEditorialCarousel({ className, controlsClassName }: Props) {
  const [index, setIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const fn = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  const go = useCallback((dir: -1 | 1) => {
    setIndex((i) => {
      const n = SLIDES.length
      return (i + dir + n) % n
    })
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const t = window.setInterval(() => go(1), INTERVAL_MS)
    return () => window.clearInterval(t)
  }, [go, reducedMotion])

  return (
    <div
      className={cn('relative min-h-[20rem] overflow-hidden rounded-2xl md:min-h-[24rem]', className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured scenes"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            'absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none',
            i === index ? 'z-[1] opacity-100' : 'z-0 opacity-0 pointer-events-none',
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1023px) 100vw, 42vw"
            className="object-cover object-center [transform:scale(1.08)] motion-reduce:transform-none"
          />
        </div>
      ))}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[38%] bg-gradient-to-t from-black/35 via-black/10 to-transparent"
        aria-hidden
      />

      <div
        className={cn(
          'absolute bottom-4 left-4 right-4 z-[3] flex items-center justify-between gap-3 sm:left-5 sm:right-5',
          controlsClassName,
        )}
      >
        <button
          type="button"
          onClick={() => go(-1)}
          className="pointer-events-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]/70"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>

        <div className="flex flex-1 justify-center gap-1.5" role="tablist" aria-label="Slide indicators">
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-1.5 rounded-full transition-all motion-reduce:transition-none',
                i === index ? 'w-6 bg-[#FAFCFB]' : 'w-1.5 bg-white/45 hover:bg-white/70',
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          className="pointer-events-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]/70"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {SLIDES.length}: {SLIDES[index].alt}
      </p>
    </div>
  )
}
