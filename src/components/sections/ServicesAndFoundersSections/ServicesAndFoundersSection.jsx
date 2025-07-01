import {motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../../styles/Global.style.css";
import "./ServicesSection/ServicesSection.style.css";
import "./FoundersSection/FoundersSection.style.css";
import "./ServicesAndFoundersSection.style.css";
import ServicesSection from "./ServicesSection/ServicesSection";
import FoundersSection from "./FoundersSection/FoundersSection";
import LogoCarousel from "../../util-components/LogoCarousel/LogoCarousel";

export default function ServicesAndFoundersSection() {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [foundersRef, foundersInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [logosRef, logosInView] = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <section id="services-founders" className="services-founders-section">
      <div className="services-founders-background">
        <div
          initial={{ opacity: 0, y: 30 }}
            animate={servicesInView || foundersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="services-founders-circle-top"
        ></div>
        {/* <div className="services-founders-circle-top" /> */}
                {/* <div
          initial={{ opacity: 0, y: 30 }}
            animate={servicesInView || foundersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="services-founders-circle-bottom"
        ></div> */}
        {/* <div className="services-founders-circle-bottom" /> */}
      </div>

      <div className="services-founders-content">
        <div ref={servicesRef} className="services-section">
          <ServicesSection isVisible={servicesInView} />
        </div>
        <div ref={logosRef} className="logos-carousel">
          <LogoCarousel isVisible={logosInView} backgroundColor="transparent" />
        </div>
        <div ref={foundersRef} className="founders-section">
          <FoundersSection isVisible={foundersInView} />
        </div>
                <div ref={logosRef} className="logos-carousel">
          <LogoCarousel isVisible={logosInView} backgroundColor="transparent" />
        </div>
      </div>
    </section>
  );
}
