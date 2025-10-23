// src/sections/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pgkzp1s',
        'template_7oiwzwp',
        form.current,
        'kmsrBovD8hS9RrOc_'
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-10 bg-[#0f172a] text-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#3dd0e3]">Contact Me</h2>

      {/* Quick Contact Me */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 items-center space-y-4 sm:space-y-0 mb-10">
        <a
          href="mailto:anoopsnair321@gmail.com"
          className="flex items-center space-x-2 px-4 py-2 bg-[#3dd0e3] text-black rounded-full font-semibold hover:scale-105 transition transform duration-200"
        >
          <FaEnvelope className="text-xl" />
          <span>Email Me</span>
        </a>
        <a
          href="https://www.linkedin.com/in/anoopsnair85/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-[#0a66c2] text-white rounded-full font-semibold hover:scale-105 transition transform duration-200"
        >
          <FaLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/__anoop__s__/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition transform duration-200"
        >
          <FaInstagram className="text-xl" />
          <span>Instagram</span>
        </a>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3dd0e3]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3dd0e3]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="w-full p-3 rounded bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3dd0e3]"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-[#3dd0e3] text-black font-bold rounded hover:bg-[#25a9bc] transition duration-300"
        >
          Send Message
        </button>

        {success && (
          <p className="text-green-400 mt-4 text-center">
            ✅ Your message has been sent!
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
