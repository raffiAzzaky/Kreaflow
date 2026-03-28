"use client";

import React from "react";
import { Mail, Phone, MapPin, ChevronUp } from "lucide-react";

export function ContactSection() {
  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact <span className="text-gradient-a">Us</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We are here to support your creative journey. Contact us if you have any questions, suggestions, or technical issues.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center">
        {/* Form Container */}
        <div className="w-full lg:w-1/2 glass-card rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Name:</label>
                <input type="text" placeholder="Enter your name" className="w-full bg-[#05070A]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Phone:</label>
                <input type="text" placeholder="Enter your phone number" className="w-full bg-[#05070A]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Email:</label>
              <input type="email" placeholder="Enter your email" className="w-full bg-[#05070A]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Subject:</label>
              <input type="text" placeholder="Enter your subject" className="w-full bg-[#05070A]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Message:</label>
              <textarea placeholder="Enter your message" rows={4} className="w-full bg-[#05070A]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-light"></textarea>
            </div>

            <div className="pt-2 text-center">
              <button
                type="button"
                className="w-40 py-3 bg-gradient-c rounded-2xl font-bold transition-transform duration-300 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div>
            <h3 className="text-4xl font-bold text-white mb-4">
              Get in <span className="text-gradient-a">Touch!</span>
            </h3>
            <p className="text-gray-400 font-light">We'd love to hear from you. If you have any questions or need assistance, feel free to reach out to us.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-wider">E-MAIL ADDRESS</p>
                <a href="mailto:mail@gmail.com" className="text-blue-400 text-sm hover:underline font-light">Kreaflow@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-wider">PHONE NUMBER</p>
                <p className="text-gray-400 text-sm font-light">+6213425788900</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-wider">LOCATION</p>
                <p className="text-gray-400 text-sm font-light">Lamongan, Jawa Timur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 mb-4">
        <button
          onClick={scrollToTop}
          className="p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
