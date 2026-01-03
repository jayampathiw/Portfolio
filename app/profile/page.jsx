"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Rocket, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const expertise = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Angular & Frontend",
      skills: ["Angular 18", "Signals", "NgRx", "RxJS", "TypeScript"],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Enterprise Architecture",
      skills: ["Micro-frontends", "Module Federation", "Design Systems", "Storybook"],
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance & Scale",
      skills: [
        "95 Lighthouse Score",
        "10K+ Concurrent Users",
        "75% Load Time Reduction",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Technical Leadership",
      skills: ["Team Mentoring", "Code Reviews", "Architecture Design"],
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
                    Senior Angular Architect | Full-Stack Engineer with 14+ years
                    of experience building high-performance enterprise applications.
                    Specializing in Angular 18 with Signals and Standalone Components,
                    I architect scalable platforms serving millions of users across
                    Fortune 500 clients including CSG International and leading
                    EdTech companies.
                  </p>
                  <p>
                    I've successfully delivered enterprise platforms handling
                    10,000+ concurrent users with 99.9% uptime. My expertise
                    in micro-frontend architecture, NgRx state management, and
                    performance optimization has achieved 95 Lighthouse scores
                    and 75% load time reductions. I've built 50+ reusable
                    component libraries with Storybook documentation and
                    maintained 85%+ test coverage across large-scale applications.
                  </p>
                  <p className="py-4">
                    Committed to technical excellence and mentoring development
                    teams, I foster best practices in code quality, testing, and
                    architecture design. From real-time collaborative EdTech
                    platforms to telecommunications billing systems serving 1M+
                    users, I thrive on crafting robust, scalable Angular solutions
                    that deliver measurable business impact.
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
