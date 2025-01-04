import React from "react";

function ProfilUsaha() {
  const reviews = [
    {
      id: 1,
      name: "zapcorp",
      review:
        "Produk kokoh dan berkualitas, sesuai ekspektasi! Penjual responsif dan terpercaya. Pasti order lagi!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "l*****f",
      review:
        "Barang sampai dengan aman dan sesuai ukuran. Terima kasih, penjual sangat profesional!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "herisektiyanto3",
      review:
        "Produk sesuai deskripsi, pengemasan aman, dan respon cepat. Sangat direkomendasikan!",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-center font-dosis text-2xl font-extrabold mb-4">
        Tentang Kami
      </h1>
      <p className="font-quattrocentro text-gray-700 mb-6">
        Kami menawarkan berbagai macam furnitur batu alam untuk mempercantik
        rumah Anda, mulai dari wastafel, meja, hingga dekorasi unik. Produk kami
        dibuat dengan kualitas tinggi, tahan lama, dan tetap terjangkau. Selain
        furnitur, kami juga menyediakan kerajinan dari batu alam seperti patung,
        ubin lantai, dan lubang angin untuk memperindah interior maupun eksterior
        rumah. Dengan pelayanan yang aman, terpercaya, dan ramah, kami siap
        membantu mewujudkan hunian impian Anda.
      </p>

      {/* Review Section */}
      <h2 className="text-center font-dosis text-xl font-bold mb-4">
        Ulasan Pelanggan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-100 rounded-lg shadow-md p-4 text-center"
          >
            <h3 className="font-dosis text-lg font-bold mb-2">{review.name}</h3>
            <p className="text-gray-600 text-sm mb-2">"{review.review}"</p>
            <p className="text-yellow-500">{review.rating}</p>
          </div>
        ))}
      </div>

      {/* Section Kontak */}
      <h2 className="text-center font-dosis text-xl font-bold mb-4 mt-6">
        Hubungi Kami
      </h2>
      <div className="flex justify-center space-x-6">
        {/* WhatsApp Icon with white circular background */}
        <div className="bg-gray-100 rounded-full p-2 z-0">
          <a href="https://wa.me/6282231727778" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="h-10 w-10 hover:opacity-80 transition duration-200"
            />
          </a>
        </div>

        {/* Shopee Icon with white circular background */}
        <div className="bg-gray-100 rounded-full p-2 z-0">
          <a href="https://shopee.co.id/naufalstone7" target="_blank" rel="noopener noreferrer">
            <img
              src="LogoShopee.png"
              alt="Shopee"
              className="h-10 w-10 hover:opacity-80 transition duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfilUsaha;
