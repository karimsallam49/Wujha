import { NewsAndMediaHeroSection } from "../Components/NewsAndMediaHeroSection/NewsAndMediaHeroSection";
import NewsAndMediaSection from "../Components/NewsAndMediaSection/NewsAndMediaSection";

const MediaCenter = () => {
  return (
    <div className="MainBorderRadius w-100 overflow-visible MainPadding ">
    <NewsAndMediaHeroSection/>
   <NewsAndMediaSection />
    </div>
  );
};

export default MediaCenter;

