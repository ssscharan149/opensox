"use client"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
// import Sidebar from "@/components/dashboard/Sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative">
            {/* <Sidebar></Sidebar> */}
            <div className="flex w-full h-11 border-b border-theme-borders">
                <DashboardHeader></DashboardHeader>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}