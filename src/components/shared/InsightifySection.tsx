import InsightifyLogo from "../../assets/insightify.png"; // Update with your actual logo path
import InsightifyImage1 from "../../assets/insightifyImage1.webp"; // Image inside glass box
import InsightifyImage2 from "../../assets/insightifyImage2.webp"; // Top right image
import InsightifyImage3 from "../../assets/insightifyImage3.webp"; // Bottom right image

export default function InsightifySection() {
  return (
    <section
      id="insightify"
      className=" w-full py-16 relative bg-insightify-cover bg-cover bg-center bg-no-repeat"
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="  mx-auto px-4 sm:px-12 overflow-hidden relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[800px]">
          {/* Left Side - Glass Box with Content and Image */}
          <div data-aos="fade-right" className="flex flex-col h-full">
            {/* Glass Box Container */}
            <div className="bg-[#0a3a5c]/30 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-xl border border-white/20 flex flex-col h-full">
              {/* Logo */}
              <div className="mb-8">
                <img
                  src={InsightifyLogo}
                  alt="Insightify Logo"
                  className="h-16 sm:h-20"
                />
              </div>

              {/* First Description - Main Heading */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-normal leading-tight text-white">
                  TRANSLATING DATA AND INSIGHT INTO DECISIONS THAT SHAPE THE
                  FUTURE.{" "}
                  <span className="underline font-extrabold">
                    {" "}
                    INSIGHTIFY IS PYLON'S STRATEGIC BRAIN{" "}
                  </span>
                  , A POLICY AND RESEARCH POWERHOUSE DELIVERING ACTIONABLE
                  INTELLIGENCE TO GOVERNMENTS, INSTITUTIONS, AND ORGANIZATIONS.
                  WITH A DEEP UNDERSTANDING OF REGIONAL CONTEXT AND GLOBAL
                  DYNAMICS, INSIGHTIFY SUPPORTS DECISION-MAKERS IN BUILDING
                  RESILIENT POLICIES AND MEANINGFUL CHANGE.
                </h3>
              </div>

              {/* Second Description - Body Text */}
              <div className="mb-8">
                <span className="text-sm sm:text-base text-white/90 leading-tight">
                  With deep regional knowledge and strategic clarity, we support
                  institutions and governments in building frameworks that drive
                  equitable growth and cultural relevance.
                </span>
              </div>

              {/* Button */}
              <div
                onClick={() => {
                  window.open(
                    "https://insightify-eg.com/",
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
                className="mb-8"
              >
                <button className="service-button px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                  GO TO WEBSITE
                </button>
              </div>

              {/* Image inside Glass Box */}
              <div className="mt-auto flex-grow">
                <div className="h-[280px] overflow-hidden rounded-lg">
                  <img
                    src={InsightifyImage3}
                    alt="Insightify Research"
                    className="w-full h-full object-fill transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 2 Images with Text Between */}
          <div
            data-aos="fade-left"
            className="flex flex-col justify-start space-y-6 h-full"
          >
            {/* Top Image */}
            <div className="  h-[380px] lg:h-[500px] overflow-hidden rounded-lg">
              <img
                src={InsightifyImage1}
                alt="Policy Research"
                className="w-full h-full object-fill transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Text Between Images */}
            <div className="py-4">
              <span className="text-xs sm:text-sm tracking-wider uppercase text-white">
                PUBLIC POLICY, RESEARCH AND STRATEGIC ADVISORY
              </span>
            </div>

            {/* Bottom Image */}
            <div className="h-[380px] overflow-hidden rounded-lg">
              <img
                src={InsightifyImage2}
                alt="Strategic Advisory"
                className="w-full h-full object-fill transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
