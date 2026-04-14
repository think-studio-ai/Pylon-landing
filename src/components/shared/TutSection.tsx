import Tut from "../../assets/Layer_1.png";
import Section1 from "../../assets/image.webp";
import Section2 from "../../assets/imagel;.webp";

export default function TutSection() {
  return (
    <section id="tut" className="w-full py-24 sm:py-32 border-b-2 border-[#111111] relative overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Content (Sticky) */}
          <div data-aos="fade-right" data-aos-duration="1000" className="lg:col-span-5 lg:sticky top-32">
            <div className="mb-12 border-b-4 border-[#111111] pb-6 inline-block">
              <img src={Tut} alt="TUT Logo" className="h-10 sm:h-14 object-contain filter invert opacity-90" />
            </div>

            <p className="text-[12px] sm:text-[14px] font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-6">
              [ TRADE & COMMERCE ]
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#111111] font-black leading-[0.9] mb-8 tracking-tighter uppercase">
              ELEVATING <br/>
              BRANDS & <br/>
              DESTINATIONS.
            </h2>

            <p className="text-[14px] sm:text-[16px] text-[#111111] leading-relaxed mb-10 font-medium">
              Empowering local craftsmanship with global access. TUT Group is Pylon's commerce vertical – a complete ecosystem that bridges Egyptian products with global markets. Through curated retail, digital trade platforms, and logistical innovation, TUT redefines what it means to be "Made in Egypt."
            </p>

            <button
              onClick={() => window.open("https://tradeontut.com/", "_blank", "noopener,noreferrer")}
              className="brutal-panel px-8 py-4 text-[#111111] text-[13px] font-bold tracking-widest uppercase transition-all duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(17,17,17,1)]"
            >
              WWW.TRADEONTUT.COM &rarr;
            </button>
          </div>

          {/* Right Image Gallery (Overlapping raw images) */}
          <div className="lg:col-span-7 relative mt-16 lg:mt-0" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative w-full h-[600px] sm:h-[800px]">
              <div className="absolute top-0 right-0 w-[80%] h-[60%] border-2 border-[#111111] overflow-hidden z-10 shadow-[8px_8px_0_#111111] hover:-translate-y-2 hover:translate-x-2 transition-transform duration-500">
                <img src={Section1} alt="TUT Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
              </div>
              <div className="absolute bottom-0 left-0 w-[70%] h-[55%] border-2 border-[#111111] overflow-hidden z-20 shadow-[-8px_8px_0_#111111] hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-500 bg-white">
                <img src={Section2} alt="TUT Gallery 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90" loading="lazy" />
                <div className="absolute top-4 left-4 brutal-panel px-3 py-1 text-[10px] font-bold">FIG. 01</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
