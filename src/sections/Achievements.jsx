// src/sections/Achievements.jsx
import React from 'react';

const achievements = [
  {
    title: 'Full Stack Web Development (MERN)',
    status: 'Entri Elevate & NSDC',
    description: 'Expertise in front-end, back-end, and database management.',
    image: '/certificate1.png',
  },
  {
    title: 'Certification in Full Stack Web Development (MERN)',
    status: 'Illinois Tech US – September 2025',
    description: 'Hands-on experience in building dynamic and scalable web applications.',
    image: '/certificate2.png',
  },
];

const Achievements = () => {
  return (
    <section className="py-16 px-6 bg-[#0e161c] text-white" id="achievements">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#3dd0e3]">
          Achievements & Certifications 🏆
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full aspect-[4/3] object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{cert.status}</p>
                <p className="text-[#3dd0e3] text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
