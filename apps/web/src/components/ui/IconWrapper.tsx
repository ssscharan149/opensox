"use client"

import { cn } from "@/lib/utils"
import React from "react";

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const IconWrapper = ({ children, className, ...props }: IconWrapperProps) => {
    return (
        <div
            className={cn(
                "p-0.5 rounded-sm border border-theme-borders hover:bg-gray-100 cursor-pointer",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}