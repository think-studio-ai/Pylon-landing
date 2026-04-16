import { lazy, Suspense, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import HeroSection from '../Sections/HeroSection'
import AOS from 'aos'

const Purpose = lazy(() => import('../Sections/Purpose'))
const Culture = lazy(() => import('../Sections/Culture'))
const Ecosystem = lazy(() => import('../Sections/Ecosystem'))
const Services = lazy(() => import('../Sections/Services'))
const CurvedLoop = lazy(() => import('../../components/CurvedLoop'))
const Footer = lazy(() => import('../../components/Footer/Footer'))
const ScrollToTop = lazy(() => import('../../components/shared/ScrollToTop'))

export default function Home() {
  
  // Re-calc AOS when lazy components finally mount into DOM
  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white font-sans">
      <NavBar />
      <HeroSection />

      <Suspense fallback={<div className="h-32"></div>}>
        <Purpose />
        {/* Divider Loop */}
    
        <Culture />
    {/* <div className="w-full overflow-hidden border-b border-white/10 opacity-80 pt-8 pb-12 relative z-20 bg-transparent">
          <CurvedLoop
            marqueeText="PYLON ✦ HOLDING ✦ PYLON ✦ HOLDING ✦ PYLON ✦ HOLDING ✦ "
            speed={2}
            curveAmount={280}
            direction="right"
            interactive
          />
        </div>   */}
        <Ecosystem />
        <Services />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}
