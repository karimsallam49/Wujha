import {  Container } from "react-bootstrap"
import { motion, useAnimation, useInView } from "framer-motion";
import pic1 from "../../assets/Images/AwardsPic1.png"
import pic2 from "../../assets/Images/AwardsPic2.webp"
import pic3 from "../../assets/Images/AwardPic3.webp"
import pic4 from "../../assets/Images/AwardPic4.png"
import pic5 from "../../assets/Images/AwardPic5.png"
import pic6 from "../../assets/Images/Awardpic6.webp"
import pic7 from "../../assets/Images/AwardPic7.webp"
import pic8 from "../../assets/Images/Awardpic8.png"
import Column1image from "../../assets/Images/1.jpg"
import Column2image from "../../assets/Images/2.jpg"
import Column3image from "../../assets/Images/3.jpg"
import Column4image from "../../assets/Images/TimeLineImage2.jpg"
import Column5image from "../../assets/Images/TimeLineImage3.jpg"
import Column6image from "../../assets/Images/Parking.jpg"
import Column7image from "../../assets/Images/Clubhouse.jpg"
import Column8image from "../../assets/Images/TimeLineImage3.jpg"
import awardsVideo from "../../assets//Videos/videoplayback (2).mp4"
import "./AwardStyle.css"
import { useEffect, useRef } from "react";
export const AwardSsection = () => {
const Images = [
  { pic: pic1, background: Column1image },
  { pic: pic2, background: Column2image },
  { pic: pic3, background: Column3image },
  { pic: pic4, background: Column4image },
  { pic: pic5, background: Column5image },
  { pic: pic6, background: Column6image },
  { pic: pic7, background: Column7image },
  { pic: pic8, background: Column8image }
];
      const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div    ref={sectionRef}
 className="sectionsContainer awardsection d-flex flex-column ">
        <h2 className="award-heading heading-fade-in">Your gateway to a bright tomorrow
  </h2>
<div className="main-bg-video">
              <video autoPlay playsInline muted loop className="interest-video w-100 h-100" style={{objectFit:"cover"}}>
                  <source src={awardsVideo} type="video/mp4"/>
                  Your browser does not support HTML5 video.
              </video>
          </div>
    <Container fluid className="h-100 w-100">
        
      <div className="custom-row w-100">
    {Images.map((item, index) => {
    const isTopRow = index < 5;

    return (
<motion.div
  key={index}
  className="custom-col"
  initial={{ opacity: 0, y: isTopRow ? -50 : 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.6, 
    delay: index * 0.1,
    ease: "easeOut"
  }}
  whileHover={{ 
    width: "75%", 
    filter: "grayscale(0%)",
    transition: { duration: 0.3, ease: "easeOut" }
  }} 
  style={{ 
    width: "25%", 
    backgroundImage: `url(${item.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter:"grayscale(100%)",
    position: "relative"
  }}
>
  <img className="award-image" src={item.pic} alt="" />
  <h3 className="hover-text custom-hover">
    
The City of Gold - Dubai

</h3>
  <p className="hover-text">
    
    After his phenomenal success in the Middle East, Mr. PNC Menon entered the Indian real estate market at a nascent stage when it was in dire need of quality construction. In 1995, he founded Sobha Developers, headquartered in Bangalore.

</p>

</motion.div>

    );
  })}
</div>
    </Container>
            </div>
  )
}
