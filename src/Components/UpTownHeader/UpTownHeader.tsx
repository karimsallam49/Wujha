import uptownVideo from "../../assets/Videos/uptown.mp4"
import Uptownlogo from "../../assets/Images/UPTOWN - logo-01.png"
import "./UpTownHeaderstyle.css"
const UpTownHeader = () => {
  return (
    <div className="UpTownHeader">
      <div className="w-100 h-100 d-flex align-items-center justifiy-content-center flex-column upheader">
     <img src={Uptownlogo} className="uplogo" alt="" />
      </div>
      <div className="UpTownHeader-video-container">
        <video src={uptownVideo} loop muted autoPlay></video>
      </div>
    </div>
  )
}

export default UpTownHeader
