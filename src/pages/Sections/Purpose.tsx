import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountUp from "../../components/CountUp";

const pillars = [
  {
    number: "01",
    title: "Design",
    label: "Strategy & Architecture",
    description:
      "We define the structure before a single brick is laid — strategy, architecture, and systems that hold up under real pressure.",
  },
  {
    number: "02",
    title: "Build",
    label: "Engineering & Infrastructure",
    description:
      "We build infrastructure that works today and scales tomorrow — across technology, culture, and capital.",
  },
  {
    number: "03",
    title: "Operate",
    label: "Management & Ecosystem",
    description:
      "We run what we build. With the discipline of institutions and the speed of founders.",
  },
];



export default function Purpose() {
  return (
    <section id="purpose" className="relative w-full overflow-hidden ">
      {/* ── Subtle top gradient ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      {/* ──────────────────────────────────────────────
          HERO STATEMENT — Full viewport feel
      ────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-white/[0.06]">
          {/* Section indicator */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-between mb-14 sm:mb-20"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-1.5 h-1.5">
                <div className="absolute inset-0 rounded-full bg-white" />
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-35" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.32em] uppercase text-white/45">
                Our Purpose
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-[10px] font-mono tracking-[0.18em] text-white/15 uppercase">
              <span>Pylon Collective</span>
              <span className="w-4 h-px bg-white/10" />
              <span>§ 01</span>
            </div>
          </motion.div>

          {/* ── Two-tone monumental headline ── */}
          <div className="mb-16 sm:mb-20">
            {/* Line 1 — solid white */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-black text-white leading-[0.88] tracking-[-0.05em] uppercase"
                style={{ fontSize: "clamp(3.2rem, 11.5vw, 11.5rem)" }}
              >
                We Build
              </motion.h2>
            </div>

            {/* Line 2 — outlined (ghost), shifted right */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  delay: 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-black leading-[0.88] tracking-[-0.05em] uppercase"
                style={{
                  fontSize: "clamp(3.2rem, 11.5vw, 11.5rem)",
                  paddingLeft: "clamp(0rem, 5vw, 7rem)",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.22)",
                  color: "transparent",
                }}
              >
                Tomorrow.
              </motion.h2>
            </div>
          </div>

          {/* ── Mission + Stats — two columns ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 md:items-end">
            {/* Mission */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-400 font-light leading-[1.9] max-w-xl"
            >
              The world’s most important institutions aren’t inherited {""}
              <span className="text-white font-medium italic">
                {""} — they’re built. We design them
              </span>{" "}
              <span className="text-white font-medium italic">build them,</span>{" "}
              and operate them.
            </motion.p>

            {/* Stats block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="flex gap-8 sm:gap-10 md:flex-col md:gap-5 md:items-end"
            >
              {/* Stat 1 — Active Entities */}
              <div className="flex flex-col items-start md:items-end gap-1">
                <span className="text-3xl sm:text-4xl font-black   text-white tracking-[-0.04em] leading-none">
                  <CountUp
                    from={0}
                    to={8}
                    direction="up"
                    duration={2.5}
                    className="count-up-text "
                  />
                  <span>+</span>
                </span>
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/25">
                  Active Entities
                </span>
              </div>

              {/* Stat 2 — Year Founded */}
              <div className="flex flex-col items-start md:items-end gap-1">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-[-0.04em] leading-none">
                  <CountUp
                    from={1800}
                    to={1979}
                    direction="up"
                    duration={1.5}
                    separator=""
                    className="count-up-text"
                  />
                </span>
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/25">
                  Year Founded
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────
            PILLARS — Full-width editorial rows
        ────────────────────────────────────────────── */}
        <div className="pb-20 sm:pb-32">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative border-b border-white/[0.06] last:border-b-0"
            >
              {/* Full-width hover background reveal */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.025] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative grid grid-cols-[auto_1fr] sm:grid-cols-[80px_1fr_1fr_auto] gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-0 items-start sm:items-center py-8 sm:py-10 md:py-12">
                {/* Column 1 — Number */}
                <div className="flex flex-col pt-1">
                  <span className="text-[11px] font-mono text-white/18 tracking-[0.22em] leading-none">
                    {pillar.number}
                  </span>
                </div>

                {/* Column 2 — Title */}
                <div className="sm:col-start-2 sm:col-end-3">
                  <h3
                    className="font-black text-white tracking-[-0.035em] leading-none group-hover:text-gray-200 transition-colors duration-300 uppercase"
                    style={{ fontSize: "clamp(1.6rem, 3.5vw, 3.2rem)" }}
                  >
                    {pillar.title}
                  </h3>
                  <span className="mt-2 block text-[10px] font-bold tracking-[0.22em] uppercase text-white/20">
                    {pillar.label}
                  </span>
                </div>

                {/* Column 3 — Description (full width on mobile, right col on desktop) */}
                <motion.p
                  initial={{ opacity: 0.6 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="col-span-2 sm:col-span-1 sm:col-start-3 text-sm sm:text-base text-gray-500 font-light leading-[1.85] group-hover:text-gray-400 transition-colors duration-400 max-w-md"
                >
                  {pillar.description}
                </motion.p>

                {/* Column 4 — Arrow CTA */}
                <div className="hidden sm:flex col-start-4 items-center justify-end pl-4">
                  <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-400 shrink-0">
                    <ArrowRight className="w-4 h-4 text-white/25 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
