'use client'

import { useCallback } from 'react'

export function FooterBackToTop() {
  const scrollTop = useCallback(() => {
    const prefersReduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
  }, [])

  return (
    <button
      type="button"
      onClick={scrollTop}
      className="group absolute right-4 top-[-3rem] z-[2] flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-transparent transition-[background-color,box-shadow,color] duration-150 ease-out hover:bg-gradient-to-br hover:from-[#C9A53E] hover:to-[#E0B85A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A53E]/40 md:right-8 lg:right-14"
      aria-label="Back to top"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C9A53E] group-hover:text-white" aria-hidden>
        <polyline points="6 14 12 8 18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
