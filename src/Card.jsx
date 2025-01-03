import React from "react";

function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Gambar Card */}
      <img
        src="https://via.placeholder.com/400x200"
        alt="Card Image"
        className="w-full h-48 object-cover"
      />

      {/* Konten Card */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Judul Card</h2>
        <p className="text-gray-600 text-sm mb-4">
          Ini adalah contoh card dengan Tailwind CSS. Kamu bisa menambahkan teks, gambar, dan tombol di sini.
        </p>
        <button className="w-full bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}

export default Card;
