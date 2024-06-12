"use client";

import React from 'react';
import { FaRegComment } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <div className='w-full m-auto md:w-[85%] py-8 px-4'>
            <h1 className='text-3xl font-bold text-center mb-8'>Testimonials</h1>

            <div className='flex justify-center items-center'>
                <FaRegComment className='text-6xl text-gray-800 mr-4' />
                <p className='text-lg text-gray-800'>No sufficient data available for testimonials at the moment. Check back later for updates!</p>
            </div>
        </div>
    );
}

export default Testimonials;
