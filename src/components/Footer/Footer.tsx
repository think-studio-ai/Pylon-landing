import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-white/5 text-white pt-24 pb-12 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18181B] pointer-events-none -z-10"></div>
      <div className="max-w-[1200px] w-full mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          {/* Left Column: Brand */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              Pylon Collective
            </h2>
            <p className="text-[14px] text-gray-400 leading-relaxed font-medium max-w-sm mb-8">
              A symbol of purpose, power, and progress. Building the next
              generation of experiences through a unified force of specialized
              talent spanning culture, immersive technologies, and strategic
              communications.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[#fff] text-[13px] font-semibold hover:text-white transition-colors flex items-center gap-2"
            >
              Back to Top <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="hidden md:block md:col-span-1"></div>

          {/* Right Column: Ecosystem Links */}
          <div className="md:col-span-6">
            <h3 className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase mb-8">
              Our Ecosystem
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                { name: "DS+", url: "https://digitalstudioeg.com/" },
                { name: "THINK", url: "https://thinkstudio.ai/" },
                { name: "INSIGHTIFY", url: "https://insightify-eg.com/" },
                { name: "MEDIA MAGNET", url: "https://mediamagneteg.com/" },
                { name: "TUT GROUP", url: "https://tut-landing.vercel.app/" },
                { name: "BOCSHA", url: "https://bocsha.com/" },
                { name: "LUMI FARM", url: "" },
                { name: "QUIP", url: "" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-medium text-gray-300 hover:text-white transition-colors w-max"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 gap-6">
          <div className="flex gap-6">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/pylonholding/posts/?feedView=all",
              },
              { name: "Instagram", url: "#" },
              { name: "Twitter", url: "#" },
            ].map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
                className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
          <div className="text-[13px] text-gray-500 font-medium">
            © {new Date().getFullYear()} Pylon Holding. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

