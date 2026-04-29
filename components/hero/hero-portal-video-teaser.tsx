'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Short CC0 sample suitable for hover previews (no external branding in UI). */
const PREVIEW_SRC = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

type Props = { className?: string; title?: string }

export function HeroPortalVideoTeaser({ className, title }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const fn = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  const play = useCallback(() => {
    if (reducedMotion) return
    const v = videoRef.current
    if (!v) return
    void v.play().catch(() => {})
  }, [reducedMotion])

  const reset = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    try {
      v.currentTime = 0
    } catch {
      /* ignore */
    }
  }, [])

  const toggleKeyboardPlay = useCallback(() => {
    if (reducedMotion) return
    const v = videoRef.current
    if (!v) return
    if (v.paused) void v.play().catch(() => {})
    else reset()
  }, [reducedMotion, reset])

  return (
    <div className={cn('mx-auto w-full max-w-lg', className)}>
      <div
        className="overflow-hidden rounded-2xl border border-[#2a2a2a]/55 bg-[#121212] shadow-[0_10px_40px_rgba(0,0,0,0.22),inset_0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-black/30"
        onMouseEnter={play}
        onMouseLeave={reset}
        role="region"
        aria-label="Corridor video preview"
      >
        <div className="flex h-7 items-center justify-center gap-1.5 border-b border-white/[0.07] bg-[#1c1c1c] px-3">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/95" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/95" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/95" aria-hidden />
        </div>
        <div className="relative aspect-video w-full bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={PREVIEW_SRC} type="video/mp4" />
          </video>
          <div
            className={cn(
              'pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/15 to-black/35 transition-opacity duration-300',
              playing && !reducedMotion ? 'opacity-0' : 'opacity-100',
            )}
            aria-hidden
          >
            <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-white/95 text-[#0f0f0f] shadow-[0_6px_24px_rgba(0,0,0,0.35)] ring-2 ring-white/40">
              <Play className="ml-0.5 h-8 w-8 fill-current" strokeWidth={0} aria-hidden />
            </span>
          </div>
          <button
            type="button"
            onClick={toggleKeyboardPlay}
            disabled={reducedMotion}
            className="absolute inset-0 z-[1] cursor-pointer border-0 bg-transparent p-0 md:pointer-events-none md:cursor-default"
            aria-label={
              reducedMotion
                ? 'Preview disabled when reduced motion is on'
                : playing
                  ? 'Pause video preview'
                  : 'Play video preview'
            }
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
