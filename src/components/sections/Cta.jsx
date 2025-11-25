"use client";

import Image from "next/image";
import { TalkButton } from "../ui/AnimatedButton";
import Link from "next/link";

const CtaSection = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 ">
        {/* --- CTA + FOOTER WHITE CARD WRAPPER --- */}
        <div className="bg-white rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden">
          {/* CTA SECTION */}
          <section className="relative">
            <div className="relative overflow-hidden rounded-4xl m-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
              <Image
                src="/assets/cta.avif"
                alt="Abstract red ribbon graphic on a black background"
                width={1232}
                height={480}
                quality={95}
                className="absolute inset-0 h-full w-full object-cover"
                priority
              />

              <div className="relative z-10 flex min-h-[280px] md:min-h-[440px] lg:min-h-[380px] flex-col justify-center p-10 sm:p-14 md:p-16 lg:p-10">
                <h2 className="max-w-4xl text-[42px] md:text-[52px] lg:text-[100px] font-bold text-white leading-[1.1] tracking-tighter">
                  Ready to build something brave?
                </h2>
              </div>

              <TalkButton className="ml-12 mb-6 -mt-12" />
            </div>
          </section>

          {/* --- FOOTER  */}
          <footer className="bg-white text-primary font-body w-full px-6 md:px-10 pb-10 pt-6">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              {/* Brand */}
              <div className="shrink-0">
                <h3 className="text-[22px] font-medium text-primary font-display">
                  Bravana<sup className="text-[20px]">®</sup>
                </h3>
              </div>

              {/* Nav Columns — now tighter + aligned right */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                    gap-y-6 gap-x-10 lg:gap-x-12 
                    ml-auto w-fit"
              >
                {/* Navigation */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-[16px] text-primary font-medium">
                    Navigation
                  </h4>
                  <Link
                    href="/#hero"
                    className="text-[16px] text-secondary hover:text-primary"
                  >
                    Home
                  </Link>
                  <Link
                    href="/work"
                    className="text-[16px] text-secondary hover:text-primary"
                  >
                    Work
                  </Link>
                  <Link
                    href="/about"
                    className="text-[16px] text-secondary hover:text-primary"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[16px] text-secondary hover:text-primary"
                  >
                    Contact
                  </Link>
                </div>

                {/* Follow Us */}
                <div className="flex flex-col gap-2.5 hover:cursor-pointer">
                  <h4 className="text-[16px] text-primary font-medium">
                    Follow Us
                  </h4>
                  <a className="text-[16px] text-secondary hover:text-primary">
                    X (Twitter)
                  </a>
                  <a className="text-[16px] text-secondary hover:text-primary">
                    Instagram
                  </a>
                  <a className="text-[16px] text-secondary hover:text-primary">
                    LinkedIn
                  </a>
                  <a className="text-[16px] text-secondary hover:text-primary">
                    Youtube
                  </a>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-[16px] text-primary font-medium">
                    Contact Us
                  </h4>
                  <a
                    href="tel:+918376079904"
                    className="text-[16px] text-secondary hover:text-primary"
                  >
                    +918376079904
                  </a>
                  <a
                    href="mailto:test@gmail.com"
                    className="text-[16px] text-secondary hover:text-primary"
                  >
                    test@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-16" />

            {/* Bottom Section */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
              <p className="text-[16px] text-secondary">
                © 2025 All right reserved
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 cursor-pointer">
                <a className="text-[16px] text-secondary">
                  Made in{" "}
                  <span className="font-medium text-primary">Framer</span>
                </a>
                <a className="text-[16px] text-secondary">
                  Made by{" "}
                  <span className="font-medium text-primary">Vansh Arora</span>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
