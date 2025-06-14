import React from "react";
import { motion } from "framer-motion";
import "./ClientSection.style.css";

export default function ClientSection({ isVisible }) {
  const clientLogos = [
    { name: "TechCorp", gradientClass: "gradient-blue" },
    { name: "InnovateAI", gradientClass: "gradient-purple" },
    { name: "GrowthLab", gradientClass: "gradient-green" },
    { name: "FutureScale", gradientClass: "gradient-indigo" },
    { name: "DigitalFirst", gradientClass: "gradient-orange" },
    { name: "NextGen Co", gradientClass: "gradient-teal" }
  ];

  const stats = [
    { number: "500%", text: "Average ROI Increase" },
    { number: "50+", text: "Successful Campaigns" },
    { number: "98%", text: "Client Satisfaction" }
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="clients-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.clients ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="clients-header"
        >
          <div className="clients-badge">Trusted Partners</div>

          <h2 className="clients-title">
            Brands We've{" "}
            <span className="gradient-clients">Helped Grow</span>
          </h2>

          <p className="clients-description">
            From startups to enterprise companies, we've partnered with forward-thinking 
            brands to accelerate their digital growth and achieve remarkable results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible.clients ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="clients-grid"
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible.clients ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="client-card"
            >
              <div className={`client-logo ${client.gradientClass}`}>
                <span>{client.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.clients ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="clients-stats"
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-text">{stat.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
