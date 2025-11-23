import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] text-black font-body px-6 lg:px-10 py-12 md:py-16 w-full">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          {/* Brand */}
          <div className="shrink-0">
            <h3 className="text-[20px] font-bold text-black font-display">
              Bravana<sup className="text-[14px]">®</sup>
            </h3>
          </div>

          {/* Nav Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 w-full max-w-none lg:max-w-3xl">
            {/* Navigation */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[15px] text-[#757575] font-medium">
                Navigation
              </h4>
              <Link
                href="/#hero"
                className="text-[16px] text-[#1f1f1f] font-normal hover:text-red-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/work"
                className="text-[16px] text-[#1f1f1f] font-normal hover:text-red-600 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-[16px] text-[#1f1f1f] font-normal hover:text-red-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[16px] text-[#1f1f1f] font-normal hover:text-red-600 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[15px] text-[#757575] font-medium">
                Follow Us
              </h4>
              <a
                href="https://twitter.com/rosyidqolm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-[#1f1f1f] font-normal hover:text-red-600 transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="https://www.instagram.com/rosyidqolm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-[#1f1f1f] font-normal hover:text-red-600 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/rosyidqolm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-[#1f1f1f] font-normal hover:text-red-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@rosyidqolm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-[#1f1f1f] font-normal hover:text-red-600 transition-colors"
              >
                Youtube
              </a>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[15px] text-[#757575] font-medium">
                Contact Us
              </h4>
              <a
                href="tel:+6281325309058"
                className="text-[16px] text-[#1f1f1f] font-normal hover:text-red-600 transition-colors"
              >
                +6281325309058
              </a>
              <a
                href="mailto:rosyidqolm@gmail.com"
                className="text-[16px] text-[#1f1f1f] font-normal hover:text-red-600 transition-colors"
              >
                rosyidqolm@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10 md:my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-[15px] text-[#757575]">
            © 2025 All right reserved
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="https://www.framer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-[#757575] hover:text-[#1f1f1f] transition-colors"
            >
              Made in <span className="font-medium text-[#1f1f1f]">Framer</span>
            </a>
            <a
              href="https://www.rosyidqolm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-[#757575] hover:text-[#1f1f1f] transition-colors"
            >
              Made by{" "}
              <span className="font-medium text-[#1f1f1f]">Rosyid Qolm</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
