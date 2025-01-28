import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/SearchPage.css";

function SearchPage() {
  const [bloodGroup, setBloodGroup] = useState(""); // State to store the selected blood group
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bloodGroup) {
      // Navigate to the ScanDonorsPage with the selected blood group as state
      navigate("/scan-donors", { state: { bloodGroup } });
    } else {
      alert("Please select a blood group!");
    }
  };

  return (
    <>
     {/* Navigation Bar */}
     <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">RedPrime</Link>
        </div>
        <ul className="navbar-links">
        <li>
            <Link to="/service" className="navbar-link">
              Service
            </Link>
          </li>
          <li>
            <Link to="/request" className="navbar-link">
              Request Page
            </Link>
          </li>
        </ul>
      </nav>


      <div className="search-container">
      <div className="search-wrapper">
        <form onSubmit={handleSubmit}>
          <h2 className="search-title">Search Engine</h2>
          <div className="input-box">
            <label htmlFor="bloodGroup">Select your blood group:</label>
            <select
              id="bloodGroup"
              name="bloodgroup"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              required
            >
              <option value="" disabled>
                -- Select Blood Group --
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
    </>

  );
}

export default SearchPage;
