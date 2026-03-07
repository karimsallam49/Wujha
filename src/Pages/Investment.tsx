import { InvestmentHeroSection } from "../Components/InvestmentHeroSection/InvestmentHeroSection";
import InvestmentSection from "../Components/InvestmentSection/InvestmentSection";

const Investment = () => {
  return (
   <div className="MainBorderRadius w-100 overflow-visible MainPadding ">
    <InvestmentHeroSection/>
    <InvestmentSection/>
   </div>
  );
};

export default Investment;

