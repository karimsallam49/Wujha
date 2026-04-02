"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  type Variants,
} from "framer-motion";

import WujhaOwnerPic from "../../assets/Images/wujhaowner-DX4T-MZy.webp";
import WujhaSecOwnerpic from "../../assets/Images/wujhaowner2-C_smMrcv.webp";
import "./LeaderShipSection.css";

export default function LeadershipSection() {
  const controlsHeader = useAnimation();
  const controlsLeader1 = useAnimation();
  const controlsLeader2 = useAnimation();

  const headerRef = useRef<HTMLDivElement | null>(null);
  const leader1Ref = useRef<HTMLDivElement | null>(null);
  const leader2Ref = useRef<HTMLDivElement | null>(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isLeader1InView = useInView(leader1Ref, { once: true, amount: 0.3 });
  const isLeader2InView = useInView(leader2Ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isHeaderInView) controlsHeader.start("visible");
  }, [isHeaderInView, controlsHeader]);

  useEffect(() => {
    if (isLeader1InView) controlsLeader1.start("visible");
  }, [isLeader1InView, controlsLeader1]);

  useEffect(() => {
    if (isLeader2InView) controlsLeader2.start("visible");
  }, [isLeader2InView, controlsLeader2]);

  const fadeUpVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="container  w-100 wujhaowner d-flex flex-column">
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={controlsHeader}
        variants={fadeUpVariant}
        className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{  padding: "10px" }}
      >
        <h1
          className="MainColor"
          style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "20px" }}
        >
          Leadership behind the vision
        </h1>

        <p
          className="BlackColor"
          style={{ maxWidth: "800px", lineHeight: 1.8 }}
        >
          We are more than just a real estate developer We are creators of a modern
          and remarkable life for our clients. We care about the life around our
          buildings, filling our communities with innovation and green spaces to
          create a perfect blend of modern living and nature. This vision is led by
          a seasoned team of professionals.
        </p>
      </motion.div>

      <motion.div
        ref={leader1Ref}
        initial="hidden"
        animate={controlsLeader1}
        variants={fadeUpVariant}
        className="wujhaowner w-100 d-flex align-items-center gap-2"
        style={{ margin: "0px auto", height: "70vh" }}
      >
        <div className="w-100 h-100 d-flex ">
          <img
            alt="Ali Al-Hashmi"
            src={WujhaOwnerPic}
            style={{
              width: "100%",
              height: "80%",
              objectFit: "contain",
              borderRadius: "5px",
            }}
          />
        </div>

        <div className="container">

          <h1
            style={{
              fontWeight: 700,
              marginBottom: "15px",
              color: "black",
              fontSize: "2.5rem",
            }}
          >
            Ali Al-Hashmi
          </h1>

          <h5 className="MainColor">Chief Executive Officer</h5>

        <p style={{  lineHeight: 1.6, color: "black" }}>
       Ali Al-Hashmi is the Co-Founder and Chief Executive Officer of Wujha Real Estate Development, bringing over two decades of leadership experience across real estate, infrastructure, and business development.
Since founding Wujha in 2014, he has led the company’s operational growth and institutional development, establishing strong governance frameworks and strategic partnerships across Oman’s regulatory and development ecosystem. Through disciplined execution and close alignment with national planning priorities, Ali drives Wujha’s mission to deliver integrated, sustainable communities that support Oman’s urban transformation while creating long-term value for investors and residents.
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={leader2Ref}
        initial="hidden"
        animate={controlsLeader2}
        variants={fadeUpVariant}
        className="wujhaowner-2 w-100 d-flex align-items-center gap-2"
        style={{ margin: "0px auto", height: "70vh" }}
      >
        <div className="w-100 h-100 d-flex ">
          <img
            alt="Hazza Al-Saadi"
            src={WujhaSecOwnerpic}
            style={{
              width: "100%",
              height: "80%",
              objectFit: "contain",
              borderRadius: "5px",
            }}
          />
        </div>

        <div className="container">

          <h1
            style={{
              fontWeight: 700,
              marginBottom: "15px",
              color: "black",
              fontSize: "2.5rem",
            }}
          >
            Hazza Al-Saadi
          </h1>

          <h5 className="MainColor">Chairman</h5>

         <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "black" }}>
        Hazza Al Saadi is the Co-Founder and Chairman of Wujha Real Estate Development and a prominent Omani business leader with over two decades of experience across real estate, industrial, and commercial sectors.
Since co-founding Wujha in 2014, he has led the company’s long-term vision, positioning it as a forward-looking developer aligned with Oman’s Vision 2040. Through strategic leadership and strong connections within Oman’s industrial ecosystem, Hazza drives Wujha’s focus on sustainable urban development, smart living solutions, and integrated communities designed to create lasting value for investors and residents.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
