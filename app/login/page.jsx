'use client';

import React, { useState, useEffect } from 'react';
import Login from '../components/Login'; // Import the Login component
import { DNA } from 'react-loader-spinner';

const LoginPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulate a 2-second loading time

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    useEffect(() => {
        // Check authentication status on page load
        const authStatus = localStorage.getItem("isAuthenticated");
        if (authStatus === "true") {
            setIsAuthenticated(true);
            window.location.href = '/'; // Redirect to home if already authenticated
        }
    }, []);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true); // Set authentication to true
        window.location.href = '/'; // Redirect to home page
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
        <div>
            {!isAuthenticated ? (
                <Login onLoginSuccess={handleLoginSuccess} />
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <h1 className="text-4xl font-bold">Redirecting to Home...</h1>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
