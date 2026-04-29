'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

/** Placeholder mailing capture until a canonical newsletter endpoint exists — UI-complete. */
export function FooterNewsletter() {
  const [status, setStatus] = useState<'idle' | 'thanks'>('idle')

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('thanks')
  }

  return (
    <div className="flex w-full flex-col lg:max-w-md lg:self-end">
      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]" style={{ color: '#C9A53E' }}>
        Stay close.
      </p>
      <p className="mt-3 text-[0.875rem] leading-relaxed text-white/60">
        Occasional updates. No noise.
      </p>
      {status === 'thanks' ? (
        <p className="mt-4 text-[0.875rem] text-white/85" role="status">
          Thanks — you&apos;re subscribed.
        </p>
      ) : (
        <form onSubmit={submit} className="mt-5 flex w-full flex-col gap-4">
          <div className="flex w-full min-w-0 overflow-hidden rounded-lg border border-white/15">
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
              required
              className="min-h-[3rem] flex-1 rounded-l-[8px] border-0 bg-transparent px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C9A53E]/40"
            />
            <button
              type="submit"
              className="shrink-0 rounded-r-[8px] px-6 py-2.5 text-[0.8125rem] font-semibold text-white transition-[filter] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A53E]/40"
              style={{ background: 'linear-gradient(135deg, #C9A53E 0%, #E0B85A 100%)' }}
            >
              Subscribe
            </button>
          </div>
          <p className="text-[0.75rem] text-white/40">
            By subscribing you agree to our{' '}
            <Link
              href="/legal"
              className="underline decoration-white/35 underline-offset-2 hover:decoration-white/60 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A53E]/40"
              prefetch={false}
            >
              privacy policy
            </Link>
            .
          </p>
        </form>
      )}
    </div>
  )
}
