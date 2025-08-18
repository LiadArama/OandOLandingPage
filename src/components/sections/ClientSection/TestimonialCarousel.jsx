import { useEffect, useRef, useState, useLayoutEffect } from "react";
import "./TestimonialCarousel.style.css";

const rawTestimonials = [
  {
    text: `HAKER X DIGITAL היקרים 
חייב לומר לכם תודה על עבודה פנומנלית בבניית קופי איכותי ומדויק לתוכן שאני מעלה לרשתות ובנוסף, היכולת שלכם ללמוד את הלקוח ולהתפתח איתו כדי להבין איך לצלם את התוכן בצורה שהמסר יעבור לקהל
תודה על הכל ושרק תמשיכו לתת בראש 💪🏻`,
  },
  {
    text: `חיפשתי מישהו שיכניס לנו סדר בדיגיטל וקיבלתי סוכנות שחושבת על כל פרט.
HAKER X DIGITAL לקחו את כל הדיגיטל שלנו קדימה, והכפילו את המחזור תוך זמן קצר.
והכי חשוב? מרגיש שהם באמת חלק מהצוות שלי.`,
  },
  {
    text: `לא האמנתי שקמפיינים יכולים באמת לעשות כזה הבדל, אבל מאז שהתחלתי לעבוד עם HAKER X DIGITAL המחזור שלנו פשוט הוכפל.
הם מקצוענים בטירוף, זמינים תמיד, ובעיקר מביאים לנו תוצאות לעסק.
מבחינתי, זה שקט ששווה הכל!`,
  },
  {
    text: `
 HAKER X DIGITAL עזרו לנו לתרגם את הסיפור והעשייה שלנו לשפה מדויקת ואיכותית ברשתות. בזכותם אנחנו מתמקדים בעבודה שלנו בראש שקט, בידיעה שהשיווק בידיים מקצועיות ויצירתיות. ממליצה עליהם בחום. שותפים אמיתיים לדרך.
`,
  },
];

// clone first and last items
const extendedTestimonials = [
  ...rawTestimonials,
  ...rawTestimonials.slice(0, 3), // clone first 3
];

export default function TestimonialCarousel() {
  const cardRefs = useRef([]);
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [index, setIndex] = useState(rawTestimonials.length - 1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getActiveDotIndex = () => {
    let rawIndex = index % rawTestimonials.length;
    if (rawIndex < 0) rawIndex += rawTestimonials.length;

    const rtlIndex = rawTestimonials.length - 1 - rawIndex;
    return rtlIndex;
  };
  
  const updateSizes = () => {
  setTimeout(() => {
    const screenWidth = window.innerWidth;
    const container = trackRef.current;
    if (!container) return;

    let newVisibleCount = 3;
    if (screenWidth <= 600) newVisibleCount = 1;
    else if (screenWidth <= 1023) newVisibleCount = 2;

    setVisibleCount(newVisibleCount);

    const gap = 32;
    const containerWidth = container.offsetWidth;
    const cardW = (containerWidth - gap * (newVisibleCount - 1)) / newVisibleCount;
    setCardWidth(cardW);
  }, 0); // give layout a breath
};


  const updateCardHeights = () => {
    if (!cardRefs.current) return;

    // Reset all heights
    cardRefs.current.forEach(card => {
      if (card) card.style.height = "auto";
    });

    // Get the max height
    const heights = cardRefs.current.map(card => (card ? card.offsetHeight : 0));
    const maxHeight = Math.max(...heights);

    // Apply max height to all
    cardRefs.current.forEach(card => {
      if (card) card.style.height = `${maxHeight}px`;
    });
  };

  let resizeTimer;
const handleResize = () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    updateSizes();
    updateCardHeights();
  }, 100); // adjust as needed
};

useLayoutEffect(() => {
  updateSizes();
  updateCardHeights();

  const handleResize = () => {
    updateSizes();
    updateCardHeights();
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
  updateCardHeights();
}, [cardWidth, index, visibleCount]);



  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    const track = trackRef.current.querySelector(".testimonial-track");

    if (index === 0) {
      // Jump to end first with no transition
      const newIndex = rawTestimonials.length;
      if (track) {
        track.style.transition = "none";
        track.style.transform = `translateX(-${newIndex * (cardWidth + 32)}px)`;
        void track.offsetWidth;
        track.style.transition = "transform 0.3s ease-in-out";
      }
      setIndex(newIndex - 1); // Show the last full slide
    } else {
      setIsTransitioning(true);
      setIndex(prev => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    const maxIndex = extendedTestimonials.length - visibleCount;
    if (index >= maxIndex) {
      const track = trackRef.current.querySelector(".testimonial-track");
      if (track) {
        track.style.transition = "none";
        track.style.transform = `translateX(0px)`;
        void track.offsetWidth;
        track.style.transition = "transform 0.3s ease-in-out";
      }
      setIndex(0);
    }
    setIsTransitioning(false);
  };

  return (
    <div className="testimonial-carousel" ref={trackRef}>
      <div
        className="testimonial-track"
        style={{
          transform: `translateX(-${index * (cardWidth + 32)}px)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedTestimonials.map((item, i) => (
          <div
            ref={el => (cardRefs.current[i] = el)}
            className="testimonial-card"
            key={i}
            style={{ width: `${cardWidth}px` }}
          >
            <p className="testimonial-text">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="testimonial-controls">
        <button onClick={handlePrev}>‹</button>
        <button onClick={handleNext}>›</button>
      </div>

      <div className="testimonial-dots">
        {Array.from({ length: rawTestimonials.length }).map((_, i) => {
          const rtlIndex = rawTestimonials.length - 1 - i; // reverse order
          return (
            <span
              key={rtlIndex}
              className={`dot ${rtlIndex === getActiveDotIndex() ? "active" : ""}`}
              onClick={() => setIndex(rtlIndex)}
            />
          );
        })}
      </div>
    </div>
  );
}
