import React, { useState, useEffect } from "react";
import ScrollToTopOnMount from "./components/util-components/ScrollToTopOnMount";
import "./styles/Global.style.css";

// Import new sections
import HeroSection from "./components/sections/HeroSection/HeroSection";
import AboutSection from "./components/sections/AboutSection/AboutSection";
import ClientSection from "./components/sections/ClientSection/ClientSection";
import ContactSection from "./components/sections/ContactSection/ContactSection";
import FooterSection from "./components/sections/FooterSection/FooterSection";
import ServicesAndFoundersSection from "./components/sections/ServicesAndFoundersSections/ServicesAndFoundersSection";

export default function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[id]");
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollToTopOnMount />
      <HeroSection />
      <AboutSection isVisible={isVisible} />
      <ServicesAndFoundersSection isVisible={isVisible} />
      <ClientSection isVisible={isVisible} />
      <ContactSection isVisible={isVisible} />
      <FooterSection />
    </>
  );
}
