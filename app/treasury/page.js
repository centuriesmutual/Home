'use client'

import Link from 'next/link'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import {
  ArrowRightIcon,
  BanknotesIcon,
  ChartBarSquareIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

export default function TreasuryPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="py-5"
          style={{
            minHeight: '56vh',
            background: 'linear-gradient(135deg, #14432A 0%, #206542 100%)',
            color: 'white',
          }}
        >
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9 text-center">
                <div className="d-inline-flex align-items-center gap-3 mb-4">
                  <BanknotesIcon className="opacity-90" style={{ width: '48px', height: '48px' }} aria-hidden />
                  <ShieldCheckIcon className="opacity-90" style={{ width: '48px', height: '48px' }} aria-hidden />
                  <ChartBarSquareIcon className="opacity-90" style={{ width: '48px', height: '48px' }} aria-hidden />
                </div>
                <p className="small text-uppercase fw-semibold mb-3" style={{ letterSpacing: '0.12em', opacity: 0.9 }}>
                  Treasury
                </p>
                <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Payments, escrow, and flow of funds on Centuries Mutual
                </h1>
                <p className="lead mx-auto mb-0" style={{ maxWidth: '38rem', lineHeight: 1.65, opacity: 0.95 }}>
                  Treasury coordinates how rent, deposits, utilities, and peer transfers move inside the platform.
                  It complements trust scoring and messaging so counterparties understand both who they are dealing with and
                  how money is routed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5" style={{ background: '#fafcfb', borderTop: '1px solid #e8ebea' }}>
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9">
                <h2 className="h3 fw-bold mb-3" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Member-facing payments
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '42rem' }}>
                  Use Pay for day-to-day rent, utilities splits, and peer transfers. Settlement paths and timing depend on product
                  configuration in your jurisdiction; where escrow or scheduled release applies, treasury logic enforces milestones
                  tied to leases and disputes.
                </p>
                <Link
                  href="/pay"
                  className="btn btn-lg text-white d-inline-flex align-items-center gap-2 fw-semibold px-4 py-3"
                  style={{ background: '#14432A', borderColor: '#14432A' }}
                >
                  Go to Pay
                  <ArrowRightIcon style={{ width: '20px', height: '20px' }} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
