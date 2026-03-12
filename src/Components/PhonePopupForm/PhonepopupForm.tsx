import { useState } from "react";
import "./PhonePopupFormstyle.css"
import { emailService } from "../../utils/emailService";
export const PhonepopupForm = () => {
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
              'Phone Call Request'
            );
            
            if (result.success) {
              alert('Form submitted successfully! We will contact you soon.');
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
     <form className="form-phonepopup " onSubmit={handleSubmit}>
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

      <div className="checkbox-group">
        <label><input type="checkbox" /> I have read and accepted the <a href="#">terms & conditions</a></label>
        <label><input type="checkbox" /> I agree to receive exclusive updates & other communications</label>
      </div>

      <button type="submit" className="submit-button">MEET OUR BRAND AMBASSADOR</button>
    </form>
  )
}
