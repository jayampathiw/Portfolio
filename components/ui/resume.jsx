import React from "react";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/Jayampathy_Wijesena_Resume.pdf";
    link.download = "Jayampathy_Wijesena_Resume.pdf";
    link.click();
  };
  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download CV </span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default Resume;
