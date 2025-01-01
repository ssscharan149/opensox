"use client";
import Image from "next/image";
import imgSrc from "../../../assets/images/demoss.png";
import { GlowingBtn } from "@/components/ui/GlowingBtn";
import { useRouter } from "next/navigation";
import { QueryCount } from "@/components/landing-page/QueryCount";

export default function Home() {
  const router = useRouter();

  const ajeetClickHandler = (): void => {
    window.open("https://x.com/ajeetunc", "_blank");
  };

  const getStartedHandler = (): void => {
    router.push("/dashboard/home");
  };

  return (
    <main className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
      <section className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 md:mb-12">
        <div className="space-y-8 max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-extrabold font-sans">
            Opensox
          </h1>
          <p className="text-xs lg:text-base lg:font-medium font-medium text-ox-purple">
            Find the perfect open-source project to contribute.
          </p>
          <GlowingBtn text="Get started" handleClick={getStartedHandler} />
        </div>
      </section>

      <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative gap-10 md:gap-20 py-8 lg:py-12 xl:py-16">
        <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold font-sans">
          Save your 100+ hours
        </h1>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-[#9455f4] opacity-60 blur-[250px]
          w-[500px] h-[500px]
          md:w-[900px] md:h-[900px]
          lg:w-[1100px] lg:h-[1100px]
          rounded-full"
        />
        <div className="relative z-10 w-full lg:w-[90%] xl:w-full max-w-4xl">
          <Image
            alt="Demo screenshot"
            src={imgSrc}
            className="w-full h-auto object-contain shadow-lg rounded-xl relative z-20"
          />
        </div>
      </section>

      <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 gap-10 md:gap-20 py-8 lg:py-12 xl:py-16 relative">
        <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold font-sans">
          Quick guide
        </h1>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-[#9455f4] opacity-60 blur-[250px]
          w-[500px] h-[500px]
          md:w-[900px] md:h-[900px]
          lg:w-[1100px] lg:h-[1100px]
          rounded-full"
        />
        <div className="w-full h-full md:w-[78%] lg:w-[90%] xl:w-[78%] rounded-lg overflow-hidden z-10">
          <video controls className="w-full h-full">
            <source src="/videos/os-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <QueryCount />

      <footer className="py-8 flex items-center justify-center">
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
    </main>
  );
}
