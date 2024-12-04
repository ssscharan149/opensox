"use client";

import { Button } from "../ui/button";
import { ProfilePic } from "./ProfilePic";
import { useFilterStore } from "@/store/useFilterStore";

export const DashboardHeader = () => {
  const { showFilters, setShowFilters, toggleShowFilters } = useFilterStore();
  const startHandler = () => {
    setShowFilters(true);
  };

  return (
    <div className="flex h-full w-full justify-between px-6">
      <div
        id="header-left-container"
        className="flex h-full w-[40%] justify-start space-x-3 items-center"
      >
        {/* <IconWrapper>
                    <Bars3Icon className="size-4 text-ox-purple"></Bars3Icon>
                </IconWrapper> */}
        <h1 className="text-2xl font-medium">Opensox</h1>
      </div>
      <div
        id="header-right-container"
        className="flex h-full w-[40%] items-center justify-end space-x-8"
      >
        <Button
          className="font-semibold text-[15px] h-8 w-16 hover:bg-white-500 text-white bg-ox-purple cursor-pointer"
          onClick={startHandler}
        >
          Start
        </Button>
        <ProfilePic imageUrl="https://www.madlads.com/_next/image?url=https%3A%2F%2Fmadlads.s3.us-west-2.amazonaws.com%2Fimages%2F1.png&w=1200&q=75"></ProfilePic>
      </div>
    </div>
  );
};
