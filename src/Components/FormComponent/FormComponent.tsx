import React, { useEffect, useState } from "react";
import "./FormStyle.css";
import { emailService } from "../../utils/emailService";

type Country = {
  code: string;
  label: string;
  flag: string;
};

export const FormComponent = () => {
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [errors, setErrors] = useState({ name: false, mobile: false, email: false });

  const [countries, setCountries] = useState<Country[]>([]);
  const [countryCode, setCountryCode] = useState("+971");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd,flag")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data
          .filter((c: any) => c.idd?.root)
          .map((c: any) => ({
            code: `${c.idd.root}${c.idd.suffixes?.[0] || ""}`,
            label: c.name.common,
            flag: c.flag,
          }))
          .sort((a: Country, b: Country) => a.label.localeCompare(b.label));

        setCountries(formatted);
        setCountryCode(formatted[0]?.code || "+971");
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      mobile: !formData.mobile.trim(),
      email: !formData.email.trim(),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      try {
        const result = await emailService.sendFormData(
          {
            ...formData,
            countryCode,
          },
          'Brand Ambassador Request'
        );
        
        if (result.success) {
          alert('Form submitted successfully! We will contact you soon.');
          setFormData({ name: "", mobile: "", email: "" });
        } 
      } catch (error) {
        console.error('Form submission error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="form-container w-100 " >
      <form className="form-component" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>NAME</label>
          <input type="text" className="FormInput" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error-text">Name is required.</p>}
        </div>
        <label>MOBILE</label>
        <div className="form-group row-mobile position-relative overflow-visible">
          <div
            className="country-code position-relative overflow-visible"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {countryCode} ▼

            {dropdownOpen && (
              <div className="country-dropdown">
                {countries.map((c) => (
                  <div
                    key={c.code}
                    className="country-item"
                    onClick={() => {
                      setCountryCode(c.code);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className="flag">{c.flag}</span>
                    <span className="name">{c.label}</span>
                    <small>{c.code}</small>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mobile-input">
          
            <input
            className="FormInput"
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>

        {errors.mobile && <p className="error-text">Mobile number is required.</p>}

        <div className="form-group">
          <label>EMAIL</label>
          <input type="email" className="FormInput" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error-text">Email is required.</p>}
        </div>

        <button type="submit" className="submit-button">
          MEET OUR BRAND AMBASSADOR
        </button>
      </form>
    </div>
  );
};
