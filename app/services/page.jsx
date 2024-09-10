"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { motion } from "framer-motion";

const timelineData = [
  {
    id: 1,
    date: "2022 - Present",
    company: "Tech Innovations Inc.",
    position: "Senior Software Engineer",
    description:
      "Leading development of cloud-based solutions and mentoring junior developers.",
  },
  {
    id: 2,
    date: "2019 - 2022",
    company: "DataDrive Solutions",
    position: "Full Stack Developer",
    description:
      "Developed and maintained multiple web applications using React and Node.js.",
  },
  {
    id: 3,
    date: "2017 - 2019",
    company: "StartUp Nexus",
    position: "Junior Developer",
    description:
      "Assisted in the development of mobile apps and gained experience in Agile methodologies.",
  },
  {
    id: 2,
    date: "2019 - 2022",
    company: "DataDrive Solutions",
    position: "Full Stack Developer",
    description:
      "Developed and maintained multiple web applications using React and Node.js.",
  },
  {
    id: 3,
    date: "2017 - 2019",
    company: "StartUp Nexus",
    position: "Junior Developer",
    description:
      "Assisted in the development of mobile apps and gained experience in Agile methodologies.",
  },
];

const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full ${
        isEven ? "sm:flex-row-reverse" : ""
      }`}
    >
      <div className="order-1 w-full sm:w-5/12 mb-4 sm:mb-0">
        <div
          className={`px-4 py-4 ${isEven ? "sm:text-right" : "sm:text-left"}`}
        ></div>
      </div>
      <div className="z-20 flex items-center justify-center order-first sm:order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full mb-4 sm:mb-0 ml-1">
        <BsBriefcase />
      </div>
      <div className="order-last sm:order-1 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 bg-[#232329]">
        <div className="flex justify-between">
          <div className="w-full">
            <p className="text-md font-bold text-accent">{data.date}</p>
          </div>
          <div>
            <Link
              href=""
              className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
            >
              <BsArrowDownRight className="text-primary text-3xl" />
            </Link>
          </div>
        </div>

        <h3 className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
          {data.company}
        </h3>
        <h4 className="text-xl sm:text-[25px] font-bold text-white">
          {data.position}
        </h4>
        <p className="text-white/60">{data.description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-[60px]"
        >
          <div className="relative wrap overflow-hidden p-4 sm:p-10">
            {timelineData.map((data, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  className={`mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full group ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div class="flex justify-center absolute  h-full left-4 sm:left-1/2">
                    <div class="absolute inset-y-0 w-px bg-gray-700 opacity-20"></div>
                    <div class="absolute top-1/2 transform -translate-y-1/2">
                      <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center z-10">
                        <span class="text-white text-xl">
                          <BsBriefcase />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="order-last sm:order-1 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 bg-[#232329]">
                    <div className="flex justify-between">
                      <div className="w-full">
                        <p className="text-md font-bold text-accent">
                          {data.date}
                        </p>
                      </div>
                      <div>
                        <Link
                          href=""
                          className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                        >
                          <BsArrowDownRight className="text-primary text-3xl" />
                        </Link>
                      </div>
                    </div>

                    <h3 className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {data.company}
                    </h3>
                    <h4 className="text-xl sm:text-[25px] font-bold text-white">
                      {data.position}
                    </h4>
                    <p className="text-white/60">{data.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
