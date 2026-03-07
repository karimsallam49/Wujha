import { UpTownKeyInvestenmtData } from '../../Data/UpTownKeyInvestenmt';
import AnimationCard from '../AnimationCards/AnimationCards';

export const UpTownKeyInvestmen = () => {
   return (
   <AnimationCard title="Key Investment Advantages" textColor='text-light' bgColor='uptown-box'  items={UpTownKeyInvestenmtData} />
    );
}
