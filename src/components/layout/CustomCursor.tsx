import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let frame = 0

    const move = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`
        cursorRef.current.style.top = `${mouseY}px`
      }

      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }

      frame = window.requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    frame = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--terracotta)] mix-blend-multiply transition-[width,height,background] duration-300 md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] hidden size-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--terracotta)] opacity-60 transition-transform duration-150 md:block"
      />
    </>
  )
}
