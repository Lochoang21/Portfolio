/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { motion } from "motion/react";
import Image from 'next/image';

interface ExperienceItem {
    logo: string;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    tags: string[];
    link?: string;
}

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
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-center max-w-2xl mx-auto mb-8'
            >
                <h2 className='text-4xl font-bold text-[#111827] dark:text-white leading-tight tracking-tight mb-4'>
                    Work Experience
                </h2>
                <p className='text-sm text-[#9ca3af] leading-relaxed mb-6'>
                    Professional journey and career milestones over time.
                </p>
            </motion.div>

            {/* Left: Heading + stat */}
            <div className='flex flex-col lg:flex-row gap-10 lg:items-center lg:justify-center'>


                {/* Right: Timeline cards */}
                <div className='flex-1 flex flex-col gap-4'>
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.09 * index }}
                            whileHover={{ y: -4, transition: { duration: 0.22, type: 'spring', stiffness: 320 } }}
                            className='group relative bg-white dark:bg-[#111827] rounded-2xl px-6 py-5
                                       border border-[#d1d5db] dark:border-[#1f2937]
                                       hover:border-[#111827] dark:hover:border-[#d1d5db]
                                       hover:shadow-xl hover:shadow-[#111827]/8 dark:hover:shadow-black/30
                                       transition-all duration-300 overflow-hidden
                                       flex items-center gap-5'
                        >
                            {/* Hover overlay */}
                            <div className='absolute inset-0 bg-gradient-to-br from-[#111827]/[0.02] to-transparent
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                            {/* Index number */}
                            <span className='absolute top-4 right-5 text-[11px] font-bold
                                             text-[#d1d5db] dark:text-[#374151] tabular-nums z-10'>
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Logo */}
                            <div className='relative z-10 w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden
                                            bg-[#f9fafb] dark:bg-[#1f2937]
                                            border border-[#d1d5db] dark:border-[#374151]
                                            group-hover:border-[#9ca3af] transition-colors duration-300
                                            flex items-center justify-center'>
                                {exp.logo ? (
                                    <Image
                                        src={exp.logo}
                                        alt={exp.company}
                                        width={36}
                                        height={36}
                                        className='w-9 h-9 object-contain'
                                    />
                                ) : (
                                    <svg xmlns='http://www.w3.org/2000/svg'
                                        className='w-6 h-6 text-[#9ca3af]'
                                        fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5}
                                            d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                                    </svg>
                                )}
                            </div>

                            {/* Content */}
                            <div className='relative z-10 flex-1 min-w-0 pr-10'>
                                {/* Row 1: Title + Period */}
                                <div className='flex items-center gap-3 flex-wrap mb-1'>
                                    <h3 className='text-sm font-bold text-[#111827] dark:text-white tracking-tight'>
                                        {exp.title}
                                    </h3>
                                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full
                                                     text-[10px] font-semibold tracking-wider uppercase
                                                     bg-[#f3f4f6] dark:bg-[#1f2937]
                                                     border border-[#d1d5db] dark:border-[#374151]
                                                     text-[#9ca3af] whitespace-nowrap'>
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Row 2: Company + link */}
                                <div className='flex items-center gap-1.5 mb-0.5'>
                                    {exp.company && (
                                        <span className='text-xs font-semibold text-[#111827] dark:text-[#d1d5db]'>
                                            {exp.company}
                                        </span>
                                    )}
                                    {exp.link && (
                                        <a
                                            href={exp.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-[#9ca3af] hover:text-[#111827] dark:hover:text-[#d1d5db] transition-colors'
                                        >
                                            <svg xmlns='http://www.w3.org/2000/svg' className='w-3 h-3' fill='none'
                                                viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                                                <path strokeLinecap='round' strokeLinejoin='round'
                                                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                {/* Row 3: Location */}
                                <p className='text-[11px] text-[#9ca3af] mb-2 flex items-center gap-1'>
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-3 h-3' fill='none'
                                        viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                                        <path strokeLinecap='round' strokeLinejoin='round'
                                            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                    </svg>
                                    {exp.location}
                                </p>

                                {/* Row 4: Description */}
                                <p className='text-xs text-[#9ca3af] leading-relaxed line-clamp-2'>
                                    {exp.description}
                                </p>

                                {/* Row 5: Tags */}
                                <div className='flex flex-wrap gap-1.5 mt-3'>
                                    {exp.tags.map((tag, i) => (
                                        <span key={i}
                                            className='text-[10px] font-semibold px-2 py-0.5 rounded-md
                                                       bg-[#f3f4f6] dark:bg-[#1f2937]
                                                       border border-[#d1d5db] dark:border-[#374151]
                                                       text-[#111827] dark:text-[#d1d5db]'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* View Details — right side */}
                            <div className='relative z-10 flex-shrink-0 hidden sm:flex'>
                                <button
                                    onClick={() => exp.link && window.open(exp.link, '_blank')}
                                    className='group/btn inline-flex items-center gap-1.5
                                               border border-[#d1d5db] dark:border-[#374151]
                                               hover:border-[#111827] dark:hover:border-[#d1d5db]
                                               bg-transparent hover:bg-[#111827] dark:hover:bg-[#d1d5db]
                                               text-[#111827] dark:text-[#d1d5db]
                                               hover:text-white dark:hover:text-[#111827]
                                               text-xs font-semibold px-4 py-2 rounded-xl
                                               transition-all duration-250 whitespace-nowrap'
                                >
                                    View Details
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-3.5 h-3.5
                                         group-hover/btn:translate-x-0.5 transition-transform duration-200'
                                        fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Experience