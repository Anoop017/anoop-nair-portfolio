// src/sections/Projects.jsx
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'CineSapiens',
    image: '/Project1.png',
    url: 'https://cinesapiens.netlify.app/',
    description: 'A movie explorer app powered by TMDB API using React, Vite & Tailwind.',
  },
  {
    id: 2,
    title: 'QuizNest',
    image: '/Project2.png',
    url: 'https://quiz-nest-site.netlify.app/',
    description: 'A colorful and educational quiz site with emojis and geography games.',
  },
  {
    id: 3,
    title: 'Rick & Morty API',
    image: '/Project3.png',
    url: 'https://rick-and-morty-selector-api.netlify.app/',
    description: 'Character selector app using Rick & Morty API, styled with Tailwind.',
  },
  {
    id: 4,
    title: 'Hospital Patient Care Dashboard',
    image: '/Project4.png',
    url: 'https://hospital-patient-dashboard-frontend.netlify.app/',
    description: 'A Full Stack Hospital Patient Care Dashboard',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-[#0e161c] text-white">
      <h2 className="text-4xl font-bold text-center text-[#3dd0e3] mb-12"> My Projects</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden shadow-lg bg-[#1e293b] hover:shadow-[#3dd0e3]/50 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#3dd0e3] transition duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
