import React from "react";
import { useNavigate } from "react-router-dom";

export default function TickMatch() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Net Accumulated Volume",
      desc: `Track global gold prices with an intelligent filtering system 
      designed to eliminate market noise and pinpoint where Smart Money 
      is actually reversing course.`,
    },
    {
      title: "Flip Signal",
      desc: `Instantly detect the moment capital flow reverses direction. 
      This feature alerts you when market bias shifts from bullish to bearish 
      (or vice versa), allowing entry or exit at primary inflection points.`,
    },
    {
      title: "Granular Tick Data",
      desc: `Audit every single transaction. Our system scans for whale 
      orders hidden within the noise, protecting you from manipulation 
      and revealing the true intentions of large-scale traders.`,
    },
    {
      title: "Price-Based Distribution",
      desc: `Identifies price levels where the heaviest trading volume 
      has occurred. Calculates the true average cost of the market, 
      helping pinpoint key support and resistance zones based on 
      real capital commitment.`,
    },
  ];

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden py-20 px-4">
      
      {/* ===== Background Glow ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ===== Header ===== */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              TickMatch
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl">
            Tracking "Big Money" Footprints
          </p>
          <p className="text-slate-500 mt-2">
            Decode Smart Capital Movement in Real-Time
          </p>
        </div>

        {/* ===== Dashboard Preview (Glow Frame) ===== */}
        <div className="relative group mb-20">
          
          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-700"></div>
          
          {/* Card */}
          <div className="relative bg-[#0B1221] border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/src/assets/images/TickMatch.png"
              alt="TickMatch Dashboard Preview"
              className="w-full h-auto object-cover opacity-95 
                         group-hover:scale-[1.01] group-hover:opacity-100 
                         transition duration-500"
            />
          </div>
        </div>

        {/* ===== Features Section ===== */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            4 Main Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-[#0f172a]/70 border border-amber-500/30 
                           p-8 rounded-2xl 
                           hover:border-orange-400 
                           hover:shadow-[0_0_30px_rgba(251,146,60,0.35)]
                           transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 
                               group-hover:text-orange-400 transition">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CTA Section ===== */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-20">
          
          <button
            onClick={() => navigate("/login")}
            className="w-full md:w-auto px-10 py-4 rounded-full 
                       bg-slate-700 hover:bg-slate-600 
                       transition text-lg"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/member-register")}
            className="w-full md:w-auto px-10 py-4 rounded-full 
                       bg-gradient-to-r from-amber-500 to-orange-500 
                       font-semibold text-lg 
                       shadow-lg hover:brightness-110 transition"
          >
            Join Membership
          </button>

        </div>

      </div>
    </div>
  );
}
