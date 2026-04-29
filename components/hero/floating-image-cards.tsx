'use client'

import Link from 'next/link'
import { Maximize2, Mic, MonitorPlay, Play, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { cardFloat } from '@/lib/animations'
import { cn } from '@/lib/utils'

const linkReset =
  'no-underline !text-white hover:!text-white hover:no-underline focus-visible:no-underline active:!text-white visited:!text-white'

const glassCls = cn(
  'block h-full rounded-xl border border-white/15 bg-black/40 p-4 shadow-lg backdrop-blur-md transition hover:bg-black/52 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/35 text-white',
  linkReset,
)

/** Forest “editorial slab” chrome */
const slabCls = cn(
  'block h-full rounded-xl border border-[#C9A961]/35 bg-[#0F3D2E]/90 p-4 shadow-lg backdrop-blur-md transition hover:bg-[#0F3D2E]/95 text-white',
  linkReset,
)

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
    headline: 'Texas co-op housing starts edge up amid rate pause',
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
    headline: 'On-ledger payouts settle nightly with quorum receipts',
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

const STREAM_WAVE = [
  44, 58, 52, 62, 48, 64, 54, 57, 51, 60, 55, 52, 59, 56, 63, 50, 57, 54, 61, 53, 58, 55, 60, 52, 54, 59, 56, 51, 61, 55, 53, 57,
]

function IllustrationChat({ titleId }: { titleId: string }) {
  return (
    <>
      <p id={titleId} className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-white">
        Chat · ZK-sealed threads
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
          <span className="rounded-full bg-white/10 px-2 py-[3px] font-sans text-[9px] font-medium uppercase tracking-wide text-white">
            Read receipt · quorum key
          </span>
        </div>
      </div>
      <p className="mt-3 font-sans text-[11px] leading-snug text-white">
        Direct messaging with member-verified envelopes.
      </p>
    </>
  )
}

function IllustrationStream({ titleId }: { titleId: string }) {
  return (
    <>
      <div className="mb-3 flex items-center gap-2">
        <MonitorPlay className="h-4 w-4 shrink-0 text-white" strokeWidth={1.95} aria-hidden />
        <p id={titleId} className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-white">
          Stream
        </p>
        <span className="ml-auto rounded-sm bg-[#b91c1c] px-[5px] py-px font-sans text-[8px] font-bold uppercase tracking-wider text-white shadow-sm">
          Live
        </span>
      </div>

      <div
        className="mb-3 overflow-hidden rounded-lg border border-white/15 bg-[#040a08] shadow-inner ring-1 ring-black/50"
        aria-hidden
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-black/65 px-2.5 py-1.5">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          </span>
          <span className="font-sans text-[8px] font-medium uppercase tracking-wide text-white/90">Network hub · live</span>
          <Users className="ml-auto h-3.5 w-3.5 shrink-0 text-white/85" aria-hidden />
        </div>

        <div className="relative px-2 pb-2 pt-2">
          <div className="relative aspect-[16/11] overflow-hidden rounded-md border border-white/12 bg-[linear-gradient(165deg,#0d3022_0%,#05140e_52%,#020807_100%)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 13px),repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 13px)',
              }}
            />
            <span className="absolute right-2 top-2 rounded border border-emerald-500/35 bg-black/72 px-[5px] py-[2px] font-sans text-[7px] font-semibold uppercase tracking-wide text-emerald-100/95">
              HD · E2EE
            </span>
            <div className="absolute bottom-2 left-2 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-8 w-[2.25rem] rounded border border-white/15 bg-gradient-to-b from-white/12 to-black/40 shadow-sm"
                />
              ))}
            </div>
            <span className="pointer-events-none absolute left-1/2 top-[38%] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/55 text-white shadow-[0_6px_24px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <Play className="relative left-[1px] ml-0.5 h-5 w-5 shrink-0" fill="currentColor" strokeWidth={0} aria-hidden />
            </span>
          </div>

          <div className="mt-2 space-y-1.5">
            <div className="flex h-7 items-end justify-between gap-[1px] px-0.5">
              {STREAM_WAVE.map((pct, i) => (
                <span
                  key={i}
                  className="w-[2px] shrink-0 rounded-[1px] bg-emerald-400/55"
                  style={{ height: `${pct}%` }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 px-0.5">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/12">
                <div className="h-full w-[41%] rounded-full bg-white/70" />
              </div>
              <span className="font-mono text-[8px] text-white/80">12:04</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 bg-black/58 px-2 py-1.5">
          <span className="flex items-center gap-2">
            <Mic className="h-3.5 w-3.5 text-white/90" aria-hidden />
            <span className="rounded bg-white/10 px-1 py-px font-sans text-[8px] uppercase tracking-wide text-white/90">
              Muted
            </span>
          </span>
          <Maximize2 className="h-3.5 w-3.5 text-white/70" aria-hidden />
        </div>
      </div>

      <p className="font-sans text-[11px] leading-snug text-white">
        Circle broadcasts, town halls & listing walkthroughs · HD & encrypted.
      </p>
    </>
  )
}

function FloatingInner({ row, titleId }: { row: CardRow; titleId: string }) {
  if (row.kind === 'news' || row.kind === 'glass-article') {
    return (
      <Link href={row.href} className={cn(glassCls, 'lg:pointer-events-auto')}>
        {row.kind === 'news' ? (
          <>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-white" aria-hidden />
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white">{row.eyebrow}</span>
            </div>
            <h3 id={titleId} className="font-serif text-[0.9375rem] font-medium leading-snug text-white">
              {row.headline}
            </h3>
            <p className="mt-2 font-sans text-[11px] leading-snug text-white">{row.sub}</p>
          </>
        ) : (
          <>
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white">{row.eyebrow}</p>
            <h3 id={titleId} className="mt-2 font-serif text-[0.9375rem] font-medium leading-snug text-white">
              {row.headline}
            </h3>
            <p className="mt-2 font-sans text-[11px] leading-snug text-white">{row.sub}</p>
          </>
        )}
      </Link>
    )
  }

  if (row.kind === 'chat') {
    return (
      <Link href={row.href} className={cn(slabCls, 'lg:pointer-events-auto')}>
        <IllustrationChat titleId={titleId} />
      </Link>
    )
  }

  return (
    <Link href={row.href} className={cn(slabCls, 'lg:pointer-events-auto')}>
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
