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
                className='flex w-full flex-col lg:flex-row items-center gap-16 my-20'
            >
                {/* ── Left: Photo with decorative frame ── */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className='relative flex-shrink-0'
                >
                    <div className='absolute -inset-3 rounded-3xl border-2 border-dashed border-[#d1d5db] dark:border-[#4b5563] opacity-70' />
                    <div className='absolute -bottom-4 -right-4 w-40 h-40 rounded-full bg-[#e5e7eb] dark:bg-[#374151] opacity-40 blur-2xl -z-10' />
                    <div className='w-64 sm:w-72 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-[#1e293b] shadow-2xl'>
                        <Image src={assets.j2k} alt='user' className='w-full object-cover' />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className='absolute -bottom-5 -left-5 bg-white dark:bg-[#1e293b] rounded-2xl px-4 py-3
                                   shadow-xl border border-[#e2e8f0] dark:border-[#334155] flex items-center gap-3'
                    >
                        <span className='text-2xl'>💼</span>
                        <div>
                            <p className='text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] leading-none mb-0.5'>EXPERIENCE</p>
                            <p className='text-sm font-bold text-[#0f172a] dark:text-white leading-none'>6+ Months</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── Right: Bio + Info cards ── */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className='flex-1 max-w-2xl'
                >
                    <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                    bg-[#f3f4f6] dark:bg-[#1f2937] border border-[#d1d5db] dark:border-[#374151] mb-6'>
                        <span className='w-2 h-2 rounded-full bg-[#111] dark:bg-white animate-pulse'></span>
                        <span className='text-xs font-semibold tracking-widest uppercase text-[#374151] dark:text-[#d1d5db]'>
                            Available for work
                        </span>
                    </div>
                    <h3 className='text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug tracking-tight'>
                        Fullstack Developer <br />
                        <span className='text-[#374151] dark:text-[#d1d5db] font-medium'>
                            building for the web
                        </span>
                    </h3>
                    <p className='mb-8 font-sans font-normal text-[15px] leading-[1.8] tracking-[0.01em] text-[#4b5563] dark:text-[#9ca3af]'>
                        A motivated Software Engineering graduate with over 6 months of hands-on experience
                        in fullstack web development. Experienced in building web applications using
                        <strong className='text-[#0f172a] dark:text-white font-semibold'> Java Spring Boot</strong> and
                        <strong className='text-[#0f172a] dark:text-white font-semibold'> ReactJS</strong>, with a solid
                        foundation in <strong className='text-[#0f172a] dark:text-white font-semibold'>MySQL</strong> and
                        <strong className='text-[#0f172a] dark:text-white font-semibold'> PostgreSQL</strong>. Eager to
                        apply my technical and problem-solving skills to develop effective web solutions and
                        grow within a professional team.
                    </p>
                    <div className='w-full h-px bg-gradient-to-r from-transparent via-[#e2e8f0] dark:via-[#334155] to-transparent mb-8' />
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-4'
                    >
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ y: -4, transition: { duration: 0.2, type: 'spring', stiffness: 300 } }}
                                key={index}
                                className='relative group rounded-2xl p-5 cursor-pointer
                                           bg-white dark:bg-[#1e293b]
                                           border border-[#e5e7eb] dark:border-[#374151]
                                           hover:border-[#9ca3af] dark:hover:border-[#6b7280]
                                           hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20
                                           transition-all duration-300 overflow-hidden'
                            >
                                <div className='absolute inset-0 bg-[#f9fafb] dark:bg-[#111827]
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                <div className='relative z-10'>
                                    <div className='w-9 h-9 rounded-xl bg-[#f3f4f6] dark:bg-[#1f2937]
                                                    flex items-center justify-center mb-4'>
                                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-5 h-5' />
                                    </div>
                                    <h3 className='mb-1.5 text-sm font-bold text-[#111827] dark:text-white tracking-tight'>
                                        {title}
                                    </h3>
                                    <p className='text-xs font-normal text-[#6b7280] dark:text-[#9ca3af] leading-relaxed'>
                                        {description}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>

            {/* ══════════════════════════════════════════
                TOOLS I WORK WITH — Redesigned
            ══════════════════════════════════════════ */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mt-16 mb-24'
            >
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='flex items-center gap-4 mb-12'
                >
                    <span className='text-[10px] font-bold tracking-[0.25em] uppercase text-[#9ca3af] dark:text-[#9ca3af]'>
                        01 / Tools
                    </span>
                    <div className='flex-1 h-px bg-[#d1d5db] dark:bg-[#374151]' />
                    <span className='text-[10px] font-bold tracking-[0.25em] uppercase text-[#9ca3af] dark:text-[#9ca3af]'>
                        Dev Workflow
                    </span>
                </motion.div>

                <div className='flex flex-col lg:flex-row gap-10 items-start'>
                    {/* Left: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='lg:w-64 flex-shrink-0'
                    >
                        <h2 className='text-4xl font-bold text-[#111827] dark:text-white leading-tight tracking-tight mb-4'>
                            Tools I<br />
                            <span className='text-[#9ca3af]'>Work With</span>
                        </h2>
                        <p className='text-sm text-[#9ca3af] leading-relaxed'>
                            Professional development tools that power my day-to-day workflow.
                        </p>
                    </motion.div>

                    {/* Right: Cards */}
                    <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {toolsData.map((tool, index) => {
                            const toolMeta = [
                                { name: 'VS Code', desc: 'Lightweight editor for modern web development with rich extension support.', stars: 5 },
                                { name: 'IntelliJ', desc: 'Smart Java IDE with refactoring, debugging, and Spring Boot integration.', stars: 4 },
                                { name: 'Postman', desc: 'Test and document REST APIs with an intuitive request-building interface.', stars: 5 },
                                { name: 'Git', desc: 'Track changes, collaborate, and manage code history across every project.', stars: 5 },
                            ];
                            const meta = toolMeta[index] ?? { name: `Tool ${index + 1}`, desc: '', stars: 3 };

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: 0.08 * index }}
                                    whileHover={{ y: -6, transition: { duration: 0.22, type: 'spring', stiffness: 320 } }}
                                    className='group relative bg-white dark:bg-[#111827] rounded-2xl p-5
                                               border border-[#d1d5db] dark:border-[#1f2937]
                                               hover:border-[#111827] dark:hover:border-[#d1d5db]
                                               hover:shadow-xl hover:shadow-[#111827]/8 dark:hover:shadow-black/30
                                               transition-all duration-300 cursor-pointer overflow-hidden'
                                >
                                    {/* Corner accent */}
                                    <div className='absolute top-0 right-0 w-16 h-16 bg-[#111827] dark:bg-[#d1d5db]
                                                    opacity-0 group-hover:opacity-[0.04] rounded-bl-3xl
                                                    transition-opacity duration-300' />

                                    {/* Index number */}
                                    <span className='absolute top-4 right-5 text-[11px] font-bold
                                                     text-[#d1d5db] dark:text-[#374151] tabular-nums'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Icon container */}
                                    <div className='w-11 h-11 rounded-xl bg-[#f9fafb] dark:bg-[#1f2937]
                                                    flex items-center justify-center mb-5
                                                    border border-[#d1d5db] dark:border-[#374151]
                                                    group-hover:border-[#9ca3af] transition-colors duration-300'>
                                        <Image src={tool} alt={meta.name} className='w-6 h-6 object-contain' />
                                    </div>

                                    {/* Name */}
                                    <h3 className='font-bold text-[#111827] dark:text-white text-sm mb-2 tracking-tight'>
                                        {meta.name}
                                    </h3>

                                    {/* Description */}
                                    <p className='text-[#9ca3af] text-xs leading-relaxed mb-5 flex-1'>
                                        {meta.desc}
                                    </p>

                                    {/* Stars — dot style */}
                                    <div className='flex items-center gap-1.5'>
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`inline-block rounded-full transition-all duration-300 ${
                                                    i < meta.stars
                                                        ? 'w-4 h-1.5 bg-[#111827] dark:bg-[#d1d5db]'
                                                        : 'w-1.5 h-1.5 bg-[#d1d5db] dark:bg-[#374151]'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* ══════════════════════════════════════════
                TECHNICAL EXPERTISE — Redesigned
            ══════════════════════════════════════════ */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='mb-20'
            >
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='flex items-center gap-4 mb-12'
                >
                    <span className='text-[10px] font-bold tracking-[0.25em] uppercase text-[#9ca3af] dark:text-[#9ca3af]'>
                        02 / Skills
                    </span>
                    <div className='flex-1 h-px bg-[#d1d5db] dark:bg-[#374151]' />
                    <span className='text-[10px] font-bold tracking-[0.25em] uppercase text-[#9ca3af] dark:text-[#9ca3af]'>
                        Core Stack
                    </span>
                </motion.div>

                <div className='flex flex-col lg:flex-row gap-10 items-start'>
                    {/* Left: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='lg:w-64 flex-shrink-0'
                    >
                        <h2 className='text-4xl font-bold text-[#111827] dark:text-white leading-tight tracking-tight mb-4'>
                            Technical<br />
                            <span className='text-[#9ca3af]'>Expertise</span>
                        </h2>
                        <p className='text-sm text-[#9ca3af] leading-relaxed mb-6'>
                            Key skills that define my professional identity and technical stack.
                        </p>

                        {/* Stat pill */}
                        <div className='inline-flex items-center gap-3 px-4 py-3 rounded-xl
                                        bg-[#111827] dark:bg-white/5 border border-[#d1d5db] dark:border-[#374151]'>
                            <div>
                                <p className='text-[10px] font-semibold tracking-widest uppercase text-[#9ca3af] leading-none mb-0.5'>
                                    Technologies
                                </p>
                                <p className='text-xl font-bold text-white dark:text-white leading-none'>
                                    {techData.length}+
                                </p>
                            </div>
                            <div className='w-px h-8 bg-[#374151]' />
                            <div>
                                <p className='text-[10px] font-semibold tracking-widest uppercase text-[#9ca3af] leading-none mb-0.5'>
                                    Focus
                                </p>
                                <p className='text-sm font-bold text-white dark:text-white leading-none'>
                                    Fullstack
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Cards grid */}
                    <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {techData.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: 0.07 * index }}
                                whileHover={{ y: -6, transition: { duration: 0.22, type: 'spring', stiffness: 320 } }}
                                className='group relative bg-white dark:bg-[#111827] rounded-2xl p-5
                                           border border-[#d1d5db] dark:border-[#1f2937]
                                           hover:border-[#111827] dark:hover:border-[#d1d5db]
                                           hover:shadow-xl hover:shadow-[#111827]/8 dark:hover:shadow-black/30
                                           transition-all duration-300 cursor-pointer overflow-hidden'
                            >
                                {/* Hover fill overlay */}
                                <div className='absolute inset-0 bg-gradient-to-br from-[#111827]/[0.02] to-transparent
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                                {/* Index number */}
                                <span className='absolute top-4 right-5 text-[11px] font-bold
                                                 text-[#d1d5db] dark:text-[#374151] tabular-nums'>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Icon */}
                                <div className='w-11 h-11 rounded-xl bg-[#f9fafb] dark:bg-[#1f2937]
                                                flex items-center justify-center mb-5
                                                border border-[#d1d5db] dark:border-[#374151]
                                                group-hover:border-[#9ca3af] transition-colors duration-300'>
                                    <Image src={tech.icon} alt={tech.name} className='w-6 h-6 object-contain' />
                                </div>

                                {/* Name */}
                                <h3 className='font-bold text-[#111827] dark:text-white text-sm mb-2 tracking-tight'>
                                    {tech.name}
                                </h3>

                                {/* Description */}
                                <p className='text-[#9ca3af] text-xs leading-relaxed mb-5'>
                                    {tech.description}
                                </p>

                                {/* Proficiency bar */}
                                <div className='space-y-1.5'>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-[10px] font-semibold tracking-widest uppercase text-[#9ca3af]'>
                                            Proficiency
                                        </span>
                                        <span className='text-[10px] font-bold text-[#111827] dark:text-[#d1d5db]'>
                                            {Math.round((tech.level / 5) * 100)}%
                                        </span>
                                    </div>
                                    {/* Track */}
                                    <div className='w-full h-1 rounded-full bg-[#d1d5db] dark:bg-[#374151] overflow-hidden'>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(tech.level / 5) * 100}%` }}
                                            transition={{ duration: 0.8, delay: 0.1 * index, ease: 'easeOut' }}
                                            className='h-full rounded-full bg-[#111827] dark:bg-[#d1d5db]'
                                        />
                                    </div>
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