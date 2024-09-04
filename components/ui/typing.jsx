"use client";

import { Typewriter } from "react-simple-typewriter";

const Typing = () => {
  return (
    <h2 className="text-3xl mb-6 space-x-4">
      I'm a
      <span className="text-accent px-10">
        <Typewriter
          words={[
            "Web 3 Developer",
            "Front-end Developer",
            "Blockchain Developer",
            "Full-stack Developer",
          ]}
          loop={0}
        />
      </span>
    </h2>
  );
};

export default Typing;
