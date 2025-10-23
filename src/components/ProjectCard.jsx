import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold text-[#3dd0e3] mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((item, index) => (
          <span key={index} className="text-sm bg-[#3dd0e3]/10 px-3 py-1 rounded-full text-[#3dd0e3]">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-[#3dd0e3] hover:underline">
          Live Demo
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#3dd0e3] hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
