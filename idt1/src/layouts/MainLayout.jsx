// idt1/src/layouts/MainLayout.jsx
import React from 'react';
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg-main text-text-main flex overflow-hidden">
      <main className="flex-1 w-full relative">
        {children}
      </main>
      
    </div>
  );
}