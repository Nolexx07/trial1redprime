import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-nav">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_im6HqBTnUY5lSDO3zEYCaEyMTeMsGcZeFjq0_7AZsOyjlWpggkq3wp56RWoPhe2tbck&usqp=CAU"
          alt="Logo"
          className="home-logo"
        />
        <ul className="home-nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/">Log out</Link></li>
        </ul>
      </div>
      <div className="home-slogan-section">
        <h1 className="home-slogan">Red Prime - Be a Hero, Be a Donor</h1>
        <p className="home-slogan-text">
          Every drop counts! Donating blood is a simple yet powerful act that can save lives. Join us in the noble cause of ensuring a steady supply of blood for those in need.
        </p>
      </div>
    </div>
  );
}

export default Home;