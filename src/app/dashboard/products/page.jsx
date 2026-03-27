import { MoveLeft, TrendingUp, List, Star } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
         <Link href="/dashboard" className="btn-back-nav hidden md:flex">
            <MoveLeft size={24} />
         </Link>
         <div className="flex items-center gap-3">
           <Link href="/dashboard" className="md:hidden text-gray-400 hover:text-white"><MoveLeft size={24}/></Link>
           <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Products</h1>
         </div>
      </div>
      
      {/* Banner Area */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-white">Find Your Favorite Product</h2>
          <p className="text-gray-400 text-sm">Discover the most popular digital products used by many users.</p>
          <div className="flex gap-4 pt-2">
            <button className="glass-card flex items-center gap-2 px-6 py-3 hover:bg-white/10 transition-colors text-white text-sm font-medium">
              <TrendingUp size={18} /> Trending
            </button>
            <button className="glass-card flex items-center gap-2 px-6 py-3 hover:bg-white/10 transition-colors text-white text-sm font-medium">
              <List size={18} /> Categories
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 glass-card p-4 relative overflow-hidden bg-gradient-to-r from-blue-900/40 to-indigo-900/40 min-h-[160px] flex items-center">
            <div className="relative z-10 w-full flex justify-between items-center h-full px-4">
               {/* Decorative left shape */}
               <div className="flex flex-col gap-4">
                  <button className="bg-white/10 backdrop-blur text-white text-xs px-4 py-1.5 rounded-full border border-white/20 w-fit">Buy Now</button>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold py-2.5 px-6 rounded-lg text-sm drop-shadow-lg xl:text-lg hover:brightness-110 transition-all">START CREATING NOW!</button>
               </div>
               <div className="hidden sm:flex text-6xl drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">🎮</div>
            </div>
            {/* Background elements */}
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-4">
        {["Video", "Programming", "Design", "Power Point", "Template"].map((tab, idx) => (
          <button key={tab} className={`px-4 py-2 rounded-full border text-sm transition-colors ${idx === 0 ? "bg-blue-600/20 text-blue-400 border-blue-500/50 font-medium" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"}`}>{tab}</button>
        ))}
        <button className="ml-auto text-sm text-gray-400 hover:text-white hidden sm:block p-2">View All</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-2">
        {[
          { title: "Video Editor", company: "At.cinema", price: "100.000", rating: 4.7, rev: 229, color: "bg-gradient-to-br from-indigo-900 to-black", icon: "🎬" },
          { title: "Asset Transisi", company: "Status Grow", price: "50.000", rating: 4.9, rev: 29, color: "bg-gradient-to-br from-violet-900 to-violet-950", icon: "✨" },
          { title: "Sound Effect", company: "Only Threads", price: "10.000", rating: 4.79, rev: 221, color: "bg-gradient-to-br from-emerald-900 to-emerald-950", icon: "🎵" },
          { title: "Motion 3D Company", company: "Only Threads", price: "40.000", rating: 4.9, rev: 201, color: "bg-gradient-to-br from-fuchsia-900 to-fuchsia-950", icon: "🧊" },
        ].map((item, idx) => (
          <div key={idx} className="glass-card overflow-hidden hover:border-white/20 transition-all group cursor-pointer flex flex-col">
            <div className={`h-40 ${item.color} w-full relative group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
                <span className="text-6xl drop-shadow-xl">{item.icon}</span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors line-clamp-1">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-5">{item.company}</p>
              <div className="mt-auto flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Star size={14} className="fill-blue-500 text-blue-500" />
                    <span className="text-xs text-white font-medium">{item.rating}</span>
                  </div>
                  <span className="text-sm font-bold text-white whitespace-nowrap">IDR {item.price} <span className="text-[10px] text-gray-400 font-normal">+</span></span>
                </div>
                <span className="text-[10px] text-gray-500 w-16 text-right leading-tight">{item.rev} Respondent</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
