import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TalkButton } from "../ui/AnimatedButton";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-white pt-10">
      <div className="px-5 md:px-10 py-5 md:py-10">
        <div className="relative mx-auto flex h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] max-w-[1540px] flex-col justify-end overflow-hidden rounded-4xl">
          <Image
            src="/assets/Hero.webp"
            alt="A stylish woman wearing a large red hat that covers her eyes, with a focus on her red lips."
            fill
            className="absolute inset-0 z-0 object-cover"
            priority
            sizes="100vw"
            quality={95}
          />
          <div className="absolute inset-0 z-10 bg-linear-to-t from-black/50 via-black/20 to-transparent"></div>

          <div className="absolute right-6 top-6 sm:right-10 sm:top-10 md:right-12 md:top-28 z-20 flex max-w-[300px] md:max-w-[380px] flex-col items-start gap-5">
            <p className="text-left text-[16px] md:text-[18px] leading-normal text-white font-sans font-normal tracking-wide">
              Bravana helps you showcase your work with clarity and confidence,
              built for studios ready to stand out and win trust.
            </p>
            <TalkButton />
          </div>

          <div className="relative z-20 max-w-[900px] px-8 sm:px-12 md:px-16 pb-10 md:pb-14 lg:pb-16">
            <h1 className="font-sans text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-bold leading-[1.05] tracking-tighter text-white drop-shadow-lg">
              We help you shape elegant.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
