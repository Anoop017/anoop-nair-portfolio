// src/components/Timeline.jsx
import { GraduationCap, Briefcase } from "lucide-react";

const timelineData = [
  {
    icon: <GraduationCap size={20} />,
    title: "Diploma in Mechanical Engineering",
    org: "DTE Kerala",
    duration: "2017 - 2020",
  },
  {
      icon: <Briefcase size={20} />,
      title: "Customer Engineer",
      org: "Schindler India Pvt. Ltd.",
      duration: "2021 - 2024",
    },
   
    {
      icon: <GraduationCap size={20} />,
      title: "B.E. in Mechanical Engineering",
      org: "SPPU (Pune University)",
      duration: "2023 - ongoing",
    },
    {
        icon: <Briefcase size={20} />,
        title: "Full Stack Developer",
        org: "Freelancing",
        duration: "2024 - Present",
    }
];

const Timeline = () => {
  return (
    <div className="mt-20">
      <h3 className="text-2xl md:text-3xl font-bold text-[#3dd0e3] mb-12 text-center">
        My Journey
      </h3>

      <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Horizontal line */}
        <div className="hidden md:block absolute top-[20px] left-0 w-full h-[2px] bg-gray-700 z-0"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center text-center md:w-1/4 mb-10 md:mb-0"
          >
            {/* Icon inside circle */}
            <div className="bg-[#0e161c] border-2 border-[#3dd0e3] text-[#3dd0e3] p-3 rounded-full mb-4">
              {item.icon}
            </div>
            <h4 className="text-base font-semibold text-white">{item.title}</h4>
            <p className="text-sm text-gray-400">{item.org}</p>
            <p className="text-sm text-gray-500">{item.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
