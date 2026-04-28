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
  { href: '/trust-system', label: 'Trust Framework' },
  { href: '/trust', label: 'About' },
  { href: '/newspaper', label: 'Journal' },
]

function NavUnderlineLink({
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
        'group relative py-2 font-sans text-xs font-medium uppercase tracking-wider no-underline transition-colors',
        creamMode ? 'text-[#0F3D2E]' : 'text-[#FAF7F0]/90',
      )}
    >
      {children}
      <span
        className={cn(
          'absolute bottom-1 left-0 block h-px w-full origin-left scale-x-0 transform transition-transform duration-300 ease-out group-hover:scale-x-100',
          creamMode ? 'bg-[#0F3D2E]' : 'bg-[#FAF7F0]',
        )}
        aria-hidden
      />
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
  const hideEyebrow = mounted && y > 40

  const creamMode = scrolledDeep
  const navH = scrolledDeep ? 72 : 96
  const eyebrowH = hideEyebrow ? 0 : 28
  const spacerHeight = 1 + eyebrowH + navH

  const bgForest = '#0F3D2E'
  const bgCream = '#FAF7F0'
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    const cb = () => setMobileOpen(false)
    window.addEventListener('scroll', cb)
    return () => window.removeEventListener('scroll', cb)
  }, [mobileOpen])

  return (
    <div className={`${fraunces.variable} m-0 bg-[#0F3D2E] p-0 font-sans leading-normal`}>
      <div className="fixed left-0 right-0 top-0 z-[100]">
        <div className="h-[1px] w-full bg-[#C9A961]" aria-hidden />

        <motion.div
          initial={false}
          animate={{
            height: eyebrowH,
            opacity: eyebrowH ? 1 : 0,
          }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border-b border-[#C9A961]/45 bg-[#C9A961]"
        >
          <p className="hyphens-none px-3 py-[6px] text-center font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FAF7F0]">
            Established 2024 · Texas · Member-Owned Cooperative
          </p>
        </motion.div>

        <motion.header
          animate={{
            backgroundColor: scrolledDeep ? bgCream : bgForest,
            minHeight: navH,
          }}
          transition={{ duration: 0.35 }}
          className={cn(
            'relative flex w-full items-center px-4 sm:px-6 lg:px-8',
            scrolledDeep ? 'border-b border-[#E5E0D5] shadow-[0_10px_40px_rgba(15,61,46,0.07)]' : '',
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

          <div className="relative grid w-full max-w-[1600px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 py-2 lg:mx-auto lg:gap-6">
            <Link href="/" className="relative z-[1] flex min-w-0 items-center gap-2.5 no-underline sm:gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md sm:h-11 sm:w-11">
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
                  fontSize: 'clamp(15px,2.2vw,28px)',
                }}
              >
                Centuries Mutual
              </motion.span>
            </Link>

            <nav className="relative z-[1] mx-auto hidden min-w-0 items-center gap-6 xl:flex" aria-label="Primary">
              {NAV.map((item) => (
                <NavUnderlineLink key={item.href} href={item.href} creamMode={creamMode}>
                  {item.label}
                </NavUnderlineLink>
              ))}
            </nav>

            <div className="relative z-[1] flex shrink-0 items-center justify-end gap-1.5 sm:gap-2">
              <motion.button
                type="button"
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                className="flex h-10 w-10 items-center justify-center rounded-lg border xl:hidden"
                onClick={() => setMobileOpen((o) => !o)}
                animate={{
                  borderColor: scrolledDeep ? 'rgba(15,61,46,0.2)' : 'rgba(250,247,240,0.25)',
                  color: scrolledDeep ? '#0F3D2E' : '#FAF7F0',
                }}
                transition={{ duration: 0.3 }}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>

              <Link
                href="/#client-portal"
                className={cn(
                  'inline-flex h-8 items-center justify-center rounded-full border px-2.5 text-[12px] font-medium transition sm:h-9 sm:px-3.5 sm:text-[13px]',
                  creamMode
                    ? 'border-[#0F3D2E]/30 text-[#0F3D2E] hover:bg-[rgba(15,61,46,0.06)]'
                    : 'border-[rgba(250,247,240,0.35)] text-[#FAF7F0] hover:bg-[rgba(250,247,240,0.08)]',
                )}
              >
                <span className="hidden sm:inline">Member Portal</span>
                <span className="sm:hidden">Portal</span>
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#0F3D2E] px-2.5 text-center text-[12px] font-semibold leading-none text-white no-underline shadow-sm transition hover:bg-[#15523D] hover:shadow-md sm:h-9 sm:px-3.5 sm:text-[13px]"
              >
                Get Started
              </Link>
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
              className="absolute left-0 right-0 top-full z-[110] xl:hidden rounded-b-xl border-x border-b border-[#E5E0D5] bg-[#FAF7F0] px-4 py-4 shadow-xl"
            >
              <ul className="flex flex-col gap-1 border-t border-[#E5E0D5]/70 pt-3">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-2 py-2.5 font-sans text-[13px] font-semibold uppercase tracking-wider text-[#0F3D2E] hover:bg-[rgba(15,61,46,0.06)]"
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
