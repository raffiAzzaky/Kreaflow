"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";
import { User, Bell, Shield, Globe, CreditCard, ChevronRight } from "lucide-react";
import { useState } from "react";

const menus = [
  { id: 'account', label: 'Account Profile', icon: <User className="w-5 h-5" /> },
  { id: 'payment', label: 'Payment Method', icon: <CreditCard className="w-5 h-5" /> },
  { id: 'notifications', label: 'Notification Settings', icon: <Bell className="w-5 h-5" /> },
  { id: 'privacy', label: 'Privacy Setting', icon: <Shield className="w-5 h-5" /> },
  { id: 'language', label: 'Language : English/Indonesia', icon: <Globe className="w-5 h-5" />, isToggle: true },
];

export default function SettingsPage() {
  const [activeMenu, setActiveMenu] = useState('account');
  const [langToggle, setLangToggle] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="p-6 md:p-8"
    >
      <div className="flex items-center gap-4 mb-2">
        <Link href="/dashboard" className="btn-back-nav hidden md:flex">
          <MoveLeft size={24} />
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="md:hidden text-gray-400 hover:text-white"><MoveLeft size={24} /></Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Settings</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Sidebar Settings List */}
        <div className="w-full lg:w-[350px] space-y-3">
          {menus.map((menu) => (
            <div
              key={menu.id}
              onClick={() => !menu.isToggle && setActiveMenu(menu.id)}
              className={`glass-card p-4 flex items-center justify-between cursor-pointer transition-all duration-300 ${activeMenu === menu.id && !menu.isToggle ? "border-[#969BEF]/50 bg-white/10 shadow-[0_0_15px_rgba(150,155,239,0.1)]" : "hover:bg-white/10 border-transparent hover:border-white/10"
                }`}
            >
              <div className="flex items-center gap-4 text-white/80">
                <div className={`${activeMenu === menu.id && !menu.isToggle ? "text-[#00d2ff]" : "text-white/50"}`}>
                  {menu.icon}
                </div>
                <span className="text-sm font-medium">{menu.label}</span>
              </div>

              {menu.isToggle ? (
                <button
                  onClick={() => setLangToggle(!langToggle)}
                  className={`w-10 h-5 rounded-full transition-colors duration-300 relative flex items-center px-1 ${langToggle ? "bg-[#00d2ff]" : "bg-white/20"}`}
                >
                  <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform duration-300 ${langToggle ? "translate-x-4" : "translate-x-0"}`} />
                </button>
              ) : (
                <ChevronRight className={`w-5 h-5 transition-colors ${activeMenu === menu.id ? "text-[#00d2ff]" : "text-white/30"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Detailed Form Settings */}
        <div className="flex-1 glass-card p-6 md:p-8 border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-6">
            {menus.find(m => m.id === activeMenu)?.label || "Settings"}
          </h2>

          <div className="space-y-6 max-w-2xl">

            {activeMenu === 'account' && (
              <>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <User className="w-8 h-8 text-white/40" />
                  </div>
                  <div>
                    <button className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-lg transition-colors border border-white/10">
                      Upload New Avatar
                    </button>
                    <p className="text-xs text-white/40 mt-2">Recommended size 400x400px</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-white/60 font-medium">First Name</label>
                    <input
                      type="text"
                      defaultValue="your"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-[#969BEF]/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-white/60 font-medium">Last Name</label>
                    <input
                      type="text"
                      defaultValue="name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-[#969BEF]/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-white/60 font-medium">Email Address</label>
                  <input
                    type="email"
                    defaultValue="toline@kreaflow.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-[#969BEF]/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-white/60 font-medium">Bio</label>
                  <textarea
                    rows={4}
                    defaultValue="Building the next generation frontend applications."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#969BEF]/50 transition-colors resize-none"
                  />
                </div>
              </>
            )}

            {activeMenu !== 'account' && (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 opacity-60">
                <Shield className="w-12 h-12 text-[#969BEF]" />
                <p className="text-sm">These settings are currently read-only in this beta version.</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end pt-6 mt-6 border-t border-white/10">
              <button className="bg-gradient-b px-8 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(8,61,146,0.3)]">
                Save Changes
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
