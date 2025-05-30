'use client';
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Services from "./components/Services";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.them === 'dark' || (!('them' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect (() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.them = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.them = '';
    }
  }, [isDarkMode]);
  return (
    <>
      <Navbar isDarkMode = {isDarkMode} setIsDarkMode = {setIsDarkMode}/>
      <Header/>
      <About isDarkMode = {isDarkMode} />
      <Services/>
      <Project isDarkMode = {isDarkMode} />
      <Contact/>
      <Footer isDarkMode = {isDarkMode} />
    </>
  );
}
