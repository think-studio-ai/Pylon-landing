import ThinkLogo from "../../assets/think.png";


export default function ThinkSection() {
  return (
    <section id="think" className="w-full py-24 sm:py-32 border-b-2 border-[#111111] bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Typographic Left */}
        <div data-aos="fade-right" data-aos-duration="1000" className="lg:col-span-7 pr-0 lg:pr-12 border-b-2 lg:border-b-0 lg:border-r-2 border-[#111111] pb-12 lg:pb-0">
          <div className="mb-12 border-b-4 border-[#111111] pb-6 inline-block">
            <img src={ThinkLogo} alt="Think Logo" className="h-10 sm:h-12 object-contain filter invert opacity-90" />
          </div>

          <p className="text-[12px] sm:text-[14px] font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-6">
            [ AI & CAPTIVATING SPACES ]
          </p>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black text-[#111111] leading-[0.85] tracking-tighter uppercase break-words hyphens-auto mt-4">
            SPACES <br/>THAT PEAK <br/>CURIOSITY.
          </h2>
        </div>

        {/* Text Right */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="lg:col-span-5 pl-0 lg:pl-12 pt-8 lg:pt-0">
          <p className="text-[14px] sm:text-[16px] text-[#111111] leading-relaxed mb-6 font-bold">
            Engineering smart environments and human-centered innovation, THINK is where imagination meets code. Specializing in AI systems, XR technologies, and digital simulations.
          </p>

          <p className="text-[14px] text-[#666666] leading-relaxed mb-10 font-normal">
            From large-scale global conferences and brand activations to meticulously designed cultural exhibitions, Think merges aesthetic brilliance with logistical perfection. When Pylon creates a physical footprint, Think ensures it leaves an indelible mark.
          </p>

          <button
            onClick={() => window.open("https://thinkstudio.ai/", "_blank", "noopener,noreferrer")}
            className="w-full text-center px-8 py-4 bg-[#111111] text-[#FAFAFA] text-[13px] font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-y-1 shadow-[4px_4px_0_#D4AF37] hover:shadow-[6px_6px_0_#D4AF37]"
          >
            WWW.THINKSTUDIO.AI &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
