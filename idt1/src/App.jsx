import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";

// ❌ ลบบรรทัดนี้ออก (ไม่ต้อง import Navbar แล้ว)
// import Navbar from "@/layouts/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white">
        
        {/* ❌ ลบส่วนนี้ออก (ส่วนแสดงผล Navbar)
        <div className="p-4 pb-0">
           <Navbar />
        </div>
        */}

        {/* ✅ เหลือไว้แค่ส่วนเนื้อหา (ที่จัดการโดย Router) */}
        <div className="p-0"> {/* ปรับ padding ตามความสวยงาม หรือใช้ p-4 ก็ได้ */}
           <AppRoutes />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;