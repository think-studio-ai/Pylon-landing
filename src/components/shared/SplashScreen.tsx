import { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"dot" | "line" | "text" | "fade">("dot");

  useEffect(() => {
    // 1. Initial sleep then Dot -> Line
    const t1 = setTimeout(() => setPhase("line"), 600);
    // 2. Line -> Reveal Text
    const t2 = setTimeout(() => setPhase("text"), 1400);
    // 3. Hold text then Fade/Rise the curtain
    const t3 = setTimeout(() => setPhase("fade"), 3000);
    // 4. Fully unmount component globally
    const t4 = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center transition-transform duration-[800ms] ease-[cubic-bezier(0.65,0,0.05,1)] ${
        phase === "fade" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-lg h-40">
        
        {/* The Central Line/Dot */}
        <div 
          className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white transition-all duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] z-10 ${
            phase === "dot" ? "w-[4px] h-[4px] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" : 
            phase === "line" || phase === "text" ? "w-[70%] sm:w-[300px] h-[1px] shadow-[0_0_20px_rgba(255,255,255,0.5)]" :
            "w-[70%] sm:w-[300px] h-[1px] opacity-0 shadow-none"
          }`}
        ></div>

        {/* Top Text: PYLON */}
        <div className={`absolute bottom-1/2 left-0 w-full flex justify-center items-end overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          phase === "text" ? "h-20 opacity-100" : "h-0 opacity-0"
        }`}>
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-[0.4em] sm:tracking-[0.5em] translate-y-1 uppercase -mr-[0.4em] pb-[2px]">
            PYLON
          </h1>
        </div>

        {/* Bottom Text: HOLDING */}
        <div className={`absolute top-1/2 left-0 w-full flex justify-center items-start overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          phase === "text" ? "h-16 opacity-100" : "h-0 opacity-0"
        }`}>
          <h2 className="text-gray-500 text-xs sm:text-sm font-medium tracking-[0.8em] sm:tracking-[1em] -translate-y-1 uppercase pt-3 -mr-[0.8em]">
            HOLDING
          </h2>
        </div>

      </div>
    </div>
  );
}
