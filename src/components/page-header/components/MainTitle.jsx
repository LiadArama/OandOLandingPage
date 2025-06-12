import '../styles/MainTitle.style.css'; // Importing the CSS file for styling
function MainTitle() {
  return (
    <>
      <section  className="section main-title">
        <h1 id="mainTitle" className="fade-in-bottom" style={{ '--fade-duration': '2s', 'animationDelay': '0.5s' }}>
          We Build The Digital Future
        </h1>
      </section>
      
    </>
  );
}

export default MainTitle;