"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTime,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

import { useDataSection } from "./../../contexts/DataContext";
import { ExternalLink } from "lucide-react";

const Services = () => {
  const experiences = useDataSection("experience");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          <section className="relative">
            <Timeline>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <TimelineItem className="sm:pl-52">
                    <TimelineHeader className="sm:before:ml-[12.5rem] sm:after:ml-[12.5rem] pl-2">
                      <TimelineTime
                        variant="outline"
                        className="border-accent text-accent w-50 sm:w-50 px-4 sm:ml-0 h-8 sm:h-8"
                      >
                        {exp.period}
                      </TimelineTime>
                      <TimelineTitle>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <span className="text-white">{exp.title}</span>
                            {exp.href && (
                              <Link
                                href={exp.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:text-white transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                          <span className="text-lg text-accent">
                            {exp.company}
                          </span>
                        </div>
                      </TimelineTitle>
                    </TimelineHeader>
                    <TimelineDescription className="pl-2">
                      <div className="mt-4 space-y-4">
                        {/* Type Badge */}
                        <Badge
                          variant="outline"
                          className="inline-flex border-accent text-accent"
                        >
                          {exp.type}
                        </Badge>

                        {/* Description */}
                        <p className="text-white/60">{exp.description}</p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h5 className="font-semibold text-white">
                            Key Achievements
                          </h5>
                          <ul className="list-disc list-inside space-y-1">
                            {exp.achievements?.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <h5 className="font-semibold text-white">
                            Technologies
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies?.map((tech, idx) => (
                              <Badge
                                key={idx}
                                className="bg-[#38383d] text-white/60 hover:text-accent"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="space-y-2">
                          <h5 className="font-semibold text-white">Impact</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.metrics?.map((metric, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="border-accent text-accent"
                              >
                                {metric}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TimelineDescription>
                  </TimelineItem>
                </motion.div>
              ))}
            </Timeline>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
