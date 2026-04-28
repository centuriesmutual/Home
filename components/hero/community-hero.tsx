'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Fraunces } from 'next/font/google'
import { CommunitySearchBar } from '@/components/search/community-search-bar'
import { CommunitySearchHotkeys, CommunitySearchModal } from '@/components/search/community-search-modal'
import { FloatingImageCards } from '@/components/hero/floating-image-cards'
import { QuickActions } from '@/components/hero/quick-actions'
import { HeroStats } from '@/components/hero/hero-stats'
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
    <section
      ref={sectionRef}
      className={`relative min-h-[88vh] w-full overflow-hidden bg-[#0F3D2E] ${editorial.variable}`}
    >
      <CommunitySearchHotkeys onOpen={openSearch} />

      {/* Depth: radial highlight + grain + topo */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#15523D_0%,_transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: GRAIN_BG,
          backgroundRepeat: 'repeat',
          backgroundSize: '220px 220px',
        }}
        aria-hidden
      />
      <TopoPattern className="pointer-events-none absolute -bottom-8 -left-12 h-64 w-[min(100%,420px)] text-[#FAF7F0] opacity-[0.05]" />

      <div className="relative z-[1] flex min-h-[88vh] flex-col lg:flex-row">
        {/* Immersive image — ~58% width desktop */}
        <div className="relative h-[min(52vh,520px)] w-full overflow-hidden lg:h-auto lg:min-h-[88vh] lg:w-[58%] lg:max-w-[58vw] lg:rounded-none lg:rounded-br-2xl lg:rounded-tr-2xl">
          <motion.div style={{ y: imageParallax }} className="absolute inset-0 lg:-top-[8%] lg:h-[116%]">
            <div className="hero-ken-burns-inner relative h-full w-full">
              <Image
                src="/buffalo2.png"
                alt="Centuries Mutual — American bison on the Texas plains"
                fill
                priority
                quality={95}
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover object-[center_35%]"
              />
            </div>
          </motion.div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0F3D2E]/45"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-10 bg-gradient-to-l from-[#0F3D2E]/25 to-transparent lg:block" />
          <FloatingImageCards />
        </div>

        {/* Editorial column */}
        <div className="relative flex flex-1 flex-col justify-center px-5 py-12 sm:px-8 lg:max-w-[44%] lg:py-16 lg:pl-12 lg:pr-14 xl:pl-16 xl:pr-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
            <div>
              <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#C9A961]">
                — A Centuries Mutual Service
              </p>
              <h1
                className={`mb-8 max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-[#FAF7F0] md:text-5xl lg:text-6xl`}
                style={{ fontFamily: 'var(--font-hero-editorial), Fraunces, Georgia, serif' }}
              >
                Your Community Brokerage
              </h1>
            </div>

            <QuickActions className="" />

            <div
              id="client-portal"
              className="overflow-hidden rounded-[22px] border border-[#E5E0D5]/90 bg-gradient-to-br from-[#faf9f6] via-[#f8f6f1] to-[#faf9f7] shadow-[0_28px_56px_rgba(8,32,20,0.22),inset_0_1px_0_rgba(255,255,255,0.92)] outline outline-1 outline-white/25 transition hover:shadow-[0_34px_64px_rgba(8,32,20,0.26)] hover:-translate-y-px"
            >
              <div className="relative px-5 py-6 sm:px-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full opacity-30"
                  style={{
                    background: 'radial-gradient(circle, rgba(20,67,42,0.15) 0%, transparent 65%)',
                  }}
                />
                <div className="relative">
                  <p
                    className="mb-2 font-sans text-[0.625rem] font-bold uppercase tracking-[0.35em]"
                    style={{ color: 'rgba(15, 61, 46, 0.72)' }}
                  >
                    Client portal
                  </p>
                  <h2 className="mb-4 max-w-xl text-balance font-serif text-xl font-semibold leading-snug tracking-tight text-[#0f1a13] sm:text-[1.35rem]">
                    Secure member access — sign in or join Centuries Mutual
                  </h2>
                  <div className="mt-6 flex flex-row flex-wrap items-center gap-x-2 gap-y-2">
                    <Link
                      href="/signup"
                      className="inline-flex h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#0F3D2E] px-3.5 text-[13px] font-semibold leading-none text-white no-underline shadow-sm transition hover:bg-[#15523D] hover:shadow-md"
                    >
                      Create Account
                    </Link>
                    <Link
                      href="/login"
                      className="inline-flex h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-[#0F3D2E] bg-transparent px-3.5 text-[13px] font-medium leading-none text-[#0F3D2E] no-underline transition hover:bg-[rgba(15,61,46,0.08)] hover:text-[#0F3D2E]"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E5E0D5]/55 bg-[#FAF7F0]/95 px-4 py-3 shadow-inner sm:px-5">
              <CommunitySearchBar onOpen={openSearch} compact />
            </div>

            <HeroStats />
          </motion.div>
        </div>
      </div>

      <CommunitySearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </section>
  )
}
