import ProjectsTimeline from '../../Components/AllProjectsTimeLine/AllProjectsTimeLine'
import { AllProjectsHeroSection } from '../../Components/AllProjectsHeroSection/AllProjectsHeroSection'

export const AllProjects = () => {
  return (
    <div className='MainBorderRadius w-100 overflow-visible MainPadding  '>
      <AllProjectsHeroSection />
      <ProjectsTimeline />
    </div>
  )
}

export default AllProjects;
