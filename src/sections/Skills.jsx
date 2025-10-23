
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub,
  FaAws, FaDatabase
} from 'react-icons/fa';
import {
  SiTailwindcss, SiRedux, SiMongodb, SiMysql, SiExpress,
  SiPostman, SiVercel,
  SiReact, SiReactbootstrap,
} from 'react-icons/si';
import { MdOutlineDraw } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
import { GiSkills } from 'react-icons/gi';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'React Bootstrap', icon: <SiReactbootstrap /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'UI/UX Design Basics', icon: <MdOutlineDraw /> },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'RESTful APIs', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },

      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [

      { name: 'AWS', icon: <FaAws /> },

      { name: 'Vercel', icon: <SiVercel /> },
    ],
  },
  {
    title: 'Tools & Version Control',
    skills: [
      { name: 'Git', icon: <FaGit /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'MongoDB Compass', icon: <SiMongodb /> }
    ],
  },
  {
    title: 'Soft Skills & Methodologies',
    skills: [
      { name: 'Problem Solving', icon: <GiSkills /> },
      { name: 'Communication', icon: <RiTeamLine /> },
      { name: 'Debugging', icon: <GiSkills /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-[#0e161c] text-white px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3dd0e3] mb-16">
          Skills & Tools
        </h2>

        <div className="space-y-14">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[#3dd0e3] mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#16232e] hover:bg-[#1f2d3b] p-5 rounded-xl flex flex-col items-center text-center gap-2 transition duration-300 cursor-pointer min-w-[100px]"

                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-3xl text-[#3dd0e3]">{skill.icon}</span>
                    <p className="text-white font-medium">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
