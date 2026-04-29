import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { Fraunces } from 'next/font/google'
import { TopoPattern } from '@/components/ui/topo-pattern'
import { GRAIN_BG } from '@/components/layout/site-header'

const editorial = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-neighborhood-editorial',
})

const gold = '#C9A961'

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

        <div className="relative mx-auto grid min-h-[min(88vh,820px)] max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:py-20">
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-6 lg:col-start-1">
            <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: gold }}>
              Neighborhood
            </p>
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
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[#FAFCFB]/35 bg-transparent px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#FAFCFB] no-underline transition hover:bg-[#FAFCFB]/10"
              >
                Back to home search
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="relative order-1 min-h-[260px] overflow-hidden rounded-2xl border border-[#C9A961]/25 shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:order-2 lg:col-span-5 lg:col-start-8 lg:min-h-[400px]">
            <Image
              src="/buffalo2.png"
              alt=""
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1023px) 100vw, 45vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(200deg,rgba(15,61,46,0.5)_0%,transparent_50%)]"
              aria-hidden
            />
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5 text-[#C9A961]" aria-hidden />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FAFCFB]/95">
                Corridor map · coming inline
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-[#E5E0D5]/90 bg-[#E8DFD6] py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h2
                className="text-2xl font-medium tracking-tight text-[#0F3D2E] md:text-3xl"
                style={{ fontFamily: 'var(--font-neighborhood-editorial), Fraunces, Georgia, serif' }}
              >
                Grid-first layout for how people actually search
              </h2>
              <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-[#3d4a41]">
                Full-width sections use CSS grid so copy, illustrations, and callouts breathe on desktop and stack cleanly on
                small screens — same structural discipline as the home hero.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
              <div className="rounded-2xl border border-[#E5E0D5] bg-[#FAFCFB] p-6 shadow-sm">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A961]">Listings</p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#3d4a41]">Room and unit-level detail with media and dates.</p>
              </div>
              <div className="rounded-2xl border border-[#E5E0D5] bg-[#FAFCFB] p-6 shadow-sm sm:translate-y-4">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A961]">Amenities</p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#3d4a41]">Corridor rules, shared spaces, and filters that match how members talk about home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5] bg-[#FAFCFB] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 md:grid-cols-12 md:gap-12 lg:px-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#E5E0D5] md:col-span-7">
            <Image
              src="/buffalo2.png"
              alt=""
              fill
              className="object-cover object-[center_50%]"
              sizes="(max-width: 767px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,61,46,0.45)_0%,transparent_55%)]" aria-hidden />
          </div>
          <div className="flex flex-col justify-center md:col-span-5">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C9A961]">Illustrated sections</p>
            <h3
              className="mt-2 text-xl font-medium text-[#0F3D2E] md:text-2xl"
              style={{ fontFamily: 'var(--font-neighborhood-editorial), Fraunces, Georgia, serif' }}
            >
              Photography and topo lines, not stock clutter
            </h3>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-[#3d4a41]">
              We carry the same bison photography and light line-work used on the homepage so Neighborhood feels like a chapter
              of one story — not a detached directory.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
