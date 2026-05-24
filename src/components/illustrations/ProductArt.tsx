type ProductArtProps = {
  visual: 'bag' | 'plant' | 'blanket'
}

export function ProductArt({ visual }: ProductArtProps) {
  if (visual === 'plant') {
    return <PlantHanger />
  }

  if (visual === 'blanket') {
    return <Blanket />
  }

  return <BeachBag />
}

function BeachBag() {
  return (
    <svg width="180" height="200" viewBox="0 0 180 200" fill="none" aria-hidden="true">
      <rect x="30" y="70" width="120" height="110" rx="8" fill="#E8DCCA" stroke="#C4714A" strokeWidth="2" />
      <path d="M60 70 Q60 40 90 40 Q120 40 120 70" stroke="#7A5C42" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <g opacity="0.4" stroke="#C4714A" strokeWidth="1">
        <circle cx="60" cy="105" r="10" fill="none" />
        <circle cx="90" cy="105" r="10" fill="none" />
        <circle cx="120" cy="105" r="10" fill="none" />
        <circle cx="75" cy="125" r="10" fill="none" />
        <circle cx="105" cy="125" r="10" fill="none" />
        <circle cx="60" cy="145" r="10" fill="none" />
        <circle cx="90" cy="145" r="10" fill="none" />
        <circle cx="120" cy="145" r="10" fill="none" />
      </g>
    </svg>
  )
}

function PlantHanger() {
  return (
    <svg width="160" height="200" viewBox="0 0 160 200" fill="none" aria-hidden="true">
      <path d="M80 90 Q80 60 65 45 Q50 30 55 20 Q65 35 80 55" fill="#74896B" opacity="0.7" />
      <path d="M80 90 Q80 55 98 38 Q112 24 108 14 Q95 32 80 55" fill="#74896B" opacity="0.8" />
      <path d="M80 90 Q60 75 45 80 Q35 82 38 70 Q52 72 80 88" fill="#74896B" opacity="0.6" />
      <line x1="80" y1="90" x2="80" y2="140" stroke="#7A5C42" strokeWidth="2" />
      <path d="M50 100 L80 140 L110 100" stroke="#C4714A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M50 115 L80 155 L110 115" stroke="#7A5C42" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M55 140 L65 175 L95 175 L105 140Z" fill="#E8DCCA" stroke="#C4714A" strokeWidth="1.5" />
      <ellipse cx="80" cy="140" rx="25" ry="5" fill="#D4C4AA" stroke="#C4714A" strokeWidth="1.5" />
      <line x1="50" y1="80" x2="50" y2="100" stroke="#C4714A" strokeWidth="1.5" />
      <line x1="110" y1="80" x2="110" y2="100" stroke="#C4714A" strokeWidth="1.5" />
      <line x1="50" y1="80" x2="110" y2="80" stroke="#C4714A" strokeWidth="1.5" />
      <line x1="80" y1="60" x2="80" y2="80" stroke="#C4714A" strokeWidth="1.5" />
      <circle cx="50" cy="100" r="3" fill="#C4714A" />
      <circle cx="110" cy="100" r="3" fill="#C4714A" />
      <circle cx="80" cy="80" r="3" fill="#C4714A" />
    </svg>
  )
}

function Blanket() {
  const rows = [60, 80, 100, 120, 140, 160]
  const fringes = [30, 42, 54, 66, 78, 90, 102, 114, 126, 138, 150, 162]

  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <rect x="25" y="40" width="150" height="130" rx="4" fill="#E8DCCA" />
      <g stroke="#C4714A" strokeWidth="1.2" opacity="0.5">
        {rows.map((y) => (
          <path key={y} d={`M35 ${y} Q45 ${y - 10} 55 ${y} Q65 ${y + 10} 75 ${y} Q85 ${y - 10} 95 ${y} Q105 ${y + 10} 115 ${y} Q125 ${y - 10} 135 ${y} Q145 ${y + 10} 155 ${y}`} />
        ))}
      </g>
      <g stroke="#7A5C42" strokeWidth="1.5" opacity="0.7">
        {fringes.map((x) => (
          <line key={x} x1={x} y1="168" x2={x - 2} y2="185" />
        ))}
      </g>
      <circle cx="25" cy="40" r="4" fill="#C4714A" opacity="0.5" />
      <circle cx="175" cy="40" r="4" fill="#C4714A" opacity="0.5" />
    </svg>
  )
}
