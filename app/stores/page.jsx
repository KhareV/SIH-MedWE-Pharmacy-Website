'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DNA } from 'react-loader-spinner';

const StoresPage = () => {
    const [location, setLocation] = useState(null);
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState('');

    useEffect(() => {
        // Function to get the user's location
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLocation({
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        });
                    },
                    (err) => {
                        setError('Unable to retrieve your location');
                        setLoading(false); // Stop loading on error
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser');
                setLoading(false); // Stop loading on error
            }
        };

        getLocation();
    }, []);

    useEffect(() => {
        if (location) {
            // Fetch nearby hospitals and pharmacies using Overpass API
            const fetchStores = async () => {
                try {
                    const { lat, lon } = location;
                    const radius = 5000; // 5 km radius

                    // Construct the Overpass API query to fetch hospitals and pharmacies only
                    const response = await axios.get(
                        `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"~"hospital|pharmacy"](around:${radius},${lat},${lon});out qt;`
                    );

                    // Extract coordinates for each store and filter out unnamed stores
                    const storesWithCoords = response.data.elements
                        .map((store) => ({
                            lat: store.lat,
                            lon: store.lon,
                            name: store.tags.name || 'Unnamed Store',
                            type: store.tags.amenity || 'unknown'
                        }))
                        .filter((store) => store.name !== 'Unnamed Store'); // Exclude unnamed stores

                    setStores(storesWithCoords);
                    setLoading(false); // Stop loading after data is fetched
                } catch (err) {
                    setError('Error fetching stores');
                    console.error('Error fetching stores:', err);
                    setLoading(false); // Stop loading on error
                }
            };

            fetchStores();
        }
    }, [location]);

    return (
        <div className="stores-page p-4">
            <h1 className="text-2xl font-bold mb-4">Nearby Hospitals and Pharmacies</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {loading ? (
                <div className="flex justify-center items-center">
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperClass="dna-wrapper"
                    />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stores.length > 0 ? (
                        stores.map((store, index) => {
                            // Determine image URL based on store type
                            const imageUrl = store.type === 'hospital'
                                ? '/hospital.jpg'
                                : store.type === 'pharmacy'
                                    ? '/pharmacy.jpg'
                                    : '/placeholder.jpg'; // Default placeholder image

                            return (
                                <a
                                    key={index}
                                    href={`https://www.google.com/maps?q=${store.lat},${store.lon}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card p-4 border border-gray-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                                >
                                    <img
                                        src={imageUrl}
                                        alt={store.name}
                                        className="w-full h-32 object-cover mb-4 rounded"
                                    />
                                    <h2 className="text-xl font-semibold mb-2">{store.name}</h2>
                                    <p className="text-gray-700">
                                        Coordinates: {store.lat}, {store.lon}
                                    </p>
                                </a>
                            );
                        })
                    ) : (
                        <p>No hospitals or pharmacies found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default StoresPage;
