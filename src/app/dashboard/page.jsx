import Link from "next/link";
import { TrendingUp, PlaySquare, Star, CreditCard, ChevronRight, ThumbsUp, Share2 } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Quick Nav Cards */}
      <div className="grid grid-cols-4 gap-2 md:gap-4 glass-card p-2 md:p-4 rounded-2xl w-full max-w-2xl">
        {[
          { name: "Trending", icon: TrendingUp, href: "/dashboard/trending" },
          { name: "Video", icon: PlaySquare, href: "/dashboard/video" },
          { name: "Top Rated", icon: Star, href: "/dashboard/products" },
          { name: "Payment", icon: CreditCard, href: "/dashboard/orders" },
        ].map((item, idx) => (
          <Link key={item.name} href={item.href} className={`flex flex-col items-center justify-center py-4 px-1 hover:bg-white/5 rounded-xl transition-colors gap-3 ${idx < 3 ? 'border-r border-white/5' : ''}`}>
            <item.icon size={24} className="text-gray-300" />
            <span className="text-[10px] md:text-sm text-gray-300 font-medium text-center">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Trending Services */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">Trending Services</h2>
          <Link href="/dashboard/trending" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "Web Company", company: "Rumah Website", price: "50.000", rating: 4.9, rev: 320, color: "bg-gradient-to-br from-yellow-400 to-amber-600", icon: "💻" },
            { title: "Video Editor", company: "At.cinema", price: "100.000", rating: 4.7, rev: 229, color: "bg-gradient-to-br from-blue-700 to-blue-900", icon: "🎬" },
            { title: "Creative Design Logo", company: "At.Studio", price: "70.000", rating: 4.89, rev: 230, color: "bg-gradient-to-br from-gray-200 to-gray-400", icon: "🎯" },
            { title: "Game Pixel Dev", company: "Pixel.Art", price: "70.000", rating: 4.98, rev: 140, color: "bg-gradient-to-br from-indigo-800 to-indigo-950", icon: "👾" },
          ].map((item, idx) => (
            <div key={idx} className="glass-card overflow-hidden hover:border-white/20 transition-all group cursor-pointer flex flex-col">
              <div className={`h-40 ${item.color} w-full relative group-hover:scale-105 transition-transform duration-500 overflow-hidden flex items-center justify-center`}>
                <span className="text-5xl drop-shadow-lg">{item.icon}</span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">{item.title}</h3>
                <p className="text-xs text-gray-400 mb-4">{item.company}</p>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Star size={12} className="fill-blue-500 text-blue-500" />
                      <span className="text-xs text-white font-medium">{item.rating}</span>
                    </div>
                    <span className="text-sm font-bold text-white">IDR {item.price} <span className="text-[10px] text-gray-400 font-normal">+</span></span>
                  </div>
                  <span className="text-[9px] text-gray-500 w-16 text-right leading-tight">{item.rev} Respondent</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Update */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">Video Update</h2>
          <Link href="/dashboard/video" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="glass-card p-4 flex flex-col sm:flex-row gap-4 hover:border-white/20 transition-colors group cursor-pointer">
              <div className="w-full sm:w-2/5 aspect-video bg-gradient-to-br from-blue-900 to-indigo-950 rounded-xl flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <PlaySquare size={36} className="text-white/80 z-20 group-hover:scale-110 transition-transform drop-shadow-lg" />
                <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-medium z-20 text-white">7 menit</span>
              </div>
              <div className="flex-1 flex flex-col pt-1">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="font-bold text-white text-sm md:text-base leading-snug line-clamp-2">E-book How can development web</h3>
                  <span className="text-[10px] text-gray-500 shrink-0">Rumah Website</span>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xs text-gray-500">29K Views</span>
                  <div className="flex gap-4 text-gray-400">
                    <ThumbsUp size={16} className="hover:text-blue-400 transition-colors" />
                    <Share2 size={16} className="hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}