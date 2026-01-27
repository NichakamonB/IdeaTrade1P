import React, { useState } from "react";
import Sidebar from "@/layouts/Sidebar.jsx";
import { useNavigate } from "react-router-dom";

// ✅ 1. เลือก URL รูปที่คุณชอบ (เอา Comment ออกเพื่อเลือกรูปนั้น)

// แบบที่ 1: กราฟแท่งเทียน (Candlestick) ดูโปร
const CHART_IMAGE_URL = "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1964&auto=format&fit=crop";

// แบบที่ 2: กราฟเส้นสีฟ้า (Modern Tech)
// const CHART_IMAGE_URL = "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop";

// แบบที่ 3: จอเทรดหลายจอ (Multiple Screens)
// const CHART_IMAGE_URL = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop";


export default function MIT() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("mit");
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#0B0E14] text-white overflow-hidden font-sans">
      
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activePage={activePage}
        setActivePage={setActivePage}
        openProject={() => {}} 
      />

      <main className={`flex-1 transition-all duration-300 relative flex flex-col items-center justify-center overflow-y-auto ${collapsed ? "ml-0" : "ml-72"}`}>
        
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl px-6 py-10 text-center">
          
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight whitespace-nowrap">
            MIT : <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Multi-Agent Intelligent Analyst</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto tracking-tight whitespace-nowrap">
            Multi-agent AI system that debates, validates risk, and delivers objective trading insights.
          </p>

          {/* กรอบรูปภาพ */}
          <div className="relative group mx-auto max-w-4xl mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            <div className="relative bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-slate-800/50 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>

              {/* ✅ 2. ส่วนแสดงรูปภาพ (วางโค้ดที่คุณขอมาตรงนี้) */}
              <div className="aspect-video w-full bg-slate-900 relative group">
                 <img 
                   src={CHART_IMAGE_URL} 
                   alt="Chart Preview" 
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700 ease-in-out"
                 />
                 
                 {/* Overlay ลาย Grid เพื่อความสวยงาม */}
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                 
                 {/* เงาสีดำด้านล่างเพื่อให้ดูกลืนกับพื้นหลัง */}
                 <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>

            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <button onClick={() => navigate("/member-register")} className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:brightness-110 transition duration-300 min-w-[160px]">
              Join Membership
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}