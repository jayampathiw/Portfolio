"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Social from "./ui/social";
import Resume from "./ui/resume";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About me",
    path: "/profile",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Proficiency",
    path: "/proficiency",
  },
  // {
  //   name: "Work",
  //   path: "/work",
  // },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Jayampathy<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  pathName === link?.path &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="mt-12 flex flex-col items-center gap-8">
          <Social
            containerStyles="flex gap-6"
            IconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
            text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
          <Resume />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
