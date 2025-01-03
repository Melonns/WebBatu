import React, { useRef } from "react";

function Carousel() {
  const carouselRef = useRef(null);

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
      <div className="w-100 bg-white rounded-lg shadow-lg overflow-hidden relative p-4">
        <h2 className="text-center font-dosis text-2xl font-extrabold mb-4">Galeri Batu Alam</h2>
        
        {/* Track Carousel */}
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          <div className="snap-center shrink-0 w-120 h-80 bg-gray-100 rounded-md flex items-center justify-center shadow-md">
            <img
              src="Batu1.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="snap-center shrink-0 w-120 h-80 bg-gray-100 rounded-md flex items-center justify-center shadow-md">
            <img
              src="Batu2.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="snap-center shrink-0 w-72 h-48 bg-gray-100 rounded-md flex items-center justify-center shadow-md">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Slide 3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
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
      </div>
    </div>
  );
}

export default Carousel;
