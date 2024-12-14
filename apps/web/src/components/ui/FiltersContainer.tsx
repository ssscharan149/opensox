"use client";

import { Button } from "./button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IconWrapper } from "./IconWrapper";
import { Accordion } from "./accordion";
import Filter from "./Filter";
import { useFilterStore } from "@/store/useFilterStore";
import { useFilterInputStore } from "@/store/useFilterInputStore";
import { useGetProjects } from "@/hooks/useGetProjects";
import {
  convertUserInputToApiInput,
  convertApiOutputToUserOutput,
} from "@/utils/converter";
import { useRouter } from "next/navigation";
import { useRenderProjects } from "@/store/useRenderProjectsStore";
import { useProjectsData } from "@/store/useProjectsDataStore";

export default function FiltersContainer() {
  const handleClickWipFilters = () => {
    window.alert("Coming very soon! :)");
  };

  const { toggleShowFilters } = useFilterStore();
  const { setRenderProjects } = useRenderProjects();
  const { filters } = useFilterInputStore();
  const { setData } = useProjectsData();
  const getProjects = useGetProjects();
  const router = useRouter();

  const handleSearchProjects = async () => {
    try {
      const modifiedFilters = convertUserInputToApiInput(filters);
      const response = await getProjects(modifiedFilters);
      const projects = response;
      const modifiedProjects = convertApiOutputToUserOutput(projects, filters);
      console.log("projects", modifiedProjects);
      console.log("filters", filters);
      // router.push("/projects");
      setData(modifiedProjects);
      setRenderProjects(true);
    } catch (error) {
      console.error(error);
    }
  };

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
            filters={["Highest", "High", "Normal", "Low"]}
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
          onClick={handleSearchProjects}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
