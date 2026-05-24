import { AboutSection } from './components/sections/AboutSection'
import { CustomCursor } from './components/layout/CustomCursor'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { Marquee } from './components/sections/Marquee'
import { Navbar } from './components/layout/Navbar'
import { ProcessSection } from './components/sections/ProcessSection'
import { ProductsSection } from './components/sections/ProductsSection'
import { QuoteSection } from './components/sections/QuoteSection'
import { SpecialOrderSection } from './components/sections/SpecialOrderSection'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <AboutSection />
        <QuoteSection />
        <ProductsSection />
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[var(--sand)] to-transparent md:mx-12" />
        <ProcessSection />
        <SpecialOrderSection />
      </main>
      <Footer />
    </>
  )
}

export default App
