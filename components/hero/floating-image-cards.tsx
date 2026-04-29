'use client'

import Link from 'next/link'
import { Play, Radio, Video } from 'lucide-react'
import { motion } from 'framer-motion'
import { cardFloat } from '@/lib/animations'
import { cn } from '@/lib/utils'

const glassCls =
  'block h-full rounded-xl border border-white/15 bg-black/40 p-4 shadow-lg backdrop-blur-md transition hover:bg-black/52 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/35'

/** Forest “editorial slab” chrome (aligned with Sarah-style cards) */
const slabCls =
  'block h-full rounded-xl border border-[#C9A961]/35 bg-[#0F3D2E]/90 p-4 shadow-lg backdrop-blur-md transition hover:bg-[#0F3D2E]/95'

type CardRow =
  | {
      id: string
      delay: number
      place: string
      hidden?: string
      kind: 'news'
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
      kind: 'glass-article'
      href: string
      eyebrow: string
      headline: string
      sub: string
    }
  | { id: string; delay: number; place: string; hidden?: string; kind: 'stream'; href: string }
  | { id: string; delay: number; place: string; hidden?: string; kind: 'chat'; href: string }

const CARDS: CardRow[] = [
  {
    id: 'news',
    delay: 0,
    kind: 'news',
    place: 'left-8 top-8 w-56 lg:left-10 lg:top-10',
    hidden: 'max-[420px]:left-5 max-[420px]:top-6 max-[420px]:w-[calc(100%-2.5rem)]',
    href: '/newspaper',
    eyebrow: 'News',
    headline: 'Texas co‑op housing starts edge up amid rate pause',
    sub: 'Morning wire · Opens in Journal · 3 min read',
  },
  {
    id: 'for-you',
    delay: 0.07,
    kind: 'glass-article',
    place: 'top-[7rem] right-6 w-[13.75rem]',
    hidden: 'max-md:hidden sm:right-10 lg:top-28 lg:right-12 lg:w-[15rem]',
    href: '/newspaper',
    eyebrow: 'For You',
    headline: 'Feed tuned to neighborhoods you follow · zero noise',
    sub: 'Member digest · Personalized',
  },
  {
    id: 'treasury',
    delay: 0.14,
    kind: 'glass-article',
    place: 'left-[8%] top-[40%] w-[13rem] -translate-y-1 sm:left-[10%]',
    hidden: 'max-lg:hidden',
    href: '/pay',
    eyebrow: 'Treasury',
    headline: 'On‑ledger payouts settle nightly with quorum receipts',
    sub: 'Trust rails · Institutional guardrails · Tap to inspect',
  },
  {
    id: 'chat',
    delay: 0.2,
    kind: 'chat',
    href: '/private-phone-messaging',
    place: 'bottom-[9.75rem] right-7 w-[17rem]',
    hidden: 'max-[480px]:right-5 max-[480px]:bottom-[11rem] max-[480px]:w-[calc(100%-2.5rem)] sm:right-10 lg:bottom-40',
  },
  {
    id: 'stream',
    delay: 0.28,
    kind: 'stream',
    href: '/network',
    place: 'bottom-8 left-8 w-[16.75rem]',
    hidden: 'max-[420px]:bottom-6 max-[420px]:left-5 max-[420px]:w-[calc(100%-2.5rem)]',
  },
]

function IllustrationChat({ titleId }: { titleId: string }) {
  return (
    <>
      <p id={titleId} className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[#C9A961]/95">
        Chat · ZK‑sealed threads
      </p>
      <div className="mt-3 space-y-2" aria-hidden>
        <div className="flex justify-end">
          <div className="max-w-[88%] rounded-2xl rounded-br-sm border border-white/12 bg-black/35 px-2.5 py-1.5">
            <div className="h-2 w-[5.5rem] rounded-full bg-white/25" />
            <div className="mt-1.5 h-2 w-20 rounded-full bg-white/14" />
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-emerald-500/35 bg-emerald-900/55 px-2.5 py-2">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white/65" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-white/50 [animation-delay:150ms]" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-white/40 [animation-delay:300ms]" />
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-1">
          <span className="rounded-full bg-white/10 px-2 py-[3px] font-sans text-[9px] font-medium uppercase tracking-wide text-white/75">
            Read receipt · quorum key
          </span>
        </div>
      </div>
      <p className="mt-3 font-sans text-[11px] leading-snug text-white/72">Direct messaging with member‑verified envelopes.</p>
    </>
  )
}

function IllustrationStream({ titleId }: { titleId: string }) {
  return (
    <>
      <div className="mb-2 flex items-center gap-2">
        <Radio className="h-4 w-4 shrink-0 text-emerald-300" strokeWidth={1.95} aria-hidden />
        <p id={titleId} className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[#C9A961]/95">
          Stream
        </p>
        <span className="ml-auto rounded-sm bg-[#b91c1c] px-[5px] py-px font-sans text-[8px] font-bold uppercase tracking-wider text-white shadow-sm">
          Live
        </span>
      </div>
      <div className="relative mx-auto mb-3 aspect-video w-full max-w-none overflow-hidden rounded-lg bg-gradient-to-br from-[#154a38] via-[#0f2d23] to-[#060908] shadow-inner ring-1 ring-black/35">
        <div className="absolute inset-[12%_18%_18%_18%] rounded-md bg-gradient-to-t from-black/65 via-transparent to-white/12" aria-hidden />
        <span className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/55 text-[#faf7f0] shadow-xl backdrop-blur-md" aria-hidden>
          <Play className="relative left-px ml-0.5 h-5 w-5 shrink-0" fill="currentColor" strokeWidth={0} aria-hidden />
        </span>
        <Video className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 text-white/35" aria-hidden />
      </div>
      <p className="font-sans text-[11px] leading-snug text-white/76">
        Circle broadcasts, town halls & listing walkthroughs · HD & encrypted.
      </p>
    </>
  )
}

function FloatingInner({ row, titleId }: { row: CardRow; titleId: string }) {
  if (row.kind === 'news' || row.kind === 'glass-article') {
    return (
      <Link href={row.href} className={`${glassCls} lg:pointer-events-auto`}>
        {row.kind === 'news' ? (
          <>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#C9A961]" aria-hidden />
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#C9A961]/95">
                {row.eyebrow}
              </span>
            </div>
            <h3 id={titleId} className="font-serif text-[0.9375rem] font-medium leading-snug text-white">
              {row.headline}
            </h3>
            <p className="mt-2 font-sans text-[11px] leading-snug text-white/74">{row.sub}</p>
          </>
        ) : (
          <>
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#C9A961]/95">{row.eyebrow}</p>
            <h3 id={titleId} className="mt-2 font-serif text-[0.9375rem] font-medium leading-snug text-white">
              {row.headline}
            </h3>
            <p className="mt-2 font-sans text-[11px] leading-snug text-white/74">{row.sub}</p>
          </>
        )}
      </Link>
    )
  }

  if (row.kind === 'chat') {
    return (
      <Link href={row.href} className={`${slabCls} lg:pointer-events-auto`}>
        <IllustrationChat titleId={titleId} />
      </Link>
    )
  }

  return (
    <Link href={row.href} className={`${slabCls} lg:pointer-events-auto`}>
      <IllustrationStream titleId={titleId} />
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
            <FloatingInner row={c} titleId={titleId} />
          </motion.article>
        )
      })}
    </div>
  )
}
