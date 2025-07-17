import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./styles/ScanDonorsPage.css";

function getInitials(name) {
  if (!name) return "🩸";
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function ScanDonorsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bloodGroup = location.state?.bloodGroup || "";

  const [scanning, setScanning] = useState(false);
  const [donorsFound, setDonorsFound] = useState([]);
  const [alertStatus, setAlertStatus] = useState("");

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

  const handleSendAlert = async (donor) => {
    setAlertStatus("");
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/send-alert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: donor.email, name: donor.name, bloodgroup: donor.bloodgroup }),
      });
      const data = await response.json();
      if (response.ok) {
        setAlertStatus(`Alert email sent to ${donor.email}`);
      } else {
        setAlertStatus(data.error || "Failed to send alert email.");
      }
    } catch (error) {
      setAlertStatus("Failed to send alert email.");
    }
    setTimeout(() => setAlertStatus(""), 4000);
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
        {/* Hero Section */}
        <div className="scan-hero">
          <span className="scan-hero-icon">🩸</span>
          <h1 className="scan-title">Scan for Donors</h1>
          <p className="scan-subtitle">
            Searching for donors with blood group <strong>{bloodGroup}</strong>.
          </p>
        </div>
        <button className="scan-button" onClick={handleScan} disabled={scanning}>
          {scanning ? (
            <span className="scan-spinner"></span>
          ) : (
            <>
              <span role="img" aria-label="search">🔍</span> Find Nearby Donors
            </>
          )}
        </button>
        {/* Donor List or Empty State */}
        {scanning && (
          <div className="scan-loading-msg">Scanning for donors...</div>
        )}
        {!scanning && donorsFound.length > 0 && (
          <div className="donor-list-grid">
            <h2 className="donor-title">Nearby Donors Found:</h2>
            <div className="donor-grid">
              {donorsFound.map((donor) => (
                <div key={donor._id} className="donor-card">
                  <div className="donor-avatar">{getInitials(donor.name)}</div>
                  <div className="donor-info">
                    <p><strong>Name:</strong> {donor.name}</p>
                    <p><strong>Blood Group:</strong> {donor.bloodgroup}</p>
                    <p><strong>Contact:</strong> {donor.Contact}</p>
                    <p><strong>Gender:</strong> {donor.gender}</p>
                    <p><strong>Email:</strong> {donor.email}</p>
                  </div>
                  <div className="button-group">
                    <button
                      className="alert-button"
                      onClick={() => handleSendAlert(donor)}
                    >
                      <span role="img" aria-label="alert">🚨</span> Send Alert
                    </button>
                    <button
                      className="details-button"
                      onClick={() => viewDetails(donor)}
                    >
                      <span role="img" aria-label="details">👁️</span> View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {!scanning && donorsFound.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">🔎</span>
            <p>No donors found yet. Click "Find Nearby Donors" to scan.</p>
          </div>
        )}
      </div>
      {alertStatus && (
        <div className="alert-status-popup">{alertStatus}</div>
      )}
    </>
  );
}

export default ScanDonorsPage;
