
export default function Purpose() {
  return (
    <section
      id="purpose"
      className="relative w-full min-h-[70vh] flex items-center justify-center py-24 overflow-hidden bg-transparent"
    >
      {/* Massive Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]  rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1200px] w-full mx-auto px-6 sm:px-8 relative z-10 text-center">
        
        <p 
          data-aos="fade-up" 
          data-aos-duration="800"
          className="text-[12px] font-bold tracking-[0.3em] text-[#fff] uppercase mb-8"
        >
          Our Purpose
        </p>

        <h3 
          data-aos="fade-up" 
          data-aos-duration="1200" 
          data-aos-delay="100"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold text-white leading-[1.1] sm:leading-[1.05] tracking-tighter max-w-5xl mx-auto"
        >
          Architects of<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">Tomorrow's</span><br/>
          Experience.
        </h3>
        
        <p 
          data-aos="fade-up" 
          data-aos-duration="1200" 
          data-aos-delay="300"
          className="mt-12 text-[16px] sm:text-[20px] text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium"
        >
          We are driven by a singular mission: to design, build, and operate foundational elements of modern society that elevate human potential and sustainable growth.
        </p>

      </div>
    </section>
  );
}
