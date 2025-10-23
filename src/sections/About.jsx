import React from 'react';
import TiltedCard from '../components/TiltedCard'; 
import profile from '../assets/profile.png';
import Timeline from '../components/Timeline';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0e161c] text-white px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3dd0e3]">Me, Myself and I</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hello, my name is <span className="text-white font-semibold">Anoop S Nair</span>. I’m a developer with a passion for <span className="text-[#3dd0e3]">web development</span>. Initially, I explored web development casually, but over time, I became more serious about honing my skills and fully immersing myself in the field. I am continuously learning and actively seeking remote or onsite job opportunities. If you need a frontend developer for your project, please feel free to contact me. I would be delighted to assist, as it would provide me with the opportunity to further develop my skills and knowledge.
          </p>
        <Timeline />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <TiltedCard
            imageSrc={profile}
            altText="Anoop S Nair"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            scaleOnHover={1.05}
            rotateAmplitude={15}
            showMobileWarning={false}
            showTooltip={false}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
