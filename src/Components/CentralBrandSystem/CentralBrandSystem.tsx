import CentralEcosystem from "../CentralEcosystem/CentralEcosystem";
import QatarPic from "../../assets/Images/Qatar.png"
import APic from "../../assets/Images/Aaa.png"
import Hp from "../../assets/Images/HP.png"
import MotorPic from "../../assets/Images/Motor.png"
import schiederPic from "../../assets/Images/Schieder.png"
import Huwawuipic from "../../assets/Images/Huawei.png"
const companies = [
  { name: "Motor", logo: MotorPic },
  { name: "Hp", logo: Hp },
  { name: "Qatar Airways", logo: QatarPic },
  { name: "Huawei", logo: Huwawuipic },
  { name: "Avaya", logo: APic },
  { name: "Schneider Electric", logo: schiederPic },
];

export default function CentralBrandSystem() {
  return (
    <CentralEcosystem
      title="Central 7: A Vibrant Ecosystem"
      description={`With a student population of over <strong>23,000</strong> 
        and an employment base of <strong>32,000+</strong> in the surrounding areas,
        the region is home to world-renowned companies:`}
      companies={companies}
    />
  );
}
