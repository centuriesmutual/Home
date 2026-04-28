'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { CommunitySearchBar } from '@/components/search/community-search-bar'
import { CommunitySearchHotkeys, CommunitySearchModal } from '@/components/search/community-search-modal'

const CM_GREEN = '#14432A'

export default function Hero() {
  const [communitySearchOpen, setCommunitySearchOpen] = useState(false)
  const openSearch = useCallback(() => setCommunitySearchOpen(true), [])

  return (
    <section
      className="hero-section position-relative overflow-hidden"
      style={{
        minHeight: '60vh',
        backgroundColor: CM_GREEN,
        paddingTop: '0',
        paddingBottom: '0.5rem',
      }}
    >
      <style jsx>{`
        @media (max-width: 640px) {
          .hero-section {
            min-height: 55vh !important;
            overflow-x: hidden !important;
            padding-top: 2.5rem !important;
            padding-bottom: 1.5rem !important;
          }
          .hero-row {
            min-height: 55vh !important;
            overflow-x: hidden !important;
            padding-top: 0.75rem !important;
          }
          .hero-content {
            overflow-x: hidden !important;
            margin-top: 0.5rem !important;
          }
        }
        .hero-find-card {
          background: linear-gradient(
            165deg,
            #faf9f6 0%,
            #f7f5f1 42%,
            #faf8f5 100%
          );
          border-radius: 22px;
          overflow: hidden;
          box-shadow:
            0 28px 56px rgba(8, 32, 20, 0.26),
            0 4px 20px rgba(15, 61, 46, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.92),
            inset 0 -1px 0 rgba(21, 60, 40, 0.04);
          outline: 1px solid rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(229, 224, 213, 0.95);
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
        }
        .hero-find-card:hover {
          box-shadow:
            0 38px 68px rgba(8, 32, 20, 0.3),
            0 8px 24px rgba(15, 61, 46, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1px 0 rgba(21, 60, 40, 0.05);
          transform: translateY(-3px);
        }
      `}</style>
      <CommunitySearchHotkeys onOpen={openSearch} />

      <div className="container position-relative">
        <div className="row align-items-center hero-row" style={{ minHeight: '60vh', paddingTop: '0.25rem' }}>
          <div className="col-lg-6 order-lg-2 order-2">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ marginTop: '0' }}
            >
              <motion.h1
                className="text-white fw-bold mb-3 text-center text-lg-start"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '2px 2px 4px rgba(0,0,0,0.28)',
                  fontSize: 'clamp(1.05rem, 0.82rem + 0.85vw, 1.45rem)',
                  lineHeight: 1.2,
                  letterSpacing: '0.04em',
                  maxWidth: '100%',
                  fontWeight: 600,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your Community Brokerage:
              </motion.h1>

              <motion.div
                className="mb-4 px-3 px-sm-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                style={{ position: 'relative', zIndex: 5 }}
              >
                <div className="hero-find-card w-100 text-start px-4 px-lg-5 py-6 overflow-hidden relative">
                  {/* Ambient depth — stays inside card */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-24 -top-20 h-[min(340px,80vw)] w-[min(340px,80vw)] rounded-full opacity-[0.38]"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 30%, rgba(20, 67, 42, 0.12) 0%, transparent 62%)',
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -left-16 bottom-[-40%] h-[min(260px,70vw)] w-[min(260px,70vw)] rounded-full opacity-[0.22]"
                    style={{
                      background:
                        'radial-gradient(circle at 70% 50%, rgba(196, 168, 120, 0.18) 0%, transparent 58%)',
                    }}
                  />

                  <div className="relative">
                    <motion.div
                      className="flex items-center gap-3 mb-5 justify-center lg:justify-start"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      aria-hidden
                    >
                      <span
                        className="h-px w-10 shrink-0"
                        style={{
                          background:
                            'linear-gradient(90deg, transparent 0%, rgba(15, 61, 46, 0.35) 100%)',
                        }}
                      />
                      <span
                        className="font-sans text-[0.65rem] font-semibold uppercase whitespace-nowrap"
                        style={{ letterSpacing: '0.38em', color: 'rgba(15, 61, 46, 0.82)' }}
                      >
                        Near you
                      </span>
                      <span
                        className="h-px w-10 sm:w-16 shrink-0"
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(15, 61, 46, 0.28) 0%, transparent 100%)',
                        }}
                      />
                    </motion.div>

                    <motion.h2
                      className="text-center lg:text-left font-serif mb-4 text-balance"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      style={{
                        fontSize: 'clamp(1.45rem, 1.05rem + 1.15vw, 2rem)',
                        fontWeight: 600,
                        lineHeight: 1.15,
                        letterSpacing: '-0.022em',
                        color: '#0f1a13',
                      }}
                    >
                      Search rooms{' '}
                      <span
                        className="italic font-medium bg-clip-text"
                        style={{
                          color: CM_GREEN,
                          textDecoration: 'underline',
                          textDecorationColor: 'rgba(15, 61, 46, 0.22)',
                          textUnderlineOffset: '0.18em',
                        }}
                      >
                        anywhere
                      </span>
                    </motion.h2>

                    <motion.p
                      className="font-sans text-center lg:text-left mb-6 lg:mb-5 mx-auto lg:mx-0 max-w-[28rem] text-[15px] sm:text-[0.9625rem] leading-[1.65] text-muted"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.62 }}
                      style={{
                        letterSpacing: '0.011em',
                      }}
                    >
                      Trusted listings for the blocks you walk—open search for{' '}
                      <span className="text-[rgba(54,61,54,0.92)] font-medium">
                        neighborhoods, stays, or move-in timing
                      </span>
                      .
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.72 }}
                    >
                      <CommunitySearchBar onOpen={openSearch} />
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6 order-lg-1 order-1">
            <motion.div
              className="position-relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="mb-4 overflow-hidden d-none d-lg-block rounded-4"
                style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  position: 'relative',
                  marginTop: 20,
                  maxHeight: 560,
                  background: 'rgba(0,0,0,0.08)',
                  boxShadow: '0 20px 56px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
              >
                <Image
                  src="/buffalo2.png"
                  alt="Centuries Mutual — Majestic American bison"
                  fill
                  sizes="50vw"
                  priority
                  quality={95}
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                />
              </div>
              <div
                className="mb-3 overflow-hidden d-lg-none rounded-4 mx-auto position-relative"
                style={{
                  width: '100%',
                  maxWidth: 480,
                  aspectRatio: '4 / 3',
                  background: 'rgba(0,0,0,0.06)',
                  boxShadow: '0 14px 40px rgba(0,0,0,0.2)',
                  marginBottom: '1rem',
                }}
              >
                <Image
                  src="/buffalo2.png"
                  alt=""
                  fill
                  sizes="100vw"
                  quality={92}
                  className="rounded-4"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center bottom',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CommunitySearchModal open={communitySearchOpen} onOpenChange={setCommunitySearchOpen} />
    </section>
  )
}
