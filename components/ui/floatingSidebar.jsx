"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/jayampathiw" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/jayampathy-wijesena/",
  },
  {
    icon: <FaStackOverflow />,
    path: "https://stackoverflow.com/users/5192289/jayampathy-wijesena",
  },
];

const FloatingSidebar = () => {
  const pathname = usePathname();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/Jayampathy_Wijesena_Resume.pdf";
    link.download = "Jayampathy_Wijesena_Resume.pdf";
    link.click();
  };

  return (
    <AnimatePresence mode="wait">
      {/* Left floating social icons + download CV - hidden on mobile */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20, transition: { duration: 0.1, delay: 0 } }}
        transition={{ delay: 2.8, duration: 0.5, ease: "easeOut" }}
        className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4"
      >
        {socials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8 + index * 0.1, duration: 0.3 }}
          >
            <Link
              href={item.path}
              target="_blank"
              className="w-10 h-10 border border-accent rounded-full flex justify-center items-center
              text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-300"
            >
              {item.icon}
            </Link>
          </motion.div>
        ))}
        {/* Download CV button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.1, duration: 0.3 }}
          onClick={handleDownload}
          className="w-10 h-10 border border-accent rounded-full flex justify-center items-center
          text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-300"
          title="Download CV"
        >
          <FiDownload />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingSidebar;
