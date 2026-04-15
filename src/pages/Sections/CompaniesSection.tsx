
// Imports (Logos)
import Tut from "../../assets/Layer_1.png";
import DSLogo from "../../assets/DS+ logo.png";
import InsightifyLogo from "../../assets/insightify.png";
import MediaMagnetLogo from "../../assets/mediaMagnet.png";
import TactLogo from "../../assets/tact.png";
import ThinkLogo from "../../assets/think.png";

// Imports (Background Imagery / B-Roll)
import Section1 from "../../assets/image.webp";
import DSImage from "../../assets/imagejj.webp";
import TactImage1 from "../../assets/tactImage1.webp";
import tk from "../../assets/tk.webp";
import InsightifyImage1 from "../../assets/insightifyImage1.webp";
import MediaMagnetBottomImage from "../../assets/mediaMagnet1.webp";
import SplitText from "../../components/SplitText";

const companies = [
  {
    id: 'tut',
    name: 'TUT GROUP',
    logo: Tut,
    image: Section1,
    tagline: 'E-COMMERCE, TRADE & CULTURAL EXPORTS',
    headline: 'WE FUSE CREATIVITY, CULTURAL DEPTH, TO BUILD AND ELEVATE THE BRANDS, EXPERIENCES, AND DESTINATIONS THAT WILL DEFINE THE FUTURE.',
    description: 'Empowering local craftsmanship with global access. TUT Group is Pylon\'s commerce vertical – a complete ecosystem that bridges Egyptian products with global markets. Through curated retail, digital trade platforms, and logistical innovation, TUT redefines what it means to be "Made in Egypt," positioning local excellence for international growth.',
    url: 'https://tradeontut.com/',
  },
  {
    id: 'ds',
    name: 'DS+',
    logo: DSLogo,
    image: DSImage,
    tagline: 'MEDIA PRODUCTION AND CONTENT CREATION',
    headline: 'CRAFTING NARRATIVES THAT CONNECT, INSPIRE, AND LIVE THROUGH TIME.',
    description: 'DS+ IS THE CREATIVE ENGINE OF PYLON Holding, SPECIALIZING IN HIGH-IMPACT VISUAL STORYTELLING, CINEMATIC CONTENT, AND BRANDED MEDIA. We craft experiences that resonate. Through cinematic storytelling and creative excellence, we shape narratives that leave a lasting impression.',
    url: 'https://digitalstudioeg.com/',
  },
  {
    id: 'tact',
    name: 'TACT CONSTRUCTION',
    logo: TactLogo,
    image: TactImage1,
    tagline: 'BUILDING WITH PRECISION. DEVELOPING WITH PURPOSE.',
    headline: 'FROM CONCEPT TO COMPLETION, TACT BLENDS ENGINEERING EXCELLENCE WITH TACTICAL PROJECT MANAGEMENT.',
    description: 'Whether commercial, cultural, or urban development — TACT builds with intention and impact. Tact is the execution arm of Pylon Holding, delivering high-quality construction and infrastructure services with a focus on efficiency, innovation, and design integrity.',
    url: 'https://tactinnovations.com/',
  },
  {
    id: 'think',
    name: 'THINK',
    logo: ThinkLogo,
    image: tk,
    tagline: 'ARTIFICIAL INTELLIGENCE & IMMERSIVE TECHNOLOGIES',
    headline: 'WE BRIDGE IMAGINATION AND INTELLIGENCE — BUILDING SCALABLE AI TOOLS, IMMERSIVE ENVIRONMENTS, AND SMART PLATFORMS.',
    description: 'Engineering smart environments and human-centered innovation, THINK is where imagination meets code. Specializing in AI systems, XR technologies, and digital simulations, THINK develops immersive solutions that revolutionize how we interact with data, environments, and each other.',
    url: 'https://thinkstudio.ai/',
  },
  {
    id: 'insightify',
    name: 'INSIGHTIFY',
    logo: InsightifyLogo,
    image: InsightifyImage1,
    tagline: 'PUBLIC POLICY, RESEARCH AND STRATEGIC ADVISORY',
    headline: 'TRANSLATING DATA AND INSIGHT INTO DECISIONS THAT SHAPE THE FUTURE.',
    description: 'INSIGHTIFY IS PYLON\'S STRATEGIC BRAIN, A POLICY AND RESEARCH POWERHOUSE DELIVERING ACTIONABLE INTELLIGENCE. With a deep understanding of regional context and global dynamics, Insightify supports decision-makers in building resilient policies and meaningful change.',
    url: 'https://insightify-eg.com/',
  },
  {
    id: 'media',
    name: 'MEDIA MAGNET',
    logo: MediaMagnetLogo,
    image: MediaMagnetBottomImage,
    tagline: 'DRIVING CONVERSATIONS. CREATING CONTENT THAT CONNECTS.',
    headline: 'MEDIA MAGNET IS PYLON\'S HUB FOR DIGITAL STORYTELLING AND SOCIAL INFLUENCE.',
    description: 'From viral videos and brand storytelling to influencer partnerships and digital activations, Media Magnet helps brands grow their voice, shape perception, and stay at the center of culture. Specializing in content creation, social media strategy, and PR campaigns.',
    url: 'http://mediamagneteg.com/',
  }
];

export default function CompaniesSection() {
  return (
    <section id="companies" className="relative w-full py-32 bg-[#030303] z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div className="text-center md:text-left mb-16 lg:mb-24" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-[11px] sm:text-[13px] font-medium tracking-[0.2em] text-[#D4AF37] uppercase mb-4">
            Our Ecosystem
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-3 mb-4">
            <SplitText 
              text="Pinnacles of" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight" 
              delay={50} duration={1.25} tag="h3" 
            />
            <SplitText 
              text="Innovation" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/40 tracking-tight" 
              delay={50} duration={1.25} tag="h3" 
            />
          </div>
        </div>

        {/* 3-Column Modern Glass Bento/Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {companies.map((company, index) => (
            <div 
              key={company.id} 
              id={company.id}
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-delay={index * 100}
              className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] flex flex-col justify-end transition-all duration-700 hover:border-white/20 hover:bg-white/[0.04] cursor-pointer"
            >
              {/* Background Image that activates on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0 mix-blend-screen"
                />
                {/* Gradient overlay to ensure text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
              </div>

              {/* Card Content Top/Logo part */}
              <div className="absolute top-0 left-0 w-full p-8 z-10 flex justify-between items-start transition-transform duration-700 transform group-hover:translate-y-[-10px]">
                <img 
                  src={company.logo} 
                  alt={`${company.name} Logo`} 
                  className="h-10 sm:h-12 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                />
              </div>

              {/* Card Content Bottom section */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <div className="transform transition-transform duration-700 lg:translate-y-24 group-hover:translate-y-0">
                  <p className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-[#D4AF37] mb-4 font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                    {company.tagline}
                  </p>
                  <h4 className="text-xl sm:text-2xl text-white font-bold leading-snug tracking-tight mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {company.headline}
                  </h4>
                  <div className="h-0 overflow-hidden lg:opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    <p className="text-[12px] sm:text-[13px] text-[#A0A0A0] leading-relaxed mb-8 font-light text-justify">
                      {company.description}
                    </p>
                    <button
                      onClick={() => window.open(company.url, "_blank", "noopener,noreferrer")}
                      className="px-6 py-3 rounded-full border border-white/10 text-white text-[10px] sm:text-[11px] font-medium tracking-widest uppercase transition-all duration-400 hover:bg-white hover:text-[#030303] hover:border-white shadow-[0_0_20px_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      VISIT WEBSITE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
