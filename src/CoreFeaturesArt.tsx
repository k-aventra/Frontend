/** Minimal UI mockups for Core Features cards — coral accent matches design brief */

const accent = '#f97316'
const soft = '#fb923c'
const ink = '#94a3b8'
const panel = '#ffffff'

const svgProps = {
  className: 'core-feature-svg',
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
} as const

export function IconBadgeBars() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={accent} aria-hidden>
      <path d="M4 19h3v-9H4v9zm6 0h3V5h-3v14zm6 0h3v-7h-3v7zM2 21v2h20v-2H2z" />
    </svg>
  )
}

export function IconBadgeSchedule() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={accent} aria-hidden>
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
    </svg>
  )
}

export function IconBadgeTeam() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={accent} aria-hidden>
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  )
}

export function IconBadgeChat() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={accent} aria-hidden>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
    </svg>
  )
}

export function IconBadgeDashboard() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={accent} aria-hidden>
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  )
}

export function IllRealtimeAnalytics() {
  return (
    <svg {...svgProps} viewBox="0 0 320 200">
      <rect x="24" y="36" width="272" height="220" rx="14" fill={panel} opacity="0.98" />
      <rect x="44" y="56" width="72" height="10" rx="5" fill="#e2e8f0" />
      <rect x="44" y="78" width="120" height="8" rx="4" fill="#f1f5f9" />
      <rect x="44" y="108" width="36" height="92" rx="6" fill={accent} opacity="0.85" />
      <rect x="92" y="132" width="36" height="68" rx="6" fill={soft} opacity="0.55" />
      <rect x="140" y="96" width="36" height="104" rx="6" fill={accent} opacity="0.35" />
      <rect x="188" y="118" width="36" height="82" rx="6" fill="#fed7aa" />
      <rect x="236" y="146" width="36" height="54" rx="6" fill={accent} opacity="0.25" />
      <rect x="196" y="54" width="84" height="34" rx="17" fill="#fff7ed" stroke={accent} strokeWidth="1.5" />
      <text x="212" y="76" fill={accent} fontSize="11" fontWeight="700" fontFamily="system-ui">
        +24%
      </text>
    </svg>
  )
}

export function IllContentScheduling() {
  return (
    <svg {...svgProps} viewBox="0 0 320 200">
      <rect x="24" y="36" width="272" height="220" rx="14" fill={panel} />
      <rect x="44" y="54" width="56" height="22" rx="11" fill="#fff7ed" stroke={accent} strokeWidth="1.5" />
      <rect x="108" y="56" width="56" height="18" rx="9" fill="#f1f5f9" />
      <rect x="172" y="56" width="48" height="18" rx="9" fill="#f1f5f9" />
      <rect x="228" y="56" width="40" height="18" rx="9" fill="#f1f5f9" />
      <rect x="44" y="94" width="232" height="36" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
      <rect x="56" y="106" width="12" height="12" rx="3" fill={accent} opacity="0.6" />
      <rect x="78" y="104" width="140" height="8" rx="4" fill="#cbd5e1" />
      <rect x="78" y="116" width="90" height="6" rx="3" fill="#e2e8f0" />
      <rect x="44" y="142" width="232" height="36" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
      <rect x="56" y="154" width="12" height="12" rx="3" fill="#e2e8f0" />
      <rect x="78" y="152" width="110" height="8" rx="4" fill="#cbd5e1" />
      <rect x="78" y="164" width="70" height="6" rx="3" fill="#e2e8f0" />
    </svg>
  )
}

