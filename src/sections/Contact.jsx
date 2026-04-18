// src/sections/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMessage('');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMessage(
        'Email service configuration is missing. Please add your EmailJS keys to the .env file.'
      );
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      form.current.reset();
    } catch (error) {
      const emailJsMessage =
        error?.text ||
        error?.message ||
        'Unable to send your message right now. Please try again later.';

      if (emailJsMessage.toLowerCase().includes('invalid grant')) {
        setErrorMessage(
          'The contact service is temporarily disconnected. Please reconnect the Gmail account in EmailJS and try again.'
        );
      } else {
        setErrorMessage(emailJsMessage);
      }

      console.error('EmailJS Error:', error);
    } finally {
      setIsSending(false);
    }
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
          disabled={isSending}
          className="w-full py-3 bg-[#3dd0e3] text-black font-bold rounded hover:bg-[#25a9bc] transition duration-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>

        {success && (
          <p className="text-green-400 mt-4 text-center">
            ✅ Your message has been sent!
          </p>
        )}

        {errorMessage && (
          <p className="mt-4 text-center text-red-400">{errorMessage}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
