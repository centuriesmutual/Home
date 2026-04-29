/**
 * Editorial “charter” panel — inspired by formal certificate layout; Centuries Mutual branded only.
 */
export function TreasuryCharterIllustration() {
  return (
    <figure
      className="relative mx-auto w-full max-w-[480px] rounded-2xl border border-[#E0D8CC] bg-[#FAF7F0] p-6 shadow-[0_20px_50px_rgba(15,51,33,0.08),0_2px_0_rgba(255,255,255,0.8)_inset] sm:p-8"
      aria-label="Illustration of a Treasury charter for members"
    >
      <div className="pointer-events-none absolute inset-3 rounded-xl border border-[#C9A53E]/25 sm:inset-4" aria-hidden />

      <figcaption className="relative text-center">
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#6B6B66]">Charter · member record</p>
        <p className="mt-4 font-sans text-[9px] font-semibold uppercase tracking-[0.42em] text-[#55655D]">
          Centuries Mutual · charter
        </p>
        <p
          className="mx-auto mt-5 max-w-[20rem] font-serif text-[1.35rem] font-medium italic leading-snug text-[#0f3321] sm:text-[1.5rem]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Articles of sound money
        </p>

        <div className="relative mx-auto mt-8 h-28 w-full max-w-[220px] text-[#B8B2A8]">
          <svg viewBox="0 0 200 120" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path
              d="M30 85c18-28 48-48 85-45 38 3 68 28 78 58M25 55c22-18 52-22 78-12 28 11 48 35 52 62"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M95 38c12 2 22 10 28 22M102 42l8 6"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeLinecap="round"
              opacity="0.35"
            />
            <circle cx="118" cy="52" r="4" fill="#C9A53E" opacity="0.85" />
          </svg>
        </div>

        <ul className="mx-auto mt-2 max-w-[17.5rem] space-y-2.5 text-left font-sans text-[11px] leading-snug text-[#3d4a41] sm:text-xs">
          {[
            'Fully-backed digital dollar balances',
            'Escrow timed to your lease and milestones',
            'Settlement traceable from sender to recipient',
            'Disputes and holds visible in one place',
            'Withdrawals on the schedule you choose',
          ].map((line) => (
            <li key={line} className="flex gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#C9A53E]/55 bg-[#C9A53E]/10">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#A88332" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-end justify-between gap-4 border-t border-[#E5E0D5]/90 pt-5">
          <p className="text-left font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#859087]">
            Attested for members
          </p>
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#C9A53E] bg-[linear-gradient(145deg,#E8D9A8_0%,#C9A53E_45%,#A88332_100%)] shadow-[0_4px_14px_rgba(168,131,50,0.35)]">
            <span
              className="font-serif text-sm font-bold tracking-tight text-[#0f3321]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              CM
            </span>
            <span
              className="pointer-events-none absolute -bottom-1 left-1/2 h-2 w-3 -translate-x-1/2 rounded-sm bg-[#8B2942]/90"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute -bottom-1 left-[42%] h-2 w-2.5 -translate-x-1/2 rotate-6 rounded-sm bg-[#8B2942]/75"
              aria-hidden
            />
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
