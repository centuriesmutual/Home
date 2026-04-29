'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Fraunces } from 'next/font/google'
import { CommunitySearchBar } from '@/components/search/community-search-bar'
import { CommunitySearchHotkeys, CommunitySearchModal } from '@/components/search/community-search-modal'
import { HeroPortalVideoTeaser } from '@/components/hero/hero-portal-video-teaser'
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

  return (
    <section className={`relative mt-0 w-full overflow-hidden bg-[#0F3D2E] pb-8 pt-0 lg:pb-12 ${editorial.variable}`}>
      <CommunitySearchHotkeys onOpen={openSearch} />

      <div className="relative z-[1] grid min-h-[94vh] w-full grid-cols-1 gap-0 lg:min-h-[98vh] lg:grid-cols-12 lg:gap-0">
        {/* Columns 1–7: image column */}
        <div className="relative col-span-full min-h-[min(52vh,520px)] overflow-hidden lg:col-span-7 lg:col-start-1 lg:min-h-[88vh]">
          <div className="absolute inset-0">
            <Image
              src="/buffalo2.png"
              alt="Centuries Mutual — American bison on the Texas plains"
              fill
              priority
              quality={95}
              sizes="(max-width: 1023px) 100vw, 62vw"
              className="h-full w-full object-cover object-[center_58%]"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_45%,rgba(232,223,214,0.42)_74%,rgba(232,223,214,0.92)_93%,rgb(232_223_214)_100%)] lg:bg-[linear-gradient(90deg,transparent_0%,transparent_50%,rgba(232,223,214,0.34)_62%,rgba(232,223,214,0.74)_82%,rgb(232_223_214)_100%)]"
            aria-hidden
          />
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
                — Est. 2024
              </p>
              <h1
                className={`mb-8 max-w-md text-3xl font-medium tracking-tight text-[#0F3D2E] md:text-4xl lg:max-w-none lg:text-[2.65rem] lg:whitespace-nowrap`}
                style={{ fontFamily: 'var(--font-hero-editorial), Fraunces, Georgia, serif', lineHeight: 1.18 }}
              >
                <span>Your Community Brokerage</span>
              </h1>
            </div>

            <div
              className={`mb-3 overflow-hidden rounded-2xl border border-warm-border bg-cream px-4 py-3 sm:px-5 ${portalShadow}`}
            >
              <CommunitySearchBar onOpen={openSearch} compact />
            </div>

            <QuickActions className="mb-6" items={COMMUNITY_HERO_QUICK_ITEMS} />

            <div id="client-portal" className={`relative mb-0 min-h-[20rem] overflow-hidden rounded-2xl border border-[#E5E0D5]/90 md:min-h-[24rem] ${portalShadow}`}>
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/buffalo2.png"
                  alt=""
                  fill
                  priority={false}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover object-[50%_0%] [transform:scale(2.05)] [transform-origin:center_top]"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-black/28 via-black/8 to-transparent"
                aria-hidden
              />
              <div className="relative z-[1] flex min-h-[20rem] flex-col px-5 py-6 md:min-h-[24rem] md:px-8 md:py-8">
                <div className="relative z-[2] -mx-5 mt-auto border-t border-[#E5E0D5]/70 bg-[#FAFCFB]/78 px-5 py-6 backdrop-blur-md md:-mx-8 md:px-8 md:py-8">
                  <HeroPortalVideoTeaser className="mb-5 md:mb-6" />
                  <div className="mx-auto grid w-full max-w-xl grid-cols-2 gap-2 sm:gap-3 md:mx-0 md:max-w-none">
                    <Link
                      href="/wintergarden"
                      className="inline-flex h-9 w-full min-w-0 shrink-0 items-center justify-center whitespace-nowrap rounded-full border-0 bg-[#0F3D2E] px-2 text-[10px] font-semibold leading-tight tracking-tight text-white no-underline shadow-sm outline-none ring-0 transition hover:bg-[#0c3328] focus-visible:ring-2 focus-visible:ring-[#0F3D2E]/40 sm:h-10 sm:px-3 sm:text-xs"
                    >
                      Wintergarden
                    </Link>
                    <Link
                      href="/my-brothers-keeper"
                      className="inline-flex h-9 w-full min-w-0 shrink-0 items-center justify-center whitespace-nowrap rounded-full border-0 bg-white px-1.5 text-[10px] font-semibold leading-tight tracking-tight text-[#0F3D2E] no-underline shadow-sm outline-none ring-0 transition hover:bg-white hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#0F3D2E]/25 sm:h-10 sm:px-3 sm:text-xs"
                    >
                      My Brothers Keeper
                    </Link>
                  </div>
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
