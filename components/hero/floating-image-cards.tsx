'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cardFloat } from '@/lib/animations'
import { cn } from '@/lib/utils'

const pulseDot = (
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/80 opacity-75" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
  </span>
)

const glassCls =
  'block h-full rounded-xl border border-white/15 bg-black/40 p-4 shadow-lg backdrop-blur-md transition hover:bg-black/52 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/35'

type CardDef =
  | {
      id: string
      delay: number
      place: string
      hidden?: string
      kind: 'live'
      href: string
      sub: string
    }
  | {
      id: string
      delay: number
      place: string
      hidden?: string
      kind: 'article-glass'
      href: string
      eyebrow: string
      headline: string
      sub: string
    }
  | {
      id: string
      delay: number
      place: string
      hidden?: string
      kind: 'quote'
      href: string
      initial: string
      quote: string
      attribution: string
    }

const CARDS: CardDef[] = [
  {
    id: 'live',
    delay: 0,
    kind: 'live',
    place: 'left-8 top-8 w-56 lg:left-10 lg:top-10',
    hidden: 'max-[420px]:left-5 max-[420px]:top-6 max-[420px]:w-[calc(100%-2.5rem)]',
    href: '/rooms',
    sub: 'across 12 Texas neighborhoods',
  },
  {
    id: 'from-field',
    delay: 0.07,
    kind: 'article-glass',
    place: 'top-[7rem] right-6 w-[13.75rem]',
    hidden: 'max-md:hidden sm:right-10 lg:top-28 lg:right-12 lg:w-[15rem]',
    href: '/newspaper',
    eyebrow: 'From the field',
    headline: 'North Texas equity index climbs in Q2',
    sub: 'Member housing brief · 4 min read',
  },
  {
    id: 'bulletin',
    delay: 0.14,
    kind: 'article-glass',
    place: 'left-[8%] top-[40%] w-[13rem] -translate-y-1 sm:left-[10%]',
    hidden: 'max-lg:hidden',
    href: '/newspaper',
    eyebrow: 'Network bulletin',
    headline: 'Trust charter vote clears quorum',
    sub: 'Journal digest publishing today',
  },
  {
    id: 'austin',
    delay: 0.2,
    kind: 'article-glass',
    place: 'right-[8%] top-[52%] w-[14rem] max-sm:right-5',
    hidden: 'max-[380px]:hidden max-sm:hidden',
    href: '/newspaper',
    eyebrow: 'Austin bureau',
    headline: 'Co-op leases pull out-of-town members downtown',
    sub: 'Member reporting · Spotlight',
  },
  {
    id: 'trustee-pull',
    delay: 0.24,
    kind: 'quote',
    place: 'bottom-[9.75rem] right-7 w-[16.75rem]',
    hidden: 'max-[480px]:right-5 max-[480px]:bottom-[11rem] max-[480px]:w-[calc(100%-2.5rem)] sm:right-10 lg:bottom-40',
    href: '/newspaper',
    initial: 'J',
    quote: 'Blockchain rent rails cleared before noon—we felt it same day.',
    attribution: '— James R., Trustee since 2023',
  },
  {
    id: 'sarah',
    delay: 0.28,
    kind: 'quote',
    place: 'bottom-8 left-8 w-[16.75rem]',
    hidden: 'max-[420px]:bottom-6 max-[420px]:left-5 max-[420px]:w-[calc(100%-2.5rem)]',
    href: '/trust',
    initial: 'S',
    quote: 'Found our place in Plano in three days.',
    attribution: '— Sarah M., Member since 2024',
  },
]

function FloatingCardInner({ card, titleId }: { card: CardDef; titleId: string }) {
  if (card.kind === 'live') {
    return (
      <Link href={card.href} className={`${glassCls} lg:pointer-events-auto`}>
        <div className="mb-1 flex items-center gap-2">
          {pulseDot}
          <span id={titleId} className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/90">
            Live listings
          </span>
        </div>
        <p className="mt-1 font-sans text-base font-medium text-white">247 active listings</p>
        <p className="mt-0.5 font-sans text-xs text-white/70">{card.sub}</p>
      </Link>
    )
  }

  if (card.kind === 'article-glass') {
    return (
      <Link href={card.href} className={`${glassCls} lg:pointer-events-auto`}>
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#C9A961]/95">{card.eyebrow}</p>
        <h3 id={titleId} className="mt-2 font-serif text-[0.9375rem] font-medium leading-snug text-white">
          {card.headline}
        </h3>
        <p className="mt-2 font-sans text-[11px] leading-snug text-white/72">{card.sub}</p>
      </Link>
    )
  }

  return (
    <Link href={card.href} className={`block h-full lg:pointer-events-auto`}>
      <div className="rounded-xl border border-[#C9A961]/30 bg-[#0F3D2E]/85 p-4 shadow-lg backdrop-blur-md transition hover:bg-[#0F3D2E]/92">
        <div className="flex gap-3">
          <div
            aria-hidden
            className="flex h-8 min-h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C9A961] to-[#9B7F3F] text-sm font-semibold text-white shadow-sm ring-[3px] ring-[rgba(201,169,97,0.3)]"
          >
            {card.initial}
          </div>
          <div className="min-w-0 flex-1">
            <blockquote id={titleId} className="font-serif text-sm italic leading-snug text-white">
              &ldquo;{card.quote}&rdquo;
            </blockquote>
            <p className="mt-2 text-[11px] font-medium text-[#C9A961]">{card.attribution}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function FloatingImageCards({ className = '' }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 z-10 lg:pointer-events-auto', className)}>
      {CARDS.map((c, i) => {
        const titleId = `floater-${c.id}-title`
        return (
          <motion.article
            key={c.id}
            variants={cardFloat}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.14 }}
            transition={{ delay: c.delay }}
            className={cn('absolute', c.place, c.hidden)}
            style={{ zIndex: 20 + i }}
            aria-labelledby={titleId}
          >
            <FloatingCardInner card={c} titleId={titleId} />
          </motion.article>
        )
      })}
    </div>
  )
}
