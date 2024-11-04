"use client";

import Stats from "@/components/ui/stats";
import { motion } from "framer-motion";

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
        <section className="flex flex-col gap-[60px]">
          <div className="flex flex-col w-full mx-auto xl:mx-0 gap-6">
            <div value="about" className="w-full text-center xl:text-left ">
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-4xl font-bold">About me</h3>
                <section className="text-white/60 ">
                  <p className="py-4">
                    Senior Blockchain Developer | Full-Stack Engineer |
                    Front-End Architect with 14+ years of experience
                    transforming complex business challenges into scalable,
                    user-centric solutions. Specializing in Next.js, React, Angular, Java, Node.js and
                    emerging Web3 technologies, I've contributed over 500,000
                    lines of production-ready code across FinTech, EdTech, Travel and many other
                    domains.
                  </p>
                  <p>
                    I've successfully delivered enterprise-level projects for
                    Fortune 500 companies, reducing transaction processing times
                    by 70% and saving clients millions annually. My passion for
                    continuous learning keeps me at the forefront of blockchain
                    innovation, where I leverage cutting-edge technologies to
                    create secure, decentralized applications that drive
                    business growth and improve user experiences.
                  </p>
                  <p className="py-4">
                    Committed to mentoring the next generation of developers, I
                    foster collaborative environments that boost team
                    productivity by 40%. Whether it's optimizing travel
                    management platforms or revolutionizing educational
                    technology, I thrive on crafting robust, scalable solutions
                    that make a tangible impact in today's rapidly evolving
                    digital landscape.
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Stats />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Resume;
