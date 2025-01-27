import React from 'react'
import { workData, assets } from '@/assets/assets'
import Image from 'next/image'
import {motion} from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} id='work' className='w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-20'>
      <motion.h4 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.3, duration:0.5}} className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>
      <motion.h2 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.5, duration:0.5}} className='text-center text-4xl sm:text-5xl font-Ovo'>My latest work</motion.h2>
      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.7, duration:0.5}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo px-4'>
        welcome to my web dev portfolio! explore a collection of projects showcasing my expertise in Full Stack development
      </motion.p>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.9, duration:0.6}} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 dark:text-black'>
        {workData.map((project, index) => (
          <a href={project.link} key={index}>
            <motion.div whileHover={{scale:1.05}} transition={{duration:0.3}} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${project.bgImage})` }}>
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 sm:px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold text-sm sm:text-base'>{project.title}</h2>
                  <p className='text-xs sm:text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-7 sm:w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image src={assets.send_icon} alt='send icon' className='w-4 sm:w-5' />
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>
      <motion.a 
        href="https://github.com/Saralla-Rohit" 
        target="_blank"
        rel="noopener noreferrer"
        initial={{opacity:0}} 
        whileInView={{opacity:1}} 
        transition={{delay:1.1, duration:0.5}} 
        className='mx-auto w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-8 sm:px-10 py-2.5 sm:py-3 hover:bg-gray-100 dark:text-white dark:border-white dark:hover:bg-darkHover text-sm sm:text-base'
      >
        View All Projects
        <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt='arrow right' className='w-4 sm:w-5' />
      </motion.a>
    </motion.div>
  )
}

export default Work
