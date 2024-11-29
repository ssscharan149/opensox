"use client"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative">
            <div className="flex w-full h-16">
                <DashboardHeader></DashboardHeader>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}