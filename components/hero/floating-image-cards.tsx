'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BarChart3, Heart, MonitorPlay, Play, Repeat2, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cardFloat } from '@/lib/animations'
import { cn } from '@/lib/utils'

const linkReset =
  'no-underline !text-white hover:!text-white hover:no-underline focus-visible:no-underline active:!text-white visited:!text-white'

const slabCls = cn(
  'block h-auto rounded-xl border border-[#C9A961]/35 bg-[#0F3D2E]/90 p-4 shadow-lg backdrop-blur-md transition hover:bg-[#0F3D2E]/95 text-white',
  linkReset,
)

/** Outer chrome for the larger YouTube card — matches previous single-card shell */
const youtubeFrameCls = cn(
  'relative rounded-[26px] border border-[#C9A961]/25 bg-gradient-to-b from-[#1a2420] via-[#121816] to-[#0a0f0c] p-[6px] shadow-[0_28px_64px_rgba(0,0,0,0.55),0_0_0_1px_rgba(201,169,97,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-black/50',
)

type CardRow = { id: string; delay: number; kind: 'chat'; href: string }

const CARDS: CardRow[] = [
  {
    id: 'chat',
    delay: 0.15,
    kind: 'chat',
    href: '/private-phone-messaging',
  },
]

const CHAT_Z = 40 as const

const X_FEED_ROTATE_MS = 10000

const MOCK_X_FEED: ReadonlyArray<{
  name: string
  handle: string
  body: string
  vein: string
}> = [
  {
    name: 'Reuters Live',
    handle: '@Reuters',
    vein: '2.8M impressions',
    body: 'U.S. co-op lending resilient as borrowers favor member-backed networks over traditional banks.',
  },
  {
    name: 'CNN Business',
    handle: '@CNNBusiness',
    vein: '4.9M impressions',
    body: 'Neighborhood-centric listing apps see spike in weekend searches — brokers adopt feed-first UX.',
  },
  {
    name: 'The Wall Street Journal',
    handle: '@WSJmarkets',
    vein: '1.3M impressions',
    body: 'Trust-heavy housing platforms outperform on retention when quotes run end-to-end encrypted.',
  },
  {
    name: 'Bloomberg Opinion',
    handle: '@opinion',
    vein: '890K impressions',
    body: 'Member-owned brokerage rails draw capital as renters prize transparent fee structures.',
  },
  {
    name: 'The Verge',
    handle: '@verge',
    vein: '1.0M impressions',
    body: '“Posts-first home search” rewired how renters compare corridors — incumbent portals respond.',
  },
]

const STREAM_CAPTION_ROTATE_MS = 12000

const STREAM_CAPTIONS: readonly string[] = [
  'Member walks and policy Q&A — replay trims by chapter.',
  'Neighborhood corridor tours with live captions.',
  'Broker-hosted briefings synced to listings in your corridor.',
  'Watch parties for rate and market updates — moderated chat.',
]

