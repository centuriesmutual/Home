'use client'

import Link from 'next/link'
import { BookOpen, Home, MapPin } from 'lucide-react'

const items = [
  { href: '/rooms', label: 'Browse Listings', Icon: Home },
  { href: '/search?q=Plano', label: 'By Neighborhood', Icon: MapPin },
  { href: '/newspaper', label: 'Read the Journal', Icon: BookOpen },
] as const

export function QuickActions({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-[rgba(250,247,240,0.3)] px-4 font-sans text-sm font-medium text-[#FAF7F0] no-underline transition hover:border-[rgba(250,247,240,0.45)] hover:bg-[rgba(250,247,240,0.1)] active:bg-[rgba(250,247,240,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]/50"
        >
          <Icon className="h-4 w-4 shrink-0 opacity-90" strokeWidth={1.75} aria-hidden />
          {label}
        </Link>
      ))}
    </div>
  )
}
