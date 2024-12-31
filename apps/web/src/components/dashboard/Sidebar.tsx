"use client";

import Link from "next/link";
import SidebarItem from "../sidebar/SidebarItem";
import { usePathname } from "next/navigation";
import { IconWrapper } from "../ui/IconWrapper";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useShowSidebar } from "@/store/useShowSidebar";

const SIDEBAR_ROUTES = [
  {
    path: "/dashboard/home",
    label: "Home",
  },
  {
    path: "/dashboard/projects",
    label: "Projects",
  },
];

const getSidebarLinkClassName = (currentPath: string, routePath: string) => {
  const isActive = currentPath === routePath;
  return `${isActive ? "text-ox-purple" : "text-ox-white"}`;
};

export default function Sidebar() {
  const { showSidebar, setShowSidebar } = useShowSidebar();
  const pathname = usePathname();

  const reqFeatureHandler = () => {
    window.open("https://discord.gg/37ke8rYnRM", "_blank");
  };

  const supportClickHandler = () => {
    window.open(
      "https://buy.polar.sh/polar_cl_GYjSitlWxG4SViQOp19DyjNPfjv0DIXjwNj7ZY_8h8E",
      "_blank"
    );
  };
  const shareProjectHandler = () => {
    const msg: string =
      "Check opensox.in\n\nIt helps you find the perfect open-source project to contribute within 10 minutes.\n\ncreated by @ajeetunc";
    const xUrl = `https://x.com/intent/post?text=${encodeURIComponent(msg)}`;
    window.open(xUrl, "_blank");
  };

  return (
    <div
      className={`h-full w-[60%] lg:w-[50%] xl:w-auto flex flex-col rounded-r-lg bg-ox-black-1 border border-l-0 border-ox-gray z-50 ${showSidebar ? "fixed left-0 top-0 bottom-0" : ""}`}
    >
      <div className="sidebar-header flex justify-between px-2 py-3 border-b border-ox-gray block xl:hidden">
        <div className="flex items-center space-x-3">
          <h1 className="text-md font-semibold text-ox-white">Opensox</h1>
        </div>
        <div className="flex items-center justify-end space-x-3">
          <IconWrapper onClick={() => setShowSidebar(false)}>
            <XMarkIcon className="size-4 text-ox-purple"></XMarkIcon>
          </IconWrapper>
        </div>
      </div>

      <div className="sidebar-body flex-grow flex-col overflow-y-auto px-2 py-4">
        {SIDEBAR_ROUTES.map((route) => {
          return (
            <Link
              href={route.path}
              className={getSidebarLinkClassName(pathname, route.path)}
              key={route.path}
            >
              <SidebarItem itemName={route.label}></SidebarItem>
            </Link>
          );
        })}
        <SidebarItem
          itemName="Request a feature"
          onclick={reqFeatureHandler}
        ></SidebarItem>
        <SidebarItem
          itemName="Premium guidance"
          onclick={supportClickHandler}
        ></SidebarItem>
        <SidebarItem
          itemName="Share the love"
          onclick={shareProjectHandler}
        ></SidebarItem>
        <SidebarItem
          itemName="Twitter @ajeetunc"
          onclick={() => {
            window.open("https://x.com/ajeetunc", "_blank");
          }}
        ></SidebarItem>
      </div>
    </div>
  );
}
