import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

import { cn } from '../../lib/utils'

type ProductImage = {
  src: string
  alt: string
}

type ProductCarouselProps = {
  images: readonly ProductImage[]
  productName: string
}

export function ProductCarousel({ images, productName }: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const hasMultipleImages = images.length > 1

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition duration-500',
            index === activeIndex ? 'opacity-100' : 'opacity-0',
          )}
          loading="lazy"
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

      {hasMultipleImages ? (
        <>
          <button
            type="button"
            aria-label={`Imagem anterior de ${productName}`}
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-[var(--deep-brown)] shadow-sm backdrop-blur transition hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label={`Proxima imagem de ${productName}`}
            onClick={goToNext}
            className="absolute right-3 top-1/2 z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-[var(--deep-brown)] shadow-sm backdrop-blur transition hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Ver imagem ${index + 1} de ${productName}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'size-2.5 rounded-full border border-white/80 transition',
                  index === activeIndex ? 'bg-white' : 'bg-white/30',
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
