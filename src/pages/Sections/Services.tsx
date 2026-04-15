import SplitText from "../../components/SplitText";

export default function Services() {
  const row1 = [
    "MEDIA PRODUCTIONS", "PUBLIC POLICY", "AI SOLUTIONS", 
    "E-COMMERCE & TRADE", "PR & MARKETING", "STRATEGIC FORSIGHT", "WEBSITE, APPS & AI"
  ];
  
  const row2 = [
    "ADVERTISING CAMPAIGNS", "BRANDING STRATEGIES", "SPACE DESIGN", 
    "CONTENT CREATION", "SOCIAL MEDIA", "MEDIA BUYING", "DOCUMENTARY PRODUCTION", "SCRIPT WRITING"
  ];

  const renderTextItem = (text: string) => (
    <div className="flex items-center mx-4 sm:mx-8 group cursor-pointer">
      <span className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-transparent tracking-tighter transition-all duration-300 group-hover:text-white group-hover:scale-105" 
            style={{ WebkitTextStroke: '1px #525252' }}>
        {text}
      </span>
      <span className="ml-8 sm:ml-16 w-3 h-3 sm:w-4 sm:h-4 bg-[#525252] group-hover:bg-white rounded-full transition-colors"></span>
    </div>
  );

  return (
    <section id="services" className="relative w-full py-32 bg-transparent overflow-hidden border-t border-white/5 marquee-container">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 mb-16 relative z-10">
        <p className="text-[12px] font-bold tracking-widest text-white uppercase mb-4" data-aos="fade-up">
          Capabilities
        </p>
        <SplitText
          text="An Ecosystem of Specialties"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300 tracking-tight block"
          delay={50} duration={1.25} tag="h3"
        />
      </div>

      <div className="flex flex-col gap-4 sm:gap-8 relative z-10 w-full overflow-hidden select-none">
        
        {/* Row 1 - Scrolling Left */}
        <div className="w-max flex animate-marquee-left">
          <div className="flex items-center">
            {row1.map((item) => renderTextItem(item))}
          </div>
          <div className="flex items-center">
            {row1.map((item) => renderTextItem(item))}
          </div>
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="w-max flex animate-marquee-right">
          <div className="flex items-center">
            {row2.map((item) => renderTextItem(item))}
          </div>
          <div className="flex items-center">
            {row2.map((item) => renderTextItem(item))}
          </div>
        </div>

      </div>
    </section>
  );
}
