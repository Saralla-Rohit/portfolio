import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
const Footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={ isDarkMode?assets.logo_dark: assets.logo} alt='' className='w-36 mx-auto mb-2 ' />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={ isDarkMode?assets.mail_icon_dark: assets.mail_icon} alt='' className='w-6' />rohitsarla69@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6' >
                <p>@ 2025 Saralla Rohit. All Rights reserved</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a target="_blank" href="https://github.com/Saralla-Rohit"> Github</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/rohit-saralla/"> Linkedin</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://leetcode.com/u/Rosh-callMeE6/"> Leetcode</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer