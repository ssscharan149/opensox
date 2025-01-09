"use client";

import SignInPage from "@/components/login/SignInPage";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center border">
      <div className="w-[80%] h-[60%] lg:w-[70%] lg:h-[40%] xl:w-[30%] xl:h-[50%] z-10">
        <SignInPage></SignInPage>
      </div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-[#9455f4] opacity-40 blur-[250px]
          w-[500px] h-[500px]
          md:w-[900px] md:h-[900px]
          lg:w-[1100px] lg:h-[1100px]
          rounded-full"
      />
    </div>
  );
}
