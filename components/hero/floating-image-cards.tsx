'use client'

import { motion } from 'framer-motion'
import { cardFloat } from '@/lib/animations'

const pulseDot = (
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/80 opacity-75" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
  </span>
)

export function FloatingImageCards({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-10 lg:pointer-events-auto ${className}`}>
      {/* Live listings — dark glass for sky contrast */}
      <motion.div
        variants={cardFloat}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0 }}
        className="absolute left-8 top-8 w-56 rounded-xl border border-white/15 bg-black/40 p-4 shadow-lg backdrop-blur-md max-[420px]:left-5 max-[420px]:top-6 max-[420px]:w-[calc(100%-2.5rem)]"
      >
        <div className="mb-1 flex items-center gap-2">
          {pulseDot}
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/90">Live listings</span>
        </div>
        <p className="mt-1 font-sans text-base font-medium text-white">247 active listings</p>
        <p className="mt-0.5 font-sans text-xs text-white/70">across 12 Texas neighborhoods</p>
      </motion.div>

      {/* Sarah M. testimonial — anchored bottom-left on image */}
      <motion.div
        variants={cardFloat}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.22 }}
        className="absolute bottom-8 left-8 w-64 rounded-xl border border-[#C9A961]/30 bg-[#0F3D2E]/85 p-4 shadow-lg backdrop-blur-md max-[420px]:bottom-6 max-[420px]:left-5 max-[420px]:w-[calc(100%-2.5rem)]"
      >
        <div className="flex gap-3">
          <div
            aria-hidden
            className="flex h-8 min-h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C9A961] to-[#9B7F3F] text-sm font-semibold text-white shadow-sm ring-[3px] ring-[rgba(201,169,97,0.3)]"
          >
            S
          </div>
          <div className="min-w-0 flex-1">
            <blockquote className="font-serif text-sm italic leading-snug text-white">
              &ldquo;Found our place in Plano in three days.&rdquo;
            </blockquote>
            <p className="mt-2 text-[11px] font-medium text-[#C9A961]">— Sarah M., Member since 2024</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
