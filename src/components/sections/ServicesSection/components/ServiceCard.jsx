import "../styles/ServiceCard.style.css";

export default function ServiceCard({ title, description, features, gradientClass }) {
  return (
    <div className="service-card">      
      <h3 className="service-card-title"><span className="title-gradient-text title-gradient">{title}</span></h3>
      <p className="service-card-desc">{description}</p>
      <ul className="service-features">
        {features.map((feature, idx) => (
          <li key={idx} className="service-feature-item">
            <div className={`feature-dot ${gradientClass}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
