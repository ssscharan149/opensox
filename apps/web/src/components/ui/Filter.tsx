"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./accordion";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

export default function Filter({
    filterName,
    filters,
}: {
    filterName: string;
    filters: string[];
}) {
    return (
        <div>
            <AccordionItem value={filterName} className="px-3">
                <AccordionTrigger className="text-sm font-medium">
                    {filterName}
                </AccordionTrigger>
                <AccordionContent>
                    {filters.map((filter) => (
                        <div key={filter} className="flex items-center space-x-2">
                            <Checkbox id={filter} />
                            <Label htmlFor={filter} className="text-sm font-normal">
                                {filter}
                            </Label>
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </div>
    );
}