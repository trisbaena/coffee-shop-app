// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-[#E06C5F] text-black p-4 shadow-md">
      <nav className="flex justify-center gap-4 text-lg font-semibold text-black">
        <Link to="/">หน้าแรก</Link>      
        <Link to="/hot">กาแฟร้อน</Link>
        |
        <Link to="/cold">กาแฟเย็น</Link>
        |
        <Link to="/noncoffee">เมนูอื่นๆ</Link>
      </nav>
    </header>
  );
}