import Particles from "@/components/Particles";
import SplitText from "../../components/SplitText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-30 pb-10 overflow-hidden bg-black">
      {/* LineWaves Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Background Subtle Gradient Blobs (Monochrome) */}
      <div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full bg-white/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[0%] left-[10%] w-[800px] h-[800px] rounded-full bg-white/5 blur-[200px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center pointer-events-none">
        <div data-aos="fade-up" data-aos-duration="1200" className="relative">
          {/* Subtle dark aura to ensure text readability against the waves */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-black/80 blur-[120px] pointer-events-none -z-10 rounded-full"></div>

          <SplitText
            text="PYLON HOLDING"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold text-white leading-[1.05] tracking-tight mb-8"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h1"
          />

          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-12 drop-shadow-md">
            Pylon Holding is a beacon of cultural and technological strength,
            empowering ideas, elevating brands, and envisioning the future
            through interconnected capabilities.{" "}
            <br className="hidden sm:block" />
            Bridging heritage and innovation, we build the next generation of
            transformative experiences, narratives, and global destinations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
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
          className="mt-32 w-full border-t border-white/20 pt-10 relative pointer-events-auto"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          <p className="text-[12px] font-bold text-white uppercase tracking-[0.2em] mb-8 drop-shadow-md">
            Trusted capabilities across
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-14 gap-y-6 text-white/70 font-semibold text-[14px] sm:text-[16px]">
            <span className="hover:text-white transition-all duration-300  hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Media Production
            </span>
            <span className="hover:text-white transition-all duration-300  hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Public Policy
            </span>
            <span className="hover:text-white transition-all duration-300  hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Immersive Tech
            </span>
            <span className="hover:text-white transition-all duration-300  hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Trade & Commerce
            </span>
            <span className="hover:text-white transition-all duration-300  hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Strategic Design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
