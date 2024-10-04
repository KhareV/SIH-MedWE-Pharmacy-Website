'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // useRouter for client-side navigation
import Image from 'next/image';
import { DNA } from 'react-loader-spinner';
const ArticlePage = ({ params: { id } }) => {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true); // Track the loading state
    const router = useRouter(); // To handle navigation or redirection if needed

    useEffect(() => {
        // Fetch the article data based on the id from the URL
        fetch('/articles.json')
            .then((response) => response.json())
            .then((data) => {
                const foundArticle = data.find((article) => article.id === parseInt(id));
                if (foundArticle) {
                    // Simulate loading time
                    setTimeout(() => {
                        setArticle(foundArticle);
                        setLoading(false); // Set loading to false after loading time
                    }, 1000); // 1 second delay to simulate loading time
                } else {
                    router.push('/404'); // Redirect to a 404 page if the article is not found
                }
            })
            .catch((error) => {
                console.error('Error fetching article:', error);
                router.push('/404'); // Redirect to a 404 page in case of an error
            });
    }, [id, router]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl">
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperClass="dna-wrapper"
                    /></p> {/* Or a spinner or skeleton loader */}
            </div>
        );
    }

    return (
        <div className="container mx-auto p-9">
            {/* Article Container with Gray Background and Large Shadow */}
            <div className="bg-gray-300 shadow-2xl rounded-lg overflow-hidden">
                {/* Image at the Top */}
                <div className="relative">
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={1200}
                        height={600}
                        className="w-full h-60 object-cover"
                    />
                </div>
                {/* Article Content */}
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
                    <p className="text-gray-700">{article.content}</p>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