export function IllTeamCollaboration() {
  return (
    <svg {...svgProps} viewBox="0 0 320 200">
      <circle cx="78" cy="88" r="22" fill="#e0f2fe" stroke="#bae6fd" />
      <circle cx="118" cy="76" r="18" fill="#fef3c7" stroke="#fde68a" />
      <circle cx="154" cy="92" r="20" fill="#fce7f3" stroke="#fbcfe8" />
      <rect x="188" y="68" width="88" height="28" rx="14" fill="#fff7ed" stroke={accent} strokeWidth="1.5" />
      <path d="M204 82h56M212 88h40" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <rect x="56" y="128" width="208" height="88" rx="12" fill={panel} stroke="#e2e8f0" />
      <rect x="76" y="148" width="168" height="10" rx="5" fill="#e2e8f0" />
      <rect x="76" y="166" width="120" height="8" rx="4" fill="#f1f5f9" />
      <rect x="76" y="188" width="72" height="18" rx="9" fill={accent} opacity="0.9" />
      <text x="94" y="200" fill="#fff" fontSize="9" fontWeight="600" fontFamily="system-ui">
        Invite
      </text>
    </svg>
  )
}

export function IllStreamlineCommunication() {
  return (
    <svg {...svgProps} viewBox="0 0 480 200">
      <rect x="32" y="40" width="416" height="200" rx="16" fill={panel} stroke="#e2e8f0" />
      <rect x="52" y="62" width="92" height="156" rx="10" fill="#f8fafc" />
      <rect x="64" y="78" width="56" height="8" rx="4" fill="#e2e8f0" />
      <rect x="64" y="94" width="68" height="8" rx="4" fill="#cbd5e1" opacity="0.6" />
      <rect x="156" y="72" width="260" height="42" rx="14" fill="#fff7ed" stroke={accent} strokeWidth="1.25" />
      <rect x="172" y="84" width="160" height="8" rx="4" fill="#fdba74" opacity="0.35" />
      <rect x="172" y="96" width="110" height="6" rx="3" fill="#fed7aa" />
      <rect x="252" y="126" width="220" height="48" rx="18" fill="#f1f5f9" />
      <rect x="268" y="142" width="140" height="8" rx="4" fill="#cbd5e1" />
      <rect x="268" y="154" width="88" height="6" rx="3" fill="#e2e8f0" />
      <rect x="172" y="164" width="180" height="38" rx="14" fill="#fff7ed" stroke={accent} strokeOpacity="0.35" />
      <rect x="188" y="178" width="120" height="8" rx="4" fill={accent} opacity="0.25" />
    </svg>
  )
}

export function IllCustomizableDashboards() {
  return (
    <svg {...svgProps} viewBox="0 0 480 200">
      <rect x="28" y="38" width="424" height="206" rx="16" fill={panel} stroke="#e2e8f0" />
      <rect x="48" y="58" width="76" height="166" rx="10" fill="#f8fafc" />
      <rect x="60" y="74" width="52" height="8" rx="4" fill={accent} opacity="0.35" />
      <rect x="60" y="94" width="44" height="6" rx="3" fill="#cbd5e1" />
      <rect x="60" y="108" width="48" height="6" rx="3" fill="#cbd5e1" opacity="0.7" />
      <rect x="60" y="132" width="44" height="6" rx="3" fill="#cbd5e1" />
      <rect x="140" y="58" width="148" height="76" rx="12" fill="#fafafa" stroke="#e2e8f0" />
      <text x="156" y="82" fill={ink} fontSize="10" fontFamily="system-ui">
        Total Income
      </text>
      <text x="156" y="108" fill={accent} fontSize="18" fontWeight="700" fontFamily="system-ui">
        $48.2k
      </text>
      <rect x="304" y="58" width="132" height="76" rx="12" fill="#fafafa" stroke="#e2e8f0" />
      <text x="320" y="82" fill={ink} fontSize="10" fontFamily="system-ui">
        Profit
      </text>
      <path d="M320 112 L332 100 L348 108 L364 92 L380 104" stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="140" y="148" width="296" height="76" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeDasharray="4 4" />
      <rect x="156" y="168" width="88" height="36" rx="8" fill="#fff7ed" stroke={accent} strokeOpacity="0.4" />
    </svg>
  )
}
