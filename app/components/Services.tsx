import React from 'react'
import Image from 'next/image';
import { serviceData } from '@/assets/assets';
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services'
      className='w-full px-[12%] py-16 scroll-mt-20'
    >
      {/* Header */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center text-base text-gray-500 dark:text-gray-400 font-Ovo'
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-bold dark:text-white mt-1'
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-4 mb-14 text-gray-500 dark:text-gray-400 font-Ovo text-base'
      >
        I am a web developer with experience in backend development.
        I can help you build a website that meets your needs.
      </motion.p>

      {/* 2-column Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-5'
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            whileHover={{ y: -3 }}
            className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
                       rounded-2xl px-7 py-7 flex items-start gap-5
                       shadow-sm hover:shadow-md transition-shadow duration-300'
          >
            {/* Icon box */}
            <div className='w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-700
                            bg-gray-50 dark:bg-gray-800 flex items-center justify-center flex-shrink-0'>
              <Image src={icon} alt={title} className='w-6 h-6' />
            </div>

            {/* Content */}
            <div className='flex-1 min-w-0'>
              <h3 className='text-base font-bold text-gray-900 dark:text-white'>
                {title}
              </h3>
              <p className='text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed'>
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services