import React from "react";
import { useNavigate } from "react-router-dom";

export default function PetroleumInsights() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Marketing Margin",
      desc: "Track the daily net profit per liter for gas station stocks. This allows you to forecast quarterly earnings long before the official reports are released.",
    },
    {
      title: "Ex-Refinery Tracking",
      desc: "Monitor real-time costs at the refinery gate to analyze refining margins and the overall profitability of the refinery group.",
    },
    {
      title: "Oil Fund Monitor",
      desc: "Keep a close eye on the National Oil Fund status. Understand how subsidies or levies affect price movements and assess the regulatory risks facing your energy holdings.",
    },
    {
      title: "Multi-Product Correlation",
      desc: "Not all oils are equal. This feature breaks down different petroleum products and maps them directly to the specific stocks that stand to benefit most from each one.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden py-16 px-4">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ===== Header ===== */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Petroleum Insights
            </span>
          </h1>
          <p className="text-slate-400 text-lg">
            Stop relying on crude oil prices alone
          </p>
        </div>

        {/* ===== Dashboard Preview (Glow Frame) ===== */}
        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-700"></div>
          
          <div className="relative bg-[#0B1221] border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/src/assets/images/Petroleum.png"
              alt="Petroleum Dashboard"
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition duration-500"
            />
          </div>
        </div>

        {/* ===== Features Section ===== */}
        <div>
          <h2 className="text-3xl font-bold mb-10">4 Main Feature</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-[#0f172a]/70 border border-cyan-500/30 p-8 rounded-xl 
                           hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] 
                           transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
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
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 
                       font-semibold shadow-lg hover:brightness-110 transition"
          >
            Join Membership
          </button>
        </div>

      </div>
    </div>
  );
}
