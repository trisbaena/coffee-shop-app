// src/pages/ColdCoffee.jsx
import React, { useState } from "react";
import coldcoffee from "../data/coldcoffee";

export default function ColdCoffee() {
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <>
      {/* Lightbox Popup */}
      {zoomImg && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 cursor-zoom-out"
          onClick={() => setZoomImg(null)}
        >
          <img
            src={zoomImg}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl border-4 border-white"
            alt="zoom"
          />
        </div>
      )}

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {coldcoffee.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition text-center"
          >
            <img
              src={item.coffeepic}
              alt={item.coffeename}
              className="w-full h-40 object-cover rounded-lg cursor-pointer"
              onClick={() => setZoomImg(item.coffeepic)}
            />

            <h2 className="text-xl mt-3 font-semibold text-[#4B2E23]">
              {item.coffeename}
            </h2>

            <p className="text-lg text-[#6A3E2F]">ราคา {item.price} บาท</p>
          </div>
        ))}
      </div>
    </>
  );
}
