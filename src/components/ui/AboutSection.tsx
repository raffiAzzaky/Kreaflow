import React from "react";
import { GraduationCap, ShieldCheck, Lock, Palette } from "lucide-react";
import { motion } from "framer-motion";

interface AboutPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const points: AboutPoint[] = [
  {
    title: "Student Empowerment",
    description: "Supporting students to transform their digital skills into real economic opportunities.",
    icon: <GraduationCap className="w-8 h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />,
  },
  {
    title: "Guaranteed Quality",
    description: "Opening access for creators to showcase their talents with assured quality.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />,
  },
  {
    title: "Secure Payment",
    description: "Building a fair and accessible marketplace for digital services and products.",
    icon: <Lock className="w-8 h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />,
  },
  {
    title: "Creativity Support",
    description: "Encouraging students to grow and participate in the expanding digital economy.",
    icon: <Palette className="w-8 h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center z-10">
      {/* Intro Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto w-full glass-card rounded-3xl p-8 md:p-12 text-center mb-16 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-a">About Us</h2>
        <p className="text-gray-300/80 text-lg max-w-3xl mx-auto font-light leading-relaxed">
          KreaFlow is a digital marketplace that helps students turn their digital skills into real income by connecting creators with buyers who need digital products and services.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-6 hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-white font-medium text-lg leading-tight w-2/3">{point.title}</h3>
                <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                  {point.icon}
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Right: Goal & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          <h3 className="text-3xl md:text-4xl text-gray-300 font-light leading-snug">
            Our goal is <span className="text-gradient-a font-normal">to empower students to participate in the digital economy.</span>
          </h3>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl md:text-5xl font-bold text-blue-500">1k+</span>
              </div>
              <p className="text-sm text-gray-400">Creator In here</p>
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl md:text-5xl font-bold text-blue-500">83%</span>
              </div>
              <p className="text-sm text-gray-400">User Like this</p>
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl md:text-5xl font-bold text-blue-500">1K+</span>
              </div>
              <p className="text-sm text-gray-400">User In One month</p>
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl md:text-5xl font-bold text-blue-500">2K+</span>
              </div>
              <p className="text-sm text-gray-400">Product Digital</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
