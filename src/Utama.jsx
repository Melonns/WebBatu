import React from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import ProfilUsaha from "./ProfilUsaha";

function Utama(){
    return(
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

<section id="home" className="h-screen flex flex-col items-center justify-center text-center -mt-16">
        <h1 className="font-dosis text-3xl md:text-6xl font-bold mb-4">
          Jadikan Rumahmu <br/>
          <span className="text-[#4CAF50]">Lebih Indah</span> <br></br>
          Dengan Furnitur <br/>
          <span className="text-[#4CAF50]">Batu Alam</span>
        </h1>
        <p className="text-sm font-quattrocentro md:text-lg text-gray-600 mb-6 max-w-md">
          Ciptakan Suasana Alam di Rumah Anda dengan Batu Alam yang Indah dan Tahan Lama.
        </p>
        <button onClick={() => window.open('https://shopee.co.id/naufalstone7', '_blank')} className="font-quattrocentro bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-900 transition duration-300 z-10">
          Pesan Sekarang
        </button>
      </section>

      {/* Profil Usaha */}
      <section id="profil" className="bg-gray-100 min-w-90 mt-5 py-3">
        <ProfilUsaha />
      </section>

      {/* Carousel Section */}
      <section id="koleksi" className="bg-gray-100 min-w-full">
        <div className="container mx-auto py-16">
          <Carousel />
        </div>
      </section>
</div>


    )
}

export default Utama;