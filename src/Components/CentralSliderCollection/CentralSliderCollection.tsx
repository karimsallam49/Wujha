import BackGroundImage from "../../assets/Images/C7-Centralbg.jpg"
import SliderImage1 from "../../assets/Images/251120_Central 7_ Scene 1 day.jpg"
import SliderImage2 from "../../assets/Images/251120_Central 7_ Scene 1 night.jpg"
import SliderImage3 from "../../assets/Images/251124_Central 7_Lifestyle.jpg"
import CollectionSlide from "../SliderComponent/SliderComponent"
import LogoImage from "../../assets/Images/central 7 logo-01-BT3Hemdi.png"
export const CentralSliderCollection = () => {
    const thumbnailImages = [
    SliderImage1,
    SliderImage2,
    SliderImage3,
    ]
  return (
      <CollectionSlide
  title="Commerical"
  titleclass="GreenColor"
  logo={LogoImage}
  backgroundImage={BackGroundImage}
  discoverLink="/Central7"
  thumbnailImages={thumbnailImages}
    DiscoverClass="GreenBackGroundColor"
   />
  )
}
