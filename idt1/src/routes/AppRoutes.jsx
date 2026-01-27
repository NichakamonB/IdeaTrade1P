import { Routes, Route } from "react-router-dom";

import Welcome from "@/pages/Welcome/Welcome";
import Register from "@/pages/Register/Register";
import MemberRegister from "@/pages/MemberRegister/MemberRegister";
import Dashboard from "@/pages/Dashboard/Dashboard";
import MitAnalysis from "@/pages/Dashboard/MIT";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/member-register" element={<MemberRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mit-analysis" element={<MitAnalysis />} />
    </Routes>
  );
}