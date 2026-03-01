import TutSection from "../../components/shared/TutSection";
import DSSection from "../../components/shared/DSSection";
import TactSection from "../../components/shared/Tactsection";
import ThinkSection from "../../components/shared/ThinkSection";
import InsightifySection from "../../components/shared/InsightifySection";
import MediaMagnetSection from "../../components/shared/Mediamagnetsection";

export default function Services() {
  const services = [
    { label: "MEDIA PRODUCTIONS", url: "" },
    { label: "PUBLIC POLICY", url: "" },
    { label: "AI SOLUTIONS", url: "" },
    { label: "E-COMMERCE & TRADE", url: "" },
    { label: "PR & MARKETING", url: "" },
    { label: "STRATEGIC FORSIGHT", url: "" },
    { label: "WEBSITE, APPS & AI", url: "" },
    { label: "ADVERTISING CAMPAIGNS", url: "" },
    { label: "BRANDING STRATEGIES", url: "" },
    { label: "SPACE DESIGN", url: "" },
    { label: "CONTENT CREATION", url: "" },
    { label: "SOCIAL MEDIA", url: "" },
    { label: "MEDIA BUYING", url: "" },
    { label: "DOCUMENTARY PRODUCTION", url: "" },
    { label: "SCRIPT WRITING", url: "" },
  ];

  return (
    <>
      <section
        id="services"
        className="bg-services-cover w-full relative overflow-hidden"
      >
        {/* Glass morphism container */}
        <div className="absolute inset-0">
          <div className=" mx-auto px-4 sm:px-8 md:px-12 py-39 sm:py-16 md:py-20 lg:py-24 xl:py-32">
            {/* Title */}
            <h3 className="text-center text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-normal mb-8 sm:mb-10 md:mb-12 text-black">
              Our Services
            </h3>

            {/* Services Grid - Fixed responsive wrapping */}
            <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 md:gap-4 w-full max-w-[1200px] mx-auto px-2 sm:px-4 mb-12 sm:mb-16">
              {services.map((service, index) => (
                <button
                  // onClick={() => {
                  //   window.open(service.url, "_blank", "noopener,noreferrer");
                  // }}
                  key={index}
                  className="service-button px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-[#D2D4D1]/90 text-black text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)] whitespace-nowrap"
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TUT Section - Continues with same background */}
        <div className="relative mt-[100vh] sm:mt-[90vh] md:mt-[80vh] lg:mt-[70vh]">
          <TutSection />
        </div>

        {/* DS Section - Continues with same background */}
        <div className="relative">
          <DSSection />
        </div>

        {/* TACT Section - Continues with same background */}
        <div className="relative">
          <TactSection />
        </div>

        {/* THINK Section - Has its own background image */}
        <ThinkSection />

        {/* Insightify Section - Has its own background image */}
        <InsightifySection />

        {/* Media Magnet Section - Continues with same background */}
        <MediaMagnetSection />
      </section>
    </>
  );
}
