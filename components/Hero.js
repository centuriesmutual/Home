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
        .hero-card-image-cell {
          min-height: 200px;
        }
        @media (min-width: 768px) {
          .hero-card-image-cell {
            min-height: 100%;
          }
        }
        .hero-main-image-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: fit-content;
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
          border-radius: 1.5rem;
          padding: clamp(0.65rem, 2vw, 1.35rem);
          background:
            radial-gradient(
              ellipse 92% 88% at 50% 38%,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(18, 48, 32, 0.35) 42%,
              rgba(12, 38, 26, 0.55) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 18px 40px rgba(0, 0, 0, 0.22);
        }
        .hero-main-image-inner {
          position: relative;
          width: auto;
          max-width: min(420px, 42vw);
          line-height: 0;
        }
        .hero-main-image-inner img {
          width: auto !important;
          height: auto !important;
          max-height: min(560px, 58vh);
          max-width: 100% !important;
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
                <div className="hero-find-card w-100 text-start overflow-hidden relative rounded-[22px]">
                  {/* Ambient depth — text column */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute top-0 bottom-0 right-0 left-0 md:left-[41.666667%]"
                  >
                    <div
                      className="pointer-events-none absolute -right-16 -top-24 h-[min(280px,70vw)] w-[min(280px,70vw)] rounded-full opacity-[0.35]"
                      style={{
                        background:
                          'radial-gradient(circle at 30% 30%, rgba(20, 67, 42, 0.14) 0%, transparent 62%)',
                      }}
                    />
                    <div
                      className="pointer-events-none absolute -right-8 bottom-0 h-[min(220px,60vw)] w-[min(220px,60vw)] rounded-full opacity-[0.2]"
                      style={{
                        background:
                          'radial-gradient(circle at 70% 50%, rgba(196, 168, 120, 0.2) 0%, transparent 58%)',
                      }}
                    />
                  </div>

                  <div className="row g-0 align-items-stretch position-relative">
                    {/* Left column: image + horizontal search strip */}
                    <div className="col-12 col-md-5 hero-card-image-cell p-0 d-flex flex-column">
                      <div className="position-relative flex-1 min-h-0 h-[min(200px,42vw)] w-100 md:min-h-[260px]">
                        <Image
                          src="/buffalo2.png"
                          alt=""
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 767px) 100vw, 35vw"
                          quality={90}
                        />
                        <div
                          aria-hidden
                          className="position-absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              'linear-gradient(90deg, rgba(0,0,0,0.12) 0%, transparent 45%), linear-gradient(0deg, rgba(250,247,240,0.28) 0%, transparent 40%)',
                          }}
                        />
                      </div>
                      <motion.div
                        className="flex-shrink-0 px-3 py-2.5 sm:px-4 sm:py-3"
                        style={{
                          borderTop: '1px solid rgba(21, 60, 40, 0.08)',
                          background:
                            'linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(250,247,240,0.95) 100%)',
                        }}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.62 }}
                      >
                        <CommunitySearchBar onOpen={openSearch} compact />
                      </motion.div>
                    </div>

                    {/* Right column: copy */}
                    <div className="col-12 col-md-7 px-4 py-6 px-lg-5 pb-5 pb-md-6 d-flex flex-column justify-content-center position-relative">
                      <div>
                    <motion.div
                      className="flex items-center gap-3 mb-4 justify-center md:justify-start"
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
                      className="text-center md:text-left font-serif mb-3 md:mb-4 text-balance"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      style={{
                        fontSize: 'clamp(1.35rem, 1rem + 1vw, 1.85rem)',
                        fontWeight: 600,
                        lineHeight: 1.18,
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
                      className="font-sans text-center md:text-left mb-0 mx-auto md:mx-0 max-w-[28rem] text-[15px] sm:text-[0.9625rem] leading-[1.65] text-muted"
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

                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6 order-lg-1 order-1">
            <motion.div
              className="position-relative d-flex justify-content-center justify-content-lg-end align-items-center py-2 py-lg-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Underlay hugs image; sits on hero green */}
              <div className="hero-main-image-wrap d-none d-lg-flex">
                <div className="hero-main-image-inner">
                  <Image
                    src="/buffalo2.png"
                    alt="Centuries Mutual — Majestic American bison"
                    width={900}
                    height={1125}
                    sizes="(max-width: 991px) 90vw, 42vw"
                    priority
                    quality={95}
                    className="d-block mx-auto object-contain"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: 'min(560px, 58vh)',
                    }}
                  />
                </div>
              </div>
              <div
                className="d-lg-none hero-main-image-wrap w-100 d-flex justify-content-center"
              >
                <div className="hero-main-image-inner">
                  <Image
                    src="/buffalo2.png"
                    alt=""
                    width={800}
                    height={1000}
                    sizes="100vw"
                    quality={92}
                    className="d-block mx-auto object-contain"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: 'min(420px, 92vw)',
                      maxHeight: 'min(340px, 42vh)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CommunitySearchModal open={communitySearchOpen} onOpenChange={setCommunitySearchOpen} />
    </section>
  )
}
