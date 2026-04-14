
export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Subtle Gradient Blobs (Monochrome) */}
      <div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full bg-white/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[0%] left-[10%] w-[800px] h-[800px] rounded-full bg-white/5 blur-[200px] pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        
        <div data-aos="fade-up" data-aos-duration="1200">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold text-white leading-[1.05] tracking-tight mb-8">
            PYLON HOLDING
          </h1>
          
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto mb-12">
            Pylon Holding is a beacon of cultural and technological strength, empowering ideas, elevating brands, and envisioning the future through shared vision and interconnected Cabilities. <br />
            With one foot grounded in heritage and the other reaching toward progress, we are not just building businesses. We are building the next generation of experiences, narratives, and destinations.



          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("ecosystem");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black text-[13px] font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
            >
              Explore Our Entities
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 text-white text-[13px] font-medium hover:bg-white/10 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Floating Trust Bar Below */}
        <div 
          data-aos="fade-up" 
          data-aos-duration="1200" 
          data-aos-delay="300"
          className="mt-32 w-full border-t border-white/10 pt-8 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
            Trusted capabilities across
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-gray-500 font-medium text-[13px]">
             <span className="hover:text-white transition-colors cursor-default">Media Production</span>
             <span className="hover:text-white transition-colors cursor-default">Public Policy</span>
             <span className="hover:text-white transition-colors cursor-default">Immersive Tech</span>
             <span className="hover:text-white transition-colors cursor-default">Trade & Commerce</span>
             <span className="hover:text-white transition-colors cursor-default">Strategic Design</span>
          </div>
        </div>

      </div>
    </section>
  );
}
