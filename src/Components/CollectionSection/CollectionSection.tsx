// CollectionSection.tsx
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import uptownbackground from "../../assets/Images/uptownside.jpg";
import Central7background from "../../assets/Images/C7-01.jpg";
import Central7 from "../../assets/Images/central 7 logo-01.png";
import uptown from "../../assets/Images/UPTOWN - logo-01.png";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./CollectionStyle.css";

export const CollectionSection = () => {
  const [, setCurrentSlide] = useState(0);

  const mainSliderRef = useRef<Slider>(null);
  const thumbSliderRef = useRef<Slider>(null);
  const [nav1, setNav1] = useState<Slider>();
  const [nav2, setNav2] = useState<Slider>();

  useEffect(() => {
    if (mainSliderRef.current) setNav1(mainSliderRef.current);
    if (thumbSliderRef.current) setNav2(thumbSliderRef.current);
  }, []);

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <ChevronRight
        className={className}
        style={{ ...style, width: 40, height: 40, color: "white" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <ChevronLeft
        className={className}
        style={{ ...style, width: 40, height: 40, color: "white" }}
        onClick={onClick}
      />
    );
  };

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    beforeChange: (_oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    asNavFor: nav2,
  };

  const thumbSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    focusOnSelect: true,
    arrows: true,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "0px",
  };

  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      {/* Main Slider */}
      <Slider className="custom-slider" {...mainSettings} ref={mainSliderRef}>
        {/* Slide 1 */}
        <div className="slide-container">
          <div
            className="slide-bg"
            style={{ backgroundImage: `url(${uptownbackground})` }}
          ></div>
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <motion.div
              key="slide1-title"
              initial={{ opacity: 0, y: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="Collection-title">Residential</h1>
              <Link to="/Uptown" onClick={() => window.scrollTo(0, 0)}>
                <img
                  className="collection-slider-image uotownimage"
                  src={uptown}
                  alt="Uptown"
                />
              </Link>
              <Link to="/collections" className="discover-btn">
                Discover All Collection
              </Link>
            </motion.div>
            <div className="thumbnail-slider-container mt-3">
        <Slider className="thumbnail-slider" {...thumbSettings} ref={thumbSliderRef}>
          <div>
            <img src={Central7background} alt="Uptown" className="thumbnail-image" />
          </div>
      
          <div>
            <img src={uptownbackground} alt="Central7" className="thumbnail-image" />
          </div>
          <div>
            <img src={uptownbackground} alt="Central7" className="thumbnail-image" />
          </div>
          <div>
            <img src={Central7background} alt="Uptown" className="thumbnail-image" />
          </div>
        </Slider>
      </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide-container">
          <div
            className="slide-bg"
            style={{ backgroundImage: `url(${Central7background})` }}
          ></div>
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <motion.div
              key="slide2-title"
              initial={{ opacity: 0, y: -50, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="Collection-title">Commercial</h1>
              <img
                className="collection-slider-image"
                src={Central7}
                alt="Central7"
              />
              <Link to="/collections" className="discover-btn">
                Discover All Collection
              </Link>
            </motion.div>
          </div>
          <div className="thumbnail-slider-container mt-3">
        <Slider className="thumbnail-slider" {...thumbSettings} ref={thumbSliderRef}>
        <div>
            <img src={Central7background} alt="Uptown" className="thumbnail-image" />
          </div>
      
          <div>
            <img src={uptownbackground} alt="Central7" className="thumbnail-image" />
          </div>
          <div>
            <img src={Central7background} alt="Uptown" className="thumbnail-image" />
          </div>
          <div>
            <img src={uptownbackground} alt="Central7" className="thumbnail-image" />
          </div>
        </Slider>
      </div>
        </div>
        
      </Slider>

      
      
    </div>
  );
};
