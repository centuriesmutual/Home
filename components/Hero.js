'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPinIcon } from '@heroicons/react/24/outline'
import RoomSearchModal from './RoomSearchModal'

const CM_GREEN = '#14432A'

export default function Hero() {
  const [roomModalOpen, setRoomModalOpen] = useState(false)
  const [location, setLocation] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState('1')
  const router = useRouter()

  function handleHeroSearch(e) {
    e.preventDefault()
    const p = new URLSearchParams()
    if (location.trim()) p.set('location', location.trim())
    if (checkIn) p.set('checkIn', checkIn)
    if (checkOut) p.set('checkOut', checkOut)
    p.set('adults', adults || '1')
    router.push(`/rooms?${p.toString()}`)
  }

  const fieldLabel = {
    display: 'block',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#6b766d',
    marginBottom: 6,
  }
  const controlBase = {
    width: '100%',
    fontSize: 14,
    fontWeight: 500,
    color: '#162118',
    border: '1px solid #c9d4cc',
    borderRadius: 12,
    padding: '10px 12px',
    background: '#ffffff',
    outline: 'none',
  }

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
              {/* Professional room search — real controls, submits to /rooms */}
              <motion.div
                className="mb-4 px-3 px-sm-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ position: 'relative', zIndex: 5 }}
              >
                <form onSubmit={handleHeroSearch} className="hero-find-card w-100 text-start px-3 px-lg-4 py-4" noValidate>
                  <div aria-hidden className="mb-2" style={{ opacity: 0.55 }}>
                    <span style={{ letterSpacing: '0.45em', textTransform: 'uppercase', fontSize: 9, fontWeight: 700, color: CM_GREEN }}>
                      Near you
                    </span>
                  </div>
                  <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                    <div className="flex-grow-1 min-w-0" style={{ maxWidth: '100%' }}>
                      <h2
                        className="mb-2"
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
                      <p className="small mb-0" style={{ color: '#4f5d52', lineHeight: 1.5, maxWidth: 460 }}>
                        Trusted listings for the blocks you walk—refine dates and guests, then explore results.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRoomModalOpen(true)}
                      className="btn btn-sm flex-shrink-0 border-0 fw-semibold text-decoration-underline"
                      style={{
                        color: CM_GREEN,
                        background: 'transparent',
                        fontSize: 13,
                        boxShadow: 'none',
                      }}
                    >
                      Full search options
                    </button>
                  </div>

                  <div
                    className="rounded-4 px-2 py-2 px-lg-3 py-lg-3"
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(21,60,40,0.1)',
                      boxShadow: '0 12px 36px rgba(22,62,43,0.08), inset 0 1px 0 #fff',
                    }}
                  >
                    <div className="row g-3 g-xl-2 align-items-end">
                      <div className="col-12 col-lg-4">
                        <label htmlFor="hero-room-where" style={fieldLabel}>
                          Where
                        </label>
                        <div className="position-relative">
                          <MapPinIcon
                            className="position-absolute top-50 translate-middle-y"
                            style={{ left: 12, width: 18, height: 18, color: CM_GREEN, pointerEvents: 'none' }}
                            aria-hidden
                          />
                          <input
                            id="hero-room-where"
                            name="location"
                            type="search"
                            autoComplete="street-address"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Neighborhood or city"
                            className="border-0 shadow-none"
                            style={{ ...controlBase, paddingLeft: 40 }}
                          />
                        </div>
                      </div>
                      <div className="col-6 col-xl-2">
                        <label htmlFor="hero-room-in" style={fieldLabel}>
                          Check-in
                        </label>
                        <input
                          id="hero-room-in"
                          name="checkIn"
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="border-0"
                          style={controlBase}
                        />
                      </div>
                      <div className="col-6 col-xl-2">
                        <label htmlFor="hero-room-out" style={fieldLabel}>
                          Check-out
                        </label>
                        <input
                          id="hero-room-out"
                          name="checkOut"
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          min={checkIn || undefined}
                          className="border-0"
                          style={controlBase}
                        />
                      </div>
                      <div className="col-12 col-xl-2">
                        <label htmlFor="hero-room-guests" style={fieldLabel}>
                          Guests
                        </label>
                        <select
                          id="hero-room-guests"
                          name="adults"
                          value={adults}
                          onChange={(e) => setAdults(e.target.value)}
                          className="border-0"
                          style={{ ...controlBase, cursor: 'pointer' }}
                        >
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={String(n)}>
                              {n} guest{n > 1 ? 's' : ''}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-12 col-xl-auto d-flex">
                        <button
                          type="submit"
                          className="w-100 w-xl-auto border-0 fw-bold rounded-pill px-4 py-3 align-self-stretch align-self-xl-center"
                          style={{
                            fontSize: 14,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            background: CM_GREEN,
                            color: '#fff',
                            minHeight: 48,
                            minWidth: 'min(100%, 220px)',
                            boxShadow: '0 10px 24px rgba(20,67,42,0.3)',
                          }}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="mb-0 mt-3 pt-3" style={{ fontSize: '0.82rem', color: '#3d4a41', lineHeight: 1.55, borderTop: '1px solid rgba(21,60,40,0.08)' }}>
                    Neighborhood-minded filters · walkable context · listings backed by the Centuries Mutual trust framework
                  </p>
                </form>
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
