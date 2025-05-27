import React from 'react'
import Image from 'next/image';
import { assets, infoList, toolsData, techData } from '@/assets/assets';
import { motion } from "motion/react"

interface AboutProps {
    isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center mb-2 text-5xl font-Ovo'>About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className=' '>

                    <p className=' mb-10 max-w-2xl font-Ovo'>
                        I am student at the Sai Gon University of Information Technology,
                        majoring in Software Engineering.
                        I am passionate about web development and have experience in backend development.
                        I am a person who is always eager to learn new things and improve myself.
                        I am also a person who is always ready to help others and share my knowledge with them.
                    </p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                            hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                            dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    
                </motion.div>
            </motion.div>
            {/* Tools Section - Redesigned */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className='mt-12 mb-8'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full'></div>
                            <h4 className='text-xl font-semibold text-gray-800 dark:text-white font-Ovo'>
                                Development Tools
                            </h4>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            className='bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 w-fit'>
                            <div className='flex items-center gap-4'>
                                {toolsData.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                                        whileHover={{ 
                                            scale: 1.15, 
                                            rotate: 5,
                                            transition: { duration: 0.2 }
                                        }}
                                        className='group relative'>
                                        <div className='flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-700 
                                                      rounded-2xl shadow-lg hover:shadow-xl cursor-pointer 
                                                      border border-gray-200 dark:border-gray-600
                                                      transition-all duration-300 group-hover:border-blue-400 dark:group-hover:border-blue-500'>
                                            <Image src={tool} alt='Tool' className='w-12 h-12 object-contain rounded-xl' />
                                        </div>
                                        {/* Tooltip effect */}
                                        <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 
                                                      bg-gray-800 text-white text-xs px-2 py-1 rounded-md 
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                                      whitespace-nowrap z-10'>
                                            Tool #{index + 1}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Tech Stack Section - Redesigned */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 }}
                        className='mb-8'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-1 h-6 bg-gradient-to-b from-green-500 to-teal-600 rounded-full'></div>
                            <h4 className='text-xl font-semibold text-gray-800 dark:text-white font-Ovo'>
                                Technology Stack
                            </h4>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                            className='bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 
                                     rounded-2xl p-6 border border-gray-200 dark:border-gray-700 w-fit'>
                            <div className='flex items-center gap-4'>
                                {techData.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 1.6 + index * 0.08 }}
                                        whileHover={{ 
                                            scale: 1.2, 
                                            y: -8,
                                            transition: { duration: 0.2 }
                                        }}
                                        className='group relative'>
                                        <div className='flex items-center justify-center w-16 h-16 
                                                      bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-2xl 
                                                      cursor-pointer border border-gray-200 dark:border-gray-600
                                                      transition-all duration-300 group-hover:border-green-400 dark:group-hover:border-green-500
                                                      group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-green-50
                                                      dark:group-hover:from-gray-700 dark:group-hover:to-green-900/20'>
                                            <Image src={tech} alt='Technology' className='w-12 h-12 object-contain' />
                                        </div>
                                        {/* Glow effect */}
                                        <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-teal-400/20 
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm'></div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
        </motion.div>
    )
}

export default About