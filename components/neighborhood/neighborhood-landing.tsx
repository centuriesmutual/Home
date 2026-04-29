import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { Fraunces } from 'next/font/google'
import { NeighborhoodExpandedBody } from '@/components/neighborhood/neighborhood-expanded-body'
import { TopoPattern } from '@/components/ui/topo-pattern'
import { GRAIN_BG } from '@/components/layout/site-header'

const editorial = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-neighborhood-editorial',
})

type Props = { query?: string }

export function NeighborhoodLanding({ query }: Props) {
  const q = query?.trim()

  return (
    <div className={`relative m-0 w-full overflow-x-hidden bg-[#FAFCFB] ${editorial.variable}`}>
      <section className="relative min-h-[min(88vh,820px)] w-full overflow-hidden bg-[#0F3D2E]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: GRAIN_BG, backgroundRepeat: 'repeat', backgroundSize: '220px 220px' }}
          aria-hidden
        />
        <TopoPattern className="pointer-events-none absolute bottom-8 left-0 h-48 w-[min(100%,400px)] text-[#C9A961] opacity-[0.1] lg:left-[6%]" />

        <div className="relative mx-auto grid min-h-[min(88vh,820px)] max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-center">
            <h1
              className="mb-6 max-w-xl text-3xl font-medium leading-[1.12] tracking-tight text-[#FAFCFB] md:text-4xl lg:text-[2.6rem]"
              style={{ fontFamily: 'var(--font-neighborhood-editorial), Fraunces, Georgia, serif' }}
            >
              Corridors, listings, and the search that starts at home
            </h1>
            <p className="max-w-lg font-sans text-[15px] leading-relaxed text-[#E8DFD6]/95">
              Explore rooms, amenities, and dates in one place — paired with the same forest-and-cream experience as the rest
              of Centuries Mutual.
            </p>
            {q ? (
              <p className="mt-6 rounded-xl border border-[#C9A961]/30 bg-[#0a1f18]/60 px-4 py-3 font-sans text-sm text-[#FAFCFB] backdrop-blur-sm">
                Showing context for{' '}
                <span className="font-semibold text-[#C9A961]">&ldquo;{q}&rdquo;</span> — full inventory filters connect under
                release planning.
              </p>
            ) : (
              <p className="mt-6 font-sans text-sm text-[#E8DFD6]/85">
                Start from the home search bar, or browse corridors as we expand coverage.
              </p>
            )}
          </div>

          <div className="flex min-h-0 flex-row items-stretch gap-4 sm:gap-6">
            <Link
              href="/"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-center rounded-full border border-[#FAFCFB]/35 bg-transparent px-4 py-3 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#FAFCFB] no-underline transition hover:bg-[#FAFCFB]/10 sm:px-5 sm:py-3.5"
            >
              Back to home search
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
            <div className="relative min-h-[220px] min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#C9A961]/25 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:min-h-[320px] md:min-h-[400px]">
              <Image
                src="/buffalo2.png"
                alt=""
                fill
                className="object-cover object-[center_35%]"
                sizes="(max-width: 767px) 55vw, 45vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(200deg,rgba(15,61,46,0.5)_0%,transparent_50%)]"
                aria-hidden
              />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur-md sm:left-6 sm:top-6">
                <MapPin className="h-3.5 w-3.5 text-[#C9A961]" aria-hidden />
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FAFCFB]/95">
                  Corridor map · coming inline
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NeighborhoodExpandedBody />
    </div>
  )
}
