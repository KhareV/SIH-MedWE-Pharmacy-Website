'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DNA } from 'react-loader-spinner';

const CancerPage = () => {
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after the delay
        }, 1000); // 1 second delay to simulate loading time

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-3xl">
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperClass="dna-wrapper"
                    /></p> {/* You can replace this with a spinner or skeleton loader */}
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            {/* Main Image at the Top */}
            <div className="relative max-w-screen-xl mx-auto mb-8">
                <Link href="/">
                    <img src="/cancer.jpg" alt="Cancer Awareness" className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105" />
                </Link>
            </div>

            {/* Title Section */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Fighting Cancer is a battle, but accessing quality care shouldn't be...
                </h1>
            </div>

            {/* Supporting Images Centered */}
            <div className="flex items-center justify-center mb-8 translate-x-36">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
                    <Link href="medicine/vitamins">
                        <img
                            src="/cancersup.jpg"
                            alt="Cancer Support"
                            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                    <Link href="/blogs/cancer/assortment">
                        <img
                            src="/wild.jpg"
                            alt="Wild Image"
                            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                </div>
            </div>

            {/* Resource Center Section */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Cancer Resource Center: Where answers and support unite!
                </h2>
                <p className="text-gray-600">#What’sYourColour</p>
            </div>

            {/* Resource Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <Link href="/blogs/cancer/breast">
                    <img
                        src="/breast.jpg"
                        alt="Breast Cancer"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </Link>
                <Link href="/blogs/cancer/thyroid">
                    <img
                        src="/thyroid.jpg"
                        alt="Thyroid Cancer"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </Link>
                <Link href="/blogs/cancer/liver">
                    <img
                        src="/liver.jpg"
                        alt="Liver Cancer"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <Link href="/blogs/cancer/kidney">
                    <img
                        src="/kidney.jpg"
                        alt="Kidney Cancer"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </Link>
                <Link href="/blogs/cancer/colon">
                    <img
                        src="/colon.jpg"
                        alt="Colon Cancer"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </Link>
                <Link href="/blogs/cancer/lung">
                    <img
                        src="/lung.jpg"
                        alt="Lung Cancer"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <Link href="/blogs/cancer/cervical">
                    <img
                        src="/cervical.jpg"
                        alt="Cervical Cancer"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </Link>
                <Link href="/blogs/cancer/leukemia">
                    <img
                        src="/leukemia.jpg"
                        alt="Leukemia"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </Link>
                <Link href="/blogs/cancer/softtissue">
                    <img
                        src="/softtissue.jpg"
                        alt="Soft Tissue Cancer"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </Link>
            </div>

            {/* Bottom Image */}
            <div className="relative max-w-screen-xl mx-auto mb-8">
                <Link href="/">
                    <img src="/cancer2.jpg" alt="Cancer Awareness" className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105" />
                </Link>
            </div>
        </div>
    );
};

export default CancerPage;
