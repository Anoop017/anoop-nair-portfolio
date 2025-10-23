// src/sections/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import RotatingText from '../components/RotatingText';
import Squares from '../components/Squares';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white overflow-hidden"
    >
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares />
      </div>

      {/* Text Content on top */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Hey, I’m <span className="text-cyan-400">Anoop S Nair</span>
        </h1>

        <div className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-lg text-xl sm:text-2xl md:text-3xl font-medium mb-8">
          <RotatingText
            texts={[
              'MERN Stack Developer',
              'Creative Full Stack Dev',
              'Passionate Code Crafter',
              'Innovative Problem Solver'
            ]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center gap-6 text-5xl"
        >
          {/* Mail */}
          <a
            href="mailto:anoopsnair321@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400 transition duration-300"
            title="Mail Me"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anoopsnair85/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917034248006"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition duration-300"
            title="Message on WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Anoop017"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition duration-300"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
