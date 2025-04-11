import React from 'react';
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Move37 Capital</h3>
          <p>Innovative investment strategies backed by data, experience, and trust.</p>
          <div className="mt-4 flex items-center space-x-4">
            <FaLinkedin className="text-white hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center"><FaEnvelope className="mr-2" /> support@move37capital.com</p>
          <p className="flex items-center mt-2"><FaPhone className="mr-2" /> +1 (212) 555-1234</p>
          <p className="mt-2">123 Wall Street, 45th Floor<br />New York, NY 10005</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
            <li><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-300">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center mt-10 text-xs text-gray-300">
        © {new Date().getFullYear()} Move37 Capital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
