'use client';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo and Description */}
                    <div className="col-span-1 mb-8 md:mb-0">
                        <div className="flex items-center mb-6">
                            <Link href="/">
                                <img
                                    src="/logo.png"
                                    alt="Logo"
                                    className="h-20 md:h-24 transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                            </Link>
                            <h2 className="text-4xl font-bold ml-6 md:ml-8">MedWE</h2>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base">
                            Providing the best in pharmaceutical supply chain management.
                            Optimizing your health and wellness needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
                            <li><Link href="/shop" className="hover:text-blue-500 transition-colors">Shop</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-span-1 mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
                        <p className="text-gray-400 mb-3">123 Street Name, City, Country</p>
                        <p className="text-gray-400 mb-3">Email: <a href="mailto:info@example.com" className="hover:text-blue-500 transition-colors">info@example.com</a></p>
                        <p className="text-gray-400 mb-3">Phone: +91 9676444970</p>
                        <p className="text-gray-400">Find us on <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Google Maps</a></p>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="col-span-1 mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-6">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Stay updated with our latest offers and news.</p>
                        <form className="flex flex-col md:flex-row items-center">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full md:w-56 px-4 py-2 mb-4 md:mb-0 text-gray-900 border border-gray-700 rounded-lg rounded-r-none focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <button className="bg-blue-600 px-2 py-2 text-white rounded-lg rounded-l-none hover:bg-blue-700 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Links and Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 MedWE. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
