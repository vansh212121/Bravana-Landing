"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const DECORATIVE_ICON_URL = "/assets/about_icon2.avif";

const WhyChooseUs = () => {
  const timelineItems = [
    { number: "12", label: "Discover" },
    { number: "13", label: "Planning" },
    { number: "14", label: "Develop" },
    { number: "24", label: "Deliver", active: true },
  ];

  const animatedRowContent = (
    <div className="flex shrink-0">
      {Array.from({ length: 10 }).map((_, i) => (
        <React.Fragment key={i}>
          <div className="flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-white shadow-md shrink-0 mx-2">
            <Image
              src={DECORATIVE_ICON_URL}
              alt=""
              width={25}
              height={25}
              className="shrink-0 mx-1"
            />
          </div>
          <div className="w-[60px] h-[60px] rounded-xl bg-white shadow-md shrink-0 mx-2" />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <>
      <style>
        {`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}
      </style>
      <section className="bg-[#f5f5f5] py-20 md:py-28 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14 md:mb-16">
            <p className="font-medium text-red-1 text-[16px] uppercase font-sans mb-2">
              WHY CHOOSE US
            </p>
            <h2 className="text-[40px] md:text-[48px] lg:text-[48px] font-sans font-bold tracking-tight text-primary">
              Why everyone loves Bravana
            </h2>
            <p className="mt-2 text-[17px] md:text-[18px] text-secondary px-28 leading-[1.2]">
              There's a reason studios keep choosing Bravana, it just gets what
              you need to stand out and make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-3">
            {/* Card 1: Bold and purposeful */}
            <div className="bg-white p-7 md:p-2 rounded-[50px] flex flex-col gap-5">
              <div className="h-60 rounded-[50px] overflow-hidden relative bg-gray-100 flex items-center justify-center">
                <div className="absolute inset-0 opacity-40">
                  <div className="h-1/3 relative flex items-center overflow-hidden">
                    <div className="flex animate-marquee">
                      {animatedRowContent}
                      {animatedRowContent}
                    </div>
                  </div>
                  <div className="h-1/3 relative flex items-center overflow-hidden">
                    <div className="flex animate-marquee-reverse">
                      {animatedRowContent}
                      {animatedRowContent}
                    </div>
                  </div>
                  <div className="h-1/3 relative flex items-center overflow-hidden">
                    <div className="flex animate-marquee">
                      {animatedRowContent}
                      {animatedRowContent}
                    </div>
                  </div>
                </div>
                <div className="relative z-10 w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Image src="/assets/icon.png" alt="" width={40} height={40} />
                </div>
              </div>
              <div className="flex px-7 flex-col gap-2.5 mb-7">
                <h3 className="text-[22px] md:text-[22px]  text-primary font-medium leading-[1.3]">
                  Bold and purposeful
                </h3>
                <p className="text-[15px] md:text-[18px] text-secondary leading-[1.3]">
                  Our designs make a statement, every line, material, and detail
                  chosen with intention to create spaces that inspire.
                </p>
              </div>
            </div>

            {/* Card 2: Easy to customize */}
            <div className="bg-white p-7 md:p-2 rounded-[50px] flex flex-col gap-5">
              <div className="h-60 rounded-[50px] overflow-hidden bg-black">
                <video
                  src="https://framerusercontent.com/assets/jdhL1us9tAAUdGVbiInCka5Nor0.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col  px-7  gap-2.5">
                <h3 className="text-[22px] md:text-[22px]  text-primary font-medium leading-[1.3]">
                  Easy to customize
                </h3>

                <p className="text-[15px] md:text-[18px] text-secondary leading-[1.3]">
                  We tailor every project to fit your needs, style, and vision,
                  ensuring your space feels uniquely yours from start to finish.
                </p>
              </div>
            </div>

            {/* Card 3: Fast delivery time */}
            <motion.div
              className="bg-white p-7 md:p-2 rounded-[50px] flex flex-col gap-5 "
              initial="idle"
              whileHover="hover"
            >
              <div className="h-60 rounded-[50px] overflow-hidden relative bg-gray-100 flex items-center justify-center">
                {/* The Moving Track */}
                <div className="absolute inset-0 flex items-center justify-start overflow-hidden">
                  <motion.div
                    className="flex flex-none items-center gap-6 px-6"
                    variants={{
                      idle: { x: 0 },
                      hover: { x: -140 },
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  >
                    {timelineItems.map((item) => (
                      <div
                        key={item.number}
                        className={cn(
                          "shrink-0 w-22 h-28 rounded-xl flex flex-col items-center justify-center gap- shadow-sm transition-all",
                          item.active
                            ? "bg-linear-to-br from-green-400 to-emerald-600"
                            : "bg-white"
                        )}
                      >
                        <p
                          className={cn(
                            "text-[36px] font-semibold leading-none tracking-tight",
                            item.active ? "text-white" : "text-primary"
                          )}
                        >
                          {item.number}
                        </p>

                        <p
                          className={cn(
                            "text-[15px] font-medium mt-5",
                            item.active ? "text-green-50" : "text-secondary"
                          )}
                        >
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Using YOUR EXACT Text Content CSS */}
              <div className="flex flex-col px-7 gap-2.5 mb-5">
                <h3 className="text-[22px] md:text-[22px] text-primary font-medium leading-[1.3]">
                  Fast delivery time
                </h3>
                <p className="text-[15px] md:text-[18px] text-secondary leading-[1.3]">
                  We work efficiently without compromising quality, ensuring
                  your project is delivered on time and with care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
