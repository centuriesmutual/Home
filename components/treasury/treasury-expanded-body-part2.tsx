import Link from 'next/link'
import {
  ArrowPathIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  GiftIcon,
  HomeModernIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { CircleStackIcon } from '@heroicons/react/24/solid'
import { TreasuryFaqAccordion } from '@/components/treasury/treasury-faq'
import { Eyebrow, LuxuryCard, ProseBody, SectionTitle } from '@/components/treasury/treasury-luxury'
import { cn } from '@/lib/utils'

const serifCard = 'font-serif font-semibold text-[1.125rem] leading-snug text-[#14432A]'
const bodyXs = 'font-sans text-[0.9375rem] leading-relaxed text-[#3d4a41]'
const iconWrap = 'relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#14432A]/[0.08] text-[#14432A]'
const stepNum =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#C9A53E] bg-[#FAFCFB] font-serif text-sm font-semibold text-[#14432A]'

export function TreasuryExpandedBodyContinued() {
  return (
    <>
      {/* What Treasury does for you */}
      <section className="border-t border-[#E5E0D5]/80 bg-[#E8DFD6]/35 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <SectionTitle>What Treasury does for you.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                Icon: ShieldCheckIcon,
                title: 'Held deposits',
                body:
                  'Security deposits ride in segregated safeguards away from discretionary operating envelopes — statuses stay visible anytime members check in.',
              },
              {
                Icon: CalendarDaysIcon,
                title: 'Scheduled rent',
                body:
                  'Rent cadences reconcile automatically alongside agreements so landlords and renters stop chasing confirmations.',
              },
              {
                Icon: CircleStackIcon,
                title: 'Shared pools',
                body:
                  'Shared utilities or trip ledgers consolidate contributions neatly so everyone sees who paid what, when.',
              },
              {
                Icon: GiftIcon,
                title: 'Gifting',
                body:
                  'Member gifts inherit the same traceability envelope as rent — friendly movement without abandoning safeguards.',
              },
            ].map(({ Icon, title, body }) => (
              <LuxuryCard key={title}>
                <span className="pointer-events-none absolute right-5 top-5 h-1.5 w-1.5 rotate-45 bg-[#C9A53E]" aria-hidden />
                <div className={iconWrap}>
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className={cn(serifCard, 'text-[1.125rem]')}>{title}</h3>
                <p className={cn(bodyXs, 'mt-3 text-[15px]')}>{body}</p>
              </LuxuryCard>
            ))}
          </div>
        </div>
      </section>

      {/* How money moves */}
      <section className="border-t border-[#E5E0D5]/80 bg-[#FAFCFB] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <SectionTitle>How money moves.</SectionTitle>
          <div className="relative mt-14">
            <div className="hidden md:absolute md:left-[8%] md:right-[8%] md:top-12 md:block md:h-px md:bg-[#C9A53E]/40" aria-hidden />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-4">
              {[
                {
                  Icon: ShieldCheckIcon,
                  title: 'Authorize',
                  body: 'Every transfer begins with explicit member consent plus the governing agreement rules both parties already accepted.',
                },
                {
                  Icon: BanknotesIcon,
                  title: 'Hold',
                  body: 'Funds rest inside protected wallets surfaced clearly to landlords, tenants, and hosts simultaneously.',
                },
                {
                  Icon: ArrowPathIcon,
                  title: 'Settle',
                  body: 'On-demand schedules resolve on settlement rails quickly with transparent marginal network costs.',
                },
                {
                  Icon: DocumentTextIcon,
                  title: 'Reconcile',
                  body: 'Each transaction aligns with ledgers referenced in your agreement history — balances reconcile without ambiguity.',
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
                  <p className={cn(bodyXs, 'mt-3 text-center text-[15px] md:text-left')}>{body}</p>
                </LuxuryCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="border-t border-[#E5E0D5]/80 bg-[#E8DFD6]/35 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <SectionTitle>A statement you can actually read.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <ProseBody>
                Treasury statements prioritize plain language — descriptions read like captions you recognize, with detail available when you drill in for proof.
              </ProseBody>
            </div>
            <LuxuryCard>
              <div className="rounded-lg border border-[#E5E0D5]/70">
                <div className="bg-[#14432A] px-4 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FAFCFB]">
                  Statement · Apr 1–Apr 28
                </div>
                <ul className="divide-y divide-[#E5E0D5]/70">
                  {[
                    { Icon: HomeModernIcon, label: 'Scheduled rent · primary residence', amt: '-1,845.00' },
                    { Icon: CircleStackIcon, label: 'Shared utilities pool', amt: '-62.40' },
                    { Icon: GiftIcon, label: 'Refund issued · host reconciliation', amt: '85.00' },
                    { Icon: GiftIcon, label: 'Gift received · corridor welcome', amt: '50.00' },
                  ].map((row, i) => {
                    const RowIcon = row.Icon
                    return (
                    <li key={i} className="flex flex-wrap items-center gap-3 px-3 py-2.5 font-sans text-[13px]">
                      <RowIcon className="h-4 w-4 text-[#14432A]" />
                      <span className="min-w-0 flex-1 leading-snug text-[#3d4a41]">{row.label}</span>
                      <span className="font-mono text-[12px] text-[#14432A]">{row.amt}</span>
                    </li>
                    )
                  })}
                </ul>
                <div className="flex items-center justify-between border-t border-[#E5E0D5] bg-[#FAFCFB] px-4 py-3">
                  <span className="font-serif text-[1.125rem] text-[#14432A]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Period total (net)
                  </span>
                  <span className="font-mono font-semibold text-[#14432A]">−1,772.40</span>
                </div>
              </div>
            </LuxuryCard>
          </div>
        </div>
      </section>

      {/* Protections */}
      <section className="border-t border-[#E5E0D5]/80 bg-[#FAFCFB] py-20 md:py-28">
        <div className="mx-auto max-w-[1150px] px-6 lg:px-10">
          <SectionTitle>Built on protections members can see.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                k: 'Held separately',
                body:
                  'Member balances remain segregated rather than pooled for unrelated purposes — segregation is visible assurance, not backstage opacity.',
              },
              {
                k: 'Recorded permanently',
                body:
                  'Append-only ledgers underpin transaction history — entries cannot quietly rewrite themselves after the moment.',
              },
              {
                k: 'Resolved fairly',
                body:
                  'Structured remedies lean on exhaustive records produced inside Treasury so adjudication aligns with factual sequence.',
              },
            ].map((c) => (
              <LuxuryCard key={c.k} className="min-h-[280px]">
                <Eyebrow>Principle</Eyebrow>
                <svg className="mb-6 h-16 w-full text-[#C9A53E]" viewBox="0 0 200 52" aria-hidden>
                  <rect x="4" y="8" width="192" height="36" rx="6" stroke="currentColor" fill="#14432A08" opacity="0.9" strokeWidth="1" />
                  <circle cx="32" cy="26" r="8" stroke="currentColor" fill="none" />
                  <path d="M90 34h60" stroke="currentColor" strokeWidth="1" />
                </svg>
                <h3 className={serifCard}>{c.k}</h3>
                <p className={cn(bodyXs, 'mt-3 text-[15px]')}>{c.body}</p>
              </LuxuryCard>
            ))}
          </div>
        </div>
      </section>

      {/* Audience panels */}
      <section className="border-t border-[#E5E0D5]/80 bg-[#E8DFD6]/35 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <SectionTitle>Treasury for landlords, tenants, and hosts.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'For landlords',
                Icon: HomeModernIcon,
                body: 'Rent schedules, deposits, and settlements stay organized automatically — minimizing awkward collection cycles or unclear deposit segregation.',
              },
              {
                title: 'For tenants',
                Icon: ShieldCheckIcon,
                body: 'Pay on time knowing exactly where balances stand and reassurance about deposit custody alongside your messaging history.',
              },
              {
                title: 'For hosts',
                Icon: GiftIcon,
                body: 'Shared hospitality ledgers track contributions and reimbursements without losing track of who covered what.',
              },
            ].map(({ title, Icon, body }) => (
              <div key={title} className="rounded-2xl border border-[#E5E0D5] bg-[#14432A]/[0.04] p-8 shadow-sm">
                <Icon className="h-7 w-7 text-[#14432A]" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#14432A]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#3d4a41]">{body}</p>
                <Link
                  href="/help-desk"
                  className="group mt-6 inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-[#14432A] no-underline hover:text-[#C9A53E]"
                >
                  Reach the desk{' '}
                  <span aria-hidden className="inline-block translate-x-0 text-[#C9A53E] transition-transform duration-200 group-hover:translate-x-[3px]">
                    ›
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#E5E0D5]/80 bg-[#FAFCFB] py-20 md:py-28">
        <div className="mx-auto max-w-[820px] px-6 lg:px-8">
          <SectionTitle className="text-center">Common questions.</SectionTitle>
          <div className="mt-10">
            <TreasuryFaqAccordion />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
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
            Ready to put Treasury beside your lease or corridor?
          </h2>
          <p className="mt-4 max-w-[55ch] font-sans text-[15px] leading-[1.65] text-[#E8DFD6]/95">
            Open an account to connect agreements, messaging, and settlement in one platform experience.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b8943a] to-[#C9A53E] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-[#0f3321] no-underline shadow-lg transition hover:brightness-105"
            >
              Open an account
            </Link>
            <Link
              href="/help-desk"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#FAFCFB]/40 px-8 py-3.5 font-sans text-sm font-semibold text-[#FAFCFB] no-underline transition hover:border-[#C9A53E]"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
