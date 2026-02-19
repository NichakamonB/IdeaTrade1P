// src/pages/tools/components/PetroleumDashboard.jsx
import React, { useState } from 'react';
import { AreaChart, Area, LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer, XAxis } from 'recharts';
import { TrendingUp, ChevronDown, X } from 'lucide-react';

// --- Mock Data ---
const dataMargin = [
  { name: '22 Nov', value: 1.0 }, { name: '29 Nov', value: 2.6 }, 
  { name: '06 Dec', value: 1.4 }, { name: '13 Dec', value: 3.0 },
  { name: '20 Dec', value: 1.4 }, { name: '27 Dec', value: 2.2 },
  { name: '03 Jan', value: 3.3 }, { name: '10 Jan', value: 3.7 },
  { name: '17 Jan', value: 2.5 }, { name: '24 Jan', value: 3.0 }
];

const dataRefin = [
  { name: '22 Nov', value: 2.5 }, { name: '29 Nov', value: 1.6 },
  { name: '06 Dec', value: 2.6 }, { name: '13 Dec', value: 3.7 },
  { name: '20 Dec', value: 2.9 }, { name: '27 Dec', value: 3.3 },
  { name: '03 Jan', value: 5.8 }, { name: '10 Jan', value: 3.4 },
  { name: '17 Jan', value: 4.6 }, { name: '24 Jan', value: 8.0 }
];

const dataFund = [
  { name: '22 Nov', value: 1.4 }, { name: '19 Dec', value: 1.4 }, 
  { name: '20 Dec', value: 1.0 }, { name: '15 Jan', value: 1.0 },
  { name: '16 Jan', value: 0.6 }, { name: '24 Jan', value: 0.6 }
];

