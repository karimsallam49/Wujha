import welcomsecondimage from "../../assets/Images/welcomsecondimage.webp"
import welcomfirstpic from "../../assets/Images/welcomfirstpic.webp"
import "./WelcomSectionStyle.css"
export default function WelcomeSection() {
  return (
    <div className="WelcomContainer MainMarignTop">
      <div className="w-first-section">

        <ul className="ul-welcom">
          <li className="SecondTextStyleq">
           Uptown Muscat is not just a residence; it is an architectural masterpiece. Developed in association with Mandressi GmbH, the project brings iconic Italian design to the heart of Muscat. Spanning 100,000 square meters in Knowledge Oasis Muscat (KOM), this flagship development bridges the gap between modern sophistication and natural serenity. It is designed as a self-sustaining ecosystem where living, working, and entertainment converge, offering a harmonious lifestyle in a vibrant free-zone community.
Beyond the architecture, our focus lies in cultivating a vibrant community rooted in exceptional living experiences. Uptown Muscat is curated to foster connection and belonging, creating an environment where residents engage with a lifestyle that transcends the ordinary. Every detail is designed to enrich daily life, ensuring that this is not just a place to stay, but a destination where meaningful memories are made.
Designed as Oman’s premier mixed-use destination, Uptown Muscat features the longest outdoor AC boulevard in Muscat, integrated with a hotel, professional business spaces, and extensive recreational zones. The community is anchored by "Uptown Park," a sprawling green haven featuring cycling tracks, fountains, and children's play areas, ensuring that nature is always just a step away from your door.

          </li>
          <li className="SecondTextStyle">
            Uptown Muscat benefits from its prime location in KOM, a premier
            economic and educational hub. The project is strategically positioned
            with exceptional accessibility to key destinations across Muscat.
          </li>
        </ul>

        <img
          className="w-first-image"
          alt=""
          src={welcomfirstpic}
        />
      </div>

      <div className="w-sectond-section">
        <img
          loading="lazy"
          alt=""
          src={welcomsecondimage}
        />
      </div>
    </div>
  );
}
