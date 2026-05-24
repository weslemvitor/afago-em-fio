export function MandalaMotif() {
  return (
    <svg className="absolute -bottom-5 -right-5 opacity-15" width="260" height="260" viewBox="0 0 260 260" aria-hidden="true">
      <circle cx="130" cy="130" r="100" stroke="#C4714A" strokeWidth="3" fill="none" />
      <circle cx="130" cy="130" r="70" stroke="#7A5C42" strokeWidth="2" fill="none" />
      <circle cx="130" cy="130" r="40" stroke="#C4714A" strokeWidth="2" fill="none" />
      <circle cx="130" cy="130" r="15" fill="#C4714A" opacity="0.4" />
      <ellipse cx="130" cy="130" rx="100" ry="50" stroke="#C4714A" strokeWidth="1.5" fill="none" transform="rotate(45 130 130)" />
      <ellipse cx="130" cy="130" rx="100" ry="50" stroke="#7A5C42" strokeWidth="1.5" fill="none" transform="rotate(-45 130 130)" />
    </svg>
  )
}

export function HookHeartMotif() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto my-auto opacity-80" fill="none" aria-hidden="true">
      <path d="M100 40 L100 130" stroke="#F5EFE4" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M100 130 Q100 160 80 170 Q60 178 55 165 Q50 150 65 145 Q80 140 100 160"
        stroke="#C4714A"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M85 40 Q100 30 115 40" stroke="#F5EFE4" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="140" cy="80" r="25" stroke="#C4714A" strokeWidth="2" fill="none" strokeDasharray="5 3" opacity="0.6" />
      <circle cx="60" cy="100" r="18" stroke="#E8DCCA" strokeWidth="1.5" fill="none" strokeDasharray="4 3" opacity="0.5" />
    </svg>
  )
}
