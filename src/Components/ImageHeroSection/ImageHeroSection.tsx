import "./style.css";

interface HeroSectionProps {
  backgroundImage: string;
  height?: string | number;
  overlayColor?: string;
  borderRadius?: string;
  CoverSize?: string;
  title?: string;
  subtitle?: string;
  secondSubTitle?: string;
  titleClassColor?: string;

  bottomRightText?: string;
  bottomRightSubText?: string;
}

export default function ImageHeroSection({
  backgroundImage,
  height = "80vh",
  overlayColor = "rgba(0,0,0,0.02)",
  borderRadius = "var(--MainBorderRadius)",
  title,
  subtitle,
  CoverSize = "cover",
    secondSubTitle,
  titleClassColor,
  bottomRightText,
  bottomRightSubText,
}: HeroSectionProps) {
  return (
    <div
      className="text-center text-white hero-section imagehero d-flex align-items-center w-100 position-relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: CoverSize,
        backgroundRepeat: "no-repeat",
        height,
        borderRadius,
      }}
    >
      <div
        className="overlay position-absolute w-100 h-100"
        style={{ background: overlayColor, borderRadius }}
      />

      {(title || subtitle) && (
        <div className="content position-relative w-100 px-3">
          {title && <h1 className={`fw-bold mb-3 ${titleClassColor}`}>{title}</h1>}
          {subtitle && <p className="lead m-0">{subtitle}</p>}
          {secondSubTitle && <p className="lead m-0">{secondSubTitle}</p>}
        </div>
      )}

      {bottomRightText && (
        <div className="bottom-right-text position-absolute">
         <h1>
          
           {bottomRightText}
          </h1>
          <p>
 {bottomRightSubText}
          </p>
        </div>
      )}
    </div>
  );
}
