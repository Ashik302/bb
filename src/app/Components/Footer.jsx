import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaHome, FaBook, FaClipboardList, FaAddressBook, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                        <p className="flex items-center mb-2">
                            <FaMapMarkerAlt className="mr-2" /> Head Office: Amarapuri (Opposite of Laxmi Ma. Vi)
                        </p>
                        <p className="flex items-center mb-2">
                            <FaMapMarkerAlt className="mr-2" /> Branch Office: Daldale (Near to Garima Bikash Bank)
                        </p>
                        <p className="flex items-center mb-2">
                            <FaPhoneAlt className="mr-2" /> 078-417056
                        </p>
                        <p className="flex items-center mb-2">
                            <FaEnvelope className="mr-2" /> mailtobornbright@gmail.com
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex items-center mb-2">
                            <FaFacebook className="mr-2" />
                            <a href="https://www.facebook.com/bornbrightamamarapuri" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2 flex items-center">
                                <FaHome className="mr-2" />
                                <Link href="/" className="hover:text-blue-400">Home</Link>
                            </li>
                            <li className="mb-2 flex items-center">
                                <FaClipboardList className="mr-2" />
                                <Link href="/programs" className="hover:text-blue-400">Programs</Link>
                            </li>
                            <li className="mb-2 flex items-center">
                                <FaAddressBook className="mr-2" />
                                <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; 2024 BornBright. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
