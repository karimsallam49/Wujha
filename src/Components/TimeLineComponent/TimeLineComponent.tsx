import  { useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PropertyTimeline.css";

import Timelineimage1 from "../../assets/Images/TimeLineImage1.jpg";
import Timelineimage2 from "../../assets/Images/TimeLineImage2.jpg";
import Timelineimage3 from "../../assets/Images/TimeLineImage3.jpg";
import parkingpic from "../../assets/Images/Parking.jpg";
import jacuzzipic from "../../assets/Images/Jacusy.jpg";

export default function PropertyTimeline() {
  const data = [
    { img: Timelineimage3, title: "SWIMMING POOL" },
    { img: Timelineimage2, title: "CAFES & RESTAURANTS" },
    { img: Timelineimage1, title: "Kids area" },
    { img: parkingpic, title: "MUSIC THEATRE" },
    { img: jacuzzipic, title: "HEALTH CLUB" },
  ];

  const autoplaySpeed = 3000; 
  const [active, setActive] = useState(0);

  const settings = {
    vertical: true,
    infinite: true,
    slidesToShow: 3,
    draggable: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed,
    beforeChange: (_current: any, next: number) => {
      setActive(next);
    },
  };
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="timeline-container w-100">
         <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          fontSize: "18px",
          fontFamily: "sans-serif",
          color: "#555",
        }}
      >
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ←
        </button>

        <span style={{ minWidth: "40px", textAlign: "center" }}>
          {String(active + 1).padStart(2, "0")}
        </span>
        /
        <span>{String(data.length).padStart(2, "0")}</span>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          →
        </button>
      </div>
          <svg
      id="svg"
      viewBox="0 0 1024 1024"
      className="b-services-announcements--collection--circle"
    >
      <path
        transform="rotate(-180 512 512)"
        className="b-services-announcements--collection--circle--inside"
        id="circlePath"
        d="M1024,512 C1024,794.76979 794.76979,1024 512,1024 229.23021,1024 0,794.76979 0,512 0,229.23021 229.23021,0 512,0 794.76979,0 1024,229.23021 1024,512 z"
      ></path>
    </svg>
      <Slider ref={sliderRef} {...settings} className="w-100 slider-contain h-100">
        {data.map((item, index) => (
          <div
            key={index}
            className={`timeline-card ${active === index ? "active" : ""}`}
          >
            <div className="timeline-image-wrapper">
              {active === index && (
             <svg
  className="progress-ring"
  width="280"   
  height="280" 
  viewBox="0 0 280 280"
>
  <motion.circle
    key={active}
    stroke="#302E2D"
    strokeWidth="4"
    fill="transparent"
    r="110"       
    cx="152"     
    cy="117"     
    strokeDasharray={2 * Math.PI * 130} 
    strokeDashoffset={2 * Math.PI * 130}
    animate={{ strokeDashoffset: 0 }}
    transition={{
      duration: autoplaySpeed / 1000,
      ease: "linear",
    }}
    strokeLinecap="round"
  />
</svg>

              )}

              {/* The Image */}
              <div className="timeline-image">
                <img src={item.img} alt={item.title} />
              </div>
            </div>

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>
Modern spaces blending comfort and elegance in one.
              </p>
            </div>
          </div>
        ))}
      </Slider>
     
    </div>
  );
}
