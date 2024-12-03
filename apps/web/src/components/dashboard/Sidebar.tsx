"use client";
import Link from "next/link";
import SidebarItem from "../sidebar/SidebarItem";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const aboutAjClickHandler = () => {};

  return (
    <div className="h-full z-50 flex flex-col rounded-r-lg bg-ox-black-1">
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
          onclick={aboutAjClickHandler}
        ></SidebarItem>
        <SidebarItem
          itemName="Support the project"
          onclick={aboutAjClickHandler}
        ></SidebarItem>
        <SidebarItem
          itemName="About Ajeet"
          onclick={aboutAjClickHandler}
        ></SidebarItem>
      </div>
    </div>
  );
}
