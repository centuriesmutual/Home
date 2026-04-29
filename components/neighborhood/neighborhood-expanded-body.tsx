import Link from 'next/link'
import {
  ArrowDownTrayIcon,
  BoltIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
  DocumentTextIcon,
  GiftIcon,
  HeartIcon,
  HomeIcon,
  KeyIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  NewspaperIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { Eyebrow, LuxuryCard, ProseBody, SectionTitle } from '@/components/treasury/treasury-luxury'
import { cn } from '@/lib/utils'

const serifCard = 'font-serif font-semibold text-[1.125rem] leading-snug text-[#14432A]'
const bodySm = 'font-sans text-[0.9375rem] leading-[1.65] text-[#3d4a41]'
const iconWrap = 'relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#14432A]/[0.08] text-[#14432A]'
const stepNum =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#C9A53E] bg-[#FAFCFB] font-serif text-sm font-semibold text-[#14432A]'

/** Body sections below Neighborhood hero — aligns with Treasury luxury system */
export function NeighborhoodExpandedBody() {
  return (
    <>
      <section className="border-t border-[#E5E0D5]/90 bg-[#FAFCFB] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <Eyebrow>Neighborhood</Eyebrow>
          <SectionTitle>A neighborhood is more than a map.</SectionTitle>
          <ProseBody className="mt-6">
            Neighborhood is the part of Centuries Mutual where you find homes, find people you can live beside, and find the quiet
            rhythms — coffee runs, stoop greetings, hallway hellos — that make a corridor feel worth coming back to. It is framed
            as real place, not a feed.
          </ProseBody>
          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="max-w-[65ch] font-sans text-[15px] leading-[1.65] text-[#3d4a41]">
                Strong neighborhoods depend on everyday trust among people who happen to share a block — small favors, respectful
                noise, candor when something is off. Centuries Mutual is structured to support those human acts of care instead of
                trying to automate them away.
              </p>
            </div>
            <LuxuryCard className="p-0 overflow-hidden">
              <div className="relative aspect-[5/4] bg-[#14432A]/[0.06]">
                <svg className="h-full w-full" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <defs>
                    <linearGradient id="nb-glass" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FAFCFB" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#FAFCFB" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="260" fill="#14432A" fillOpacity={0.07} />
                  {Array.from({ length: 96 }).map((_, i) => {
                    const r = Math.floor(i / 12)
                    const c = i % 12
                    return (
                      <rect
                        key={`g-${r}-${c}`}
                        x={16 + c * 30}
                        y={20 + r * 26}
                        width={22}
                        height={16}
                        rx={1}
                        fill="#C9A53E"
                        fillOpacity={0.12}
                      />
                    )
                  })}
                  <path
                    d="M 60 200 Q 140 170 220 175 T 360 155"
                    fill="none"
                    stroke="#C9A53E"
                    strokeOpacity={0.45}
                    strokeWidth={1.5}
                  />
                  {[
                    { x: 100, y: 130 },
                    { x: 210, y: 115 },
                    { x: 300, y: 95 },
                  ].map((b, i) => (
                    <g key={i}>
                      <rect
                        x={b.x - 26}
                        y={b.y - 22}
                        width={52}
                        height={52}
                        rx={8}
                        fill="url(#nb-glass)"
                        stroke="#C9A53E"
                        strokeOpacity={0.35}
                        strokeWidth={1}
                      />
                    </g>
                  ))}
                  <g transform="translate(268,148)">
                    <circle r="24" fill="#14432A" fillOpacity={0.2} stroke="#C9A53E" strokeOpacity={0.4} strokeWidth={1}>
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <path
                      d="M0,-10 L10,6 L6,8 L10,22 L0,16 L-10,22 L-6,8 Z"
                      fill="#C9A53E"
                      opacity={0.95}
                      transform="translate(0,-2)"
                    >
                      <animate attributeName="opacity" values="0.65;1;0.65" dur="2s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <text x="274" y="195" fill="#14432A" fontSize={10} fontFamily="system-ui,sans-serif">
                    Your home
                  </text>
                </svg>
              </div>
            </LuxuryCard>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#E8DFD6]/35 py-20 md:py-28">
        <div className="mx-auto max-w-[1150px] px-6 lg:px-10">
          <SectionTitle>What you&apos;ll find in your Neighborhood.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                Icon: HomeIcon,
                title: 'Listings nearby',
                body:
                  'See homes open in the corridors you choose — framed with clarity on terms, timeline, and what life there actually asks of you.',
              },
              {
                Icon: UserGroupIcon,
                title: "People you'd actually live with",
                body:
                  'Patterns and preferences steer who surfaces for you — not just whoever tapped apply first yesterday afternoon.',
              },
              {
                Icon: NewspaperIcon,
                title: 'Local Newspaper',
                body:
                  'A steady, human-scale feed about the corridor — notes and news selected to be useful when you decide where home should be.',
              },
              {
                Icon: CheckBadgeIcon,
                title: 'Shared standards',
                body:
                  'Homes and hosts meet the same baseline of verification so you compare options on substance, not guesswork.',
              },
            ].map(({ Icon, title, body }) => (
              <LuxuryCard key={title}>
                <span className="pointer-events-none absolute right-5 top-5 h-1.5 w-1.5 rotate-45 bg-[#C9A53E]" aria-hidden />
                <div className={iconWrap}>
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className={cn(serifCard)}>{title}</h3>
                <p className={cn(bodySm, 'mt-3')}>{body}</p>
              </LuxuryCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#FAFCFB] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <SectionTitle>How a Centuries Mutual neighborhood comes together.</SectionTitle>
          <div className="relative mt-14">
            <div className="hidden md:absolute md:left-[8%] md:right-[8%] md:top-12 md:block md:h-px md:bg-[#C9A53E]/40" aria-hidden />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-4">
              {[
                {
                  Icon: ShieldCheckIcon,
                  title: 'Verify',
                  body: 'You confirm identity and accountability practices align with how you already show up — no anonymous corners.',
                },
                {
                  Icon: UserGroupIcon,
                  title: 'Match',
                  body: 'You discover homes and people whose routines honestly fit yours before anyone signs anything.',
                },
                {
                  Icon: KeyIcon,
                  title: 'Move in',
                  body: 'Agreements settle into the record, deposits sit in Treasury, and possession changes without loose ends.',
                },
                {
                  Icon: HeartIcon,
                  title: 'Belong',
                  body:
                    'The small rituals and shared norms that define a corridor keep compounding — the record keeps pace quietly behind them.',
                },
              ].map(({ Icon, title, body }, idx) => (
                <LuxuryCard key={title} className="relative pt-8 md:pt-10">
                  <div className="absolute left-1/2 top-0 flex -translate-x-1/2 md:left-12 md:translate-x-0">
                    <span className={stepNum}>{idx + 1}</span>
                  </div>
                  <div className={cn(iconWrap, 'mx-auto md:mx-0')}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className={cn(serifCard, 'text-center md:text-left')}>{title}</h3>
                  <p className={cn(bodySm, 'mt-3 text-center text-[15px] md:text-left')}>{body}</p>
                </LuxuryCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#E8DFD6]/35 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle className="mb-8">Records that hold up.</SectionTitle>
              <ProseBody>
                Every consequential moment across a Neighborhood — a viewing, an application decision, verification, signatures,
                Treasury movements, decisive messages — rests in structured, searchable history you can open yourself.
              </ProseBody>
              <ProseBody className="mt-6">
                That is how later questions settle without devolving into &ldquo;I said, you said.&rdquo; The record preserves what happened,
                visibly and fairly.
              </ProseBody>
            </div>
            <LuxuryCard>
              <div className="relative pl-8">
                {[
                  {
                    Icon: MagnifyingGlassIcon,
                    headline: 'Application reviewed',
                    date: 'Apr 03 · 10:41',
                    detail: 'Profile and references aligned before next step.',
                  },
                  {
                    Icon: DocumentTextIcon,
                    headline: 'Lease signed',
                    date: 'Apr 08 · 15:06',
                    detail: (
                      <>
                        Fully bound signatures.{' '}
                        <svg className="inline h-5 w-5 align-middle text-[#C9A53E]" viewBox="0 0 28 28" aria-hidden>
                          <circle cx="14" cy="14" r="11" stroke="currentColor" fill="none" />
                          <text x="14" y="17" textAnchor="middle" fill="currentColor" fontSize={9}>
                            ✓
                          </text>
                        </svg>
                      </>
                    ),
                  },
                  {
                    Icon: GiftIcon,
                    headline: 'Deposit received',
                    date: 'Apr 09 · 08:52',
                    detail: (
                      <>
                        Held in Treasury with linked agreement.{' '}
                        <span className="rounded bg-[#14432A]/10 px-1.5 font-mono text-[10px] text-[#14432A]">TX · confirmed</span>
                      </>
                    ),
                  },
                  {
                    Icon: CheckBadgeIcon,
                    headline: 'Move-in confirmed',
                    date: 'Apr 14 · 12:00',
                    detail: (
                      <span className="inline-flex items-center gap-1 text-[#14432A]">
                        Completed <span className="text-[#C9A53E]">✓</span>
                      </span>
                    ),
                  },
                ].map((row, idx) => {
                  const Icon = row.Icon
                  const isLast = idx === 3
                  return (
                    <div key={row.headline} className={cn(!isLast ? 'relative pb-8' : 'pb-0')}>
                      {!isLast && (
                        <div
                          className="absolute bottom-2 left-[7px] top-9 w-px bg-gradient-to-b from-[#C9A53E]/65 to-[#C9A53E]/25"
                          aria-hidden
                        />
                      )}
                      <div className="absolute left-[-4px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#C9A53E]/60 bg-[#FAFCFB]" />
                      <div className="flex gap-3">
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#14432A]" aria-hidden />
                        <div>
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <span className="font-serif font-semibold text-[#14432A]">{row.headline}</span>
                            <span className="font-mono text-[11px] text-[#6B6B66]">{row.date}</span>
                          </div>
                          <p className="mt-1 font-sans text-[0.8125rem] leading-relaxed text-[#3d4a41]">{row.detail}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="mt-8 border-t border-[#E5E0D5]/80 pt-4 text-[0.8125rem] leading-relaxed text-[#6B6B66]">
                Members can request a full export of their record at any time.
              </p>
            </LuxuryCard>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#FAFCFB] py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <SectionTitle>Why this kind of record matters.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                Icon: MagnifyingGlassIcon,
                title: 'Searchable in seconds',
                body:
                  'Structured facts mean finding the hinge moment you care about instantly — instead of excavating chats and screenshots.',
              },
              {
                Icon: LinkIcon,
                title: 'Connected, not scattered',
                body:
                  'Events thread together logically: deposits know their lease lines, replies know which inquiry they settled.',
              },
              {
                Icon: ArrowDownTrayIcon,
                title: 'Yours to keep',
                body: 'Exports land in formats you control — archives for yourself or evidence another process genuinely needs.',
              },
            ].map(({ Icon, title, body }) => (
              <LuxuryCard key={title}>
                <div className={iconWrap}>
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className={serifCard}>{title}</h3>
                <p className={cn(bodySm, 'mt-3')}>{body}</p>
              </LuxuryCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#E8DFD6]/35 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle className="mb-8">Agreements that mean what they say.</SectionTitle>
              <ProseBody>
                Leases, addenda, and structured agreements assemble from deliberate plain-language patterns, signed digitally with binding effect, archived beside the broader member record — not orphaned in stray folders.
              </ProseBody>
              <ProseBody className="mt-6">
                Agreements stay alive alongside reality: reminders know due dates automatically, deposit returns reference conditions already written, milestones completed here generate the next warranted step automatically.
              </ProseBody>
            </div>
            <div className="space-y-4">
              <LuxuryCard className="p-0 overflow-hidden">
                <div className="flex items-center justify-between bg-[#14432A] px-4 py-3 pr-14">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FAFCFB]/95">Lease Agreement</span>
                  <svg className="-mr-8 h-11 w-11 text-[#C9A53E]" viewBox="0 0 40 40" aria-hidden>
                    <circle cx="20" cy="20" r="16" stroke="currentColor" fill="none" strokeWidth={1} opacity={0.6} />
                    <text x={20} y={24} textAnchor="middle" fill="currentColor" fontSize={12}>
                      ✓
                    </text>
                  </svg>
                </div>
                <ul className="divide-y divide-[#E5E0D5]/70 bg-[#FAFCFB] px-5 py-2 font-sans text-[13px] text-[#3d4a41]">
                  <li className="flex justify-between gap-4 py-2.5">
                    <span className="text-[#6B6B66]">Parties</span>
                    <span>Member · Property holder</span>
                  </li>
                  <li className="flex justify-between gap-4 py-2.5">
                    <span className="text-[#6B6B66]">Term</span>
                    <span className="font-mono text-xs text-[#242926]">12 months · renewing</span>
                  </li>
                  <li className="flex justify-between gap-4 py-2.5">
                    <span className="text-[#6B6B66]">Monthly rent</span>
                    <span className="font-mono text-[#14432A]">···</span>
                  </li>
                  <li className="flex justify-between gap-4 py-2.5">
                    <span className="text-[#6B6B66]">Deposit</span>
                    <span className="font-mono text-[#242926]">Held · Treasury</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 py-2.5">
                    <span className="text-[#6B6B66]">Status</span>
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#C9A53E] shadow-[0_0_10px_rgba(201,169,62,0.7)]" />
                      <span className="font-medium text-[#14432A]">Active</span>
                    </span>
                  </li>
                </ul>
              </LuxuryCard>
              <div className="flex flex-wrap justify-center gap-6 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#14432A]">
                {['Signed', 'Stored', 'Live'].map((label) => (
                  <span key={label} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A53E]" aria-hidden /> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#FAFCFB] py-20 md:py-28">
        <div className="mx-auto max-w-[1150px] px-6 lg:px-10">
          <SectionTitle>What a live agreement does for you.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                Icon: CalendarDaysIcon,
                title: "Knows what's due",
                body:
                  'Rent cadence, deposit conditions, recurring obligations tracked — fewer calendar surprises drifting back as conflict.',
              },
              {
                Icon: BoltIcon,
                title: 'Triggers the right action',
                body: 'When finances or filings must advance, choreography happens without someone manually re-reading every clause.',
              },
              {
                Icon: DocumentTextIcon,
                title: 'Records every step',
                body: 'Each consequential action cites the controlling agreement — timelines stay explainable.',
              },
              {
                Icon: ScaleIcon,
                title: 'Resolves disputes with the receipts',
                body:
                  'Formal resolution rests on impartial sequence data — anchored to what unfolded, visible to everyone implicated.',
              },
            ].map(({ Icon, title, body }) => (
              <LuxuryCard key={title}>
                <span className="pointer-events-none absolute right-5 top-5 h-1.5 w-1.5 rotate-45 bg-[#C9A53E]" aria-hidden />
                <div className={iconWrap}>
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className={cn(serifCard)}>{title}</h3>
                <p className={cn(bodySm, 'mt-3')}>{body}</p>
              </LuxuryCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#E8DFD6]/35 py-20 md:py-28">
        <div className="mx-auto max-w-[1150px] px-6 lg:px-10">
          <SectionTitle>Built around real life.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: 'For a long-term tenant',
                body:
                  'You meet place and household with compatible cadence — agreements scaffold themselves so daily life can occupy center stage.',
                svg: (
                  <svg viewBox="0 0 140 140" className="h-full w-full text-[#C9A53E]" aria-hidden>
                    <rect x="12" y="60" width="116" height="60" rx="8" stroke="currentColor" fill="#14432A12" opacity={0.9} strokeWidth={1} />
                    <path d="M45 58V35h52v23" stroke="currentColor" fill="none" />
                    <rect x={58} y={78} width="26" height="32" rx="2" stroke="currentColor" fill="#FAFCFBAA" opacity={0.8} strokeWidth={1} />
                  </svg>
                ),
              },
              {
                title: 'For a landlord',
                body:
                  'Verified applicants arrive with narrative context; leases articulate plainly; Treasury handles deposits cleanly alongside rent timelines.',
                svg: (
                  <svg viewBox="0 0 140 140" className="h-full w-full text-[#C9A53E]" aria-hidden>
                    <path d="M20 105h100L70 38z" fill="#14432A18" stroke="currentColor" strokeWidth={1} />
                    <rect x={44} y={78} width="52" height="36" rx="4" stroke="currentColor" fill="#FAFCFBAA" opacity={0.85} strokeWidth={1} />
                  </svg>
                ),
              },
              {
                title: 'For a host',
                body:
                  'Shared ledgers illuminate who covered what — agreements keep micro-frictions from calcifying silently.',
                svg: (
                  <svg viewBox="0 0 140 140" className="h-full w-full text-[#C9A53E]" aria-hidden>
                    <circle cx="70" cy="70" r="52" stroke="currentColor" fill="#14432A10" opacity={0.9} strokeWidth={1} />
                    <circle cx="50" cy="70" r="18" stroke="currentColor" fill="#FAFCFBAA" strokeWidth={1} />
                    <circle cx="90" cy="70" r="18" stroke="currentColor" fill="#FAFCFBAA" strokeWidth={1} />
                  </svg>
                ),
              },
              {
                title: 'For someone new to a city',
                body:
                  'Verification gives you footing where relationships have not formed yet — you step into corridors already upheld by communal standards.',
                svg: (
                  <svg viewBox="0 0 140 140" className="h-full w-full text-[#C9A53E]" aria-hidden>
                    <circle cx={70} cy={82} r="36" stroke="currentColor" fill="#14432A14" strokeWidth={1} />
                    <path d="M70 32v14M55 62h30" stroke="currentColor" strokeWidth={1} />
                    <path d="M40 118c10-16 50-16 60 0" stroke="currentColor" fill="none" opacity={0.7} />
                  </svg>
                ),
              },
            ].map((panel) => (
              <LuxuryCard key={panel.title} className="grid grid-cols-1 gap-6 p-0 sm:grid-cols-[minmax(0,140px)_1fr] sm:p-0">
                <div className="flex min-h-[140px] items-center justify-center bg-[#14432A]/[0.06] p-6">{panel.svg}</div>
                <div className="p-6 sm:py-8">
                  <h3 className="font-serif text-[1.25rem] font-semibold text-[#14432A]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {panel.title}
                  </h3>
                  <p className="mt-3 font-sans text-[15px] leading-[1.65] text-[#3d4a41]">{panel.body}</p>
                </div>
              </LuxuryCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/90 bg-[#14432A] py-24">
        <div className="relative mx-auto max-w-[900px] overflow-hidden rounded-3xl border border-[#C9A53E]/30 bg-[linear-gradient(140deg,#0f3321_0%,#14432A_52%,#0f3d28_100%)] px-8 py-14 md:px-16">
          <div className="pointer-events-none absolute right-10 top-8 flex gap-1 opacity-65" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span key={i} className="inline-block h-4 w-4 rotate-45 border border-[#C9A53E]/60" />
            ))}
          </div>
          <h2
            className="max-w-lg font-serif text-[clamp(1.75rem,3.5vw,2.35rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-[#FAFCFB]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Find your Neighborhood
          </h2>
          <p className="mt-4 max-w-[55ch] font-sans text-[15px] leading-[1.65] text-[#E8DFD6]/95">
            Browse what is available and meet people already held to the same standards you expect at home.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/neighborhood"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b8943a] to-[#C9A53E] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-[#0f3321] no-underline shadow-lg transition hover:brightness-105"
            >
              Browse listings
            </Link>
            <Link
              href="/network"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#FAFCFB]/40 px-8 py-3.5 font-sans text-sm font-semibold text-[#FAFCFB] no-underline transition hover:border-[#C9A53E]"
            >
              Find roommates
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
