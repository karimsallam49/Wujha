"use client";

import React from "react";
import Careers1 from "../../assets/Images/carrers1.png"
import Careers2 from "../../assets/Images/caeers2.png"
import Careers3 from "../../assets/Images/careers3.png"
import Careers4 from "../../assets/Images/careers4.png"
import Careers5 from "../../assets/Images/careers5.png"
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
      "Comprehensive health insurance, mental health support, and wellness programs to keep you at your best.",
    image: Careers1,
  },
  {
    id: 2,
    title: "Flexible Work",
    description:
      "Hybrid work options, flexible hours, and unlimited PTO to maintain work-life balance.",
    image: Careers2,
  },
  {
    id: 3,
    title: "Collaborative Culture",
    description:
      "Work with talented, passionate people in an inclusive environment that values diverse perspectives.",
    image: Careers3,
  },
  {
    id: 4,
    title: "Motivational",
    description:
      "Ark provides a work culture that inspires you to do your best, with support for professional growth and recognition programs.",
    image: Careers4,
  },
  {
    id: 5,
    title: "Creative",
    description:
      "Unlock your creativity at Ark, where new ideas are welcome. Our inspiring work environment gives you the freedom and tools to bring your ideas to life.",
    image: Careers5,
  },
];

const CareersWhyJionUSSection: React.FC = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="mb-5 text-start">
          <h1 className="fw-bold">Why Join Us?</h1>
          <p className="text-muted">
Sub-Headline: Be a Partner in Our Success.
Content: At Wujha, we don’t just hire employees; we recruit partners. We believe in a culture of ownership, creativity, and continuous development. Whether you are an architect, an engineer, or a sales expert, Wujha offers an environment where your ideas can shape the skyline of Oman. Join a team that values innovation and is led by experts from global tech giants.
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
