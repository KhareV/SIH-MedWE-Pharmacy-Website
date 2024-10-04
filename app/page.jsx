'use client';

import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Slideshow from "./components/Slideshow";
import ShopCat from "./components/ShopCat";
import PaymentOffer from "./components/PaymentOffer";
import Footer from "./components/Footer";
import { DNA } from "react-loader-spinner";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperClass="dna-wrapper"
          />
        </h1>
      </div>
    );
  }

  return (
    <>
      {!isAuthenticated ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Slideshow />
          <ShopCat />
          <PaymentOffer />
        </>
      )}
    </>
  );
}
