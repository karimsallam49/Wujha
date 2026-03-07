import Slider from "react-slick";

import "./SliderStyle.css";

type CollectionSlideProps = {
  title: string;
  titleclass?: string;
  logo: string;
  backgroundImage: string;
  discoverLink: string;
  DiscoverClass:string;
  thumbnailImages: string[];
};
type ArrowProps = {
  onClick?: () => void;
};

export default function CollectionSlide({
  title,
titleclass,
  logo,
  backgroundImage,
  discoverLink,
  DiscoverClass,
  thumbnailImages,
}: CollectionSlideProps) {
const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button className="custom-arrow next-arrow" onClick={onClick}>
      ❯
    </button>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button className="custom-arrow prev-arrow" onClick={onClick}>
      ❮
    </button>
  );
};
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="slide-container-collection overflow-visible MainBorderRadius">
      <div
        className="slide-bg-collection MainBorderRadius"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="slide-overlay-collection MainBorderRadius" />

      <div className="slide-content-collection ">
        <div className="left-content-collection">
          <h1 className={`Collection-title-collection MainTextSize ${titleclass}`} >{title}</h1>

          <a className="uptown-link" href="/Uptown">
            <img
              loading="lazy"
              className="collection-logo"
              alt={title}
              src={logo}
            />
          </a>

          <a
            className={`discover-btn ${DiscoverClass}`}
            href={discoverLink}
          >
            Discover All Collection
          </a>
        </div>

        <div className="thumbnail-slider-container d-flex align-items-center justify-content-center">
          <Slider {...sliderSettings} className="w-100 h-100 ">
            {thumbnailImages.map((img, index) => (
              <div key={index} className="w-100  d-flex align-items-center justify-content-center">
                <div className="thumbnail-card">
                  <img
                    loading="lazy"
                    className="thumbnail-image"
                    alt={title}
                    src={img}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
