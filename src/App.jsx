import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HotCoffee from "./pages/HotCoffee";
import ColdCoffee from "./pages/ColdCoffee";
import NonCoffee from "./pages/NonCoffee";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF1ED]">

      <Header />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hot" element={<HotCoffee />} />
          <Route path="/cold" element={<ColdCoffee />} />
          <Route path="/noncoffee" element={<NonCoffee />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}