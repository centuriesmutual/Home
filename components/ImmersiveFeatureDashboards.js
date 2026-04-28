'use client'

import { useState } from 'react'

import {
  MagnifyingGlassIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ClockIcon,
  DocumentTextIcon,
  MapPinIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline'

const border = '1px solid #e5e7eb'
const panelBg = '#f9fafb'
const green = '#14432A'
const pillOk = { background: '#ecfdf5', color: '#047857', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 6 }
const pillWarn = { background: '#fffbeb', color: '#b45309', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 6 }

function WindowShell({ eyebrow, title, badge, badgeTone, children }) {
  const badgeStyle =
    badgeTone === 'live'
      ? { ...pillOk, color: '#166534', display: 'inline-flex', alignItems: 'center', gap: 6 }
      : badgeTone === 'muted'
        ? { fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.92)' }
        : {
            fontSize: 11,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.85)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }

  return (
    <div
      className="w-100"
      style={{
        borderRadius: 14,
        overflow: 'hidden',
        border: `1px solid rgba(20, 67, 42, 0.22)`,
        boxShadow:
          '0 32px 64px -16px rgba(15, 51, 33, 0.35), 0 12px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
        background: '#ffffff',
      }}
    >
      <div
        style={{
          background: `linear-gradient(180deg, #0f3321 0%, ${green} 55%, #1a5938 100%)`,
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <span className="d-flex gap-2" aria-hidden>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
          </span>
          <div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.72)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>{eyebrow}</div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.94rem', lineHeight: 1.25 }}>{title}</div>
          </div>
        </div>
        {badge && (
          <span style={badgeStyle}>
            {badgeTone === 'live' && (
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 0 3px rgba(34,197,94,0.35)',
                  display: 'inline-block',
                }}
                aria-hidden
              />
            )}
            {badge}
          </span>
        )}
      </div>
      <div style={{ background: panelBg, borderTop: border }}>{children}</div>
    </div>
  )
}

function SearchField({ placeholder }) {
  return (
    <div className="position-relative mb-3">
      <MagnifyingGlassIcon
        className="position-absolute"
        style={{ left: 12, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, color: '#6b7280' }}
        aria-hidden
      />
      <input
        readOnly
        type="search"
        className="w-100 border-0 shadow-sm"
        placeholder={placeholder}
        style={{
          padding: '11px 14px 11px 40px',
          borderRadius: 10,
          fontSize: 13,
          background: '#fff',
          border: '1px solid #d1d5db',
          color: '#374151',
        }}
        aria-label={placeholder}
      />
    </div>
  )
}

function FeatureTable({ rows }) {
  return (
    <div className="rounded-3 overflow-hidden border" style={{ borderColor: '#e5e7eb', background: '#fff' }}>
      <div
        className="d-flex justify-content-between align-items-center px-3 py-2"
        style={{ background: '#f3f4f6', borderBottom: border, fontSize: 11, fontWeight: 700, color: '#6b7280', letterSpacing: '0.04em', textTransform: 'uppercase' }}
      >
        <span>Feature</span>
        <span>Status</span>
      </div>
      {rows.map((r) => (
        <div
          key={r.label}
          className="d-flex justify-content-between align-items-center px-3 py-2"
          style={{ borderBottom: `1px solid ${r.last ? 'transparent' : '#f3f4f6'}`, fontSize: 13 }}
        >
          <span style={{ color: '#111827', fontWeight: 500 }}>{r.label}</span>
          <span style={r.warn ? pillWarn : pillOk}>{r.status}</span>
        </div>
      ))}
    </div>
  )
}

