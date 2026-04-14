import  { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoImage from "../../../public/pylon holding.ico";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 max-w-[1200px] mx-auto rounded-full ${
          scrolled || menuOpen
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="px-5 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={LogoImage} alt="Pylon Logo" className="h-5 sm:h-6 object-contain" />
            <div className="font-bold text-[14px] tracking-[0.1em] text-white">
              PYLON
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: "Ecosystem", id: "ecosystem" },
              { name: "Capabilities", id: "services" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <button 
            onClick={() => window.open("https://www.linkedin.com/company/pylonholding/posts/?feedView=all", "_blank", "noopener,noreferrer")}
            className="hidden lg:block px-5 py-2 rounded-full bg-white text-[#111827] text-[12px] font-bold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Contact Us
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0A0A0A] transition-transform duration-500 ease-in-out flex flex-col justify-center items-center gap-8 lg:hidden ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {[
          { name: "Ecosystem", id: "ecosystem" },
          { name: "Capabilities", id: "services" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-bold text-white tracking-widest uppercase hover:text-gray-400 transition-colors"
          >
            {item.name}
          </a>
        ))}
        <button 
          onClick={() => window.location.href = "https://www.linkedin.com/company/pylonholding/posts/?feedView=all"}
          className="mt-8 px-8 py-3 rounded-full bg-white text-black text-[14px] font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]"

        >
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Navbar;

