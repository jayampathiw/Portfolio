"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Rocket, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const expertise = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Development",
      skills: ["Next.js", "React", "Angular", "Node.js", "Java"],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Blockchain Innovation",
      skills: ["Web3", "Smart Contracts", "DeFi", "Gas Optimization"],
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance Optimization",
      skills: [
        "70% Process Reduction",
        "Millions Saved",
        "40% Team Productivity",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Technical Leadership",
      skills: ["Team Mentoring", "Architecture Design", "Best Practices"],
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
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
        <section className="flex flex-col gap-[60px]">
          <div className="flex flex-col w-full mx-auto xl:mx-0 gap-6">
            <div value="about" className="w-full text-center xl:text-left ">
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-4xl font-bold">About me</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Card className="h-full bg-[#232329]">
                        <CardContent className="p-6">
                          <div className="text-accent mb-4">{item.icon}</div>
                          <h4 className="text-lg font-semibold mb-3 text-white">
                            {item.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-sm hover:text-accent bg-[#38383d] text-white/60 cursor-pointer"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <section className="text-white/60 ">
                  <p className="py-4">
                    Senior Blockchain Developer | Full-Stack Engineer |
                    Front-End Architect with 8+ years of experience transforming
                    complex business challenges into scalable, user-centric
                    solutions. Specializing in Next.js, React, Angular, Java,
                    Node.js and emerging Web3 technologies, I've contributed
                    over 500,000 lines of production-ready code across FinTech,
                    EdTech, Travel and many other domains.
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
        </section>
      </div>
    </motion.div>
  );
};

export default Resume;
