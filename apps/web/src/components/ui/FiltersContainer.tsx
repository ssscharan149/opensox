"use client";

import { Button } from "./button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IconWrapper } from "./IconWrapper";
import { Accordion } from "./accordion";
import Filter from "./Filter";
import { useFilterStore } from "@/store/useFilterStore";
import { useFilterInputStore } from "@/store/useFilterInputStore";
import { useGetProjects } from "@/hooks/useGetProjects";

export default function FiltersContainer() {
  const handleClickWipFilters = () => {
    window.alert("Coming very soon! :)");
  };

  const { toggleShowFilters } = useFilterStore();
  const { filters } = useFilterInputStore();
  const getProjects = useGetProjects();

  const handleSearchProjects = async () => {
    try  {
      const projects = await getProjects(filters);
      console.log(projects);
    } catch (error) {
      console.error(error);
  }
  };

  // create shared types in nextjs
  // pass the filters to the getProjects function
  // create a function that take user inputs, tailer to what api expects and the

  return (
    <div className="w-80 h-96 z-10 flex flex-col rounded-lg border border-ox-gray absolute bg-ox-black-1 right-20">
      <div
        id="filter-header"
        className="flex w-full h-[10%] border-b border-ox-gray justify-between items-center px-2"
      >
        <h1 className="text-sm text-ox-purple font-semibold">Filters</h1>
        <IconWrapper>
          <XMarkIcon
            className="size-4 text-ox-purple"
            onClick={() => toggleShowFilters()}
          ></XMarkIcon>
        </IconWrapper>
      </div>

      <div className="flex-1 overflow-y-auto">
        <Accordion type="multiple" className="w-full">
          <Filter
            filterName="Tech stack"
            filters={[
              "Javascript",
              "Typescript",
              "Python",
              "Go",
              "Rust",
              "Java",
              "C#",
              "C++",
              "C",
              "Php",
              "Swift",
              "Kotlin",
              "Ruby",
              "Scala",
              "Html",
              "Elixir",
            ]}
          ></Filter>
          <Filter
            filterName="Popularity"
            filters={["Very low", "Low", "Moderate", "High", "Very high"]}
          ></Filter>
          <Filter
            filterName="Competition"
            filters={["Very low", "Low", "Moderate", "High", "Very high"]}
          ></Filter>
          <Filter
            filterName="Stage"
            filters={["Very early", "Early", "Emerging", "Established"]}
          ></Filter>
          <Filter
            filterName="Activity"
            filters={["Highest", "High", "Normal", "low"]}
          ></Filter>
          <Filter
            filterName="Hire contributors"
            filters={[]}
            onClick={handleClickWipFilters}
          ></Filter>
          <Filter
            filterName="Funding"
            filters={[]}
            onClick={handleClickWipFilters}
          ></Filter>
          <Filter
            filterName="Trending"
            filters={[]}
            onClick={handleClickWipFilters}
          ></Filter>
        </Accordion>
      </div>

      <div
        id="filter-footer"
        className="w-full h-[10%] border-t border-ox-gray flex items-center px-2 justify-end"
      >
        <Button
          className="font-semibold text-white bg-ox-purple text-[14px] h-6 w-12 hover:bg-white-500"
          onClick={() => console.log(filters)}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
