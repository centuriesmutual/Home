'use client'

export function HeroStats({ className = '' }: { className?: string }) {
  const stats = [
    { value: '$847M', label: 'Total transactions' },
    { value: '12,400', label: 'Member households' },
    { value: '98%', label: 'Member retention' },
  ] as const

  return (
    <div
      className={`mt-2 flex flex-wrap items-start justify-between gap-y-4 border-t border-[rgba(250,247,240,0.1)] pt-6 font-serif ${className}`}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`flex min-w-[5.5rem] flex-1 flex-col gap-1 pb-2 sm:pb-0 ${i > 0 ? 'relative border-l border-[rgba(250,247,240,0.14)] pl-4 sm:pl-6' : ''}`}
        >
          <span className="font-serif text-2xl tracking-tight text-[#FAF7F0] sm:text-3xl">{s.value}</span>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[rgba(250,247,240,0.7)]">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  )
}
