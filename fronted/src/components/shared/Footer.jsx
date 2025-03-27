import React from 'react'

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">JobFinder</h2>
          <p className="mt-3 text-gray-400">Connecting talent with opportunities worldwide.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Browse Jobs</a></li>
            <li><a href="#" className="hover:text-gray-400">Employers</a></li>
            <li><a href="#" className="hover:text-gray-400">Candidates</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-gray-400 mb-3">Subscribe to our newsletter for job updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-l-md text-white w-full"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600">Subscribe</button>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaInstagram size={24} /></a>
          </div>
        </div>

      </div>
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
