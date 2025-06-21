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

function LogoCarousel() {
    // Repeat the logos array to make it continuous loop visually
    const repeatedLogos = [...logos, ...logos]; // repeat twice for seamless loop

    return (
        <div className="carousel-wrapper">
            <div className="carousel-track">
                {repeatedLogos.map((logo, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={logo.src} alt={logo.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogoCarousel;
