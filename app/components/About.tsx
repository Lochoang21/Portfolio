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
                    <Image src={assets.myImage} alt='user' className='w-full rounded-3xl' />
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
            {/* Development Tools Section - Fixed Center Layout */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mt-16 mb-12'>

                {/* Section Header */}
                <div className='text-center mb-12'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 
                     dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full border border-blue-200 
                     dark:border-blue-800 mb-4'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                        <span className='text-blue-700 dark:text-blue-300 font-medium text-sm tracking-wide'>
                            DEVELOPMENT TOOLS
                        </span>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-Ovo'>
                        Tools I Work With
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-gray-600 dark:text-gray-300 mt-3 max-w-md mx-auto'>
                        Professional development tools that power my workflow
                    </motion.p>
                </div>

                {/* Tools Grid - Fixed for Center Alignment */}
                <div className='flex justify-center'>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl'>
                        {toolsData.map((tool, index) => {
                            const toolNames = ['VS Code', 'IntelliJ', 'Postman', 'Git'];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3, type: "spring", stiffness: 300 }
                                    }}
                                    className='group'>
                                    <div className='relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg 
                                      hover:shadow-2xl border border-gray-100 dark:border-gray-700
                                      transition-all duration-300 group-hover:border-blue-300 
                                      dark:group-hover:border-blue-600 overflow-hidden'>

                                        {/* Background gradient effect */}
                                        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 
                                          dark:from-blue-900/10 dark:to-indigo-900/10 opacity-0 
                                          group-hover:opacity-100 transition-opacity duration-300'></div>

                                        {/* Tool Icon */}
                                        <div className='relative flex items-center justify-center w-16 h-16 mx-auto mb-3'>
                                            <div className='absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 
                                              dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl opacity-0 
                                              group-hover:opacity-100 transition-opacity duration-300'></div>
                                            <Image src={tool} alt='Development Tool' className='w-12 h-12 object-contain relative z-10' />
                                        </div>

                                        {/* Tool Name */}
                                        <div className='text-center'>
                                            <span className='text-sm font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                                {toolNames[index]}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* Technology Stack Section - Professional Design */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='mb-16'>

                {/* Section Header */}
                <div className='text-center mb-12'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 
                                 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-full border border-emerald-200 
                                 dark:border-emerald-800 mb-4'>
                        <div className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></div>
                        <span className='text-emerald-700 dark:text-emerald-300 font-medium text-sm tracking-wide'>
                            TECHNOLOGY STACK
                        </span>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-Ovo'>
                        Technical Expertise
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-gray-600 dark:text-gray-300 mt-3 max-w-md mx-auto'>
                        Technologies and frameworks I&apos;m proficient in
                    </motion.p>
                </div>

                {/* Tech Stack Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto'>
                    {techData.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.08 }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3, type: "spring", stiffness: 300 }
                            }}
                            className='group'>
                            <div className='relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg 
                                          hover:shadow-2xl border border-gray-100 dark:border-gray-700
                                          transition-all duration-300 group-hover:border-emerald-300 
                                          dark:group-hover:border-emerald-600 overflow-hidden'>
                                {/* Background gradient effect */}
                                <div className='absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 
                                              dark:from-emerald-900/10 dark:to-teal-900/10 opacity-0 
                                              group-hover:opacity-100 transition-opacity duration-300'></div>
                                {/* Tech Icon */}
                                <div className='relative flex items-center justify-center w-16 h-16 mx-auto mb-3'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 
                                                  dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl opacity-0 
                                                  group-hover:opacity-100 transition-opacity duration-300'></div>
                                    <Image src={tech.icon} alt={tech.name} className='w-12 h-12 object-contain relative z-10' />
                                </div>
                                {/* Tech Name Placeholder */}
                                <div className='text-center'>
                                    <div className='w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto opacity-60'></div>
                                </div>
                                {/* Skill Level Indicator */}
                                <div className='flex gap-1 justify-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < tech.level
                                            ? 'bg-emerald-400'
                                            : 'bg-gray-300 dark:bg-gray-600'
                                            }`}></div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default About