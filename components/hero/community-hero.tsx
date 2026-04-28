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
    <section ref={sectionRef} className={`relative min-h-[88vh] w-full overflow-hidden bg-[#0F3D2E] ${editorial.variable}`}>
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
      <TopoPattern className="pointer-events-none absolute -bottom-8 -left-12 z-[2] h-64 w-[min(100%,420px)] text-[#FAF7F0] opacity-[0.05]" />

      <div className="relative z-[1] grid min-h-[88vh] grid-cols-1 gap-0 lg:grid-cols-12">
        {/* Immersive image — cinematic anchor */}
        <div className="relative col-span-full h-[min(52vh,520px)] overflow-hidden lg:col-span-7 lg:h-auto lg:min-h-[88vh]">
          <motion.div style={{ y: imageParallax }} className="absolute inset-0 lg:-top-[8%] lg:h-[116%]">
            <div className="hero-ken-burns-inner relative h-full w-full">
              <Image
                src="/buffalo2.png"
                alt="Centuries Mutual — American bison on the Texas plains"
                fill
                priority
                quality={95}
                sizes="(max-width: 1023px) 100vw, 62vw"
                className="object-cover object-[center_35%]"
              />
            </div>
          </motion.div>
          {/* Strong right-edge vignette: hand-off into forest column */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_45%,rgba(15,61,46,0.35)_72%,rgba(15,61,46,0.82)_92%,#0F3D2E_100%)] lg:bg-[linear-gradient(90deg,transparent_0%,transparent_50%,rgba(15,61,46,0.28)_62%,rgba(15,61,46,0.55)_82%,#0F3D2E_100%)]"
            aria-hidden
          />
          <FloatingImageCards />
        </div>

        {/* Editorial column */}
        <div className="relative col-span-full flex min-h-0 flex-col lg:col-span-5">
          {/* Atmosphere behind content */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#15523D_0%,_transparent_60%)] opacity-60"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative z-[1] flex flex-1 flex-col justify-center px-8 py-16 lg:px-12 lg:py-20"
          >
            <div>
              <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-[#C9A961]">
                — A Centuries Mutual Service
              </p>
              <h1
                className={`mb-8 max-w-md text-3xl font-medium tracking-tight text-[#FAF7F0] md:text-4xl lg:text-5xl`}
                style={{ fontFamily: 'var(--font-hero-editorial), Fraunces, Georgia, serif', lineHeight: 1.1 }}
              >
                <span className="block">Your Community</span>
                <span className="block">Brokerage</span>
              </h1>
            </div>

            <QuickActions className="mb-6" />

            <div
              id="client-portal"
              className={`mb-4 rounded-2xl border border-[#E5E0D5] bg-[#FAF7F0] p-6 ${portalShadow} transition`}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#6B6B66]">Client portal</p>
              <h2 className="mt-1 max-w-md font-serif text-lg font-medium leading-tight text-[#0F3D2E]" style={{ fontFamily: 'var(--font-hero-editorial), Fraunces, Georgia, serif' }}>
                Secure member access — sign in or join Centuries Mutual
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/signup"
                  className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E] px-5 text-sm font-medium leading-none text-white no-underline transition hover:bg-[#15523D]"
                >
                  Create Account
                </Link>
                <Link
                  href="/login"
                  className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-[#0F3D2E] bg-white px-5 text-sm font-medium leading-none text-[#0F3D2E] no-underline transition hover:bg-[#0F3D2E]/5"
                >
                  Sign In
                </Link>
              </div>
            </div>

            <div
              className={`mt-4 overflow-hidden rounded-2xl border border-[#E5E0D5] bg-[#FAF7F0] px-4 py-3 sm:px-5 ${portalShadow}`}
            >
              <CommunitySearchBar onOpen={openSearch} compact />
            </div>

            <p className="mt-3 text-center text-xs italic text-white/60">
              Every listing verified · Every transaction backed by member trust
            </p>
          </motion.div>
        </div>
      </div>

      <CommunitySearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </section>
  )
}
