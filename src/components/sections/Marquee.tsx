import { marqueeItems } from '../../data/store'

export function Marquee() {
  const loopedItems = [...marqueeItems, ...marqueeItems]

  return (
    <div className="overflow-hidden whitespace-nowrap bg-[var(--deep-brown)] py-3.5">
      <div className="marquee-track inline-block">
        {loopedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="text-xs uppercase tracking-[0.2em] text-[var(--sand)]">
            <span className="px-10">{item}</span>
            <span className="px-2 text-base text-[var(--terracotta)]">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
