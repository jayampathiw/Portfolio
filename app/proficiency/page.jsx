"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import dynamic from "next/dynamic";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

import { useDataSection } from "@/contexts/DataContext";

const DynamicTechnologyIcon = dynamic(
  () => import("./../../components/technologyIcon"),
  {
    ssr: false,
  }
);

const Proficiency = () => {
  const { academic, technologies } = useDataSection("education");

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
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="technologies" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{technologies.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {technologies.description}
                  </p>
                </div>
                <section>
                  <ScrollArea className="h-[450px]">
                    {technologies.categories.map((cat) => {
                      return (
                        <>
                          <p className="text-white/60 pt-4 pb-2">{cat.type}</p>
                          <ul className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-7 gap-4 xl:gap-[20px] pr-5">
                            {cat.skillList.map((item, index) => {
                              return (
                                <li key={index}>
                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger className="w-full h-[60px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                        <div className="text-[2rem] group-hover:text-accent transition-all duration-300">
                                          <DynamicTechnologyIcon
                                            icon={item.icon}
                                          />
                                        </div>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p className="capitalize">
                                          {item.name}
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      );
                    })}
                  </ScrollArea>
                </section>
              </div>
            </TabsContent>
            <TabsContent value="academic" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{academic.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {academic.description}
                </p>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 gap-[30px] pr-5">
                    {academic.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-start lg:item-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl min-h-[60px] text-center lg:text-left">
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

export default Proficiency;
