import React from "react";
import { useNavigate } from "react-router-dom";

export default function FlowIntraday() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Multi-Asset Flow Monitor",
      desc: `Monitor up to 12 stocks at once with a high-efficiency Grid Layout. 
      This is the perfect setup for comparing capital flows across an entire industry sector in a single glance.`,
    },
    {
      title: "Smart Flow Alerts",
      desc: `Build your own intelligent notification system. 
      Set custom triggers based on price levels or flow signals, 
      and get instant alerts the moment your criteria are met—no more staring at screens all day.`,
    },
    {
      title: "Customizable Layout",
      desc: `Tailor your workspace to fit your unique trading style. 
      Access critical data for your watchlist with maximum speed and flexibility, 
      ensuring your workflow is as fast as the market.`,
    },
  ];

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden py-16 px-4">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ===== Header ===== */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Flow Intraday
            </span>
          </h1>
          <p className="text-slate-400 text-lg">
            Turn your trading screen into an elite surveillance system
          </p>
        </div>

        {/* ===== Dashboard Preview (Glow Frame) ===== */}
        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-700"></div>
          
          <div className="relative bg-[#0B1221] border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/src/assets/images/Flow.png"
              alt="Flow Intraday Dashboard"
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition duration-500"
            />
          </div>
        </div>

        {/* ===== Features Section ===== */}
        <div>
          <h2 className="text-3xl font-bold mb-10">Main Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-[#0f172a]/70 border border-cyan-500/30 p-8 rounded-xl 
                           hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] 
                           transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="flex justify-center gap-6 mt-16">
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 rounded-full bg-slate-700 hover:bg-slate-600 transition"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/member-register")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
                       font-semibold shadow-lg hover:brightness-110 transition"
          >
            Join Membership
          </button>
        </div>

      </div>
    </div>
  );
}
