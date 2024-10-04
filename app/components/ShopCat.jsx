'use client';
import React from 'react';
import Link from 'next/link';

const ShopCat = () => {
    return (
        <>
            <div className="bg-customGray flex flex-col items-center h-[280px]">
                <div className="text-2xl font-semibold my-4">
                    Shop By Category
                </div>
                <div className="bg-customGray flex items-center justify-center space-x-4 flex-wrap">
                    {/* Vitamins */}
                    <div className="flex items-center justify-center w-48 h-48 transform transition duration-300 hover:scale-110 hover:shadow-xl">
                        <Link href="/medicine/vitamins">
                            <img src="/shop1.png" alt="Vitamins" className="w-full h-full object-cover" />
                        </Link>
                    </div>

                    {/* Ayurvedic */}
                    <div className="flex items-center justify-center w-48 h-48 transform transition duration-300 hover:scale-110 hover:shadow-xl">
                        <Link href="/medicine/ayurvedic">
                            <img src="/shop2.png" alt="Ayurvedic" className="w-full h-full object-cover" />
                        </Link>
                    </div>

                    {/* Cleansers */}
                    <div className="flex items-center justify-center w-48 h-48 transform transition duration-300 hover:scale-110 hover:shadow-xl">
                        <Link href="/medicine/cleansers">
                            <img src="/shop3.png" alt="Cleansers" className="w-full h-full object-cover" />
                        </Link>
                    </div>

                    {/* Skincare */}
                    <div className="flex items-center justify-center w-48 h-48 transform transition duration-300 hover:scale-110 hover:shadow-xl">
                        <Link href="/medicine/skincare">
                            <img src="/shop4.png" alt="Skincare" className="w-full h-full object-cover" />
                        </Link>
                    </div>

                    {/* Fitness */}
                    <div className="flex items-center justify-center w-48 h-48 transform transition duration-300 hover:scale-110 hover:shadow-xl">
                        <Link href="/medicine/fitness">
                            <img src="/shop5.png" alt="Fitness" className="w-full h-full object-cover" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopCat;
