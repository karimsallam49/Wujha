import { servicesCards } from "../../Data/ServicesDAta";
import AnimationCard from "../AnimationCards/AnimationCards";

const ServicesSection = () => {
  return (
    <section className="p-1 services-section">
      <div className="container-fluid">
        <h2 className="mb-1 text-center fw-bold">
  
        </h2>

        

        <section className="core-values p-0">


       <AnimationCard items={servicesCards} title=" Comprehensive Wujha Services" subtitle="We support our partners through every stage of the asset lifecycle." bgColor="bg-dark" textColor="text-light"/>
        </section>
      </div>
    </section>
  );
};

export default ServicesSection;
