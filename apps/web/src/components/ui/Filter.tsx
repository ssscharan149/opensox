"use client";

import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useFilterInputStore } from "@/store/useFilterInputStore";

export default function Filter({
  filterName,
  filters,
  onClick,
}: {
  filterName: string;
  filters: string[];
  onClick?: () => void;
}) {
  const { updateFilters } = useFilterInputStore();
  const inputData: { [key: string]: string } = {};
  const recordFilterInput = (filter: string) => {
    inputData[filterName] = filter;
    updateFilters(inputData);
  };
  return (
    <div onClick={onClick}>
      <AccordionItem value={filterName} className="px-3">
        <AccordionTrigger className="text-sm font-medium">
          {filterName}
        </AccordionTrigger>
        <AccordionContent>
          <RadioGroup>
            {filters.map((filter) => (
              <div key={filter} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={filter}
                  id={filter}
                  onClick={() => {
                    recordFilterInput(filter);
                  }}
                />
                <Label
                  htmlFor={filter}
                  onClick={() => recordFilterInput(filter)}
                >
                  {filter}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
