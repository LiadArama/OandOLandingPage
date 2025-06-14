import React from "react";
import { motion } from "framer-motion";
import "./FooterSection.style.css";

export default function FooterSection() {
  const contactMethods = [
    { title: "WhatsApp", value: "+1 (555) 123-4567", gradient: "gradient-green" },
    { title: "Phone", value: "+1 (555) 123-4567", gradient: "gradient-blue" },
    { title: "Email", value: "hello@oodigital.com", gradient: "gradient-purple" },
    { title: "Instagram", value: "@oodigitalfuture", gradient: "gradient-indigo" }
  ];

  return (
    <section className="footer-section">
      <div className="footer-content">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="footer-header"
        >
          <h2 className="footer-title">
            It's not just marketing.{" "}
            <span className="gradient-footer">It's partnership.</span>
          </h2>

          <p className="footer-description">
            We believe in building long-term relationships based on trust, transparency, and results. 
            When you succeed, we succeed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="contact-grid"
        >
          {contactMethods.map((method, idx) => (
            <div key={idx} className="contact-card">
              <div className={`contact-icon ${method.gradient}`}></div>
              <h3>{method.title}</h3>
              <p>{method.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p>Berlin, Germany & Remote Worldwide</p>
          <div className="footer-logo">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6d9613dd7_OObluebackground.png"
              alt="O&O Logo"
            />
          </div>
          <p className="copyright">
            © 2024 O&O Digital Future. Building the future, one campaign at a time.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
