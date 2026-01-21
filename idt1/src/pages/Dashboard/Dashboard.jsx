import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import ToggleIcon from "@/assets/icons/Vector.svg";
import WhatsNew from "@/pages/Dashboard/WhatsNew";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("whatsnew");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">

      {/* ================= SIDEBAR (LOCKED) ================= */}
      {!collapsed && (
        <aside
          className="fixed top-0 left-0 z-40
                     w-72 h-screen
                     bg-slate-900/70
                     border-r border-sky-400/20
                     flex flex-col"
        >
          {/* Logo */}
          <div className="px-6 py-6 border-b border-white/10 flex justify-between">
            <img src={logo} alt="Idea Trade" className="w-40" />
            <button onClick={() => setCollapsed(true)}>
              <img src={ToggleIcon} className="w-4 h-4" />
            </button>
          </div>

          {/* Status */}
          <div className="px-6 py-4 flex gap-2 text-xs">
            <span className="px-2 py-0.5 rounded-full bg-sky-600/20 text-sky-400">
              FREE ACCESS
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300">
              STATUS: ONLINE
            </span>
          </div>

          {/* Search */}
          <div className="px-6 py-4">
            <input
              placeholder="Search Something..."
              className="w-full px-4 py-2 rounded-lg
                         bg-white/5 border border-white/10
                         focus:border-sky-500 outline-none text-sm"
            />
          </div>

          {/* Menu */}
          <nav className="flex-1 px-4 py-4 text-sm space-y-2 overflow-y-auto">
            {/* What's New */}
            <button
              onClick={() => setActivePage("whatsnew")}
              className={`flex items-center justify-between w-full px-4 py-2 rounded-lg
                ${
                  activePage === "whatsnew"
                    ? "bg-sky-500/20 text-sky-300"
                    : "hover:bg-white/5 text-gray-300"
                }`}
            >
              What's New
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </button>

            <div className="text-gray-400 uppercase text-xs mt-6 mb-2">
              Beta Tools
            </div>

            <button
              onClick={() => setActivePage("dashboard")}
              className={`flex items-center justify-between w-full px-4 py-2 rounded-lg
                ${
                  activePage === "dashboard"
                    ? "bg-sky-500/20 text-sky-300"
                    : "hover:bg-white/5 text-gray-300"
                }`}
            >
              MIT
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-400 text-black">
                FREE
              </span>
            </button>

            <div className="text-gray-400 uppercase text-xs mt-6 mb-2">
              Premium Tools
            </div>

            {[
              "หุ้นดัชนี",
              "Petroleum",
              "Rubber Thai",
              "Flow Intraday",
              "S50",
              "Gold",
              "BidAsk",
              "TickMatch",
              "DR",
            ].map((item) => (
              <button
                key={item}
                className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-white/5 text-gray-300"
              >
                {item}
                <span>👑</span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-white/10 text-sm text-gray-400">
            Upgrade to Pro
          </div>
        </aside>
      )}

      {/* ================= MAIN CONTENT ================= */}
      <main
        className={`min-h-screen transition-all duration-300
          ${collapsed ? "ml-0" : "ml-72"}
          px-10 py-8 overflow-y-auto`}
      >
        {collapsed && (
          <button onClick={() => setCollapsed(false)} className="mb-6">
            <img src={ToggleIcon} className="w-4 h-4" />
          </button>
        )}

        {/* Render Page */}
        {activePage === "whatsnew" && <WhatsNew />}

        {activePage === "dashboard" && (
          <>
            {/* Tabs */}
            <div className="flex gap-3 mb-10">
              <button className="px-5 py-2 rounded-full bg-sky-600/30 text-sky-300">
                Shortcuts
              </button>
              {["MIT", "Stock Mover", "Project Name"].map((tab) => (
                <button
                  key={tab}
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-800 rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold mb-2">Project name</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="w-full py-2 rounded-lg bg-sky-600">
                    Open tool
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
