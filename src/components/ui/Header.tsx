"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Layers, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Feature", href: "#feature" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#05070A]/80 backdrop-blur-md py-4 px-6 md:py-6 md:px-16 lg:px-24 flex items-center justify-between text-white border-b border-white/5">
      <div className="flex items-center gap-2">
        <img src="/logo.PNG" alt="Kreaflow Logo" className="h-8 w-auto object-contain" />
        <span className="text-white text-2xl font-bold tracking-wide">Kreaflow</span>
      </div>

      {/* Main Navigation (Desktop) */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-gray-300 hover:text-electric-blue transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Desktop CTA */}
        <Link
          href="/login"
          className="hidden md:inline-block px-6 py-2 rounded-full border border-gray-500 hover:border-electric-blue hover:text-electric-blue hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all duration-300 text-sm font-medium"
        >
          Sign Up
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden z-50 p-2 text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#05070A] flex flex-col items-center justify-center gap-8 z-40 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-2xl font-medium text-gray-300 hover:text-electric-blue transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="px-8 py-3 mt-4 rounded-full border border-electric-blue text-electric-blue hover:bg-electric-blue/10 transition-all duration-300 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
