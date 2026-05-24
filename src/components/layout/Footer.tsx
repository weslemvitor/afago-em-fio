import { MessageCircle } from 'lucide-react'

import { footerColumns, whatsappUrl } from '../../data/store'

export function Footer() {
  return (
    <footer className="bg-[var(--deep-brown)] px-6 py-12 text-[var(--cream)] md:px-12 md:pb-10 md:pt-20">
      <div className="mb-10 flex flex-col gap-10 border-b border-white/10 pb-12 md:mb-10 md:flex-row md:items-start md:justify-between md:pb-16">
        <div>
          <div className="font-display text-5xl font-light leading-none">
            Afago
            <br />
            <em className="text-[var(--terracotta)]">em Fio</em>
          </div>
          <p className="mt-4 max-w-xs text-sm font-light leading-7 text-[var(--sand)] opacity-75">
            Croche artesanal sob encomenda. Feito com amor, ponto a ponto.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:gap-20">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-[var(--terracotta)]">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link} className="text-sm font-light text-[var(--sand)] opacity-75">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <p className="text-xs text-[var(--sand)] opacity-45">© 2026 Afago em Fio. Todos os direitos reservados.</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-[#25d366]/30 bg-[#25d366]/10 px-6 py-3 text-xs uppercase tracking-[0.1em] text-[#25d366] transition hover:bg-[#25d366]/20"
        >
          <MessageCircle size={18} />
          Falar Conosco
        </a>
      </div>
    </footer>
  )
}
