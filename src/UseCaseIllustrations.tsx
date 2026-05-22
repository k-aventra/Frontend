/** Use case illustrations — pastel 3D-style featured art + line-art thumbs */

const stroke = '#141414'

const featuredPink = '#fde2f3'
const featuredPinkDeep = '#f8d4e8'
const brandRed = '#f02e65'
const brandPink = '#ff6b9d'
const barPurple = '#b88bc4'
const barLavender = '#d1d1e6'
const leafPurple = '#c9a8d4'

export function IllustrationFeatured() {
  return (
    <svg
      className="usecases-svg"
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="uc-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff5f9" />
          <stop offset="45%" stopColor={featuredPink} />
          <stop offset="100%" stopColor={featuredPinkDeep} />
        </linearGradient>
        <linearGradient id="uc-bar-a" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ffb3cc" />
          <stop offset="100%" stopColor={brandPink} />
        </linearGradient>
        <linearGradient id="uc-bar-b" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={brandPink} />
          <stop offset="100%" stopColor={brandRed} />
        </linearGradient>
        <linearGradient id="uc-bar-c" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#e88aaa" />
          <stop offset="100%" stopColor={barPurple} />
        </linearGradient>
        <linearGradient id="uc-bar-d" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={barPurple} />
          <stop offset="100%" stopColor="#8f7ab8" />
        </linearGradient>
        <linearGradient id="uc-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff9eb8" />
          <stop offset="100%" stopColor={brandRed} />
        </linearGradient>
        <filter id="uc-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#6b4a62" floodOpacity="0.14" />
        </filter>
        <filter id="uc-shadow-sm" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#6b4a62" floodOpacity="0.12" />
        </filter>
      </defs>

      <rect width="400" height="260" fill="url(#uc-bg)" />

      {/* Main dashboard window */}
      <g filter="url(#uc-shadow)">
        <rect x="98" y="42" width="214" height="148" rx="18" fill="#ffffff" />
        <rect x="98" y="42" width="214" height="32" rx="18" fill="#fff8fb" />
        <rect x="98" y="62" width="214" height="12" fill="#fff8fb" />
        <circle cx="118" cy="58" r="5" fill={brandRed} opacity="0.85" />
        <circle cx="134" cy="58" r="5" fill="#ffc2d6" />
        <circle cx="150" cy="58" r="5" fill="#ffe0ec" />

        {/* Line chart */}
        <path
          d="M118 118 C138 108, 152 125, 168 108 S198 92, 218 98 S248 78, 278 88"
          fill="none"
          stroke="url(#uc-line)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="278" cy="88" r="5" fill={brandRed} />

        {/* Bar chart */}
        <rect x="128" y="148" width="22" height="28" rx="5" fill="url(#uc-bar-a)" />
        <rect x="158" y="132" width="22" height="44" rx="5" fill="url(#uc-bar-b)" />
        <rect x="188" y="120" width="22" height="56" rx="5" fill="url(#uc-bar-c)" />
        <rect x="218" y="108" width="22" height="68" rx="5" fill="url(#uc-bar-d)" />
      </g>

      {/* Left — bar chart tile */}
      <g filter="url(#uc-shadow-sm)">
        <rect x="24" y="58" width="52" height="52" rx="12" fill="#ffffff" />
        <circle cx="50" cy="78" r="14" fill={brandRed} opacity="0.9" />
        <rect x="44" y="74" width="4" height="10" rx="1" fill="#fff" />
        <rect x="50" y="70" width="4" height="14" rx="1" fill="#fff" />
        <rect x="56" y="76" width="4" height="8" rx="1" fill="#fff" />
      </g>

      {/* Left — pie chart tile */}
      <g filter="url(#uc-shadow-sm)">
        <rect x="38" y="128" width="48" height="48" rx="12" fill="#ffffff" />
        <circle cx="62" cy="152" r="16" fill={barLavender} />
        <path
          d="M62 136 A16 16 0 0 1 76 152 L62 152 Z"
          fill={barPurple}
        />
        <path
          d="M62 152 A16 16 0 0 1 48 148 L62 152 Z"
          fill={brandPink}
        />
      </g>

      {/* Right — checklist tile */}
      <g filter="url(#uc-shadow-sm)">
        <rect x="318" y="48" width="56" height="56" rx="12" fill="#ffffff" />
        <rect x="332" y="62" width="28" height="4" rx="2" fill="#f0e8ee" />
        <rect x="332" y="72" width="22" height="4" rx="2" fill="#f0e8ee" />
        <rect x="332" y="82" width="24" height="4" rx="2" fill="#f0e8ee" />
        <rect x="328" y="60" width="10" height="10" rx="3" fill={brandRed} opacity="0.2" />
        <path
          d="M330 66 L333 69 L338 63"
          fill="none"
          stroke={brandRed}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="328" y="70" width="10" height="10" rx="3" fill={brandRed} opacity="0.2" />
        <path
          d="M330 76 L333 79 L338 73"
          fill="none"
          stroke={brandRed}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="328" y="80" width="10" height="10" rx="3" fill={brandRed} opacity="0.2" />
        <path
          d="M330 86 L333 89 L338 83"
          fill="none"
          stroke={brandRed}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Right — potted plant */}
      <g filter="url(#uc-shadow-sm)">
        <rect x="328" y="118" width="18" height="14" rx="4" fill={brandPink} />
        <ellipse cx="337" cy="118" rx="14" ry="4" fill={brandRed} opacity="0.85" />
        <ellipse cx="337" cy="108" rx="18" ry="14" fill={leafPurple} opacity="0.75" />
        <ellipse cx="325" cy="112" rx="12" ry="10" fill={barLavender} opacity="0.9" />
        <ellipse cx="349" cy="110" rx="11" ry="9" fill="#e8c4e8" />
      </g>

      {/* Bottom icon tiles */}
      <g filter="url(#uc-shadow-sm)">
        <rect x="118" y="198" width="40" height="36" rx="10" fill="#ffffff" />
        <circle cx="130" cy="212" r="5" fill={brandPink} />
        <circle cx="138" cy="212" r="5" fill={brandRed} />
        <circle cx="146" cy="212" r="5" fill={brandPink} />
        <path
          d="M128 222 Q138 228 148 222"
          fill="none"
          stroke={barPurple}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      <g filter="url(#uc-shadow-sm)">
        <rect x="168" y="198" width="40" height="36" rx="10" fill="#ffffff" />
        <text
          x="188"
          y="222"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill={brandRed}
          fontFamily="system-ui, sans-serif"
        >
          $
        </text>
      </g>

      <g filter="url(#uc-shadow-sm)">
        <rect x="218" y="198" width="40" height="36" rx="10" fill="#ffffff" />
        <circle cx="238" cy="216" r="10" fill="none" stroke={barPurple} strokeWidth="2.5" />
        <circle cx="238" cy="216" r="3" fill={barPurple} />
        <line
          x1="238"
          y1="216"
          x2="238"
          y2="208"
          stroke={barPurple}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="238"
          y1="216"
          x2="244"
          y2="220"
          stroke={brandRed}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export function IllustrationThumbBlue() {
  return (
    <svg className="usecases-svg-thumb" viewBox="0 0 120 88" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="120" height="88" fill="#e0f7fa" />
      <polyline
        points="16,58 36,42 56,52 76,28 96,38 104,32"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="76" cy="28" r="4" fill="#fff" stroke={stroke} strokeWidth="2" />
      <rect x="18" y="18" width="36" height="22" rx="4" fill="#fff" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

export function IllustrationThumbGreen() {
  return (
    <svg className="usecases-svg-thumb" viewBox="0 0 120 88" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="120" height="88" fill="#e8f5e9" />
      <rect x="22" y="24" width="76" height="48" rx="6" fill="#fff" stroke={stroke} strokeWidth="2" />
      <line x1="34" y1="38" x2="86" y2="38" stroke={stroke} strokeWidth="2" />
      <line x1="34" y1="50" x2="72" y2="50" stroke={stroke} strokeWidth="2" />
      <line x1="34" y1="62" x2="58" y2="62" stroke={stroke} strokeWidth="2" />
      <path d="M82 58 L94 46 L106 58 Z" fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

export function IllustrationThumbOrange() {
  return (
    <svg className="usecases-svg-thumb" viewBox="0 0 120 88" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="120" height="88" fill="#fff3e0" />
      <circle cx="60" cy="44" r="28" fill="#fff" stroke={stroke} strokeWidth="2" />
      <path d="M60 28 L60 44 L72 52" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="44" r="4" fill={stroke} />
      <rect x="22" y="18" width="30" height="16" rx="3" fill="#fff" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

export function IllustrationThumbLavender() {
  return (
    <svg className="usecases-svg-thumb" viewBox="0 0 120 88" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="120" height="88" fill="#ede7f6" />
      <path
        d="M60 22 L78 30 V44 C78 56 60 64 60 64 C60 64 42 56 42 44 V30 Z"
        fill="#fff"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M52 44 L58 50 L70 38"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
