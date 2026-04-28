'use client'

import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  HeartIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ClockIcon,
  DocumentTextIcon,
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
  const rows = [
    { label: 'Compatible Matching', status: 'Active' },
    { label: 'Verified Profiles', status: 'Enabled' },
    { label: 'Secure Messaging', status: 'Secured' },
    { label: 'Trust Score System', status: 'Integrated', last: true },
  ].map((r) => ({ ...r, status: `✓ ${r.status}` }))

  return (
    <WindowShell eyebrow="Centuries Mutual" title="Roommate Matching Dashboard" badge="Live" badgeTone="live">
      <div style={{ padding: 16 }}>
        <SearchField placeholder="Search roommates by city, lifestyle, trust score, budget…" />
        <div className="d-flex flex-wrap gap-2 mb-3" aria-hidden>
          {['Trust 8+', 'Same city', 'Non-smoking', 'Pet-friendly'].map((c) => (
            <span key={c} style={{ fontSize: 11, padding: '5px 10px', borderRadius: 999, background: '#fff', border: '1px solid #d1d5db', color: '#374151', fontWeight: 600 }}>
              {c}
            </span>
          ))}
        </div>
        <div className="row g-2 mb-3">
          <div className="col-6">
            <div className="h-100 p-3 rounded-3 border bg-white" style={{ borderColor: '#e5e7eb' }}>
              <UserGroupIcon style={{ width: 28, height: 28, color: green, marginBottom: 8 }} aria-hidden />
              <div style={{ fontSize: 22, fontWeight: 800, color: green, lineHeight: 1 }}>5,000+</div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Verified Members</div>
            </div>
          </div>
          <div className="col-6">
            <div className="h-100 p-3 rounded-3 border bg-white" style={{ borderColor: '#e5e7eb' }}>
              <HeartIcon style={{ width: 28, height: 28, color: green, marginBottom: 8 }} aria-hidden />
              <div style={{ fontSize: 22, fontWeight: 800, color: green, lineHeight: 1 }}>95%</div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600 }}>Match Rate</div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>System Features</p>
        <FeatureTable rows={rows} />
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
