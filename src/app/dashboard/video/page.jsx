import { MoveLeft, PlaySquare, ThumbsUp, Share2 } from "lucide-react";
import Link from "next/link";

export default function VideoPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
         <Link href="/dashboard" className="hidden md:flex p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
            <MoveLeft size={24} />
         </Link>
         <div className="flex items-center gap-3">
           <Link href="/dashboard" className="md:hidden text-gray-400 hover:text-white"><MoveLeft size={24}/></Link>
           <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Video</h1>
         </div>
      </div>
      <div>
        <h2 className="text-white font-bold text-lg">Most view video in this week</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-card p-4 flex flex-col sm:flex-row gap-4 hover:border-white/20 transition-colors group cursor-pointer w-full">
            <div className={`w-full sm:w-2/5 aspect-video ${i % 2 === 0 ? 'bg-gradient-to-br from-purple-900 to-indigo-950' : 'bg-gradient-to-br from-blue-900 to-cyan-900'} rounded-xl flex items-center justify-center relative overflow-hidden shrink-0`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <PlaySquare size={36} className="text-white/80 z-20 group-hover:scale-110 transition-transform drop-shadow-lg" />
              <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-medium z-20 text-white">7 menit</span>
              <span className="absolute top-2 right-2 text-[10px] text-white/60 z-20">Pixel.{i}</span>
            </div>
            <div className="flex-1 flex flex-col pt-1">
              <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="font-bold text-white text-sm md:text-base leading-snug line-clamp-2">Game Development Service PIXEL GAME DEV MEMULAI PROYEK BARU</h3>
              </div>
              <p className="text-[10px] md:text-xs text-gray-400 line-clamp-2 mb-2">BELAJAR HTML, CSS DAN MODERN PRACTICAL WEB DEV</p>
              <div className="mt-auto flex items-center justify-between pt-2">
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
  );
}
