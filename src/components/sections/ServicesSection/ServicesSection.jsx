import { motion } from "framer-motion";
import "../../../styles/Global.style.css";
import "./ServicesSection.style.css";
import "./styles/ServiceCard.style.css";
import ServiceCard from "./components/ServiceCard";
import { Palette, MousePointer, Users, BarChart3 } from "lucide-react";

export default function ServicesSection({ isVisible }) {
  const services = [
    {
      icon: Palette,
      title: "Creative & Copywriting",
      description: "קריאייטיב ותוכן שמעוררים השראה ומניעים לפעולה",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: MousePointer,
      title: "PPC Campaigns",
      description: "קמפיינים ממומנים חכמים עם ROI מקסימלי",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "ניהול רשתות חברתיות שבונה קהילה ומחזק מותג",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Strategy & Consulting",
      description: "ייעוץ אסטרטגי מקצועי לצמיחה בת קיימא",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    }
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
      PLACE HOLDER FOR FOUNDERS SECTION.
    </section>
  );
}
