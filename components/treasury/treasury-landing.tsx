import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Fraunces } from 'next/font/google'
import { TreasuryExpandedBody } from '@/components/treasury/treasury-expanded-body'
import { TopoPattern } from '@/components/ui/topo-pattern'
import { GRAIN_BG } from '@/components/layout/site-header'

const editorial = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-treasury-editorial',
})

const gold = '#C9A961'

export function TreasuryLanding() {
  return (
    <div className={`relative m-0 w-full overflow-x-hidden bg-[#FAFCFB] ${editorial.variable}`}>
      {/* Full-bleed hero — asymmetric grid */}
      <section className="relative min-h-[min(92vh,880px)] w-full overflow-hidden bg-[#0F3D2E]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: GRAIN_BG, backgroundRepeat: 'repeat', backgroundSize: '220px 220px' }}
          aria-hidden
        />
        <TopoPattern className="pointer-events-none absolute -right-8 top-8 h-56 w-[min(100%,420px)] text-[#C9A961] opacity-[0.12] lg:right-[8%] lg:top-16" />

        <div className="relative mx-auto grid min-h-[min(92vh,880px)] max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-12 lg:gap-4 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: gold }}>
              Treasury
            </p>
            <h1
              className="mb-6 max-w-xl text-3xl font-medium leading-[1.12] tracking-tight text-[#FAFCFB] md:text-4xl lg:text-[2.75rem]"
              style={{ fontFamily: 'var(--font-treasury-editorial), Fraunces, Georgia, serif' }}
            >
              Payments, escrow, and how funds move on Centuries Mutual
            </h1>
            <p className="max-w-md font-sans text-[15px] leading-relaxed text-[#E8DFD6]/95">
              Coordinate rent, deposits, utilities, and peer transfers with flows that respect leases, disputes, and how
              members already message one another.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/pay"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAFCFB] px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#0F3D2E] no-underline shadow-lg transition hover:bg-[#E8DFD6]"
              >
                Open Pay
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[#C9A961]/25 shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:col-span-6 lg:col-start-7 lg:min-h-[420px]">
            <Image
              src="/buffalo2.png"
              alt=""
              fill
              className="object-cover object-[center_38%]"
              sizes="(max-width: 1023px) 100vw, 50vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(15,61,46,0.35)_0%,transparent_45%,rgba(20,67,42,0.25)_100%)]"
              aria-hidden
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-[#0a1f18]/75 px-4 py-3 backdrop-blur-sm">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A961]">Flow of funds</p>
              <p className="mt-1 font-sans text-sm leading-snug text-[#FAFCFB]/90">
                Routes align with product configuration in your jurisdiction — milestones, escrow, and scheduled release.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TreasuryExpandedBody />
    </div>
  )
}
