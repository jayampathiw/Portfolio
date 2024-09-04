import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/ui/social";
import Photo from "@/components/ui/photo";
import Stats from "@/components/ui/stats";
import Typing from "@/components/ui/typing";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container max-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Jayampathy</span>
            </h1>
            <Typing />
            <p className="max-w-[500px] mb-9 text-white/75">
              As a highly skilled and motivated Front-end/Full-stack Developer
              with over 10 years of experience, I specialize in Angular and
              JavaScript development.
            </p>
            <div className="flex flex-col xl:flex-row item-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 flex justify-center items-center">
                <Social
                  containerStyles="flex gap-6"
                  IconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center 
                  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
