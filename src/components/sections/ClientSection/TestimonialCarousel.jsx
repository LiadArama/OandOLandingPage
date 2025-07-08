import { useEffect, useRef, useState } from "react";
import "./TestimonialCarousel.style.css";

const rawTestimonials = [
  { title: "לקוח א'", text: "שירות מדהים, תוצאות בזמן קצר ויחס אישי!" },
  { title: "לקוח ב'", text: "ממליץ בחום! מקצועיות שאין שני לה." },
  { title: "לקוח ג'", text: "הצוות היה קשוב, יצירתי ונתן מעל ומעבר." },
  { title: "לקוח ד'", text: "תהליך עבודה נעים עם תוצאה יוצאת דופן!" },
  { title: "לקוח ה'", text: "עיצוב שמדבר בעד עצמו. תודה רבה!" },
];


// clone first and last items
const extendedTestimonials = [
  ...rawTestimonials,
  ...rawTestimonials.slice(0, 3) // clone first 3
];



export default function TestimonialCarousel() {
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [index, setIndex] = useState(rawTestimonials.length - 1);
  const [isTransitioning, setIsTransitioning] = useState(false);

//   const getActiveDotIndex = () => {
//   let rawIndex = index % rawTestimonials.length;

//   // Clamp to valid dot range
//   if (rawIndex < 0) rawIndex += rawTestimonials.length;

//   const maxDotIndex = rawTestimonials.length;
//   return Math.min(rawIndex, maxDotIndex - 1);
// };
const getActiveDotIndex = () => {
  if(index === 4) debugger;
  let rawIndex = index % rawTestimonials.length;
  if (rawIndex < 0) rawIndex += rawTestimonials.length;

  const rtlIndex = rawTestimonials.length - 1 - rawIndex;
  return rtlIndex;
};
  const updateSizes = () => {
    const screenWidth = window.innerWidth;
    const container = trackRef.current;
    if (!container) return;

    if (screenWidth < 600) {
      setVisibleCount(1);
    } else if (screenWidth < 1024) {
      setVisibleCount(2);
    } else {
      setVisibleCount(3);
    }

    const gap = 32;
    const containerWidth = container.offsetWidth;
    const cardW = (containerWidth - gap * (visibleCount - 1)) / visibleCount;
    setCardWidth(cardW);
  };

  useEffect(() => {
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, [visibleCount]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
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
    setIndex((prev) => prev - 1);
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
            className="testimonial-card"
            key={i}
            style={{ width: `${cardWidth}px` }}
          >
            <h4 className="testimonial-title">{item.title}</h4>
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
