import { useOutletContext } from "react-router-dom";
import LeadershipSection from "../Components/LeaderShip/LeaderShip";
import CoreValues from "../Components/OurCoreValues/OurCoreValues";
import { OurStoryHeroSection } from "../Components/OurStoryHeroSection/OurStoryHeroSection";
import TextOnlySection from "../Components/TextOnlySection/TextOnlySection";

const OurStory = () => {
    const { scrollRef } = useOutletContext<{ scrollRef: React.RefObject<HTMLDivElement> }>();

  return (
    <div className="MainBorderRadius w-100 overflow-visible MainPadding">
     <OurStoryHeroSection />
    <TextOnlySection
  years={12}
  description="Wujha Development has been a cornerstone of the Omani real estate market for over 12 years, building a legacy of excellence. Our journey began with a pioneering vision: to create sustainable, innovative communities that not only enrich modern living but also contribute to the economic growth of the Sultanate. We transform the local property landscape by introducing world-class specifications that serve both Omani citizens and international investors, positioning Oman as a global destination for real estate development"
/>

<CoreValues scrollContainerRef={scrollRef} />
<LeadershipSection/>
    </div>
  );
};

export default OurStory;

