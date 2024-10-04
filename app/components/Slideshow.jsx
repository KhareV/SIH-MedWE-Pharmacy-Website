'use client';
import { useState, useEffect, useRef } from "react";

const Slideshow = () => {
    const [offers, setOffers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);  // State to handle fade effect
    const slideInterval = useRef(null);

    // Fetch offers.json data on component mount
    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch('/offers.json');  // Fetch from public directory
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await response.json();
                setOffers(data.offers || []);  // Handle case if data.offers is undefined
            } catch (error) {
                console.error("Error fetching the offers:", error);
            }
        };
        fetchOffers();
    }, []);

    useEffect(() => {
        if (offers.length > 0) {
            startSlideShow();
        }
        return () => {
            stopSlideShow();
        };
    }, [offers]);

    const startSlideShow = () => {
        stopSlideShow();
        slideInterval.current = setInterval(() => {
            handleNextSlideWithFade();
        }, 3000); // 3 seconds interval
    };

    const stopSlideShow = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };

    const handleNextSlideWithFade = () => {
        setIsFading(true);  // Start fade out
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === offers.length - 1 ? 0 : prevIndex + 1
            );
            setIsFading(false);  // Fade back in after changing the slide
        }, 500);  // Delay to match the fade-out time
    };

    const nextSlide = () => {
        stopSlideShow();
        handleNextSlideWithFade();
        startSlideShow();
    };

    const prevSlide = () => {
        stopSlideShow();
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? offers.length - 1 : prevIndex - 1
            );
            setIsFading(false);
        }, 500);  // Delay before the slide switch
        startSlideShow();
    };

    if (offers.length === 0) {
        return <div>Loading...</div>;  // If there are no offers, show loading
    }

    return (
        <div className="relative max-w-screen-xl mx-auto mb-5">
            <div className="relative overflow-hidden">
                <img
                    src={offers[currentIndex]?.image_url}
                    alt={`Offer ${offers[currentIndex]?.id}`}
                    className={`w-full h-auto transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
                />
                <div className="bg-teal-200 text-xl flex items-center justify-center">
                    <p className="text-center text-2xl font-semibold my-4">{offers[currentIndex]?.description}</p>
                </div>
            </div>

            {/* Previous Button */}
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 bg-gray-800 bg-opacity-50 text-white hover:bg-gray-900 rounded-r-md"
                onClick={prevSlide}
            >
                &#10094;
            </button>

            {/* Next Button */}
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 bg-gray-800 bg-opacity-50 text-white hover:bg-gray-900 rounded-l-md"
                onClick={nextSlide}
            >
                &#10095;
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
                {offers.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-400"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
