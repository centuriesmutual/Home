'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BarChart3, Heart, MonitorPlay, Play, Repeat2, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cardFloat } from '@/lib/animations'
import { cn } from '@/lib/utils'

const linkReset =
  'no-underline !text-white hover:!text-white hover:no-underline focus-visible:no-underline active:!text-white visited:!text-white'

const newsGlassCls = cn(
  'block h-full rounded-xl border border-white/28 bg-black/80 p-4 shadow-xl shadow-black/35 ring-1 ring-white/12 backdrop-blur-md backdrop-saturate-150 transition hover:bg-black/[0.86] hover:border-white/38 hover:shadow-black/50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[#C9A961]/55 text-white',
  linkReset,
)


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
  | { id: string; delay: number; place: string; hidden?: string; kind: 'stream'; href: string }
  | { id: string; delay: number; place: string; hidden?: string; kind: 'chat'; href: string }

const CARDS: CardRow[] = [
  {
    id: 'news',
    delay: 0,
    kind: 'news',
    place: 'left-6 top-4 w-56 sm:left-8 sm:top-5 lg:left-10 lg:top-6',
    hidden: 'max-[420px]:left-5 max-[420px]:top-4 max-[420px]:w-[calc(100%-2.5rem)]',
    href: '/newspaper',
    eyebrow: 'News',
    headline: 'Texas co-op housing starts edge up amid rate pause',
    sub: 'Morning wire · Opens in Journal · 3 min read',
  },
  {
    id: 'chat',
    delay: 0.2,
    kind: 'chat',
    href: '/private-phone-messaging',
    place:
      'bottom-[10.5rem] right-4 w-[min(92vw,22rem)] sm:bottom-[11.75rem] sm:right-8 sm:w-[23.5rem] lg:bottom-[12.25rem] lg:right-12 lg:w-[26.75rem]',
    hidden: 'max-[480px]:right-5 max-[480px]:bottom-[13.75rem] max-[480px]:w-[calc(100%-2.5rem)]',
  },
  {
    id: 'stream',
    delay: 0.28,
    kind: 'stream',
    href: '/network',
    place:
      'bottom-24 left-6 w-[min(92vw,18.75rem)] sm:bottom-28 sm:left-8 sm:w-[19.75rem] lg:bottom-32',
    hidden: 'max-[420px]:bottom-[18rem] max-[420px]:left-5 max-[420px]:w-[calc(100%-2.5rem)]',
  },
]

/** Elevate overlapping cards — news sits under chat/stream so previews never cloak ZK messaging. */
const CARD_Z = { news: 24, chat: 46, stream: 34 } as const

const X_FEED_ROTATE_MS = 10000

/** Presentation-only mock timeline (not wired to 𝕏 / external APIs). */
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

