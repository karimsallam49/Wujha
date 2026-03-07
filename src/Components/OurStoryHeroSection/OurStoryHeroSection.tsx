import ImageHeroSection from "../ImageHeroSection/ImageHeroSection";
import MobileHeroIageHero from "../../assets/Images/OutStoryMobile.jpg";
import heroImage from "../../assets/Images/photo3.jpg.jpeg";
import { useEffect, useState } from "react";

export const OurStoryHeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <ImageHeroSection
    CoverSize="100% 100%"
      backgroundImage={isMobile ? MobileHeroIageHero : heroImage}
    />
  );
};
