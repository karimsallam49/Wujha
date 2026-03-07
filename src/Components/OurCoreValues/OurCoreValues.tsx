"use client";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import accImg1 from "../../assets/Images/deveolpment .jpg";
import accImg3 from "../../assets/Images/customer .jpg";
import accImg4 from "../../assets/Images/commitment .jpg";
import accImg5 from "../../assets/Images/trust.png";

import "./CoreValues.css";

const CoreValues = ({ scrollContainerRef }:any) => {
  const [slidesCount, setSlidesCount] = useState(3);
useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setSlidesCount(1); 
    } else if (width < 1200) {
      setSlidesCount(2); 
    } else {
      setSlidesCount(3); 
    }
  };

  handleResize(); 
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  const values = [
    {
      title: "Development",
      description:
        "We focus on creating sustainable, innovative communities that contribute to the prosperity of Muscat and the wider Sultanate of Oman.",
      image: accImg1,
    },
    {
      title: "Commitment",
      description:
        "Our dedication is reflected in every step of the development journey, ensuring every project is executed with precision and care.",
      image: accImg4,
    },
    {
      title: "Trust",
      description:
        "We operate with transparency, reliability, and integrity. Trust is the cornerstone of our relationships with clients and partners.",
      image: accImg5,
    },
    {
      title: "Customer Satisfaction",
      description:
        "We listen closely to our clients to deliver personalized solutions that exceed expectations, turning every investment into a rewarding experience.",
      image: accImg3,
    },
  ];

  const sectionRef = scrollContainerRef || useRef<HTMLDivElement>(null);
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next glass-arrow" style={{maxHeight:"20px"}} onClick={onClick}>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev glass-arrow" style={{maxHeight:"20px"}} onClick={onClick}>
    </div>
  );
};
 const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 700,
  slidesToShow: slidesCount,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  centerMode: true,
  centerPadding: "0px",
  className: "ourcoreswiper",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

  return (
    <div
      ref={sectionRef}
      className="sectionsContainer glassy-card corevalues-section d-flex flex-column"
    >
      <h2 className="core-heading whitecolor text-center mb-4 MainTextSize">
        Our Core Values
      </h2>

      <Slider {...sliderSettings}>
        {values.map((item, index) => (
          <div key={index} className="custom-col image-gradient-overlay">
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "1rem",
                height: "500px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <motion.div
                className="customcolumnoverlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(46,43,43,0.8)",
                  transition: "background 0.3s ease-out",
                }}
                whileHover={{
                  background: "rgba(31, 30, 30, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              />

              <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <h1 className="text-center value-title whitecolor w-100">
                  {item.title}
                </h1>
              </div>

              <div className="custom-hover align-items-center box-text-core d-flex flex-column">
                <h3 className="hover-text hover-title">{item.description}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoreValues;