function YoutubeCard({ labelId }: { labelId: string }) {
  const [captionIdx, setCaptionIdx] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setCaptionIdx((i) => (i + 1) % STREAM_CAPTIONS.length), STREAM_CAPTION_ROTATE_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className={youtubeFrameCls}>
      <div
        className="pointer-events-none absolute -inset-px rounded-[26px] opacity-[0.35] blur-xl"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201, 169, 97, 0.22), transparent 55%), radial-gradient(ellipse 70% 50% at 80% 100%, rgba(16, 185, 129, 0.12), transparent 50%)',
        }}
      />
      <div className="relative overflow-hidden rounded-[20px] bg-black">
        <div className="bg-[#050807] px-3 pb-4 pt-2.5 sm:px-4 sm:pb-5">
          <p id={labelId} className="sr-only">
            Member video preview with rotating captions.
          </p>

          <div
            className="overflow-hidden rounded-[12px] border border-white/[0.14] bg-[#0f0f0f] shadow-inner ring-1 ring-black/50"
            aria-hidden
          >
            <div className="flex items-center gap-2 border-b border-white/[0.07] bg-[#282828] px-3 py-2">
              <span className="flex shrink-0 gap-[6px]" aria-hidden>
                <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#ff5f56]" />
                <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#febc2e]" />
                <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#28c840]" />
              </span>
              <MonitorPlay className="h-3 w-3 shrink-0 text-white/72" aria-hidden />
              <span className="min-w-0 flex-1 truncate font-sans text-[8px] font-medium uppercase tracking-[0.12em] text-white/92 sm:text-[9px]">
                youtu.be · Centuries Mutual
              </span>
              <Users className="h-3 w-3 shrink-0 text-white/75" aria-hidden />
            </div>
            {/* Same proportional video area as the original combined modal */}
            <div className="relative w-full pt-[54%] sm:pt-[50%]">
              <div className="absolute inset-0 bg-[#050505]" />
              <div className="absolute inset-[1px] bg-[radial-gradient(ellipse_at_50%_20%,rgba(201,169,97,0.08),transparent_52%),linear-gradient(to_bottom,#0a0a0a,#000)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[rgba(255,255,255,0.95)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-2 ring-black/65 sm:h-[4rem] sm:w-[4rem]">
                  <Play
                    className="relative left-[2px] h-10 w-10 shrink-0 text-[#050505] sm:h-12 sm:w-12"
                    fill="currentColor"
                    strokeWidth={0}
                    aria-hidden
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex min-h-[2.25rem] items-start justify-start sm:mt-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={captionIdx}
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="line-clamp-2 text-left font-sans text-[9px] leading-snug tracking-[0.015em] text-white/72"
              >
                {STREAM_CAPTIONS[captionIdx]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

function PulseCard({ labelId }: { labelId: string }) {
  const [feedIdx, setFeedIdx] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setFeedIdx((i) => (i + 1) % MOCK_X_FEED.length), X_FEED_ROTATE_MS)
    return () => window.clearInterval(id)
  }, [])

  const post = MOCK_X_FEED[feedIdx]

  return (
    <div className="relative rounded-[18px] border border-[#C9A961]/28 bg-gradient-to-b from-[#161c18] via-[#101512] to-[#0a0e0c] p-1 shadow-[0_18px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-black/40">
      <div className="relative overflow-hidden rounded-[14px] bg-[#050807] px-2.5 pb-2.5 pt-2 sm:px-3">
        <p id={labelId} className="sr-only">
          Public pulse: live X-style timeline preview (not your DMs).
        </p>

        <div className="mb-1.5 flex items-center gap-2 opacity-85">
          <span className="translate-y-[0.5px] text-[13px] font-semibold leading-none text-white/50">𝕏</span>
          <span className="translate-y-[0.5px] font-sans text-[6.5px] font-medium uppercase tracking-[0.18em] text-white/32">
            Public pulse
          </span>
          <span className="rounded border border-emerald-500/10 bg-emerald-500/[0.09] px-[4px] py-px font-sans text-[6px] font-semibold uppercase tracking-wide text-emerald-200/65">
            Not your DMs
          </span>
        </div>

        <div className="relative isolate overflow-hidden rounded-[10px] border border-white/[0.06] bg-[#060a0c]/92 px-2 py-1.5 backdrop-blur-[2px] sm:px-2.5 sm:py-2">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={feedIdx}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 0.88, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none flex gap-1.5"
            >
              <span className="mt-px h-[24px] w-[24px] shrink-0 rounded-full bg-gradient-to-br from-[#3d4650]/90 to-[#1e232a] opacity-90 shadow-inner ring-1 ring-white/[0.07]" />
              <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                <div className="flex min-w-0 flex-wrap items-baseline gap-x-1">
                  <span className="truncate font-sans text-[10px] font-medium leading-tight text-neutral-400/95">{post.name}</span>
                  <span className="font-sans text-[9px] text-neutral-600">{post.handle}</span>
                </div>
                <span className="mt-px block h-2.5 shrink-0 truncate font-sans text-[8px] leading-none text-neutral-700">{post.vein}</span>
                <div className="mt-1 overflow-hidden">
                  <p className="line-clamp-2 font-sans text-[10px] leading-[1.35] text-neutral-500/95">{post.body}</p>
                </div>
                <div className="mt-1.5 flex shrink-0 items-center gap-2.5 text-neutral-700/95">
                  <span className="inline-flex items-center gap-px opacity-85">
                    <Heart className="h-2.5 w-2.5 shrink-0 opacity-90" strokeWidth={2} aria-hidden />
                    <span className="text-[7px] tracking-tight">—</span>
                  </span>
                  <Repeat2 className="h-2.5 w-2.5 shrink-0 opacity-75" aria-hidden />
                  <BarChart3 className="h-2.5 w-2.5 shrink-0 opacity-75" aria-hidden />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function FloatingInner({ row, titleId }: { row: CardRow; titleId: string }) {
  const youtubeLabel = `${titleId}-youtube`
  const pulseLabel = `${titleId}-pulse`
  return (
    <div className="flex w-full flex-col gap-3 sm:gap-4">
      <Link href={row.href} className={cn(slabCls, 'lg:pointer-events-auto p-2 sm:p-3')} aria-labelledby={youtubeLabel}>
        <YoutubeCard labelId={youtubeLabel} />
      </Link>
      <Link href={row.href} className={cn(slabCls, 'lg:pointer-events-auto p-2.5 sm:p-3')} aria-labelledby={pulseLabel}>
        <PulseCard labelId={pulseLabel} />
      </Link>
    </div>
  )
}

function FloaterArticle({ row }: { row: CardRow }) {
  const titleId = `floater-${row.id}-title`
  return (
    <motion.article
      variants={cardFloat}
      initial="hidden"
      animate="show"
      transition={{ delay: row.delay }}
      className="relative z-10 w-full max-w-md"
      style={{ zIndex: CHAT_Z }}
      aria-label="Member video and public pulse shortcuts"
    >
      <FloatingInner row={row} titleId={titleId} />
    </motion.article>
  )
}

export function FloatingImageCards({ className = '' }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none relative z-[1] flex w-full max-w-[min(28rem,100%)] flex-col',
        '[&_a]:pointer-events-auto',
        className,
      )}
    >
      {CARDS.map((c) => (
        <FloaterArticle key={c.id} row={c} />
      ))}
    </div>
  )
}
