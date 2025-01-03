import React, { useRef } from "react";

function Carousel() {
  const carouselRef = useRef(null);

  // Data untuk setiap kartu carousel
  const carouselItems = [
    { id: 1, src: "Batu1.jpg", alt: "Slide 1" },
    { id: 2, src: "Batu2.jpg", alt: "Slide 2" },
    { id: 3, src: "Batu3.jpg", alt: "Slide 3" },
    { id: 3, src: "Batu4.jpg", alt: "Slide 4" },
    { id: 3, src: "Batu5.jpg", alt: "Slide 5" },
    { id: 3, src: "Batu6.jpg", alt: "Slide 6" },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-6 relative">
  {/* Wrapper Carousel */}
  <div className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden relative p-4">
    <h2 className="text-center font-dosis text-2xl font-extrabold mb-4">
      Koleksi Produk Batu Alam
    </h2>

    {/* Track Carousel */}
    <div
      ref={carouselRef}
      className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
    >
      {carouselItems.map((item) => (
        <div
          key={item.id}
          className="snap-center shrink-0 w-80 h-80 bg-gray-100 aspect-video rounded-md flex items-center justify-center shadow-md"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ))}
    </div>

    {/* Tombol Navigasi */}
    <button
      onClick={scrollLeft}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 z-10"
    >
      ❮
    </button>
    <button
      onClick={scrollRight}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 z-10"
    >
      ❯
    </button>

    {/* Tombol Selengkapnya */}
    <div className="mt-6 flex justify-center">
      <button
        onClick={() => window.open('https://shopee.co.id/naufalstone7#product_list', '_blank')}
        className="font-quattrocentro bg-amber-800 hover:bg-green-700 text-white py-2 px-4 rounded-md"
      >
        Selengkapnya
      </button>
    </div>
  </div>
</div>

  );
}

export default Carousel;
