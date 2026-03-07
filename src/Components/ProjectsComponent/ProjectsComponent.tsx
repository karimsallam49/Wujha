"use client";

import { useState } from "react";
import Slider from "react-slick";
import { awards } from "../../Data/ProjectsData";
import "./ProjectsComponent.css";

const VISIBLE_COUNT = 5;

export default function ProjectsComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleScrollUp = () => {
    setStartIndex(prev => Math.max(prev - 1, 0));
  };

  const handleScrollDown = () => {
    setStartIndex(prev =>
      Math.min(prev + 1, awards.length - VISIBLE_COUNT)
    );
  };

  return (
    <div className="w-100 timeline-wrapper-awards MainMarignTop">
      <h1 className="text-center MainColor">
        Our portfolio: live the difference
      </h1>

      <div className="timeline-horizontal-container d-none d-md-flex">
        <div className="timeline-display">
          <img
          loading="lazy"
            className="timeline-image"
            src={awards[activeIndex].bgImage}
            alt={awards[activeIndex].title}
          />

          <div className="timeline-content">
            <h2>{awards[activeIndex].title}</h2>
            <p>{awards[activeIndex].awarsdescription}</p>
          </div>
        </div>

 <div className="timeline-divider-wrapper">
  <div className="timeline-divider" />

  <div className="timeline-years">
    {awards
      .slice(startIndex, startIndex + VISIBLE_COUNT)
      .map((item, index) => (
        <div
          key={item.id}
          className={`timeline-year-item ${
            activeIndex === startIndex + index ? "active" : ""
          }`}
        >
          {item.year && <>— {item.year}</>}
        </div>
      ))}
  </div>
</div>

        <div className="timeline-list-wrapper">
          <button
            className="scroll-btn up"
            onClick={handleScrollUp}
            disabled={startIndex === 0}
          >
            ▲
          </button>

          <div className="timeline-list">
            {awards
              .slice(startIndex, startIndex + VISIBLE_COUNT)
              .map((item, index) => {
                const realIndex = startIndex + index;

                return (
                  <div
                    key={item.id}
                    className={`timeline-list-item ${
                      activeIndex === realIndex ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(realIndex)}
                  >
                    <img
                    loading="lazy"
                      className="timeline-image-list"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                );
              })}
          </div>

          <button
            className="scroll-btn down"
            onClick={handleScrollDown}
            disabled={startIndex >= awards.length - VISIBLE_COUNT}
          >
            ▼
          </button>
        </div>
      </div>

      <div className="d-md-none">
        <Slider {...sliderSettings}>
          {awards.map(item => (
            <div key={item.id}>
              <div className="mobile-award-slide">
                <img
                loading="lazy"
                  className="mobile-award-bg Main"
                  src={item.bgImage}
                  alt={item.title}
                />

                <div className="mobile-award-overlay">
                  <h2>{item.title}</h2>
                  <p>{item.awarsdescription}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
