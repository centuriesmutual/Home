'use client'

import { useEffect, useId, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  CalendarDaysIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const CM_GREEN = '#14432A'

/**
 * Airbnb-inspired room search overlay with Centuries Mutual palette and amber/yellow accents.
 */
export default function RoomSearchModal({ open, onClose }) {
  const router = useRouter()
  const headingId = useId()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const esc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open, onClose])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const fd = new FormData(e.target)
      const location = String(fd.get('location') ?? '').trim()
      const params = new URLSearchParams()
      if (location) params.set('location', location)
      const ci = fd.get('checkIn')
      const co = fd.get('checkOut')
      if (ci) params.set('checkIn', ci)
      if (co) params.set('checkOut', co)
      params.set('adults', fd.get('adults') ?? '1')
      onClose()
      router.push(`/rooms?${params.toString()}`)
    },
    [onClose, router]
  )

  if (!open) return null

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3 p-md-4" style={{ zIndex: 1100 }}>
      <button
        type="button"
        className="position-absolute top-0 start-0 w-100 h-100 border-0 p-0"
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          background: 'rgba(15, 51, 33, 0.52)',
          zIndex: 0,
          cursor: 'pointer',
        }}
        aria-label="Close search overlay"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        className="position-relative w-100 overflow-hidden shadow-lg"
        style={{
          maxWidth: 760,
          zIndex: 1,
          borderRadius: 24,
          border: '1px solid rgba(251, 191, 36, 0.45)',
          boxShadow: '0 40px 80px rgba(15,51,33,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="position-relative overflow-hidden px-4 py-4"
          style={{
            background:
              'linear-gradient(138deg, #fffbeb 0%, #fde68a 28%, #fbbf24 55%, #f59e0b 92%, #b45309 180%)',
            borderBottom: '1px solid rgba(180,83,9,0.25)',
          }}
        >
          <div
            className="position-absolute top-0 end-0 w-75 h-100 opacity-20"
            aria-hidden
            style={{
              backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.9), transparent 45%)',
            }}
          />
          <div className="position-relative d-flex justify-content-between align-items-start gap-3">
            <div>
              <Image
                src="/buffalo2.png"
                alt=""
                width={88}
                height={88}
                className="rounded-3 mb-3 d-none d-sm-block opacity-95"
                style={{
                  border: `2px solid ${CM_GREEN}`,
                  objectFit: 'cover',
                }}
              />
              <h2
                id={headingId}
                className="h3 fw-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: CM_GREEN, letterSpacing: '-0.02em', lineHeight: 1.2 }}
              >
                Find a room anywhere
              </h2>
              <p className="mb-0 small fw-semibold text-dark" style={{ fontSize: 14, opacity: 0.92, maxWidth: 460 }}>
                Search trusted stays and roommate-ready listings—same safeguards as everywhere on Centuries Mutual.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="btn rounded-circle flex-shrink-0 border-0 p-2"
              aria-label="Close"
              style={{ background: 'rgba(255,255,255,0.6)', color: CM_GREEN }}
            >
              <XMarkIcon aria-hidden width={26} height={26} strokeWidth={2} />
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-top px-4 pb-4 pt-4 rounded-bottom overflow-hidden position-relative border-0"
          style={{
            marginTop: 0,
            background: 'linear-gradient(185deg, #fafdfb 0%, #ffffff 40%, #f8faf9 100%)',
            borderTop: '1px solid #e4ebe6',
          }}
        >
          <div className="mb-4">
            <label htmlFor="cm-search-where" className="fw-bold text-muted text-uppercase d-block mb-2" style={{ fontSize: 11, letterSpacing: '0.14em', color: '#55645a' }}>
              Where
            </label>
            <div className="position-relative">
              <MapPinIcon
                className="position-absolute"
                aria-hidden
                style={{ width: 20, left: 16, top: '50%', transform: 'translateY(-50%)', color: CM_GREEN, opacity: 0.85 }}
              />
              <input
                id="cm-search-where"
                name="location"
                type="text"
                className="form-control border-2 py-3 ps-5 fw-medium"
                style={{
                  borderColor: '#d1e0d8',
                  borderRadius: 16,
                  background: '#fff',
                  boxShadow: 'inset 0 1px 2px rgba(20,67,42,0.06)',
                  color: '#0f172a',
                }}
                placeholder="City, neighborhood, or landmark…"
              />
            </div>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label htmlFor="cm-checkin" className="fw-bold text-muted text-uppercase d-flex align-items-center gap-2 mb-2" style={{ fontSize: 11, letterSpacing: '0.14em', color: '#55645a' }}>
                <CalendarDaysIcon aria-hidden width={14} strokeWidth={2.5} /> Check-in
              </label>
              <input
                id="cm-checkin"
                name="checkIn"
                type="date"
                className="form-control border-2 py-3 fw-medium"
                style={{ borderRadius: 16, borderColor: '#d1e0d8' }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="cm-checkout" className="fw-bold text-muted text-uppercase d-flex align-items-center gap-2 mb-2" style={{ fontSize: 11, letterSpacing: '0.14em', color: '#55645a' }}>
                <CalendarDaysIcon aria-hidden width={14} strokeWidth={2.5} /> Check-out
              </label>
              <input id="cm-checkout" name="checkOut" type="date" className="form-control border-2 py-3 fw-medium" style={{ borderRadius: 16, borderColor: '#d1e0d8' }} />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="cm-guests" className="fw-bold text-muted text-uppercase d-flex align-items-center gap-2 mb-2" style={{ fontSize: 11, letterSpacing: '0.14em', color: '#55645a' }}>
              <UsersIcon aria-hidden width={14} strokeWidth={2.5} /> Guests
            </label>
            <select
              id="cm-guests"
              name="adults"
              className="form-select border-2 py-3 fw-medium"
              defaultValue={1}
              style={{ borderRadius: 16, borderColor: '#d1e0d8', color: '#111827', cursor: 'pointer' }}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} adult{n > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-100 border-0 text-white fw-bold py-3 d-flex align-items-center justify-content-center gap-2 rounded-4"
            style={{
              fontSize: 17,
              background: CM_GREEN,
              letterSpacing: '0.03em',
              boxShadow: '0 14px 32px rgba(20,67,42,0.35), inset 0 1px 0 rgba(255,255,255,0.12)',
              transition: 'transform 0.12s ease, box-shadow 0.12s ease',
            }}
          >
            <MagnifyingGlassIcon aria-hidden width={22} strokeWidth={2} />
            Search rooms
          </button>
        </form>
      </div>
    </div>
  )
}
