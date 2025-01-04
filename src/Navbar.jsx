import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white p-4 font-dosis text-xl sticky top-0 z-10 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/" className="flex items-center text-2xl font-bold">
                    <img 
                      className='h-12 rounded-full'
                      src='LogoBatu.jpg'
                      alt="Logo Batu"
                    />
                    <span className="ml-4">Naufal Store</span>
                </a>
                <ul className="hidden lg:flex space-x-28 mr-8">
                    <li>
                        <a href="#home" className="hover:text-gray-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#profil" className="hover:text-gray-400">
                            Tentang Kami
                        </a>
                    </li>
                    <li>
                        <a href="#koleksi" className="hover:text-gray-400">
                            Koleksi
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
