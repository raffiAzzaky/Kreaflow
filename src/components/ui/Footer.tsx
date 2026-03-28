import React from "react";
import { Instagram, Linkedin, Twitter, Facebook, Mail, Phone, Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#05070A] border-t border-white/5 pt-16 pb-8 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Column 1: Logo & Description */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img src="logo.png" alt="kreaflow logo" className="h-8 w-auto text-white" />
            <span className="text-xl font-bold text-white tracking-wide">Kreaflow</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            A digital marketplace designed to help students monetize their digital skills by connecting creators with a growing demand for digital services and products.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick links</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Feature', 'Blog'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-electric-blue transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Customer Support */}
        <div>
          <h4 className="text-white font-semibold mb-6">Customer Support</h4>
          <ul className="space-y-4">
            {['Help Center', 'FAQ', 'Terms & Condition', 'Privacy policy'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-gray-400 hover:text-electric-blue transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h4 className="text-white font-semibold mb-6">Connect with Us</h4>
          <ul className="space-y-4 mb-8">
            <li>
              <a href="mailto:mail@gmail.com" className="text-sm text-gray-400 hover:text-electric-blue transition-colors inline-flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-300" />
                Kreaflow@gmail.com
              </a>
            </li>
            <li>
              <p className="text-sm text-gray-400 inline-flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-300" />
                +6213425788900
              </p>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-electric-blue hover:text-[#05070A] transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-electric-blue hover:text-[#05070A] transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-electric-blue hover:text-[#05070A] transition-colors" aria-label="Linkedin">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-electric-blue hover:text-[#05070A] transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © 2026 Kreaflow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
