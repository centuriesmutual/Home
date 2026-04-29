'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Fraunces } from 'next/font/google'
import { CommunitySearchBar } from '@/components/search/community-search-bar'
import { CommunitySearchHotkeys, CommunitySearchModal } from '@/components/search/community-search-modal'
import { FloatingImageCards } from '@/components/hero/floating-image-cards'
import '@/components/hero/hero-pulse-scroll.css'
import { QuickActions, COMMUNITY_HERO_QUICK_ITEMS } from '@/components/hero/quick-actions'
import { fadeUp } from '@/lib/animations'
import { GRAIN_BG } from '@/components/layout/site-header'

const editorial = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-hero-editorial',
})

function TopoPattern({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 180c42-58 118-92 198-78 80 14 142 68 168 132M12 220c48-102 160-168 280-152M40 60c22 38 68 58 120 52 52-6 96-34 118-72"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M80 240c28-22 62-34 100-30 38 4 72 22 98 48M120 20c18 22 48 36 82 34 34-2 64-20 78-44"
        stroke="currentColor"
        strokeWidth="0.45"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  )
}

const portalShadow = 'shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)]'
export function CommunityHero() {
  const [searchOpen, setSearchOpen] = useState(false)
  const openSearch = useCallback(() => setSearchOpen(true), [])
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageParallax = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section id="community-hero" ref={sectionRef} className={`relative mt-0 w-full overflow-hidden bg-[#0F3D2E] pt-0 ${editorial.variable}`}>
      <CommunitySearchHotkeys onOpen={openSearch} />

      <div className="relative z-[1] grid min-h-[88vh] w-full grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-0">
        {/* Columns 1–7: image column only — pulse modal is positioned relative to this column */}
        <div className="relative col-span-full min-h-[min(52vh,520px)] overflow-hidden lg:col-span-7 lg:col-start-1 lg:min-h-[88vh]">
          <motion.div style={{ y: imageParallax }} className="absolute inset-0 lg:-top-[8%] lg:h-[116%]">
            <div className="hero-ken-burns-inner relative h-full w-full">
              <Image
                src="/buffalo2.png"
                alt="Centuries Mutual — American bison on the Texas plains"
                fill
                priority
                quality={95}
                sizes="(max-width: 1023px) 100vw, 62vw"
                className="h-full w-full object-cover object-[center_35%]"
              />
            </div>
          </motion.div>
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_45%,rgba(232,223,214,0.42)_74%,rgba(232,223,214,0.92)_93%,rgb(232_223_214)_100%)] lg:bg-[linear-gradient(90deg,transparent_0%,transparent_50%,rgba(232,223,214,0.34)_62%,rgba(232,223,214,0.74)_82%,rgb(232_223_214)_100%)]"
            aria-hidden
          />
          <FloatingImageCards />
        </div>

        {/* Columns 8–12: editorial tan column */}
        <div className="relative col-span-full flex min-h-0 flex-col bg-[#E8DFD6] lg:col-span-5 lg:col-start-8 lg:min-h-[88vh]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(201,169,97,0.18)_0%,transparent_50%)]"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: GRAIN_BG,
              backgroundRepeat: 'repeat',
              backgroundSize: '220px 220px',
            }}
            aria-hidden
          />
          <TopoPattern className="pointer-events-none absolute bottom-0 left-0 z-[2] h-48 w-[min(100%,340px)] text-[#0F3D2E] opacity-[0.07]" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative z-[1] flex flex-1 flex-col justify-center px-8 py-8 lg:px-12 lg:py-12"
          >
            <div>
              <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-[#C9A961]">
                — A Centuries Mutual Service
              </p>
              <h1
                className={`mb-8 max-w-md text-3xl font-medium tracking-tight text-[#0F3D2E] md:text-4xl lg:text-5xl`}
                style={{ fontFamily: 'var(--font-hero-editorial), Fraunces, Georgia, serif', lineHeight: 1.18 }}
              >
                <span className="block">Your Community</span>
                <span className="block">Brokerage</span>
              </h1>
            </div>

            <div
              className={`mb-3 overflow-hidden rounded-2xl border border-warm-border bg-cream px-4 py-3 sm:px-5 ${portalShadow}`}
            >
              <CommunitySearchBar onOpen={openSearch} compact />
            </div>

            <QuickActions className="mb-6" items={COMMUNITY_HERO_QUICK_ITEMS} />

            <div id="client-portal" className={`mb-0 overflow-hidden rounded-2xl border border-[#E5E0D5]/90 ${portalShadow}`}>
              {/* Single panel: twin images with labels overlaid — not separate bordered cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-[#E5E0D5]/85">
                <div className="relative aspect-[5/4] min-h-[11rem] w-full md:aspect-auto md:min-h-[14rem]">
                  <Image
                    src="/buffalo2.png"
                    alt=""
                    fill
                    priority={false}
                    sizes="(max-width: 767px) 100vw, 25vw"
                    className="object-cover object-[center_38%]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/65 via-black/35 to-transparent" aria-hidden />
                  <p className="absolute bottom-4 left-4 font-sans text-[0.625rem] font-medium uppercase tracking-[0.28em] text-[#FAFCFB] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
                    Client portal
                  </p>
                </div>
                <div className="relative aspect-[5/4] min-h-[11rem] w-full md:aspect-auto md:min-h-[14rem]">
                  <Image
                    src="/buffalo2.png"
                    alt=""
                    fill
                    priority={false}
                    sizes="(max-width: 767px) 100vw, 25vw"
                    className="object-cover object-[center_52%] [transform:scaleX(-1)]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/65 via-black/35 to-transparent" aria-hidden />
                  <p className="absolute bottom-4 left-4 font-sans text-[0.625rem] font-medium uppercase tracking-[0.28em] text-[#FAFCFB] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
                    Membership
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E5E0D5]/85 bg-[#FAFCFB] px-6 py-8 md:px-8 md:py-9">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-3 md:mx-0 md:max-w-none sm:grid-cols-2 sm:gap-4">
                  <Link
                    href="/signup"
                    className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-full bg-[#0F3D2E] px-5 text-sm font-medium leading-none text-white no-underline transition hover:bg-[#15523D]"
                  >
                    Create Account
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-full border border-[#0F3D2E] bg-white px-5 text-sm font-medium leading-none text-[#0F3D2E] no-underline transition hover:bg-[#0F3D2E]/5"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <CommunitySearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </section>
  )
}
