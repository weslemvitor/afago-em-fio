import { useEffect, useState } from 'react'

import { navLinks } from '../../data/store'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 80)

    update()
    window.addEventListener('scroll', update, { passive: true })

    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition duration-300 md:px-12',
        isScrolled
          ? 'border-b border-[rgba(232,220,202,0.65)] bg-[rgba(250,247,242,0.92)] backdrop-blur-xl'
          : 'bg-transparent mix-blend-multiply',
      ].join(' ')}
    >
      <a href="#" className="font-display text-2xl font-normal tracking-[0.05em] text-[var(--deep-brown)]">
        Afago em Fio
      </a>

      <nav aria-label="Navegacao principal" className="hidden items-center gap-9 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="text-xs uppercase tracking-[0.12em] text-[var(--deep-brown)] opacity-70 transition hover:opacity-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
