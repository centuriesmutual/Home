'use client'

import Link from 'next/link'
import { UsersRound, Home, MapPin } from 'lucide-react'

const items = [
  { href: '/rooms', label: 'Listings', Icon: Home },
  { href: '/search?q=Plano', label: 'Neighborhood', Icon: MapPin },
  { href: '/search?q=roommates', label: 'Roommates', Icon: UsersRound },
] as const

export function QuickActions({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-nowrap items-center gap-2 overflow-x-auto sm:gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-[#0F3D2E]/22 bg-[#FAF7F0]/95 px-4 font-sans text-sm font-medium text-[#0F3D2E] no-underline shadow-sm backdrop-blur-sm transition hover:border-[#0F3D2E]/35 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]/55 active:bg-[#FAF7F0]"
        >
          <Icon className="h-4 w-4 shrink-0 text-[#0F3D2E]" strokeWidth={1.75} aria-hidden />
          {label}
        </Link>
      ))}
    </div>
  )
}
