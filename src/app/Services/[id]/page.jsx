"use client";

import React from 'react';
import Services from "../../../../public/Services.json";
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const Service = () => {
  const pathname = usePathname();
  const params = useParams();
  const service = Services.find(service => service.id === parseInt(params.id));

  return (
    <div className='w-full m-auto md:w-[85%] py-8 px-4'>
      {service ? (
        <div className='flex flex-col md:flex-row items-center md:items-start'>
          <div className="main w-full md:w-2/3 p-4">
            <h1 className='text-3xl font-bold text-red-600 mb-4'>{service.name}</h1>
            <hr className="mb-4 border-blue-600"/>
            <p className="mb-4">
              <span className='text-2xl font-bold text-blue-600'>
                Description:
              </span>
              <br />
              <span className='text-xl text-gray-800'>
                {service.description}
              </span>
            </p>
            <hr className="mb-4 border-blue-600"/>
            <p className="mb-4">
              <span className='text-2xl font-bold text-blue-600'>
                Details:
              </span>
              <br />
              <span className='text-xl text-gray-800'>
                {service.details}
              </span>
            </p>
            <hr className="mb-4 border-blue-600"/>
            <span className='text-xl font-bold text-blue-600 mb-2 block'>
              Bullet Points:
            </span>
            <ul className='list-disc pl-5 mb-6 text-gray-800'>
              {service.points.map((line, index) => (
                <li className='text-md' key={index}>
                  {line}
                </li>
              ))}
            </ul>
            <button className='bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300'>
              Get Service
            </button>
          </div>
          <div className="image w-full md:w-1/3 flex justify-center items-center mt-8 md:mt-20 p-4">
            <Image
              src={`/${service.image}`}
              alt='Service Image'
              height={1100}
              width={1100}
              className='rounded-md shadow-md'
            />
          </div>
        </div>
      ) : (
        <p>Service not found</p>
      )}
    </div>
  );
}

export default Service;
