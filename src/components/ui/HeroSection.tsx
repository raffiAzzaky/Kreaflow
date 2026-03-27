"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeature = () => {
    document.getElementById("feature")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Glassmorphism Container with animated fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full p-10 md:p-16 rounded-3xl glass-card flex flex-col items-center text-center space-y-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Turn Your Digital Skills <br className="hidden md:block" />
          Into <span className="text-gradient-a font-black">Real Income</span>
        </h1>

        <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
          KreaFlow connects students with a digital marketplace <span className="text-electric-blue/90 font-medium">where services and digital products can be sold, discovered, and scaled with transparent market insights.</span>
        </p>
      </motion.div>

      {/* Action Buttons underneath the glass box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-6"
      >
        <button className="px-8 py-3 rounded-full bg-gradient-b font-bold hover:opacity-90 hover:shadow-[0_0_20px_rgba(144,184,246,0.5)] transition-all duration-300"
          onClick={() => window.location.href = "/login"}
          aria-label="Get started">
          Get Started
        </button>
        <button className="px-8 py-3 rounded-full border border-gray-400 text-white font-medium hover:bg-white/10 transition-all duration-300"
          onClick={scrollToFeature}
          aria-label="Scroll to feature section">
          Learn More
        </button>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-gray-400 hover:text-white transition-colors cursor-pointer"
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
      >
        <ChevronsDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
