"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Box, TrendingUp, DollarSign } from "lucide-react";

const salesData = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 250 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 380 },
  { name: 'May', value: 300 },
  { name: 'Jun', value: 480 },
  { name: 'Jul', value: 400 },
  { name: 'Aug', value: 550 },
  { name: 'Sep', value: 500 },
];

export default function AnalyticsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="p-6 md:p-8 space-y-8"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-2">
        <Link href="/dashboard" className="btn-back-nav hidden md:flex">
          <MoveLeft size={24} />
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="md:hidden text-gray-400 hover:text-white"><MoveLeft size={24} /></Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Analystic</h1>
        </div>
      </div>

      {/* 1. Market Trend Analytics (Public Insight) */}
      <section className="space-y-4">
        <h2 className="text-lg text-white/80 font-medium">1. Market Trend Analytics (Public Insight)</h2>
        <div className="glass-card p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="space-y-6">
            <div>
              <h3 className="text-sm text-white/70 mb-3">Top Trending Keywords</h3>
              <div className="flex flex-wrap gap-3">
                {['NFT Market', 'Cryptocurrency Regulation', 'DeFi Trends', 'Neobanking', 'Robo-Advisor'].map((keyword) => (
                  <span
                    key={keyword}
                    className="px-4 py-1.5 rounded-full border border-[#00d2ff]/30 text-[#00d2ff] bg-[#00d2ff]/10 text-sm shadow-[0_0_15px_rgba(0,210,255,0.2)] hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-shadow duration-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-white/70 mb-3">Most Demanded Services</h3>
              <div className="space-y-3">
                {[
                  { label: "Wealth Management", width: "90%" },
                  { label: "Cryptocurrency Trading", width: "75%" },
                  { label: "Payment Processing", width: "60%" },
                  { label: "Investment Advisory", width: "45%" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="w-48 text-xs text-white/60">{item.label}</span>
                    <div className="flex-1 h-3 rounded-full bg-white/5 relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#2568D4] to-[#00d2ff] rounded-full shadow-[0_0_10px_rgba(0,210,255,0.5)]"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-white/70 mb-3">Market Activity Heatmap Grid</h3>
            <div className="w-full h-48 bg-white/5 rounded-xl border border-white/10 p-0 flex flex-col justify-center items-center relative overflow-hidden">
              <img
                src="/img/dashboard-preview.jpg"
                alt="Dashboard Preview"
                className="w-full h-full object-cover bg-slate-800"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sales Performance (Owner Insight) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-white/80 font-medium">2. Sales Performance (Owner Insight)</h2>
          <span className="text-sm text-white/40">Owner Insights</span>
        </div>

        <div className="glass-card p-6 md:p-8">
          {/* Summary Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-card flex items-center p-4 space-x-4 bg-white/5">
              <div className="p-3 rounded-lg bg-white/5 text-[#969BEF]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Total Sales</p>
                <p className="text-2xl font-bold text-gradient-kristal">500K</p>
              </div>
            </div>
            <div className="glass-card flex items-center p-4 space-x-4 bg-white/5">
              <div className="p-3 rounded-lg bg-white/5 text-[#969BEF]">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Active Accounts</p>
                <p className="text-2xl font-bold text-gradient-kristal">5.22</p>
              </div>
            </div>
            <div className="glass-card flex items-center p-4 space-x-4 bg-white/5">
              <div className="p-3 rounded-lg bg-white/5 text-[#969BEF]">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Net Revenue</p>
                <p className="text-2xl font-bold text-gradient-kristal">$3.31 M</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm text-white/70">Smooth Area Line Chart</h3>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1A3D63" stopOpacity={0.9} />
                      <stop offset="95%" stopColor="#0A1832" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>

                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(5, 7, 10, 0.8)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ color: '#00d2ff' }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#00d2ff"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorSales)"
                    activeDot={{ r: 6, fill: '#00d2ff', stroke: '#fff', strokeWidth: 2 }}
                    style={{ filter: "drop-shadow(0px 0px 8px rgba(0, 210, 255, 0.5))" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