function IllustrationChat({ titleId }: { titleId: string }) {
  const [feedIdx, setFeedIdx] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setFeedIdx((i) => (i + 1) % MOCK_X_FEED.length), X_FEED_ROTATE_MS)
    return () => window.clearInterval(id)
  }, [])

  const post = MOCK_X_FEED[feedIdx]

  return (
    <>
      <div
        className="relative rounded-[26px] border border-[#C9A961]/25 bg-gradient-to-b from-[#1a2420] via-[#121816] to-[#0a0f0c] p-[6px] shadow-[0_28px_64px_rgba(0,0,0,0.55),0_0_0_1px_rgba(201,169,97,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-black/50"
        aria-hidden
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-[26px] opacity-[0.35] blur-xl"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201, 169, 97, 0.22), transparent 55%), radial-gradient(ellipse 70% 50% at 80% 100%, rgba(16, 185, 129, 0.12), transparent 50%)',
          }}
        />
        <div className="relative overflow-hidden rounded-[20px] bg-black">
          <div className="bg-[#050807] px-3 pb-3 pt-2.5">
            <p id={titleId} className="sr-only">
              ZK-sealed threads · public pulse preview
            </p>
            <div className="mb-2 flex items-center gap-2">
              <span className="translate-y-[0.5px] text-[16px] font-bold leading-none text-white">𝕏</span>
              <span className="translate-y-[0.5px] font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-white/48">
                Public pulse
              </span>
              <span className="rounded bg-emerald-500/18 px-[6px] py-[2px] font-sans text-[7px] font-semibold uppercase tracking-wide text-emerald-200/95">
                Not your DMs
              </span>
              <span className="relative ml-auto flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-65" />
                <span className="relative m-auto inline-flex h-[5px] w-[5px] rounded-full bg-emerald-400" />
              </span>
            </div>

            <div className="relative isolate overflow-hidden rounded-[13px] border border-white/[0.09] bg-[#0a1014] px-3 py-2.5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={feedIdx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none flex max-h-[158px] min-h-[158px] gap-2.5"
                >
                  <span className="mt-px h-[34px] w-[34px] shrink-0 rounded-full bg-gradient-to-br from-[#5a6674] to-[#2a323c] shadow-inner ring-1 ring-white/[0.11]" />
                  <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                    <div className="flex min-w-0 flex-wrap items-baseline gap-x-1">
                      <span className="truncate font-sans text-[13px] font-bold leading-tight text-neutral-50">{post.name}</span>
                      <span className="font-sans text-[11px] text-neutral-500">{post.handle}</span>
                    </div>
                    <span className="mt-px block h-3.5 shrink-0 truncate font-sans text-[10px] leading-none text-neutral-600">{post.vein}</span>
                    <div className="mt-2 h-[4.4375rem] shrink-0 overflow-hidden">
                      <p className="font-sans text-[12px] leading-[1.38] text-neutral-200 line-clamp-4">{post.body}</p>
                    </div>
                    <div className="mt-auto flex shrink-0 items-center gap-4 pb-px pt-2 text-neutral-600">
                      <span className="inline-flex items-center gap-px">
                        <Heart className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden />
                        <span className="text-[9px] tracking-tight">—</span>
                      </span>
                      <Repeat2 className="h-3.5 w-3.5 shrink-0 opacity-95" aria-hidden />
                      <BarChart3 className="h-3.5 w-3.5 shrink-0 opacity-95" aria-hidden />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function IllustrationStream({ titleId }: { titleId: string }) {
  const [captionIdx, setCaptionIdx] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setCaptionIdx((i) => (i + 1) % STREAM_CAPTIONS.length), STREAM_CAPTION_ROTATE_MS)
    return () => window.clearInterval(id)
  }, [])
  const caption = STREAM_CAPTIONS[captionIdx]

  return (
    <>
      <div className="mb-4 flex items-center gap-3 border-b border-white/[0.1] pb-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#C9A961]/40 bg-black/25">
          <MonitorPlay className="h-4 w-4 text-[#C9A961]" strokeWidth={1.95} aria-hidden />
        </span>
        <div className="min-w-0 flex flex-1 flex-col gap-1">
          <p id={titleId} className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]/95">
            Stream
          </p>
          <span className="font-sans text-[9px] leading-tight text-white/62">Member video · moderated live replay</span>
        </div>
        <span className="rounded-sm bg-[#b91c1c] px-1.5 py-px font-sans text-[8px] font-bold uppercase tracking-wider text-white shadow-sm">
          Live
        </span>
      </div>

      {/* YouTube-style player chrome: 16:9 surface */}
      <div
        className="overflow-hidden rounded-[14px] border border-white/[0.14] bg-[#0f0f0f] shadow-[0_22px_56px_rgba(0,0,0,0.5)] ring-1 ring-black/55"
        aria-hidden
      >
        <div className="flex items-center gap-2 border-b border-white/[0.07] bg-[#282828] px-3 py-2">
          <span className="flex gap-[6px]" aria-hidden>
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5f56]" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#28c840]" />
          </span>
          <span className="min-w-0 flex-1 truncate font-sans text-[8px] font-medium uppercase tracking-[0.16em] text-white/92">
            youtu.be · Centuries Mutual
          </span>
          <Users className="h-3 w-3 shrink-0 text-white/75" />
        </div>

        <div className="relative w-full pt-[56.25%]">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute inset-[1px] bg-[radial-gradient(ellipse_at_50%_20%,rgba(201,169,97,0.08),transparent_52%),linear-gradient(to_bottom,#0a0a0a,#000)]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[rgba(255,255,255,0.95)] shadow-[0_8px_32px_rgba(0,0,0,0.55)] ring-2 ring-black/65">
              <Play className="relative left-[3px] h-10 w-10 shrink-0 text-[#050505]" fill="currentColor" strokeWidth={0} aria-hidden />
            </span>
          </div>
        </div>
      </div>

        <div className="flex min-h-[2.75rem] items-start justify-center pt-2">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={captionIdx}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="line-clamp-2 text-center font-sans text-[10px] leading-snug tracking-[0.015em] text-white/74"
            >
              {caption}
            </motion.p>
          </AnimatePresence>
        </div>
    </>
  )
}

function FloatingInner({ row, titleId }: { row: CardRow; titleId: string }) {
  if (row.kind === 'news') {
    return (
      <Link
        href={row.href}
        className={cn(
          newsGlassCls,
          'group/card-news relative isolate overflow-hidden lg:pointer-events-auto motion-safe:transition-shadow motion-safe:duration-300 hover:shadow-2xl hover:shadow-black/60',
        )}
      >
        <div className="relative z-[1] pb-px">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-white" aria-hidden />
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white">{row.eyebrow}</span>
          </div>
          <h3 id={titleId} className="font-serif text-[0.9375rem] font-medium leading-snug text-white">
            {row.headline}
          </h3>
          <p className="mt-2 font-sans text-[11px] leading-snug text-white">{row.sub}</p>
        </div>

        {/* YouTube-style preview layer — clipped to card; inactive state cannot paint over sibling floating cards */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] flex flex-col justify-end rounded-xl bg-black/0 p-3 opacity-0 transition-all duration-300 ease-out backdrop-blur-0 group-hover/card-news:bg-black/82 group-hover/card-news:opacity-100 group-hover/card-news:backdrop-blur-sm group-focus-within/card-news:bg-black/82 group-focus-within/card-news:opacity-100 group-focus-within/card-news:backdrop-blur-sm motion-reduce:transition-none motion-reduce:group-hover/card-news:bg-black/92"
          aria-hidden
        >
          <div
            data-news-video-slot
            className="relative w-full overflow-hidden rounded-lg bg-[#0f0f0f] pt-1 shadow-[0_14px_40px_rgba(0,0,0,0.55)] ring-1 ring-white/12"
          >
            <div className="flex items-center justify-between gap-1 border-b border-white/10 bg-[#272727] px-2 py-[5px]">
              <span className="truncate font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-white/92">
                Centuries Mutual · Briefing
              </span>
              <span className="shrink-0 rounded bg-black/65 px-[4px] py-px font-sans text-[7px] font-bold uppercase tracking-wider text-emerald-200/92">
                CC
              </span>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(201,169,97,0.18),transparent_52%),linear-gradient(to_bottom,#1a261f,#050807)]" />
              <div className="absolute inset-0 opacity-[0.085] bg-[repeating-linear-gradient(180deg,#fff,#fff_1px,transparent_1px_10px)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white/30 bg-black/62 text-white shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-transform duration-300 motion-safe:group-hover/card-news:scale-105 motion-reduce:group-hover/card-news:scale-100">
                  <Play className="relative left-[2px] h-7 w-7 shrink-0" fill="currentColor" strokeWidth={0} aria-hidden />
                </span>
              </div>
              <div className="pointer-events-none absolute bottom-1.5 left-2 right-2">
                <div className="mb-1 flex items-center gap-2">
                  <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/22">
                    <div className="h-full w-[31%] rounded-full bg-[#ff0000] shadow-[0_0_12px_rgba(255,0,0,0.65)] motion-safe:group-hover/card-news:w-[54%] motion-safe:transition-all motion-safe:duration-[1.75s] motion-safe:ease-out" />
                  </div>
                  <span className="font-mono text-[8px] tracking-tight text-white/88">4:52</span>
                </div>
                <div className="flex items-center gap-3 opacity-95">
                  <span className="h-5 w-[3.75rem] rounded-sm bg-black/72 ring-1 ring-white/14" aria-hidden />
                  <span className="text-[9px] text-white/80">/</span>
                  <span className="h-5 flex-1 rounded-sm bg-black/72 ring-1 ring-white/12" aria-hidden />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-2 px-1 text-center font-sans text-[10px] font-semibold leading-tight text-white">
            Hover · preview playback
            <span className="mt-1 block truncate font-normal text-white/92">{row.headline}</span>
          </p>
        </div>
      </Link>
    )
  }

  if (row.kind === 'chat') {
    return (
      <Link
        href={row.href}
        className={cn(
          slabCls,
          'flex min-h-[24.5rem] flex-col !h-auto items-stretch !p-5 sm:min-h-[25rem] sm:!p-6 lg:pointer-events-auto',
        )}
      >
        <IllustrationChat titleId={titleId} />
      </Link>
    )
  }

  return (
    <Link href={row.href} className={cn(slabCls, 'flex min-h-[22rem] flex-col !h-auto justify-between !p-5 sm:min-h-[23rem] sm:!p-6 lg:pointer-events-auto')}>
      <IllustrationStream titleId={titleId} />
    </Link>
  )
}

export function FloatingImageCards({ className = '' }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 z-10 lg:pointer-events-auto', className)}>
      {CARDS.map((c) => {
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
            style={{ zIndex: CARD_Z[c.id as keyof typeof CARD_Z] }}
            aria-labelledby={titleId}
          >
            <FloatingInner row={c} titleId={titleId} />
          </motion.article>
        )
      })}
    </div>
  )
}
