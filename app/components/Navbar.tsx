'use client';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16em)';
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16em)';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      }
      else {
        setIsScroll(false);
      }
    })
  }, []);

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image alt='img-bg' src={assets.header_bg_color} className='w-full' />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className='w-28
        cursor-pointer mr-14'/>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}
        bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent`}>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About me</a></li>
          <li><a className='font-Ovo' href="#services">Services</a></li>
          <li><a className='font-Ovo' href="#project">My Project</a></li>
          <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>
          <div  onClick={() => window.open("https://github.com/Lochoang21", "_blank")}  className='cursor-pointer hidden lg:flex items-center gap-3 px-10
                                        py-3 border border-gray-500 rounded-full ml-4 font-Ovo
                                         dark:border-white/50 dark:bg-transparent '>
          Github <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='logo-contact' className='w-3' /></div>

          <button className='block md:hidden' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* --mobile menu-- */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 
            fixed top-0 -right-64 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
            dark:bg-darkHover dark:text-white'>
          <div className='absolute top-6 right-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#project">My Project</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
