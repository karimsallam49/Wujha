import { motion, useInView, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import "./LocationSection.css";
import { useOutletContext } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type Location = {
  time: string;
  place: string;
};

interface LocationSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgrounColor: string;
  image: string;
  locations: Location[];
}

const MapSection = ({
  title = "Wujha",
  subtitle = "Location",
  image,
  backgrounColor,
  description = "INTRODUCING A UNIQUE VISION IN THE HEART OF CAIRO’S WEST SIDE",
  locations,
}: LocationSectionProps) => {
  const { scrollRef } = useOutletContext<any>();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const isInView = useInView(containerRef, { amount: "all",   once: true});
  const [isMobile, setIsMobile] = useState(false);

  const rawScale = useTransform(scrollYProgress, [0, 0.25], [5.5, 1]);
  const rawRightImage = useTransform(scrollYProgress, [0.3, 0.34], ["30%", "2%"]);
  const rawBorderRadius = useTransform(scrollYProgress, [0, 0.29], ["0%", "1rem"]);
  const rawImgHeight = useTransform(scrollYProgress, [0, 0.29], ["100vh", "70vh"]);
  const rawOpacityText = useTransform(scrollYProgress, [0.27, 0.3], [0, 1]);

  const springConfig = { stiffness: 60, damping: 20, mass: 0.5 };
  const scale = useSpring(rawScale, springConfig);
  const rightImage = useSpring(rawRightImage, springConfig);
  const borderRadius = useSpring(rawBorderRadius, springConfig);
  const imgHeight = useSpring(rawImgHeight, springConfig);
  const opacityText = useSpring(rawOpacityText, springConfig);

  const [startCount, setStartCount] = useState(false);

  useMotionValueEvent(opacityText, "change", (latest) => {
    if (latest >= 0.99 && !startCount) {
      setStartCount(true);
    }
  });
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (isMobile) {
  return (
    <div
      className="px-4 py-5 text-white MainBorderRadius m-2"
      style={{ backgroundColor: backgrounColor }}
    >
      <div className="mb-2">
        <img
        loading="lazy"
          src={image}
          alt=""
          className="w-100 rounded shadow"
          style={{ height: "300px", objectFit: "cover" }}
        />
      </div>

      <div className="text-center">
        <h3 className="mb-3 fw-bold " >
          {title} <br />
          <span className="fs-4 fw-semibold">{subtitle}</span>
        </h3>

        <p className="mb-2 text-light">{description}</p>

        <div className="row justify-content-start">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="col-6 2 d-flex flex-column align-items-center"
            >

              <h5 className="fw-bold">
                {loc.time} <span>Min</span>
              </h5>

              <div className="time-custom-map"></div>

              <ul className="places-list text-center p-0">
                {loc.place.split(",").map((placePart, i) => (
                  <li key={i}>{placePart.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  return (
    
    <div
      className="px-4 py-5 overflow-visible text-white position-relative"
      style={{ height: "120vh" }}
    >
      <div
        ref={containerRef}
        className="location-container d-flex align-items-center justify-content-center position-sticky w-100"
        style={{ backgroundColor: backgrounColor }}
      >
        <div className="w-100 h-100 d-flex">
          <div className="position-relative align-items-center w-100">
            <motion.div
              initial={{ opacity: 0, left: "0", bottom: "5%" }}
              className="left-0 text-center position-absolute d-flex flex-column justify-content-between"
              style={
                isInView
                  ? { opacity: opacityText, bottom: "5%", left: "0", height: "70vh", width: "45%" }
                  : {}
              }
            >
              <h4 className="mb-1 MainTextSize fw-bold display-5">
                {title} <br />
                <span className="fs-2 fw-semibold">{subtitle}</span>
              </h4>
              <p className="mb-1 text-light p-1">{description}</p>

              <div className="row justify-content-center">
                {locations.map((loc, index) => (
                  <motion.div
                    className="mb-2 col-6 flex-column d-flex align-items-center"
                    key={index}
                    initial={{ opacity: 0 }}
                    style={isInView ? { opacity: opacityText } : {}}
                  >
                    {startCount && (
                      <div className="w-100 d-flex text-center align-items-center justify-content-center p-1">

                      <motion.div
                        className="fw-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="time-number text-center">

                        <CountUp start={0} end={parseInt(loc.time)} duration={2} />
                        </span>
                        <span> Min</span>
                      </motion.div>
                      </div>

                    )}
                    <div className="time-custom-map"></div>
                    <ul className="places-list p-2">
                      {loc.place.split(",").map((placePart, i) => (
                        <li key={i}>{placePart.trim()}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="text-center w-50 d-flex align-items-center justify-content-center position-absolute"
              style={isInView ? { scale, right: rightImage, top: "10%" } : {}}
              initial={{ right: "100%", scale: 5.5, top: "10%" }}
            >
              <motion.img
                src={image}
                alt=""
                className="rounded shadow"
                style={{
                  width: "100%",
                  height: imgHeight,
                  borderRadius,
                  objectFit: "contain",
                  willChange: "transform, opacity, border-radius, height",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
