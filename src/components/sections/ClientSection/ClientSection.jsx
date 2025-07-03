import React from "react";
import { motion } from "framer-motion";
import LogoCarousel from "../../util-components/LogoCarousel/LogoCarousel";
import "./ClientSection.style.css";

export default function ClientSection({ isVisible }) {

  return (
    <section id="clients" className="clients-section">
      <div className="clients-content">
        {/* <LogoCarousel isVisible={isVisible} backgroundColor="white" /> */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.clients ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="clients-header"
        >
          <LogoCarousel isVisible={true} backgroundColor="transparent" isClientLogos={true} />
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
