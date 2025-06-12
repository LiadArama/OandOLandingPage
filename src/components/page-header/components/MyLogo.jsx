import logo from "../../../oAndOLogo.png";
import '../styles/MyLogo.style.css'; // Importing the CSS file for styling

function MyLogo(){
      return (
        <div className="my-logo-container fade-in-bottom" style={{ '--fade-duration': '2s' , 'animationDelay': '0.3s' }}>
          <header className="my-logo-header">
            <img src={logo} className="my-logo-image" alt="O&O - Digital Future" />
          </header>
        </div>
      );
    }

export default MyLogo;
// This component displays the O&O logo in a header.