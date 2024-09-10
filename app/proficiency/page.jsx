"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaAngular,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// ABout section
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi tempora commodi, maiores illo magni pariatur inventore repudiandae.",
  info: [
    {
      fieldName: "Name ",
      fieldValue: "Jayampathy Wijesena",
    },
    {
      fieldName: "Telephone ",
      fieldValue: "(+94) 75 94 94 955",
    },
    {
      fieldName: "Experience ",
      fieldValue: "14 Years",
    },
    {
      fieldName: "Nationality ",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Email ",
      fieldValue: "udayanga5@gmail.com",
    },
    {
      fieldName: "Languages ",
      fieldValue: "English, Sinhalese",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.png",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi tempora commodi, maiores illo magni pariatur inventore repudiandae.",
  items: [
    {
      company: "Test inc.",
      position: "Test Position",
      duration: "Mar/2020 - Present",
    },
    {
      company: "Test inc.",
      position: "Test Position",
      duration: "Mar/2020 - Present",
    },
    {
      company: "Test inc.",
      position: "Test Position",
      duration: "Mar/2020 - Present",
    },
    {
      company: "Test inc.",
      position: "Test Position",
      duration: "Mar/2020 - Present",
    },
    {
      company: "Test inc.",
      position: "Test Position",
      duration: "Mar/2020 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi tempora commodi, maiores illo magni pariatur inventore repudiandae.",
  items: [
    {
      institution: "Test Institute.",
      course: "Test Course",
      duration: "2023",
    },
    {
      institution: "Test Institute.",
      course: "Test Course",
      duration: "2022 -2023",
    },
    {
      institution: "Test Institute.",
      course: "Test Course",
      duration: "2023",
    },
    {
      institution: "Test Institute.",
      course: "Test Course",
      duration: "2022 -2023",
    },
    {
      institution: "Test Institute.",
      course: "Test Course",
      duration: "2023",
    },
    {
      institution: "Test Institute.",
      course: "Test Course",
      duration: "2022 -2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi tempora commodi, maiores illo magni pariatur inventore repudiandae.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "HTML5",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.course}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;