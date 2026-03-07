import BackGroundImage from "../../assets/Images/uptownside.jpg"
import SliderImage1 from "../../assets/Images/Uptown1.jpg"
import SliderImage2 from "../../assets/Images/Uptown2.jpg"
// import SliderImage3 from "../../assets/Images/3.jpg"
import SliderImage4 from "../../assets/Images/4.jpg"
import CollectionSlide from "../SliderComponent/SliderComponent"
import LogoImage from "../../assets/Images/UPTOWN - logo-01.png"
export const UpTownSlidercollection = () => {
    const thumbnailImages = [
    SliderImage1,
    SliderImage2,
    // SliderImage3,
    SliderImage4
    ]
  return (
   <CollectionSlide
  title="Residential"
  titleclass="whitecolor"
  logo={LogoImage}
  backgroundImage={BackGroundImage}
  discoverLink="/Uptown"
  thumbnailImages={thumbnailImages}
    DiscoverClass="MainBackGroundColor"
   />
  )
}
