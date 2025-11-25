"use client";

const ProcessSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT COLUMN */}
          <div>
            <p className="font-medium text-red-1 text-[16px] uppercase font-sans mb-2">
              OUR PROCESS
            </p>

            <h2 className="text-[36px] md:text-[52px] lg:text-[48px] text-primary font-semibold leading-[1.1] max-w-4xl text-left tracking-tight">
              A simple, <br /> collaborative process
            </h2>

            <p className="mt-2 text-[17px] md:text-[18px] text-secondary max-w-[520px] leading-[1.2]">
              We keep things clear, creative, and collaborative, so you always
              know what’s happening and what's next.
            </p>
          </div>

          {/* RIGHT COLUMN — STACKED CARDS */}
          <div className="flex flex-col gap-5 px-12">
            {/* CARD 1 */}
            <div className="bg-white rounded-[40px] px-2 py-3 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6 ml-4">
                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                <h3 className="text-[26px] font-semibold text-primary">
                  Discover
                </h3>
              </div>

              <div className="bg-gray-100 rounded-[40px] p-5 text-[18px] text-gray-600 leading-[1.3] tracking-tight">
                We start with a friendly chat to understand your goals,
                challenges, and vision. It’s all about getting aligned from day
                one.
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-[40px] px-2 py-3 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6 ml-4">
                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                <h3 className="text-[26px] font-semibold text-primary">
                  Planning
                </h3>
              </div>

              <div className="bg-gray-100 rounded-[40px] p-5 text-[18px] text-gray-600 leading-[1.3] tracking-tight">
                From defining the scope to outlining the timeline and
                deliverables, we map out a plan that fits your needs.
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-[40px] px-2 py-3 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6 ml-4">
                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                <h3 className="text-[26px] font-semibold text-primary">
                  Development
                </h3>
              </div>

              <div className="bg-gray-100 rounded-[40px] p-5 text-[18px] text-gray-600 leading-[1.3] tracking-tight">
                This is where the magic happens, we bring your brand and website
                to life through intentional design and development.
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-[40px] px-2 py-3 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6 ml-4">
                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                <h3 className="text-[26px] font-semibold text-primary">
                  Deliver
                </h3>
              </div>

              <div className="bg-gray-100 rounded-[40px] p-5 text-[18px] text-gray-600 leading-[1.3] tracking-tight">
                Once everything’s polished and approved, we deliver the final
                files, assets, and instructions so you’re ready to launch with
                confidence.
              </div>
            </div>

            {/* CARD 5 */}
            <div className="bg-white rounded-[40px] px-2 py-3 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6 ml-4">
                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                <h3 className="text-[26px] font-semibold text-primary">
                  Support
                </h3>
              </div>

              <div className="bg-gray-100 rounded-[40px] p-5 text-[18px] text-gray-600 leading-[1.3] tracking-tight">
                We stick around after launch with optional support, tweaks, and
                guidance, because we care about what happens after “go live”
                too.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
