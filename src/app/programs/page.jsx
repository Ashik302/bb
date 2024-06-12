"use client";

import React from 'react';
import Programs from "./../../../public/Program.json";
import Image from 'next/image';

const Program = () => {
  return (
    <div className='w-full m-auto md:w-[85%] py-8 px-4'>
      {Programs.length > 0 ? (
        Programs.map((program) => (
          <div key={program.id} className='mb-8'>
            <div className='flex flex-col md:flex-row items-center md:items-start'>
              <div className="main w-full md:w-2/3 p-4">
                <h1 className='text-3xl font-bold text-red-600 mb-4'>{program.name}</h1>
                <hr className="mb-4 border-blue-600"/>
                <p className="mb-4">
                  <span className='text-2xl font-bold text-blue-600'>
                    Description:
                  </span>
                  <br />
                  <span className='text-xl text-gray-800'>
                    {program.description}
                  </span>
                </p>
                <hr className="mb-4 border-blue-600"/>
                <p className="mb-4">
                  <span className='text-2xl font-bold text-blue-600'>
                    Duration:
                  </span>
                  <br />
                  <span className='text-xl text-gray-800'>
                    {program.details.duration}
                  </span>
                </p>
                <p className="mb-4">
                  <span className='text-2xl font-bold text-blue-600'>
                    Schedule:
                  </span>
                  <br />
                  <span className='text-xl text-gray-800'>
                    {program.details.schedule}
                  </span>
                </p>
                <hr className="mb-4 border-blue-600"/>
                <span className='text-xl font-bold text-blue-600 mb-2 block'>
                  Highlights:
                </span>
                <ul className='list-disc pl-5 mb-6 text-gray-800'>
                  {program.details.highlights.map((line, index) => (
                    <li className='text-md' key={index}>
                      {line}
                    </li>
                  ))}
                </ul>
                <button className='bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300'>
                  Enroll Now
                </button>
              </div>
              <div className="image w-full md:w-1/3 flex justify-center items-center mt-8 md:mt-20 p-4">
                <Image
                  src={`/${program.image}`}
                  alt='Program Image'
                  height={600}
                  width={600}
                  className='rounded-md shadow-md'
                />
              </div>
            </div>
            <br />
            <hr />
          </div>
        ))
      ) : (
        <p>No programs found</p>
      )}
    </div>
  );
}

export default Program;
