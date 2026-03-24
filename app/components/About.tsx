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
            id='about'
            className='w-full px-[12%] scroll-mt-20'
        >
            {/* ── Section heading ── */}
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-sans font-normal tracking-[0.01em] text-[#555] dark:text-[#aaa]'
            >
                Introduction
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mb-2 text-5xl font-semibold tracking-[-0.01em] text-[#111] dark:text-[#f5f5f5]"
            >
                About me
            </motion.h2>

            {/* ── Profile + Bio ── */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'
                >
                    <Image src={assets.myImage} alt='user' className='w-full rounded-3xl' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className='mb-10 max-w-2xl font-sans font-normal text-sm leading-relaxed tracking-[0.01em] text-[#555] dark:text-[#aaa]'>
                        A motivated Software Engineering graduate with over 6 months of hands-on experience
                        in fullstack web development. Experienced in building web applications using Java
                        Spring Boot and ReactJS, with a solid foundation in MySQL and PostgreSQL. Eager to
                        apply my technical and problem-solving skills to develop effective web solutions and
                        grow within a professional team.
                    </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                    >
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                key={index}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                                    hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                                    dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-sans font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='font-sans text-gray-600 text-sm dark:text-white'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>

            {/* ══════════════════════════════════════════
                TOOLS I WORK WITH
            ══════════════════════════════════════════ */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mt-16 mb-20'
            >
                {/* Header */}
                <div className='text-center mb-10'>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl sm:text-5xl font-bold text-[#0f172a] dark:text-white mb-3"
                    >
                        Tools I Work With
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='font-sans font-normal text-sm text-[#64748b] dark:text-[#94a3b8]'
                    >
                        Professional development tools that power my workflow.
                    </motion.p>
                </div>

                {/* Cards grid */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto'>
                        {toolsData.map((tool, index) => {
                            const toolMeta = [
                                { name: 'VS Code', desc: 'Lightweight, powerful editor for modern web development with rich extension support.', stars: 5 },
                                { name: 'IntelliJ', desc: 'Smart Java IDE with advanced refactoring, debugging, and Spring Boot integration.', stars: 4 },
                                { name: 'Postman', desc: 'Test and document REST APIs quickly with an intuitive request-building interface.', stars: 5 },
                                { name: 'Git', desc: 'Track changes, collaborate, and manage code history across every project.', stars: 5 },
                            ];
                            const meta = toolMeta[index] ?? { name: `Tool ${index + 1}`, desc: '', stars: 3 };

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    whileHover={{ y: -4, transition: { duration: 0.25, type: 'spring', stiffness: 300 } }}
                                    className='bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#334155]
                                               hover:shadow-lg transition-shadow duration-300 flex flex-col gap-3'
                                >
                                    {/* Icon */}
                                    <div className='w-12 h-12 flex items-center justify-center'>
                                        <Image src={tool} alt={meta.name} className='w-10 h-10 object-contain' />
                                    </div>

                                    {/* Name */}
                                    <h3 className='font-sans font-bold text-[#0f172a] dark:text-white text-base'>
                                        {meta.name}
                                    </h3>

                                    {/* Description */}
                                    <p className='font-sans text-[#64748b] dark:text-[#94a3b8] text-sm leading-relaxed flex-1'>
                                        {meta.desc}
                                    </p>

                                    {/* Stars */}
                                    <div className='flex gap-1 mt-1'>
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24"
                                                fill={i < meta.stars ? '#eab308' : '#e2e8f0'}
                                                className="dark:[&>path]:fill-current"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* ══════════════════════════════════════════
                TECHNICAL EXPERTISE
            ══════════════════════════════════════════ */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='mb-16'
            >
                {/* Header */}
                <div className='text-center mb-10'>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl sm:text-5xl font-bold text-[#0f172a] dark:text-white mb-3"
                    >
                        Technical Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='font-sans font-normal text-sm text-[#64748b] dark:text-[#94a3b8]'
                    >
                        Key skills that define my professional identity.
                    </motion.p>
                </div>

                {/* Cards grid */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto'>
                        {techData.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.08 * index }}
                                whileHover={{ y: -4, transition: { duration: 0.25, type: 'spring', stiffness: 300 } }}
                                className='bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#334155]
                                           hover:shadow-lg transition-shadow duration-300 flex flex-col gap-3'
                            >
                                {/* Icon */}
                                <div className='w-12 h-12 flex items-center justify-center'>
                                    <Image src={tech.icon} alt={tech.name} className='w-10 h-10 object-contain' />
                                </div>

                                {/* Name */}
                                <h3 className='font-sans font-bold text-[#0f172a] dark:text-white text-base'>
                                    {tech.name}
                                </h3>

                                {/* Description */}
                                <p className='font-sans text-[#64748b] dark:text-[#94a3b8] text-sm leading-relaxed flex-1'>
                                    {tech.description}
                                </p>

                                {/* Stars */}
                                <div className='flex gap-1 mt-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24"
                                            fill={i < tech.level ? '#eab308' : '#e2e8f0'}
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default About