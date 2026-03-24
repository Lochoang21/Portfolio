'use client';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {

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
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  // Shared nav link classes
  const navLinkClass =
    'font-sans font-normal text-sm text-[#555] no-underline tracking-[0.01em] whitespace-nowrap transition-colors duration-200 hover:text-[#111] dark:text-[#aaa] dark:hover:text-[#f0f0f0]';

  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#project' },
    { label: 'Contact', href: '#contact' },
    // { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 transition-all duration-300
          ${isScroll
            ? 'bg-white/85 backdrop-blur-[14px] border-b border-black/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.05)] dark:bg-[rgba(18,18,18,0.85)] dark:border-white/[0.08] dark:shadow-[0_1px_20px_rgba(0,0,0,0.3)]'
            : ''
          }`}
      >

        {/* ── Logo ── */}
        {/* Note: add Playfair Display to your Next.js font config or globals.css */}
        <a
          href="#top"
        >
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 h-16 lg:w-37 lg:h-9' />
        </a>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-9">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={navLinkClass}>{label}</a>
            </li>
          ))}
        </ul>

        {/* ── Right Side ── */}
        <div className='flex items-center gap-3'>

          {/* GitHub Template Badge */}
          <div
            className="hidden lg:flex items-center gap-2 cursor-pointer group"
            onClick={() => window.open("https://github.com/Lochoang21", "_blank")}
          >
            <svg
              className="w-4 h-4 opacity-60 dark:invert"
              viewBox="0 0 24 24"
              fill="#555"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>

            <span className="font-sans font-normal text-[0.8rem] text-[#555] transition-colors duration-200 group-hover:text-[#111] dark:text-[#aaa] dark:group-hover:text-[#f0f0f0]">
              Template
            </span>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a]"
          >
            {isDarkMode ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          {/* Hamburger — mobile only */}
          <button
            className='flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a]'
            onClick={openMenu}
          >
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-[#555] dark:text-[#ccc]"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Mobile side menu ── */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-5 py-20 px-10
            fixed top-0 -right-64 bottom-0 w-64 z-50 h-screen
            bg-white dark:bg-[#111]
            shadow-2xl border-l border-black/[0.06] dark:border-white/[0.06]
            transition duration-500 font-sans'
        >
          <div
            className='absolute top-6 right-6 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-colors duration-200 hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a]'
            onClick={closeMenu}
          >
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-[#666] dark:text-[#aaa]"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={closeMenu}
                className="font-normal text-base text-[#555] no-underline tracking-[0.01em] transition-colors duration-200 hover:text-[#111] dark:text-[#aaa] dark:hover:text-[#f0f0f0]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;