import { MoveLeft, Star } from "lucide-react";
import Link from "next/link";

export default function TrendingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
         <Link href="/dashboard" className="btn-back-nav hidden md:flex">
            <MoveLeft size={24} />
         </Link>
         <div className="flex items-center gap-3">
           <Link href="/dashboard" className="md:hidden text-gray-400 hover:text-white"><MoveLeft size={24}/></Link>
           <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Trending</h1>
         </div>
      </div>
      <div>
        <h2 className="text-white font-bold text-lg">Trending Service</h2>
        <p className="text-gray-400 text-sm">Top 1-8 Most Seller in this month</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { title: "Web Company", company: "Rumah Website", price: "50.000", rating: 4.9, rev: 320, color: "bg-gradient-to-br from-yellow-400 to-amber-600", icon: "💻" },
          { title: "Video Editor", company: "At.cinema", price: "100.000", rating: 4.7, rev: 229, color: "bg-gradient-to-br from-blue-700 to-blue-900", icon: "🎬" },
          { title: "Creative Design Logo", company: "At.Studio", price: "70.000", rating: 4.89, rev: 230, color: "bg-gradient-to-br from-gray-200 to-gray-400", icon: "🎯" },
          { title: "Game Pixel Dev", company: "Pixel.Art", price: "70.000", rating: 4.98, rev: 140, color: "bg-gradient-to-br from-indigo-800 to-indigo-950", icon: "👾" },
          { title: "Animation", company: "At.cinema", price: "200.000", rating: 4.9, rev: 59, color: "bg-gradient-to-br from-purple-700 to-purple-900", icon: "🎥" },
          { title: "Custom Banner Design", company: "PixelBanner", price: "50.000 - 150.000", rating: 4.8, rev: 304, color: "bg-gradient-to-br from-green-500 to-green-700", icon: "🖼️" },
          { title: "Data Entry Service", company: "Digital", price: "30.000 - 150.000", rating: 4.85, rev: 122, color: "bg-gradient-to-br from-teal-600 to-teal-800", icon: "📊" },
          { title: "CRM Setup Service", company: "Bussinta", price: "300.000 - 650.000", rating: 4.9, rev: 101, color: "bg-gradient-to-br from-cyan-700 to-cyan-900", icon: "📈" },
        ].map((item, idx) => (
          <div key={idx} className="glass-card overflow-hidden hover:border-white/20 transition-all group cursor-pointer flex flex-col">
            <div className={`h-40 md:h-48 ${item.color} w-full relative group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
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
