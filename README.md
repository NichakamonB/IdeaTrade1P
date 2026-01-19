# 📌 Idea Trade 1 Project

เว็บแอปพลิเคชันฝั่ง **Frontend** สำหรับแพลตฟอร์ม Idea Trade
พัฒนาด้วย **React + Vite** โดยใช้ **Tailwind CSS ควบคู่กับ Material UI (MUI)**
ออกแบบให้เป็นโครงสร้างแบบ Component-based รองรับ Responsive และต่อยอดฟีเจอร์ได้ง่าย

---

## 🎯 Project Objective

* สร้าง Landing Page และ Dashboard สำหรับแพลตฟอร์ม Idea Trade
* รองรับผู้ใช้ทั่วไป (Guest) และสมาชิก (Membership)
* แยก Layout ตามสถานะผู้ใช้ (ก่อน / หลัง Login)
* รองรับการพัฒนาเป็น SaaS / Trading Platform ในอนาคต

---

## 🛠 Tech Stack

* **React.js** – Frontend Library
* **Vite** – Development Server & Build Tool
* **Tailwind CSS** – Utility-first CSS Framework
* **Material UI (MUI)** – UI Component Framework
* **Emotion** – Styling Engine สำหรับ MUI
* **JavaScript (ES6+)**

> 🔎 แนวคิดหลักของโปรเจค
>
> * **Tailwind CSS** → layout, spacing, responsive, utility styles
> * **MUI** → component ที่มี logic (Button, Dialog, Layout, Form ฯลฯ)

---

## 📁 โครงสร้างโปรเจค (Project Structure)

```txt
src/
├─ assets/
│  ├─ images/                  # รูปภาพ (logo, icon, banner)
│  └─ styles/
│     └─ index.css             # Tailwind base / components / utilities
│
├─ components/                 # Reusable Components
│  ├─ buttons/
│  │  └─ PrimaryButton.jsx
│  │
│  ├─ cards/
│  │  └─ ProjectCard.jsx
│  │
│  └─ common/
│     └─ Logo.jsx              # Component กลาง เช่น Logo
│
├─ layouts/                    # Layout หลักของแต่ละกลุ่มหน้า
│  ├─ PublicLayout.jsx         # Landing / Welcome / Register
│  └─ DashboardLayout.jsx      # Layout หลัง Login
│
├─ pages/                      # Page ตาม Route
│  ├─ Landing/
│  │  └─ Landing.jsx           # หน้า Landing Page
│  │
│  ├─ Welcome/
│  │  └─ Welcome.jsx           # หน้า Welcome
│  │
│  ├─ Register/
│  │  └─ Register.jsx          # สมัครผู้ใช้ทั่วไป
│  │
│  ├─ MemberRegister/
│  │  └─ MemberRegister.jsx    # สมัครสมาชิก (Membership)
│  │
│  └─ Dashboard/
│     └─ Dashboard.jsx         # หน้า Dashboard
│
├─ routes/
│  └─ AppRoutes.jsx            # กำหนด Routing ของระบบ
│
├─ theme/
│  ├─ theme.js                 # Theme กลาง (สี / config)
│  └─ muiTheme.js              # MUI Theme
│
├─ App.jsx                     # Root Component
└─ main.jsx                    # Entry Point + Provider ต่าง ๆ
```

---

## 🎨 Tailwind CSS Configuration

### 📦 Packages ที่ใช้

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### ⚙️ tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

### 🧩 การใช้งาน Tailwind ในโปรเจค

**src/assets/styles/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

และ import ใน `main.jsx`

```jsx
import "@/assets/styles/index.css";
```

---

## 🤝 การใช้ Tailwind CSS ร่วมกับ MUI

โปรเจคนี้ใช้ **Tailwind + MUI ร่วมกัน** โดยมีแนวทางดังนี้

### ✅ แนวทางที่แนะนำ

* Tailwind → layout, spacing, responsive
* MUI → component ที่มี interaction / logic
* ใช้ theme กลางร่วมกัน (สีเดียวกันทั้งระบบ)

### 🧪 ตัวอย่างการใช้งานร่วมกัน

```jsx
import { Button } from "@mui/material";

<Button
  variant="contained"
  className="!rounded-xl !px-6 !py-3"
>
  Submit
</Button>
```

> ℹ️ ใช้ `!` (important) เพื่อ override style ของ MUI เมื่อจำเป็น

---

## 🚀 การรันโปรเจค

```bash
npm install
npm run dev
```

เปิดเว็บที่:

```
http://localhost:5173
```




