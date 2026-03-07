"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";



import Timelineimage1 from "../../assets/Images/TimeLineImage1-DBed8uYP.jpg";
import Timelineimage2 from "../../assets/Images/TimeLineImage2-YMKwxurH.jpg";
import Timelineimage3 from "../../assets/Images/TimeLineImage3-CE9jCUbY.jpg";
import parkingpic from "../../assets/Images/TimeLineImage4-HxIhTtfA.jpg";
import jacuzzipic from "../../assets/Images/TimeLineImage5-DOVfFJNB.jpg";

import "./UpTownCustomSlider.css";

const UpTownCustomSlider = () => {
  const slides = [
    {
      img: Timelineimage3,
      title: "SWIMMING POOL",
      description:
        "Relax in our luxurious swimming pool designed for comfort and style.",
    },
    {
      img: Timelineimage2,
      title: "CAFES & RESTAURANTS",
      description:
        "Enjoy premium dining experiences with a wide selection of cafes and restaurants.",
    },
    {
      img: Timelineimage1,
      title: "KIDS AREA",
      description: "Fun and safe areas for kids to play and explore.",
    },
    {
      img: parkingpic,
      title: "CINEMA",
      description:
        "State-of-the-art cinema facilities for ultimate entertainment.",
    },
    {
      img: jacuzzipic,
      title: "HEALTH CLUB",
      description:
        "Modern health club to maintain your fitness and wellbeing.",
    },
  ];

  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
const [slidesToShow, setSlidesToShow] = useState(4);
useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 576) {
      setSlidesToShow(2);
    } else if (width < 992) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(4);
    }
  };

  handleResize(); 
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  const mainSettings = {
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    pauseOnHover: false,
    asNavFor: nav2,
  };

 const thumbSettings = {
  slidesToShow,
  swipeToSlide: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 600,
  pauseOnHover: false,
  asNavFor: nav1,
  arrows: true,
  afterChange: (index: number) => setCurrentIndex(index),

  responsive: [
    {
      breakpoint: 992, 
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576, 
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
  return (
    <div className="timeline-wrapper">
      <div className="main-slider h-100">
        <Slider {...mainSettings} ref={setNav1}>
          {slides.map((slide, i) => (
            <div key={i} className="slide-item h-100">
              <div className="slide-content h-100">
                <div className="slide-image h-100">
                  <img src={slide.img} alt={slide.title} />
                </div>

                <div className="slide-text h-100">
                  <h2 className="BlackColor">{slide.title}</h2>
                  {/* <p>{slide.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="thumbs-container overflow-visible">
          <Slider {...thumbSettings} ref={setNav2}>
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`thumb-item h-100 ${
                  i === currentIndex ? "last-thumb" : ""
                }`}
                style={{
                  opacity: i === currentIndex ? 0 : 1,
                  pointerEvents: i === currentIndex ? "none" : "auto",
                }}
              >
                <img src={slide.img} alt={slide.title} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UpTownCustomSlider;
