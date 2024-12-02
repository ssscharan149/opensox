"use client"
// import { XMarkIcon } from "@heroicons/react/24/outline"
// import { IconWrapper } from "../ui/IconWrapper"
import SidebarItem from "../sidebar/SidebarItem"

export default function Sidebar() {

    const aboutAjClickHandler = () => {
    }

    return (
        <div className="h-full w-[25%] z-50 flex flex-col rounded-r-lg bg-ox-black-1">
            {/* <div className="sidebar-header flex justify-between px-2 py-3 border-b border-ox-gray">
                <div className="flex items-center space-x-3">
                    <h1 className="text-md font-semibold text-ox-purple">Opensox</h1>
                </div>
                <div className="flex items-center justify-end space-x-3">
                    <IconWrapper>
                        <XMarkIcon className="size-4 text-ox-purple"></XMarkIcon>
                    </IconWrapper>
                </div>
            </div> */}

            <div className="sidebar-body flex-grow flex-col overflow-y-auto px-2 py-4">
                <SidebarItem itemName="Home" onclick={aboutAjClickHandler}></SidebarItem>
                <SidebarItem itemName="Projects" onclick={aboutAjClickHandler}></SidebarItem>
                <SidebarItem itemName="Request a feature" onclick={aboutAjClickHandler}></SidebarItem>
                <SidebarItem itemName="Support the project" onclick={aboutAjClickHandler}></SidebarItem>
                <SidebarItem itemName="About Ajeet" onclick={aboutAjClickHandler}></SidebarItem>
            </div>
        </div>
    )
}