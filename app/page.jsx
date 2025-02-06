"use client";
import Stats from "@/components/ui/stats";
import Social from "@/components/ui/social";
import Photo from "@/components/ui/photo";
import Typing from "@/components/ui/typing";
import Resume from "@/components/ui/resume";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container max-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hello I'm <span className="text-accent">Jayampathy</span>
            </h1>
            <Typing />
            <p className="max-w-[500px] mb-9 text-white/75">
              Crafting high-performance enterprise solutions with expertise in
              Web3 and blockchain technologies. Specializing in building secure,
              scalable applications that bridge traditional and decentralized
              systems.
            </p>
            <div className="flex flex-col xl:flex-row item-center gap-8">
              <Resume />
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
      <div className="w-full">
        <Stats />
      </div>
    </section>
  );
};

export default Home;
