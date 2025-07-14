import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./styles/ScanDonorsPage.css";

function ScanDonorsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bloodGroup = location.state?.bloodGroup || "";

  const [scanning, setScanning] = useState(false);
  const [donorsFound, setDonorsFound] = useState([]);

  const handleScan = async () => {
    setScanning(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/donors`);
      let donors = await response.json();
      if (bloodGroup) {
        donors = donors.filter(donor => donor.bloodgroup === bloodGroup);
      }
      setDonorsFound(donors);
    } catch (error) {
      console.error("Error fetching donors:", error);
      setDonorsFound([]);
    }
    setScanning(false);
  };

  const viewDetails = (donor) => {
    navigate("/donor-details", { state: { donor } });
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
            <Link to="/search" className="navbar-link">
              Search
            </Link>
          </li>
        </ul>
      </nav>

      <div className="scan-container">
      <h1 className="scan-title">Scan for Donors</h1>
      <p className="scan-subtitle">
        Searching for donors with blood group <strong>{bloodGroup}</strong>.
      </p>
      <button className="scan-button" onClick={handleScan} disabled={scanning}>
        {scanning ? "Scanning..." : "Find Nearby Donors"}
      </button>
      {donorsFound.length > 0 && (
        <div className="donor-list">
          <h2 className="donor-title">Nearby Donors Found:</h2>
          <ul>
            {donorsFound.map((donor) => (
              <li key={donor._id} className="donor-item">
                <p><strong>Name:</strong> {donor.name}</p>
                <p><strong>Blood Group:</strong> {donor.bloodgroup}</p>
                <p><strong>Contact:</strong> {donor.Contact}</p>
                <p><strong>Gender:</strong> {donor.gender}</p>
                <p><strong>Email:</strong> {donor.email}</p>
                <div className="button-group">
                  <button
                    className="alert-button"
                    onClick={() => alert(`Alert sent to ${donor.name}!`)}
                  >
                    Send Alert
                  </button>
                  <button
                    className="details-button"
                    onClick={() => viewDetails(donor)}
                  >
                    View Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
}

export default ScanDonorsPage;
