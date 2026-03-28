"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Search, Bell, HeadphonesIcon,
  LayoutDashboard, Package, Building2,
  ShoppingCart, BarChart2, MessageSquare, Settings
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Products", href: "/dashboard/products", icon: Package },
    { name: "Company", href: "/dashboard/company", icon: Building2 },
    { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#05070A] text-white flex flex-col md:flex-row">
      {/* Mobile Navbar (Header) */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-white/10 sticky top-0 bg-[#05070A]/80 backdrop-blur-md z-30">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSidebarOpen(true)} className="text-white">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-gradient-kristal text-xl font-bold tracking-wide leading-none">Kreaflow</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bell size={20} className="text-gray-400" />
          <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden border border-white/20">
            <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-purple-500" />
          </div>
        </div>
      </header>

      {/* Sidebar Overlay (Mobile) & Fixed Sidebar (Desktop) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity md:hidden ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-[#05070A] border-r border-white/10 flex flex-col z-50 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-8 flex justify-center items-center">
          <span className="text-gradient-kristal text-2xl font-bold tracking-wide italic leading-none p-2">Kreaflow</span>

          <button className="md:hidden text-gray-400 hover:text-white p-4" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname.startsWith(link.href));
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30 font-medium"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                <Icon size={20} className={isActive ? "text-blue-400" : "text-gray-400"} />
                {link.name}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-[100dvh] overflow-y-auto hidden-scrollbar">
        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#05070A]/80 backdrop-blur-md z-20">
          <div className="relative w-full max-w-md glass-card rounded-xl overflow-hidden shadow-none border-white/5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search for services or products..."
              className="w-full bg-transparent border-none pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex items-center gap-6">
            <Bell size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <HeadphonesIcon size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <div className="flex items-center gap-3 cursor-pointer p-1.5 hover:bg-white/5 rounded-full transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 overflow-hidden border border-white/20" />
              <div className="flex flex-col pr-2">
                <span className="text-sm font-medium">zaky ramadhan</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 flex-1 pb-20 md:pb-8">
          {children}
        </div>
      </main>
    </div>
  );
}