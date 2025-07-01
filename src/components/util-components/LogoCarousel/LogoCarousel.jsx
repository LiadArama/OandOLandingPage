import {motion} from 'framer-motion';
import "./LogoCarousel.style.css";
function importAll(r) {
    return r.keys().map((item) => ({
        name: item.replace('./', '').replace(/\.(png|jpe?g|webp)$/i, ''),
        src: r(item),
    }));
}

const logos = importAll(
    require.context('../../../assets/logos', false, /\.(png|jpe?g|webp)$/)
);

function LogoCarousel({ isVisible }, backgroundColor) {
    // Repeat the logos array to make it continuous loop visually
    const repeatedLogos = [...logos, ...logos]; // repeat twice for seamless loop
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="carousel-wrapper"
            style={{ backgroundColor }}
        >

            <div className="carousel-track">
                {repeatedLogos.map((logo, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={logo.src} alt={logo.name} />
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default LogoCarousel;
