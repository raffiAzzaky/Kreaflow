"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export function AuthLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#05070A] flex overflow-hidden"
    >
      {/* Left Column (Desktop Only) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#05070A] via-[#0A101A] to-[#0A1A3A] p-12 flex-col justify-between items-start">
        {/* Abstract Blur Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[100px]" />
          <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>

        {/* Top bar with Logo and Back */}
        <div className="relative z-10 w-full flex items-center justify-between mb-20">
          <Link href="/" className="flex items-center gap-2 group hover:text-blue-400 transition-colors">
            <div className="w-8 h-8 bg-white flex flex-col justify-between p-[5px] rounded-md transition-colors group-hover:bg-blue-400">
              <div className="h-[2px] bg-[#05070A] w-full" />
              <div className="h-[2px] bg-[#05070A] w-full" />
              <div className="h-[2px] bg-[#05070A] w-full" />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">Kreaflow</span>
          </Link>

          <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors text-sm font-medium">
            <MoveLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-lg">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Your Productivity Journey <br />
            <span className="text-gradient-custom font-semibold">Start here</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Showcase your digital skills, connect with buyers, and turn creativity into income.
          </p>
        </div>

        {/* Bottom space filling */}
        <div className="relative z-10">
          <p className="text-sm border-l-2 border-blue-500 pl-4 text-gray-500 italic max-w-md">"Join thousands of students building their digital careers on Kreaflow today."</p>
        </div>
      </div>

      {/* Right Column (Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative bg-[#05070A]">
        {/* Glow behind form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  )
}
