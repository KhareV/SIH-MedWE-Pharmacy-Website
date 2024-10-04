'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DNA } from 'react-loader-spinner';
const BlogsAll = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        // Fetch the articles from the public folder
        fetch('/articles.json')
            .then((response) => response.json())
            .then((data) => {
                // Simulate loading time
                setTimeout(() => {
                    setArticles(data);
                    setLoading(false); // Set loading to false after the delay
                }, 1000); // 1 second delay to simulate loading time
            })
            .catch((error) => {
                console.error('Error fetching articles:', error);
                setLoading(false); // Stop loading even if there's an error
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl">
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperClass="dna-wrapper"
                    /></p> {/* Or use a spinner or skeleton loader */}
            </div>
        );
    }

    return (
        <div className="container mx-auto p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {articles.map((article) => (
                    <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <Image
                            src={article.image}  // Ensure this is a valid external URL
                            alt={article.title}
                            width={400}
                            height={250}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                            <p className="text-gray-700 mb-4">
                                {article.content.length > 100
                                    ? `${article.content.substring(0, 100)}...`
                                    : article.content}
                            </p>
                            <Link href={`/blogs/all/${article.id}`} className="relative inline-block">
                                <span className="bg-blue-500 text-white py-2 px-4 rounded inline-block transition-transform duration-300 transform hover:scale-110">Read More</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogsAll;
