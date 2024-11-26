"use client"

import { Button } from "../ui/button"
import { Bars3Icon } from '@heroicons/react/24/outline';
import { IconWrapper } from "../ui/IconWrapper"
import { ProfilePic } from "./ProfilePic";

export const DashboardHeader = () => {
    return (
        <div className="flex h-full w-full justify-between px-2">
            <div id="header-left-container" className="flex h-full w-[40%] justify-start space-x-3 items-center">
                <IconWrapper>
                    <Bars3Icon className="size-4 text-theme-color"></Bars3Icon>
                </IconWrapper>
                <h1 className="text-md font-medium" >Opensox</h1>
            </div>
            <div id="header-right-container" className="flex h-full w-[40%] items-center justify-end space-x-3">
                <Button className="font-semibold text-[15px] h-7 w-11 hover:bg-white-500 text-white bg-theme-color">Start</Button>
                <ProfilePic imageUrl="https://www.madlads.com/_next/image?url=https%3A%2F%2Fmadlads.s3.us-west-2.amazonaws.com%2Fimages%2F1.png&w=1200&q=75"></ProfilePic>
            </div>
        </div>
    )
}