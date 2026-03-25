import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 mt-20 ">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        
        {/* Logo */}
        <Image 
          src={assets.dark_logo} 
          alt="Logo" 
          className="w-22 mx-auto mb-4 transition duration-300"
        />

        {/* Email */}
        <div className="flex items-center justify-center gap-3 text-sm text-gray-500 hover:text-gray-800 transition">
          <Image src={assets.mail_icon} alt="Email icon" className="w-5" />
          <span className="tracking-wide">anashadfi1@gmail.com</span>
        </div>

      </div>

      {/* Divider */}
      <div className="w-[85%] mx-auto border-t border-gray-200"></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        
        <p className="text-gray-500">
          ©2026 Anas Hadfi. Built with NextJs
        </p>

        {/* Social Links */}
        <ul className="flex items-center gap-6">
          <li>
            <a 
              href="https://github.com/anashadfi1"
              target="_blank"
              className="hover:text-black transition duration-200 hover:underline underline-offset-4"
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/anas-hadfi/"
              target="_blank"
              className="hover:text-blue-600 transition duration-200 hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
          </li>
        </ul>

      </div>
    </footer>
  )
}

export default Footer