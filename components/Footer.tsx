import Image from 'next/image'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { GRAIN_BG } from '@/components/layout/site-header'
import { FooterBackToTop } from '@/components/footer/footer-back-to-top'
import { FooterMiddleReveal } from '@/components/footer/footer-middle-reveal'
import { FooterNewsletter } from '@/components/footer/footer-newsletter'
import './footer/footer.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
})

const gold = '#C9A53E'
const upperGreen = '#0f3321'
const midGreen = '#14432a'
const paper = '#FAFCFB'

const footerTopLine = 'linear-gradient(90deg, transparent 0%, #C9A53E 50%, transparent 100%)'

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        prefetch={false}
        className="group flex items-start gap-1.5 text-[0.875rem] font-normal text-white/[0.88] transition-colors duration-150 hover:text-white focus-visible:rounded-[2px] focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A53E]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14432a]"
      >
        <span className="mt-[3px] shrink-0 opacity-0 transition-[opacity,transform] duration-150 ease-out group-hover:translate-x-1 group-hover:opacity-100" style={{ color: gold }} aria-hidden>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </span>
        <span className="min-w-0 leading-[1.55]">{children}</span>
      </Link>
    </li>
  )
}

function NavGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="cm-footer-nav-col">
      <div className="mb-2 flex flex-col gap-2">
        <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]" style={{ color: gold }}>
          {title}
        </h3>
        <span className="h-0.5 w-3 rounded-[1px]" style={{ backgroundColor: gold }} aria-hidden />
      </div>
      <ul className="m-0 flex list-none flex-col gap-3 p-0">{children}</ul>
    </div>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/50 transition-colors duration-150 hover:text-[#C9A53E]">
      {children}
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative m-0 mt-0 flex min-h-[100vh] w-full flex-col p-0 font-sans leading-normal lg:min-h-screen" style={{ color: paper, backgroundColor: upperGreen }}>
      <div
        className="relative mx-auto w-full max-w-[72rem] px-6 pb-16 pt-16 sm:px-8 lg:px-16"
        style={{
          minHeight: 'min(100dvh, 56rem)',
          backgroundColor: upperGreen,
          backgroundImage: `radial-gradient(ellipse 120% 70% at 100% 0%, rgba(201, 165, 62, 0.12), transparent 52%), ${GRAIN_BG}`,
          backgroundRepeat: 'no-repeat, repeat',
          backgroundSize: 'auto, 220px 220px',
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: GRAIN_BG, backgroundSize: '220px 220px' }} aria-hidden />
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px w-full" style={{ backgroundImage: footerTopLine }} aria-hidden />
        <div className="relative z-[1] grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10">
          <div className="lg:col-span-6">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]" style={{ color: gold }}>
              Centuries Mutual.
            </p>
            <h2 className={`mt-4 text-[1.75rem] leading-[1.1] text-white md:text-[2.5rem] ${playfair.className}`} style={{ fontWeight: 700 }}>
              Trust, kept.
            </h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-white/75">
              A trust network for landlords, tenants, hosts, and the communities they build together.
            </p>
          </div>
          <div className="lg:col-span-6">
            <FooterNewsletter />
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/[0.08]" aria-hidden />

      <FooterMiddleReveal>
        <div
          className="cm-footer-mid-inner mx-auto grid w-full max-w-[72rem] grid-cols-1 gap-x-8 gap-y-10 px-6 py-12 sm:px-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-8 lg:px-16"
        >
          <div className="cm-footer-brand-block md:col-span-3 lg:col-span-2">
            <Link href="/" prefetch={false} className="inline-block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A53E]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14432a]">
              <Image src="/cmlogotreesmall-removebg-preview.png" alt="" width={140} height={64} className="h-8 w-auto brightness-0 invert" sizes="140px" />
              <span className="sr-only">Centuries Mutual — home</span>
            </Link>
            <p className="mt-5 max-w-[24rem] text-[0.875rem] leading-[1.6] text-white/70">
              Centuries Mutual is a trust network that turns verified real-world behavior into reliable matches and binding agreements between members. We help
              renters, hosts, and landlords coordinate the parts of life that matter — and stand behind the agreements that hold it all together.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <SocialIcon href="https://twitter.com" label="Centuries Mutual on X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com" label="Centuries Mutual on LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com" label="Centuries Mutual on YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialIcon>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <span className="cm-footer-status-dot h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: gold }} aria-hidden />
              <span className="text-[0.75rem] text-white/60">All systems operational</span>
            </div>
          </div>

          <nav aria-label="Footer" className="contents">
            <NavGroup title="Community">
              <FooterLink href="/landlords">Landlords</FooterLink>
              <FooterLink href="/tenants">Tenants</FooterLink>
              <FooterLink href="/hosts">Hosts</FooterLink>
            </NavGroup>

            <NavGroup title="Services">
              <FooterLink href="/utilities">Utilities</FooterLink>
              <FooterLink href="/claims">Claims</FooterLink>
            </NavGroup>

            <NavGroup title="Network">
              <FooterLink href="/documents">eDocuments</FooterLink>
              <FooterLink href="/blockchain">Blockchain</FooterLink>
            </NavGroup>

            <NavGroup title="Company">
              <FooterLink href="/help-desk">Help Desk</FooterLink>
              <FooterLink href="/legal">Legal</FooterLink>
            </NavGroup>
          </nav>
        </div>
      </FooterMiddleReveal>

      <div className="h-px w-full bg-white/[0.08]" aria-hidden />

      <div className="relative mx-auto w-full max-w-[72rem] px-6 pb-8 pt-16 sm:px-8 md:pb-6 md:pt-6 lg:px-16" style={{ backgroundColor: midGreen }}>
        <FooterBackToTop />
        <div className="relative z-[1] flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
          <p className="text-center text-[0.8125rem] text-white/50 md:text-left">© {year} Centuries Mutual. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            <Link href="/legal" prefetch={false} className="rounded text-[0.8125rem] text-white/50 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A53E]/40">
              Terms
            </Link>
            <span className="inline-flex h-1 w-1 shrink-0 rounded-full bg-[#C9A53E]/50" aria-hidden />
            <Link href="/legal" prefetch={false} className="rounded text-[0.8125rem] text-white/50 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A53E]/40">
              Privacy
            </Link>
            <span className="inline-flex h-1 w-1 shrink-0 rounded-full bg-[#C9A53E]/50" aria-hidden />
            <Link href="/legal" prefetch={false} className="rounded text-[0.8125rem] text-white/50 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A53E]/40">
              Cookies
            </Link>
            <span className="inline-flex h-1 w-1 shrink-0 rounded-full bg-[#C9A53E]/50" aria-hidden />
            <Link href="/legal" prefetch={false} className="rounded text-[0.8125rem] text-white/50 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A53E]/40">
              Accessibility
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            {(['Verified identity', 'Encrypted records', 'Audit-ready'] as const).map((pill) => (
              <span key={pill} className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-1.5 text-[0.75rem] text-white/60">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A53E]" aria-hidden />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
