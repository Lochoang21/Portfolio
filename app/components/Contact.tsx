"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react";


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "24878b1c-886f-4633-814e-479125a1e3d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='w-full px-[12%] py-16 scroll-mt-20'
    >

      <div className='flex flex-col lg:flex-row gap-10 items-start'>
        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='lg:w-64 flex-shrink-0'
        >
          <h2 className='text-4xl font-bold text-[#111827] dark:text-white leading-tight tracking-tight mb-4'>
            Get In<br />
            <span className='text-[#9ca3af]'>Touch</span>
          </h2>
          <p className='text-sm text-[#9ca3af] leading-relaxed mb-6'>
            I would love to hear from you. Send a message and I will get back to you soon.
          </p>
        </motion.div>

        {/* Right: Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={onSubmit}
          className='flex-1 w-full rounded-2xl p-6 sm:p-8
                     bg-white dark:bg-[#111827]
                     border border-[#d1d5db] dark:border-[#1f2937]
                     shadow-xl shadow-[#111827]/[0.04] dark:shadow-black/20'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
            <motion.input
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              type='text'
              placeholder='Enter your name'
              required
              name='name'
              className='w-full px-4 py-3 rounded-xl outline-none
                         bg-[#f9fafb] dark:bg-[#1f2937]
                         border border-[#d1d5db] dark:border-[#374151]
                         text-[#111827] dark:text-white placeholder:text-[#9ca3af]
                         focus:border-[#111827] dark:focus:border-[#d1d5db] transition-colors'
            />

            <motion.input
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              type='email'
              placeholder='Enter your email'
              required
              name='email'
              className='w-full px-4 py-3 rounded-xl outline-none
                         bg-[#f9fafb] dark:bg-[#1f2937]
                         border border-[#d1d5db] dark:border-[#374151]
                         text-[#111827] dark:text-white placeholder:text-[#9ca3af]
                         focus:border-[#111827] dark:focus:border-[#d1d5db] transition-colors'
            />
          </div>

          <motion.textarea
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.45 }}
            rows={6}
            placeholder='Enter your message'
            required
            name='message'
            className='w-full px-4 py-3 rounded-xl outline-none mb-5
                       bg-[#f9fafb] dark:bg-[#1f2937]
                       border border-[#d1d5db] dark:border-[#374151]
                       text-[#111827] dark:text-white placeholder:text-[#9ca3af]
                       focus:border-[#111827] dark:focus:border-[#d1d5db] transition-colors'
          />

          <div className='flex items-center justify-between gap-4 flex-wrap'>
            <motion.button
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              type='submit'
              className='inline-flex items-center gap-2
                         border border-[#d1d5db] dark:border-[#374151]
                         hover:border-[#111827] dark:hover:border-[#d1d5db]
                         bg-[#111827] hover:bg-black
                         text-white text-xs font-semibold px-5 py-3 rounded-xl
                         transition-all duration-300 whitespace-nowrap'
            >
              Submit now <Image src={assets.right_arrow_white} alt='arrow right' className='w-4' />
            </motion.button>

            <p className='text-xs font-medium text-[#6b7280] dark:text-[#9ca3af]'>
              {result}
            </p>
          </div>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact


