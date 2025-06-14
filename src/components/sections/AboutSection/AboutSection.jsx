import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.style.css";

export default function AboutSection({ isVisible }) {
  const founders = [
    {
      name: "Oliver Schmidt",
      role: "Co-Founder & Strategy Director",
      bio: "15+ years in digital marketing strategy. Former head of digital at leading tech companies. Passionate about data-driven growth.",
      initials: "OS"
    },
    {
      name: "Olivia Chen",
      role: "Co-Founder & Creative Director",
      bio: "Award-winning creative director with expertise in brand storytelling. Previously led creative teams at top advertising agencies.",
      initials: "OC"
    }
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
          <div className="about-badge">About O&O Digital Future</div>

          <h2 className="about-title">
            360° Marketing That{" "}
            <span className="gradient-text">Actually Works</span>
          </h2>

          <p className="about-description">
            We're not just another digital agency. We're your strategic partners in building 
            a digital presence that converts, engages, and grows. From PPC campaigns that deliver ROI 
            to creative content that captivates audiences – we handle it all with precision and passion.
          </p>

          <div className="about-services">
            <ServiceItem delay={0.2} title="Strategic Focus" text="Data-driven strategies that align with your business goals" color="blue" />
            <ServiceItem delay={0.4} title="Lightning Fast" text="Quick execution without compromising on quality" color="purple" />
            <ServiceItem delay={0.6} title="Partnership" text="We become an extension of your team, not just a vendor" color="indigo" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="founders-section"
        >
          <h3 className="founders-title">Meet the Founders</h3>

          <div className="founders-grid">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isVisible.about ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="founder-card"
              >
                <div className={`founder-initial ${index % 2 === 0 ? "blue-bg" : "purple-bg"}`}>
                  {founder.initials}
                </div>
                <div className="founder-info">
                  <h4 className="founder-name">{founder.name}</h4>
                  <p className="founder-role">{founder.role}</p>
                  <p className="founder-bio">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceItem({ delay, title, text, color }) {
  const colorClass = {
    blue: "service-icon-blue",
    purple: "service-icon-purple",
    indigo: "service-icon-indigo"
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
