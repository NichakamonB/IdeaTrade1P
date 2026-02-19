import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Style ซ่อน Scrollbar (เหมือนต้นแบบ)
const scrollbarHideStyle = {
  msOverflowStyle: "none",
  scrollbarWidth: "none",
};

export default function DRInsight() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  // States
  const [isMember, setIsMember] = useState(false);
  const [enteredTool, setEnteredTool] = useState(false);

  // Scroll Button States
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // Refs สำหรับระบบเลื่อนอัตโนมัติ
  const scrollDirection = useRef(1); 
  const isPaused = useRef(false);    

  // Filter States for All Regions
  const [filters, setFilters] = useState({
    USA: "", Europe: "", ETC: "",
    Japan: "", China: "", Singapore: "", Vietnam: "", Taiwan: ""
  });

  // [NEW] เปลี่ยนจากการแยก 3 กราฟอิสระ เป็นการเลือกหุ้นเพียง "ตัวเดียว" (Active Stock)
  const [activeStock, setActiveStock] = useState("AAPL80X");

  /* ===============================
      1. MEMBER CHECK & LOGIC
  ================================ */
  useEffect(() => {
    try {
      const userProfile = localStorage.getItem("userProfile");
      if (userProfile) {
        const user = JSON.parse(userProfile);
        if (user.unlockedItems && user.unlockedItems.includes("dr")) {
          setIsMember(true);
          const hasEntered = sessionStorage.getItem("drToolEntered");
          if (hasEntered === "true") {
            setEnteredTool(true);
          }
        }
      }
    } catch (error) {
      console.error("Error checking member status:", error);
    }
  }, []);

  /* ===============================
      2. SCROLL LOGIC (Manual & Auto)
  ================================ */
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeft(scrollLeft > 1);
      const isEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 2;
      setShowRight(!isEnd);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      isPaused.current = true;
      const { current } = scrollContainerRef;
      const scrollAmount = 350;
      
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        scrollDirection.current = -1; 
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        scrollDirection.current = 1;  
      }
      setTimeout(checkScroll, 300);
      setTimeout(() => { isPaused.current = false }, 500);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const speed = 1;         
    const intervalTime = 15; 

    const autoScrollInterval = setInterval(() => {
      if (isPaused.current || !container) return;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollDirection.current === 1 && Math.ceil(scrollLeft) >= maxScroll - 2) {
        scrollDirection.current = -1;
      } 
      else if (scrollDirection.current === -1 && scrollLeft <= 2) {
        scrollDirection.current = 1;
      }

      container.scrollLeft += (scrollDirection.current * speed);
      checkScroll();
    }, intervalTime);

    return () => clearInterval(autoScrollInterval);
  }, [isMember, enteredTool]);

  /* ===============================
      3. DATA MOCKUP (Lists)
  ================================ */
  const features = [
    { title: "Global Symbol Mapping", desc: "Instantly connects every DR on the Thai board to its underlying international parent stock." },
    { title: "Arbitrage Tracking", desc: "Compare the parent stock’s price against the Thai DR on a dual-pane screen." },
    { title: "Real-Time Valuation", desc: "Monitor live P/E ratios and key metrics of global underlying stocks." },
    { title: "Multi-Market Heatmap", desc: "Visualize global market trends (US, China, Vietnam) in one dashboard." },
  ];

  const usaStocks = [
    { dr: "AAPL80X", real: "NASDAQ:AAPL" }, { dr: "AMZN80X", real: "NASDAQ:AMZN" },
    { dr: "BKNG80X", real: "NASDAQ:BKNG" }, { dr: "BRKB80X", real: "NYSE:BRK.B" },
    { dr: "GOOG80X", real: "NASDAQ:GOOG" }, { dr: "KO80X", real: "NYSE:KO" },
    { dr: "META80X", real: "NASDAQ:META" }, { dr: "MSFT80X", real: "NASDAQ:MSFT" },
    { dr: "NFLX80X", real: "NASDAQ:NFLX" }, { dr: "NVDA80X", real: "NASDAQ:NVDA" },
    { dr: "PEP80X", real: "NASDAQ:PEP" }, { dr: "SBUX80X", real: "NASDAQ:SBUX" },
    { dr: "TSLA80X", real: "NASDAQ:TSLA" }, { dr: "AMD80X", real: "NASDAQ:AMD" },
    { dr: "AVGO80X", real: "NASDAQ:AVGO" }, { dr: "ESTEE80X", real: "NYSE:EL" },
    { dr: "MA80X", real: "NYSE:MA" }, { dr: "NIKE80X", real: "NYSE:NKE" },
    { dr: "VISA80X", real: "NYSE:V" }, { dr: "LLY80X", real: "NYSE:LLY" }
  ];

  const europeStocks = [
    { dr: "ASML01", real: "EURONEXT:ASML" }, { dr: "FERRARI80", real: "MIL:RACE" },
    { dr: "HERMES80", real: "EURONEXT:RMS" }, { dr: "LOREAL80", real: "EURONEXT:OR" },
    { dr: "LVMH01", real: "EURONEXT:MC" }, { dr: "NOVOB80", real: "OMXCOP:NOVO_B" },
    { dr: "SANOFI80", real: "EURONEXT:SAN" }
  ];

  const etcStocks = [
    { dr: "GOLD19", real: "SGX:GSD" }, { dr: "GOLD03", real: "HKEX:2840" },
    { dr: "OIL03", real: "HKEX:3097" }
  ];

  const japanStocks = [
    { dr: "HONDA19", real: "TSE:7267" }, { dr: "MITSU19", real: "TSE:7011" },
    { dr: "MUFG19", real: "TSE:8306" }, { dr: "NINTENDO19", real: "TSE:7974" },
    { dr: "SMFG19", real: "TSE:8316" }, { dr: "SONY80", real: "TSE:6758" },
    { dr: "TOYOTA80", real: "TSE:7203" }, { dr: "UNIQLO80", real: "TSE:9983" }
  ];

  const chinaStocks = [
    { dr: "BABA80", real: "HKEX:9988" }, { dr: "BIDU80", real: "HKEX:9888" },
    { dr: "BYDCOM80", real: "HKEX:1211" }, { dr: "CN01", real: "HKEX:3188" },
    { dr: "CNTECH01", real: "HKEX:3088" }, { dr: "HK01", real: "HKEX:2800" },
    { dr: "HK13", real: "HKEX:2800" }, { dr: "HKCE01", real: "HKEX:2828" },
    { dr: "HKTECH13", real: "HKEX:3032" }, { dr: "JAPAN13", real: "HKEX:3160" },
    { dr: "NDX01", real: "HKEX:3086" }, { dr: "NETEASE80", real: "HKEX:9999" },
    { dr: "PINGAN80", real: "HKEX:2318" }, { dr: "SP50001", real: "HKEX:3195" },
    { dr: "STAR5001", real: "HKEX:3151" }, { dr: "TENCENT80", real: "HKEX:700" },
    { dr: "XIAOMI80", real: "HKEX:1810" }, { dr: "INDIA01", real: "HKEX:3404" },
    { dr: "JAPAN10001", real: "HKEX:3410" }, { dr: "JAP03", real: "HKEX:3150" },
    { dr: "WORLD03", real: "HKEX:3422" }, { dr: "JD80", real: "HKEX:9618" },
    { dr: "MEITUAN80", real: "HKEX:3690" }, { dr: "NONGFU80", real: "HKEX:9633" }
  ];

  const singaporeStocks = [
    { dr: "DBS19", real: "SGX:D05" }, { dr: "INDIAESG19", real: "SGX:QK9" },
    { dr: "SIA19", real: "SGX:C6L" }, { dr: "SINGTEL80", real: "SGX:Z74" },
    { dr: "STEG19", real: "SGX:S63" }, { dr: "THAIBEV19", real: "SGX:Y92" },
    { dr: "UOB19", real: "SGX:U11" }, { dr: "VENTURE19", real: "SGX:V03" }
  ];

  const vietnamStocks = [
    { dr: "E1VFVN3001", real: "HOSE:E1VFVN30" }, { dr: "FUEVFVND01", real: "HOSE:FUEVFVND" },
    { dr: "VNM19", real: "HOSE:VNM" }, { dr: "FPTVN19", real: "HOSE:FPT" },
    { dr: "MWG19", real: "HOSE:MWG" }, { dr: "VCB19", real: "HOSE:VCB" }
  ];

  const taiwanStocks = [
    { dr: "TAIWAN19", real: "TWSE:0050" }, { dr: "TAIWANAI13", real: "TWSE:00952" },
    { dr: "TAIWANHD13", real: "TWSE:00915" }
  ];

  const allStockOptions = [
    ...usaStocks, ...europeStocks, ...etcStocks,
    ...japanStocks, ...chinaStocks, ...singaporeStocks, ...vietnamStocks, ...taiwanStocks
  ];

  /* ===============================
      HELPER FUNCTIONS
  ================================ */
  const generateChartPath = (symbol) => {
    let hash = 0;
    for (let i = 0; i < symbol.length; i++) {
      hash = symbol.charCodeAt(i) + ((hash << 5) - hash);
    }
    const seededRandom = (seed) => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    let currentY = 50 + (seededRandom(hash) * 40 - 20);
    let path = `M 0,${currentY}`;
    let seedCount = hash;
    
    for (let x = 10; x <= 300; x += 10) {
      const change = (seededRandom(seedCount++) * 24) - 12; 
      currentY += change;
      currentY = Math.max(10, Math.min(90, currentY)); 
      path += ` L ${x},${currentY}`;
    }
    return path;
  };

  // Component กล่องประเทศ (เพิ่มการรับค่า onClick และ Highlight เพื่อระบุตัวที่เลือกอยู่)
  const renderRegionPanel = (title, emoji, headerColor, regionKey, data) => (
    <div className="bg-[#111827] border border-slate-700 rounded-lg flex flex-col mb-4 shrink-0 h-[250px]">
        <div className={`${headerColor} px-3 py-2 flex justify-between items-center rounded-t-lg`}>
            <span className="font-bold text-sm text-white">{title}</span>
            <span className="text-xs opacity-70">{emoji}</span>
        </div>
        <div className="p-2 border-b border-slate-700/50">
            <input 
                type="text" 
                placeholder={`Filter ${title}...`} 
                value={filters[regionKey]}
                onChange={(e) => setFilters({...filters, [regionKey]: e.target.value})}
                className="w-full bg-[#1f2937] border border-slate-600 rounded px-2 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-blue-500 placeholder-slate-600"
            />
        </div>
        <div className="overflow-y-auto flex-1 p-2 scrollbar-thin scrollbar-thumb-slate-700">
            <div className="grid grid-cols-2 text-[10px] text-slate-500 mb-2 px-2 uppercase font-semibold">
                <span>DR/DRx</span>
                <span className="text-right">TradingView</span>
            </div>
            {data.filter(s => s.dr.toLowerCase().includes(filters[regionKey].toLowerCase())).map((stock, idx) => {
                const isSelected = activeStock === stock.dr;
                return (
                  <div 
                      key={idx} 
                      onClick={() => setActiveStock(stock.dr)} // [NEW] กดเพื่อเปลี่ยนกราฟตรงกลาง
                      className={`flex justify-between items-center text-xs p-2 rounded cursor-pointer transition-colors group border-b last:border-0 ${isSelected ? 'bg-blue-900/30 border-blue-500/50' : 'hover:bg-slate-800/80 border-slate-800/30'}`}
                  >
                      <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-green-400 shadow-[0_0_5px_#4ade80]' : 'bg-blue-400 shadow-[0_0_3px_#60a5fa]'}`}></div>
                          <span className={`font-medium ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{stock.dr}</span>
                      </div>
                      <span className={`${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>{stock.real.split(':')[1] || stock.real}</span>
                  </div>
                )
            })}
        </div>
    </div>
  );

  /* ==========================================================
      CASE 1 & 2 : PREVIEW / START SCREEN
  =========================================================== */
  if (!isMember || (isMember && !enteredTool)) {
    return (
      <div className="relative w-full min-h-screen text-white overflow-hidden animate-fade-in pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                DR Insight
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-light">Your Gateway to Global Equity</p>
          </div>
          <div className="relative group w-full max-w-5xl mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
            <div className="relative bg-[#0B1221] border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-700/50 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="aspect-[16/9] w-full bg-[#0B1221]">
                <img src="/src/assets/images/DRInsight.png" alt="DR Insight Preview" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>
          </div>
          <div className="w-full max-w-5xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left border-l-4 border-cyan-500 pl-4">4 Main Features</h2>
            <div className="relative group" onMouseEnter={() => isPaused.current = true} onMouseLeave={() => isPaused.current = false}>
              <button onClick={() => scroll("left")} className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-20 z-20 w-12 h-12 rounded-2xl bg-[#0f172a]/90 border border-slate-600 text-white hover:bg-cyan-500 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center transition-all duration-300 backdrop-blur-sm active:scale-95 ${showLeft ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <div ref={scrollContainerRef} onScroll={checkScroll} className="flex overflow-x-auto gap-6 py-4 px-1 hide-scrollbar" style={scrollbarHideStyle}>
                {features.map((item, index) => (
                  <div key={index} className="w-[350px] md:w-[400px] flex-shrink-0 group/card bg-[#0f172a]/60 border border-slate-700/50 p-8 rounded-xl hover:bg-[#1e293b]/60 hover:border-cyan-500/30 transition duration-300">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover/card:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => scroll("right")} className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-20 z-20 w-12 h-12 rounded-2xl bg-[#0f172a]/90 border border-slate-600 text-white hover:bg-cyan-500 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center transition-all duration-300 backdrop-blur-sm active:scale-95 ${showRight ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          <div className="flex gap-4">
             {!isMember ? (
               <>
                 <button onClick={() => navigate("/login")} className="px-8 py-3 rounded-full bg-slate-800 border border-slate-600 hover:bg-slate-700 transition">Sign In</button>
                 <button onClick={() => navigate("/member-register")} className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 font-bold hover:shadow-lg transition">Join Membership</button>
               </>
             ) : (
               <button onClick={() => { setEnteredTool(true); localStorage.setItem("drToolEntered", "true"); }} className="group relative inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300">
                 <span className="mr-2 text-lg">Start Using Tool</span>
                 <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
               </button>
             )}
          </div>
        </div>
      </div>
    );
  }

  /* ==========================================================
      CASE 3 : FULL DASHBOARD (ปรับแบบ 1 ตัว 3 กราฟ)
  =========================================================== */
  // จัดเตรียมหมวดหมู่กราฟทั้ง 3 (Reference Price, PE Ratio, Last Price)
  const chartMetrics = [
    { id: 'ref', title: 'ราคาอ้างอิง', color: '#3b82f6' }, // ฟ้า
    { id: 'pe', title: 'PE Ratio', color: '#f97316' },   // ส้ม
    { id: 'last', title: 'Last', color: '#22c55e' }      // เขียว
  ];

  return (
    <div className="w-full min-h-screen bg-[#0B1221] text-white p-4 animate-fade-in flex flex-col gap-4">
      
      {/* 1. Top Bar: Indicators */}
      <div className="flex justify-center gap-6 mb-2">
         <div className="bg-[#1e293b] px-5 py-1.5 rounded-full text-xs text-slate-400 border border-slate-700 flex items-center gap-3">
            <span>ราคาอ้างอิง:</span> 
            <div className="w-10 h-1.5 bg-blue-500 rounded-full shadow-[0_0_5px_#3b82f6]"></div>
         </div>
         <div className="bg-[#1e293b] px-5 py-1.5 rounded-full text-xs text-slate-400 border border-slate-700 flex items-center gap-3">
            <span>PE Ratio:</span> 
            <div className="w-10 h-1.5 bg-red-500 rounded-full shadow-[0_0_5px_#ef4444]"></div>
         </div>
         <div className="bg-[#1e293b] px-5 py-1.5 rounded-full text-xs text-slate-400 border border-slate-700 flex items-center gap-3">
            <span>Last:</span> 
            <div className="w-10 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></div>
         </div>
      </div>

      {/* 2. Main Grid Layout */}
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-100px)]">
        
        {/* === Left Column: USA, Europe, ETC (25%) === */}
        <div className="col-span-12 md:col-span-2 flex flex-col h-full overflow-y-auto pr-1 hide-scrollbar" style={scrollbarHideStyle}>
            {renderRegionPanel("USA", "🌎", "bg-[#312e81]", "USA", usaStocks)}
            {renderRegionPanel("Europe", "🌍", "bg-[#166534]", "Europe", europeStocks)}
            {renderRegionPanel("ETC", "🪙", "bg-[#9a3412]", "ETC", etcStocks)}
        </div>

        {/* === Middle Column: Charts (50%) แสดง 3 กราฟของ 1 หุ้น === */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-4 h-full overflow-y-auto hide-scrollbar pr-1" style={scrollbarHideStyle}>
            {chartMetrics.map((metric, index) => {
                // เติม metric.id ต่อท้าย string เพื่อให้สุ่มเส้นกราฟทั้ง 3 ตัวออกมาไม่เหมือนกัน
                const chartPath = generateChartPath(activeStock + metric.id);

                return (
                    <div key={metric.id} className="bg-[#111827] border border-slate-700/80 rounded-lg p-4 h-[300px] shrink-0 flex flex-col shadow-lg">
                        {/* Chart Header */}
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3 relative group/select">
                                 {/* แสดงชื่อประเภทกราฟ */}
                                 <span className="text-white font-bold text-sm" style={{color: metric.color}}>{metric.title}:</span>
                                 
                                 <select
                                    value={activeStock}
                                    onChange={(e) => setActiveStock(e.target.value)}
                                    className="bg-transparent text-sm font-bold text-slate-100 border-none rounded focus:ring-0 cursor-pointer appearance-none pr-6 z-10 relative"
                                 >
                                    {allStockOptions.map(s => (
                                        <option key={`${metric.id}-${s.dr}`} value={s.dr} className="bg-[#1f2937] text-slate-300">
                                            {s.dr} 
                                        </option>
                                    ))}
                                 </select>
                                 <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">▼</span>
                            </div>
      
                        </div>

                        {/* Graph Area */}
                        <div className="flex-1 w-full bg-[#0c1018] rounded border border-slate-800/50 relative overflow-hidden flex items-end">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            
                            <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor={metric.color} stopOpacity="0.2" />
                                            <stop offset="100%" stopColor={metric.color} stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path 
                                    d={chartPath} 
                                    fill="none" 
                                    stroke={metric.color} 
                                    strokeWidth="2" 
                                    vectorEffect="non-scaling-stroke"
                                />
                                <path 
                                    d={`${chartPath} V 100 H 0 Z`} 
                                    fill={`url(#grad-${index})`} 
                                    stroke="none" 
                                />
                            </svg>

                            <div className="absolute right-1 top-2 bottom-2 flex flex-col justify-between text-[8px] text-slate-600 text-right">
                                <span>189.5</span>
                                <span>188.0</span>
                                <span>186.5</span>
                                <span>185.0</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* === Right Column: Asia (25%) === */}
        <div className="col-span-12 md:col-span-2 flex flex-col h-full overflow-y-auto pr-1 hide-scrollbar" style={scrollbarHideStyle}>
            <div className="bg-[#1e3a8a] text-center py-2 rounded-t-lg mb-4 shadow-lg shrink-0">
                <span className="font-bold text-sm text-white">Asia Pacific</span>
            </div>

            {renderRegionPanel("Japan", "🇯🇵", "bg-[#273c75]", "Japan", japanStocks)}
            {renderRegionPanel("China / HK", "🇨🇳", "bg-[#b33939]", "China", chinaStocks)}
            {renderRegionPanel("Singapore", "🇸🇬", "bg-[#218c74]", "Singapore", singaporeStocks)}
            {renderRegionPanel("Vietnam", "🇻🇳", "bg-[#05c46b]", "Vietnam", vietnamStocks)}
            {renderRegionPanel("Taiwan", "🇹🇼", "bg-[#8c7ae6]", "Taiwan", taiwanStocks)}
        </div>

      </div>
    </div>
  );
}