import { motion } from "framer-motion";
import "../../../styles/Global.style.css";
import "./ServicesSection.style.css";
import "./styles/ServiceCard.style.css";
import ServiceCard from "./components/ServiceCard";
import "./styles/FoundersSection.style.css";
import "./styles/LetsTalkBtn.style.css";
import OmerPic from "../../../assets/OmerPic.jpeg";
import OmriPic from "../../../assets/OmriPic.jpeg";
import { Palette, MousePointer, Users, BarChart3 } from "lucide-react";

function scrollToContact() {
  const contactEl = document.getElementById("contact");
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: "smooth" });
  }
}


export default function ServicesSection({ isVisible }) {
  const services = [
    {
      icon: Palette,
      title: "Creative & Copywriting",
      description: "קריאייטיב ותוכן שמעוררים השראה ומניעים לפעולה",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: MousePointer,
      title: "PPC Campaigns",
      description: "קמפיינים ממומנים חכמים עם ROI מקסימלי",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "ניהול רשתות חברתיות שבונה קהילה ומחזק מותג",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Strategy & Consulting",
      description: "ייעוץ אסטרטגי מקצועי לצמיחה בת קיימא",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-background">
        <div className="services-circle-top" />
        <div className="services-circle-bottom" />
      </div>

      <div className="services-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <h2 className="section-title">
            How We <span className="title-gradient">Build The Future</span>
          </h2>
          <p className="services-subtitle hebrew-text">
            המטרה: לא סתם לפרסם, אלא לפעול חכם – עם כיוון ברור מסר חד ותכנון שמייצר תוצאות אמיתיות
          </p>
          <br />
          <br />
        </motion.div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                iconBg={service.iconBg}
                iconColor={service.iconColor}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

        <div className="talk-button-wrapper">
          <button onClick={scrollToContact} className="btn-primary">
            <span className="btn-text hebrew-text">בואו נדבר</span>
            <svg
              className="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>

      <div className="founders-section">
        <div className="founders-header">
          <h2 className="founders-title">המייסדים</h2>
          <p className="founders-subtitle">מאחורי הסוכנות – שני שותפים עם חזון אחד: לעבוד עם לקוחות, לא עבורם.</p>
        </div>

        <div className="founders-grid">
          {/* Omer */}
          <div className="founder-card omer-card">
            <div className="founder-img">
              <img src={OmerPic} alt="Omer" />
            </div>
            <h3 className="founder-name">עומר</h3>
            <p className="founder-role pink">קריאייטיב וקמפיינים</p>
            <div className="founder-highlight">
              <span className="icon">
                <svg>{/* Lightbulb icon */}</svg>
              </span>
              <span>מוביל את תחום היצירתיות והחדשנות</span>
            </div>
            <p className="founder-desc">מתמחה ביצירת קונספטים וקמפיינים שמניעים לפעולה ומייצרים באזז.</p>
          </div>

          {/* Omri */}
          <div className="founder-card omri-card">
            <div className="founder-img">
              <img src={OmriPic} alt="Omri" />
            </div>
            <h3 className="founder-name">עומרי</h3>
            <p className="founder-role purple">אסטרטגיה וצמיחה</p>
            <div className="founder-highlight">
              <span className="icon">
                <svg>{/* Award icon */}</svg>
              </span>
              <span>מוביל את תחום האסטרטגיה והצמיחה העסקית</span>
            </div>
            <p className="founder-desc">מוביל את התכנון האסטרטגי, ניתוח נתונים, ואופטימיזציה לצמיחה ארוכת טווח.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
