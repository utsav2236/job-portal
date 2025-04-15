import React from 'react'

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-96">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">Job Portal</h2>
          <p className="mt-3 text-gray-400">Connecting talent with opportunities worldwide.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/browse" className="hover:text-gray-400">Browse Jobs</a></li>
            <li><a href="/jobs" className="hover:text-gray-400">See all Jobs</a></li>
          </ul>
        </div>
      </div>

      <div>
          <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
            &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
          </div>
          <div>
            <div className='flex justify-center'>
                <div className="flex space-x-4 mt-4">
                    <a href="https://www.facebook.com/share/16REkCLutH/" className="text-gray-400 hover:text-blue-400"><FaFacebook size={24} /></a>
                    <a href=" https://x.com/Utsav2236e?t=it0LilR1UfKRniMtqeCzPQ&s=08 " className="text-gray-400 hover:text-blue-400"><FaTwitter size={24} /></a>
                    <a href="https://www.linkedin.com/in/utsav-prajapati-611485267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-blue-400"><FaLinkedin size={24} /></a>
                    <a href="https://www.instagram.com/utsav_2236e?igsh=em1jaGNtbTN0aG1y" className="text-gray-400 hover:text-blue-400"><FaInstagram size={24} /></a>
                </div>
            </div>
          
        </div>

      </div>
      
    </footer>
  );
};

export default Footer;
