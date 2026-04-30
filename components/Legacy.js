'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  LockClosedIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import {
  sectionAnimation,
  staggerContainer,
  slideInLeft,
  slideInRight,
  staggerItem,
} from '../utils/animations'
import { EDocumentSystemModal } from './illustrations/home-product-modals'
import './illustrations/neighborhood-motion.css'

const DOC_FEATURES = [
  {
    Icon: DocumentTextIcon,
    title: 'Digital Leases',
    blurb: 'Electronic lease agreements with versioned audit history.',
  },
  {
    Icon: DocumentCheckIcon,
    title: 'Roommate Contracts',
    blurb: 'Secure roommate agreements signed by every party.',
  },
  {
    Icon: ClockIcon,
    title: 'Property Documents',
    blurb: 'Complete property files, organized and searchable.',
  },
  {
    Icon: LockClosedIcon,
    title: 'Instant Access',
    blurb: '24/7 access for everyone authorized — and only them.',
  },
]

export default function Legacy() {
  return (
    <>
      {/* eDocument System */}
      <section
        style={{
          background: '#F4F1EC',
          borderTop: '1px solid #E8EBEA',
          padding: '5rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="row align-items-center" style={{ rowGap: '2.5rem' }}>
            <div className="col-12">
              <motion.div className="text-center mb-5" {...sectionAnimation}>
                <p
                  className="mb-3"
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#C9A53E',
                    fontWeight: 600,
                  }}
                >
                  — Documents
                </p>
                <h2
                  className="mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#14432A',
                    fontWeight: 500,
                    fontSize: 'clamp(2rem, 4.2vw, 3rem)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                  }}
                >
                  eDocument System
                </h2>
                <p
                  className="mx-auto"
                  style={{
                    fontSize: '1.0625rem',
                    color: '#55655D',
                    maxWidth: '720px',
                    lineHeight: 1.6,
                  }}
                >
                  Find and rent real estate with roommates through a comprehensive eDocument
                  system. Lease agreements, roommate contracts, and property files in one place.
                </p>
              </motion.div>
            </div>

            <motion.div className="col-lg-6" {...slideInLeft}>
              <EDocumentSystemModal />
            </motion.div>

            <motion.div className="col-lg-6" {...slideInRight}>
              <motion.div
                className="row g-3 mb-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
              >
                {DOC_FEATURES.map(({ Icon, title, blurb }) => (
                  <motion.div className="col-md-6" key={title} variants={staggerItem}>
                    <div
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E8EBEA',
                        borderRadius: '14px',
                        padding: '1.1rem 1.25rem',
                        height: '100%',
                      }}
                    >
                      <div className="d-flex align-items-start gap-3">
                        <div
                          style={{
                            background: 'rgba(20, 67, 42, 0.06)',
                            borderRadius: '10px',
                            padding: '10px',
                            flexShrink: 0,
                          }}
                        >
                          <Icon style={{ width: '20px', height: '20px', color: '#14432A' }} />
                        </div>
                        <div>
                          <h5
                            className="mb-1"
                            style={{
                              fontWeight: 600,
                              fontSize: '0.95rem',
                              color: '#14432A',
                              letterSpacing: '-0.005em',
                            }}
                          >
                            {title}
                          </h5>
                          <p
                            className="mb-0"
                            style={{ fontSize: '0.8125rem', color: '#55655D', lineHeight: 1.5 }}
                          >
                            {blurb}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="d-flex flex-wrap gap-3 mt-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="/edocument-system"
                  className="btn px-4 py-2 fw-semibold"
                  style={{
                    borderRadius: '10px',
                    background: '#14432A',
                    borderColor: '#14432A',
                    color: '#FAFCFB',
                    letterSpacing: '0.01em',
                    boxShadow: '0 8px 24px -10px rgba(20, 67, 42, 0.45)',
                  }}
                >
                  Access Documents
                </Link>
                <Link
                  href="/edocuments-audit-tracking"
                  className="btn px-4 py-2 fw-semibold"
                  style={{
                    borderRadius: '10px',
                    border: '1px solid #14432A',
                    color: '#14432A',
                    background: 'transparent',
                    letterSpacing: '0.01em',
                  }}
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Legacy of Trust */}
      <section
        style={{
          background: '#FAFCFB',
          borderTop: '1px solid #E8EBEA',
          padding: '5rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="row align-items-center" style={{ rowGap: '2.5rem' }}>
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #E8EBEA',
                  background: '#F4F1EC',
                  boxShadow: '0 16px 40px -20px rgba(15, 61, 46, 0.16)',
                }}
              >
                <Image
                  src="/deer.jpeg"
                  alt="Legacy of Trust"
                  fill
                  sizes="(max-width: 991px) 100vw, 42vw"
                  style={{ objectFit: 'cover' }}
                  priority={false}
                />

                {/* Soft tint to anchor the badge */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(20,67,42,0) 50%, rgba(20,67,42,0.18) 100%)',
                  }}
                />

                {/* Est. 2024 badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    background: '#0066CC',
                    borderRadius: '10px',
                    padding: '14px 26px',
                    textAlign: 'center',
                    boxShadow: '0 14px 30px -12px rgba(0, 102, 204, 0.55)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      lineHeight: 1,
                      letterSpacing: '0.01em',
                    }}
                  >
                    2024
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#FFFFFF',
                      marginTop: '4px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Est.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="mb-3"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A53E',
                  fontWeight: 600,
                }}
              >
                — Est. 2024
              </p>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#14432A',
                  fontWeight: 500,
                  fontSize: 'clamp(2rem, 4.4vw, 3rem)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.15,
                }}
              >
                A Legacy of Trust
              </h2>
              <p
                className="mb-3"
                style={{
                  fontSize: '1.0625rem',
                  color: '#55655D',
                  lineHeight: 1.7,
                }}
              >
                Centuries Mutual is built on a foundation of trust, expertise, and unwavering
                commitment to our clients&apos; financial success — through secure, reliable
                systems and proven credibility.
              </p>
              <p
                className="mb-0"
                style={{
                  fontSize: '1.0625rem',
                  color: '#55655D',
                  lineHeight: 1.7,
                }}
              >
                Our security infrastructure ensures every family receives the highest level of
                protection. State-of-the-art encryption, secure data handling, and transparent
                practices guide families toward financial security with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Centuries Mutual */}
      <section
        style={{
          background: '#14432A',
          color: '#FAFCFB',
          padding: '4rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* subtle gold rule */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              'linear-gradient(90deg, transparent 0%, rgba(201,165,62,0.45) 35%, rgba(201,165,62,0.45) 65%, transparent 100%)',
          }}
        />
        <div className="container">
          <div className="row align-items-center" style={{ rowGap: '2rem' }}>
            <motion.div
              className="col-lg-8"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="mb-3"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A53E',
                  fontWeight: 600,
                }}
              >
                — About
              </p>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#FAFCFB',
                  fontWeight: 500,
                  fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)',
                  letterSpacing: '-0.005em',
                  lineHeight: 1.2,
                }}
              >
                About Centuries Mutual
              </h2>
              <p
                className="mb-0"
                style={{
                  fontSize: '1.0625rem',
                  color: 'rgba(250,252,251,0.85)',
                  lineHeight: 1.7,
                  maxWidth: '640px',
                }}
              >
                A trusted financial services company dedicated to comprehensive solutions and
                lasting relationships with our members.
              </p>
            </motion.div>

            <motion.div
              className="col-lg-4 text-center text-lg-end"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/about"
                className="btn px-4 py-2 fw-semibold"
                style={{
                  borderRadius: '10px',
                  background: '#FAFCFB',
                  border: '1px solid rgba(250,252,251,0.18)',
                  color: '#14432A',
                  letterSpacing: '0.01em',
                  boxShadow: '0 12px 28px -12px rgba(0,0,0,0.4)',
                }}
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
