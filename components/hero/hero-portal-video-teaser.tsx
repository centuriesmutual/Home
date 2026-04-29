'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = { className?: string; title?: string }

/** Unsplash stock still — reads as a generic video/player thumbnail (no private photos). */
const STOCK_PLAYER_POSTER =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=960&auto=format&fit=crop'

/** Portal-style preview (browser chrome + stock thumbnail). */
export function HeroPortalVideoTeaser({ className, title }: Props) {
  return (
    <div className={cn('mx-auto w-full max-w-lg', className)}>
      <div
        className="group overflow-hidden rounded-2xl border border-[#2a2a2a]/55 bg-[#121212] shadow-[0_10px_40px_rgba(0,0,0,0.22),inset_0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-black/30"
        role="region"
        aria-label="Video preview thumbnail"
      >
        <div className="flex h-7 items-center justify-center gap-1.5 border-b border-white/[0.07] bg-[#1c1c1c] px-3">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/95" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/95" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/95" aria-hidden />
        </div>
        <div className="relative aspect-video w-full bg-black">
          <Image
            src={STOCK_PLAYER_POSTER}
            alt=""
            fill
            className="object-cover object-[center_30%] transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 400px"
            priority={false}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25"
            aria-hidden
          />
        </div>
        <div className="flex h-7 items-center justify-center border-t border-white/[0.07] bg-[#1c1c1c] px-3" aria-hidden />
      </div>
      {title ? (
        <p className="mt-3 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0F3D2E] sm:text-xs">
          {title}
        </p>
      ) : null}
    </div>
  )
}
