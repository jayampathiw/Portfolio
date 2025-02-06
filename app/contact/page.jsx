"use client";

import ContactMe from "@/components/contactMe";
import { motion } from "framer-motion";
import { useDataSection } from "./../../contexts/DataContext";
import { Card } from "@/components/ui/card";
import { Phone, Mail, User } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  const about = useDataSection("contact");

  useEffect(() => {
    console.log("Environment variables check:", {
      user: process.env.NEXT_PUBLIC_GMAIL_USER ? "Present" : "Missing",
      pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD ? "Present" : "Missing",
    });
  }, []);

  const getIcon = (fieldName) => {
    switch (fieldName.trim().toLowerCase()) {
      case "name":
        return <User className="text-accent" />;
      case "telephone":
        return <Phone className="text-accent" />;
      case "email":
        return <Mail className="text-accent" />;
      default:
        return null;
    }
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
        <section className="flex flex-col xl:flex-row gap-[60px]">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <div className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {about.description && (
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                )}
                <div className="grid gap-4">
                  {about.info.map((item, index) => (
                    <Card
                      key={index}
                      className="bg-[#232329] border-none p-4 transition-transform hover:scale-105"
                    >
                      <div className="flex items-center gap-4">
                        {getIcon(item.fieldName)}
                        <div className="flex flex-col">
                          <span className="text-sm text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-lg font-medium text-white">
                            {item.fieldValue}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1">
            <Card className="bg-transparent border-none p-6 md:p-8">
              <ContactMe />
            </Card>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
