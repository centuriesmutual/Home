'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Fraunces } from 'next/font/google'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-fraunces',
})

export const GRAIN_BG =
  'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27220%27 height=%27220%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.82%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27220%27 height=%27220%27 filter=%27url(%23n)%27 opacity=%270.52%27/%3E%3C/svg%3E")'

const NAV: { href: string; label: string }[] = [
  { href: '/rooms', label: 'Listings' },
  { href: '/search', label: 'Neighborhoods' },
  { href: '/trust', label: 'Trust' },
  { href: '/treasury', label: 'Treasury' },
  { href: '/newspaper', label: 'Journal' },
]

/** Shared typography for gold download strip (label + link aligned) */
const DOWNLOAD_STRIP_TEXT =
  'font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-[#FAF7F0]'

/** Primary nav row height */
export const SITE_HEADER_BAR_PX = 56
/** Thin gold rule above download strip */
export const SITE_HEADER_TOP_RULE_PX = 1
/** Gold download strip row */
export const SITE_HEADER_DOWNLOAD_STRIP_PX = 32

/** Match scroll-body offset spacer to combined fixed chrome */
export const SITE_HEADER_STACK_PX =
  SITE_HEADER_TOP_RULE_PX + SITE_HEADER_DOWNLOAD_STRIP_PX + SITE_HEADER_BAR_PX

function NavLink({
  href,
  children,
  creamMode,
}: {
  href: string
  children: React.ReactNode
  creamMode: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        'whitespace-nowrap py-2 font-sans text-xs font-medium uppercase tracking-wider text-[#FAF7F0]/90 no-underline transition-colors hover:opacity-90',
        creamMode && 'text-[#0F3D2E] hover:text-[#0F3D2E]',
      )}
    >
      {children}
    </Link>
  )
}

export function SiteHeader() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const [y, setY] = useState(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setY(latest ?? 0)
  })

  useEffect(() => {
    setMounted(true)
    setY(typeof window !== 'undefined' ? window.scrollY : 0)
  }, [])

  const scrolledDeep = mounted && y > 80

  const creamMode = scrolledDeep
  const bgForest = '#0F3D2E'
  const bgCream = '#FAF7F0'
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    const cb = () => setMobileOpen(false)
    window.addEventListener('scroll', cb)
    return () => window.removeEventListener('scroll', cb)
  }, [mobileOpen])

  const spacerHeight = SITE_HEADER_STACK_PX

  return (
    <div className={`${fraunces.variable} m-0 bg-[#0F3D2E] p-0 font-sans leading-normal`}>
      <div className="fixed left-0 right-0 top-0 z-[100]">
        <div className="h-px w-full shrink-0 bg-[#C9A961]" aria-hidden />

        <div
          className="flex h-[32px] w-full shrink-0 items-center justify-center gap-x-4 gap-y-1 border-b border-[#C9A961]/35 bg-[#C9A961] px-3 sm:px-4"
          role="region"
          aria-label="Download the Centuries Mutual app"
        >
          <p className={`min-w-0 whitespace-normal text-center ${DOWNLOAD_STRIP_TEXT}`}>
            Mobile app · Listings · Trust · Secure messaging
          </p>
          <Link
            href="/downloads"
            className={`shrink-0 underline decoration-[#FAF7F0]/75 underline-offset-[3px] transition hover:text-white hover:decoration-white ${DOWNLOAD_STRIP_TEXT}`}
          >
            Get the app
          </Link>
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

            <div className="relative z-[1] flex min-w-0 items-center gap-6">
              <nav className="hidden min-w-0 items-center gap-6 xl:flex" aria-label="Primary">
                {NAV.map((item) => (
                  <NavLink key={item.href} href={item.href} creamMode={creamMode}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <motion.button
                type="button"
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border xl:hidden"
                onClick={() => setMobileOpen((o) => !o)}
                animate={{
                  borderColor: scrolledDeep ? 'rgba(15,61,46,0.2)' : 'rgba(250,247,240,0.25)',
                  color: scrolledDeep ? '#0F3D2E' : '#FAF7F0',
                }}
                transition={{ duration: 0.3 }}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </motion.header>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              key="mobnav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              aria-label="Mobile primary"
              className="absolute left-0 right-0 top-full z-[110] xl:hidden rounded-b-xl border-x border-b border-[#E5E0D5] bg-[#FAF7F0] px-4 py-3 shadow-xl"
            >
              <ul className="flex flex-col gap-0 border-t border-[#E5E0D5]/70 pt-2">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-2 py-2.5 font-sans text-[13px] font-semibold uppercase tracking-wider text-[#0F3D2E] no-underline hover:bg-[rgba(15,61,46,0.06)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <div aria-hidden className="m-0 block shrink-0 bg-[#0F3D2E] p-0 leading-none" style={{ height: spacerHeight }} />
    </div>
  )
}
