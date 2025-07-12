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
            <h2 className="founders-title hebrew-section-title">About Us</h2>
          </motion.div>
        </div>

        <div className="founders-grid">
          {/* Omer */}
          <motion.div
            className="founder-card omer-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              y: { duration: 0.8, delay: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 20px 50px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 1.02 }}
          >
            <div className="founder-card-inner">
              <div className="founder-img">
                <img src={OmerPic} alt="Omer" />
              </div>
              <div className="founder-info">
                <h3 className="founder-name">עומר</h3>
                <div className="founder-highlight">
                  <span>מומחה לקמפיינים דיגיטליים עם ניסיון בניהול תקציבים גבוהים בכלל הפלטפורמות המובילות</span>
                </div>
                <p className="founder-desc">מתמחה בקריאייטיב בועט, קופירייטינג מדויק וניתוח מתקדם של נתונים עם מטרה אחת ברורה: לייצר ביצועים שמשפיעים על העסק</p>
              </div>
            </div>
          </motion.div>
          {/* Omri */}
          <motion.div
            className="founder-card omri-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              y: { duration: 0.8, delay: 0.2},
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 20px 50px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 1.02 }}
          >
            <div className="founder-card-inner">
              <div className="founder-img">
                <img src={OmriPic} alt="Omri" />
              </div>
              <div className="founder-info">
                <h3 className="founder-name">עומרי</h3>
                <div className="founder-highlight">
                  <span>עשר שנות ניסיון בפיתוח עסקי ומכירות  בעל ידע רחב בשיווק ואסטרטגיה דיגיטלית, תואר שני במנהל עסקים (MBA) </span>
                </div>
                <p className="founder-desc">מתמחה בבניית אסטרטגיות צמיחה מעשיות ומדידות, המותאמות ליעדים העסקיים של הלקוחות</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
