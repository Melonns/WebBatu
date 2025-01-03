import React from "react";
import Card from "./Card";
import Carousel from "./Carousel";

function Utama(){
    return(
        // <div className="">
        //     <img src="Batu1.jpg" className="pt-32 w-32 h-auto object-cover rounded-lg transform rotate-6" />
        // </div>
        <div className="relative pt-44 flex flex-col items-center text-center p-6 md:p-12 bg-gray-50 sm:bg-none">
  {/* Elemen latar belakang */}
  <div
    // style={{
    //   backgroundImage: 'url(https://i.pinimg.com/736x/80/db/47/80db476af692eb6af383985911396fe1.jpg)',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   opacity: 0.7,  // Atur nilai opacity sesuai keinginan (0-1)
    // }}
    className="absolute top-0 left-0 w-full h-full z-0"
  ></div>

  {/* Konten utama */}
  <h1 className="pt-48 font-dosis text-3xl md:text-6xl font-bold mb-4 z-10">Batu Sungai</h1>
  <h1 className="text-3xl font-dosis md:text-6xl font-bold mb-4 z-10">Alami Untuk</h1>
  <h1 className="text-3xl font-dosis md:text-6xl font-bold mb-4 z-10"> <span className="text-[#4CAF50]">Keindahan</span> Ruang Anda</h1>
  <p className="text-sm font-quattrocentro md:text-lg text-gray-600 mb-6 max-w-md z-10">
    Ciptakan Suasana Alam di Rumah Anda dengan Batu Alam yang Indah dan Tahan Lama.
  </p>
  <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 z-10">
    Pesan Sekarang
  </button>

  {/* Foto di sekitar */}
  {/* <div className="hidden md:block absolute top-40 left-80 transform rotate-6 z-10">
    <img src="Batu1.jpg" alt="User" className="w-20 h-20 rounded-md shadow-md" />
  </div>
  <div className="hidden md:block absolute -bottom-10 right-10 transform -rotate-6 z-10">
    <img src="Batu2.jpg" alt="User" className="w-20 h-20 rounded-md shadow-md" />
  </div> */}

  <div className="pt-64 z-10">
    <Carousel />
  </div>
</div>


    )
}

export default Utama;