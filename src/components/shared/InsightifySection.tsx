import InsightifyLogo from "../../assets/insightify.png";
import InsightifyImage1 from "../../assets/insightifyImage1.webp";
import InsightifyImage2 from "../../assets/insightifyImage2.webp";

export default function InsightifySection() {
  return (
    <section id="insightify" className="w-full py-24 sm:py-32 border-y-2 border-[#111111] bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-stretch">
        
        {/* Gallery Column */}
        <div data-aos="fade-right" data-aos-duration="1000" className="lg:col-span-5 h-full relative p-6 brutal-panel bg-[#111111]">
          <div className="grid grid-cols-2 gap-4 h-full min-h-[400px]">
             <img src={InsightifyImage1} alt="Policy Research" className="w-full h-full object-cover grayscale opacity-90 border border-white/20" />
             <img src={InsightifyImage2} alt="Strategic Advisory" className="w-full h-full object-cover grayscale opacity-90 border border-white/20" />
          </div>
        </div>

        {/* Text Editorial Column */}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="lg:col-span-7 h-full flex flex-col justify-between py-8 lg:pl-12">
          <div>
            <div className="mb-12 border-b-4 border-[#111111] pb-6 inline-block">
              <img src={InsightifyLogo} alt="Insightify Logo" className="h-8 sm:h-10 object-contain filter invert opacity-90" />
            </div>

            <p className="text-[12px] sm:text-[14px] font-bold tracking-[0.2em] uppercase text-[#111111] mb-6 inline-block bg-[#D4AF37] px-2 py-1">
              MAGAZINE / DATA INTELLIGENCE
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#111111] font-black leading-[0.9] mb-12 tracking-tighter uppercase break-words hyphens-auto mt-4">
              ACTIONABLE<br/>INTELLIGENCE.
            </h2>
          </div>

          <div className="border-l-2 border-[#111111]/20 pl-6 lg:pl-8">
            <p className="text-[16px] text-[#111111] leading-relaxed mb-6 font-bold">
              INSIGHTIFY IS PYLON'S STRATEGIC BRAIN, A POLICY AND RESEARCH POWERHOUSE DELIVERING ACTIONABLE INTELLIGENCE.
            </p>

            <p className="text-[14px] text-[#666666] leading-relaxed mb-10 font-normal max-w-xl">
              With a deep understanding of regional context and global dynamics, Insightify supports decision-makers in building resilient policies and meaningful change. With deep regional knowledge and strategic clarity, we support institutions and governments in building frameworks that drive equitable growth.
            </p>

            <button
              onClick={() => window.open("https://insightify-eg.com/", "_blank", "noopener,noreferrer")}
              className="text-left py-2 border-b-2 border-[#111111] text-[#111111] text-[13px] font-bold tracking-widest uppercase transition-all duration-200 hover:text-[#D4AF37] hover:border-[#D4AF37]"
            >
              READ OUR RESEARCH &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
