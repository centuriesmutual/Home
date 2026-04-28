'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cardFloat } from '@/lib/animations'

const pulseDot = (
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/70 opacity-75" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
  </span>
)

export function FloatingImageCards({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-10 lg:pointer-events-auto ${className}`}>
      <motion.div
        variants={cardFloat}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0 }}
        className="absolute left-4 top-[10%] w-[190px] max-w-[calc(100%-2rem)] rounded-xl border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-md sm:left-[8%]"
      >
        <div className="mb-1 flex items-center gap-2">
          {pulseDot}
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#C9A961]">Live listings</span>
        </div>
        <div className="mb-0.5 flex items-center gap-2">
          <span className="font-sans text-xs font-semibold tracking-wide text-[#FAF7F0]">247 active listings</span>
        </div>
        <p className="font-sans text-[11px] leading-snug text-white/65">across 12 Texas neighborhoods</p>
      </motion.div>

      <motion.div
        variants={cardFloat}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.15 }}
        className="absolute right-[-4%] top-[42%] z-20 hidden w-[260px] max-w-[calc(100vw-40%)] rounded-xl border border-[#E5E0D5] bg-[#FAF7F0] py-4 pl-[1.125rem] pr-4 shadow-2xl lg:right-[-6%] lg:block xl:right-[-10%]"
        style={{ borderLeftWidth: '4px', borderLeftColor: '#0F3D2E', borderRightColor: '#E5E0D5' }}
      >
        <h3 className="mb-1.5 font-serif text-[0.9375rem] font-medium leading-snug text-[#0f1a13]">
          The Centuries Promise
        </h3>
        <p className="mb-3 font-sans text-sm leading-relaxed text-[#6B6B66]">
          Every listing verified by a licensed broker. Every transaction backed by member trust.
        </p>
        <div className="flex justify-end text-[#0F3D2E]">
          <ArrowRight className="h-4 w-4" aria-hidden strokeWidth={2} />
        </div>
      </motion.div>

      <motion.div
        variants={cardFloat}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-[8%] left-4 max-w-[min(240px,calc(100%-2rem))] rounded-xl border border-white/10 bg-[#0F3D2E]/75 p-3 shadow-lg backdrop-blur-md sm:left-[6%]"
      >
        <div className="mb-2 flex items-center gap-2">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-[11px] font-semibold ring-2 ring-[#C9A961]"
            aria-hidden
          >
            S
          </div>
          <blockquote className="flex-1 font-serif text-[13px] italic leading-snug text-[#FAF7F0]">
            &ldquo;Found our place in Plano in three days.&rdquo;
          </blockquote>
        </div>
        <p className="pl-10 font-sans text-[10px] tracking-wide text-[#C9A961]">
          — Sarah M., Member since 2024
        </p>
      </motion.div>
    </div>
  )
}
