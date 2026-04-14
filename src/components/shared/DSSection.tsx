import DSLogo from "../../assets/DS+ logo.png";
import DSImage from "../../assets/imagejj.webp";

export default function DSSection() {
  return (
    <section id="ds" className="w-full relative overflow-hidden bg-[#111111]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        
        {/* Left Full Bleed Image */}
        <div data-aos="fade-right" data-aos-duration="1000" className="relative h-[50vh] lg:h-auto border-b-2 lg:border-b-0 lg:border-r-2 border-[#FAFAFA]/20">
          <img src={DSImage} alt="DS Media Production" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-lighten" loading="lazy" />
          <div className="absolute inset-0 bg-[#D4AF37]/20 mix-blend-multiply"></div>
          
          <h2 className="absolute bottom-6 left-6 text-6xl md:text-8xl font-black text-[#FAFAFA] opacity-90" style={{WebkitTextStroke: '2px #111111'}}>DS+</h2>
        </div>

        {/* Right Content */}
        <div data-aos="fade-left" data-aos-duration="1000" className="flex flex-col justify-center p-8 sm:p-16 lg:p-24 bg-[#111111] text-[#FAFAFA]">
          <div className="mb-12 border-b border-[#FAFAFA]/20 pb-4 inline-block w-max">
            <img src={DSLogo} alt="DS+ Logo" className="h-10 sm:h-12 object-contain" />
          </div>

          <p className="text-[12px] sm:text-[14px] tracking-[0.2em] uppercase text-[#D4AF37] mb-6 font-bold">
            [ MEDIA & CONTENT ]
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.9] mb-12 tracking-tighter uppercase">
            CRAFTING NARRATIVES <br/>THAT CONNECT.
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#FAFAFA] font-medium leading-relaxed mb-6 max-w-xl">
            DS+ IS THE CREATIVE ENGINE OF PYLON HOLDING, SPECIALIZING IN HIGH-IMPACT VISUAL STORYTELLING, CINEMATIC CONTENT, AND BRANDED MEDIA.
          </p>

          <p className="text-[14px] text-[#A0A0A0] leading-relaxed mb-12 max-w-xl font-normal">
            We don't just produce – we craft experiences that resonate. Through cinematic storytelling and creative excellence, we shape narratives that leave a lasting impression. DS+ DELIVERS EMOTIONALLY RESONANT NARRATIVES BUILT WITH ARTISTIC PRECISION.
          </p>

          <button
            onClick={() => window.open("https://digitalstudioeg.com/", "_blank", "noopener,noreferrer")}
            className="w-full sm:w-auto text-center px-8 py-4 bg-[#D4AF37] text-[#111111] text-[13px] font-bold tracking-widest uppercase transition-all duration-200 hover:bg-[#FAFAFA]"
          >
            WWW.DIGITALSTUDIOEG.COM &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
