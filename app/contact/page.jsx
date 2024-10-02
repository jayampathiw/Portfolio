"use client";

import ContactMe from "@/components/contactMe";

import { motion } from "framer-motion";

import { useDataSection } from "./../../contexts/DataContext";

const Contact = () => {
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
        <section
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <div value="about" className="w-full text-center xl:text-left ">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] max-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="min-h-[70vh] w-full">
            <ContactMe />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
