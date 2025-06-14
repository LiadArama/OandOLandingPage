import React from "react";
import { motion } from "framer-motion";
import logo from '../../../assets/OObluebackground.png'
import "./HeroSection.style.css";
import '../../../styles/Global.style.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="hero-circle-blue"
        />
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="hero-logo"
        >
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="hero-logo-inner"
          >
            <img
              src={logo}
              alt="O&O DIGITAL FUTURE Logo"
              className="hero-logo-img"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="hero-title"
        >
       We Build The{" "} <br></br>
          <span className="hero-gradient-text">Digital Future</span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="hero-subtitle english-text"
        >
      Your digital future starts here



        </motion.p>
      </div>
    </section>
  );
}
