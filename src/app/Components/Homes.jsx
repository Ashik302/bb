"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white w-full md:w-[85%] m-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <div className="flex flex-col items-center md:items-start md:w-2/3 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
                            Welcome to
                            <br />
                            <span className="text-4xl font-bold text-blue-600">Born</span>
                            <span className="text-4xl font-bold text-red-600">Bright</span>
                        </h1>
                        <p className="text-xl text-gray-800 text-center md:text-left">
                            Your destination for learning Japanese, applying for visas, and much more!
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center items-center">
                        <Image
                            src="/br.jpg"
                            alt="Bornbright Logo"
                            height={200}
                            width={400}
                            className="rounded-md shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Example course cards */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Japanese Language</h3>
                            <p>Start learning Japanese today with our comprehensive courses.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Korean Language</h3>
                            <p>Master the Korean language with our expert instructors.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">PTE Classes</h3>
                            <p>Prepare for your PTE exams with our intensive classes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Our Successes in Past Month</h1>
                    <Image
                        src="/ach.jpg"
                        alt="Achievements"
                        height={400}
                        width={500}
                        className="mx-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
