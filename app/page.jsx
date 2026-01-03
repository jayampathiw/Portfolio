"use client";
import Stats from "@/components/ui/stats";
import Photo from "@/components/ui/photo";
import Typing from "@/components/ui/typing";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container max-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-12">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-4">
              Hello I'm <span className="text-accent">Jayampathy</span>
            </h1>
            <Typing />
            <p className="max-w-[500px] mt-4 text-white/75">
              Architecting high-performance enterprise applications with Angular 18
              and modern web technologies. Specialized in building scalable platforms
              serving 10,000+ concurrent users with 99.9% uptime. Expert in Signals,
              NgRx, and micro-frontend architectures for Fortune 500 clients.
            </p>
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
