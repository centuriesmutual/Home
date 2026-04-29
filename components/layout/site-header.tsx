'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Fraunces } from 'next/font/google'
import { ArrowRight, Download } from 'lucide-react'
import { cn } from '@/lib/utils'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-fraunces',
})

export const GRAIN_BG =
  'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27220%27 height=%27220%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.82%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27220%27 height=%27220%27 filter=%27url(%23n)%27 opacity=%270.52%27/%3E%3C/svg%3E")'

/** Primary nav row height */
export const SITE_HEADER_BAR_PX = 56
/** Thin gold rule above download strip */
export const SITE_HEADER_TOP_RULE_PX = 1
/** Gold download strip row (CTA-only bar) */
export const SITE_HEADER_DOWNLOAD_STRIP_PX = 40

/** Match scroll-body offset spacer to combined fixed chrome */
export const SITE_HEADER_STACK_PX =
  SITE_HEADER_TOP_RULE_PX + SITE_HEADER_DOWNLOAD_STRIP_PX + SITE_HEADER_BAR_PX

export function SiteHeader() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const [y, setY] = useState(0)
  const prevY = useRef(0)
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const current = latest ?? 0
    setY(current)
    if (current < 40) {
      setHidden(false)
    } else if (current > prevY.current + 4) {
      setHidden(true)
    } else if (current < prevY.current - 4) {
      setHidden(false)
    }
    prevY.current = current
  })

  useEffect(() => {
    setMounted(true)
    setY(typeof window !== 'undefined' ? window.scrollY : 0)
  }, [])

  const scrolledDeep = mounted && y > 80

  const creamMode = scrolledDeep
  const bgForest = '#0F3D2E'
  const bgCream = '#FAF7F0'

  const spacerHeight = SITE_HEADER_STACK_PX

  return (
    <div className={`${fraunces.variable} m-0 bg-[#0F3D2E] p-0 font-sans leading-normal`}>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[100]"
        animate={{ y: hidden ? -SITE_HEADER_STACK_PX : 0 }}
        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-px w-full shrink-0 bg-[#C9A961]" aria-hidden />

        <div
          className="flex h-10 w-full shrink-0 items-center justify-center border-b border-[#C9A961]/40 bg-[#C9A961] px-4"
          role="region"
          aria-label="Download the Centuries Mutual mobile app"
        >
          <Link
            href="/downloads"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#14432A] px-5 py-2 text-[11px] font-bold uppercase leading-none tracking-[0.2em] text-[#FAFCFB] no-underline shadow-[0_3px_14px_rgba(0,0,0,0.22)] ring-2 ring-[#FAF7F0]/30 transition hover:bg-[#0f3321] hover:text-[#FAFCFB] hover:ring-[#FAF7F0]/50"
          >
            <Download className="h-3.5 w-3.5 shrink-0 opacity-95" aria-hidden />
            <span>Get the app</span>
            <ArrowRight
              className="h-3.5 w-3.5 shrink-0 opacity-90 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
          <span className="sr-only">iOS and Android · search, messaging, and member tools</span>
        </div>

        <motion.header
          animate={{
            backgroundColor: scrolledDeep ? bgCream : bgForest,
          }}
          transition={{ duration: 0.35 }}
          className={cn(
            'flex h-[56px] w-full shrink-0 items-stretch px-4 sm:px-6 lg:px-8',
            scrolledDeep ? 'border-b border-[#E5E0D5] shadow-[0_4px_24px_rgba(15,61,46,0.06)]' : '',
          )}
        >
          <div
            className={cn('pointer-events-none absolute inset-0', creamMode ? 'opacity-[0.06]' : 'opacity-[0.04]')}
            style={{
              backgroundImage: GRAIN_BG,
              backgroundRepeat: 'repeat',
              backgroundSize: '220px 220px',
            }}
            aria-hidden
          />

          <div className="relative mx-auto flex h-full w-full max-w-[1600px] items-center justify-between gap-6">
            <Link href="/" className="relative z-[1] flex min-w-0 shrink-0 items-center gap-2.5 no-underline sm:gap-3">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md sm:h-10 sm:w-10">
                <Image
                  src="/cmlogotreesmall-removebg-preview.png"
                  alt="Centuries Mutual"
                  width={176}
                  height={176}
                  className="h-full w-full object-contain object-center brightness-105"
                  priority
                />
              </div>
              <motion.span
                animate={{ color: scrolledDeep ? '#0F3D2E' : '#FAF7F0' }}
                transition={{ duration: 0.3 }}
                className="leading-none"
                style={{
                  fontFamily: 'var(--font-fraunces), Fraunces, Georgia, serif',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  fontSize: 'clamp(15px,2.2vw,26px)',
                }}
              >
                Centuries Mutual
              </motion.span>
            </Link>

            <div className="relative z-[1] h-9 w-9 shrink-0" aria-hidden />
          </div>
        </motion.header>
      </motion.div>

      <div aria-hidden className="m-0 block shrink-0 bg-[#0F3D2E] p-0 leading-none" style={{ height: spacerHeight }} />
    </div>
  )
}
