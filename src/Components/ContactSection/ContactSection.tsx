"use client";

import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./ContactSection.css";
import { emailService } from "../../utils/emailService";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      message: formData.message.trim() === ''
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (!hasErrors) {
      try {
        const result = await emailService.sendFormData(
          {
            name: formData.name,
            mobile: formData.phone,
            email: formData.email,
            countryCode: '+971'
          },
          'Contact Us Form'
        );
        
        if (result.success) {
          alert('Message sent successfully! We will contact you soon.');
          setFormData({ name: '', email: '', phone: '', message: '' });
        }
      } catch (error) {
        console.error('Form submission error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <section
      className="py-5 contact-section"
      style={{  minHeight: "80vh" }}
    >
      <div className="container-fluid h-100">
        <div className="row h-100">

          <div className="col-md-6 mb-4">
            <h3 className="fw-bold mb-4">Let’s Talk</h3>
            <form className="contact-form h-100" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Full Name *" 
                className="form-control mb-3"
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address *" 
                className="form-control mb-3"
                value={formData.email}
                onChange={handleChange}
              />
              <input 
                type="text" 
                name="phone"
                placeholder="Phone Number" 
                className="form-control mb-3"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea 
                name="message"
                rows={5} 
                placeholder="Your Message *" 
                className="form-control mb-3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn-submit w-100">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="fw-bold mb-5 fs-2">Reach us</h3>

            <div className="location-card ">
              <h5 className="location-title">
                <FaMapMarkerAlt className="me-2" />
                Oman branch 
              </h5>
              <p className="mb-0">
                Office no. 11, Building No. 2870, Way No. 2333,  
                Madinat Al Sultan Qaboos. P.O. Box 407,  
                P.C. 133 Al Khuwair, Muscat, Sultanate of Oman.
              </p>
               <div className="d-flex flex-column gap-3 fs-5 mt-3">
              <p className="d-flex align-items-center mb-0">
                <FaEnvelope className="me-3" size={20} />
                Inquiry@wujha.com
              </p>
              <p className="d-flex align-items-center mb-0">
                <FaPhoneAlt className="me-3" size={20} />
                (+968) 80033666
              </p>
              <p className="d-flex align-items-center mb-3">
                <FaPhoneAlt className="me-3" size={20} />
                (+968) 21081400 ( International Number)
              </p>
            </div>
            </div>
            <div className="location-card ">
              <h5 className="location-title">
                <FaMapMarkerAlt className="me-2" />
               Dubai branch 
              </h5>
              <p className="mb-3">
                        Burj Al Salam Tower
            Sheikh Zayed Road, Trade Centre 1,
            Dubai, United Arab Emirates .
              </p>
              
            </div>

            <div className="location-card mb-2">
              <h5 className="location-title">
                <FaMapMarkerAlt className="me-2" />
                Egypt branch 
              </h5>
              <p className="mb-0">
                Office B4-2-1.A, Building B4,  
                Mivida Business Park, 90 St.,  
                5th Settlement, Cairo, Egypt.
                <br />
                 <span className="MainColor">
            Additional branch:
            </span> 
                <br />
             3rd Floor, office 1309, Park St., Sheikh Zayed, Cairo , Egypt.
             
              </p>
              
            <p className="phone-number mt-1" style={{ opacity: 1 }}>
              <svg
                stroke="currentColor"
                fill="black"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="MainColor"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: 8 }}
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
             Hotline: 17667 (Egypt)
            </p>


            </div>


            <h4 className="fw-bold mt-2  fs-3">Follow us</h4>
           <div className="d-flex gap-4 social-icons">
      <a href="https://www.facebook.com/WUJHARealEstate" target="_blank" rel="noopener noreferrer">
        <FaFacebookF size={20} />
      </a>
      <a href="https://www.youtube.com/@WUJHA" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={20} />
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn size={20} />
      </a>
      <a href="https://www.instagram.com/wujha/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={20} />
      </a>
      <a href="https://x.com/wujha" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={20} />
      </a>
    </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
