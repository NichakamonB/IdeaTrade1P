import { Routes, Route, Navigate } from "react-router-dom";

import Welcome from "@/pages/Welcome/Welcome";
import Register from "@/pages/Register/Register"; 
import MemberRegister from "@/pages/MemberRegister/MemberRegister";
import Dashboard from "@/pages/Dashboard/Dashboard";
import PremiumTools from "@/pages/Dashboard/PremiumTools"; 

export default function AppRoutes() {
  return (
    <Routes>
      {/* ================= PUBLIC PAGES ================= */}
      {/* (Sidebar จะถูกซ่อนอัตโนมัติด้วย logic ใน App.js) */}
      <Route path="/" element={<Welcome />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/member-register" element={<MemberRegister />} />

      {/* ================= APP PAGES ================= */}
      {/* (Sidebar จะแสดงผลปกติ) */}
      
      {/* Dashboard Main */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Preview Projects (เปลี่ยน path ให้ตรงกับ ID ใน Sidebar) */}
      <Route path="/preview-projects" element={<PremiumTools />} />
      
      {/* รองรับ path เก่า /shortcuts ให้วิ่งไปที่ preview-projects แทน */}
      <Route path="/shortcuts" element={<Navigate to="/preview-projects" replace />} />

      {/* MIT (ใช้หน้า Dashboard แต่ส่ง props พิเศษไป) */}
      <Route
        path="/mit"
        element={<Dashboard initialPage="mit" />}
      />

      {/* Placeholder หน้าอื่นๆ (ตัวอย่าง) */}
      <Route path="/fortune" element={<div className="p-10 text-white">หน้าหมอดูหุ้น</div>} />

      {/* ================= FALLBACK ================= */}
      {/* ถ้าพิมพ์มั่ว หรือหาหน้าไม่เจอ ให้เด้งกลับไปหน้า Welcome */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}