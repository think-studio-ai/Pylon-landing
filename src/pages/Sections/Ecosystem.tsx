import  { useState } from 'react';
import { ArrowUpRight, Box, Image as ImageIcon, Zap, Layers, BarChart, MessageSquare } from 'lucide-react';

import tutImg from '../../assets/imageee.webp';
import dsImg from '../../assets/imagejj.webp';
import tactImg from '../../assets/tactImage1.webp';
import thinkImg from '../../assets/insightifyImage1.webp';
import insightifyImg from '../../assets/insightifyImage2.webp';
import mediaImg from '../../assets/mediaMagnet1.webp';

const companies = [
  {
    id: 'tut',
    name: 'TUT GROUP',
    icon: <Box size={24} />,
    image: tutImg,
    tagline: 'Designing Tomorrow\'s Icons.',
    description: 'A powerhouse spanning real estate, design, engineering, contracting, and interior design. Tut Group crafts visionary projects, shaping skylines and developing environments that prioritize luxury, functionality, and sustainability.',
    link: 'https://tut-landing.vercel.app/'
  },
  {
    id: 'ds',
    name: 'DS+',
    icon: <ImageIcon size={24} />,
    image: dsImg,
    tagline: 'Designing with Purpose.',
    description: 'A multi-disciplinary design studio dedicated to creating functional beauty. Specializing in branding, identity, and spatial design, DS+ translates complex ideas into clear, compelling visual narratives that define industry standards. The group\'s creative engine.',
    link: 'https://digitalstudioeg.com/'
  },
  {
    id: 'tact',
    name: 'TACT',
    icon: <Zap size={24} />,
    image: tactImg,
    tagline: 'Immersive Digital Innovations.',
    description: 'Transforming how people interact with spaces, brands, and information. TACT blends hardware, software, and physical environments to create interactive journeys. Whether through real-time data visualization, AR, or sensory-rich physical installations, TACT pushes the boundaries of human-computer interaction.',
    link: 'https://tactinnovations.com/'
  },
  {
    id: 'think',
    name: 'THINK',
    icon: <Layers size={24} />,
    image: thinkImg,
    tagline: 'AI & Immersive Technologies.',
    description: 'Engineering smart environments and human-centered innovation, THINK is where imagination meets code. Specializing in AI systems, XR technologies, and digital simulations. From large-scale global conferences to meticulously designed cultural exhibitions, Think merges aesthetic brilliance with logistical perfection.',
    link: 'https://thinkstudio.ai/'
  },
  {
    id: 'insightify',
    name: 'INSIGHTIFY',
    icon: <BarChart size={24} />,
    image: insightifyImg,
    tagline: 'Public Policy & Strategic Advisory.',
    description: 'INSIGHTIFY IS PYLON\'S STRATEGIC BRAIN, DELIVERING ACTIONABLE INTELLIGENCE. With a deep understanding of regional context and global dynamics, we support decision-makers in building resilient policies and meaningful change, building frameworks that drive equitable growth.',
    link: 'https://insightify-eg.com/'
  },
  {
    id: 'media',
    name: 'MEDIA MAGNET',
    icon: <MessageSquare size={24} />,
    image: mediaImg,
    tagline: 'Digital Storytelling.',
    description: 'Media Magnet is Pylon\'s hub for digital storytelling and social influence. From viral videos and brand storytelling to influencer partnerships and digital activations, we help brands grow their voice, shape perception, and stay at the center of culture. We craft bold narratives that resonate.',
    link: 'https://mediamagneteg.com/'
  }
];

export default function Ecosystem() {
  const [hoveredId, setHoveredId] = useState<string | null>('tut');

  return (
    <section id="ecosystem" className="w-full py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
          <p className="text-[12px] font-bold tracking-widest text-white uppercase mb-4">
            Ecosystem
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            A Unified Force
          </h2>
          <p className="text-[16px] text-gray-400 max-w-2xl mx-auto">
            A synergistic network of specialized entities designed to cover every angle of modern business and culture. Hover to explore.
          </p>
        </div>

        {/* Dynamic Hover Accordion */}
        <div className="flex flex-col lg:flex-row w-full h-[1000px] sm:h-[1200px] lg:h-[600px] gap-2 lg:gap-4" data-aos="fade-up" data-aos-delay="200">
          {companies.map((company) => {
            const isActive = hoveredId === company.id;

            return (
              <div
                key={company.id}
                onMouseEnter={() => setHoveredId(company.id)}
                onClick={() => {
                  if (!isActive && window.innerWidth < 1024) {
                    setHoveredId(company.id);
                  } else {
                    window.open(company.link, "_blank", "noopener,noreferrer");
                  }
                }}
                className={`enterprise-card relative overflow-hidden flex flex-col justify-end transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${
                  isActive ? "lg:flex-[4] flex-[3] shadow-[0_0_40px_rgba(255,255,255,0.1)]" : "lg:flex-1 flex-[0.5] opacity-70 hover:opacity-100"
                }`}
              >
                {/* Background Image when active */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${isActive ? 'opacity-100 lg:opacity-100 z-0' : 'opacity-0 -z-10'}`}
                >
                  <img 
                    src={company.image} 
                    alt={company.name} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out scale-105" 
                    style={{ transform: isActive ? 'scale(1)' : 'scale(1.05)' }}
                  />
                  {/* Subtle gradient to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
                </div>

                <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-end pointer-events-none">
                  
                  {/* Top Icon */}
                  <div className={`absolute top-4 left-4 lg:top-8 lg:left-8 transition-all duration-700 text-white ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    {company.icon}
                  </div>

                  {/* Vertical Text for non-active states on Desktop */}
                  <div className={`hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap transition-all duration-500 font-bold tracking-[0.2em] uppercase text-gray-400 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                    {company.name}
                  </div>
                  
                  {/* Horizontal small text for non-active states on Mobile */}
                  <div className={`lg:hidden absolute top-1/2 left-4 -translate-y-1/2 whitespace-nowrap transition-all duration-500 font-bold tracking-widest uppercase text-gray-400 text-[14px] ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    {company.name}
                  </div>

                  <div className={`flex flex-col justify-end transform transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white tracking-tight mb-2">
                      {company.name}
                    </h3>
                    
                    <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-medium mb-4 lg:mb-6 text-gray-300">
                      {company.tagline}
                    </p>

                    <div className={`grid transition-all duration-700 ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="hidden sm:block text-gray-400 text-[12px] sm:text-[13px] lg:text-[15px] leading-relaxed max-w-lg mb-6 lg:mb-8">
                          {company.description}
                        </p>
                        
                        <div
                          className="inline-flex items-center gap-2 text-[12px] lg:text-[13px] font-bold tracking-widest uppercase transition-colors hover:text-white text-gray-400 pointer-events-auto"
                        >
                          Explore <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
