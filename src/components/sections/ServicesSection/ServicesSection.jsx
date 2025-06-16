import React from "react";
import { motion } from "framer-motion";
// import ServiceCard from "./components/ServiceCard";
import "./ServicesSection.style.css";
import ppcPic from '../../../assets/ppc-service.png';
import socialMediaPic from '../../../assets/social-media.png';
import strategyPic from '../../../assets/strategy.png';
import creativeCopywritingPic from '../../../assets/creative-copywriting.png';

// export default function ServicesSection({ isVisible }) {
//   const services = [
//     {
//       title: "PPC Campaigns",
//       description: "Performance-driven paid advertising that delivers measurable ROI across Google Ads, Facebook, and beyond.",
//       features: ["Google Ads Management", "Facebook & Instagram Ads", "Campaign Optimization", "Performance Analytics"],
//       gradientClass: "gradient-blue"
//     },
//     {
//       title: "Social Media Management",
//       description: "Build authentic connections with your audience through strategic social media presence and community building.",
//       features: ["Content Strategy", "Community Management", "Social Analytics", "Influencer Partnerships"],
//       gradientClass: "gradient-purple"
//     },
//     {
//       title: "Creative & Copywriting",
//       description: "Compelling content and stunning visuals that tell your brand story and convert prospects into customers.",
//       features: ["Brand Storytelling", "Visual Design", "Content Creation", "Copy Optimization"],
//       gradientClass: "gradient-indigo"
//     },
//     {
//       title: "Strategy & Consulting",
//       description: "Data-driven marketing strategies tailored to your business goals, market position, and growth objectives.",
//       features: ["Market Analysis", "Competitive Research", "Growth Strategy", "Performance Consulting"],
//       gradientClass: "gradient-green"
//     }
//   ];

//   return (
//     <section id="services" className="services-section">
//       <div className="services-content">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="services-header"
//         >
//           <div className="services-badge">What We Do</div>
//           <h2 className="services-title">
//             Complete Digital Marketing{" "}
//             <span className="gradient-services">Solutions</span>
//           </h2>
//           <p className="services-description">
//             From strategy to execution, we cover every aspect of your digital marketing needs 
//             with precision, creativity, and measurable results.
//           </p>
//         </motion.div>

//         <div className="services-horizontal-scroll">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <ServiceCard {...service} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function ServicesSection({ isVisible }) {
  const services = [
    {
      title: "PPC Campaigns",
      description: `ניהול קמפיינים בפייסבוק, אינסטגרם, גוגל, טיקטוק ועוד עם דגש על יצירת לידים איכותיים. לא נסתפק רק בקליקים, אנחנו שואפים להחזר השקעה גבוה וניצול מקסימלי של התקציב.`,
      gradientClass: "gradient-blue",
      icon: ppcPic,
    },
    {
      title: "Social Media Management",
      description: ` ניהול עמודים, יצירת תוכן שוטף, עיצוב גרפי ואינטראקציה עם הקהל. 
 הכול נעשה תוך התאמה אישית לקול ולשפה של העסק שלך, כדי להפוך עוקבים למעורבים ומעורבים ללקוחות.`,
      gradientClass: "gradient-purple",
      icon: socialMediaPic,
    },
    {
      title: "Creative & Copywriting",
      description: ` בין אם זו מודעה, דף נחיתה או סרטון.
הקריאייטיב שלנו לא רק יפה, הוא ממוקד תוצאה. אנחנו יודעים איך לגרום לקהל שלך לעצור, להתעניין ולפעול.`,
      gradientClass: "gradient-indigo",
      icon: creativeCopywritingPic,
    },
    {
      title: "Strategy & Consulting",
      description: `אסטרטגיה טובה היא הבסיס לכל מהלך שיווקי מצליח.
אנחנו בונים יחד איתך תוכנית פעולה שמבוססת על הבנת קהל היעד, הגדרת מטרות ברורה, וניתוח עומק של הסביבה העסקית והמתחרים.

המטרה: לא סתם לפרסם, אלא לפעול חכם – עם כיוון ברור, מסר חד ותכנון שמייצר תוצאות אמיתיות.`,
      features: ["Market Analysis", "Competitive Research", "Growth Strategy", "Performance Consulting"],
      gradientClass: "gradient-green",
      icon: strategyPic,

    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-background">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="services-circle-top"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="services-circle-bottom"
        />
      </div>

      <div className="services-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="services-header"
        >

          <h2 className="services-title">
            How We{" "}
            <span className="gradient-services">Build The Future</span>
             
          </h2>

        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card"
            >
              {/* <div className={`service-icon ${service.gradientClass}`}></div> */}
              <img src={service.icon} />
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}