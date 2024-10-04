'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../images/logo.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownTimer = useRef(null);

    const handleMouseEnter = () => {
        if (dropdownTimer.current) {
            clearTimeout(dropdownTimer.current);
            dropdownTimer.current = null;
        }
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimer.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200); // 200ms delay
    };

    // Clear the timer when the component unmounts
    useEffect(() => {
        return () => {
            if (dropdownTimer.current) {
                clearTimeout(dropdownTimer.current);
            }
        };
    }, []);

    return (
        <>
            <header className="bg-teal-700 p-4 text-white">
                {/* Top Section */}
                <div className="flex items-center justify-between">
                    {/* Left Section: Logo */}
                    <div className="flex items-center">
                        <div className="text-3xl font-bold mr-1 ml-16">
                            <Link href="/">
                                <Image src={Logo} alt="Logo" width={100} height={100} />
                            </Link>
                        </div>
                    </div>

                    {/* Center Section: Delivery Info and Search */}
                    <div className="flex items-center space-x-4 w-1/2">
                        <div className="bg-gray-100 text-black px-6 py-1 rounded-lg flex items-center">
                            Deliver to: 600127
                        </div>
                        <input
                            type="text"
                            className="w-full p-2 rounded-lg border focus:outline-none"
                            placeholder="Search Here"
                        />
                    </div>

                    {/* Right Section: Cart and Sign In */}
                    <div className="flex items-center space-x-8 mr-11">
                        <div className="flex items-center">
                            <IoMdCart className="text-2xl" />
                            <span className="ml-2">CART</span>
                        </div>
                        <div className="flex items-center">
                            <FaUser className="text-2xl" />
                            <span className="ml-2">SIGN IN</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-center space-x-14">
                    {/* Medicine */}
                    <div className="flex items-center space-x-2 group">
                        <Image
                            src={img1}
                            alt="Medicine"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div className="text-xl relative">
                            <Link
                                href="/medicine/all"
                                className="group-hover:text-gray-300 transition-all duration-300"
                            >
                                Medicine
                            </Link>
                            <div className="absolute left-0 bottom--7 w-full h-1 bg-transparent group-hover:bg-white transition-all duration-300"></div>
                        </div>
                    </div>

                    {/* Stores Near Me */}
                    <div className="flex items-center space-x-2 group">
                        <Image
                            src={img2}
                            alt="Stores Near Me"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div className="text-xl relative">
                            <Link
                                href="/stores"
                                className="group-hover:text-gray-300 transition-all duration-300"
                            >
                                Stores Near Me
                            </Link>
                            <div className="absolute left-0 bottom--7 w-full h-1 bg-transparent group-hover:bg-white transition-all duration-300"></div>
                        </div>
                    </div>

                    {/* Health Corner with Dropdown */}
                    <div
                        className="flex items-center space-x-2 relative group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            src={img3}
                            alt="Health Corner"
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                        />
                        <div className="text-xl relative">
                            <Link
                                href="/blogs/all"
                                className="transition-all duration-300 group-hover:text-gray-300"
                            >
                                Health Corner
                            </Link>
                            {/* Underline effect remains */}
                            <div className="absolute left-0 bottom--7 w-full h-1 bg-transparent group-hover:bg-white transition-all duration-300"></div>
                        </div>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div
                                className="absolute bg-white bg-opacity-90 text-black mt-2 rounded-lg shadow-lg p-4 w-64 left-0 top-full z-50"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <ul className="space-y-2 opacity-100">
                                    <li>
                                        <Link href="/blogs/all" className="block hover:bg-gray-300 p-2 rounded">
                                            Library
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs/cancer" className="block hover:bg-gray-300 p-2 rounded">
                                            Cancers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs/tips" className="block hover:bg-gray-300 p-2 rounded">
                                            Tips to Keep Yourself Protected from Diseases
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
