"use client"

import { Button } from "./button"
import { XMarkIcon } from '@heroicons/react/24/outline';
import { IconWrapper } from "./IconWrapper";

export default function FiltersContainer() {
    return (
        <div className="w-[90%] h-[70vh] flex-col rounded-lg border border-theme-borders relative">
            <div id="filter-header" className="flex w-full h-[10%] absolute top-0 left-0 border-b border-theme-borders justify-between items-center px-2">
                <h1 className="text-sm">Filters</h1>
                <IconWrapper>
                    <XMarkIcon className="size-4 text-theme-color"></XMarkIcon>
                </IconWrapper>
            </div>
            <div id="filter-footer" className="absolute bottom-0 left-0 w-full h-[10%] border-t border-theme-borders flex items-center px-2 justify-end">
                <Button className="font-semibold text-[15px] h-7 w-12 hover:bg-white-500">Search</Button>
            </div>
        </div>
    )
}