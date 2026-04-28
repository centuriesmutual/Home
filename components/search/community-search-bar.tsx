'use client'

import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  onOpen: () => void
  /** Optional class on outer button */
  className?: string
}

export function CommunitySearchBar({ onOpen, className }: Props) {
  const [kbdHint, setKbdHint] = useState('⌘ K')

  useEffect(() => {
    const isApple = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform ?? '')
    setKbdHint(isApple ? '⌘K' : 'Ctrl K')
  }, [])

  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        'group flex h-14 w-full cursor-pointer items-center gap-3 rounded-full border border-[#E5E0D5] bg-cream px-4 shadow-sm outline-none transition hover:-translate-y-px hover:border-forest hover:shadow-md focus-visible:border-forest focus-visible:ring-2 focus-visible:ring-forest/25',
        className,
      )}
    >
      <Search className="h-5 w-5 shrink-0 text-muted" strokeWidth={2} aria-hidden />
      <span className="min-w-0 flex-1 text-left font-sans text-sm text-muted md:text-[15px]">
        Search rooms, neighborhoods, or dates…
      </span>
      <kbd
        className="pointer-events-none hidden shrink-0 select-none rounded-full border border-warm-border bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-muted/75 sm:inline-block"
        aria-hidden
      >
        {kbdHint}
      </kbd>
    </button>
  )
}
