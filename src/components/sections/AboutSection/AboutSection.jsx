import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.style.css";

export default function AboutSection({ isVisible }) {
  const founders = [
    {
      name: "Oliver Schmidt",
      role: "Co-Founder & Strategy Director",
      bio: "15+ years in digital marketing strategy. Former head of digital at leading tech companies. Passionate about data-driven growth.",
      initials: "OS",
    },
    {
      name: "Olivia Chen",
      role: "Co-Founder & Creative Director",
      bio: "Award-winning creative director with expertise in brand storytelling. Previously led creative teams at top advertising agencies.",
      initials: "OC",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          {/* <h2 className="about-title">
            360° Marketing That{" "}
            <span className="gradient-text">Actually Works</span>
          </h2> */}
          <b className="about-welcome"> היי, כיף שהגעתם!</b>
          <b>
            <p className="about-description">
              אנחנו O&O, סוכנות דיגיטל שחושבת רחב ופועלת מדויק. <br />
              המומחיות שלנו היא לבנות עבור כל לקוח מעטפת 360 שמכסה את כל הצרכים השיווקיים של העסק – מאסטרטגיה חכמה, דרך
              קריאייטיב שמתחבר לקהל, ועד ביצוע ממוקד שמביא תוצאות בשטח. <br />
            </p>
            <p className="about-description">
              אנחנו מלווים את הלקוחות שלנו מקצה לקצה: <br />
              מניהול עמודים ברשתות החברתיות, יצירת תוכן קריאייטיבי, קופירייטינג, קמפיינים ממומנים בכל הפלטפורמות
              המובילות, ועד לניתוח נתונים ושיפור מתמיד של הביצועים. <br />
            </p>
            <p className="about-description">
              העבודה שלנו תמיד מותאמת אישית. אין אצלנו שבלונות. <br />
              אנחנו נכנסים לעומק של כל מותג, מבינים את המטרות העסקיות, ויוצרים מהן שפה שיווקית מדויקת שמובילה את הקהל
              הנכון עם מיקוד אחד ברור – תוצאות.
            </p>
            <p className="about-description" style={{ marginTop: "1.3rem", marginBottom: "0.2rem" }}>
              מהר מאוד תבינו , O&O זה לא רק דיגיטל. <br />
              זה מערכת יחסים. מוכנים להתאהב?
            </p>
          </b>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <LogoCarousel /> {/** make this a little closer to the what we do section */}
        </motion.div>
      </div>
    </section>
  );
}

export function LogoCarousel() {
  const logos = [
    { name: "Google", src: "/assets/google-logo.png" },
    { name: "Meta", src: "/assets/logos/meta.png" },
    { name: "Shopify", src: "/assets/logos/shopify.png" },
    { name: "Hubspot", src: "/assets/logos/hubspot.png" },
    { name: "Google Ads", src: "/assets/logos/google-ads.png" },
    { name: "Facebook Ads", src: "/assets/logos/facebook-ads.png" },
    { name: "LinkedIn", src: "/assets/logos/linkedin.png" },
    { name: "GA4", src: "/assets/logos/ga4.png" },
    { name: "Mailchimp", src: "/assets/logos/mailchimp.png" },
  ];

  // Repeat the logos array to make it continuous loop visually
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {repeatedLogos.map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo.src} alt={logo.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
function ServiceItem({ delay, title, text, color }) {
  const colorClass = {
    blue: "service-icon-blue",
    purple: "service-icon-purple",
    indigo: "service-icon-indigo",
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="service-item"
    >
      <div className={`service-icon ${colorClass}`} />
      <h3 className="service-title">{title}</h3>
      <p className="service-text">{text}</p>
    </motion.div>
  );
}
