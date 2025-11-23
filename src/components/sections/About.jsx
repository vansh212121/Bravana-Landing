"use client";

import { Play } from "lucide-react";
import { TalkButton } from "../ui/AnimatedButton";

const AnimatedIcon = () => (
  <div className="relative w-11 h-11 mx-2 md:w-[50px] md:h-[50px] bg-white shadow-sm shadow-black/35 inline-flex items-center justify-center rounded-xl">
    <img
      src="/assets/about_icon2.avif"
      alt="Animated graphic element"
      width={30}
      height={30}
      className=""
    />
  </div>
);

const AboutSection = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* 1. Header */}
        <div className="flex flex-col items-start mb-12 md:mb-16">
          <p className="font-medium text-red-1 text-[16px] uppercase font-sans mb-2">
            ABOUT US
          </p>
          <h2 className="text-[36px] md:text-[52px] lg:text-[48px] text-primary font-semibold leading-[1.1] max-w-4xl text-left tracking-tight">
            Bravana help creatives grow, and we've helped many
            <AnimatedIcon />
            do it with <span className="text-red-1">confidence</span>
          </h2>
        </div>

        {/* 2. Video -*/}
        <div className="bg-gray-100 rounded-[40px]">
          <div className="relative w-full aspect-video rounded-4xl overflow-hidden group cursor-pointer shadow-sm mb-6">
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Play video"
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xl"
              >
                <Play className="w-8 h-8 text-black fill-black ml-1" />
              </button>
            </div>
          </div>

          {/* 3. Stats Section - Full Width Gray Box */}
          <div className="w-full rounded-4xl p-8 md:p-12 mb-16 md:mb-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">
                  300+
                </p>
                <p className="text-sm md:text-base text-secondary font-medium">
                  Projects launched
                </p>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">
                  100%
                </p>
                <p className="text-sm md:text-base text-secondary font-medium">
                  Faster launch times
                </p>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">
                  30+
                </p>
                <p className="text-sm md:text-base text-secondary font-medium">
                  Countries reached
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Section: Button (Left) & Text (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Button */}
          <div className="lg:col-span-6 flex justify-start mt-auto">
            <TalkButton text="About Us" variant="dark" />
          </div>

          {/* RIGHT: Text Content */}
          <div className="lg:col-span-6 space-y-6 text-black text-[17px] md:text-[22px] leading-[1.2]">
            <p>
              Bravana isn't just a design studio template, it's a launchpad for
              bold ideas and brave brands. Whether you're just starting out or
              scaling fast, Bravana gives you the structure and style you need
              to show your best work and tell your story with impact.
            </p>
            <p>
              Trusted by independent creatives and growing teams alike, Bravana
              makes it easier to create a lasting presence online. With
              thoughtful design and flexible layouts, it lets you focus on what
              matters most: your vision, your voice, and your next big move.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
