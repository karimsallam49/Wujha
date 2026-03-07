"use client";
import { motion } from "framer-motion";
import "./ProjectsTimeline.css";
import CentralImage from "../../assets/Images/C7-Centralbg.jpg"
import UpTownImage from "../../assets/Images/uptownside.jpg"
import { awards } from "../../Data/ProjectsData";

export default function ProjectsTimeline() {
const AwardsUpdated=[...awards,
    {
    id: 1,
    title: "Central 7",
    year: "2024",
    awarsdescription:`Central 7 is more than just an office building; it's a dynamic business park designed to host top-tier Omani and regional companies.`,
    image: CentralImage,
    bgImage: CentralImage,
     links: {
      instagram: "https://www.instagram.com/?url=https%3A%2F%2Fdrbenz.live%2FMediaCenter",
      facebook: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdrbenz.live%2FMediaCenter",
      twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fdrbenz.live%2FMediaCenter",
      linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fdrbenz.live%2FMediaCenter",
    },
    NewsAndMediaSescribtion:"Discover a new dimension of modern living in Al Amerat, Muscat. Rodina features 50 residential units and 9 commercial shops in a strategic location with easy access to the city center and key landmarks."
  },
    {
    id: 1,
    title: "Uptown Muscat",
    year: "2024",
    awarsdescription:`Uptown Muscat is a landmark residential community setting a new standard for modern living in Oman. Situated on a 100,000 sqm plot within Knowledge Oasis Muscat (KOM), this fully integrated, gated community seamlessly balances urban convenience and natural tranquility. Our philosophy, "Inspired from Nature to Future," is reflected in every aspect, offering an elevated lifestyle destination that goes beyond traditional residential offerings.Strategic Location & Connectivity
`,
    image: UpTownImage,
    bgImage: UpTownImage,
     links: {
      instagram: "https://www.instagram.com/?url=https%3A%2F%2Fdrbenz.live%2FMediaCenter",
      facebook: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdrbenz.live%2FMediaCenter",
      twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fdrbenz.live%2FMediaCenter",
      linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fdrbenz.live%2FMediaCenter",
    },
    NewsAndMediaSescribtion:"Discover a new dimension of modern living in Al Amerat, Muscat. Rodina features 50 residential units and 9 commercial shops in a strategic location with easy access to the city center and key landmarks."
  },
]
  
  return (
    <div className="timeline-container w-100">
      <div className="timeline w-100">
        {AwardsUpdated.map((project, index) => (
          <div
            key={index}
            className="d-flex timeline-rows w-100"
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="shadow-sm card h-100 project-card">
                <img
                  loading="lazy"
                  className="card-img-top h-100 w-100"
                  alt={project.title}
                  src={project.bgImage}
                />
              </div>
              <div className="mt-2 text-center d-flex w-100 align-items-center project-title-container">
                <h3 className="text-center project-title w-100">{project.title}</h3>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item describtion-body"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {project.awarsdescription}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
