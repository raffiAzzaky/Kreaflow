import { MoveLeft, Package2, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  const orders = [
    { id: "ORD-20260326-001", service: "Video Editor - Promosi IG", provider: "At.cinema", date: "26 Mar 2026", status: "On Process", price: "IDR 150.000" },
    { id: "ORD-20260325-089", service: "Web Company Profile", provider: "Rumah Website", date: "25 Mar 2026", status: "Done", price: "IDR 50.000" },
    { id: "ORD-20260324-102", service: "Custom Banner Design", provider: "PixelBanner", date: "24 Mar 2026", status: "Done", price: "IDR 75.000" },
    { id: "ORD-20260326-045", service: "Animation 3D - Intro", provider: "At.cinema", date: "26 Mar 2026", status: "On Process", price: "IDR 400.000" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
         <Link href="/dashboard" className="btn-back-nav hidden md:flex">
            <MoveLeft size={24} />
         </Link>
         <div className="flex items-center gap-3">
           <Link href="/dashboard" className="md:hidden text-gray-400 hover:text-white"><MoveLeft size={24}/></Link>
           <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Orders</h1>
         </div>
      </div>
      
      <div className="flex gap-4 border-b border-white/10 overflow-x-auto hidden-scrollbar">
        <button className="pb-3 text-sm font-medium text-blue-400 border-b-2 border-blue-500 px-2 whitespace-nowrap">All Orders</button>
        <button className="pb-3 text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors px-2 whitespace-nowrap">Active</button>
        <button className="pb-3 text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors px-2 whitespace-nowrap">Completed</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-4">
        {orders.map((order) => (
          <div key={order.id} className="glass-card p-5 hover:border-white/20 transition-all cursor-pointer group flex flex-col h-full ring-transparent hover:ring-1 hover:ring-blue-500/30">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                 <Package2 size={16} className="text-gray-400" />
                 <span className="text-xs font-mono text-gray-400">{order.id}</span>
              </div>
              <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 ${
                order.status === 'On Process' 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                  : 'bg-green-500/20 text-green-400 border border-green-500/30'
              }`}>
                {order.status === 'On Process' ? <Clock size={10} /> : <CheckCircle2 size={10} />}
                {order.status}
              </div>
            </div>
            
            <div className="mb-6 flex-1">
              <h3 className="text-lg font-bold text-white mb-1 leading-snug group-hover:text-blue-400 transition-colors">{order.service}</h3>
              <p className="text-sm text-gray-400">{order.provider}</p>
            </div>
            
            <div className="pt-4 border-t border-white/10 flex justify-between items-end mt-auto">
              <div>
                <p className="text-[10px] text-gray-500 mb-0.5">Order Date</p>
                <p className="text-xs text-gray-300">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 mb-0.5">Total</p>
                <p className="font-bold text-white text-sm">{order.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
