// src/pages/Index.jsx
import React, { useState } from "react";

export default function Index() {
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

      <div className="p-6 flex justify-center">
        <div className="bg-black text-white p-8 rounded-2xl space-y-10 w-full max-w-3xl shadow-2xl">

          {/* เมนูแนะนำ */}
          <section className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-[#FFA08C]">เมนูแนะนำ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-[#1a1a1a] p-4 rounded-xl shadow-md hover:shadow-lg"
                >
                  <img
                    src="/cold1.png"
                    className="w-full h-32 object-cover rounded-md cursor-pointer"
                    onClick={() => setZoomImg("/cold1.png")}
                  />
                  <p className="mt-2 text-lg">เมนูแนะนำ #{i}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ประกาศ */}
          <section className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-[#FFA08C]">ประกาศ</h2>
            <p className="text-lg">เวลาเปิด-ปิดร้าน: <b>09:00 - 16:00</b></p>
            <p className="text-lg">เมนูมาใหม่: <b>มอคค่าร้อน</b> / <b>นมสดเย็นสูตรพิเศษ</b></p>
          </section>

          {/* แผนที่ */}
          <section className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-[#FFA08C]">แผนที่ร้าน</h2>
            <iframe
              className="w-full h-72 rounded-xl border-2 border-[#FFA08C]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24163.37772837941!2d100.523186!3d13.736717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2994d13e3edbf%3A0xacf4d6e9c9afd1cd!2z4LmA4LiB4Lih4Li44LiX4Lii4LiH4LiE4LiX4Li14LmI4Liy4LiH4LiB4Liy!5e0!3m2!1sth!2sth!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </section>
        </div>
      </div>
    </>
  );
}