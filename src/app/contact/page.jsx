"use client";

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send the data to an API or email service
        console.log(formData);
    };

    return (
        <div className='w-full m-auto md:w-[85%] py-8 px-4'>
            <h1 className='text-3xl font-bold text-center mb-8'>Contact Us</h1>

            <div className='flex flex-col md:flex-row justify-around items-start'>
                <div className='mb-8 md:mb-0'>
                    <h2 className='text-2xl font-bold mb-4'>Head Office</h2>
                    <p className='flex items-center mb-2'><FaMapMarkerAlt className='mr-2' />Amarapuri (Opposite of Laxmi Ma. Vi)</p>
                    <p className='flex items-center mb-4'><FaPhoneAlt className='mr-2' />078-417056</p>

                    <h2 className='text-2xl font-bold mb-4'>Branch Office</h2>
                    <p className='flex items-center mb-2'><FaMapMarkerAlt className='mr-2' />Daldale (Near to Garima Bikash Bank)</p>

                    <h2 className='text-2xl font-bold mb-4'>Email Us</h2>
                    <p className='flex items-center mb-4'><FaEnvelope className='mr-2' />mailtobornbright@gmail.com</p>
                </div>

                <div className='w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-bold mb-4'>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Name</label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>Message</label>
                            <textarea
                                name='message'
                                id='message'
                                value={formData.message}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                                rows='5'
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
