import { useOutletContext } from "react-router-dom";
import ScrollTextPhotoAnimation from "../../Components/ScrollTextPhotoAnimation/ScrollTextPhotoAnimation"
import HeroVideoSection from "../../Components/VideoHeroSection/VideoHeroSection";
import CentralVideo from "../../assets/Videos/C7-Chwk3ci-.mp4"
import CentralScrollImage from "../../assets/Images/centralseconimage-HrOb0zG4.webp"
import CentralTabsSlider from "../../Components/CentralTabsSliders/CentralTabsSliders";
import { MapCentralPage } from "../../Components/MapCentralPage/MapCentralPage";
import { CentralSliderCollection } from "../../Components/CentralSliderCollection/CentralSliderCollection";
import { CentralKeyInvestment } from "../../Components/CentralKeyInvestenmt/CentralKeyInvestment";
import CentralBrandSystem from "../../Components/CentralBrandSystem/CentralBrandSystem";
export const CentralPage = () => {
      const { scrollRef } = useOutletContext<{ scrollRef: React.RefObject<HTMLDivElement> }>();

  return (
     <div className="MainBorderRadius w-100 overflow-visible MainPadding ">
    <HeroVideoSection VideoSrc={CentralVideo as unknown as string}/>
    <ScrollTextPhotoAnimation title="REDEFINING CORPORATE WORKSPACES" scrollRef={scrollRef} textItems={[`Central 7 is Oman’s first and only Tier-1 Office Building, setting a new benchmark for sustainable commercial development. Spanning 24,000 SQM, it redefines the corporate environment for unicorns, multinationals, and elite regional HQs. By combining advanced sustainability measures with premium infrastructure, Central 7 offers a future-proof ecosystem where business excellence aligns with environmental stewardship.
Applying for LEED Gold Certification, Central 7 prioritizes environmental responsibility by utilizing renewable energy sources, including solar power systems and energy-efficient LED lighting throughout. The architecture features 4-meter high ceilings designed to maximize natural light entry throughout the day, significantly reducing energy consumption while creating a vibrant, productive workspace.`]} image={CentralScrollImage}/>
    <CentralTabsSlider/>
    <MapCentralPage scrollRef={scrollRef} />
     <CentralSliderCollection/>
     <CentralKeyInvestment/>
     <CentralBrandSystem/>
    </div>
  )
}

export default CentralPage;
