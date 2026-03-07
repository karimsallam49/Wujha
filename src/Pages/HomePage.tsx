import { useOutletContext } from "react-router-dom";
import ScrollTextPhotoAnimation from "../Components/ScrollTextPhotoAnimation/ScrollTextPhotoAnimation";
import HeroVideoSection from "../Components/VideoHeroSection/VideoHeroSection";
import { UpTownSlidercollection } from "../Components/UPtownSliderCollection/UpTownSlidercollection";
import { KeyStatisticsComponent } from "../Components/KeyStatisticsComponent/KeyStatisticsComponent";
import { CentralSliderCollection } from "../Components/CentralSliderCollection/CentralSliderCollection";
import ProjectsComponent from "../Components/ProjectsComponent/ProjectsComponent";
import heroImage from '../assets/Images/OutStoryMobile.jpg'
import WujhaVideo from "../assets/Videos/Wujha Hero(5)(1) (1).mp4"
const HomePage = () => {
  const { scrollRef } = useOutletContext<{ scrollRef: React.RefObject<HTMLDivElement> }>();

  return (
    <div className="MainBorderRadius w-100 overflow-visible MainPadding">
    <HeroVideoSection VideoSrc={WujhaVideo as unknown as string}/>
    <ScrollTextPhotoAnimation scrollRef={scrollRef} textItems={["We exist to democratize the future of Omani living. By bridging the gap between 'aspirational' and 'attainable,' we create Tier-1 housing and commercial environments that remain within reach. Our mission is two-fold: to empower ownership through reasonable costs, and to serve as Oman’s window to the world, proving that local developments can rival global standards in sustainability, innovation, and quality."]} image={heroImage}/>
    <UpTownSlidercollection/>
    <KeyStatisticsComponent scrollContainerRef={scrollRef}/>
    <CentralSliderCollection/>
    <ProjectsComponent/>
    </div>
  );
};

export default HomePage;

