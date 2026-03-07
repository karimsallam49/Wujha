import  { useState } from "react";
import Slider from "react-slick";
import imageslider1 from "../../assets/Images/imageSlider1.webp";
import imageslider2 from "../../assets/Images/imageSlider2.webp";
import imageslider3 from "../../assets/Images/imageSlider3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WordSlider.css";

const WordSlider = () => {
  const slides = [
    { title: "Light.", img: imageslider1 },
    { title: "Space.", img: imageslider2 },
    { title: "Flexibility.", img: imageslider3 },
  ];

  const [hoverIndex, setHoverIndex] = useState(0);

    const settings = {
        slidesToShow: 2, 
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: "linear"
    };

  return (
    <div className="word-slider-wrapper">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${slides[hoverIndex].img})`,
        }}
      ></div>

      <Slider {...settings} className="word-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`word-slide ${hoverIndex === index ? "active" : ""}`}
            onMouseEnter={() => setHoverIndex(index)}
          >
            {slide.title}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WordSlider;
