'use client'
import React from 'react'
import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import { toolsData } from '@/assets/assets'
import { motion } from "motion/react"
const About = () => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5, delay:0.3}}>Introduction</motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5, delay:0.5}}

        >About me</motion.h2>
    <motion.div className='flex w-full lf:flex-row items-center gap-20 my-20'
      initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}>
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
  
 
  <div className='w-64 sm:w-80 rounded-3xl max-w-none'
        initial={{opacity:0, scal:0.9}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}>
    <Image
      src={assets.user_image}
      alt="user"
      className='w-full rounded-3xl'
      priority
    />
  </div>

  <motion.div className='flex-1'
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6, delay:0.8}}>
    <p className='mb-10 max-w-2xl font-Ovo'>
     I work at the intersection of data, logic, and decision-making. My background in software engineering allows me to approach analytics with structure and precision.
     </p>

    <motion.ul 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8, delay:1}}
    className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
      {infoList.map(({ icon, title, description }, index) => (
        <motion.li
        whileHover={{scale:1.05}}
          key={index}
          className='border border-gray-400 rounded-xl p-6 cursor-pointer
                     hover:bg-lightHover hover:-translate-y-1 duration-500'
        >
          <Image src={icon} alt={title} className='w-7 mt-3' />
          <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
          <p className='text-gray-600 text-sm'>{description}</p>
        </motion.li>
      ))}
    </motion.ul>

    <motion.h4 className='my-6 text-gray-700 font-Ovo'
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:0.4, duration:0.3}}>Tools I use</motion.h4>

    <motion.ul className='flex gap-3'
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:0.4, duration:0.4}}>
      {toolsData.map((tool, index) => (
  <motion.li
    whileHover={{ scale: 1.1 }}
    key={index}
    className="relative flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-full cursor-pointer hover:-translate-y-1 duration-500 group"
  >
    <Image src={tool.icon} alt={tool.text} className="w-5 sm:w-7" />
    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-600 dark:text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {tool.text}
    </span>
  </motion.li>
))}
    </motion.ul>
  </motion.div>
</div>
        </motion.div>
    </motion.div>
  )
}

export default About