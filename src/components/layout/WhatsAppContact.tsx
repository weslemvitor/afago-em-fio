import { whatsappUrl } from '../../data/store'

const questionMessage = 'Ola! Vim pelo site e gostaria de tirar uma duvida.'
const questionWhatsappUrl = `${whatsappUrl}?text=${encodeURIComponent(questionMessage)}`

export function WhatsAppContact() {
  return (
    <a
      href={questionWhatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Tirar uma duvida pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25d366] px-4 py-3 text-white shadow-[0_12px_35px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_16px_40px_rgba(37,211,102,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366] md:bottom-7 md:right-7"
    >
      <span className="hidden text-left sm:block">
        <span className="block text-xs font-semibold leading-tight">Ficou com alguma duvida?</span>
        <span className="block text-[11px] font-light opacity-90">Fale conosco</span>
      </span>

      <WhatsAppIcon />
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-7 w-7 shrink-0 fill-current transition duration-300 group-hover:scale-105"
    >
      <path d="M16.04 3A12.78 12.78 0 0 0 5.17 22.5L3.5 28.6l6.24-1.64A12.8 12.8 0 1 0 16.04 3Zm0 23.42c-1.97 0-3.89-.54-5.55-1.55l-.4-.24-3.7.97.99-3.61-.26-.42a10.6 10.6 0 1 1 8.92 4.85Zm5.82-7.95c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.58a9.55 9.55 0 0 1-1.76-2.19c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  )
}
