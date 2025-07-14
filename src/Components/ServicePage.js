import { Link, useNavigate } from "react-router-dom";
import "./styles/ServicePage.css";

function ServicePage() {
  const navigate = useNavigate();

  return (
    <div className="servicepage-container">
      <div className="servicepage-navbar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_im6HqBTnUY5lSDO3zEYCaEyMTeMsGcZeFjq0_7AZsOyjlWpggkq3wp56RWoPhe2tbck&usqp=CAU"
          alt="Logo"
          className="servicepage-logo"
        />
        <ul className="servicepage-menu">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/">Log out</Link></li>
        </ul>
      </div>
      <h1 className="servicepage-title">Explore Our Services</h1>
      <div className="servicepage-list">
        <div className="servicepage-item">
          <h2>Donate Blood</h2>
          <p>Click Below For The Blood Donation and Save Lives</p>
          <button onClick={() => navigate("/donate")}>Donate</button>
        </div>
        <div className="servicepage-item">
          <h2>Request Blood</h2>
          <p>Click Below To Request Blood in Case of Emergency</p>
          <button onClick={() => navigate("/request")}>Request</button>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
