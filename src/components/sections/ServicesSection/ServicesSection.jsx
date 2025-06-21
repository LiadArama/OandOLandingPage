import { motion } from "framer-motion";
import "../../../styles/Global.style.css";
import "./ServicesSection.style.css";
import "./styles/ServiceCard.style.css";
import ppcPic from "../../../assets/services-images/ppc-service.png";
import socialMediaPic from "../../../assets/services-images/social-media.png";
import strategyPic from "../../../assets/services-images/strategy.png";
import creativeCopywritingPic from "../../../assets/services-images/creative-copywriting.png";
export default function ServicesSection({ isVisible }) {
  const services = [
    {
      title: "PPC Campaigns",
      description: `ניהול קמפיינים בפייסבוק, אינסטגרם, גוגל, טיקטוק ועוד עם דגש על יצירת לידים איכותיים. לא נסתפק רק בקליקים, אנחנו שואפים להחזר השקעה גבוה וניצול מקסימלי של התקציב.`,
      icon: ppcPic,
    },
    {
      title: "Social Media Management",
      description: ` ניהול עמודים, יצירת תוכן שוטף, עיצוב גרפי ואינטראקציה עם הקהל. 
 הכול נעשה תוך התאמה אישית לקול ולשפה של העסק שלך, כדי להפוך עוקבים למעורבים ומעורבים ללקוחות.`,
      icon: socialMediaPic,
    },
    {
      title: "Creative & Copywriting",
      description: ` בין אם זו מודעה, דף נחיתה או סרטון.
הקריאייטיב שלנו לא רק יפה, הוא ממוקד תוצאה. אנחנו יודעים איך לגרום לקהל שלך לעצור, להתעניין ולפעול.`,
      icon: creativeCopywritingPic,
    },
    {
      title: "Strategy & Consulting",
      description: `אסטרטגיה טובה היא הבסיס לכל מהלך שיווקי מצליח.
אנחנו בונים יחד איתך תוכנית פעולה שמבוססת על הבנת קהל היעד, הגדרת מטרות ברורה, וניתוח עומק של הסביבה העסקית והמתחרים.

המטרה: לא סתם לפרסם, אלא לפעול חכם – עם כיוון ברור, מסר חד ותכנון שמייצר תוצאות אמיתיות.`,
      features: ["Market Analysis", "Competitive Research", "Growth Strategy", "Performance Consulting"],
      icon: strategyPic,
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-background">
        <div className="services-circle-top" />
        <div className="services-circle-bottom" />
      </div>

      <div className="services-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <h2 className="section-title white-background-text">
            How We <span className="title-gradient">Build The Future</span>
          </h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="service-card"
            >
              <img src={service.icon} />
              <h3 className="service-card-title title-gradient">{service.title}</h3>
              <p className="service-card-desc hebrew-text">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
