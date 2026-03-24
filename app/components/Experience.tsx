/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { motion } from "motion/react";
import Image from 'next/image';

interface ExperienceItem {
    logo: string;          // URL or imported image for company logo
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    tags: string[];
    link?: string;
}

// ── Sample data – replace with your real data or import from assets ──
const experienceData: ExperienceItem[] = [
    {
        logo: '/ccvi.png',
        title: 'Frontend Developer',
        company: 'CCVI',
        location: 'Phu Nhuan District, HCM City',
        period: '11/2025 - 03/2026',
        description: 'Designed responsive interfaces with NextJS for Eduhub.vn and built admin dashboard with Strapi CMS. Developed purchasing and inventory systems aligned with complex database structures.',

        tags: ['Typescript', 'React', '+3 more'],
        link: 'https://ubs.com',
    },
    {
        logo: '/amethyst.jpg',
        title: 'Web Developer',
        company: 'Amethyst',
        location: 'Binh Thanh District, HCM City',
        period: '08/2025 - 11/2025',
        description: 'Developed frontend features for UMIYA website using ReactJS and NextJS. Designed and integrated RESTful APIs with Java Spring Boot backend for seamless data communication.',

        tags: ['Java', 'TypeScript', '+4 more'],
        link: 'https://muze.ai',
    },
    {
        logo: '/internet.png',
        title: 'Freelance Web Developer',
        company: '',
        location: 'Ho Chi Minh City, Vietnam',
        period: '02/2025 - 04/2025',
        description: 'A web-based platform for managing online courses, featuring user authentication, role-based access (Admin/Student), course enrollment, and profile management.',
        tags: ['React', 'Java', 'MySQL', '+5 more'],
        link: 'https://builtdesign.in',
    },
];

interface ExperienceProps {
    isDarkMode?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='experience'
            className='w-full px-[12%] py-16 scroll-mt-20'
        >
            {/* Header */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center text-5xl font-bold dark:text-white'
            >
                Experience
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-4 mb-14 text-gray-500 dark:text-gray-400 text-base'
            >
                Professional journey and career timeline.
            </motion.p>

            {/* Cards List — single column, horizontal rows */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='flex flex-col gap-4'
            >
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        whileHover={{ y: -2 }}
                        className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
                                   rounded-2xl px-6 py-5 flex items-center gap-5 shadow-sm
                                   hover:shadow-md transition-shadow duration-300'
                    >
                        {/* Company Logo */}
                        <div className='w-16 h-16 rounded-xl border border-gray-200 dark:border-gray-700
                                        bg-gray-50 dark:bg-gray-800 flex items-center justify-center
                                        flex-shrink-0 overflow-hidden'>
                            {exp.logo ? (
                                <Image src={exp.logo} alt={exp.company} width={40} height={40} className='w-10 h-10 object-contain' />
                            ) : (
                                <svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                                </svg>
                            )}
                        </div>

                        {/* Main content */}
                        <div className='flex-1 min-w-0'>
                            {/* Row 1: Title + Period Badge */}
                            <div className='flex items-center gap-3 flex-wrap'>
                                <h3 className='text-lg font-bold text-gray-900 dark:text-white'>
                                    {exp.title}
                                </h3>
                                <span className='inline-block border border-gray-300 dark:border-gray-600
                                                 text-gray-600 dark:text-gray-300 text-xs font-medium
                                                 rounded-full px-3 py-1 whitespace-nowrap'>
                                    {exp.period}
                                </span>
                            </div>

                            {/* Row 2: Company + external link */}
                            <div className='flex items-center gap-1.5 mt-1'>
                                <span className='text-sm text-gray-600 dark:text-gray-400 font-medium'>
                                    {exp.company}
                                </span>
                                {exp.link && (
                                    <a
                                        href={exp.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors'
                                    >
                                        <svg xmlns='http://www.w3.org/2000/svg' className='w-3.5 h-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                                        </svg>
                                    </a>
                                )}
                            </div>

                            {/* Row 3: Location */}
                            <p className='text-sm text-gray-400 dark:text-gray-500 mt-0.5'>
                                {exp.location}
                            </p>

                            {/* Row 4: Description */}
                            <p className='text-sm text-gray-400 dark:text-gray-500 mt-2 leading-relaxed line-clamp-2'>
                                {exp.description}
                            </p>
                        </div>

                        {/* View Details Button — right side, vertically centered */}
                        <div className='flex-shrink-0'>
                            <button
                                onClick={() => exp.link && window.open(exp.link, '_blank')}
                                className='inline-flex items-center gap-1.5 border border-gray-300 dark:border-gray-600
                                           text-gray-700 dark:text-gray-300 text-sm font-medium
                                           px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800
                                           transition-colors duration-200 whitespace-nowrap'
                            >
                                View Details
                                <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Experience