export default function PetroleumDashboard() {
  const [activePeriod, setActivePeriod] = useState('MAX');

  return (
    <div className="w-full min-h-screen bg-[#0e1118] text-white p-6 font-sans">
      
      {/* 1. TOP BAR */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-4 gap-4">
         <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <TickerItem name="WTI CRUDE" value="78.45" change="+1.2%" isUp={true} />
            <TickerItem name="BRENT CRUDE" value="82.10" change="+0.8%" isUp={true} />
            <TickerItem name="NATURAL GAS" value="2.45" change="-0.5%" isUp={false} />
            <TickerItem name="USD/THB" value="35.80" change="+0.7%" isUp={true} />
         </div>

         <div className="flex bg-[#151a25] rounded-lg p-1 border border-slate-800 h-fit">
            {['3M','6M','1Y','YTD','MAX'].map((t) => (
               <button 
                 key={t} 
                 onClick={() => setActivePeriod(t)}
                 // เพิ่ม focus:outline-none เพื่อลบขอบขาวเวลาคลิก
                 className={`px-4 py-1.5 text-xs font-medium rounded transition-all focus:outline-none ${
                    activePeriod === t ? 'bg-slate-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'
                 }`}
               >
                  {t}
               </button>
            ))}
         </div>
      </div>

      {/* 2. MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 h-auto lg:h-[650px]">

        {/* [ช่อง 1: ซ้ายบน] Controls & Big Number */}
        <div className="bg-[#151a25] border border-slate-800 rounded-xl relative h-full flex flex-col">
           
           {/* Controls Bar */}
           <div className="absolute top-2 left-2 right-2 flex flex-wrap items-center gap-2 z-20">
              
              {/* Toggle Switch */}
              <div className="w-8 h-6 bg-blue-600 rounded-full relative cursor-pointer flex items-center shadow-lg shadow-blue-900/20 mr-1">
                 <div className="absolute left-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>

              {/* Symbol Box */}
              <div className="flex items-center bg-[#0f1218] border border-slate-700/50 rounded-md h-8 px-2 cursor-pointer hover:border-slate-500 transition">
                 <span className="text-[10px] text-slate-400 mr-2 font-medium">Symbol</span>
                 <span className="text-xs text-white font-bold mr-1">7UP</span>
                 <ChevronDown size={12} className="text-slate-500"/>
              </div>

              {/* Oil Type Input */}
              <div className="flex-1 flex items-center bg-[#0f1218] border border-slate-700/50 rounded-md h-8 px-2 min-w-[200px] overflow-hidden">
                 <span className="text-[10px] text-slate-500 mr-2 whitespace-nowrap">Select oil type</span>
                 
                 {/* Tag */}
                 <div className="flex items-center bg-[#1e2330] border border-slate-600 rounded px-1.5 py-0.5 mr-2">
                    <span className="text-[10px] text-white font-bold tracking-wide">GASOHOL95 E10</span>
                    <X size={10} className="text-slate-400 ml-1 cursor-pointer hover:text-white"/>
                 </div>

                 {/* Separator */}
                 <div className="h-3 w-[1px] bg-slate-700 mx-1"></div>
                 
                 {/* Placeholder */}
                 <span className="text-[10px] text-slate-600 ml-2 italic">| select oil type</span>
              </div>

           </div>

           {/* Content (Big Number) */}
           <div className="flex-1 flex flex-col items-center justify-center pt-30">
              <span className="text-8xl font-bold text-white tracking-tight drop-shadow-2xl">0.45</span>
              <div className="flex items-center gap-2 mt-4">
                 <TrendingUp size={20} className="text-[#84cc16]" />
                 <span className="text-[#84cc16] font-bold text-lg">0.02 (+4.65%)</span>
              </div>
           </div>
           
           <div className="absolute bottom-2 right-3 text-[9px] text-slate-600">Last Update: 16:30:00</div>
        </div>

        {/* [ช่อง 2: ขวาบน] EX-REFIN */}
        <ChartPanel title="EX-REFIN" data={dataRefin} color="#84cc16" isStep={false} />

        {/* [ช่อง 3: ซ้ายล่าง] Marketing Margin */}
        <ChartPanel title="Marketing Margin" data={dataMargin} color="#84cc16" isStep={false} />

        {/* [ช่อง 4: ขวาล่าง] Oil Fund */}
        <ChartPanel title="Oil Fund" data={dataFund} color="#84cc16" isStep={true} />

      </div>
    </div>
  );
}

// --- Sub Components ---

function TickerItem({ name, value, change, isUp }) {
  return (
    <div className="bg-[#151a25] border border-slate-800 rounded-lg px-3 py-2 flex flex-col justify-between h-[60px]">
       <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{name}</div>
       <div className="flex justify-between items-end">
          <div className="text-sm font-bold text-white">{value}</div>
          <div className={`text-[10px] font-bold ${isUp ? 'text-[#84cc16]' : 'text-red-500'}`}>
             {change} {isUp ? '▲' : '▼'}
          </div>
       </div>
    </div>
  );
}

function ChartPanel({ title, data, color, isStep }) {
  // 🔥 แก้ไขตรงนี้: ลบช่องว่างออกจากชื่อเพื่อใช้เป็น ID (Marketing Margin -> MarketingMargin)
  const gradId = `grad${title.replace(/\s+/g, '')}`;

  return (
    <div className="bg-[#151a25] border border-slate-800 rounded-xl p-0 relative overflow-hidden flex flex-col h-full">
       <div className="absolute top-0 left-0 w-full p-4 z-10 flex justify-between items-start pointer-events-none">
          <span className="text-slate-500 font-bold text-xs tracking-widest uppercase">{title}</span>
       </div>

       <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <span className="text-5xl font-black text-white uppercase">{title}</span>
       </div>

       <div className="flex-1 w-full h-full pt-8 pb-2 pr-2">
         <ResponsiveContainer width="100%" height="100%">
           {isStep ? (
             <LineChart data={data}>
               <CartesianGrid strokeDasharray="3 3" stroke="#232936"  />
               <XAxis 
                 dataKey="name" 
                 axisLine={false} 
                 tickLine={false} 
                 tick={{fill: '#475569', fontSize: 10}} 
                 dy={10}
               />
               <Tooltip 
                  content={<CustomTooltip color={color} />} 
                  cursor={{stroke: color, strokeWidth: 1}} 
               />
               <Line 
                  type="stepAfter" 
                  dataKey="value" 
                  stroke={color} 
                  strokeWidth={3} 
                  dot={false}
                  activeDot={{ r: 5, fill: '#151a25', stroke: color, strokeWidth: 2 }} 
               />
             </LineChart>
           ) : (
             <AreaChart data={data}>
               <defs>
                  {/* ใช้ ID ที่ไม่มีช่องว่าง */}
                  <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={color} stopOpacity={0}/>
                  </linearGradient>
               </defs>
               <CartesianGrid strokeDasharray="3 3" stroke="#232936" />
               <XAxis 
                 dataKey="name" 
                 axisLine={false} 
                 tickLine={false} 
                 tick={{fill: '#475569', fontSize: 10}} 
                 dy={10}
               />
               <Tooltip 
                  content={<CustomTooltip color={color} />} 
                  cursor={{stroke: color, strokeWidth: 1}} 
               />
               <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke={color} 
                  strokeWidth={3} 
                  fill={`url(#${gradId})`} /* อ้างอิง ID ที่ถูกต้อง */
                  activeDot={{ r: 5, fill: '#151a25', stroke: color, strokeWidth: 2 }} 
               />
             </AreaChart>
           )}
         </ResponsiveContainer>
       </div>
    </div>
  );
}

function CustomTooltip({ active, payload, label, color }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0e1118] border border-slate-700 p-2 rounded shadow-xl text-xs">
        <p className="text-slate-400 mb-1">{label}</p>
        <p className="font-bold text-sm" style={{ color: color }}>
          {payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
}