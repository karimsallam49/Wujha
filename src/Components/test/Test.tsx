import { useScroll, useTransform, motion } from "framer-motion";
import image from "../../assets/Images/form.png";
import "./test.css";
import { useEffect } from "react";
import { useRef } from "react";

export const WhyComponent = () => {
   const containerScrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerScrollRef,
    offset: ["start end", "end start"],
  }); 

  const width = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);
useEffect(()=>{
  console.log(width.get());
  
},[width])
  return (
    
    <div ref={containerScrollRef} className="scroll-section">
      <motion.div
        className="sticky-image"
        style={{ width: width.get()}}
      >
        <img src={image} alt="Sticky" />
      </motion.div>

      <div className="scroll-content">
        <h2>Why WUJHA?</h2>
        <p>At Wujha, we aspire to offer what is out of the ordinary...</p>
        <p>Another line...</p>
      </div>
    </div>
  );
};
