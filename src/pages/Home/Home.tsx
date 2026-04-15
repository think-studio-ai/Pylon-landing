import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../Sections/HeroSection'
import Purpose from '../Sections/Purpose'
import Culture from '../Sections/Culture'
import Ecosystem from '../Sections/Ecosystem'
import Services from '../Sections/Services'
import CurvedLoop from '../../components/CurvedLoop'

import ScrollToTop from '../../components/shared/ScrollToTop'

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white font-sans">
      <NavBar />
      <HeroSection />
      
    

      <Purpose />
      <Culture />
        {/* Divider Loop */}
      <div className="w-full overflow-hidden border-b border-white/10 opacity-80 pt-8 pb-12 relative z-20 bg-[#0A0A0A]">
        <CurvedLoop 
          marqueeText="PYLON ✦ HOLDING ✦ PYLON ✦ HOLDING ✦ PYLON ✦ HOLDING ✦ "
          speed={2}
          curveAmount={280}
          direction="right"
          interactive
        />
      </div>
      <Ecosystem />
      <Services />

      <Footer />
      <ScrollToTop />
    </div>
  );
}
