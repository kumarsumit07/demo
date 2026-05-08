"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Rent", href: "#", active: true },
  { label: "Sell", href: "#" },
  { label: "Upcoming Projects", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Rent");

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/LOGO.png"
              alt="RealAura Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`text-sm font-semibold transition-all duration-300 pb-1 relative ${
                  activeLink === link.label
                    ? "text-[#C89B3C]"
                    : "text-gray-700 hover:text-[#C89B3C]"
                }`}
              >
                {link.label}
                {activeLink === link.label && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#C89B3C] via-[#E6B84A] to-[#C89B3C] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="px-4 py-1.5 text-xs font-semibold border border-[#C89B3C] text-[#C89B3C] rounded-full hover:bg-gradient-to-r hover:from-[#C89B3C] hover:to-[#E6B84A] hover:text-white transition-all duration-300"
              aria-label="Profile Rating"
            >
              Profile Rating
            </button>
            <div className="relative">
              <button
                className="px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-[#C89B3C] to-[#E6B84A] text-white rounded-full hover:shadow-lg transition-all duration-300 shadow-sm"
                aria-label="Post a Property"
              >
                Post a Property
              </button>
              <span className="absolute -top-2 -right-1 bg-white text-[8px] font-bold text-[#C89B3C] px-1.5 py-0.5 rounded-full border border-gray-100 shadow-sm">
                Free
              </span>
            </div>
            <button
              className="text-sm font-semibold text-gray-700 hover:text-[#C89B3C] transition-colors duration-200"
              aria-label="Login"
            >
              LOGIN
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label);
                  setMenuOpen(false);
                }}
                className={`text-sm font-semibold px-2 py-1 rounded transition-colors ${
                  activeLink === link.label
                    ? "text-[#C89B3C]"
                    : "text-gray-700 hover:text-[#C89B3C]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-gray-100 px-2">
              <button className="px-4 py-2 text-sm font-semibold border border-[#C89B3C] text-[#C89B3C] rounded-full hover:bg-gradient-to-r hover:from-[#C89B3C] hover:to-[#E6B84A] hover:text-white transition-all duration-300">
                Profile Rating
              </button>
              <button className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#C89B3C] to-[#E6B84A] text-white rounded-full shadow-sm active:scale-95 transition-all duration-300">
                Post a Property
              </button>
              <button className="text-sm font-semibold text-gray-700 hover:text-[#C89B3C] transition-colors text-left px-2 py-1">
                LOGIN
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
