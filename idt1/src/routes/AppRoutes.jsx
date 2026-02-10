import { Routes, Route, Navigate } from "react-router-dom";

import Welcome from "@/pages/Welcome/Welcome";
import Register from "@/pages/Register/Register"; 
import MemberRegister from "@/pages/MemberRegister/MemberRegister";
import Dashboard from "@/pages/Dashboard/Dashboard";
import PremiumTools from "@/pages/Dashboard/PremiumTools"; 
// import ManageSubscription ไม่ต้องใช้ตรงนี้แล้ว เพราะเราผลักภาระไปให้ Dashboard จัดการผ่าน initialPage="subscription"

export default function AppRoutes() {
  return (
    <Routes>
      {/* === Public Pages (หน้าทั่วไป) === */}
      <Route path="/" element={<Welcome />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/member-register" element={<MemberRegister />} />

      {/* === Dashboard & Tools (หน้าสมาชิก) === */}
      
      {/* 1. หน้าหลัก Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* 2. MIT */}
      <Route path="/mit" element={<Dashboard initialPage="mit" />} />
      
      {/* 3. ✅ หมอดูหุ้น (Stock Fortune Teller) */}
      {/* กำหนดแบบนี้จะเปิด Dashboard ขึ้นมาก่อน แล้ว Dashboard จะไปเรียก StockFortuneTeller มาแสดงเอง */}
      <Route path="/stock-fortune" element={<Dashboard initialPage="stock-fortune" />} />

      {/* 4. Profile & Subscription */}
      <Route path="/profile" element={<Dashboard initialPage="profile" />} />
      <Route path="/subscription" element={<Dashboard initialPage="subscription" />} />

      {/* === Other Pages === */}
      <Route path="/preview-projects" element={<PremiumTools />} />
      <Route path="/shortcuts" element={<Navigate to="/preview-projects" replace />} />
      
      {/* === Fallback (กันหลง) === */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}