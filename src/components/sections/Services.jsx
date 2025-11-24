"use client";

import { Smile, DraftingCompass, Code2 } from "lucide-react";
import { TalkButton } from "../ui/AnimatedButton";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ServiceCard = ({ children, className }) => {
  return (
    <motion.div
      layout
      transition={{
        layout: { duration: 0.4, type: "spring", stiffness: 100, damping: 15 },
      }}
      className={cn(
        "group bg-white rounded-[40px] border border-gray-200 shadow-[0_3px_10px_rgba(0,0,0,0.06)] overflow-hidden w-full",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const ServicesSection = () => {
  const [openCard, setOpenCard] = useState("branding");

  const toggleCard = (cardName) => {
    setOpenCard((prev) => (prev === cardName ? null : cardName));
  };

  return (
    <section className="bg-[#f7f7f7] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-14 md:mb-8 gap-8">
          <div className="max-w-[550px]">
            <p className="font-medium text-red-1 text-[16px] uppercase font-sans mb-1">
              OUR SERVICES
            </p>
            <h2 className="text-[40px] md:text-[48px] lg:text-[48px] font-semibold leading-[1.15] text-primary">
              What we do best
            </h2>
            <p className="mt-4 text-[17px] md:text-[18px] text-secondary leading-[1.2]">
              We help studios and creatives build brands, launch <br />
              websites, and grow with confidence.
            </p>
          </div>

          <div className="hidden lg:flex items-start pt-18">
            <TalkButton variant="dark" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-3 min-h-[500px]">
          {/* SLOT 1 — BRANDING */}
          {openCard === "branding" ? (
            <ServiceCard className="lg:flex-3 flex flex-col md:flex-row gap-2 p-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-1 flex-col"
              >
                <div className="px-6 py-4 mb-14">
                  <Smile className="h-8 w-8 text-secondary" strokeWidth={1.5} />
                </div>

                <div className="bg-gray-100 rounded-[30px] p-4 md:p-5 h-full">
                  <h3 className="mt-5 text-[22px] md:text-[24px] font-medium text-primary leading-[1.3]">
                    Branding Design
                  </h3>

                  <p className="mt-4 grow text-[15px] md:text-[16px] text-secondary leading-[1.3]">
                    We craft bold, cohesive brand identities that tell your
                    story and leave a lasting impression.
                  </p>

                  <div className="mt-20 flex flex-wrap gap-2">
                    <div className="bg-white rounded-4xl px-4 py-1.5 text-[16px] font-medium text-secondary">
                      Brand Identity
                    </div>
                    <div className="bg-white rounded-4xl px-4 py-1.5 text-[16px] font-medium text-secondary">
                      Logo Design
                    </div>
                    <div className="bg-white rounded-4xl px-4 py-1.5 text-[16px] font-medium text-secondary">
                      +more
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative flex-1 min-h-[280px] rounded-[40px] overflow-hidden"
              >
                <Image
                  src="/assets/service1.webp"
                  alt="Branding design materials"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </ServiceCard>
          ) : (
            <ServiceCard className="lg:flex-1 flex flex-col justify-between px-2 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="px-3 py-4">
                <Smile className="h-8 w-8 text-secondary" strokeWidth={1.5} />
              </div>

              <button
                onClick={() => toggleCard("branding")}
                className="bg-gray-100 rounded-[30px] px-5 py-4 w-full text-left md:text-center transition-colors hover:bg-gray-200"
              >
                <h3 className="text-[22px] md:text-[22px] font-medium text-primary leading-[1.3] text-center whitespace-nowrap">
                  Branding
                </h3>
              </button>
            </ServiceCard>
          )}

          {/* SLOT 2 — FRAMER WEBSITE */}
          {openCard === "framer" ? (
            <ServiceCard className="lg:flex-3 flex flex-col md:flex-row gap-2 p-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-1 flex-col"
              >
                <div className="px-6 py-4 mb-14">
                  <DraftingCompass
                    className="h-8 w-8 text-secondary"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="bg-gray-100 rounded-[30px] p-4 md:p-5 h-full">
                  <h3 className="mt-5 text-[22px] md:text-[24px] font-medium text-primary leading-[1.3]">
                    Framer Website
                  </h3>

                  <p className="mt-4 grow text-[15px] md:text-[16px] text-secondary leading-[1.3]">
                    Custom-designed Framer websites that are fast, responsive,
                    and conversion-focused, without the hassle of coding.
                  </p>

                  <div className="mt-20 flex flex-wrap gap-2">
                    <div className="bg-white rounded-4xl px-4 py-1.5 text-[16px] font-medium text-secondary">
                      Landing Pages
                    </div>
                    <div className="bg-white rounded-4xl px-4 py-1.5 text-[16px] font-medium text-secondary">
                      Web Migration
                    </div>
                    <div className="bg-white rounded-4xl px-4 py-1.5 text-[16px] font-medium text-secondary">
                      +more
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative flex-1 min-h-[280px] rounded-[40px] overflow-hidden"
              >
                <Image
                  src="/assets/service2.webp"
                  alt="Framer website visuals"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </ServiceCard>
          ) : (
            <ServiceCard className="lg:flex-1 flex flex-col justify-between px-2 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="px-3 py-4">
                <DraftingCompass
                  className="h-8 w-8 text-secondary"
                  strokeWidth={1.5}
                />
              </div>

              <button
                onClick={() => toggleCard("framer")}
                className="bg-gray-100 rounded-[30px] px-5 py-4 w-full text-left md:text-center transition-colors hover:bg-gray-200"
              >
                <h3 className="text-[22px] md:text-[22px] font-medium text-primary leading-[1.3] text-center whitespace-nowrap">
                  Framer
                </h3>
              </button>
            </ServiceCard>
          )}

          {/* SLOT 3 — WEB DEVELOPMENT */}
          {openCard === "webdev" ? (
            <ServiceCard className="lg:flex-3 flex flex-col md:flex-row gap-2 p-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-1 flex-col"
              >
                <div className="px-6 py-4 mb-14">
                  <Code2 className="h-8 w-8 text-secondary" strokeWidth={1.5} />
                </div>

                <div className="bg-gray-100 rounded-[30px] p-4 md:p-5 h-full">
                  <h3 className="mt-5 text-[22px] md:text-[24px] font-medium text-primary leading-[1.3]">
                    Web Development
                  </h3>

                  <p className="mt-4 grow text-[15px] md:text-[16px] text-secondary leading-[1.3]">
                    From concept to code, we transform stunning designs into
                    high-performance, scalable websites tailored to your
                    business.
                  </p>

                  <div className="mt-20 flex flex-wrap gap-2">
                    <div className="bg-white rounded-4xl px-4 py-1.5 text-[16px] font-medium text-secondary">
                      Frontend
                    </div>
                    <div className="bg-white rounded-4xl px-4 py-1.5 text-[16px] font-medium text-secondary">
                      Cms Integration
                    </div>
                    <div className="bg-white rounded-4xl px-4 py-1.5 text-[16px] font-medium text-secondary">
                      +more
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative flex-1 min_h-[280px] rounded-[40px] overflow-hidden"
              >
                <Image
                  src="/assets/service3.webp"
                  alt="Web development preview"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </ServiceCard>
          ) : (
            <ServiceCard className="lg:flex-1 flex flex-col justify-between px-2 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="px-3 py-4">
                <Code2 className="h-8 w-8 text-secondary" strokeWidth={1.5} />
              </div>

              <button
                onClick={() => toggleCard("webdev")}
                className="bg-gray-100 rounded-[30px] px-5 py-4 w-full text-left md:text-center transition-colors hover:bg-gray-200"
              >
                <h3 className="text-[22px] md:text-[22px] font-medium text-primary leading-[1.3] text-center whitespace-nowrap">
                  Development
                </h3>
              </button>
            </ServiceCard>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
