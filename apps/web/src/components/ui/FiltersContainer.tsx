"use client";

import { Button } from "./button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IconWrapper } from "./IconWrapper";
import { Accordion } from "./accordion";
import Filter from "./Filter";

export default function FiltersContainer() {
    return (
        <div className="w-[90%] h-[70vh] flex flex-col rounded-lg border border-theme-borders relative bg-theme-cards">
            <div
                id="filter-header"
                className="flex w-full h-[10%] border-b border-theme-borders justify-between items-center px-2"
            >
                <h1 className="text-sm text-theme-color font-semibold">Filters</h1>
                <IconWrapper>
                    <XMarkIcon className="size-4 text-theme-color"></XMarkIcon>
                </IconWrapper>
            </div>

            <div className="flex-1 overflow-y-auto">
                <Accordion type="multiple" className="w-full">
                    <Filter filterName="Tech stack" filters={["py", "ts", "js"]}></Filter>
                    <Filter filterName="Competitiveness" filters={["high", "low"]}></Filter>
                    <Filter filterName="Tech stack" filters={["py", "ts", "js"]}></Filter>
                    <Filter filterName="Competitiveness" filters={["high", "low"]}></Filter>
                    <Filter filterName="Tech stack" filters={["py", "ts", "js"]}></Filter>
                    <Filter filterName="Competitiveness" filters={["high", "low"]}></Filter>
                    <Filter filterName="Tech stack" filters={["py", "ts", "js"]}></Filter>
                    <Filter filterName="Competitiveness" filters={["high", "low"]}></Filter>
                    <Filter filterName="Tech stack" filters={["py", "ts", "js"]}></Filter>
                    <Filter filterName="Competitiveness" filters={["high", "low"]}></Filter>
                    <Filter filterName="Tech stack" filters={["py", "ts", "js"]}></Filter>
                    <Filter filterName="Competitiveness" filters={["high", "low"]}></Filter>
                </Accordion>
            </div>

            <div
                id="filter-footer"
                className="w-full h-[10%] border-t border-theme-borders flex items-center px-2 justify-end"
            >
                <Button className="font-semibold text-white bg-theme-color text-[14px] h-6 w-12 hover:bg-white-500">
                    Search
                </Button>
            </div>
        </div>
    );
}
