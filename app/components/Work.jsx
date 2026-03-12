'use client'
import { workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'
const Work = () => {
  return (
    <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8, delay:1}}>
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{y:20, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.3, duration:0.5}}>Work</motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{y:20, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.5, duration:0.5}}>My projects</motion.h2>
        <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.7, duration:0.5}}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        </motion.p>
        <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'
        initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.9, duration:0.6}}
            >
            {
                workData.map((project, index) => (
                    <a
                    key={index}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                            -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500
                            group-hover:bottom-7">

                        <div>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>

                        <div className="border rounded-full border-black w-9 aspect-square 
                            flex items-center justify-center shadow-[2px_2px_0_#000] 
                            group-hover:bg_lime-300 transition">

                            <Image src={assets.send_icon} alt="send-icon" className="w-5" />

                        </div>

                        </div>
                    </motion.div>
                    </a>
                ))
                }
                
        </motion.div>
        <a
                    href=""
                    className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] 
                    border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
                    >
                    Show more
                    <Image
                        src={assets.right_arrow_bold}
                        alt="Right arrow"
                        className="w-4"
                    />
                </a>
    </motion.div>
  )
}

export default Work