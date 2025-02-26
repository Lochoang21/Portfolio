import React from 'react'
import Image from 'next/image';
import { assets, workData } from '@/assets/assets';
import { motion } from "motion/react";

interface ProjectProps {
    isDarkMode: boolean;
}

const Project: React.FC<ProjectProps> = ({ isDarkMode }) => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='project' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <motion.h4 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>
            <motion.h2 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-Ovo'>My Project</motion.h2>
            <motion.p 
             initial={{ opacity: 0}}
             whileInView={{ opacity: 1}}
             transition={{ duration: 0.5, delay: 0.7 }}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my portfolio. Here you can see some of the projects I have worked on.

            </motion.p>

            <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.9 }}
    className="grid grid-cols-auto my-10 gap-5 dark:text-black"
>
    {workData.map((project, index) => (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg
                        relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
        >
            {/* Thông tin dự án */}
            <div
                className="border rounded-full border-black bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                            transform -translate-x-1/2 py-3 px-5 flex flex-col justify-between items-center 
                            duration-500 group-hover:bottom-7"
            >
                {/* Tiêu đề & mô tả */}
                <div className="text-center">
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-sm text-gray-700">{project.description}</p>
                </div>

                {/* Công nghệ sử dụng */}
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {project.icon.map((icon, idx) => (
                        <Image key={idx} src={icon} alt="tech-icon" className="w-6 h-6" />
                    ))}
                </div>

                {/* Nút mở GitHub */}
                <div
                    onClick={() => window.open(project.link, "_blank")}
                    className="border rounded-full border-black w-9 aspect-square flex justify-center items-center
                               shadow-[2px_2px_0px_#000] group-hover:bg-pink-400 transition mt-2"
                >
                    <Image src={assets.send_icon} alt="send-icon" className="w-5" />
                </div>
            </div>
        </motion.div>
    ))}
</motion.div>

            <div>
                <motion.a 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.5, delay: 1.1}}
                href="" className='w-max flex items-center justify-center gap-2 text-gray-700 
                border-[0.5px] border-gray-700 rounded-full px-10 py-2 mx-auto my-20
                hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
                    Show more <Image src={ isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} className='w-4' alt='show more'/>
                </motion.a>
            </div>
        </motion.div>
    )
}

export default Project
