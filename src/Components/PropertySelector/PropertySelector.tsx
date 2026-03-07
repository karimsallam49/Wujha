"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VillaImage from "../../assets/Images/uptownside.jpg";
import thubnail from "../../assets/Images/thumbnail-uptown.webp";
import "./PropertySelector.css";
import Slider from "react-slick";
import { DownloadBtns } from "../DownloadButton/DownloadBtns";

type Property = {
  id: string;
  title: string;
  description: string;
  thumb: string;
  background: string;
};

const properties: Property[] = [
  {
    id: "villa-1",
    title: "Compact 1 Bedroom Apartment",
    description: "Compact 1 Bedroom Apartment",
    thumb: thubnail,
    background: VillaImage,
  },
  {
    id: "villa-a",
    title: "1 Bedroom Apartment",
    description: "1 Bedroom Apartment",
    thumb: thubnail,
    background: VillaImage,
  },
  {
    id: "villa-b",
    title: "2 bedrooms Apartment",
    description: "2 bedrooms Apartment",
    thumb: thubnail,
    background: VillaImage,
  },
  {
    id: "villa-d",
    title: "3 bedrooms Apartment",
    description: "3 bedrooms Apartment",
    thumb: thubnail,
    background: VillaImage,
  },
  {
    id: "vip",
    title: "3-4 Duplex Penthouse",
    description:
      "3-4 Duplex Penthouse",
    thumb: thubnail,
    background: VillaImage,
  },
  // {
  //   id: "apartments",
  //   title: "APARTMENTS",
  //   description: "Modern apartments with stunning views and facilities.",
  //   thumb: thubnail,
  //   background: VillaImage,
  // },
];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  }

const PropertySelector = () => {
  const [selected, setSelected] = useState<Property>(properties[3]); 

  return (
    <>
    <div className="property-section  position-relative">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          className="property-bg"
          style={{
            backgroundImage: `url(${selected.background})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

    
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id + "-overlay"}
          className="property-overlay"
          animate={{ opacity: [1, 0, 1] }} 
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="property-grid">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={`grid-item ${index % 2 === 0 ? "pos-10" : "pos-20"}`}
            onClick={() => setSelected(property)}
          >
            <AnimatePresence mode="wait">
              {selected.id === property.id ? (
                <motion.div
                  key={`${property.id}-text`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  style={{ textAlign: "center", maxWidth: "250px" }}
                >
                  {/* <h2>{property.title}</h2> */}
                  <p className="propertyselctor-p" style={{fontSize:"xx-large"}}>{property.description}</p>
                </motion.div>
              ) : (
                <motion.div
                  key={`${property.id}-thumb`}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={property.thumb} alt={property.title} />
                  <span>{property.title}</span>
                </motion.div>
              )}
            </AnimatePresence>


          </div>
        ))}
      </div>
    <DownloadBtns className="MainColor"/>
    </div>
    <div className="property-slider d-block d-md-none">
      <Slider {...settings}>
        {properties.map((property, index) => (
          <div key={index}>
            <div
              className="text-center position-relative"
              style={{
                width: "90%",
                height: "350px",
                margin: "0 auto",
                borderRadius: "10px",
                overflow: "hidden",
                opacity: 1,
              }}
            >
              <img
              loading="lazy"
                src={property.background}
                alt={property.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                  padding: "1rem",
                  width: "100%",
                }}
              >
        
                <p style={{ fontSize: "1rem", margin: 0 }}>{property.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default PropertySelector;
