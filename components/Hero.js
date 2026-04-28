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
              <motion.p
                className="lead text-white mb-4 text-center text-lg-start d-none d-md-block"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  fontSize: 'calc(1rem + 0.3vw)',
                  maxWidth: '100%',
                  opacity: 0.95,
                  lineHeight: 1.6,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Providing a secure network for digital payments and travel services powered by blockchain technology
              </motion.p>

              {/* Yellow Airbnb-style illustration: opens room search */}
              <motion.div
                className="mb-3 px-3 px-sm-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ position: 'relative', zIndex: 5 }}
              >
                <button
                  type="button"
                  onClick={() => setRoomModalOpen(true)}
                  className="border-0 w-100 rounded-5 text-start px-4 py-3"
                  aria-haspopup="dialog"
                  aria-expanded={roomModalOpen}
                  aria-label="Open room search — where, dates, guests"
                  style={{
                    cursor: 'pointer',
                    border: '2px solid rgba(251, 191, 36, 0.95)',
                    background:
                      'linear-gradient(120deg, #fffbeb 0%, #fef3c7 35%, #fde68a 70%, rgba(254,243,199,0.95) 100%)',
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.95)',
                  }}
                >
                  <div className="d-none d-md-flex align-items-center justify-content-between gap-3 flex-wrap">
                    <span className="d-flex align-items-center gap-2 text-dark fw-semibold opacity-85" style={{ fontSize: 13 }}>
                      <MagnifyingGlassIcon width={22} strokeWidth={2} className="flex-shrink-0" aria-hidden />
                      Search rooms anywhere
                    </span>
                  </div>
                  <div className="d-flex d-md-none align-items-center gap-3 text-dark fw-semibold" style={{ fontSize: 14 }}>
                    <MagnifyingGlassIcon width={22} strokeWidth={2} className="flex-shrink-0" aria-hidden />
                    Search rooms anywhere
                  </div>
                  <div className="d-none d-lg-flex mt-3 align-items-center justify-content-between rounded-4 px-3 py-2 gap-2 gap-lg-3 flex-wrap bg-white shadow-sm bg-opacity-90">
                    <div className="d-flex align-items-center gap-2 min-w-0 flex-grow-1" style={{ color: CM_GREEN }}>
                      <MapPinIcon width={18} aria-hidden strokeWidth={2} />
                      <span className="text-truncate fw-bold" style={{ fontSize: 13 }}>
                        Where · City or neighborhood
                      </span>
                    </div>
                    <div style={{ borderLeft: '1px solid #e8e8e8', height: 24 }} aria-hidden />
                    <div className="d-flex align-items-center gap-2 text-secondary fw-bold" style={{ fontSize: 12 }}>
                      <CalendarDaysIcon width={18} aria-hidden strokeWidth={2} />
                      Dates
                    </div>
                    <div className="d-flex align-items-center gap-2 text-secondary fw-bold" style={{ fontSize: 12 }}>
                      <UsersIcon width={18} aria-hidden strokeWidth={2} />
                      Guests
                    </div>
                    <span className="ms-auto rounded-pill text-white fw-bold px-3 py-1 flex-shrink-0" style={{ fontSize: 12, background: CM_GREEN }}>
                      Explore
                    </span>
                  </div>
                  <p className="mb-0 mt-3 small text-dark text-opacity-75 fst-italic" style={{ fontSize: '0.8125rem' }}>
                    Airbnb-style picks & filters · Centuries Mutual trust-backed listings
                  </p>
                </button>
              </motion.div>

              <motion.p
                className="lead text-white mb-4 text-center text-lg-start d-md-none"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  fontSize: 'calc(0.9rem + 0.2vw)',
                  maxWidth: '100%',
                  opacity: 0.95,
                  lineHeight: 1.6,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Providing a secure network for digital payments and travel services powered by blockchain technology
              </motion.p>
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
