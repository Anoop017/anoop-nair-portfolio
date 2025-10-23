// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const letterColors = {
    M: '#47A248',  // MongoDB
    E: '#D32F2F',  // Express
    R: '#61DBFB',  // React
    N: '#3C873A'   // Node.js
  };

  const MERNLetters = ['M', 'E', 'R', 'N'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 text-white transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Fancy MERN Branding */}
        <motion.a
          href="#home"
          className="flex items-center text-3xl sm:text-4xl font-bold cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <div className="flex tracking-normal"> {/* Reduced letter spacing */}
            {MERNLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}
                whileHover={{
                  color: letterColors[letter],
                  textShadow: `0px 0px 10px ${letterColors[letter]}`,
                  y: -4,
                  transition: { duration: 0.1, ease: 'easeOut' }
                }}
                className="transition-all px-1 sm:px-2 py-1 rounded-md"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* "stack engineer" text with subtle pop-in animation */}
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
            className="ml-2 text-lg sm:text-2xl font-semibold text-gray-300 mt-1"

          >
            stack engineer
          </motion.span>
        </motion.a>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-base">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition duration-300 py-2 px-1"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Anoop_S_Nair_Resume.pdf"
              download
              className="resume-shiny hover-shiny"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={() => setNavOpen(!navOpen)} className="md:hidden z-20 cursor-pointer">
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 transition-transform duration-300 ${navOpen ? 'translate-y-0' : '-translate-y-[200%]'
            } bg-black/80 backdrop-blur-lg`}
        >
          {links.map((link) => (
            <li key={link}>
              <a
                onClick={() => setNavOpen(false)}
                href={`#${link.toLowerCase()}`}
                className="text-white hover:text-cyan-400 transition"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Anoop_S_Nair_Resume.pdf"
              download
              className="resume-shiny hover-shiny"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
