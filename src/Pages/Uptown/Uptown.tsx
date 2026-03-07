import VideoHeroSection from "../../Components/VideoHeroSection/VideoHeroSection";
import uptownvideo from "../../assets/Videos/Uptown-Dpebzye7.mp4"
import uptownPic from "../../assets/Images/UPTOWN - logo-01.png"
import WelcomeSection from "../../Components/UpTownWelcomSection/UpTownWelcomSection";
import PropertySelector from "../../Components/PropertySelector/PropertySelector";
import { UpTowmLocationSection } from "../../Components/UpTownLocationSection/UpTownLocationSection";
import { useOutletContext } from "react-router-dom";
import LuxurySection from "../../Components/LuxurySection/LuxurySection";
import UpTownCustomSlider from "../../Components/UPTownCustomSlider/UpTownCustomSlider";
import HomeWaitingSection from "../../Components/HomeWaitingSection/HomeWaitingSection";
import { UpTownKeyInvestmen } from "../../Components/UpTownKeyInvestment/UpTownKeyInvestmen";
const Uptown = () => {
        const { scrollRef } = useOutletContext<{ scrollRef: React.RefObject<HTMLDivElement> }>();

  return (
   <div className="MainBorderRadius w-100 overflow-visible MainPadding ">
    <VideoHeroSection backgroundImage={uptownPic} overlay VideoSrc={uptownvideo as unknown as string}/>
    <WelcomeSection/>
    <UpTowmLocationSection scrollRef={scrollRef} />
    <PropertySelector/>
    <LuxurySection/>
    <UpTownCustomSlider/>
    <UpTownKeyInvestmen/>
    <HomeWaitingSection/>
    </div>
  );
};

export default Uptown;

