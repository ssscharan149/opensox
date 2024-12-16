"use client";

import Image from "next/image";
import imgSrc from "../../../assets/images/demoss.png";
import { GlowingBtn } from "@/components/ui/GlowingBtn";

export default function Home() {
  const ajeetClickHandler = (): void => {
    window.open("https://x.com/ajeetunc", "_blank");
  };

  return (
    <div className="h-screen w-full overflow-y-auto scroll-smooth">
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="space-y-8 max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-extrabold">Opensox</h1>
          <p className="text-xs lg:text-base lg:font-medium font-medium text-ox-purple">
            Find the perfect open-source project to contribute.
          </p>
          <GlowingBtn text="Get started"></GlowingBtn>
        </div>
      </section>
      <section className="h-screen flex items-center justify-center px-4 relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              bg-[#9455f4] opacity-60 blur-[250px] 
              w-[500px] h-[500px] 
              md:w-[900px] md:h-[900px] 
              lg:w-[1100px] lg:h-[1100px] 
              rounded-full"
        ></div>
        <div className="relative z-10 w-full max-w-4xl">
          <Image
            alt="Demo screenshot"
            src={imgSrc}
            className="w-full h-auto object-contain shadow-lg rounded-xl relative z-20"
          />
        </div>
      </section>
      {/* <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-50">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-4xl font-bold">What is Opensox?</h2>
          <p className="text-lg text-gray-700">
            Opensox is your gateway to the open-source world. We help developers
            find meaningful projects, contribute to impactful code, and grow
            their skills through collaborative coding.
          </p>
        </div>
      </section> */}
      <footer className="h-[20%] flex items-center justify-center">
        <div id="landing-footer" className="flex z-10">
          <h1 className="text-sm">
            Created by{" "}
            <button
              className="underline text-ox-purple cursor-pointer"
              onClick={ajeetClickHandler}
            >
              Ajeet
            </button>
          </h1>
        </div>
      </footer>
    </div>
  );
}
