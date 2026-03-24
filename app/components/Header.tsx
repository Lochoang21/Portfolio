import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react";

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt='' className=' w-36 h-62 rounded-[30px]' />
            </motion.div>

            {/* Greeting — DM Sans, nhẹ như nav links */}
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-sans font-normal tracking-[0.01em] text-[#555] dark:text-[#aaa]'
            >
                Hi! I am Hoang Bao Loc
                <Image src={assets.hand_icon} alt='' className='w-6' />
            </motion.h3>

            {/* Main title — Playfair Display Italic, giống logo Navbar */}
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-6xl lg:text-[66px] font-semibold tracking-[-0.01em] text-[#111] dark:text-[#f5f5f5]"
            >
                Web development.
            </motion.h1>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                {/* Contact button */}
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact"
                    className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 font-sans font-normal text-sm tracking-[0.01em] dark:bg-transparent'
                >
                    Contact me
                    <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.a>

                {/* Resume button */}
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="/My_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white font-sans font-normal text-sm tracking-[0.01em] text-[#555] hover:text-[#111] transition-colors duration-200 dark:text-black'
                >
                    My resume
                    <Image src={assets.download_icon} alt='' className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default Header