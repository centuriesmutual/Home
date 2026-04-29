'use client'

import Link from 'next/link'
import { Lock, MonitorPlay, Play, ShieldCheck, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { cardFloat } from '@/lib/animations'
import { cn } from '@/lib/utils'

const linkReset =
  'no-underline !text-white hover:!text-white hover:no-underline focus-visible:no-underline active:!text-white visited:!text-white'

const glassCls = cn(
  'block h-full rounded-xl border border-white/22 bg-black/74 p-4 shadow-lg backdrop-blur-md transition hover:bg-black/83 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/38 text-white',
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
    id: 'treasury-digest',
    delay: 0.07,
    kind: 'glass-article',
    place: 'top-[7rem] right-6 w-[13.75rem]',
    hidden: 'max-md:hidden sm:right-10 lg:top-28 lg:right-12 lg:w-[15rem]',
    href: '/pay',
    eyebrow: 'Treasury',
    headline: 'Neighborhoods you follow first · zero noise in your digest',
    sub: 'Member digest · Personalized',
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
      <p id={titleId} className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-white">
        Chat · ZK-sealed threads
      </p>

      {/* Device bezel + gray LCD: copy reads like text on-screen */}
      <div className="mt-3 rounded-[1.125rem] border border-zinc-900/80 bg-[linear-gradient(160deg,#3f4147_0%,#1e2024_100%)] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_16px_40px_rgba(0,0,0,0.45)]" aria-hidden>
        <div className="overflow-hidden rounded-[0.875rem] border border-black/55 bg-black/60 px-1.5 pb-2 pt-1.5">
          <div className="mx-auto mb-1.5 h-[3px] w-8 rounded-full bg-zinc-800/95" />

          <div className="rounded-[0.625rem] border border-black/35 bg-[linear-gradient(178deg,#c8ccd4_0%,#9ca3af_45%,#8b929d_100%)] p-2 shadow-[inset_0_2px_4px_rgba(255,255,255,0.45)]">
            <div className="space-y-2.5">
              <div className="flex items-end justify-end gap-2">
                <span className="mb-0.5 h-7 w-7 shrink-0 rounded-xl border border-black/25 bg-[#dfe2e9] shadow-sm" />
                <div className="max-w-[88%] rounded-2xl rounded-br-md border border-black/14 bg-white/95 px-2.5 py-2 shadow-sm">
                  <span className="mb-2 flex items-center gap-1 font-sans text-[8px] font-bold uppercase tracking-wider text-zinc-800">
                    <Lock className="h-3 w-3 shrink-0 text-emerald-800" strokeWidth={2.25} aria-hidden />
                    Zero-knowledge envelope
                  </span>
                  <div className="space-y-1.5">
                    <div className="h-[3px] max-w-[5.75rem] rounded-full bg-zinc-300" />
                    <div className="h-[3px] w-[4rem] rounded-full bg-zinc-200" />
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-start gap-2">
                <span className="mb-0.5 h-7 w-7 shrink-0 rounded-xl border border-black/28 bg-[#e8eaef]" />
                <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-black/14 bg-[#f8fafc]/95 px-2.5 py-2 shadow-sm">
                  <span className="mb-2 flex items-center gap-1 font-sans text-[8px] font-bold uppercase tracking-wider text-zinc-800">
                    <ShieldCheck className="h-3 w-3 shrink-0 text-emerald-800" strokeWidth={2.25} aria-hidden />
                    Verified ring
                  </span>
                  <div className="flex items-center gap-[3px] px-px">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-800/72" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-800/52 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-800/42 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-0.5">
                <span className="rounded-full border border-zinc-600/65 bg-[#374151] px-2 py-[3px] font-sans text-[8px] font-semibold uppercase tracking-wide text-[#fafaf9] shadow-sm shadow-black/25">
                  Read receipt · quorum key
                </span>
              </div>
            </div>
          </div>
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

      {/* YouTube-style player chrome: 16:9 surface, centered play only (no scrubber / PiP / time) */}
      <div
        className="mb-3 overflow-hidden rounded-lg border border-white/15 bg-[#0f0f0f] shadow-[0_20px_50px_rgba(0,0,0,0.55)] ring-1 ring-black/60"
        aria-hidden
      >
        <div className="flex items-center gap-2 border-b border-white/[0.08] bg-[#282828] px-2 py-1.5">
          <span className="flex gap-[5px]" aria-hidden>
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5f56]" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#28c840]" />
          </span>
          <span className="min-w-0 flex-1 truncate font-sans text-[8px] font-medium uppercase tracking-wide text-white/92">
            youtu.be · Centuries Mutual — stream
          </span>
          <Users className="h-3 w-3 shrink-0 text-white/75" />
        </div>

        <div className="relative w-full pt-[56.25%]">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute inset-[1px] bg-[radial-gradient(ellipse_at_50%_20%,rgba(201,169,97,0.07),transparent_52%),linear-gradient(to_bottom,#0a0a0a,#000)]" />

          {/* Centered playback affordance */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[rgba(255,255,255,0.95)] shadow-[0_8px_32px_rgba(0,0,0,0.55)] ring-2 ring-black/65">
              <Play className="relative left-[3px] h-10 w-10 shrink-0 text-[#050505]" fill="currentColor" strokeWidth={0} aria-hidden />
            </span>
          </div>
        </div>
      </div>

      <p className="font-sans text-[11px] leading-snug text-white">
        Circle broadcasts, town halls & listing walkthroughs · HD & encrypted.
      </p>
    </>
  )
}

function FloatingInner({ row, titleId }: { row: CardRow; titleId: string }) {
  if (row.kind === 'news') {
    return (
      <Link
        href={row.href}
        className={cn(
          glassCls,
          'group/card-news relative isolate overflow-hidden lg:pointer-events-auto motion-safe:transition-shadow motion-safe:duration-300 hover:shadow-lg hover:shadow-black/35',
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

        {/* YouTube-style preview layer (wired for future iframe embed later) */}
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

  if (row.kind === 'glass-article') {
    return (
      <Link href={row.href} className={cn(glassCls, 'lg:pointer-events-auto')}>
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white">{row.eyebrow}</p>
        <h3 id={titleId} className="mt-2 font-serif text-[0.9375rem] font-medium leading-snug text-white">
          {row.headline}
        </h3>
        <p className="mt-2 font-sans text-[11px] leading-snug text-white">{row.sub}</p>
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
