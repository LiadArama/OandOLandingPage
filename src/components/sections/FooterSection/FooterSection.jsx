import { motion } from "framer-motion";
import "./FooterSection.style.css";
import whiteLogo from "../../../assets/OObluebackground.png"; // Adjust the path as necessary
export default function FooterSection() {
  const contactMethods = [
    { title: "WhatsApp", value: "+1 (555) 123-4567", gradient: "gradient-green" },
    { title: "Phone", value: "+1 (555) 123-4567", gradient: "gradient-blue" },
    { title: "Email", value: "hello@oodigital.com", gradient: "gradient-purple" },
    { title: "Instagram", value: "@oodigitalfuture", gradient: "gradient-indigo" },
  ];

  return (
    <section className="footer-section">
      <div className="footer-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p>Berlin, Germany & Remote Worldwide</p>
          <div className="footer-logo">
            <img src={whiteLogo} alt="O&O Logo" />
          </div>
          <a
            href="https://wa.me/972501234567?text=Hi%20I'm%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          ></a>
          <p className="copyright">© 2024 O&O Digital Future. Building the future, one campaign at a time.</p>
        </motion.div>
      </div>
    </section>
  );
}
