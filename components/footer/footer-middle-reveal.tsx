'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

const MID = '#14432a'

type Props = { children: ReactNode }

/** Intersection-triggered stagger for brand + four nav columns; respects prefers-reduced-motion. */
export function FooterMiddleReveal({ children }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const root = ref.current
    if (!root) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.6 },
    )
    io.observe(root)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="cm-footer-mid w-full"
      style={{ backgroundColor: MID }}
      data-cm-visible={visible ? 'true' : 'false'}
    >
      {children}
    </section>
  )
}
