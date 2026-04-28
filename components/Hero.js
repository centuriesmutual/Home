'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
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
        .hero-find-card:focus-within:not(:focus-visible) {
          outline: none;
        }
        .booking-search-strip {
          background: #fff;
          border-radius: 8px;
          border: 3px solid #febb02;
          box-shadow: 0 2px 14px rgba(0, 0, 0, 0.14);
          overflow: hidden;
        }
        .booking-field {
          min-height: 68px;
          padding: 10px 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1 1 auto;
          min-width: 0;
        }
        @media (min-width: 992px) {
          .booking-field--where {
            flex: 1.35 1 0%;
          }
          .booking-field--date {
            flex: 1 1 0%;
            min-width: 120px;
          }
          .booking-field--guests {
            flex: 0.85 1 140px;
            max-width: 200px;
          }
        }
        .booking-lbl {
          font-size: 12px;
          font-weight: 600;
          color: #262626;
          margin: 0 0 4px;
          line-height: 1.2;
          display: block;
        }
        .booking-inp {
          width: 100%;
          border: none;
          padding: 0;
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          color: #262626;
          outline: none;
          background: transparent;
          font-family:
            BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        .booking-inp::placeholder {
          color: #6b6b6b;
          font-weight: 400;
        }
        .booking-styled-select {
          width: 100%;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='%23555'%3E%3Cpath d='M1 1.5 6 6 11 1.5' stroke='%23555' stroke-width='1.4' fill='none'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 2px center;
          padding-right: 20px;
        }
        input[type='date'].booking-inp {
          min-height: 22px;
          color-scheme: light;
          cursor: pointer;
        }
        input[type='date'].booking-inp::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.7;
        }
        .booking-hint {
          font-size: 11px;
          color: #6b6b6b;
          margin-top: 2px;
          line-height: 1;
        }
        .booking-divider-v {
          width: 1px;
          flex: 0 0 1px;
          background: #e7e7e7;
          align-self: stretch;
        }
        .booking-divider-h {
          height: 1px;
          width: 100%;
          background: #e7e7e7;
        }
        .booking-search-btn {
          background: #14432a;
          color: #fff;
          border: none;
          font-size: 16px;
          font-weight: 600;
          padding: 0 min(36px, 5vw);
          min-height: 56px;
          cursor: pointer;
          transition: opacity 0.15s ease;
          font-family: inherit;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .booking-search-btn:hover {
          opacity: 0.93;
        }
        select.booking-select {
          cursor: pointer;
          font-weight: 500;
        }
        @media (min-width: 992px) {
          .booking-search-btn {
            min-height: unset;
            min-width: 120px;
            align-self: stretch;
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
                <form onSubmit={handleHeroSearch} className="hero-find-card w-100 text-start px-3 px-lg-4 py-4" lang="en-US" noValidate>
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

                  {/* Booking.com–style omnibox: yellow accent border, single strip, dense labels */}
                  <div className="booking-search-strip">
                    <div className="d-flex flex-column flex-lg-row align-items-lg-stretch">
                      <div className="booking-field booking-field--where">
                        <label htmlFor="hero-room-where" className="booking-lbl">
                          Where
                        </label>
                        <div className="d-flex align-items-center gap-2 mt-1">
                          <MapPinIcon style={{ width: 22, height: 22, color: '#262626', flexShrink: 0, opacity: 0.72 }} aria-hidden />
                          <input
                            id="hero-room-where"
                            name="location"
                            type="search"
                            autoComplete="off"
                            spellCheck={false}
                            enterKeyHint="search"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="City, neighborhood, or landmark"
                            className="booking-inp flex-grow-1"
                          />
                        </div>
                      </div>

                      <div className="d-none d-lg-block booking-divider-v" aria-hidden />
                      <div className="booking-divider-h d-lg-none" aria-hidden />

                      <div className="booking-field booking-field--date">
                        <label htmlFor="hero-room-in" className="booking-lbl">
                          Check-in
                        </label>
                        <input
                          id="hero-room-in"
                          name="checkIn"
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="booking-inp mt-1"
                        />
                        <span className="booking-hint">mm/dd/yyyy</span>
                      </div>

                      <div className="d-none d-lg-block booking-divider-v" aria-hidden />
                      <div className="booking-divider-h d-lg-none" aria-hidden />

                      <div className="booking-field booking-field--date">
                        <label htmlFor="hero-room-out" className="booking-lbl">
                          Check-out
                        </label>
                        <input
                          id="hero-room-out"
                          name="checkOut"
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          min={checkIn || undefined}
                          className="booking-inp mt-1"
                        />
                        <span className="booking-hint">mm/dd/yyyy</span>
                      </div>

                      <div className="d-none d-lg-block booking-divider-v" aria-hidden />
                      <div className="booking-divider-h d-lg-none" aria-hidden />

                      <div className="booking-field booking-field--guests">
                        <label htmlFor="hero-room-guests" className="booking-lbl">
                          Guests
                        </label>
                        <select
                          id="hero-room-guests"
                          name="adults"
                          value={adults}
                          onChange={(e) => setAdults(e.target.value)}
                          className="booking-inp booking-select booking-styled-select mt-1 py-1"
                        >
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={String(n)}>
                              {n} guest{n > 1 ? 's' : ''}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="d-none d-lg-block booking-divider-v" aria-hidden />
                      <div className="booking-divider-h d-lg-none" aria-hidden />

                      <div className="flex-shrink-0 d-flex align-items-lg-stretch">
                        <button type="submit" className="booking-search-btn w-100" aria-label="Search rooms">
                          <MagnifyingGlassIcon strokeWidth={2} style={{ width: 22, height: 22, flexShrink: 0 }} aria-hidden />
                          Search
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
