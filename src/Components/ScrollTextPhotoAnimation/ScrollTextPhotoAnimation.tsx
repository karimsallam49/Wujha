import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "./ScrollTextPhotoAnimation.css";
import { useLocation } from "react-router-dom";

type WelcomSectionProps = {
  title?: string;
  textItems: string[];
  image: string;
  scrollRef?: React.RefObject<HTMLElement>;
};

const ImageTextScrollAnimation = ({
  title,
  textItems,
  image,
  scrollRef,
}: WelcomSectionProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location=useLocation()
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (paused || textItems.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % textItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, textItems.length]);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const imageX = useSpring(
    useTransform(scrollYProgress, [0, 0.5], ["-50%", "0%"]),
    { stiffness: 40, damping: 30 }
  );

  const imageScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.7, 1]),
    { stiffness: 30, damping: 20 }
  );

  const textX = useSpring(
    useTransform(scrollYProgress, [0.3, 0.45], [200, 0]),
    { stiffness: 120, damping: 22 }
  );

  const textOpacity = useSpring(
    useTransform(scrollYProgress, [0.3, 0.45], [0, 1]),
    { stiffness: 120, damping: 22 }
  );
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
 <div
      ref={containerRef}
       key={location.pathname}
      className="WelcomContainer overflow-visible"
      style={{ position: "relative", minHeight: "110vh", width: "100%", alignItems: "start" }}
    >
      {isMobile ? (
      
        <div
          className="WelcomContainerStatic"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            padding: "20px",
          }}
        >
          <img
            loading="lazy"
            src={image}
            alt={title}
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
          <div style={{ textAlign: "center", width: "100%", maxWidth: "600px" }}>
            <h1 className="c-head">{title}</h1>
            <ul className="ul-welcom" style={{ padding: 0, listStyle: "none",maxWidth: "600px" }}>
              {textItems.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.5",
                    marginBottom: "10px",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        
        <motion.div
          style={{
            position: "sticky",
            top: "10%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            height: "unset",
          }}
        >
          <motion.div style={{ maxWidth: "600px", x: textX, opacity: textOpacity }}>
            <h1 className="c-head">{title}</h1>
            <ul
              className="ul-welcom p-0"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ fontSize: "larger", lineHeight: "1.6", marginBottom: "20px", cursor: "pointer" }}
                >
                  {textItems[index]}
                </motion.li>
              </AnimatePresence>
            </ul>
          </motion.div>

          <motion.img
            loading="lazy"
            src={image}
            alt={title}
            className="w-first-image"
            style={{
              maxWidth: "60%",
              borderRadius: "20px",
              x: imageX,
              scale: imageScale,
              willChange: "transform",
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default ImageTextScrollAnimation;
