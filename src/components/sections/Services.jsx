import Image from "next/image";
import { Smile, DraftingCompass, Code2 } from "lucide-react";

const LetsTalkButton = () => (
  <a
    href="#"
    className="inline-flex items-center gap-3 bg-black text-white font-medium text-[15px] rounded-full py-3 px-7 hover:bg-black/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
  >
    Let's Talk
    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
  </a>
);

const ServiceCard = ({ children, className }) => (
  <div
    className={`bg-white rounded-[24px] p-7 md:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300 ${
      className || ""
    }`}
  >
    {children}
  </div>
);

const ServicesSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-14 md:mb-16 gap-8">
          <div className="max-w-[550px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-red-600 mb-5">
              OUR SERVICES
            </p>
            <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.15] text-black">
              What we do best
            </h2>
            <p className="mt-5 text-[17px] md:text-[18px] text-[#1f1f1f] leading-[1.6]">
              We help studios and creatives build brands, launch websites, and
              grow with confidence.
            </p>
          </div>
          <div className="hidden lg:flex items-start pt-2">
            <LetsTalkButton />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Branding Design Card - Spans 2 columns */}
          <ServiceCard className="lg:col-span-2 flex flex-col md:flex-row gap-7 md:gap-8">
            <div className="flex flex-1 flex-col">
              <Smile className="h-8 w-8 text-black" strokeWidth={1.5} />
              <h3 className="mt-5 text-[22px] md:text-[24px] font-bold text-black leading-[1.3]">
                Branding Design
              </h3>
              <p className="mt-4 flex-grow text-[15px] md:text-[16px] text-[#1f1f1f] leading-[1.65]">
                We craft bold, cohesive brand identities that tell your story
                and leave a lasting impression.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f5f5f5] px-4 py-1.5 text-[14px] font-medium text-[#1f1f1f]">
                  Brand Identity
                </span>
                <span className="rounded-full bg-[#f5f5f5] px-4 py-1.5 text-[14px] font-medium text-[#1f1f1f]">
                  Logo Design
                </span>
                <span className="rounded-full bg-[#f5f5f5] px-4 py-1.5 text-[14px] font-medium text-[#1f1f1f]">
                  +more
                </span>
              </div>
            </div>
            <div className="relative flex-1 min-h-[280px] md:min-h-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/063cf15c-7f1b-4029-ab50-3c6cdca41c52-innovative-people-425215-framer-app/assets/images/lokN0vfMKGBetv9KRCHGtYFimg-13.png"
                alt="Branding design materials"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-[20px] object-cover"
              />
            </div>
          </ServiceCard>

          {/* Framer Website Card */}
          <ServiceCard className="flex flex-col justify-between min-h-[320px]">
            <DraftingCompass className="h-8 w-8 text-black" strokeWidth={1.5} />
            <div>
              <h3 className="text-[22px] md:text-[24px] font-bold text-black leading-[1.3]">
                Framer Website
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] text-[#1f1f1f] leading-[1.65]">
                Build stunning, interactive websites that engage and convert.
              </p>
            </div>
          </ServiceCard>

          {/* Web Development Card */}
          <ServiceCard className="flex flex-col justify-between min-h-[320px]">
            <Code2 className="h-8 w-8 text-black" strokeWidth={1.5} />
            <div>
              <h3 className="text-[22px] md:text-[24px] font-bold text-black leading-[1.3]">
                Web Development
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] text-[#1f1f1f] leading-[1.65]">
                Custom development solutions that bring your vision to life.
              </p>
            </div>
          </ServiceCard>
        </div>

        {/* Mobile button */}
        <div className="mt-10 flex justify-center lg:hidden">
          <LetsTalkButton />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
