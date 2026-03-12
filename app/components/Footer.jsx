import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div >
        <div className='text-center'>
            <Image src={assets.dark_logo} alt='' className='w-25 mx-auto mb-2'/>
            <div className="flex items-center justify-center gap-4">
            <Image src={assets.mail_icon} alt="Email icon" className="w-5 " />
            <span>anashadfi1@gmail.com</span>
            </div>
            
        </div>
        <div className='text-center sm:flex items-center justify-between border-t
                        border-gray-400 mx-[10%] mt-12 py-6m'>
        
            <p>&copy; 2026 Anas Hadfi. Built with Nextjs </p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a href="https://github.com/anashadfi1">Github</a></li>
            <li><a href="https://www.linkedin.com/in/anas-hadfi/">Linkedin</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer