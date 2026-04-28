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
          background: #f9f8f6;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 28px 56px rgba(8, 32, 20, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.85);
          outline: 1px solid rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(21, 60, 40, 0.16);
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
        }
        .hero-find-card:hover {
          box-shadow: 0 36px 64px rgba(8, 32, 20, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.88);
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
                <div className="hero-find-card w-100 text-start px-3 px-lg-4 py-4">
                  <div aria-hidden className="mb-2" style={{ opacity: 0.55 }}>
                    <span
                      style={{
                        letterSpacing: '0.45em',
                        textTransform: 'uppercase',
                        fontSize: 9,
                        fontWeight: 700,
                        color: CM_GREEN,
                      }}
                    >
                      Near you
                    </span>
                  </div>
                  <div className="mb-4">
                    <h2
                      className="mb-2 text-center text-lg-start"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(1rem, 0.92rem + 0.35vw, 1.2rem)',
                        fontWeight: 700,
                        color: '#162118',
                        lineHeight: 1.25,
                        letterSpacing: '-0.015em',
                        margin: 0,
                      }}
                    >
                      Search rooms anywhere
                    </h2>
                    <p className="small mb-4 mb-lg-3" style={{ color: '#4f5d52', lineHeight: 1.5, maxWidth: 460 }}>
                      Trusted listings for the blocks you walk—open search for neighborhoods, stays, or move-in timing.
                    </p>
                  </div>

                  <CommunitySearchBar onOpen={openSearch} />

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
