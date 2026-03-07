import Firstimage from "../../assets/Images/welcomfirstpic.webp"
import secimage from "../../assets/Images/welcomsecondimage.webp"
import TimeBox from "../TimeBox/TimeBox"
import "./WelcomSectionstyle.css"
const WelcomSection = () => {
  return (
    <div className="WelcomContainer">
        <div className="w-first-section">
            <h1 className="w-head">
                Uptown Muscat

            </h1>

            <ul className="ul-welcom">
                <li>
                    Inspired from nature to future, we develop a life, not just a place, we create a unique community based on imagination but on the ground, we have chosen a suitable location for you, that makes you breathe inside it and always see green places, so you can be creative in your work and life, choosing Uptown is your choice for an integrated life.
                </li>
                <li>
                    You and your family are in a place that radiates sunlight and life, where Uptown Boulevard is located in the middle of the residential complex, with places designated for children, a social club, and multi-use playgrounds, as well as a chain of various stores to go on a shopping trip near your unit.
                </li>
            </ul>

            <img className="w-first-image" src={Firstimage} alt="" />

        </div>
      <div className="w-sectond-section">
        <img src={secimage} alt="" />
        <TimeBox/>
      </div>
    </div>
  )
}

export default WelcomSection
