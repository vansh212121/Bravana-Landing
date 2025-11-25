"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { TalkButton } from "../ui/AnimatedButton";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="relative mx-auto flex h-18 items-center justify-between max-w-[1440px]">
        <a
          href="/"
          className="text-primary font-medium text-[24px] hover:text-secondary transition-colors"
        >
          Bravana<sup className="text-[14px]">®</sup>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="px-5 py-2 text-[16px] text-gray-700 font-medium rounded-xl hover:bg-white hover:text-red-2 hover:shadow-xs transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center">
          <TalkButton text="Use For Free" variant="dark" />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-black p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40">
          <nav className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-6">
            <ul className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl text-[#1f1f1f] font-semibold block text-center py-3 hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <a
                href="https://framer.link/AYwrIvG"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="bg-black text-white text-[15px] font-medium py-3.5 px-8 rounded-full flex items-center gap-3"
              >
                Use For Free
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <div className="absolute w-full h-full bg-white rounded-full"></div>
                  <div className="relative w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
