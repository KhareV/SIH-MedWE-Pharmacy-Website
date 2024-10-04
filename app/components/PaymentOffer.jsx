'use client';
import Link from 'next/link';
import React from 'react';

const PaymentOffer = () => {
    return (
        <div className="bg-customGray flex flex-col items-center p-6 mt-10">
            <div className="text-2xl font-semibold mb-6">
                Payment Offers
            </div>
            <div className="pb-5 flex items-center justify-between w-full overflow-x-auto">
                {/* PayTM Offer */}
                <div className="overflow-x-auto relative flex items-center justify-start bg-white p-4 rounded-lg shadow-md space-x-4 w-[380px] h-[200px] transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10">
                    <img src="/paytm.jpg" alt="PayTM Offer" className="w-24 h-24 object-contain rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110" />
                    <div>
                        <div className="text-xl font-semibold">
                            Get Upto Rs. 500 off on your first 3 transactions
                        </div>
                        <div className="text-sm text-gray-600">
                            Get PayTM cashback of upto Rs. 500 on a minimum purchase of Rs. 799
                        </div>
                    </div>
                </div>

                {/* PhonePe Offer */}
                <div className="overflow-x-auto relative flex items-center justify-start bg-white p-4 rounded-lg shadow-md space-x-4 w-[380px] h-[200px] transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10">
                    <img src="/phonepe.avif" alt="PhonePe Offer" className="w-24 h-24 object-contain rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110" />
                    <div>
                        <div className="text-xl font-semibold">
                            Get Upto Rs. 800 off on your first 2 transactions
                        </div>
                        <div className="text-sm text-gray-600">
                            Get PhonePe cashback of upto Rs. 800 on a minimum purchase of Rs. 1499 on credit cards
                        </div>
                    </div>
                </div>

                {/* SBI Offer */}
                <div className="overflow-x-auto relative flex items-center justify-start bg-white p-4 rounded-lg shadow-md space-x-4 w-[380px] h-[200px] transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10">
                    <img src="/sbi.jpg" alt="SBI Offer" className="w-24 h-24 object-contain rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110" />
                    <div>
                        <div className="text-xl font-semibold">
                            Get Upto Rs. 1500 off on credit card payments
                        </div>
                        <div className="text-sm text-gray-600">
                            Get cashback of upto Rs. 1599 on a minimum purchase of Rs. 2199 on credit cards
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentOffer;
