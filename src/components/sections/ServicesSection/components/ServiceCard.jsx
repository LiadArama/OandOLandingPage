import "../styles/ServiceCard.style.css";

export default function ServiceCard({ 
  icon: Icon, 
  iconBg, 
  iconColor, 
  title, 
  description, 
  features 
}) {
  return (
    <div className="service-card">      
      <div className={`service-card-icon ${iconBg} rounded-full mx-auto mb-6`}>
        <Icon className={`${iconColor} transition-colors`} />
      </div>
      <h3 className="service-card-title text-xl font-bold mb-4 text-gray-900">
        <span className="title-gradient-text title-gradient">{title}</span>
      </h3>
      <p className="service-card-desc text-gray-600 leading-relaxed flex-grow hebrew-text">{description}</p>
      {Array.isArray(features) && features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, idx) => (
            <li key={idx} className="service-feature-item">
              <div className={`feature-dot ${iconBg}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
