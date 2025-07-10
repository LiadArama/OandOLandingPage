import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactSection.style.css";
import { Send, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection({ isVisible }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = e => {
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
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2 className="contact-section-title white-background-text">Contact Us</h2>
        </motion.div>
      <div className="contact-content">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-form-wrapper"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <h4 className="form-title" style={{direction: "rtl"}}>שלחו לנו פרטים</h4>
              <div className="form-grid">
                                <Input
                  label="אימייל"
                  type="email"
                  placeholder="אימייל"
                  value={formData.email}
                  onChange={val => handleChange("email", val)}
                  required
                />

                <Input
                  label="שם מלא"
                  placeholder="השם שלכם"
                  value={formData.fullName}
                  onChange={val => handleChange("fullName", val)}
                  required
                />
              </div>

              <div className="form-grid">

                <Input
                  label="שם החברה "
                  placeholder="שם החברה (אופציונלי)"
                  value={formData.company}
                  onChange={val => handleChange("company", val)}
                />
                                              <Input
                  label="טלפון"
                  placeholder="טלפון"
                  value={formData.phone}
                  onChange={val => handleChange("phone", val)}
                  required
                />
              </div>

              <div className="input-wrapper">
                <label>הודעה (אופציונלי)</label>
                <textarea
                  value={formData.message}
                  onChange={e => handleChange("message", e.target.value)}
                  placeholder="ספרו לנו עליכם"
                  required
                  rows={5}
                />
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
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-form-wrapper"
        > 
        <h4 className="form-title" style={{direction: "rtl"}}>בואו נתחבר</h4>
<div className="business-info">
  <div className="info-row">
    <div className="info-icon" style={{backgroundColor: "rgb(219 234 254)"}}><Phone color="rgb(37, 99, 235)"  /></div>
    <div>
      <p className="label">טלפון</p>
      <p>050-1234567</p>
    </div>
  </div>

  <div className="info-row">
    <div className="info-icon" style={{backgroundColor: "rgb(243 232 255)"}}><Mail color="rgb(147 51 234)"/></div>
    <div>
      <p className="label">אימייל</p>
      <p>hello@company.com</p>
    </div>
  </div>

  <div className="info-row">
    <div className="info-icon" style={{backgroundColor: "rgb(220 252 231)"}}><MapPin color="rgb(22 163 74)"/></div>
    <div>
      <p className="label">מיקום</p>
      <p>תל אביב, ישראל</p>
    </div>
  </div>
</div>
        </motion.div>
      </div>

    </section>
  );
}

function Input({ label, value, onChange, required = false, type = "text", placeholder = "", style = {} }) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        style={style}
      />
    </div>
  );
}
