import React from "react";

function Footer() {
    return (
        <footer className="font-dosis bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                {/* Bagian Atas Footer */}
                <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">
                        <span>© 2025 Naufal Store</span>
                    </div>
                    
                    {/* Logo WhatsApp dan Shopee */}
                    <div className="flex space-x-4">
                        {/* WhatsApp Icon */}
                        <div className="bg-gray-100 rounded-full">
                            <a href="https://wa.me/6282231727778" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="WhatsApp"
                                    className="h-10 w-10 hover:opacity-80 transition duration-200"
                                />
                            </a>
                        </div>
                        
                        {/* Shopee Icon */}
                        <div className="bg-gray-100 rounded-full">
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
            </div>
        </footer>
    );
}

export default Footer;
