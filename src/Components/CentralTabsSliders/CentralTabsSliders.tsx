"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { FaBars, FaTimes } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./CentralTabsSlider.css";
import { tabsData } from "../../Data/TabsData";

export default function CentralTabsSlider() {
  const [activeTab, setActiveTab] = useState(tabsData[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="central-wrapper position-relative">
      {!isMobile && (
        <div className="tabs-container">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${
                activeTab.id === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {isMobile && (
        <div className="burger-wrapper">
          <button
            className="burger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {menuOpen && (
            <div className="burger-menu">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  className={`burger-item ${
                    activeTab.id === tab.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(tab);
                    setMenuOpen(false);
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        effect="fade"
        navigation={!isMobile}
        pagination={{ clickable: true }}
        loop
        className="central-swiper "
      >
        {activeTab.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <img src={slide.image} alt={slide.title} />

              <div className="slide-overlay" />

              <div className="slide-content-central">
                <h1 className="central-title GreenColor">{slide.title}</h1>

                <ul className="central-points">
                  {slide.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="gap-3 buttons-central z-1 w-100 position-absolute d-flex justify-content-center">
                  <button className="px-4 py-2 btn SheetBtn-central">
                    Download Fact Sheet
                  </button>
                  <button className="px-4 py-2 btn DownloadBTn-central text-light">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
