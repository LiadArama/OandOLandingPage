// import "./App.css";
// import "./styles/Global.style.css"; // Importing global styles
// import ScrollToTopOnMount from "./components/util-components/ScrollToTopOnMount.jsx";
// import MyLogo from "./components/page-header/components/MyLogo.jsx";
// import MainTitle from "./components/page-header/components/MainTitle.jsx";
// import PageIntroduction from "./components/page-intorduction/PageIntroduction.jsx";
// import PageHeader from "./components/page-header/PageHeader.jsx";

// function App() {
//   return (
//     <>
//       <ScrollToTopOnMount />
//       <PageHeader />
//       <PageIntroduction />
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import ScrollToTopOnMount from "./components/util-components/ScrollToTopOnMount";

// Import new sections
import HeroSection from "./components/sections/HeroSection/HeroSection";
import AboutSection from "./components/sections/AboutSection/AboutSection";
import ServicesSection from "./components/sections/ServicesSection/ServicesSection";
import ClientSection from "./components/sections/ClientSection/ClientSection";
import ContactSection from "./components/sections/ContactSection/ContactSection";
import FooterSection from "./components/sections/FooterSection/FooterSection";

// Optional: import global styles
import "./styles/Global.style.css";

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
      <ServicesSection isVisible={isVisible} />
      <ClientSection isVisible={isVisible} />
      <ContactSection isVisible={isVisible} />
      <FooterSection />
    </>
  );
}
