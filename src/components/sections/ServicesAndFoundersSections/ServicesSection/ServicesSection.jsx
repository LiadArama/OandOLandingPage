import { motion } from "framer-motion";
import "../../../../styles/Global.style.css";
import "./ServicesSection.style.css";
import "./styles/ServiceCard.style.css";
import ServiceCard from "./components/ServiceCard";
import "./styles/LetsTalkBtn.style.css";
import { Palette, MousePointer, Users, BarChart3 } from "lucide-react";

function scrollToContact() {
  const contactEl = document.getElementById("contact");
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: "smooth" });
  }
}


export default function ServicesSection({ isVisible }) {
  const services = [
    {
      icon: Palette,
      title: "Creative & Copywriting",
      description: "בין אם זו מודעה, דף נחיתה או סרטון. הקריאייטיב שלנו לא רק יפה, הוא ממוקד תוצאה. אנחנו יודעים איך לגרום לקהל שלך לעצור, להתעניין ולפעול",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: MousePointer,
      title: "PPC Campaigns",
      description: "ניהול קמפיינים בפייסבוק, אינסטגרם, גוגל, טיקטוק ועוד עם דגש על יצירת לידים איכותיים. לא נסתפק רק בקליקים, אנחנו שואפים להחזר השקעה גבוה וניצול מקסימלי של התקציב.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "ניהול עמודים, יצירת תוכן שוטף, עיצוב גרפי ואינטראקציה עם הקהל. הכול נעשה תוך התאמה אישית לקול ולשפה של העסק שלך, כדי להפוך עוקבים למעורבים ומעורבים ללקוחות.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Strategy & Consulting",
      description: "אסטרטגיה טובה היא הבסיס לכל מהלך שיווקי מצליח. אנחנו בונים יחד איתך תוכנית פעולה שמבוססת על הבנת קהל היעד, הגדרת מטרות ברורה, וניתוח עומק של הסביבה העסקית והמתחרים.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
<section id="services" className="services-section">
      <div className="services-founders-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <h2 className="section-title services-section-title" style={{   fontSize: 'clamp(2.25rem, 7vw, 7rem)'}}>
            How We <br></br>
            <span className="title-gradient">Build The Future</span>
          </h2>

          <br />
          <br />
        </motion.div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                iconBg={service.iconBg}
                iconColor={service.iconColor}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="talk-button-wrapper"
          style={{ paddingTop: "2rem", marginBottom: "2rem" }}
        >
          <button onClick={scrollToContact} className="btn-primary">
            <span className="btn-text hebrew-text">בואו נדבר</span>
            <svg
              className="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </motion.div>
      </section>
  );
}
