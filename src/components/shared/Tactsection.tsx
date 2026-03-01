import TactLogo from "../../assets/tact.png"; // Update with your actual logo path
import TactImage1 from "../../assets/tactImage1.webp"; // Update with your actual image path
import TactImage2 from "../../assets/tactImage2.webp"; // Update with your actual image path

export default function TactSection() {
  return (
    <section id="tact" className="min-h-screen w-full py-16">
      <div className="  mx-auto px-4 sm:px-12 overflow-hidden">
        {/* Glass Box Container */}
        <div className="bg-white/10 backdrop-blur-xs rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.1)] border border-white/30 p-8 sm:p-12">
          <div className="grid grid-cols-1 space-x-15 lg:grid-cols-2 gap-12 items-stretch min-h-[700px]">
            {/* Left Side - Content */}
            <div
              data-aos="fade-right"
              className="flex flex-col justify-between h-full"
            >
              {/* Logo */}
              <div className="mb-8">
                <img
                  src={TactLogo}
                  alt="TACT Logo"
                  className="h-20 sm:h-24 mb-4"
                />
              </div>

              {/* First Description - Main Heading */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl   lg:text-3xl font-normal leading-tight text-black">
                  FROM CONCEPT TO COMPLETION, TACT BLENDS ENGINEERING EXCELLENCE
                  WITH TACTICAL PROJECT MANAGEMENT TO SHAPE ENVIRONMENTS THAT
                  REFLECT VISION, FUNCTION, AND FORM. WHETHER COMMERCIAL,
                  CULTURAL, OR URBAN DEVELOPMENT — TACT BUILDS WITH INTENTION
                  AND IMPACT.
                </h3>
              </div>

              {/* Second Description - Body Text */}
              <div className="mb-auto">
                <p className="text-sm sm:text-2xl  lg:pt-20 text-black leading-relaxed">
                  Tact is the execution arm of Pylon Holding, delivering
                  high-quality construction and infrastructure services with a
                  focus on efficiency, innovation, and design integrity.
                </p>
              </div>

              {/* Spacer to push button down */}
              <div className="flex-grow"></div>

              {/* Button */}
              <div
                onClick={() => {
                  window.open(
                    "https://tactinnovations.com/",
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
                className="mt-8"
              >
                <button className="service-button px-8 py-4 rounded-full bg-[#D2D4D1]/90 text-black text-[11px] sm:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                  GO TO WEBSITE
                </button>
              </div>
            </div>

            {/* Right Side - Images and Text */}
            <div
              data-aos="fade-left"
              className="flex flex-col justify-between h-full space-y-6"
            >
              {/* Top Image */}
              <div className="flex-1 overflow-hidden rounded-lg">
                <img
                  src={TactImage1}
                  alt="TACT Project 1"
                  className="w-full h-full object-cover  transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Middle Text */}
              <div className="py-4">
                <p className="text-xs sm:text-sm tracking-wider uppercase text-black text-left">
                  BUILDING WITH PRECISION. DEVELOPING WITH PURPOSE.
                </p>
              </div>

              {/* Bottom Image */}
              <div className="flex-1 overflow-hidden rounded-lg">
                <img
                  src={TactImage2}
                  alt="TACT Project 2"
                  className="w-full h-full object-cover  transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
