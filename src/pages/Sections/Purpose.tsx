import { motion } from "framer-motion";
import { MoveRight, Target, Activity, Zap } from "lucide-react";
const pillars = [
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Design",
    description: "Designing spatial intelligence and forward-planning architectures."
  },
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    title: "Build",
    description: "Engineering resilient infrastructure for sustainable, long-term growth."
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Operate",
    description: "Managing ecosystems that elevate human potential and capabilities."
  }
];

export default function Purpose() {
  return (
    <section
      id="purpose"
      className="relative w-full min-h-screen flex flex-col justify-center py-32 overflow-hidden "
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#111] via-transparent to-transparent opacity-50 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-white/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Innovative Header & Typography */}
        <div className="w-full mb-32 relative">
          
          {/* Top Tag & Pre-heading */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-white rounded-full relative">
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white">Our Purpose</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-500 font-mono tracking-widest hidden sm:block">01 // STRATEGY & VISION</span>
          </div>

          <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-start xl:items-end">
            
            {/* Massive Typography Left */}
            <div className="flex-1 w-full">
              <h2 className="text-[55px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-bold leading-[0.85] tracking-[-0.04em] text-white">
                <motion.span 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Architects
                </motion.span>
                <div className="flex items-center gap-4 sm:gap-8 my-2 sm:my-0">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-16 sm:w-24 md:w-32 lg:w-48 h-[2px] bg-white/20 origin-left hidden sm:block"
                  />
                  <motion.span 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-gray-500 italic font-light"
                  >
                    of tomorrow's
                  </motion.span>
                </div>
                <motion.span 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block pl-0 sm:pl-[10%]"
                >
                  experience.
                </motion.span>
              </h2>
            </div>

            {/* Mission Statement Glass Card Right */}
            <motion.div 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full xl:w-[450px] shrink-0"
            >
              <div className="p-8 sm:p-10 bg-[#0F0F0F] border border-white/5 rounded-[2rem] relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                {/* Decorative scanning line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                {/* Crosshair Accent */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mb-8 text-white/20 group-hover:text-white transition-colors duration-500 rotate-45 group-hover:rotate-90">
                  <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                
                <p className="text-xl sm:text-2xl text-gray-400 font-light leading-relaxed">
                  We are driven by a singular vision: to <span className="text-white font-medium">design</span>, <span className="text-white font-medium">build</span>, and <span className="text-white font-medium">operate</span> foundational elements of modern society that elevate human potential and sustainable growth.
                </p>
                
                {/* Subtle corner frame */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white/10 rounded-br-[2rem] group-hover:border-white/30 transition-colors duration-500" />
              </div>
            </motion.div>
            
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-8 md:p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:border-white transition-all duration-500">
                <div className="group-hover:invert transition-all duration-500">
                  {pillar.icon}
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{pillar.title}</h4>
              <p className="text-gray-500 leading-relaxed font-medium">{pillar.description}</p>
              
              <div className="mt-12 flex items-center text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors duration-300 mt-auto pt-4">
                <span>Explore</span>
                <MoveRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
