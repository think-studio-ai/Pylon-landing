import { motion } from "framer-motion";
import { Network, Lightbulb, Users } from "lucide-react";
import SplitText from "../../components/SplitText";

export default function Culture() {
  return (
    <section id="culture" className="relative w-full py-32  overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col items-start gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-white"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase mt-1">
                Our Culture
              </span>
            </motion.div>
            <SplitText
              text="Culture of"
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
              delay={40}
              duration={1}
              tag="h2"
            />
            <SplitText
              text="Innovation"
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-500 leading-[1.1]"
              delay={40}
              duration={1}
              tag="h2"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg text-gray-400 max-w-md font-medium leading-relaxed"
          >
            Experts across disciplines, working on what's next.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto] md:auto-rows-[340px]">
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 md:row-span-2 group relative p-10 sm:p-14 rounded-[2rem] bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 overflow-hidden flex flex-col min-h-[400px] md:min-h-full"
          >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="relative z-10 h-full flex flex-col justify-between flex-grow">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-500">
                <Network className="w-8 h-8 text-white" />
              </div>

              <div className="mt-auto">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  The Ecosystem <br />
                  <span className="text-gray-500">of Minds</span>
                </h3>
                <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed font-medium">
                  At Pylon Collective, our strength is our people. From civil
                  engineers to data scientists, spatial designers to media
                  strategists, we connect diverse brilliance to architect
                  unprecedented solutions.
                </p>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -bottom-1/2 -right-1/2 w-[80%] h-[80%] bg-white/5 blur-[120px] rounded-full group-hover:bg-white/10 transition-colors duration-700 pointer-events-none"></div>
          </motion.div>

          {/* Top Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 md:row-span-1 group relative p-10 rounded-[2rem] bg-[#0d0d0d] border border-white/5 overflow-hidden flex flex-col justify-between min-h-[300px] md:min-h-full"
          >
            <div className="flex justify-between items-start relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:-rotate-12 transition-transform duration-500">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Vision
              </span>
            </div>
            <div className="relative z-10 mt-auto pt-8">
              <h4 className="text-3xl font-bold text-white mb-3 tracking-tight">
                Future Ready
              </h4>
              <p className="text-gray-500 leading-relaxed font-medium">
                We don't wait for what's next. We build it.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 blur-[60px] group-hover:bg-white/10 transition-colors duration-500 pointer-events-none"></div>
          </motion.div>

          {/* Bottom Right Card - High Contrast Accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4 md:row-span-1 group relative p-10 rounded-[2rem] border border-white bg-white overflow-hidden flex flex-col justify-between min-h-[300px] md:min-h-full cursor-pointer hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-shadow duration-500"
          >
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Users className="w-6 h-6 text-black" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-black/60 px-4 py-2 rounded-full border border-black/10 bg-black/5">
                Collaboration
              </span>
            </div>
            <div className="relative z-10 mt-auto pt-8">
              <h4 className="text-3xl font-bold text-black mb-3 tracking-tight">
                Excellence
              </h4>
              <p className="text-black/70 leading-relaxed font-medium">
                A relentless pursuit of perfection across every
                multi-disciplinary project and initiative.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
