"use client"

export default function SidebarItem({itemName, onclick}: {itemName: string, onclick: () => void}) {
    return (
        <div className="w-full h-[6vh] flex items-center rounded-lg cursor-pointer" onClick={onclick}>
            <h1 className="text-sm font-medium hover:text-theme-color pl-4">{itemName}</h1>
        </div>
    )
}