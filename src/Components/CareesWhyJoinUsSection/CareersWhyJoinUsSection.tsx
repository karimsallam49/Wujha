"use client";

import React from "react";
import Careers1 from "../../assets/Images/health-wellness.jpg.jpeg"
import Careers2 from "../../assets/Images/flexible-work.jpg.jpeg"
import Careers3 from "../../assets/Images/collaborative-culture.jpg.jpeg"
import Careers4 from "../../assets/Images/motivational.jpg.jpeg"
import Careers5 from "../../assets/Images/creative.jpg.jpeg"
import "./CareersSection.css";

export type CareerCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const careerCards: CareerCard[] = [
  {
    id: 1,
    title: "Health & Wellness",
    description:
      "Comprehensive medical insurance and health-centered office designs with advanced air filtration to support your physical and mental well-being",
    image: Careers1,
  },
  {
    id: 2,
    title: "Flexible Work",
    description:
      "Empowering you with flexible scheduling and modern work options to ensure your professional career integrates seamlessly with your personal life.",
    image: Careers2,
  },
  {
    id: 3,
    title: "Collaborative Culture",
    description:
      "Work with a community of `Partners in Victory` in an inclusive environment that values diverse perspectives and collective expertise",
    image: Careers3,
  },
  {
    id: 4,
    title: "Motivational",
    description:
      "Wujha provides a high-performance culture that inspires excellence, supported by a 12-year track record of success and dedicated professional growth programs.",
    image: Careers4,
  },
  {
    id: 5,
    title: "Creative",
    description:
      "Unleash your imagination in an environment that welcomes bold ideas and provides the freedom to design `out of the ordinary` lifestyle experiences.",
    image: Careers5,
  },
];

const CareersWhyJionUSSection: React.FC = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="mb-5 text-start">
          <h1 className="fw-bold">Be a Partner in Our Success</h1>
          <p className="text-muted">

 At Wujha, we don’t just hire employees; we recruit partners. We believe in a culture of ownership, creativity, and continuous development. Whether you are an architect, an engineer, or a sales expert, Wujha offers an environment where your ideas can shape the skyline of Oman. Join a team that values innovation and is led by experts from global tech giants.
          </p>
        </div>

        <div className="g-4 row row-cols-lg-5 row-cols-md-2 row-cols-1">
          {careerCards.map((card) => (
            <div key={card.id} className="col">
              <div className="p-4 text-center w-100 rounded-3 h-100">
                <div className="mb-3 w-100" style={{ height: "300px", position: "relative" }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <h3 className="MainColor">{card.title}</h3>
                <p style={{ fontSize: "larger" }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersWhyJionUSSection;
