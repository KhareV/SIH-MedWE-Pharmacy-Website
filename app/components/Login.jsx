'use client';
import React, { useState } from 'react';
import ids from '../../public/ids.json'; // Importing the ids.json file
import { DNA } from 'react-loader-spinner';
const Login = ({ onLoginSuccess }) => {
    const [isAdmin, setIsAdmin] = useState(true); // Toggle between Admin and Customer
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        // Simulate a delay for loading
        setTimeout(() => {
            // Check if the email and password match any user in ids.json
            const user = ids.users.find(user => user.email === email && user.password === password);

            if (user) {
                onLoginSuccess(); // Notify the parent component that login was successful
            } else {
                setErrorMessage('Invalid email or password');
            }

            setLoading(false); // End loading
        }, 1000); // Simulate a 1-second loading time
    };

    return (
        <div className="relative flex h-screen items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{ backgroundImage: 'url("/login.jpg")' }}></div>
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Main Login Container */}
            <div className="relative flex bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform duration-700 ease-in-out">
                {/* Left side: Login Form */}
                <div
                    className={`p-10 w-96 flex flex-col justify-center bg-white rounded-l-2xl shadow-2xl transform transition-transform duration-700 ease-in-out ${isAdmin ? 'translate-x-0' : 'translate-x-full'}`} // Move right when switching to customer
                >
                    <div className="flex justify-between mb-6 space-x-4"> {/* Reduced space between tabs */}
                        <span
                            className={`cursor-pointer transition-all duration-300 ease-in ${isAdmin ? 'text-red-600 text-2xl font-bold' : 'text-gray-400 text-lg hover:text-xl hover:font-semibold'}`}
                            onClick={() => setIsAdmin(true)}
                        >
                            Admin
                        </span>
                        <span
                            className={`cursor-pointer transition-all duration-300 ease-in ${!isAdmin ? 'text-blue-600 text-2xl font-bold' : 'text-gray-400 text-lg hover:text-xl hover:font-semibold'}`}
                            onClick={() => setIsAdmin(false)}
                        >
                            Customer
                        </span>
                    </div>

                    <h2 className="text-2xl font-semibold text-center mb-6">Log In To your Account</h2>

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail or Number"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                required
                            />
                            <div className="flex items-center mt-2">
                                <input
                                    type="checkbox"
                                    id="show-password"
                                    checked={showPassword}
                                    onChange={() => setShowPassword(!showPassword)}
                                    className="mr-2"
                                />
                                <label htmlFor="show-password" className="text-gray-600">Show Password</label>
                            </div>
                        </div>
                        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                        {loading ? (
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-6 h-6 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin">
                                    <DNA
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="dna-loading"
                                        wrapperClass="dna-wrapper"
                                    />
                                </div>
                            </div>
                        ) : (
                            <button type="submit" className="w-full p-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">
                                LOG IN
                            </button>
                        )}
                        <div className="text-center mt-4">
                            <a href="#" className="text-gray-500 transition-colors duration-300 ease-in hover:text-gray-700">Forgot Password?</a>
                        </div>
                    </form>
                </div>

                {/* Right side: Branding */}
                <div
                    className={`p-10 w-96 flex flex-col items-center justify-center bg-white rounded-r-2xl shadow-2xl transform transition-transform duration-700 ease-in-out ${isAdmin ? 'translate-x-0' : '-translate-x-full'}`} // Move left when switching to customer
                >
                    <img src="/logo.png" alt="MedWe Logo" className="h-16 mb-4 opacity-90 transition-opacity duration-700" />
                    <h1 className="text-3xl font-bold mb-2">MedWe</h1>
                    <p className="text-xl text-gray-600">Your Health, Our Priority</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
