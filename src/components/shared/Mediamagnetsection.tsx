import MediaMagnetLogo from "../../assets/mediaMagnet.png";
import MediaMagnetBottomImage from "../../assets/mediaMagnet1.webp";

export default function MediaMagnetSection() {
  return (
    <section id="media" className=" w-full py-12 sm:py-14 md:py-16">
      <div className=" mx-auto px-4 sm:px-8 md:px-12 overflow-hidden">
        {/* Top Grid - Left and Right Sides */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-8 sm:mb-10 md:mb-12">
          {/* Left Side - Logo and Descriptions */}
          <div
            data-aos="fade-right"
            className="flex flex-col space-y-6 sm:space-y-7 md:space-y-8"
          >
            {/* Logo */}
            <div className="mb-3 sm:mb-4">
              <div className="mb-6 sm:mb-7 md:mb-8">
                <img
                  src={MediaMagnetLogo}
                  alt="Media Magnet Logo"
                  className="h-12 sm:h-14 md:h-16 lg:h-20"
                />
              </div>
            </div>

            {/* First Description */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-[#3B3B3B] leading-relaxed font-light">
                MEDIA MAGNET IS PYLON Holding'S HUB FOR DIGITAL STORYTELLING AND
                SOCIAL INFLUENCE. FROM VIRAL VIDEOS AND BRAND STORYTELLING TO
                INFLUENCER PARTNERSHIPS AND DIGITAL ACTIVATIONS, MEDIA MAGNET
                HELPS BRANDS GROW THEIR VOICE, SHAPE PERCEPTION, AND STAY AT THE
                CENTER OF CULTURE.
              </h3>
            </div>

            {/* Second Description */}
            <div>
              <p className="text-xs sm:text-sm md:text-base text-[#3B3B3B]/80 leading-relaxed">
                DRIVING CONVERSATIONS. CREATING CONTENT THAT CONNECTS
              </p>
            </div>
          </div>

          {/* Right Side - Description and Button */}
          <div
            data-aos="fade-left"
            className="flex flex-col justify-between h-full items-start"
          >
            {/* Description Text */}
            <div className="flex-grow flex items-start lg:mt-33 ">
              <p className="text-xs sm:text-sm md:text-base text-[#3B3B3B] max-w-full lg:max-w-[260px] leading-relaxed">
                Specializing in content creation, social media strategy, and PR
                campaigns, we craft bold narratives that resonate across
                platforms.
              </p>
            </div>

            {/* Button */}
            <div
              onClick={() => {
                window.open(
                  "http://mediamagneteg.com/",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
              className="mt-4 sm:mt-5"
            >
              <button className="service-button px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-[#D2D4D1]/90 text-black text-[10px] sm:text-[11px] md:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                GO TO WEBSITE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Wide Image */}
        <div data-aos="fade-up" className="w-full">
          <div className="h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg">
            <img
              src={MediaMagnetBottomImage}
              alt="Media Magnet Content"
              className="w-full h-full object-fill transition-transform duration-500 ease-out hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
