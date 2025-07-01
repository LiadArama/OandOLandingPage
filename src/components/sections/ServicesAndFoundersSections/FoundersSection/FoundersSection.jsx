import "./FoundersSection.style.css";
import OmerPic from "../../../../assets/OmerPic.jpeg";
import OmriPic from "../../../../assets/OmriPic.jpeg";
import { motion } from "framer-motion";

export default function FoundersSection({ isVisible }) {
  return (
    <section className="founders-section">
      <div className="founders-content">
        <div className="founders-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="founders-title hebrew-section-title">המייסדים</h2>
            <p className="founders-subtitle">מאחורי הסוכנות – שני שותפים עם חזון אחד: לעבוד עם לקוחות, לא עבורם.</p>
          </motion.div>
        </div>

        <div className="founders-grid">
          {/* Omer */}
          <motion.div
            className="founder-card omer-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="founder-img">
              <img src={OmerPic} alt="Omer" />
            </div>
            <h3 className="founder-name">עומר</h3>
            <p className="founder-role pink">קריאייטיב וקמפיינים</p>
            <div className="founder-highlight">
              <span className="icon">
                <svg>{/* Lightbulb icon */}</svg>
              </span>
              <span>מוביל את תחום היצירתיות והחדשנות</span>
            </div>
            <p className="founder-desc">מתמחה ביצירת קונספטים וקמפיינים שמניעים לפעולה ומייצרים באזז.</p>
          </motion.div>
          {/* Omri */}
          <motion.div
            className="founder-card omri-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="founder-img">
              <img src={OmriPic} alt="Omri" />
            </div>
            <h3 className="founder-name">עומרי</h3>
            <p className="founder-role purple">אסטרטגיה וצמיחה</p>
            <div className="founder-highlight">
              <span className="icon">
                <svg>{/* Award icon */}</svg>
              </span>
              <span>מוביל את תחום האסטרטגיה והצמיחה העסקית</span>
            </div>
            <p className="founder-desc">מוביל את התכנון האסטרטגי, ניתוח נתונים, ואופטימיזציה לצמיחה ארוכת טווח.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
