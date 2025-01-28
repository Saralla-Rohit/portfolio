import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-20 container mx-auto'
    initial={{opacity:0}}
    whileInView={{opacity:1}} transition={{duration:1}}>
      <motion.h4 initial={{opacity:0, y:-20}}
    whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:0.3}} className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2 initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:0.5}} className='text-center text-4xl sm:text-5xl font-Ovo'>About me</motion.h2>
      <motion.div initial={{opacity:0}}
    whileInView={{opacity:1}} transition={{duration:0.8}} className='flex w-full flex-col lg:flex-row items-center justify-center gap-10 sm:gap-20 my-10 sm:my-20'>
        <motion.div 
        initial={{opacity:0,scale:-0.9}}
        whileInView={{opacity:1,scale:1}} transition={{duration:0.6}} 
        className='w-48 sm:w-64 md:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} style={{height:'auto'}} alt="user" className='w-full rounded-3xl'/>
        </motion.div>
        <motion.div initial={{opacity:0}}
    whileInView={{opacity:1}} transition={{duration:0.6,delay:0.8}} 
     className='flex-1 px-0 sm:px-4 w-full max-w-3xl mx-auto'>
            <p className='mb-6 sm:mb-10 max-w-21 font-Ovo text-sm sm:text-base'>I specialize in full-stack web development using the MERN stack, creating problem solving web application,Integrating UI design with back-end development.</p>
            <motion.ul
            initial={{opacity:0}}
            whileInView={{opacity:1}} transition={{duration:0.8,delay:1}} 
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl'>
            {infoList.map(({icon,iconDark,title,description},index)=>(
                    <motion.li whileHover={{scale:1.05}} className='border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6 sm:w-7 mt-2 sm:mt-3'/>
                        <h3 className='my-3 sm:my-4 font-semibold text-sm sm:text-base text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-xs sm:text-sm text-gray-600 dark:text-white/80'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>
            <motion.h4 initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:1.3}} 
     className='my-6 sm:my-8 text-gray-700 font-Ovo dark:text-white/80'>
                Tools I use
            </motion.h4>
            <motion.ul initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.5,duration:0.6}} className='flex items-center gap-3 sm:gap-5 '>
                {toolsData.map((tool,index)=>(
                    <motion.li
                    whileHover={{scale:1.1}}
                    className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
