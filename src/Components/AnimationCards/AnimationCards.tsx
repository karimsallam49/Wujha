
import "./AnimationCards.css";
import type { IconType } from "react-icons";
export type CoreValueItem = {
  title: string;
  subtitle?: string;
  desc: string;
  icon: IconType;
 
};

export type CoreValuesProps = {
  title: string;
  subtitle?: string;
   bgColor?: string;
   textColor?: string;
  items: CoreValueItem[];
  
};
const AnimationCard = ({ title, items, bgColor,textColor,subtitle }: CoreValuesProps) => {
  return (
    <section className="core-values">
      <h2 className="core-title BlackColor MainTextSize">{title}</h2>
      {
        subtitle && (

          <h3 className="core-title BlackColor">{subtitle}</h3>
        )
      }

      <div className="core-grid">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="flip-card" key={index}>
              <div
                className={`flip-card-inner ${bgColor || "GreenBackGroundColor"}`}
              >
                
                <div className="flip-card-front">
                  <div className={`front-tite ${textColor || "text-white"}`}>
                    <div className="core-icon">
                      <Icon size={40} />
                    </div>
                    <h3 className={`core-card-title ${textColor || "text-white"}`}>{item.title}</h3>
                  </div>
                </div>

               
                <div className="flip-card-back">
                  <div className="back-title">
                    <div className="core-icon">
                      <Icon size={40} />
                    </div>
                    <h3 className={`core-card-title ${textColor || "text-white"}`}>{item.title}</h3>
                    <p className={`core-desc ${textColor || "text-white"}`}>{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AnimationCard;