import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./components/ServiceCard";
import "./ServicesSection.style.css";

export default function ServicesSection({ isVisible }) {
  const services = [
    {
      title: "PPC Campaigns",
      description: "Performance-driven paid advertising that delivers measurable ROI across Google Ads, Facebook, and beyond.",
      features: ["Google Ads Management", "Facebook & Instagram Ads", "Campaign Optimization", "Performance Analytics"],
      gradientClass: "gradient-blue"
    },
    {
      title: "Social Media Management",
      description: "Build authentic connections with your audience through strategic social media presence and community building.",
      features: ["Content Strategy", "Community Management", "Social Analytics", "Influencer Partnerships"],
      gradientClass: "gradient-purple"
    },
    {
      title: "Creative & Copywriting",
      description: "Compelling content and stunning visuals that tell your brand story and convert prospects into customers.",
      features: ["Brand Storytelling", "Visual Design", "Content Creation", "Copy Optimization"],
      gradientClass: "gradient-indigo"
    },
    {
      title: "Strategy & Consulting",
      description: "Data-driven marketing strategies tailored to your business goals, market position, and growth objectives.",
      features: ["Market Analysis", "Competitive Research", "Growth Strategy", "Performance Consulting"],
      gradientClass: "gradient-green"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <div className="services-badge">What We Do</div>
          <h2 className="services-title">
            Complete Digital Marketing{" "}
            <span className="gradient-services">Solutions</span>
          </h2>
          <p className="services-description">
            From strategy to execution, we cover every aspect of your digital marketing needs 
            with precision, creativity, and measurable results.
          </p>
        </motion.div>

        <div className="services-horizontal-scroll">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
