"use client"

import DashboardContainer from '@/components/dashboard/DashboardContainer'
// import ProjectsContainer from '@/components/dashboard/ProjectsContainer'
// import FiltersContainer from '@/components/ui/FiltersContainer'
import Sidebar from '@/components/dashboard/Sidebar'

export default function Dashboard() {
    return (
        <div className='flex flex-row w-full h-[90vh]'>
            {/* <FiltersContainer></FiltersContainer> */}
            {/* <ProjectsContainer></ProjectsContainer> */}
            <Sidebar></Sidebar>
            <DashboardContainer></DashboardContainer>
        </div>
    )
}