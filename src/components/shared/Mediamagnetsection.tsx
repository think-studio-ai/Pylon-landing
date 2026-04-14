import MediaMagnetLogo from "../../assets/mediaMagnet.png";
import MediaMagnetBottomImage from "../../assets/mediaMagnet1.webp";

export default function MediaMagnetSection() {
  return (
    <section id="media" className="w-full py-24 sm:py-32 border-b-2 border-[#111111] relative overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 lg:mb-24">
          
          {/* Left Title Column */}
          <div data-aos="fade-right" data-aos-duration="1000" className="lg:col-span-5">
            <div className="mb-8 border-b-4 border-[#111111] pb-6 inline-block">
              <img src={MediaMagnetLogo} alt="Media Magnet Logo" className="h-10 sm:h-14 object-contain filter invert opacity-90" />
            </div>

            <p className="text-[12px] sm:text-[14px] font-bold tracking-[0.2em] uppercase text-[#111111] mb-6 inline-block bg-[#D4AF37] px-2 py-1">
              [ SOCIAL INFLUENCE ]
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#111111] font-black leading-[0.9] mb-8 tracking-tighter uppercase mt-4">
              DRIVING<br/>CONVERSATION.
            </h2>
          </div>

          {/* Right Text Column */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="lg:col-span-7 flex flex-col justify-between h-full pt-0 lg:pt-12">
            <div className="brutal-panel p-6 sm:p-10 mb-8 border-l-8 border-l-[#D4AF37]">
              <h2 className="text-[18px] sm:text-[22px] text-[#111111] font-black leading-snug mb-4 tracking-tighter uppercase">
                Media Magnet is Pylon's hub for digital storytelling.
              </h2>
              <p className="text-[14px] sm:text-[16px] text-[#222222] leading-relaxed mb-6 font-medium">
                From viral videos and brand storytelling to influencer partnerships and digital activations, Media Magnet helps brands grow their voice, shape perception, and stay at the center of culture.
              </p>
              <p className="text-[14px] text-[#666666] leading-relaxed font-normal">
                Specializing in content creation, social media strategy, and PR campaigns, we craft bold narratives that resonate across platforms.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <button
                onClick={() => window.open("http://mediamagneteg.com/", "_blank", "noopener,noreferrer")}
                className="brutal-panel bg-[#111111] text-[#FAFAFA] px-8 py-4 text-[13px] font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0_#D4AF37] hover:shadow-[6px_6px_0_#D4AF37]"
              >
                WWW.MEDIAMAGNETEG.COM &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* Massive Full Width Image Bottom */}
        <div data-aos="fade-up" data-aos-duration="1200" className="w-full relative">
          <div className="h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden border-2 border-[#111111] shadow-[8px_8px_0_#111111]">
            <img
              src={MediaMagnetBottomImage}
              alt="Media Magnet Content"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105 filter grayscale hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8 bg-[#FAFAFA] border-2 border-[#111111] px-4 py-2 text-[14px] font-bold text-[#111111] uppercase tracking-widest shadow-[4px_4px_0_#111111]">
            CONTENT THAT CONNECTS
          </div>
        </div>
      </div>
    </section>
  );
}
