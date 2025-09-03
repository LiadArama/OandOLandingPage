import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactSection.style.css";
import { Send, CheckCircle, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";



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
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,  // This will map to template variables
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        message: "",
      });
    }, 3000)).catch(error => {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again later.");
    });
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
      </motion.div>
      <div className="contact-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-form-wrapper"
        >
            <form onSubmit={handleSubmit} className="contact-form">
              <h4 className="form-title" style={{ direction: "rtl" }}>
בואו נכיר אתכם              </h4>
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
                  placeholder="שם החברה"
                  value={formData.company}
                  onChange={val => handleChange("company", val)}
                  required
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
                  rows={5}
                />
              </div>

              {!isSubmitted?(<button type="submit" className="submit-btn">
                <span className="submit-btn-text">
                  שליחה
                  <Send className="send-icon" />
                </span>
              </button>):(<button type="submit" className="submit-btn">
                <span className="submit-btn-text">
                  <CheckCircle className="check-icon" />
                </span>
              </button>)}
            </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-form-wrapper"
        >
          <div className="business-info">
           <div className="info-row">
  <div className="info-icon" style={{ backgroundColor: "rgb(219 234 254)" }}>
    <Phone color="rgb(37, 99, 235)" />
  </div>
  <div>
    <p className="label">טלפון</p>
    <p className="label-content">
      <a href="tel:0528743761" className="info-link">052-7928282</a>
    </p>
  </div>
</div>

<div className="info-row">
  <div className="info-icon" style={{ backgroundColor: "rgb(243 232 255)" }}>
    <Mail color="rgb(147 51 234)" />
  </div>
  <div>
    <p className="label">אימייל</p>
    <p className="label-content">
      <a href="mailto:hakerxdigital@gmail.com" className="info-link">hakerxdigital@gmail.com</a>
    </p>
  </div>
</div>

<div className="info-row">
  <div className="info-icon" style={{ backgroundColor: "rgb(220 252 231)" }}>
    <MapPin color="rgb(22 163 74)" />
  </div>
  <div>
    <p className="label">מיקום</p>
    <p className="label-content">
      תל אביב
      {/* <a href="https://www.waze.com/he/live-map/directions/%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95?to=place.ws.il.1380.11" target="_blank" rel="noopener noreferrer" className="info-link">
        קרליבך 11 תל אביב
      </a> */}
    </p>
  </div>
</div>


<div className="info-row-social-media">
  <div className="info-icon-social-media-container" >
    <a href="https://www.facebook.com/profile.php?id=61579049410917" target="_blank" rel="noopener noreferrer" className="info-icon-social-media-link">
    <Facebook className="info-icon-social-media" color="rgb(59 130 246)" />
    </a>
  </div>
  <div className="info-icon-social-media-container" >
    <a href="https://www.instagram.com/hakerxdigital" target="_blank" rel="noopener noreferrer" className="info-icon-social-media-link">
    <Instagram className="info-icon-social-media" color="rgb(225 29 72)" />
    </a>
  </div>
  <div className="info-icon-social-media-container" >
    <a href="https://www.linkedin.com/company/hakerxdigital/about/" target="_blank" rel="noopener noreferrer" className="info-icon-social-media-link">
    <Linkedin className="info-icon-social-media" color="rgb(14 118 168)" />
    </a>
  </div>
  <div className="info-icon-social-media-container" >
      <a href="https://api.whatsapp.com/send?phone=972527928282" target="_blank" rel="noopener noreferrer" className="info-icon-social-media-link">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp info-icon-social-media" viewBox="0 0 16 16" color="#25C366">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
      </a>

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
