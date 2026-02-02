import React, { useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import Sidebar from "@/layouts/Sidebar";

function MainLayout() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("preview-projects");

  // ✅ แก้ตรงนี้: เพิ่ม "/dashboard" ลงไป เพื่อให้ App.jsx ไม่โชว์ Sidebar ซ้อน
  const hideSidebarPaths = ["/", "/register", "/member-register", "/welcome", "/dashboard"];
  
  // เช็คว่า path ปัจจุบันอยู่ในรายการที่ต้องซ่อนหรือไม่
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#0c0f14] text-white flex">
      
      {/* Sidebar จะโชว์เฉพาะหน้าอื่นๆ ที่ไม่อยู่ใน list */}
      {!shouldHideSidebar && (
        <Sidebar 
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}

      {/* Main Content */}
      <main 
        className={`flex-1 min-h-screen transition-all duration-300 relative
        ${shouldHideSidebar 
            ? "ml-0 w-full"  // หน้า Dashboard จะเข้าเงื่อนไขนี้ (เต็มจอ) แล้วปล่อยให้ Dashboard.jsx จัดการ margin เอง
            : collapsed ? "ml-[80px]" : "ml-[280px]"
        }`}
      >
        <div className={shouldHideSidebar ? "p-0" : "p-6"}>
           <AppRoutes />
        </div>
      </main>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
       <MainLayout />
    </BrowserRouter>
  );
}

export default App;