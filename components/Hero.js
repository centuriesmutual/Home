'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { MagnifyingGlassIcon, MapPinIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'
import RoomSearchModal from './RoomSearchModal'

const CM_GREEN = '#14432A'

export default function Hero() {
  const [roomModalOpen, setRoomModalOpen] = useState(false)

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
        .hero-find-card:focus-visible {
          outline: 3px solid rgba(255, 247, 220, 0.95);
          outline-offset: 3px;
        }
      `}</style>
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
                className="display-3 text-white fw-bold mb-3 text-center text-lg-start"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontSize: 'calc(1.8rem + 1.5vw)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="d-none d-md-inline">Your Community Brokerage:</span>
                <span className="d-md-none" style={{ fontSize: 'calc(1.4rem + 1.2vw)' }}>
                  Your Community Brokerage:
                </span>
              </motion.h1>
              {/* Neighborhood room finder — immersive, solid surfaces (no gradient) */}
              <motion.div
                className="mb-4 px-3 px-sm-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ position: 'relative', zIndex: 5 }}
              >
                <button
                  type="button"
                  onClick={() => setRoomModalOpen(true)}
                  className="hero-find-card border-0 w-100 text-start px-4 px-lg-5 py-4"
                  aria-haspopup="dialog"
                  aria-expanded={roomModalOpen}
                  aria-label="Open room search — where, dates, guests"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <div aria-hidden style={{ marginBottom: 12, opacity: 0.55 }}>
                    <span style={{ letterSpacing: '0.55em', textTransform: 'uppercase', fontSize: 9, fontWeight: 700, color: CM_GREEN }}>
                      Near you
                    </span>
                  </div>
                  <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap">
                    <div className="d-flex gap-3 min-w-0 flex-grow-1">
                      <div
                        aria-hidden
                        className="flex-shrink-0 rounded-3 d-flex align-items-center justify-content-center mt-1"
                        style={{
                          width: 44,
                          height: 44,
                          background: 'rgba(20,67,42,0.08)',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
                          border: '1px solid rgba(20,67,42,0.1)',
                        }}
                      >
                        <MagnifyingGlassIcon width={22} strokeWidth={2} style={{ color: CM_GREEN }} aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <span
                          style={{
                            display: 'block',
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                            fontWeight: 700,
                            color: '#162118',
                            lineHeight: 1.25,
                            letterSpacing: '-0.02em',
                          }}
                        >
                          Search rooms anywhere
                        </span>
                        <span
                          style={{
                            display: 'block',
                            marginTop: 8,
                            fontSize: '0.9rem',
                            color: '#4f5d52',
                            lineHeight: 1.55,
                            maxWidth: 420,
                          }}
                        >
                          Find a roommate-friendly listing on the blocks you actually walk—the same trust tools we use everywhere on Centuries Mutual.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="d-none d-lg-flex mt-4 align-items-center flex-wrap rounded-4 px-3 py-3 gap-3 gap-lg-4 flex-grow-1"
                    style={{
                      background: '#ffffff',
                      border: `1px solid rgba(21,60,40,0.1)`,
                      boxShadow:
                        '0 14px 32px rgba(22,62,43,0.07), inset 0 1px 0 rgba(255,255,255,1)',
                      rowGap: 12,
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 min-w-0 flex-shrink-1" style={{ flex: '1 1 140px' }}>
                      <MapPinIcon width={20} aria-hidden strokeWidth={2} style={{ color: CM_GREEN, opacity: 0.9 }} />
                      <div className="min-w-0">
                        <span className="d-block text-uppercase" style={{ fontSize: 9, letterSpacing: '0.16em', color: '#6b766d', fontWeight: 700 }}>
                          Where
                        </span>
                        <span className="d-block fw-semibold text-dark text-opacity-85 text-truncate" style={{ fontSize: 13 }}>
                          Neighborhood or city
                        </span>
                      </div>
                    </div>
                    <div aria-hidden style={{ alignSelf: 'stretch', flex: '0 0 1px', borderLeft: '1px dashed rgba(20,67,42,0.2)', minHeight: 42 }} />

                    <div className="d-flex align-items-center gap-2" style={{ flex: '0 0 auto' }}>
                      <CalendarDaysIcon width={20} aria-hidden strokeWidth={2} style={{ color: CM_GREEN, opacity: 0.9 }} />
                      <div>
                        <span className="d-block text-uppercase" style={{ fontSize: 9, letterSpacing: '0.16em', color: '#6b766d', fontWeight: 700 }}>
                          Dates
                        </span>
                        <span className="fw-semibold text-secondary" style={{ fontSize: 13 }}>
                          Move-in window
                        </span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2" style={{ flex: '0 0 auto' }}>
                      <UsersIcon width={20} aria-hidden strokeWidth={2} style={{ color: CM_GREEN, opacity: 0.9 }} />
                      <div>
                        <span className="d-block text-uppercase" style={{ fontSize: 9, letterSpacing: '0.16em', color: '#6b766d', fontWeight: 700 }}>
                          Guests
                        </span>
                        <span className="fw-semibold text-secondary" style={{ fontSize: 13 }}>
                          Who&apos;s joining
                        </span>
                      </div>
                    </div>

                    <span
                      className="ms-lg-auto rounded-pill text-white fw-bold px-4 py-2 flex-shrink-0"
                      style={{ fontSize: 13, letterSpacing: '0.06em', background: CM_GREEN, boxShadow: '0 8px 20px rgba(20,67,42,0.28)' }}
                    >
                      Explore
                    </span>
                  </div>

                  <div
                    className="d-lg-none mt-3 d-flex align-items-start gap-3 flex-wrap px-3 py-3 rounded-4"
                    style={{
                      background: '#ffffff',
                      border: `1px solid rgba(21,60,40,0.09)`,
                    }}
                  >
                    <div className="d-flex gap-4 flex-grow-1 flex-wrap">
                      <div className="d-flex align-items-center gap-2">
                        <MapPinIcon width={18} aria-hidden strokeWidth={2} style={{ color: CM_GREEN }} />
                        <span className="small fw-semibold text-dark opacity-85">City &amp; hood</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <CalendarDaysIcon width={18} aria-hidden strokeWidth={2} style={{ color: CM_GREEN }} />
                        <span className="small fw-semibold text-secondary">Dates</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <UsersIcon width={18} aria-hidden strokeWidth={2} style={{ color: CM_GREEN }} />
                        <span className="small fw-semibold text-secondary">Guests</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3" style={{ borderTop: `1px solid rgba(21,60,40,0.08)` }}>
                    <p className="mb-0" style={{ fontSize: '0.85rem', color: '#3d4a41', lineHeight: 1.55 }}>
                      Neighborhood-minded filters · walkable context · listings backed by the Centuries Mutual trust framework
                    </p>
                  </div>
                </button>
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
              {/* Large proportional hero illustration (pairs with inset image in copy column) */}
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

      <RoomSearchModal open={roomModalOpen} onClose={() => setRoomModalOpen(false)} />
    </section>
  )
}
