import React from 'react';

function Navbar() {
    return (
        <nav className="bg-transparent p-4 font-dosis text-xl sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-between"> {/* Flexbox untuk tata letak kiri dan kanan */}
                <a href="/" className="text-white text-2xl font-bold">
                    <img 
                      className='h-16 rounded-full'
                      src='LogoBatu.jpg'
                    />
                </a>
                <ul className="flex space-x-32 mx-auto"> {/* Menu diletakkan di tengah dengan mx-auto */}
                    <li>
                        <a href="#home" className="hover:text-gray-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#profil" className=" hover:text-gray-400">
                            Tentang Kami
                        </a>
                    </li>
                    <li>
                        <a href="#koleksi" className=" hover:text-gray-400">
                            Koleksi
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
