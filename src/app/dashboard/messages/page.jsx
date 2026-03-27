"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Search, Paperclip, Send, MoreVertical, Phone, Video } from "lucide-react";
import Image from "next/image";

const contacts = [
  {
    id: 1,
    name: "Af.cinema",
    lastMsg: "Baik Terimakasih sudah menggunakan jasa kami...",
    time: "Kemarin",
    avatar: "/messages/contact (1).png",
    active: false,
  },
  {
    id: 2,
    name: "Hex.Code",
    lastMsg: "terima kasih telah menggunakan jasa coding...",
    time: "Kemarin",
    avatar: "/messages/contact (2).png",
    active: true,
  },
  {
    id: 3,
    name: "Ofc.Logo",
    lastMsg: "Terima kasih sudah mempercayakan pembuatan 3D...",
    time: "Kemarin",
    avatar: "/messages/contact (3).png",
    active: false,
  },
  {
    id: 4,
    name: "Read.Vibe",
    lastMsg: "Terima kasih telah menggunakan jasa pembuatan e-book...",
    time: "Kemarin",
    avatar: "/messages/contact (4).png",
    active: false,
  },
];

export default function MessagesPage() {
  const [showChat, setShowChat] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="p-6 md:p-8 h-[calc(80vh-80px)]"
    >
      <div className="flex items-center gap-4 mb-2">
        <Link href="/dashboard" className="btn-back-nav hidden md:flex">
          <MoveLeft size={24} />
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="md:hidden text-gray-400 hover:text-white"><MoveLeft size={24} /></Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Messages</h1>
        </div>
      </div>

      <div className="glass-card flex flex-col md:flex-row h-full overflow-hidden border border-white/5">
        {/* Left: Contacts Sidebar */}
        <div className={`w-full md:w-[35%] lg:w-[30%] flex-col border-b md:border-b-0 md:border-r border-white/5 ${showChat ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-4 border-b border-white/5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
            {contacts.map(contact => (
              <div
                key={contact.id}
                onClick={() => setShowChat(true)}
                className={`flex items-start gap-4 p-3 rounded-xl cursor-pointer transition-colors duration-200 ${contact.active ? "bg-white/10 border border-white/5" : "hover:bg-white/5 border border-transparent"
                  }`}
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex-shrink-0">
                    <Image src={contact.avatar} alt={contact.name} width={40} height={40} className="object-cover" />
                  </div>
                  {contact.active && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 border-2 border-[#05070A] bg-green-500 rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-sm font-medium text-white truncate">{contact.name}</h3>
                    <span className="text-xs text-white/40 flex-shrink-0">{contact.time}</span>
                  </div>
                  <p className="text-xs text-white/50 truncate">{contact.lastMsg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Active Chat Window */}
        <div className={`flex-1 flex-col h-full bg-[#05070A]/30 ${showChat ? 'flex' : 'hidden md:flex'}`}>
          {/* Chat Header */}
          <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <button 
                className="md:hidden p-1 mr-1 text-gray-400 hover:text-white transition-colors"
                onClick={() => setShowChat(false)}
              >
                <MoveLeft size={20} />
              </button>
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10">
                <Image src={contacts[1].avatar} alt={contacts[1].name} width={40} height={40} className="object-cover" />
              </div>
              <div>
                <h2 className="text-sm font-medium text-white">{contacts[1].name}</h2>
                <span className="text-xs text-green-400">Online</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <Phone className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
              <Video className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
              <MoreVertical className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar flex flex-col justify-end">
            <div className="flex w-full justify-center">
              <span className="text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full">Today, 10:24 AM</span>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image src={contacts[1].avatar} alt="Avatar" width={32} height={32} />
              </div>
              <div className="glass-card max-w-[75%] rounded-tl-sm p-4 text-sm text-white/90">
                Halo! Bisa tolong update status project coding yang sedang dikerjakan?
              </div>
            </div>

            <div className="flex gap-4 justify-end">
              <div className="max-w-[75%] bg-gradient-to-r from-[#2568D4] to-[#1A3D63] text-white rounded-2xl rounded-tr-sm p-4 text-sm shadow-[0_4px_20px_rgba(37,104,212,0.3)]">
                Halo kak, tentu saja. Fitur dashboard phase 2 sudah masuk tahap integrasi UI menggunakan Next.js dan Tailwind CSS. Nanti siang akan kami push ke staging.
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image src={contacts[1].avatar} alt="Avatar" width={32} height={32} />
              </div>
              <div className="glass-card max-w-[75%] rounded-tl-sm p-4 text-sm text-white/90 border border-white/10 bg-white/[0.02]">
                Terima kasih telah menggunakan jasa coding kami🙏 Semoga hasilnya berkesan. Jangan ragu untuk kembali jika membutuhkan solusi coding lainnya!
              </div>
            </div>
          </div>

          {/* Chat Input Field */}
          <div className="p-4 border-t border-white/5 bg-white/5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <button className="p-2 text-white/50 hover:text-white/80 transition-colors bg-white/5 rounded-full">
                <Paperclip className="w-5 h-5" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full bg-[#05070A]/50 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#2568D4]/50 transition-colors"
                />
              </div>
              <button className="p-3 text-white bg-gradient-to-r from-[#2568D4] to-[#00d2ff] rounded-full hover:shadow-[0_0_15px_rgba(37,104,212,0.5)] transition-shadow">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
