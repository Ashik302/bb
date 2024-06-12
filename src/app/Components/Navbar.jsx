"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCoursesMenu = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 top-0 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/logo.png"
                height={20}
                width={100}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" passHref>
                <span className="text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</span>
              </Link>
              <div className="relative">
                <span onClick={toggleCoursesMenu} className="text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Courses</span>
                {isCoursesOpen && (
                  <div className="absolute mt-2 py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <Link href="/Courses/1" passHref>
                      <span className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white cursor-pointer">Japanese</span>
                    </Link>
                    <Link href="/Courses/2" passHref>
                      <span className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white cursor-pointer">Korean</span>
                    </Link>
                    <Link href="/Courses/3" passHref>
                      <span className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white cursor-pointer">PTE</span>
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <span onClick={toggleServicesMenu} className="text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Services</span>
                {isServicesOpen && (
                  <div className="absolute mt-2 py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <Link href="/Services/1" passHref>
                      <span className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white cursor-pointer">Visa Application Assistance</span>
                    </Link>
                    <Link href="/Services/2" passHref>
                      <span className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white cursor-pointer">Translation Services</span>
                    </Link>
                    <Link href="/Services/3" passHref>
                      <span className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white cursor-pointer">Cultural Exchange Programs</span>
                    </Link>
                    <Link href="/Services/4" passHref>
                      <span className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white cursor-pointer">Accommodation Assistance</span>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/programs" passHref>
                <span className="text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Programs</span>
              </Link>
              <Link href="/testimonials" passHref>
                <span className="text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Testimonials</span>
              </Link>
              <Link href="/contact" passHref>
                <span className="text-gray-800 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact us</span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={toggleMenu} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" passHref>
              <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Home</span>
            </Link>
            <div>
              <span onClick={toggleCoursesMenu} className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Courses</span>
              {isCoursesOpen && (
                <div className="ml-4">
                  <Link href="/Courses/1" passHref>
                    <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Japanese</span>
                  </Link>
                  <Link href="/Courses/2" passHref>
                    <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Korean</span>
                  </Link>
                  <Link href="/Courses/3" passHref>
                    <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">PTE</span>
                  </Link>
                </div>
              )}
            </div>
            <div>
              <span onClick={toggleServicesMenu} className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Services</span>
              {isServicesOpen && (
                <div className="ml-4">
                  <Link href="/Services/1" passHref>
                    <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Visa Application Assistance</span>
                  </Link>
                  <Link href="/Services/2" passHref>
                    <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Translation Services</span>
                  </Link>
                  <Link href="/Services/3" passHref>
                    <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Cultural Exchange Programs</span>
                  </Link>
                  <Link href="/Services/4" passHref>
                    <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Accommodation Assistance</span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/programs" passHref>
              <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Programs</span>
            </Link>
            <Link href="/testimonials" passHref>
              <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Testimonials</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="text-gray-800 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Contact us</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
