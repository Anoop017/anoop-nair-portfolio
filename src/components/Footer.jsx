import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  {
    name: 'Email',
    icon: <FaEnvelope />,
    url: 'mailto:anoopsnair321@gmail.com',
    hoverColor: 'hover:text-[#BB001B]',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp />,
    url: 'https://wa.me/917034248006',
    hoverColor: 'hover:text-[#25D366]',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/anoopsnair85/',
    hoverColor: 'hover:text-[#0077b5]',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/Anoop017',
    hoverColor: 'hover:text-[#6e5494]',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/__anoop__s__/',
    hoverColor: 'hover:text-[#e1306c]',
  },
  {
    name: 'Twitter',
    icon: <FaXTwitter />,
    url: 'https://x.com/Anoop_S_Nair_01',
    hoverColor: 'hover:text-[#1DA1F2]',
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode />,
    url: 'https://leetcode.com/u/anoopsnair1123/',
    hoverColor: 'hover:text-[#f89f1b]',
  },
];

// 👇 Utility function to get difference in Y M D
const getTimeSince = (fromDateStr) => {
  const fromDate = new Date(fromDateStr);
  const today = new Date();

  let years = today.getFullYear() - fromDate.getFullYear();
  let months = today.getMonth() - fromDate.getMonth();
  let days = today.getDate() - fromDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
};

const Footer = () => {
  const { years, months, days } = getTimeSince('2019-02-10'); 

  return (
    <footer className="animate-fade-in-bottom py-10 px-4 bg-[#0e161c] text-white text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center flex-wrap gap-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl md:text-3xl transition-transform transform hover:scale-125 ${link.hoverColor}`}
            >
              <div className="relative group">
                {link.icon}
                <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>


        {/*  Footer credits */}
        <p className="text-sm text-gray-400 mt-1">
          © {new Date().getFullYear()} | Designed & built by Anoop S Nair.
        </p>

        
        <p className="text-sm text-gray-400 mt-2">
          It's been {years} {years === 1 ? 'year' : 'years'} {months} {months === 1 ? 'month' : 'months'} {days} {days === 1 ? 'day' : 'days'} 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
