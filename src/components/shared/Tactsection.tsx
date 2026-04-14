import TactLogo from "../../assets/tact.png";


export default function TactSection() {
  return (
    <section id="tact" className="w-full py-24 sm:py-32 border-b-2 border-[#111111] bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full border-l-2 border-[#111111] bg-[#E5E5E5] mix-blend-multiply opacity-50 z-0 hidden lg:block"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          
          <div data-aos="fade-right" data-aos-duration="1000" className="w-full lg:w-1/2">
            <div className="mb-12 border-b-4 border-[#111111] pb-6 inline-block">
              <img src={TactLogo} alt="Tact Innovations Logo" className="h-10 sm:h-12 object-contain filter invert opacity-90" />
            </div>

            <p className="text-[12px] sm:text-[14px] font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-6">
              [ IMMERSIVE DIGITAL INNOVATIONS ]
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#111111] font-black leading-[0.9] mb-8 tracking-tighter uppercase relative">
              <span className="bg-[#111111] text-[#FAFAFA] px-2 leading-tight mix-blend-difference z-10 w-max inline-block">ENGINEERING</span><br/>
              EXPERIENCES.<br/>
              BEYOND<br/>
              SCREENS.
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="w-full lg:w-1/2 brutal-panel p-8 sm:p-12 mt-0 lg:mt-32">
            <p className="text-[14px] sm:text-[16px] text-[#111111] leading-relaxed mb-8 font-medium">
              Transforming how people interact with spaces, brands, and information. TACT blends hardware, software, and physical environments to create interactive journeys that captivate users.
            </p>

            <p className="text-[14px] text-[#666666] leading-relaxed mb-10 font-normal">
              Whether through real-time data visualization, augmented reality, or sensory-rich physical installations, TACT pushes the boundaries of human-computer interaction. It's not just tech; it's the future of engagement.
            </p>

            <button
              onClick={() => window.open("https://tactinnovations.com/", "_blank", "noopener,noreferrer")}
              className="px-6 py-3 bg-[#111111] text-[#FAFAFA] text-[13px] font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0_#D4AF37] hover:shadow-[6px_6px_0_#D4AF37]"
            >
              WWW.TACTINNOVATIONS.COM &rarr;
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
