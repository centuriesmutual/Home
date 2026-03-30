'use client'

/**
 * On-brand blockchain illustration for Patented Technology (Centuries Mutual green).
 */
export default function BlockchainIllustration({ className = '' }) {
  const primary = '#14432A'
  const primaryMid = '#1d5a38'
  const primaryLight = 'rgba(20, 67, 42, 0.12)'
  const stroke = 'rgba(20, 67, 42, 0.35)'

  return (
    <div
      className={className}
      style={{ maxWidth: '440px', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
      aria-hidden
    >
      <svg
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <linearGradient id="blockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primary} />
            <stop offset="100%" stopColor={primaryMid} />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
          </filter>
        </defs>

        <rect x="8" y="8" width="384" height="284" rx="20" fill={primaryLight} />

        {/* Chain links between blocks */}
        <path
          d="M 88 118 L 132 118 M 188 118 L 232 118 M 288 118 L 328 118"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 200 158 L 200 198"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Top row blocks */}
        <g filter="url(#softShadow)">
          <rect x="48" y="78" width="72" height="72" rx="12" fill="url(#blockGrad)" />
          <rect x="148" y="78" width="72" height="72" rx="12" fill="url(#blockGrad)" opacity="0.88" />
          <rect x="248" y="78" width="72" height="72" rx="12" fill="url(#blockGrad)" opacity="0.76" />
        </g>

        {/* Hash lines on blocks */}
        <path
          d="M 62 98 h 44 M 62 108 h 36 M 62 118 h 44 M 62 128 h 30"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 162 98 h 44 M 162 108 h 36 M 162 118 h 44 M 162 128 h 30"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 262 98 h 44 M 262 108 h 36 M 262 118 h 44 M 262 128 h 30"
          stroke="rgba(255,255,255,0.38)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Center hub */}
        <circle cx="200" cy="198" r="44" fill="#ffffff" stroke={primary} strokeWidth="3" filter="url(#softShadow)" />
        <path
          d="M 200 176 v 12 M 200 208 v 12 M 176 198 h 12 M 212 198 h 12 M 186 186 l 10 10 M 204 204 l 10 10 M 214 186 l-10 10 M 196 204 l-10 10"
          stroke={primary}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Bottom blocks */}
        <g filter="url(#softShadow)">
          <rect x="98" y="218" width="72" height="56" rx="10" fill={primary} opacity="0.9" />
          <rect x="230" y="218" width="72" height="56" rx="10" fill={primaryMid} opacity="0.95" />
        </g>
        <path
          d="M 112 238 h 44 M 112 248 h 32 M 244 238 h 40 M 244 248 h 28"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Ledger / lock accent */}
        <rect x="318" y="188" width="52" height="52" rx="10" fill="#ffffff" stroke={primary} strokeWidth="2" opacity="0.95" />
        <path
          d="M 332 218 h 24 a 6 6 0 0 0 6-6 v-6 a 10 10 0 0 0-20 0 v 6"
          fill="none"
          stroke={primary}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
