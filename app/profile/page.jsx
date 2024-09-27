"use client";

import { Tabs } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import { useDataSection } from "./../../contexts/DataContext";

const Resume = () => {
  const about = useDataSection("contact");

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
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            photo
          </div>
          <div className="min-h-[70vh] w-full">
            <div value="about" className="w-full text-center xl:text-left ">
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <section className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  <p className="py-4">
                    Senior Blockchain Developer | Full-Stack Engineer |
                    Front-End Architect with 14+ years of experience crafting
                    scalable solutions in Tourism, Travel, FinTech, and EdTech.
                    Specializing in Blockchain, Web3, Angular, React,
                    JavaScript, and Java technologies, I've contributed over
                    500,000 lines of code to enterprise-level projects.
                  </p>
                  <p>
                    My expertise lies in architecting scalable, component-based
                    systems that enhance modularity and maintainability. I excel
                    at implementing smart contracts that optimize transaction
                    times and security. Through Angular optimization and
                    intuitive designs, I deliver high-performance interfaces
                    that boost user engagement across decentralized
                    applications.
                  </p>
                  <p className="py-4">
                    Passionate about leveraging blockchain to revolutionize
                    industries, I bridge the gap between cutting-edge Web3
                    solutions and user-centric design, creating impactful
                    applications that shape the future of digital interactions.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
