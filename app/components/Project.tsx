import React from 'react'
import Image from 'next/image';
import { workData } from '@/assets/assets';
import { motion } from "motion/react";

interface ProjectProps {
    isDarkMode: boolean;
}

const Project: React.FC<ProjectProps> = ({}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='project'
            className='w-full px-[12%] py-16 scroll-mt-20'
        >
            {/* Header */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center text-5xl font-bold dark:text-white'
            >
                Projects
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-4 mb-14 text-gray-500 text-base'
            >
                Showcasing impactful projects and technical achievements.
            </motion.p>

            {/* Project Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            >
                {workData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        whileHover={{ y: -4 }}
                        className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
                                   rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 
                                   flex flex-col'
                    >
                        {/* Project Image */}
                        <div
                            className='w-full h-52 bg-no-repeat bg-cover bg-center'
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        />

                        {/* Card Content */}
                        <div className='p-5 flex flex-col gap-3 flex-1'>
                            {/* Title */}
                            <h3 className='text-xl font-bold text-gray-900 dark:text-white leading-snug'>
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className='text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed'>
                                {project.description}
                            </p>

                            {/* Tech Tags */}
                            {project.icon && project.icon.length > 0 && (
                                <div className='flex flex-wrap gap-2 mt-1'>
                                    {project.icon.map((icon, idx) => (
                                        <span
                                            key={idx}
                                            className='inline-flex items-center gap-1.5 border border-gray-300 dark:border-gray-600 
                                                       rounded-full px-3 py-1 text-xs text-gray-600 dark:text-gray-300'
                                        >
                                            <Image src={icon} alt='tech-icon' className='w-4 h-4' />
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Footer: Read more + User icon */}
                            <div className='flex items-center justify-between mt-auto pt-3'>
                                <button
                                    onClick={() => window.open(project.link, '_blank')}
                                    className='inline-flex items-center gap-2 bg-gray-900 dark:bg-white 
                                               text-white dark:text-gray-900 text-sm font-medium 
                                               px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-200'
                                >
                                    Read more
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-4 h-4'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                                    </svg>
                                </button>

                                {/* User avatar placeholder */}
                                <div className='w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center border border-gray-200 dark:border-gray-600'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-5 h-5 text-gray-400 dark:text-gray-500'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        strokeWidth={1.5}
                                    >
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* View All Button */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className='flex justify-center mt-12'
            >
                <button
                    onClick={() => window.open('https://github.com/Lochoang21?tab=repositories', '_blank')}
                    className='inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 
                               text-gray-700 dark:text-gray-300 text-sm font-medium 
                               px-6 py-2.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 
                               transition-colors duration-200'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 h-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                    View All
                </button>
            </motion.div>
        </motion.div>
    )
}

export default Project