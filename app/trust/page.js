'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import {
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  CpuChipIcon,
  LockClosedIcon,
  ScaleIcon,
  DocumentTextIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const fullPage = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '4.5rem',
  paddingBottom: '4.5rem',
  boxSizing: 'border-box'
}

export default function TrustPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section 1 — Introduction */}
        <section
          id="introduction"
          style={{
            ...fullPage,
            background: 'linear-gradient(165deg, #14432A 0%, #206542 55%, #174d32 100%)',
            color: 'white'
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9">
                <p className="small text-uppercase fw-semibold mb-3" style={{ letterSpacing: '0.12em', opacity: 0.88 }}>
                  Centuries Mutual Trust
                </p>
                <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.12 }}>
                  How the trust system works
                </h1>
                <p className="lead mb-4" style={{ fontSize: '1.2rem', opacity: 0.95, lineHeight: 1.75, maxWidth: '48rem' }}>
                  Trust is not a single badge—it is an in-house rating and decision layer that runs across roommate matching,
                  listings, messaging, documents, and claims. This page walks through each major component in depth. Every
                  block below is a full section you can read top to bottom; scroll to move through the story in order.
                </p>
                <p className="mb-0" style={{ opacity: 0.9, lineHeight: 1.8, maxWidth: '48rem', fontSize: '1.02rem' }}>
                  The system is built for transparency toward members: you should understand what signals feed your score,
                  how scores influence what you see, and what happens when something goes wrong. Numeric outputs are paired
                  with policies and human review where stakes are high—especially around housing, payments, and safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Purpose & principles */}
        <section
          id="principles"
          style={{
            ...fullPage,
            background: '#fafcfb',
            borderTop: '1px solid #e8ebea'
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9">
                <h2 className="h1 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Purpose, boundaries, and design principles
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '46rem' }}>
                  The trust system exists to reduce harm in real-world outcomes: bad roommates, fraudulent listings, abandoned
                  obligations, and repeated platform abuse. It is not a credit score in the banking sense, though some inputs
                  may resemble financial hygiene where we offer payment-backed products. It is a <strong>brokerage-context trust
                  model</strong> tuned for people sharing housing, documents, and money on Centuries Mutual.
                </p>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '46rem' }}>
                  <strong>Fairness.</strong> Where possible, scores emphasize behaviors members can influence over time:
                  completing identity steps, honoring agreements, resolving disputes in good faith, and keeping communications
                  inside secure channels. We avoid “secret sauce” punishment without remedy—serious penalties tie to clear
                  policy violations or sustained risk signals.
                </p>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '46rem' }}>
                  <strong>Proportionality.</strong> A first-time friction is not the same as a permanent ban. The engine
                  surfaces graduated responses: warnings, feature throttles, manual review, or hard blocks when automated
                  detection crosses risk thresholds aligned with legal and safety duties.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '46rem' }}>
                  <strong>Explainability at the product level.</strong> Internally, models blend rules with statistical signals.
                  Externally, you see summaries (“verification status”, “recent completion”, “community standing”) rather than
                  raw coefficients—so guidance stays human-readable while engineering retains room to improve precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — The 1–300 scale */}
        <section
          id="scale"
          style={{
            ...fullPage,
            background: '#ffffff',
            borderTop: '1px solid #e8ebea'
          }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center g-5">
              <div className="col-lg-5 text-center text-lg-start">
                <div className="d-inline-flex align-items-center justify-content-center rounded-4 mb-4 p-4" style={{ background: 'rgba(20, 67, 42, 0.07)' }}>
                  <ChartBarIcon style={{ width: '56px', height: '56px', color: '#14432A' }} aria-hidden />
                </div>
                <h2 className="h1 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  The 1–300 trust scale
                </h2>
              </div>
              <div className="col-lg-7">
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85 }}>
                  Members receive a trust score on a <strong>1–300</strong> integer scale. The scale is wide enough to separate
                  “new but clean” profiles from long-tenured, highly reliable members without collapsing everyone into a narrow band.
                  The number is produced by our <strong>recommendation and risk stack</strong>: rule checks, verified attributes,
                  transaction history on the platform, dispute outcomes, and behavioral signals (such as spam patterns or
                  policy breaches).
                </p>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85 }}>
                  <strong>Lower band (approx. 1–100).</strong> New accounts, incomplete verification, or elevated risk markers.
                  Product surfaces may limit high-stakes actions until milestones are cleared (for example, identity confirmation
                  or first successful lease completion).
                </p>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85 }}>
                  <strong>Mid band (approx. 101–200).</strong> Typical active members with stable participation. Adequate for
                  most roommate searches, messaging, and standard document flows.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.08rem', lineHeight: 1.85 }}>
                  <strong>Upper band (approx. 201–300).</strong> Strong pattern of trustworthy completions, longer positive
                  history, and fewer contested events. These members may receive better placement in discovery, broader
                  eligibility for premium tools, or faster automated approvals where policy allows—always subject to manual
                  override in edge cases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Signals & data inputs */}
        <section
          id="signals"
          style={{
            ...fullPage,
            background: '#f3f6f4',
            borderTop: '1px solid #e8ebea'
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9">
                <h2 className="h1 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  What feeds the score: signals and stewardship
                </h2>
                <p className="text-muted mb-5" style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '46rem' }}>
                  Inputs fall into buckets. Not every member has data in every bucket; the model is built to handle sparsity
                  without punishing newcomers beyond what prudence requires.
                </p>
                <div className="row g-4">
                  {[
                    {
                      title: 'Identity & verification',
                      body: 'Government-aligned checks, selfie liveness where used, phone and email possession, device reputation, and linkage to payment instruments. These reduce impersonation and multi-account abuse.'
                    },
                    {
                      title: 'Transactional integrity',
                      body: 'Successful rent flows, on-time documented payments in our rails, completion of eDocument milestones, and low rates of chargebacks or contested reversals where applicable.'
                    },
                    {
                      title: 'Community & social graph',
                      body: 'Invites from higher-trust members, mutual connections with good standing, and healthy message patterns—as opposed to blast spam or coercion red flags surfaced by classifiers.'
                    },
                    {
                      title: 'Listing and inventory behavior',
                      body: 'Accuracy of photos and copy, duplication detection, price manipulation signals, and landlord/host responsiveness tied to inquiry SLAs.'
                    },
                    {
                      title: 'Safety & policy adherence',
                      body: 'Reports validated by moderation, harassment findings, discrimination policy breaches, illegal-sublet patterns, or attempts to move payments off-platform to evade protections.'
                    },
                    {
                      title: 'Disputes and claims',
                      body: 'Outcomes from structured resolution: good-faith participation, evidence quality, repeated losses on materially similar facts, or escalation to claims workflows.'
                    }
                  ].map((item) => (
                    <div key={item.title} className="col-md-6">
                      <div className="h-100 p-4 rounded-4 bg-white border h-100" style={{ borderColor: '#e0e8e3' }}>
                        <h3 className="h6 fw-bold mb-3" style={{ color: '#14432A' }}>{item.title}</h3>
                        <p className="text-muted small mb-0" style={{ lineHeight: 1.7 }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Recommendation engine & product usage */}
        <section
          id="engine"
          style={{
            ...fullPage,
            background: '#ffffff',
            borderTop: '1px solid #e8ebea'
          }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center g-5">
              <div className="col-lg-6 order-lg-2">
                <h2 className="h1 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Recommendation engine: from score to surfaced experience
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85 }}>
                  The trust score is an input vector to ranking and eligibility services. When you search roommates or listings,
                  candidates are not sorted by score alone: we blend <strong>fit</strong> (preferences, budget, location),
                  <strong>availability</strong>, and <strong>trust-adjusted confidence</strong> so a perfect match is not buried
                  beneath a marginal one simply because of a few points difference.
                </p>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85 }}>
                  Certain workflows are <strong>gated</strong>: for example, bulk messaging, instant booking, or high-value
                  contracts may require minimum trust tiers or supplemental verification. Gates exist to protect both sides—
                  especially in asymmetric markets where one party sends money before move-in.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.08rem', lineHeight: 1.85 }}>
                  The engine re-evaluates continuously as events stream in (new reviews, dispute resolutions, document signatures).
                  Stale scores are periodically refreshed so a member who repairs their standing sees improvement after consistent
                  positive behavior—not only at arbitrary calendar intervals.
                </p>
              </div>
              <div className="col-lg-6 order-lg-1 text-center">
                <div className="d-inline-flex align-items-center justify-content-center rounded-4 p-5" style={{ background: 'rgba(20, 67, 42, 0.08)', minHeight: '280px', width: '100%', maxWidth: '420px' }}>
                  <CpuChipIcon style={{ width: '88px', height: '88px', color: '#14432A', opacity: 0.85 }} aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Blockchain, documents, legal alignment */}
        <section
          id="integrations"
          style={{
            ...fullPage,
            background: '#fafcfb',
            borderTop: '1px solid #e8ebea'
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9">
                <h2 className="h1 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  How trust interacts with documents, blockchain, and claims
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '46rem' }}>
                  Trust is orthogonal but <strong>linked</strong> to immutability. A blockchain-backed lease hash does not,
                  by itself, prove someone is trustworthy—but it proves which version of an agreement existed at a point in time.
                  Together, trust scoring and document tooling let counterparties reason about both <em>who</em> they are dealing
                  with and <em>what</em> was agreed.
                </p>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '46rem' }}>
                  When claims fire, trust history informs prioritization and settlement posture: repeated bad-faith actors may face
                  faster escalation, while members with clean records and strong documentation may see expedited paths where policy allows.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link href="/documents" className="btn btn-lg text-white d-inline-flex align-items-center gap-2 fw-semibold px-4 py-3" style={{ background: '#14432A', borderColor: '#14432A' }}>
                    <DocumentTextIcon style={{ width: '22px', height: '22px' }} />
                    eDocuments hub
                  </Link>
                  <Link href="/claims" className="btn btn-outline-secondary btn-lg px-4 py-3 d-inline-flex align-items-center gap-2" style={{ borderColor: '#14432A', color: '#14432A' }}>
                    <ScaleIcon style={{ width: '22px', height: '22px' }} />
                    Claims overview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Privacy, appeals, human review */}
        <section
          id="governance"
          style={{
            ...fullPage,
            background: '#ffffff',
            borderTop: '1px solid #e8ebea'
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9">
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <LockClosedIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                  <ShieldCheckIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                  <UserGroupIcon style={{ width: '48px', height: '48px', color: '#14432A' }} />
                </div>
                <h2 className="h1 fw-bold mb-4" style={{ color: '#14432A', fontFamily: "'Playfair Display', serif" }}>
                  Privacy, appeals, and human oversight
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '46rem' }}>
                  Sensitive attributes used for verification are handled under our <Link href="/legal#privacy-policy" className="fw-semibold" style={{ color: '#14432A' }}>Privacy Policy</Link>.
                  We retain audit logs for security and dispute resolution, with retention tuned to legal needs and product functionality.
                </p>
                <p className="text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '46rem' }}>
                  If you believe a score or restriction is wrong, you may open a review through <Link href="/help-desk" style={{ color: '#14432A' }}>Help Desk</Link>.
                  Human operators can override automated decisions when presented with compelling evidence; machine decisions that
                  affect eligibility for housing or payments receive heightened scrutiny.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '46rem' }}>
                  We monitor the trust stack for drift and bias: periodic evaluations compare outcomes across cohorts,
                  and rule changes are versioned so engineering and compliance can explain what changed and why.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 — Next steps */}
        <section
          id="next-steps"
          style={{
            ...fullPage,
            background: 'linear-gradient(135deg, #14432A 0%, #206542 100%)',
            color: 'white',
            borderTop: 'none'
          }}
        >
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-xl-8">
                <h2 className="h1 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Put trust to work on your account
                </h2>
                <p className="lead mb-5" style={{ opacity: 0.95, lineHeight: 1.75 }}>
                  See product-specific explainers, numeric deep-dives, and onboarding paths. The Trust System and Trust Score
                  pages complement this narrative with UI-oriented walkthroughs.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <Link href="/trust-system" className="btn btn-light btn-lg px-4 py-3 d-inline-flex align-items-center gap-2">
                    Trust System
                    <ArrowRightIcon style={{ width: '20px', height: '20px' }} />
                  </Link>
                  <Link href="/trustscore" className="btn btn-outline-light btn-lg px-4 py-3">
                    Trust Score details
                  </Link>
                  <Link href="/signup" className="btn btn-outline-light btn-lg px-4 py-3">
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
