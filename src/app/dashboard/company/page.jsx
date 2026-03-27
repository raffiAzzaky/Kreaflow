import { MoveLeft, Star } from "lucide-react";
import Link from "next/link";

export default function CompanyPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/dashboard" className="btn-back-nav hidden md:flex">
          <MoveLeft size={24} />
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="md:hidden text-gray-400 hover:text-white"><MoveLeft size={24} /></Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Company</h1>
        </div>
      </div>

      <div className="glass-card p-6 md:p-8 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[-50%] left-[-10%] w-[150%] h-[150%] bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start justify-between">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shrink-0 border-4 border-white/10 overflow-hidden flex items-center justify-center text-3xl">
              👨‍💼
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Af.cinema</h2>
              <p className="text-sm text-gray-400">Est 2024</p>
              <p className="text-xs text-gray-300 max-w-md pt-2 leading-relaxed">
                Jasa editing video maupun foto nikahan, lamaran atau apapun itu dengan hasil yang memuaskan dan menjanjikan
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <Star size={16} className="fill-blue-500 text-blue-500" />
              <span className="text-sm text-white font-medium">4.7 <span className="text-gray-500 mx-2">|</span> 29.4K Follower</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-xs text-gray-300">
              <span>Video Produk</span>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <span>100K+ Watch</span>
            </div>
          </div>
        </div>

        <div className="mt-10 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">List Products Company</h3>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">View All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Video Editor", company: "At.cinema", price: "100.000", rating: 4.7, rev: 229, color: "bg-gradient-to-br from-blue-700 to-blue-900", icon: "🎬" },
              { title: "Animation", company: "At.cinema", price: "200.000", rating: 4.9, rev: 121, color: "bg-gradient-to-br from-purple-700 to-purple-900", icon: "🎥" },
            ].map((item, idx) => (
              <div key={idx} className="glass-card overflow-hidden hover:border-white/20 transition-all group cursor-pointer flex flex-col">
                <div className={`h-40 ${item.color} w-full relative group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
                  <span className="text-5xl drop-shadow-xl">{item.icon}</span>
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
                    <span className="text-[10px] text-gray-500 w-16 text-right leading-tight">{item.rev} Respondent</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
