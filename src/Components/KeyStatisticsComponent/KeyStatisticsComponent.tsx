"use client";

import "./KeyStaticStyle.css";
import { FaBuilding, FaHome, FaChartLine, FaMapMarkedAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: <FaChartLine className="stat-icon" />,
    count: 12,
    label: "Years ",
    prefix: "+",
    suffix: "",
    description: "of industry leadership.",
  },
  {
    icon: <FaBuilding className="stat-icon" />,
    count: 21,
    label: "Projects",
    prefix: "+",
    suffix: "",
    description: "successfully developed and delivered.",
  },
  {
    icon: <FaHome className="stat-icon" />,
    count: 4400,
    label: "Units",
    prefix: "+",
    suffix: "",
    description: "launched across residential and commercial sectors.",
  },
  {
    icon: <FaMapMarkedAlt className="stat-icon" />,
    count: 700000,
    label: "SQM ",
    prefix: "+",
    suffix: "",
    description: "Total Developed Area.",
  },
];

export const KeyStatisticsComponent = ({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLElement>;
}) => {
 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

 
  const [ref, desktopInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const inView = isMobile ? true : desktopInView;

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "100%",
          marginTop: "10px",
        }}
      >
        {isMobile ? (
          <h2             className="scroll-reveal-container why-title"
>
            12 YEARS. 21 PROJECTS. ONE VISION.
          </h2>
        ) : (
          <ScrollReveal
            className="scroll-reveal-container why-title"
            scrollContainerRef={scrollContainerRef}
            baseOpacity={0}
            enableBlur={true}
            baseRotation={10}
            blurStrength={10}
          >
            12 YEARS. 21 PROJECTS. ONE VISION.
          </ScrollReveal>
        )}

        {isMobile ? (
          <p className="scroll-reveal-container why-desc text-dark">
            For over 12 years, Wujha Development has shaped Oman's real estate
            landscape, blending modern innovation with timeless design to create
            vibrant, sustainable communities.
          </p>
        ) : (
          <ScrollReveal
            className="scroll-reveal-container why-desc text-dark"
            scrollContainerRef={scrollContainerRef}
            baseOpacity={0}
            enableBlur={true}
            baseRotation={10}
            blurStrength={10}
          >
            For over 12 years, Wujha Development has shaped Oman's real estate
            landscape, blending modern innovation with timeless design to create
            vibrant, sustainable communities. We go beyond construction to
            deliver substantial value, developing inspirational destinations
            that enhance quality of life and contribute to the Sultanate's
            ambitious future.
          </ScrollReveal>
        )}

        <div className="key-statistics-container" ref={!isMobile ? ref : undefined}>
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center counter">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  className="mt-3 mb-3 col-sm-6 d-flex align-items-center justify-content-center company-counts-box-main"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="company-counts-box d-flex align-items-center justify-content-center w-100">
                    <div className="icons">{item.icon}</div>
                    <div className="x-devider"></div>
                    <div className="company-counts-text">
                      <h2 className="company-count">
                        {item.prefix}
                        <span className="count">
                          {inView ? (
                            <CountUp
                              end={item.count}
                              duration={2}
                              separator=","
                            />
                          ) : (
                            0
                          )}{" "}
                          {item.label}
                        </span>
                        {item.suffix}
                      </h2>
                      <span className="company-discribe">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
