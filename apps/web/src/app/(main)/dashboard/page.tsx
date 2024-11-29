"use client"

// import ProjectsContainer from '@/components/dashboard/ProjectsContainer'
import ProjectsContainer from '@/components/dashboard/ProjectsContainer'
import Sidebar from '@/components/dashboard/Sidebar'
// import FiltersContainer from '@/components/ui/FiltersContainer'

export default function Dashboard() {
    return (
        <div className='flex flex-row'>
            {/* <FiltersContainer></FiltersContainer> */}
            <Sidebar></Sidebar>
            <ProjectsContainer></ProjectsContainer>
        </div>
    )
}