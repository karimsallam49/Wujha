import ContactSection from "../Components/ContactSection/ContactSection";
import { ContactUSHeroSection } from "../Components/ContactUsHeroSection/ContactUSHeroSection";

const ContactUs = () => {
  return (
    <div className="MainPadding">
      <ContactUSHeroSection/>
      <ContactSection/>
    </div>
  );
};

export default ContactUs;

