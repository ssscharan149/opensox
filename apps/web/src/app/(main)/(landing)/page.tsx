'use client';

import { Button } from "@/components/ui/button";
export default function Home() {

const ajeetClickHandler = (): void => {
  window.open("https://x.com/ajeetunc", "_blank");
}

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <div className="flex flex-col items-center justify-center w-[90%] h-[60%] space-y-20">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-5xl lg:text-7xl font-extrabold">Opensox</h1>
          <h1 className="text-xs lg:text-base lg:font-medium font-medium text-theme-color">Find perfect open-source project for yourself</h1>
        </div>
        <Button className="font-bold">Get Started</Button>
      </div>
      <div id="landing-footer" className="absolute bottom-7">
        <h1 className="text-sm">Created by <button className="underline text-theme-color" onClick={ajeetClickHandler}>Ajeet</button></h1>
      </div>
    </div>
  );
}