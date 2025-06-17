import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactSection.style.css";

export default function ContactSection({ isVisible }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background"></div>

      <div className="contact-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2 className="hebrew-section-title hebrew-text white-background-text">
            עכשיו{" "}
            <span className="title-gradient">תורנו</span>{" "}
            להכיר{" "}
            <span className="title-gradient">אתכם</span>{" "}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-form-wrapper"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <Input label="Full Name *" value={formData.fullName} onChange={val => handleChange("fullName", val)} required />
                <Input label="Phone *" value={formData.phone} onChange={val => handleChange("phone", val)} required />
              </div>

              <div className="form-grid">
                <Input label="Email *" type="email" value={formData.email} onChange={val => handleChange("email", val)} required />
                <Input label="Company Name" value={formData.company} onChange={val => handleChange("company", val)} />
              </div>

          
              <button type="submit" className="submit-btn">
                שלחו לי פרטים
              </button>
            </form>
          ) : (
            <div className="thank-you">
              <div className="checkmark">✔</div>
              <h3>Thanks for reaching out!</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Input({ label, value, onChange, required = false, type = "text" }) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
}

