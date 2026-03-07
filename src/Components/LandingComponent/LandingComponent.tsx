import "./LandingStyle.css"
import videolink from "../../assets//Videos/wujha branding_5.mp4"
export const LandingComponent = () => {
  return (
    <div className="landing-wrapper">
      <div className="background-video" >
        <video  src={videolink} muted autoPlay loop  className="w-100 h-100" />
      </div>
    </div>
  )
}
