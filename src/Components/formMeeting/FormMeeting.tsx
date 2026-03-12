import React, { useState } from 'react';
import './FormStyle.css';
import { emailService } from "../../utils/emailService";

export const FormMeeting = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });
  const [errors, setErrors] = useState({ name: false, mobile: false, email: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === '',
      mobile: formData.mobile.trim() === '',
      email: formData.email.trim() === ''
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(Boolean);
    if (!hasErrors) {
      try {
        const result = await emailService.sendFormData(
          formData,
          'Meeting Request'
        );
        
        if (result.success) {
          alert('Meeting request submitted successfully! We will contact you soon.');
          setFormData({ name: '', mobile: '', email: '' });
        } else {
          alert(result.message || 'Failed to submit form. Please try again.');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="form-container-meeting w-100">
      <div className="footer-heading-mobile ">
        <h2>Express<br /><b>Your Interest</b></h2>
      </div>
    <form className="form w-100" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>NAME</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error-text">Name is required.</p>}
      </div>

      <div className="form-group row-mobile">
        <div className="country-code">+971 ▼</div>
        <div className="mobile-input">
          <label>MOBILE</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>
      </div>
          {errors.mobile && <p className="error-text">Mobile number is required.</p>}

      <div className="form-group">
        <label>EMAIL</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error-text">Email is required.</p>}
      </div>


      <div className='w-100 mb-3 d-flex justify-content-between'style={{gap:"10px"}}>
      <button type="submit" className="submit-button w-100">zoom</button>
      <button type="submit" className="submit-button w-100">Teams</button>

      </div>
      <button type="submit" className="submit-button w-100">Confirm Now</button>
    </form>


  </div>
  );
};
