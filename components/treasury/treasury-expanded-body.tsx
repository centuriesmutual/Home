import {
  BoltIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { Eyebrow, LuxuryCard, ProseBody, SectionTitle } from '@/components/treasury/treasury-luxury'
import { TreasuryCharterIllustration } from '@/components/treasury/treasury-charter-illustration'
import { TreasuryExpandedBodyContinued } from '@/components/treasury/treasury-expanded-body-part2'
import { TreasurySettlementViz } from '@/components/treasury/treasury-settlement-viz'
import { TreasurySimulatedWallet } from '@/components/treasury/treasury-simulated-wallet'
import { cn } from '@/lib/utils'

const serifCard = 'font-serif font-semibold text-[1.125rem] leading-snug text-[#14432A]'
const bodySmall = 'font-sans text-[0.9375rem] leading-[1.65] text-[#3d4a41]'
const iconWrap = 'mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#14432A]/[0.08] text-[#14432A]'

/** All sections appended below the Treasury hero — server-rendered shell + isolated client widgets */
export function TreasuryExpandedBody() {
  return (
    <>
      {/* Charter */}
      <section className="border-t border-[#E5E0D5]/90 bg-[#FAFCFB] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <Eyebrow>Charter</Eyebrow>
          <SectionTitle>Charter, and the details behind it.</SectionTitle>
          <ProseBody className="mt-6">
            Your charter is the formal frame Centuries Mutual uses to spell out how Treasury serves you — how balances are kept
            one-to-one with the U.S. dollar, how escrow and releases behave, and which promises apply for the life of your home,
            lease, or shared corridor.
          </ProseBody>
          <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col justify-center">
              <p className="max-w-[65ch] font-sans text-[15px] leading-[1.65] text-[#3d4a41]">
                The charter names the commitments you can rely on: reserve alignment, settlement traceability, dispute handling,
                and withdrawal paths — so every member sees the same terms instead of a maze of hidden screens. The panel beside
                this text is a visual summary; the underlying agreement remains the source of truth for what Treasury may and may
                not do on your behalf.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <TreasuryCharterIllustration />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#E8DFD6]/55 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <SectionTitle>Your dollar wallet.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-5">
              {[
                `Every Centuries Mutual member receives a dollar wallet backed one-to-one with the U.S. dollar — redeemable anytime you choose. It behaves like currency you already trust, on rails engineered to finalize in moments instead of chasing batch windows.`,
                `Fund from your bank account, receive from another member or a landlord counterpart, settle rent or shared bills, withdraw back to banking channels when you decide. The wallet is intentional: balances do not drift with speculative markets — Treasury is shelter, not speculation.`,
              ].map((para, i) => (
                <p key={i} className="max-w-[65ch] font-sans text-[15px] leading-[1.65] text-[#3d4a41]">
                  {para}
                </p>
              ))}
            </div>
            <TreasurySimulatedWallet />
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#FAFCFB] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <SectionTitle>Why a digital dollar.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                Icon: ScaleIcon,
                title: 'One-to-one with the dollar',
                body:
                  'The digital dollar is fully backed against reserves aligned with prudent practice — always worth exactly one dollar you can reconcile against withdrawals.',
              },
              {
                Icon: ShieldCheckIcon,
                title: 'No volatility',
                body:
                  'Your wallet is not indexed to risky assets — balances behave like cash you can plan around alongside your lease obligations.',
              },
              {
                Icon: BoltIcon,
                title: 'Faster than a wire',
                body:
                  'Member-to-member settlements confirm in seconds — when banking rails suit you better, withdrawals follow established scheduling windows.',
              },
            ].map(({ Icon, title, body }) => (
              <LuxuryCard key={title}>
                <div className={iconWrap}>
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className={cn(serifCard, 'mt-1')}>{title}</h3>
                <p className={cn(bodySmall, 'mt-3')}>{body}</p>
              </LuxuryCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#E8DFD6]/40 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <SectionTitle>Settlement on a fast network.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <ProseBody>
                Wallet-to-wallet settlements run on an efficient settlement layer engineered for recurring payments instead of speculative trading — near-instant confirmation, transparent postings, predictable costs that reward network operators rather than inflating silently with unrelated market noise.
              </ProseBody>
              <ProseBody className="mt-6">
                Typical network costs sit at a modest few cents paid to settlement infrastructure itself — enabling Centuries Mutual to prioritize orchestration transparency instead of taxing every proportional rent dollar.
              </ProseBody>
            </div>
            <TreasurySettlementViz />
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E0D5]/80 bg-[#FAFCFB] py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <SectionTitle>Ledger.</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <ProseBody>
                The Centuries Mutual ledger is the shared record where money, documents, and messages travel together. Settlements
                and escrows post alongside the leases, receipts, amendments, and member messages that belong to the same agreement
                — so auditing, disputes, and day-to-day coordination share one chronological trail instead of splitting across
                inboxes and file folders.
              </ProseBody>
              <ProseBody className="mt-6">
                Economically, Centuries Mutual does not issue a speculative storefront token nor stack percentage rents
                indiscriminately. Revenue aligns with memberships and transparent flat orchestration — everyday members retain
                wallet portability without surrendering escalating cuts as agreements grow.
              </ProseBody>
            </div>
            <LuxuryCard>
              <dl className="space-y-4 font-sans">
                <div className="border-b border-[#E5E0D5]/80 pb-3">
                  <div className="flex justify-between gap-3 font-mono text-[13px] text-[#14432A]">
                    <span>Network fee</span>
                    <span>a few cents per transfer</span>
                  </div>
                  <p className="mt-1 text-[0.875rem] leading-snug text-[#6B6B66]">Paid to settlement infrastructure supporting fast posts.</p>
                </div>
                <div className="border-b border-[#E5E0D5]/80 pb-3">
                  <div className="flex justify-between gap-3 font-mono text-[13px] text-[#14432A]">
                    <span>Member-to-member</span>
                    <span>no platform fee</span>
                  </div>
                  <p className="mt-1 text-[0.875rem] leading-snug text-[#6B6B66]">Gifting and shared pools omit Centuries Mutual surcharges between members.</p>
                </div>
                <div>
                  <div className="flex justify-between gap-3 font-mono text-[13px] text-[#14432A]">
                    <span>Rent &amp; deposits</span>
                    <span>flat orchestration fee</span>
                  </div>
                  <p className="mt-1 text-[0.875rem] leading-snug text-[#6B6B66]">
                    Lease-aligned flows carry concise flat facilitation instead of escalating rent-percent fees.
                  </p>
                </div>
              </dl>
              <p className="mt-6 border-t border-[#E5E0D5]/80 pt-4 text-[0.8125rem] leading-relaxed text-[#6B6B66]">
                Fees are reviewed openly — Centuries Mutual never abstracts a proportion of contracted rent silently.
              </p>
            </LuxuryCard>
          </div>
        </div>
      </section>

      <TreasuryExpandedBodyContinued />
    </>
  )
}
