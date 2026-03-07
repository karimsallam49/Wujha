// SliderComponent.jsx
import { motion, useScroll, useTransform } from "framer-motion";
 import BgImage from "../../assets/Images/C7-01.jpg";
import { useEffect, useState } from "react";

import "./SliderComponentStyle.css";


export const WhyComponent = ({ scrollRef }: any) => {
  const slide = {
    title: "Why WUJHA?",
    description: `At Wujha, we aspire to offer what is out of the ordinary.
Our vision is to transform urban spaces into sustainable, vibrant communities and attractions.
We are keen to build exceptional communities that inspire their residents and offer an enriching luxury living experience.`,
    image:BgImage,
  };
const [, setShowDiv] = useState(false);

  const { scrollYProgress } = useScroll({ container: scrollRef });
const clip = useTransform(scrollYProgress, [0, 0.18], [
  "inset(0% 15% 0% 15%)",  
  "inset(0% 0% 0% 0%)"    
]); 

useEffect(() => {
  const unsubscribe = clip.on("change", latest => {
    if (latest === "inset(0% 0% 0% 0%)") {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  });
  return () => unsubscribe(); 
}, [clip]);
  return (
    <div className="slider-wrapp" style={{ height: "140vh", position: "relative" }}>

      <motion.div  style={{
      position: "sticky",
      top: "0",
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent:"space-between",
      zIndex: 1,
      transition:".8s ease-in-out",
      borderRadius:"5px",
    }}>
  <motion.img
    src={slide.image}
    alt={slide.title}
    style={{
            position: "sticky",
      top: 1,
      width: "100%",
      height: "100%",
      objectFit: "cover",
 clipPath: clip  ,
      margin: "0 auto",
      display: "block",
      zIndex: 1,
      transition:".8s ease-in-out",
      borderRadius:"5px",
     

    }}
  />


 
{/* {showDiv && (
 
  
)} */}
      </motion.div>


       
  
</div>

  );
};
