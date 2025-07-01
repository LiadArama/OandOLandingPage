import React from "react";
import { motion } from "framer-motion";
import LogoCarousel from "../../util-components/LogoCarousel/LogoCarousel";
import "./AboutSection.style.css";

export default function AboutSection({ isVisible }) {
  return (
    <section id="about" className="about-section">
      <div className="about-content hebrew-text">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <b className="about-welcome"> היי, כיף שהגעתם!</b>
          <b>
            <p className="about-description">
              אנחנו O&O, סוכנות דיגיטל שחושבת רחב ופועלת מדויק. <br />
              המומחיות שלנו היא לבנות עבור כל לקוח מעטפת 360 שמכסה את כל הצרכים השיווקיים של העסק – מאסטרטגיה חכמה, דרך
              קריאייטיב שמתחבר לקהל, ועד ביצוע ממוקד שמביא תוצאות בשטח. <br />
            </p>
            <p className="about-description">
              אנחנו מלווים את הלקוחות שלנו מקצה לקצה: <br />
              מניהול עמודים ברשתות החברתיות, יצירת תוכן קריאייטיבי, קופירייטינג, קמפיינים ממומנים בכל הפלטפורמות
              המובילות, ועד לניתוח נתונים ושיפור מתמיד של הביצועים. <br />
            </p>
            <p className="about-description">
              העבודה שלנו תמיד מותאמת אישית. אין אצלנו שבלונות. <br />
              אנחנו נכנסים לעומק של כל מותג, מבינים את המטרות העסקיות, ויוצרים מהן שפה שיווקית מדויקת שמובילה את הקהל
              הנכון עם מיקוד אחד ברור – תוצאות.
            </p>
            <p className="about-description" style={{ marginTop: "1.3rem", marginBottom: "0.2rem" }}>
              מהר מאוד תבינו , O&O זה לא רק דיגיטל. <br />
              זה מערכת יחסים. מוכנים להתאהב?
            </p>
          </b>
        </motion.div>
      </div>
    </section>
  );
}

