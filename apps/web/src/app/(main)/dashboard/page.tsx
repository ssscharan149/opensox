"use client";

import DashboardContainer from "@/components/dashboard/DashboardContainer";

export default function Dashboard({ text }: { text: string }) {
  return (
    <div>
      <DashboardContainer projectsTitle={text}></DashboardContainer>
    </div>
  );
}
