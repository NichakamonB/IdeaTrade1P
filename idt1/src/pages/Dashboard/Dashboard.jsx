import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/* ================= COMPONENT IMPORTS ================= */
import Navbar from "@/layouts/Navbar.jsx";
import Sidebar from "@/layouts/Sidebar.jsx";
import MITLanding from "@/pages/Tools/MIT.jsx"; // ✅ Import แล้ว
import PreviewProjects from "@/pages/Dashboard/PreviewProjects.jsx";
import PremiumTools from "@/pages/Dashboard/PremiumTools.jsx";
import Profile from "@/pages/Profile/Profile.jsx";
import ManageSubscription from "@/pages/Profile/Subscriptions";

// --- Tools Components ---
import StockFortuneTeller from "@/pages/Tools/StockFortuneTeller";
import PetroleumInsights from "@/pages/Tools/PetroleumInsights";
import RubberThai from "@/pages/Tools/RubberThai";
import FlowIntraday from "@/pages/Tools/FlowIntraday";
import S50 from "@/pages/Tools/S50";
import Gold from "@/pages/Tools/Gold";
import BidAsk from "@/pages/Tools/BidAsk";
import TickMatch from "@/pages/Tools/TickMatch";
import DRInsight from "@/pages/Tools/DRInsight";

/* ================= CONSTANTS ================= */
const CHART_IMAGE_URL = "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1964&auto=format&fit=crop";

// ✅ 1. Mapping: จับคู่ ID -> Component ที่จะแสดงผล
const TOOL_COMPONENTS = {
  // MIT (เพิ่มตรงนี้เพื่อให้เรียกใช้ได้)
  mit: MITLanding,
  "MIT": MITLanding,

  // Fortune
  fortune: StockFortuneTeller,
  "stock-fortune": StockFortuneTeller,

  // Petroleum
  petroleum: PetroleumInsights,
  "petroleum-preview": PetroleumInsights,

  // Rubber
  rubber: RubberThai,
  "RubberThai": RubberThai,

  // Flow
  flow: FlowIntraday,
  "FlowIntraday": FlowIntraday,

  // S50
  s50: S50,
  "S50": S50,

  // Gold
  gold: Gold,
  "Gold": Gold,

  // BidAsk
  bidask: BidAsk,
  "BidAsk": BidAsk,

  // TickMatch
  tickmatch: TickMatch,
  "TickMatch": TickMatch,

  // DR
  dr: DRInsight,
  "DRInsight": DRInsight,
};

const FULL_WIDTH_PAGES = []; 
const FULL_WIDTH_PATHS = [];

// ✅ 2. เพิ่ม ID ของ Tools ทั้งหมดลงในนี้ เพื่อให้แสดงผลเต็มจอ (ไม่มี Padding)
const NO_PADDING_PAGES = [
  "profile", 
  "subscription", 
  "mit", // ✅ เพิ่ม MIT กลับเข้ามาใน list นี้เพื่อให้แสดงเต็มจอ
  ...Object.keys(TOOL_COMPONENTS) 
]; 

/* ================= MAIN COMPONENT: DASHBOARD ================= */
export default function Dashboard({ initialPage }) {
  const navigate = useNavigate();
  const location = useLocation();

  /* --- State --- */
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState(initialPage || "preview-projects");
   
  const [unlockedItems, setUnlockedItems] = useState([]);

  /* --- Effects --- */
  useEffect(() => {
    if (location.state?.goTo) {
      setActivePage(location.state.goTo);
    } else {
      const path = location.pathname;
      
      // ✅ Check path mapping (เพิ่มให้ครบทุก Tools)
      // เพิ่มเงื่อนไขสำหรับ MIT
      if (path === "/mit" || path === "/MIT") setActivePage("mit");
      else if (path === "/stock-fortune" || path === "/fortune") setActivePage("fortune");
      else if (path.includes("/petroleum")) setActivePage("petroleum");
      else if (path.includes("/rubber") || path.includes("/RubberThai")) setActivePage("rubber");
      else if (path.includes("/flow") || path.includes("/FlowIntraday")) setActivePage("flow");
      else if (path.includes("/s50") || path.includes("/S50")) setActivePage("s50");
      else if (path.includes("/gold") || path.includes("/Gold")) setActivePage("gold");
      else if (path.includes("/bidask") || path.includes("/BidAsk")) setActivePage("bidask");
      else if (path.includes("/tickmatch") || path.includes("/TickMatch")) setActivePage("tickmatch");
      else if (path.includes("/dr") || path.includes("/DRInsight")) setActivePage("dr");
      
      else if (path.includes("/profile")) setActivePage("profile");
      else if (path.includes("/subscription")) setActivePage("subscription");
    }
  }, [location.state, location.pathname]);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("userProfile") || "{}");
      setUnlockedItems(user.unlockedItems || []);
    } catch (e) {
      console.error("Error loading user profile:", e);
    }
  }, []);

  useEffect(() => {
    if (initialPage) setActivePage(initialPage);
  }, [initialPage]);

  /* --- Helpers --- */
  const isFullWidthPage = () => {
    return FULL_WIDTH_PAGES.includes(activePage) || FULL_WIDTH_PATHS.includes(location.pathname);
  };

  const isNoPaddingPage = () => {
    if (NO_PADDING_PAGES.includes(activePage)) return true;
    if (location.pathname.includes("/profile")) return true;
    return false;
  };

  /* --- Render Content Logic --- */
  const renderContent = () => {
    // 1. Profile & Subscriptions
    if (activePage === "profile") return <div className="w-full min-h-full bg-[#0f172a] p-8"><Profile /></div>;
    if (activePage === "subscription") return <div className="w-full min-h-full bg-[#0f172a] p-8"><ManageSubscription /></div>;
    
    // 2. Dashboard Home
    if (activePage === "preview-projects" || activePage === "whatsnew") return <PreviewProjects />;
    if (activePage === "premiumtools") return <PremiumTools />;

    // 3. ✅ Tools Rendering
    // เนื่องจากเราเพิ่ม MIT เข้าไปใน TOOL_COMPONENTS แล้ว มันจะถูก render ตรงนี้อัตโนมัติครับ
    const ToolComponent = TOOL_COMPONENTS[activePage];
    if (ToolComponent) {
      return <ToolComponent />;
    }

    // Default Fallback
    return <PreviewProjects />;
  };

  /* --- Main Render --- */
  return (
    <div className="flex h-screen bg-[#0B0E14] text-white overflow-hidden font-sans">
      
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activePage={activePage}
        setActivePage={(page) => {
          if (page === "home") setActivePage("preview-projects");
          else setActivePage(page);
        }}
        openProject={(p) => setActivePage(p.id)} 
      />

      {/* Main Content Area */}
      <main
        className={`flex-1 transition-all duration-300 overflow-y-auto ${
          isFullWidthPage() 
            ? "ml-0" 
            : (collapsed ? "ml-[80px]" : "ml-[280px]")
        }`}
      >
        <div className={isFullWidthPage() || isNoPaddingPage() ? "p-0" : "p-8 pb-20"}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}