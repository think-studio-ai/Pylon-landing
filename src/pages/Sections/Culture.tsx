
export default function Culture() {
  return (
    <section
      id="culture"
      className="relative w-full flex items-center bg-transparent py-24 overflow-hidden"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[500px] bg-white/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] w-full mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] sm:leading-tight">
              Culture of<br/><span className="text-gray-500">Innovation</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#fff] mb-8"></div>
            <p className="text-[12px] font-bold tracking-[0.2em] text-[#fff] uppercase">
              Excellence • Collaboration • Vision
            </p>
          </div>

          <div className="md:col-span-7" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
            <div className="enterprise-card p-10 sm:p-14 md:-ml-8 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-50 pointer-events-none"></div>
              <p className="text-[16px] sm:text-[18px] text-gray-300 leading-relaxed font-medium relative z-10">
                At Pylon Holding, our ecosystem is built on the strength of our people. We cultivate a culture where multi-disciplinary experts—from civil engineers and data scientists to spatial designers and media strategists—collaborate to solve complex challenges. We don't just adapt to the future; we build it.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
