"use client";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import FiltersContainer from "@/components/ui/FiltersContainer";
import { useFilterStore } from "@/store/useFilterStore";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showFilters } = useFilterStore();
  return (
    <div className="flex flex-col">
      <div className="flex w-full h-16">
        <DashboardHeader></DashboardHeader>
      </div>
      <div className="flex flex-row w-full">
        {showFilters && <FiltersContainer></FiltersContainer>}
        <aside className="w-[20%]">
          <Sidebar></Sidebar>
        </aside>
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
