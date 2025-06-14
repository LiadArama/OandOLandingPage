import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactSection.style.css";

export default function ContactSection({ isVisible }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    message: ""
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
        message: ""
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="contact-circle-blue"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="contact-circle-purple"
        />
      </div>

      <div className="contact-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <div className="contact-badge">Get Started</div>

          <h2 className="contact-title">
            Ready to{" "}
            <span className="gradient-contact">Transform</span>{" "}
            Your Digital Presence?
          </h2>

          <p className="contact-description">
            Let's discuss your goals and create a customized strategy that delivers real results.
          </p>
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

              <Textarea label="Tell us about your project" value={formData.message} onChange={val => handleChange("message", val)} />

              <button type="submit" className="submit-btn">
                Let's Talk
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

function Textarea({ label, value, onChange }) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <textarea value={value} onChange={e => onChange(e.target.value)} rows={4} />
    </div>
  );
}
