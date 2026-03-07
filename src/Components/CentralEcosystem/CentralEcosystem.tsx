import { useEffect, useState } from "react";
import Slider from "react-slick";

type Company = {
  name: string;
  logo: string;
};

interface CentralEcosystemProps {
  title: string;
  description: string;
  companies: Company[];
  sliderSettings?: any;
}

export default function CentralEcosystem({
  title,
  description,
  companies,
  sliderSettings,
}: CentralEcosystemProps) {
  const [slidesToShow, setSlidesToShow] = useState(5);
useEffect(() => {
  const updateSlides = () => {
    const width = window.innerWidth;

    if (width >= 1200) {
      setSlidesToShow(4);
    } else if (width >= 992) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(2); 
    }
  };

  updateSlides();
  window.addEventListener("resize", updateSlides);

  return () => window.removeEventListener("resize", updateSlides);
}, []);
const defaultSettings = {
  infinite: true,
  slidesToShow,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
};

  return (
    <section className="py-5">
      <h2 className="text-center fw-bold mb-4 GreenColor">
        {title}
      </h2>

      <p
        className="text-center mx-auto text-muted mb-5"
        style={{ maxWidth: 720 }}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="container">
        <Slider {...defaultSettings} {...sliderSettings}>
          {companies.map((company, index) => (
            <div key={index}>
              <div className="d-flex align-items-center justify-content-center px-3">
                <img
                  loading="lazy"
                  src={company.logo}
                  alt={company.name}
                  className="company-logo"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