export function RoommateMatchingDashboardImmersive() {
  const [location, setLocation] = useState('Dallas metro — Uptown · Oak Lawn')
  const [budgetMin, setBudgetMin] = useState('600')
  const [budgetMax, setBudgetMax] = useState('1200')
  const [trustMin, setTrustMin] = useState('8')
  const [moveIn, setMoveIn] = useState('next-30')
  const [roomPref, setRoomPref] = useState('private')
  const [sortBy, setSortBy] = useState('compat')
  const [sameCity, setSameCity] = useState(true)
  const [nonSmoking, setNonSmoking] = useState(true)
  const [petsOk, setPetsOk] = useState(false)
  const [quiet, setQuiet] = useState(false)

  function resetFilters() {
    setLocation('Dallas metro — Uptown · Oak Lawn')
    setBudgetMin('600')
    setBudgetMax('1200')
    setTrustMin('8')
    setMoveIn('next-30')
    setRoomPref('private')
    setSortBy('compat')
    setSameCity(true)
    setNonSmoking(true)
    setPetsOk(false)
    setQuiet(false)
  }

  const previewMatches = [
    {
      initials: 'A.M.',
      match: 96,
      trust: '9.2',
      title: 'Healthcare · night shift friendly',
      snippet: 'Quiet AMs, shared kitchen respect, references on file.',
      tags: ['Verified', 'Non-smoking', 'Same district'],
    },
    {
      initials: 'R.K.',
      match: 91,
      trust: '8.6',
      title: 'Remote worker · two cats',
      snippet: 'Separate bath preferred; split utilities in app.',
      tags: ['Pet-friendly', 'Budget aligned'],
    },
    {
      initials: 'J.D.',
      match: 88,
      trust: '8.4',
      title: 'Grad program · 12-mo lease OK',
      snippet: 'Flexible move-in; roommate agreement ready to sign.',
      tags: ['Trust 8+', 'Messages on-platform'],
    },
  ]

  const fieldLabel = {
    fontSize: 11,
    fontWeight: 700,
    color: '#4b5563',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    marginBottom: 6,
    display: 'block',
  }
  const inputBase = {
    width: '100%',
    fontSize: 13,
    padding: '8px 10px',
    borderRadius: 8,
    border: '1px solid #cbd5e1',
    background: '#fff',
    color: '#111827',
    outline: 'none',
  }

  return (
    <WindowShell eyebrow="Centuries Mutual" title="Roommate Matching Dashboard" badge="Live" badgeTone="live">
      {/* Search & sort toolbar */}
      <div style={{ padding: '12px 14px', background: '#fff', borderBottom: border }}>
        <div className="row g-2 align-items-end">
          <div className="col-12 col-lg-6 col-xl-5">
            <label htmlFor="rm-dash-loc" style={fieldLabel}>
              <MapPinIcon
                aria-hidden
                style={{ width: 14, height: 14, display: 'inline', verticalAlign: 'middle', marginRight: 4, color: green }}
              />
              Location & area
            </label>
            <div className="position-relative">
              <MagnifyingGlassIcon
                className="position-absolute"
                style={{ left: 10, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: '#64748b' }}
                aria-hidden
              />
              <input
                id="rm-dash-loc"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                autoComplete="off"
                aria-label="Search by city neighborhood or commute"
                style={{
                  ...inputBase,
                  paddingLeft: 36,
                  borderColor: '#94a3b8',
                  fontWeight: 500,
                }}
              />
            </div>
          </div>
          <div className="col-6 col-lg-3 col-xl-2">
            <label htmlFor="rm-sort" style={fieldLabel}>
              Sort results
            </label>
            <select
              id="rm-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                ...inputBase,
                cursor: 'pointer',
                appearance: 'auto',
              }}
              aria-label="Sort roommate results"
            >
              <option value="compat">Best compatibility</option>
              <option value="trust">Highest trust first</option>
              <option value="rent">Closest rent alignment</option>
              <option value="movein">Soonest move-in</option>
            </select>
          </div>
          <div className="col-6 col-lg-3 col-xl-5">
            <button
              type="button"
              className="w-100 border-0 fw-semibold rounded-3"
              style={{
                padding: '10px 16px',
                background: green,
                color: '#fff',
                fontSize: 14,
                boxShadow: '0 10px 20px rgba(20,67,42,0.25)',
              }}
              aria-label="Run search with current criteria"
            >
              Search&nbsp;roommates
            </button>
          </div>
        </div>
      </div>

      <div className="row g-0 flex-column flex-xl-row">
        {/* Filter column */}
        <div
          className="col-xl-4 border-b border-slate-200 xl:border-b-0 xl:border-e xl:border-slate-200"
          style={{ background: '#f1f5f9', minHeight: 320 }}
        >
          <div
            style={{
              padding: '14px 14px 10px',
              borderBottom: border,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: '#e2e8f0',
            }}
          >
            <FunnelIcon style={{ width: 18, height: 18, color: '#334155' }} aria-hidden />
            <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: '0.08em', color: '#1e293b', textTransform: 'uppercase' }}>
              Narrow your search
            </span>
          </div>

          <div className="p-3" style={{ overflowY: 'auto', maxHeight: 560 }}>
            <fieldset className="mb-4 border-0 m-0 p-0">
              <legend style={fieldLabel}>Monthly rent split (each)</legend>
              <div className="row g-2">
                <div className="col-6">
                  <label htmlFor="rm-min" style={{ fontSize: 12, color: '#64748b' }}>
                    Min&nbsp;$
                  </label>
                  <input
                    id="rm-min"
                    type="number"
                    min={100}
                    value={budgetMin}
                    onChange={(e) => setBudgetMin(e.target.value)}
                    style={{ ...inputBase }}
                    aria-label="Minimum rent per person"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="rm-max" style={{ fontSize: 12, color: '#64748b' }}>
                    Max&nbsp;$
                  </label>
                  <input
                    id="rm-max"
                    type="number"
                    min={100}
                    value={budgetMax}
                    onChange={(e) => setBudgetMax(e.target.value)}
                    style={{ ...inputBase }}
                    aria-label="Maximum rent per person"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="mb-4 border-0 m-0 p-0">
              <legend style={fieldLabel}>Minimum trust index</legend>
              <select
                value={trustMin}
                onChange={(e) => setTrustMin(e.target.value)}
                style={{ ...inputBase, cursor: 'pointer' }}
                aria-label="Minimum roommate trust score"
              >
                <option value="6">6+ Acceptable fit</option>
                <option value="7">7+ Good fit</option>
                <option value="8">8+ Strong fit</option>
                <option value="9">9+ Exceptional fit</option>
              </select>
              <p style={{ margin: '8px 0 0', fontSize: 11, color: '#64748b', lineHeight: 1.4 }}>
                Mirrors the same thresholds we use live when ranking matches—included here so prospects can filter like real applicants.
              </p>
            </fieldset>

            <fieldset className="mb-4 border-0 m-0 p-0">
              <legend style={fieldLabel}>Move-in readiness</legend>
              <select
                value={moveIn}
                onChange={(e) => setMoveIn(e.target.value)}
                style={{ ...inputBase, cursor: 'pointer' }}
                aria-label="Move-in timeframe"
              >
                <option value="next-14">Within 2&nbsp;weeks</option>
                <option value="next-30">Within 30&nbsp;days</option>
                <option value="next-90">Within 90&nbsp;days</option>
                <option value="flex">Flexible&nbsp;/ just browsing</option>
              </select>
            </fieldset>

            <fieldset className="mb-4 border-0 m-0 p-0">
              <legend style={fieldLabel}>Room preference</legend>
              <div className="d-flex flex-column gap-2">
                {[
                  { id: 'private', label: 'Private bedroom in shared unit' },
                  { id: 'shared', label: 'Shared bedroom (split rent)' },
                ].map((o) => (
                  <label
                    key={o.id}
                    className="d-flex align-items-start gap-2"
                    style={{ fontSize: 13, cursor: 'pointer', color: '#111827', fontWeight: 500 }}
                  >
                    <input
                      type="radio"
                      name="rm-roomPref"
                      value={o.id}
                      checked={roomPref === o.id}
                      onChange={() => setRoomPref(o.id)}
                      aria-label={o.label}
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mb-4 border-0 m-0 p-0">
              <legend style={fieldLabel}>Household compatibility</legend>
              <div className="d-flex flex-column gap-2">
                {[
                  { id: 'sameCity', label: 'Same city / commuting zone', val: sameCity, set: setSameCity },
                  { id: 'nonSmoking', label: 'Non-smoking household', val: nonSmoking, set: setNonSmoking },
                  { id: 'pets', label: 'Pet-friendly OK', val: petsOk, set: setPetsOk },
                  { id: 'quiet', label: 'Quiet hours respected', val: quiet, set: setQuiet },
                ].map((f) => (
                  <label
                    key={f.id}
                    className="d-flex align-items-center gap-2"
                    style={{ fontSize: 13, cursor: 'pointer', color: '#111827', fontWeight: 500 }}
                  >
                    <input
                      type="checkbox"
                      checked={f.val}
                      onChange={() => f.set((v) => !v)}
                      aria-label={f.label}
                    />
                    {f.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="d-grid gap-2">
              <button
                type="button"
                className="fw-semibold border rounded-3"
                style={{
                  padding: '10px',
                  borderColor: green,
                  color: green,
                  background: '#fff',
                  fontSize: 13,
                }}
                onClick={resetFilters}
                aria-label="Reset filters"
              >
                Reset filters
              </button>
            </div>
          </div>
        </div>

        {/* Results column */}
        <div className="col-xl-8" style={{ background: '#f8fafc' }}>
          <div style={{ padding: '14px 16px', borderBottom: border, background: '#fff' }}>
            <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
              <div style={{ fontSize: 13, color: '#334155', fontWeight: 600 }}>
                <span style={{ color: green, fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>142</span>
                &nbsp;profiles match&nbsp;your filters&nbsp;·&nbsp;network average match&nbsp;
                <span style={{ color: green, fontWeight: 800 }}>95%</span>
              </div>
              <div className="d-flex gap-2 align-items-center text-secondary" style={{ fontSize: 12 }}>
                <span className="d-inline-flex align-items-center gap-1">
                  <span
                    aria-hidden
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#22c55e',
                      boxShadow: '0 0 0 4px rgba(34,197,94,0.25)',
                    }}
                  />
                  Live index
                </span>
                <span>·</span>
                <span>5,000+ verified members</span>
              </div>
            </div>
          </div>

          <div className="p-3 pb-2" style={{ maxHeight: 420, overflowY: 'auto' }}>
            <p style={{ ...fieldLabel, marginBottom: 10 }}>Top compatibility previews</p>
            {previewMatches.map((m) => (
              <article
                key={m.initials}
                style={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 12,
                  padding: '12px 14px',
                  marginBottom: 10,
                  boxShadow: '0 8px 20px rgba(15,51,33,0.06)',
                }}
              >
                <div className="d-flex gap-3">
                  <div
                    aria-hidden
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      flexShrink: 0,
                      background: 'linear-gradient(145deg,#e2e8f0,#cbd5f5)',
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 800,
                      color: '#1e293b',
                      fontSize: 13,
                      border: '1px solid rgba(20,67,42,0.12)',
                    }}
                  >
                    {m.initials}
                  </div>
                  <div className="flex-grow-1 min-w-0">
                    <div className="d-flex flex-wrap justify-content-between gap-2 align-items-start">
                      <div>
                        <strong style={{ color: '#0f172a', fontSize: 14 }}>{m.title}</strong>
                        <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{m.snippet}</div>
                      </div>
                      <span
                        style={{
                          ...pillOk,
                          fontVariantNumeric: 'tabular-nums',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {m.match}% match
                      </span>
                    </div>
                    <div className="d-flex flex-wrap gap-2 align-items-center mt-2" style={{ fontSize: 11 }}>
                      <span style={{ ...pillOk, background: '#f0fdf4', color: green }}>Trust&nbsp;{m.trust}</span>
                      <span style={{ ...pillOk, background: '#f8fafc', color: '#475569', fontWeight: 600 }}>
                        Verified
                      </span>
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: '2px 8px',
                            borderRadius: 6,
                            background: '#f1f5f9',
                            color: '#475569',
                            fontWeight: 600,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ padding: '12px 16px 16px', background: '#f8fafc' }}>
            <p style={{ ...fieldLabel, marginBottom: 8 }}>Realtime platform features powering this search</p>
            <div className="rounded-3 overflow-hidden border bg-white" style={{ borderColor: '#e2e8f0' }}>
              <FeatureTable
                rows={[
                  { label: 'Compatible matching engine', status: 'Active' },
                  { label: 'Verified profiles & IDs', status: 'Enabled' },
                  { label: 'Secure in-app messaging', status: 'Secured' },
                  { label: 'Trust score indexing', status: 'Integrated', last: true },
                ].map((r) => ({ ...r, status: `✓ ${r.status}` }))}
              />
            </div>
          </div>
        </div>
      </div>
    </WindowShell>
  )
}


export function CommunicationDashboardImmersive() {
  const rows = [
    { label: 'Profile Privacy', status: 'Active' },
    { label: 'Feed & Updates', status: 'Enabled' },
    { label: 'Connection Controls', status: 'Secured' },
    { label: 'Identity Layer', status: 'Integrated' },
    { label: 'Live Messaging', status: 'Active', last: true },
  ].map((r) => ({ ...r, status: `✓ ${r.status}` }))

  return (
    <WindowShell eyebrow="Network" title="Communication Dashboard" badge="Secure session" badgeTone="muted">
      <div style={{ padding: 16 }}>
        <div className="d-flex gap-1 p-1 mb-3 rounded-3" style={{ background: '#e5e7eb', maxWidth: '100%' }}>
          {['Profile', 'Messages', 'Feed'].map((t, i) => (
            <button
              key={t}
              type="button"
              className="flex-grow-1 border-0 fw-semibold rounded-3"
              style={{
                padding: '8px 6px',
                fontSize: 12,
                background: i === 1 ? '#fff' : 'transparent',
                color: i === 1 ? green : '#6b7280',
                boxShadow: i === 1 ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              {t}
            </button>
          ))}
        </div>
        <SearchField placeholder="Search people, groups, threads, mentions…" />
        <div className="row g-2 mb-3">
          <div className="col-6">
            <div className="p-3 rounded-3 border bg-white h-100" style={{ borderColor: '#e5e7eb' }}>
              <PhoneIcon style={{ width: 26, height: 26, color: green, marginBottom: 6 }} aria-hidden />
              <div style={{ fontWeight: 700, color: '#111827', fontSize: 14 }}>Your Profile</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>Verified presence</div>
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: border, fontSize: 11, color: '#059669', fontWeight: 700 }}>● Identity verified</div>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 rounded-3 border bg-white h-100" style={{ borderColor: '#e5e7eb' }}>
              <ChatBubbleLeftRightIcon style={{ width: 26, height: 26, color: green, marginBottom: 6 }} aria-hidden />
              <div style={{ fontWeight: 700, color: '#111827', fontSize: 14 }}>Messages</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>Private threads</div>
              <div style={{ marginTop: 10, padding: '8px 10px', background: '#f9fafb', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 11, color: '#4b5563' }}>
                <strong style={{ color: '#111827' }}>Alex M.</strong> · “Lease signed — congrats…”
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>System Features</p>
        <FeatureTable rows={rows} />
      </div>
    </WindowShell>
  )
}

export function SecuritySystemDashboardImmersive() {
  const rows = [
    { label: 'All Systems Active', status: 'Online' },
    { label: 'Smart Sensors', status: 'Monitoring' },
    { label: 'Automated Alerts', status: 'Enabled', last: true },
  ].map((r) => ({ ...r, status: `✓ ${r.status}` }))

  return (
    <WindowShell eyebrow="Defense layer" title="Security System Dashboard" badge="Operational" badgeTone="muted">
      <div style={{ padding: 16 }}>
        <div className="row g-2 mb-3">
          <div className="col-6">
            <div
              className="p-3 rounded-3 text-center position-relative overflow-hidden border bg-white"
              style={{ borderColor: '#bbf7d0' }}
            >
              <HomeIcon style={{ width: 32, height: 32, color: green }} className="mb-2" aria-hidden />
              <div style={{ fontSize: 26, fontWeight: 800, color: green }}>100%</div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Coverage</div>
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 50% 0%, rgba(20,67,42,0.08), transparent 55%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 rounded-3 text-center border bg-white h-100" style={{ borderColor: '#e5e7eb' }}>
              <LockClosedIcon style={{ width: 32, height: 32, color: green }} className="mb-2" aria-hidden />
              <div style={{ fontSize: 22, fontWeight: 800, color: green }}>256-bit</div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Encryption</div>
              <div style={{ fontSize: 10, color: '#059669', fontWeight: 700, marginTop: 8 }}>TLS 1.3 · AEAD</div>
            </div>
          </div>
        </div>
        <div
          className="rounded-3 p-3 mb-3 border d-flex justify-content-between align-items-center bg-white"
          style={{ borderColor: '#d1fae5' }}
        >
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#065f46', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Fleet health</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#064e3b' }}>All checkpoints nominal</div>
          </div>
          <span style={{ ...pillOk, display: 'inline-flex', gap: 6, alignItems: 'center', fontSize: 12 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 0 6px rgba(34,197,94,0.28)',
              }}
              aria-hidden
            />
            Live monitoring
          </span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>System Status</p>
        <FeatureTable rows={rows} />
      </div>
    </WindowShell>
  )
}

export function EDocumentDashboardImmersive() {
  const docRows = [
    { label: 'Lease Agreement', status: 'Signed', warn: false },
    { label: 'Roommate Contract', status: 'Complete', warn: false },
    { label: 'Property Inspection', status: 'Pending', warn: true, last: true },
  ].map((r) => ({
    ...r,
    status: r.warn ? `⚠ ${r.status}` : `✓ ${r.status}`,
  }))

  const shortcuts = [
    { title: 'Digital Leases', sub: 'Electronic lease agreements', Icon: DocumentTextIcon },
    { title: 'Roommate Contracts', sub: 'Secure roommate agreements', Icon: DocumentCheckIcon },
    { title: 'Property Documents', sub: 'Complete property files', Icon: DocumentTextIcon },
    { title: 'Instant Access', sub: '24/7 document access', Icon: LockClosedIcon },
  ]

  return (
    <WindowShell eyebrow="Document center" title="eDocument Dashboard" badge="Sync on" badgeTone="live">
      <div style={{ padding: 16 }}>
        <div className="d-flex gap-2 mb-3" style={{ overflowX: 'auto' }}>
          {['All', 'Leases', 'Compliance', 'Pending'].map((t, i) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                fontWeight: i === 0 ? 700 : 600,
                padding: '6px 14px',
                borderRadius: 999,
                background: i === 0 ? green : '#fff',
                color: i === 0 ? '#fff' : '#4b5563',
                border: i === 0 ? 'none' : `1px solid #d1d5db`,
                whiteSpace: 'nowrap',
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <SearchField placeholder="Search documents, leases, riders, counterparties…" />
        <div className="row g-2 mb-3">
          <div className="col-6">
            <div className="p-3 rounded-3 border bg-white">
              <DocumentCheckIcon style={{ width: 26, height: 26, color: green, marginBottom: 6 }} aria-hidden />
              <div style={{ fontSize: 24, fontWeight: 800, color: green }}>15</div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Active Leases</div>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 rounded-3 border bg-white">
              <ClockIcon style={{ width: 26, height: 26, color: green, marginBottom: 6 }} aria-hidden />
              <div style={{ fontSize: 24, fontWeight: 800, color: '#b45309' }}>3</div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Pending Docs</div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Document Status</p>
        <FeatureTable rows={docRows} />
        <p style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '16px 0 8px' }}>Shortcuts</p>
        <div className="row g-2">
          {shortcuts.map(({ title, sub, Icon }) => (
            <div key={title} className="col-6">
              <div
                role="presentation"
                className="p-3 h-100 rounded-3 border bg-white text-center"
                style={{ borderColor: '#e5e7eb', cursor: 'default' }}
              >
                <Icon style={{ width: 24, height: 24, color: green }} className="mb-2" aria-hidden />
                <div style={{ fontSize: 13, fontWeight: 700, color: '#111827', lineHeight: 1.25 }}>{title}</div>
                <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WindowShell>
  )
}
