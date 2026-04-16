import SplitText from "../../components/SplitText";
import { useRef, useState, useEffect, type ReactNode } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

interface MarqueeRowProps {
  items: string[];
  baseVelocity?: number;
  renderTextItem: (text: string, key: string) => ReactNode;
}

function MarqueeRow({ items, baseVelocity = -50, renderTextItem }: MarqueeRowProps) {
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  useEffect(() => {
    const measureInfo = () => {
      if (containerRef.current) {
        // Since we have two identical children block (.flex), scrollWidth / 2 gives us the width of one block
        setContentWidth(containerRef.current.scrollWidth / 2);
      }
    };
    measureInfo();
    window.addEventListener("resize", measureInfo);
    return () => window.removeEventListener("resize", measureInfo);
  }, []);

  useAnimationFrame((_, delta) => {
    if (isDragging || !contentWidth) return;

    let moveBy = baseVelocity * (delta / 1000); 
    let newX = x.get() + moveBy;

    if (baseVelocity < 0) {
      if (newX <= -contentWidth) {
        newX += contentWidth;
      }
    } else {
      if (newX >= 0) {
        newX -= contentWidth;
      }
    }

    x.set(newX);
  });

  const handlePan = (_: any, info: any) => {
    if (!contentWidth) return;
    let newX = x.get() + info.delta.x;

    if (newX <= -contentWidth) {
      newX += contentWidth;
    } else if (newX > 0) {
      newX -= contentWidth;
    }
    x.set(newX);
  };

  return (
    <motion.div
      ref={containerRef}
      className="w-max flex items-center cursor-grab active:cursor-grabbing"
      style={{ x }}
      onPanStart={() => setIsDragging(true)}
      onPanEnd={() => setIsDragging(false)}
      onPan={handlePan}
    >
      <div className="flex items-center">
        {items.map((item, i) => renderTextItem(item, `p1-${i}`))}
      </div>
      <div className="flex items-center">
        {items.map((item, i) => renderTextItem(item, `p2-${i}`))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const row1 = [
    "MEDIA PRODUCTIONS", "PUBLIC POLICY", "AI SOLUTIONS", 
    "E-COMMERCE & TRADE", "PR & MARKETING", "STRATEGIC FORSIGHT", "WEBSITE, APPS & AI"
  ];
  
  const row2 = [
    "ADVERTISING CAMPAIGNS", "BRANDING STRATEGIES", "SPACE DESIGN", 
    "CONTENT CREATION", "SOCIAL MEDIA", "MEDIA BUYING", "DOCUMENTARY PRODUCTION", "SCRIPT WRITING"
  ];

  const renderTextItem = (text: string, key: string) => (
    <div key={key} className="flex items-center mx-4 sm:mx-8 group select-none">
      <span className="text-[40px] sm:text-[60px] md:text-[60px] lg:text-[60px] font-bold text-transparent tracking-tighter transition-all duration-300 group-hover:text-white group-hover:scale-105" 
            style={{ WebkitTextStroke: '1px #525252' }}>
        {text}
      </span>
      <span className="ml-8 sm:ml-16 w-3 h-3 sm:w-4 sm:h-4 bg-[#525252] group-hover:bg-white rounded-full transition-colors"></span>
    </div>
  );

  return (
    <section id="services" className="relative w-full py-32 bg-transparent overflow-hidden border-t border-white/5">
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
        <MarqueeRow items={row1} baseVelocity={-50} renderTextItem={renderTextItem} />

        {/* Row 2 - Scrolling Right */}
        <MarqueeRow items={row2} baseVelocity={50} renderTextItem={renderTextItem} />

      </div>
    </section>
  );
}
