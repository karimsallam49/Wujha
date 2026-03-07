import "./HeroVideoSection.css";

interface VideoHeroSectionProps {
  VideoSrc?: string; 
  overlay?: boolean; 
  overlayColor?: string; 
  backgroundImage?: string; 
}

const VideoHeroSection = ({
  VideoSrc,
  overlay = false,
  overlayColor = "rgba(0,0,0,0.4)",
  backgroundImage,
}: VideoHeroSectionProps) => {
  return (
    <div
      className="landing-wrapper w-100 position-relative"
      style={{
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
{
  backgroundImage && !VideoSrc && (

    <img src={backgroundImage} className="upheader-img" alt="" />
  )
}
      {VideoSrc && (
        <div className="background-video w-100 h-100 position-absolute top-0 start-0 MainBorderRadius">
          <video
            src={VideoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}

      {overlay && (
        <div
          className="video-overlay position-absolute w-100 h-100 top-0 start-0 MainBorderRadius"
          style={{
            backgroundColor: overlayColor,
          }}
        />
      )}

      <div className="video-content position-relative w-100 h-100 d-flex justify-content-center align-items-center">
      </div>
    </div>
  );
};

export default VideoHeroSection;
