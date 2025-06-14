import React from "react";
import { motion } from "framer-motion";
import logo from '../../../assets/OObluebackground.png'
import "./HeroSection.style.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="hero-circle-blue"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="hero-circle-purple"
        />
        <div className="hero-shape-1" />
        <div className="hero-shape-2" />
        <div className="hero-shape-3" />
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-logo"
        >
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="hero-logo-inner"
          >
            <img
            //   src="OandOLandingPage/src/styles/6d9613dd7_OObluebackground.png"
              src={logo}
              alt="O&O DIGITAL FUTURE Logo"
              className="hero-logo-img"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title"
        >
          We Build the{" "}
          <span className="hero-gradient-text">Digital Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subtitle"
        >
          העתיד הדיגיטלי שלך מתחיל כאן <br></br> 
 ואנחנו יודעים לבנות אותו

        </motion.p>
      </div>
    </section>
  );
}
