"use client";

import React, { useState } from "react";
import "./NewsAndMediasylce.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import {  architectureData } from "../../Data/ProjectsData";

export type PressItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  links: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const NewsAndMediaSection: React.FC = () => {

  const [activeTab, setActiveTab] = useState<"media" | "architecture">("media");

  
  const displayedData =
    activeTab === "media" ? architectureData : [];

  return (
    <section className="press-section">
      <div className="responsive-container container-fluid">
        <h1 className="section-title text-dark MainTextSize">
          Media & News
        </h1>

        
        <div className="tabs d-flex justify-content-center gap-3 mb-4">
          <button
            className={activeTab === "media" ? "tab active" : "tab"}
            onClick={() => setActiveTab("media")}
          >
          Media & events
          </button>

          <button
            className={activeTab === "architecture" ? "tab active" : "tab"}
            onClick={() => setActiveTab("architecture")}
          >
            Blogs
          </button>
        </div>

        <div
          key={activeTab}
          className="row w-100 justify-content-center align-items-baseline"
        >
          {displayedData&&displayedData.length>0&&displayedData.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-4 col-lg-6 col-md-12 col-sm-12"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div className={`press-card d-flex ${
            activeTab === "media" ? "blog-press-card" : ""
          }`}>
                <div
          className={`press-img-box ${
            activeTab === "media" ? "blog-img" : ""
          }`}
        >
                  <img
                    loading="lazy"
                    src={item.bgImage}
                    alt={item.title}
                    className="press-img"
                    height={200}
                  />
                </div>
                <div className="press-content w-100">
                  <h3>{item.title}</h3>
                  <h6 style={{lineHeight:"25px"}}>{item.awarsdescription}</h6>
{
  item.links && (
    <div className="social-icons">
                    <ul className="d-flex gap-2 list-unstyled">
                      {item.links.instagram && (
                        <li>
                          <a
                            href={item.links.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on Instagram"
                          >
                            <FaInstagram size={18} color="white" />
                          </a>
                        </li>
                      )}

                      {item.links.facebook && (
                        <li>
                          <a
                            href={item.links.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on Facebook"
                          >
                            <FaFacebookF size={18} color="white" />
                          </a>
                        </li>
                      )}

                      {item.links.twitter && (
                        <li>
                          <a
                            href={item.links.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on Twitter"
                          >
                            <FaTwitter size={18} color="white" />
                          </a>
                        </li>
                      )}

                      {item.links.linkedin && (
                        <li>
                          <a
                            href={item.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect with us on LinkedIn"
                          >
                            <FaLinkedinIn size={18} color="white" />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
)
}

                  {/* <button className="read-more">READ MORE →</button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndMediaSection;