"use client";

import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Filter({
  filterName,
  filters,
  onClick,
}: {
  filterName: string;
  filters: string[];
  onClick?: () => void;
}) {
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
                <RadioGroupItem value={filter} id={filter} />
                <Label 
                  htmlFor={filter} 
                  className="text-xs font-normal cursor-pointer"
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