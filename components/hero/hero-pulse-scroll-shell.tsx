'use client'

import { type ReactNode, useEffect, useRef, useState } from 'react'

type Props = { children: ReactNode; className?: string }

function supportsViewTimelineCss(): boolean {
  if (typeof window === 'undefined' || typeof CSS === 'undefined' || !CSS.supports) return false
  return CSS.supports('animation-timeline', 'view()')
}

/**
 * Hero-only dismissal: fades and translates as the user scrolls (JS thresholds ~40→400px).
 * pointer-events follow the same progression.
 *
 * Progressive enhancement: when `animation-timeline: view()` is supported, the inner
 * wrapper uses the view timeline on #community-hero (hero-pulse-scroll.css); otherwise
 * inline styles drive opacity / translate.
 */
export function HeroPulseScrollShell({ children, className = '' }: Props) {
  const [scrollY, setScrollY] = useState(0)
  const ticking = useRef(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [timelineCss, setTimelineCss] = useState(false)

  useEffect(() => {
    setTimelineCss(supportsViewTimelineCss())
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateRm = () => setReducedMotion(mq.matches)
    updateRm()
    mq.addEventListener('change', updateRm)
    return () => mq.removeEventListener('change', updateRm)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        ticking.current = false
        setScrollY(window.scrollY)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const startFade = reducedMotion ? 24 : 40
  const endFade = reducedMotion ? 220 : 400
  const p = Math.min(1, Math.max(0, (scrollY - startFade) / (endFade - startFade)))
  const opacity = 1 - p
  const translateY = reducedMotion ? 0 : p * 20

  const pointerNone = opacity < 0.02

  const transition = reducedMotion ? 'opacity 40ms ease-out' : 'opacity 50ms ease-out, transform 50ms ease-out'

  if (timelineCss) {
    return (
      <div className={className} style={{ pointerEvents: pointerNone ? 'none' : 'auto' }}>
        <div className="hero-pulse-shell-inner--timeline flex min-h-0 w-full min-w-0 flex-1 flex-col">{children}</div>
      </div>
    )
  }

  return (
    <div
      className={className}
      style={{
        opacity,
        transform: reducedMotion ? undefined : `translateY(${translateY}px)`,
        transition,
        pointerEvents: pointerNone ? 'none' : 'auto',
      }}
    >
      {children}
    </div>
  )
}
