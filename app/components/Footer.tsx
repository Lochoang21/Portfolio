import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';

interface FooterProps {
    isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
    return (
        <div className='mt-20 '>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

                <div className='w-max mx-auto flex items-center gap-2'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                    lochoang2101@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>
                    © 2025 by Hoang Bao Loc. Proudly created with Next.js.</p>
                <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/Lochoang21">Github</a></li>
                    <li><a target='_blank' href="#">Facebook</a></li>
                    <li><a target='_blank' href="#">Twitter</a></li>
                </ul>
                
            </div>
        </div>
    )
}

export default Footer
