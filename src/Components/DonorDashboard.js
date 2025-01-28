import { Link, useLocation } from "react-router-dom";
import "./styles/DonorDashboard.css";

function DonorDashboard() {
  const location = useLocation();
  const donor = location.state?.donor;

  if (!donor) {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo">RedPrime</Link>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/donor-registration" className="navbar-link">
                Register Donor
              </Link>
            </li>
            <li>
              <Link to="/donate" className="navbar-link">
                Donate Page
              </Link>
            </li>
          </ul>
        </nav>
        <div className="dashboard-container">No donor details available.</div>
      </>
    );
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">RedPrime</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/donor-registration" className="navbar-link">
              Register Donor
            </Link>
          </li>
          <li>
            <Link to="/donate" className="navbar-link">
              Donate Page
            </Link>
          </li>
        </ul>
      </nav>

      {/* Donor Dashboard */}
      <div className="dashboard-container">
        <h1 className="dashboard-title">Welcome, {donor.name}</h1>
        <div className="dashboard-card">
          <h2>Your Details</h2>
          <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
          <p><strong>Age:</strong> {donor.age}</p>
          <p><strong>Mobile:</strong> {donor.mobile}</p>
          <p><strong>Location:</strong> {donor.location}</p>
          <p><strong>Health History:</strong> {donor.healthHistory}</p>
          <p><strong>Email:</strong> {donor.email}</p>
        </div>
        <button className="dashboard-button">Update Details</button>
        <button className="dashboard-button alert-button">Send Alert</button>
      </div>
    </>
  );
}

export default DonorDashboard;
