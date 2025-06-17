import React from "react";
import { motion } from "framer-motion";
import "./ClientSection.style.css";
import { LogoCarousel } from "../AboutSection/AboutSection";

export default function ClientSection({ isVisible }) {

  return (
    <section id="clients" className="clients-section">
      <div className="clients-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.clients ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="clients-header"
        >
          <LogoCarousel/>
          <h2 className="section-title blue-background-text">
            What{" "}
            <span className="title-gradient"> Our Clients</span>
            {" "}Say
          </h2>

        <h3> PLACEHOLDER FOR CLIENTS TALK ABOUT THE BRAND LIKE IN CONCEPT MEDIA WITH BLUE NAVY BACKGROUND AND WHITE TEXT - refer to concept  media website</h3>


          

        </motion.div>
      </div>
    </section>
  );
}
