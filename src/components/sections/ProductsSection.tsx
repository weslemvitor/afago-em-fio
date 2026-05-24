import { MessageCircle } from 'lucide-react'

import { products, whatsappUrl } from '../../data/store'
import { Button } from '../ui/button'
import { ProductCarousel } from './ProductCarousel'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ProductsSection() {
  return (
    <section id="produtos" className="px-6 py-20 md:px-12 md:py-28">
      <SectionHeading
        label="Colecao"
        title={
          <>
            Pecas que
            <br />
            <em className="text-[var(--terracotta)]">encantam</em>
          </>
        }
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={index * 100}>
            <article className="group relative">
              <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-[var(--cream)]">
                {product.badge ? (
                  <span className="absolute left-4 top-4 z-30 bg-[var(--terracotta)] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.15em] text-white">
                    {product.badge}
                  </span>
                ) : null}

                <ProductCarousel images={product.images} productName={product.name} />

                <div className="absolute inset-0 z-20 flex items-center justify-center bg-[rgba(44,26,14,0.68)] opacity-0 transition duration-500 group-hover:opacity-100">
                  <Button asChild variant="whatsapp">
                    <a href={`${whatsappUrl}?text=${encodeURIComponent(product.message)}`} target="_blank" rel="noreferrer">
                      <MessageCircle size={18} />
                      Encomendar
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 py-5">
                <div>
                  <h3 className="font-display text-2xl leading-tight text-[var(--deep-brown)]">{product.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--mocha)] opacity-60">{product.category}</p>
                </div>
                <p className="font-display shrink-0 text-xl text-[var(--terracotta)]">{product.price}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
