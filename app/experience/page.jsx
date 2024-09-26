"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";

import { useDataSection } from "./../../contexts/DataContext";

const Services = () => {
  const experiences = useDataSection("experience");
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-[60px]"
        >
          {/*Description*/}
          <section>
            <h3 className="text-4xl font-bold pb-8">My Experience</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quasi. Hic ab dolores minus dignissimos qui pariatur!
              .Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quasi. Hic ab dolores minus dignissimos qui pariatur!
              .Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quasi. Hic ab dolores minus dignissimos qui pariatur!
              .Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quasi. Hic ab dolores minus dignissimos qui pariatur!
              . Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quasi. Hic ab dolores minus dignissimos qui pariatur!
              .Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quasi. Hic ab dolores minus dignissimos qui pariatur!
              .Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </section>
          {/*Service list*/}
          <section>
            <ScrollArea className="h-[800px]">
              {experiences.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col justify-center gap-6 group pr-6 pt-6"
                  >
                    <div className="w-full flex justify-between items-center ">
                      <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                        {item.num}
                      </div>
                      <Link
                        href={item.href}
                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                      >
                        <BsArrowDownRight className="text-primary text-3xl" />
                      </Link>
                    </div>
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                      {item.title}
                    </h2>
                    <p className="text-white/60">{item.description}</p>
                    <div className="border-b border-white/20 w-full"></div>
                  </div>
                );
              })}
            </ScrollArea>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
