import React from "react";

function Footer() {
    return (
        <footer className="font-dosis bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                {/* Bagian Atas Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 text-center md:text-left">
                    <div className="text-lg font-bold mb-4 md:mb-0">
                        <span>© 2025 Naufal Store</span>
                    </div>
                    
                    {/* Logo WhatsApp dan Shopee */}
                    <div className="flex space-x-4">
                        {/* WhatsApp Icon */}
                        <div className="bg-gray-100 rounded-full p-1">
                            <a href="https://wa.me/6282231727778" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="WhatsApp"
                                    className="h-10 w-10 hover:opacity-80 transition duration-200"
                                />
                            </a>
                        </div>
                        
                        {/* Shopee Icon */}
                        <div className="bg-gray-100 rounded-full p-1">
                            <a href="https://shopee.co.id/naufalstone7" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="LogoShopee.png"
                                    alt="Shopee"
                                    className="h-10 w-10 hover:opacity-80 transition duration-200"
                                />
                            </a>
                        </div>
                        <div className="bg-gray-100 rounded-full p-1">
                            <a href="https://www.tiktok.com/@naufalstone?_t=ZS-8soVjRcAoSI&_r=1" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/id/a/a9/TikTok_logo.svg"
                                alt="Tiktok"
                                className="h-10 w-10 hover:opacity-80 transition duration-200"
                            />
                            </a>
                        </div>

                        {/* Baris Kedua - 2 Ikon */}
                        <div className="bg-gray-100 rounded-full p-1">
                            <a href="https://www.facebook.com/kijoko.mayak?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                alt="Facebook"
                                className="h-10 w-10 hover:opacity-80 transition duration-200"
                            />
                            </a>
                        </div>
                        <div className="bg-gray-100 rounded-full p-1">
                            <a href="https://www.instagram.com/abynebunda?igsh=MXV3ZG5wNjdlY2R6Yg==" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                alt="Shopee 4"
                                className="h-10 w-10 hover:opacity-80 transition duration-200"
                            />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bagian Tengah Tulisan "Made By" */}
                <div className="text-center mt-4">
                    <p className="text-gray-500 text-sm">Made By Alvian</p>
                    <a 
                        href="https://bit.ly/Contact-Alvian" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 text-sm hover:underline"
                    >
                        https://bit.ly/Contact-Alvian
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
