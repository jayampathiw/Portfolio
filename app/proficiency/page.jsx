"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { GraduationCap, Code } from "lucide-react";
import { useDataSection } from "@/contexts/DataContext";

const DynamicTechnologyIcon = dynamic(
  () => import("./../../components/technologyIcon"),
  { ssr: false }
);

const Proficiency = () => {
  const { academic, technologies } = useDataSection("education");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

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
          defaultValue="technologies"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tabs List */}
          <div className="w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsList className="flex flex-col gap-6 bg-transparent">
              <TabsTrigger
                value="technologies"
                className="flex items-center gap-2 w-full data-[state=active]:bg-[#232329] data-[state=active]:text-accent"
              >
                <Code className="w-5 h-5" />
                Technologies
              </TabsTrigger>
              <TabsTrigger
                value="academic"
                className="flex items-center gap-2 w-full data-[state=active]:bg-[#232329] data-[state=active]:text-accent"
              >
                <GraduationCap className="w-5 h-5" />
                Academic
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Technologies Tab */}
            <TabsContent value="technologies" className="w-full h-full mt-0">
              <div className="flex flex-col gap-[30px]">
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <h3 className="text-4xl font-bold">{technologies.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {technologies.description}
                  </p>
                </motion.div>

                <ScrollArea className="h-[450px]">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="pr-5"
                  >
                    {technologies.categories.map((cat, categoryIndex) => (
                      <div key={categoryIndex} className="mb-8">
                        <h4 className="text-lg font-semibold text-accent mb-4">
                          {cat.type}
                        </h4>
                        <motion.ul
                          variants={container}
                          className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-7 gap-4 xl:gap-[20px]"
                        >
                          {cat.skillList.map((item, index) => (
                            <motion.li
                              key={index}
                              variants={item}
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full">
                                    <div className="h-[60px] bg-[#232329] rounded-xl flex justify-center items-center group hover:bg-[#2a2a31] transition-all duration-300">
                                      <div className="text-[2rem] text-white/60 group-hover:text-accent transition-all duration-300">
                                        <DynamicTechnologyIcon
                                          icon={item.icon}
                                        />
                                      </div>
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{item.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    ))}
                  </motion.div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Academic Tab */}
            <TabsContent value="academic" className="w-full mt-0">
              <div className="flex flex-col gap-[30px]">
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <h3 className="text-4xl font-bold">{academic.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {academic.description}
                  </p>
                </motion.div>

                <ScrollArea className="h-[450px]">
                  <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 gap-[30px] pr-5"
                  >
                    {academic.items.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#232329] hover:bg-[#2a2a31] transition-all duration-300 p-6 rounded-xl"
                      >
                        <div className="flex flex-col gap-2">
                          <h3 className="text-xl font-semibold text-white hover:text-accent transition-all duration-300">
                            {item.course}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                            {item.duration && (
                              <>
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.duration}</p>
                              </>
                            )}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Proficiency;
